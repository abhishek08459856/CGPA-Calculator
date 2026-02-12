import { Degree } from "@/core/types";

interface Props {
  degree: Degree;
  setDegree: (d: Degree) => void;
}

export default function DegreeToggle({ degree, setDegree }: Props) {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 px-4">
  <div className="relative flex w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] bg-[#0B0B0F] border border-white/10 rounded-full overflow-hidden">

    {/* Sliding Indicator */}
    <div
      className={`absolute inset-y-0 left-0 w-1/2 bg-purple-500/20 border border-purple-400 rounded-full transition-transform duration-300 ${
        degree === "ES" ? "translate-x-full" : ""
      }`}
    />

    {/* DS */}
    <button
      onClick={() => setDegree("DS")}
      className={`relative z-10 w-1/2 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition whitespace-nowrap ${
        degree === "DS"
          ? "text-purple-400"
          : "text-gray-400"
      }`}
    >
      BS Data Science
    </button>

    {/* ES */}
    <button
      onClick={() => setDegree("ES")}
      className={`relative z-10 w-1/2 py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition whitespace-nowrap ${
        degree === "ES"
          ? "text-purple-400"
          : "text-gray-400"
      }`}
    >
      BS Electronic Systems
    </button>

  </div>
</div>

  );
}
