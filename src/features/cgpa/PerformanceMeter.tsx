interface Props {
  cgpa: number;
}

export default function PerformanceMeter({ cgpa }: Props) {
  const percentage = (cgpa / 10) * 100;

  function getPerformance() {
    if (cgpa >= 9)
      return { label: "Excellent", color: "text-emerald-400", stroke: "#10B981" };
    if (cgpa >= 8)
      return { label: "Very Good", color: "text-blue-400", stroke: "#3B82F6" };
    if (cgpa >= 7)
      return { label: "Good", color: "text-yellow-400", stroke: "#FACC15" };
    if (cgpa >= 6)
      return { label: "Average", color: "text-orange-400", stroke: "#FB923C" };

    return { label: "Needs Improvement", color: "text-red-400", stroke: "#EF4444" };
  }

  const performance = getPerformance();

  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 160 160">
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#1F2937"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke={performance.stroke}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.6s ease",
          }}
          transform="rotate(-90 80 80)"
        />

        {/* CGPA Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-lg sm:text-xl font-bold"
        >
          {cgpa.toFixed(2)}
        </text>
      </svg>

      <p className={`mt-2 sm:mt-3 text-xs sm:text-sm font-semibold ${performance.color}`}>
        {performance.label}
      </p>
    </div>
  );
}
