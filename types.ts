export interface CourseModuleProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  software: string[];
  date: string;
  image: string;
  tags: string[];
  isRightAligned?: boolean; // For alternating layouts if needed, though the design is consistent
}

export interface InstructorWork {
  id: number;
  imageUrl: string;
  title?: string;
}