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

/**
 * Analyze Instagram profile with AI streaming response
 * @param userInfo Instagram user info object
 * @param onChunk Callback function to handle each text chunk
 * @returns Promise that resolves when streaming is complete
 */
export const analyzeProfileWithAI = async (
  userInfo: InstagramUserInfo,
  onChunk: (text: string) => void,
): Promise<void> => {
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
    hasBioLinks: userInfo.bio_links?.length || 0 > 0,
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

  Foque em explicar como a Hawki pode ajudar, sem falar em pontos de melhoria específicos.
  Sua resposta deve ser curta e nao deve conter emojis ou markdown.

  Seja direto, profissional e específico para a situação deste perfil odontológico.`;

  try {
    const response = await fetch('/api/text/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system: "Você é um consultor especialista em marketing digital da Hawki, uma agência de performance focada em clínicas odontológicas. Forneça um texto curto em português brasileiro explicando como a Hawki pode ajudar esta clínica a aumentar o faturamento através de marketing de performance e tráfego pago. Não use emojis, não use markdown e não faça o texto maior que 120 palavras. Seja profissional, direto e focado em resultados concretos para clínicas odontológicas.",
        prompt,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to analyze profile');
    }

    // Handle streaming response
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('No response body');
    }

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      onChunk(chunk);
    }

  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to analyze profile with AI');
  }
}