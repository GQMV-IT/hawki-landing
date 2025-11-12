import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userInfo } = body;

    if (!userInfo) {
      return new Response(JSON.stringify({ error: "User info is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if RapidAPI key is configured
    if (!process.env.RAPIDAPI_KEY) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
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
      hasContact: !!(
        userInfo.whatsapp_number ||
        userInfo.public_phone_number ||
        userInfo.public_email
      ),
      hasHighlights: userInfo.has_highlight_reels,
      totalClips: userInfo.total_clips_count || 0,
    };

    // Calculate metrics
    const followRatio =
      profileData.following > 0
        ? (profileData.followers / profileData.following).toFixed(2)
        : "N/A";

    // Create prompt for LLM
    const prompt = `Você é um consultor especialista em marketing digital para clínicas odontológicas da Hawki, uma agência focada em marketing de performance para dentistas.

Analise este perfil do Instagram e forneça um texto curto em português brasileiro explicando como a Hawki pode ajudar esta clínica a transformar seus seguidores em pacientes reais e aumentar o faturamento através de estratégias de tráfego pago e conversão.

Dados do Perfil:
- Username: @${profileData.username}
- Nome: ${profileData.fullName}
- Seguidores: ${profileData.followers.toLocaleString()}
- Seguindo: ${profileData.following.toLocaleString()}
- Posts: ${profileData.posts}
- Proporção de Seguidores: ${followRatio}
- Verificado: ${profileData.isVerified ? "Sim" : "Não"}
- Privado: ${profileData.isPrivate ? "Sim (🔒)" : "Não (Público)"}
- Conta Comercial: ${profileData.isBusiness ? "Sim" : "Não"}
- Tem Links na Bio: ${profileData.hasBioLinks ? "Sim" : "Não"}
- Tem Informações de Contato: ${profileData.hasContact ? "Sim" : "Não"}
- Tem Destaques de Stories: ${profileData.hasHighlights ? "Sim" : "Não"}
- Quantidade de Reels: ${profileData.totalClips}
- Biografia: "${profileData.biography || "Sem biografia"}"

Foque em:
1. Identificar pontos de melhoria específicos para clínicas odontológicas
2. Como a Hawki pode otimizar o perfil para conversão de pacientes
3. Potencial de crescimento através de tráfego pago
4. Estratégias específicas de marketing de performance para odontologia

Seja direto, profissional e específico para a situação deste perfil odontológico.`;

    // Call RapidAPI ChatGPT endpoint
    const options = {
      method: "POST",
      url: "https://chatgpt-42.p.rapidapi.com/gpt4",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        messages: [
          {
            role: "system",
            content:
              "Você é um consultor especialista em marketing digital da Hawki, uma agência de performance focada em clínicas odontológicas. Forneça um texto curto em português brasileiro explicando como a Hawki pode ajudar esta clínica a aumentar o faturamento através de marketing de performance e tráfego pago. Não use emojis, não use markdown e não faça o texto maior que 120 palavras. Seja profissional, direto e focado em resultados concretos para clínicas odontológicas.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        web_access: false,
      },
    };

    const response = await axios.request(options);
    const aiResponse =
      response.data.result || response.data.content || response.data;

    // Simulate streaming by sending the response in chunks
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const text =
          typeof aiResponse === "string"
            ? aiResponse
            : JSON.stringify(aiResponse);

        // Stream text word by word for smooth animation
        const words = text.split(" ");

        try {
          for (let i = 0; i < words.length; i++) {
            const chunk = i === words.length - 1 ? words[i] : words[i] + " ";
            controller.enqueue(encoder.encode(chunk));

            // Small delay between words for smooth streaming effect
            await new Promise((resolve) => setTimeout(resolve, 30));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Profile analysis error:", error);

    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Failed to analyze profile",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
