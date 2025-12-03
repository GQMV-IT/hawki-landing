import { Loader } from '@/components/ui/icons/Loader';

interface ProfileAnalysisResultProps {
  analysis: string;
  isStreaming: boolean;
}

export default function ProfileAnalysisResult({
  analysis,
  isStreaming,
}: ProfileAnalysisResultProps) {
  return (
    <div className="max-w-4xl mx-auto">
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

