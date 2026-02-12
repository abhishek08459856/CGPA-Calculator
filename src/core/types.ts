export type Degree = "DS" | "ES";

export type Mode = "current" | "ongoing" | "future";

export type Grade =
  | "S"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "U";

export interface CourseEntry {
  id: string;
  subjectId: string;
  credits: number;
  grade: Grade;
}
