import PerformanceMeter from "./performancemeter";
import { Mode } from "@/core/types";

interface Props {
  currentCGPA: number;
  predictedCGPA?: number;
  totalCompletedCredits: number;
  totalOngoingCredits?: number;
  mode: Mode;
  completedCount: number;
  plannedCount: number;
}

export default function ResultPanel({
  currentCGPA,
  predictedCGPA,
  totalCompletedCredits,
  totalOngoingCredits = 0,
  mode,
  completedCount,
  plannedCount,
}: Props) {
  const delta =
    predictedCGPA !== undefined
      ? Number((predictedCGPA - currentCGPA).toFixed(2))
      : 0;

  return (
    <div className="bg-[#0B0B0F] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
      <h2 className="text-xs sm:text-sm uppercase tracking-wide text-purple-400 mb-4 sm:mb-6">
        CGPA Overview
      </h2>

      {totalCompletedCredits > 0 ? (
        <div className="flex justify-center mb-6">
          <PerformanceMeter cgpa={currentCGPA} />
        </div>
      ) : (
        <div className="flex justify-center mb-6 py-8">
          <p className="text-gray-500 text-center">
            Add subjects to calculate CGPA
          </p>
        </div>
      )}

      {/* Totals Section */}
      <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 space-y-2 sm:space-y-3">
        <h3 className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400 mb-2">Summary</h3>
        
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm text-gray-400">Completed</span>
          <span className="font-semibold text-xs sm:text-sm text-emerald-400">
            {completedCount} subjects ({totalCompletedCredits} credits)
          </span>
        </div>

        {mode === "ongoing" && plannedCount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-400">Ongoing</span>
            <span className="font-semibold text-xs sm:text-sm text-blue-400">
              {plannedCount} subjects ({totalOngoingCredits} credits)
            </span>
          </div>
        )}

        {mode === "future" && plannedCount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-400">Future</span>
            <span className="font-semibold text-xs sm:text-sm text-purple-400">
              {plannedCount} subjects ({totalOngoingCredits} credits)
            </span>
          </div>
        )}

        <div className="border-t border-white/10 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm font-semibold text-gray-300">Total</span>
            <span className="font-bold text-xs sm:text-sm text-white">
              {completedCount + (mode !== "current" ? plannedCount : 0)} subjects
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-gray-400 space-y-2">

        {predictedCGPA !== undefined && totalOngoingCredits > 0 && (
          <>
            <div className="border-t border-white/10 pt-4 mt-4">
              <p className="text-center text-xs uppercase tracking-wide text-gray-400 mb-3">
                {mode === "ongoing" ? "Projected CGPA (with Ongoing)" : "Projected CGPA (with Future)"}
              </p>

              <div className="flex justify-center mt-4">
                <PerformanceMeter cgpa={predictedCGPA} />
              </div>

              <p
                className={`mt-3 font-medium text-center ${
                  delta >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                Change: {delta >= 0 ? "+" : ""}
                {delta}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
