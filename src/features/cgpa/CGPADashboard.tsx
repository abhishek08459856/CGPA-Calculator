"use client";

import { useState, useEffect } from "react";
import { Degree, Mode, CourseEntry } from "@/core/types";
import { calculateCGPA } from "@/core/cgpa";
import { dsSubjects } from "@/data/dssubjects";
import { esSubjects } from "@/data/essubjects";
import DegreeToggle from "./DegreeToggle";
import ModeTabs from "./ModeTabs";
import CourseRow from "./CourseRow";
import ResultPanel from "./ResultPanel";

export default function CGPADashboard() {
  const [degree, setDegree] = useState<Degree>("DS");
  const [mode, setMode] = useState<Mode>("current");

  const [completedCourses, setCompletedCourses] = useState<CourseEntry[]>([
    {
      id: crypto.randomUUID(),
      subjectId: "",
      credits: 0,
      grade: "" as any,
    },
    {
      id: crypto.randomUUID(),
      subjectId: "",
      credits: 0,
      grade: "" as any,
    },
  ]);
  const [plannedCourses, setPlannedCourses] = useState<CourseEntry[]>([]);

  // Clear planned courses when switching modes
  useEffect(() => {
    setPlannedCourses([]);
  }, [mode]);

  // Clear all courses when switching degrees
  useEffect(() => {
    setCompletedCourses([
      {
        id: crypto.randomUUID(),
        subjectId: "",
        credits: 0,
        grade: "" as any,
      },
      {
        id: crypto.randomUUID(),
        subjectId: "",
        credits: 0,
        grade: "" as any,
      },
    ]);
    setPlannedCourses([]);
  }, [degree]);

  const subjects =
    degree === "DS" ? dsSubjects : esSubjects;

  // Get already selected subject IDs
  const selectedCompletedIds = completedCourses
    .map(c => c.subjectId)
    .filter(id => id !== "");
  
  const selectedPlannedIds = plannedCourses
    .map(c => c.subjectId)
    .filter(id => id !== "");

  function addCompleted() {
    setCompletedCourses([
      ...completedCourses,
      {
        id: crypto.randomUUID(),
        subjectId: "",
        credits: 0,
        grade: "" as any,
      },
    ]);
  }

  function addPlanned() {
    setPlannedCourses([
      ...plannedCourses,
      {
        id: crypto.randomUUID(),
        subjectId: "",
        credits: 0,
        grade: "" as any,
      },
    ]);
  }

  const currentCGPA = calculateCGPA(completedCourses);

  const projectedCGPA =
    mode === "ongoing" || mode === "future"
      ? calculateCGPA([
          ...completedCourses,
          ...plannedCourses,
        ])
      : undefined;

  const totalCompletedCredits = completedCourses.reduce(
    (sum, c) => sum + c.credits,
    0
  );

  const totalPlannedCredits = plannedCourses.reduce(
    (sum, c) => sum + c.credits,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pb-8 sm:pb-10">
      <DegreeToggle degree={degree} setDegree={setDegree} />

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-[#0B0B0F] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-xl">

          <ModeTabs mode={mode} setMode={setMode} />

          {/* Completed Section */}
          <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-xs sm:text-sm md:text-base">
            Completed Subjects
          </h3>

          {/* Table Headers */}
          {completedCourses.length > 0 && (
            <div className="hidden md:grid md:grid-cols-12 gap-3 items-center mb-2 px-1">
              <div className="md:col-span-6 text-sm font-medium text-gray-400 text-center">
                Subject
              </div>
              <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                Credits
              </div>
              <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                Grade
              </div>
              <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                Action
              </div>
            </div>
          )}

          {completedCourses.map((course) => (
            <CourseRow
              key={course.id}
              course={course}
              subjects={subjects}
              excludeIds={selectedCompletedIds.filter(id => id !== course.subjectId)}
              onChange={(updated) =>
                setCompletedCourses((prev) =>
                  prev.map((c) =>
                    c.id === updated.id ? updated : c
                  )
                )
              }
              onRemove={() =>
                setCompletedCourses((prev) =>
                  prev.filter((c) => c.id !== course.id)
                )
              }
            />
          ))}

          <button
            onClick={addCompleted}
            className="bg-purple-600 hover:bg-purple-700 transition px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-white font-medium shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            Add Completed Subject
          </button>

          {/* Ongoing / Future Section */}
          {(mode === "ongoing" || mode === "future") && (
            <>
              <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-xs sm:text-sm md:text-base">
                {mode === "ongoing"
                  ? "Ongoing Subjects (Expected Grades)"
                  : "Future Subjects (Hypothetical)"}
              </h3>

              {/* Table Headers */}
              {plannedCourses.length > 0 && (
                <div className="hidden md:grid md:grid-cols-12 gap-3 items-center mb-2 px-1">
                  <div className="md:col-span-6 text-sm font-medium text-gray-400 text-center">
                    Subject
                  </div>
                  <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                    Credits
                  </div>
                  <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                    Grade
                  </div>
                  <div className="md:col-span-2 text-sm font-medium text-gray-400 text-center">
                    Action
                  </div>
                </div>
              )}

              {plannedCourses.map((course) => (
                <CourseRow
                  key={course.id}
                  course={course}
                  subjects={subjects}
                  excludeIds={[...selectedCompletedIds, ...selectedPlannedIds.filter(id => id !== course.subjectId)]}
                  onChange={(updated) =>
                    setPlannedCourses((prev) =>
                      prev.map((c) =>
                        c.id === updated.id
                          ? updated
                          : c
                      )
                    )
                  }
                  onRemove={() =>
                    setPlannedCourses((prev) =>
                      prev.filter(
                        (c) => c.id !== course.id
                      )
                    )
                  }
                />
              ))}

              <button
                onClick={addPlanned}
                className="bg-purple-600/15 hover:bg-purple-600/25 transition px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-purple-300 border border-purple-500/30 font-medium"
              >
                {mode === "ongoing"
                  ? "Add Ongoing Subject"
                  : "Add Future Subject"}
              </button>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <ResultPanel
          currentCGPA={currentCGPA}
          predictedCGPA={projectedCGPA}
          totalCompletedCredits={totalCompletedCredits}
          totalOngoingCredits={totalPlannedCredits}
          mode={mode}
          completedCount={completedCourses.length}
          plannedCount={plannedCourses.length}
        />
      </div>
    </div>
  );
}
