import { InstagramUserInfo } from '@/services';
import { Loader  } from '@/components/ui/icons/Loader';

interface ProfileAnalysisResultProps {
    userInfo: InstagramUserInfo;
    analysis: string;
    isStreaming: boolean;
}

export default function ProfileAnalysisResult({
    userInfo,
    analysis,
    isStreaming,
}: ProfileAnalysisResultProps) {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Profile Header - Simple */}
            <div className="text-center mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-center gap-3 mb-3">
                    {userInfo.profile_pic_url && (
                        <img 
                            src={`/api/proxy-image?url=${encodeURIComponent(userInfo.profile_pic_url)}`}
                            alt={userInfo.username}
                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    )}
                    <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-900">
                            @{userInfo.username}
                            {userInfo.is_verified && <span className="ml-1 text-sm">✅</span>}
                        </h3>
                        <p className="text-sm text-gray-600">{userInfo.full_name}</p>
                    </div>
                </div>
                
                {/* Stats Badges - Smaller */}
                <div className="flex justify-center gap-3 text-xs text-gray-600">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                        <strong className="text-gray-900">{userInfo.follower_count.toLocaleString()}</strong> seguidores
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                        <strong className="text-gray-900">{userInfo.media_count}</strong> posts
                    </span>
                </div>
            </div>

            {/* AI Analysis with Colorful Border */}
            <div 
                className="rounded-2xl p-8 shadow-xl relative overflow-hidden"
                style={{ 
                    background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(93, 214, 213, 0.05))',
                    border: '3px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #655cb1, #659fcf, #5dd6d5)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}
            >
                {isStreaming && (
                    <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-white shadow-md border-l-4" style={{ borderLeftColor: '#659fcf' }}>
                        <Loader className="w-6 h-6 animate-spin" />
                        <span className="font-semibold" style={{ color: '#655cb1' }}>Gerando análise personalizada...</span>
                    </div>
                )}

                {/* Streaming Text */}
                <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed">
                    {analysis}
                    {isStreaming && (
                        <span 
                            className="inline-block w-2 h-6 animate-pulse ml-1 rounded"
                            style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

