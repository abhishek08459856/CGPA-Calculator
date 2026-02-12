"use client";

import { CourseEntry, Grade } from "@/core/types";
import SearchableDropdown from "@/components/SearchableDropdown";
import Image from "next/image";

interface Props {
  course: CourseEntry;
  subjects: { id: string; name: string; credits: number }[];
  excludeIds?: string[];
  onChange: (updated: CourseEntry) => void;
  onRemove: () => void;
}

export default function CourseRow({
  course,
  subjects,
  excludeIds = [],
  onChange,
  onRemove,
}: Props) {
  const grades: Grade[] = ["S", "A", "B", "C", "D", "E", "U"];

  // Filter out already selected subjects
  const availableSubjects = subjects.filter(
    subject => !excludeIds.includes(subject.id)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-center mb-3 p-3 md:p-0 bg-gray-900/30 md:bg-transparent rounded-lg md:rounded-none">
      <div className="md:col-span-6">
        <label className="block md:hidden text-xs text-gray-400 mb-1">Subject</label>
        <SearchableDropdown
          options={availableSubjects}
          value={course.subjectId}
          onChange={(id) => {
            const selected = subjects.find(s => s.id === id);

            onChange({
              ...course,
              subjectId: id,
              credits: selected?.credits || 0
            });
          }}
        />
      </div>

      {/* Mobile: Credits, Grade, and Remove in one row */}
      <div className="flex md:hidden items-center gap-2">
        <div className="flex-1">
          <label className="block text-xs text-gray-400 mb-1">Credits</label>
          <input
            type="number"
            value={course.credits}
            readOnly
            className="w-full p-2 text-sm bg-[#111] border border-white/10 rounded-lg text-center text-gray-400"
          />
        </div>

        <div className="flex-1">
          <label className="block text-xs text-gray-400 mb-1">Grade</label>
          <select
            value={course.grade}
            onChange={(e) =>
              onChange({
                ...course,
                grade: e.target.value as Grade,
              })
            }
            className="w-full p-2 text-sm bg-gray-800 rounded border border-white/10"
          >
            <option value="">Grade</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onRemove}
          className="cursor-pointer hover:opacity-70 transition mt-5"
          aria-label="Remove subject"
        >
          <Image src="/remove-icon.png" alt="Remove" width={20} height={20} />
        </button>
      </div>

      {/* Desktop: Separate columns */}
      <div className="hidden md:block md:col-span-2">
        <input
          type="number"
          value={course.credits}
          readOnly
          className="w-full p-2 text-sm bg-[#111] border border-white/10 rounded-lg text-center text-gray-400"
        />
      </div>

      <div className="hidden md:block md:col-span-2">
        <select
          value={course.grade}
          onChange={(e) =>
            onChange({
              ...course,
              grade: e.target.value as Grade,
            })
          }
          className="w-full p-2 text-sm bg-gray-800 rounded border border-white/10"
        >
          <option value="">Grade</option>
          {grades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:flex md:col-span-2 items-center justify-center">
        <button
          onClick={onRemove}
          className="cursor-pointer hover:opacity-70 transition"
          aria-label="Remove subject"
        >
          <Image src="/remove-icon.png" alt="Remove" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
