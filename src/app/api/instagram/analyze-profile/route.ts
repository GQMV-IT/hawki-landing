import { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userInfo } = body;

    if (!userInfo) {
      return new Response(
        JSON.stringify({ error: 'User info is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if RapidAPI key is configured
    if (!process.env.RAPIDAPI_KEY) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract key data from user info
    const profileData = {
      username: userInfo.username,
      fullName: userInfo.full_name,
      followers: userInfo.follower_count,
      following: userInfo.following_count,
      posts: userInfo.media_count,
      isVerified: userInfo.is_verified,
      isPrivate: userInfo.is_private,
      isBusiness: userInfo.is_business,
      biography: userInfo.biography,
      hasExternalUrl: !!userInfo.external_url,
      hasBioLinks: userInfo.bio_links?.length > 0,
      hasContact: !!(userInfo.whatsapp_number || userInfo.public_phone_number || userInfo.public_email),
      hasHighlights: userInfo.has_highlight_reels,
      totalClips: userInfo.total_clips_count || 0,
    };

    // Calculate metrics
    const followRatio = profileData.following > 0 
      ? (profileData.followers / profileData.following).toFixed(2)
      : 'N/A';

    // Create prompt for LLM
    const prompt = `You are an expert Instagram marketing consultant. Analyze this Instagram profile and provide a short text in Portuguese (Brazilian) explaining the benefits of hiring your company.

Profile Data:
- Username: @${profileData.username}
- Name: ${profileData.fullName}
- Followers: ${profileData.followers.toLocaleString()}
- Following: ${profileData.following.toLocaleString()}
- Posts: ${profileData.posts}
- Follow Ratio: ${followRatio}
- Verified: ${profileData.isVerified ? 'Yes' : 'No'}
- Private: ${profileData.isPrivate ? 'Yes (🔒)' : 'No (Public)'}
- Business Account: ${profileData.isBusiness ? 'Yes' : 'No'}
- Has Bio Links: ${profileData.hasBioLinks ? 'Yes' : 'No'}
- Has Contact Info: ${profileData.hasContact ? 'Yes' : 'No'}
- Has Story Highlights: ${profileData.hasHighlights ? 'Yes' : 'No'}
- Reels Count: ${profileData.totalClips}
- Biography: "${profileData.biography || 'No bio'}"

Format your response in a clear, professional manner. Be direct, actionable, and specific to this profile's situation.`;

    // Call RapidAPI ChatGPT endpoint
    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/gpt4',
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: 'system',
            content: 'You are an expert Instagram marketing consultant who provides a short text in Portuguese (Brazilian) explaining how hiring your company can benefit the profile. Don\'t use emojis, don\'t use markdown and don\'t make the text longer than 100 words.',
          },
          {
            role: 'user',
            content: prompt,
          }
        ],
        web_access: false
      }
    };

    const response = await axios.request(options);
    const aiResponse = response.data.result || response.data.content || response.data;

    // Simulate streaming by sending the response in chunks
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const text = typeof aiResponse === 'string' ? aiResponse : JSON.stringify(aiResponse);

        // Stream text word by word for smooth animation
        const words = text.split(' ');

        try {
          for (let i = 0; i < words.length; i++) {
            const chunk = i === words.length - 1 ? words[i] : words[i] + ' ';
            controller.enqueue(encoder.encode(chunk));

            // Small delay between words for smooth streaming effect
            await new Promise(resolve => setTimeout(resolve, 30));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Profile analysis error:', error);

    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to analyze profile' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

