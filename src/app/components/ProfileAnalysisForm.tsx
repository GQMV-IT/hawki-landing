import { Loader } from "@/components/ui/icons/Loader";
import { AtSign, ChevronRight, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

interface ProfileAnalysisFormProps {
    username: string;
    isAnalyzing: boolean;
    error: string | null;
    onUsernameChange: (username: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function ProfileAnalysisForm({
    username,
    isAnalyzing,
    error,
    onUsernameChange,
    onSubmit,
}: ProfileAnalysisFormProps) {
    return (
        <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Análise de Perfil
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #655cb1, #5dd6d5)'}}></div>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Descubra o potencial do seu perfil no Instagram e receba insights personalizados para crescer sua presença online
            </p>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <AtSign className="w-6 h-6 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => onUsernameChange(e.target.value)}
                        placeholder="Digite seu @ do Instagram"
                        className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 border-2 rounded-xl focus:outline-none transition-all duration-200"
                        style={{
                            borderColor: username ? '#659fcf' : '#d1d5db'
                        }}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isAnalyzing || !username}
                    className="w-full py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{background: 'linear-gradient(to right, #655cb1, #659fcf)'}}
                >
                    {isAnalyzing ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader className="w-5 h-5 animate-spin" style={{ color: '#ffffff' }} />
                            Analisando...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Analisar Meu Perfil
                            <ChevronRight className="w-5 h-5" />
                        </span>
                    )}
                </button>
            </form>

            {/* Error Message */}
            {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-medium">{error}</p>
                </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    100% Gratuito
                </div>
                <div className="flex items-center gap-2">
                    <LockKeyhole className="w-5 h-5 text-green-500" />
                    Seguro e Privado
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-500" />
                    Resultados Instantâneos
                </div>
            </div>
        </div>
    );
}

