import { InstagramUserInfo } from '@/services';

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
            {/* Profile Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                    {userInfo.profile_pic_url && (
                        <img 
                            src={`/api/proxy-image?url=${encodeURIComponent(userInfo.profile_pic_url)}`}
                            alt={userInfo.username}
                            className="w-16 h-16 rounded-full border-2"
                            style={{ borderColor: '#659fcf' }}
                            onError={(e) => {
                                // If image fails to load, hide it
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    )}
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900">
                            @{userInfo.username}
                            {userInfo.is_verified && <span className="ml-2">✅</span>}
                        </h3>
                        <p className="text-gray-600">{userInfo.full_name}</p>
                    </div>
                </div>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                    <div><strong>{userInfo.follower_count.toLocaleString()}</strong> seguidores</div>
                    <div><strong>{userInfo.media_count}</strong> posts</div>
                </div>
            </div>

            {/* AI Analysis */}
            <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-start mb-6">
                    {isStreaming && (
                        <div className="flex items-center gap-2 text-blue-600">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-sm">Analisando...</span>
                        </div>
                    )}
                </div>

                {/* Streaming Text */}
                <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap">
                    {analysis}
                    {isStreaming && <span className="inline-block w-2 h-5 bg-blue-600 animate-pulse ml-1"></span>}
                </div>
            </div>
        </div>
    );
}

