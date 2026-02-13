import { Grade, CourseEntry } from "./types";

export const gradePoints: Record<Grade, number> = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 4,
  U: 0,
};

export function calculateCGPA(courses: CourseEntry[]): number {
  const validCourses = courses.filter(
    (course) => course.subjectId && course.credits > 0 && course.grade
  );

  if (validCourses.length === 0) return 0;

  const totalCredits = validCourses.reduce((sum, course) => sum + course.credits, 0);
  const totalPoints = validCourses.reduce(
    (sum, course) => sum + course.credits * gradePoints[course.grade],
    0
  );

  if (totalCredits === 0) return 0;

  const cgpa = totalPoints / totalCredits;
  return parseFloat(cgpa.toFixed(2));
}
