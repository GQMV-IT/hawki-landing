import { api } from '@/lib/axios';

export interface InstagramUserInfo {
  pk: string;
  pk_id: string;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified: boolean;
  media_count: number;
  follower_count: number;
  following_count: number;
  following_tag_count?: number;
  biography: string;
  external_url?: string;
  external_lynx_url?: string;
  total_igtv_videos?: number;
  has_igtv_series?: boolean;
  has_videos?: boolean;
  total_clips_count?: number;
  has_highlight_reels?: boolean;
  has_guides?: boolean;
  is_business?: boolean;
  account_type?: number;
  public_email?: string;
  public_phone_number?: string;
  public_phone_country_code?: string;
  contact_phone_number?: string;
  whatsapp_number?: string;
  business_contact_method?: string;
  category?: string | null;
  city_name?: string;
  address_street?: string;
  bio_links?: Array<{
    link_id: string;
    url: string;
    lynx_url: string;
    link_type: string;
    title: string;
  }>;
  hd_profile_pic_url_info?: {
    url: string;
    width: number;
    height: number;
  };
  is_favorite?: boolean;
  is_memorialized?: boolean;
  has_music_on_profile?: boolean;
  has_nft_posts?: boolean;
  transparency_product_enabled?: boolean;
}

export interface InstagramApiResponse {
  result: Array<{
    user: InstagramUserInfo;
    status: string;
  }>;
}

/**
 * Get Instagram user information via secure API proxy
 * @param username Instagram username (without @)
 * @returns User profile data
 */
export const getUserInfo = async (username: string): Promise<InstagramUserInfo> => {
  try {
    // Call our secure Next.js API route (not RapidAPI directly)
    const response = await api.post<InstagramApiResponse>('/instagram/user-info', {
      username,
    });

    // API returns { result: [{ user: {...}, status: "ok" }] }
    if (!response.data?.result || response.data.result.length === 0) {
        throw new Error('Profile not found or invalid API response');
    }

    const firstResult = response.data.result[0];
    if (!firstResult.user) {
        throw new Error('Invalid API response');
    }

    return firstResult.user;

  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to fetch profile information');
  }
};
