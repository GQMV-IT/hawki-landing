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

      
  // Create prompt for LLM with new approach focused on urgency and AI
  const prompt = `Crie uma mensagem curta, provocativa e personalizada, destinada a donos de clínicas ou médicos (dentistas, dermatologistas, esteticistas etc.) com base nas informações do perfil do Instagram.

  OBJETIVO: Despertar consciência sobre o atraso tecnológico no atendimento ao paciente, mostrando como o uso de uma IA pode substituir a CRC tradicional e transformar o processo de agendamento e conversão de leads.

  Dados do Perfil:
  - Username: @${profileData.username}
  - Nome: ${profileData.fullName}
  - Seguidores: ${profileData.followers.toLocaleString()}
  - Tipo de conta: ${profileData.isBusiness ? "Clínica" : "Profissional"}
  - Biografia: "${profileData.biography || "Sem biografia"}"

  INSTRUÇÕES:
  1. Se o perfil for de um médico, use "você" e destaque o nome pessoal
  2. Se o perfil for de uma clínica, destaque o nome da clínica e use "sua equipe"
  3. Use tom direto, consultivo e levemente provocativo, mas mantendo respeito profissional
  4. A linguagem deve ser simples, clara e com senso de urgência
  5. Mencione: dependência de indicações, IA para automatizar agendamentos, e concorrência usando tecnologia
  6. Máximo de 650 caracteres
  7. Termine com uma pergunta provocativa sobre tomar controle do crescimento
  8. NÃO use emojis, NÃO use markdown

  Seja direto e focado em urgência e transformação através de IA.`;

  try {
    const response = await fetch('/api/text/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system: "Você é um consultor especialista em IA para clínicas da Hawki. Crie mensagens provocativas e urgentes sobre como IA pode substituir atendimento manual e aumentar conversões. Use tom direto, consultivo e levemente provocativo. NÃO use emojis. NÃO use markdown. Máximo 650 caracteres. Foque em urgência, concorrência usando IA, e dependência de indicações vs automação inteligente.",
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