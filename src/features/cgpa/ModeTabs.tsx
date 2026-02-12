import { Mode } from "@/core/types";

interface Props {
  mode: Mode;
  setMode: (m: Mode) => void;
}

export default function ModeTabs({ mode, setMode }: Props) {
  const getTranslateClass = () => {
    if (mode === "ongoing") return "translate-x-full";
    if (mode === "future") return "translate-x-[200%]";
    return "";
  };

  return (
    <div className="flex justify-center mb-6 px-2 sm:px-4">
      <div className="relative flex w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] bg-[#0B0B0F] border border-white/10 rounded-full overflow-hidden">

        {/* Sliding Indicator */}
        <div
          className={`absolute inset-y-0 left-0 w-1/3 bg-purple-500/20 transition-transform duration-300 ${
            getTranslateClass()
          }`}
        />

        <button
          onClick={() => setMode("current")}
          className={`relative z-10 w-1/3 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition whitespace-nowrap ${
            mode === "current"
              ? "text-purple-400"
              : "text-gray-400"
          }`}
        >
          Current
        </button>

        <button
          onClick={() => setMode("ongoing")}
          className={`relative z-10 w-1/3 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition whitespace-nowrap ${
            mode === "ongoing"
              ? "text-purple-400"
              : "text-gray-400"
          }`}
        >
          Ongoing
        </button>

        <button
          onClick={() => setMode("future")}
          className={`relative z-10 w-1/3 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition whitespace-nowrap ${
            mode === "future"
              ? "text-purple-400"
              : "text-gray-400"
          }`}
        >
          Future
        </button>

      </div>
    </div>

  );
}
