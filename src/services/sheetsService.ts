import { InstagramUserInfo } from './instagramService';

interface SheetSubmissionData {
  name: string;
  phone: string;
  instagram: string;
  instagramInfo?: InstagramUserInfo | null;
}

/**
 * Sends user data to Google Sheets via the API route.
 * This function is fire-and-forget - it won't throw errors to avoid blocking the user flow.
 */
export async function sendToGoogleSheet(data: SheetSubmissionData): Promise<boolean> {
  try {
    const response = await fetch('/api/sheets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone.replace(/^\+/, ''),
        instagram: data.instagram,
        followers: data.instagramInfo?.follower_count,
        following: data.instagramInfo?.following_count,
        posts: data.instagramInfo?.media_count,
        biography: data.instagramInfo?.biography,
        isVerified: data.instagramInfo?.is_verified,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send data to Google Sheet:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending data to Google Sheet:', error);
    return false;
  }
}
