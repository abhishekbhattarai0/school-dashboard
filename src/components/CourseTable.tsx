

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Course {
  name: string;
  code: string;
  description: string;
}

// const courses:Course[] = [
//   {
//     name: "Introduction to Computer Science",
//     code: "CS101",
//     description: "Fundamentals of programming, algorithms, and computer systems.",
//   },
//   {
//     name: "Calculus I",
//     code: "MATH201",
//     description: "Differential and integral calculus of one variable.",
//   },
//   {
//     name: "General Biology",
//     code: "BIO110",
//     description: "Basic principles of biology including cell structure and genetics.",
//   },
//   {
//     name: "World History",
//     code: "HIST105",
//     description: "Survey of ancient to modern world civilizations and cultures.",
//   },
//   {
//     name: "Physics: Mechanics",
//     code: "PHY150",
//     description: "Newtonian mechanics, motion, forces, and energy.",
//   },
//   {
//     name: "Introduction to Philosophy",
//     code: "PHIL101",
//     description: "Major philosophical questions and schools of thought.",
//   },
//   {
//     name: "Organic Chemistry",
//     code: "CHEM210",
//     description: "Structure, properties, and reactions of organic compounds.",
//   },
//   {
//     name: "Art Appreciation",
//     code: "ART100",
//     description: "Understanding and analyzing visual arts in historical context.",
//   },
//   {
//     name: "Macroeconomics",
//     code: "ECON102",
//     description: "Economic principles affecting national and global economies.",
//   },
//   {
//     name: "Software Engineering",
//     code: "CS220",
//     description: "Design, development, testing, and maintenance of software systems.",
//   },
// ]

interface CourseTableProps {
  courses: Course[]; // Now expects a courses array as a prop
}

export function CourseTable({courses}: CourseTableProps) {
  if (!courses || courses.length === 0) {
    return <p className="text-center py-8 text-gray-500">No courses found.</p>;
  }
  return (
    <Table>
      <TableCaption>List of Course.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Course</TableHead>
          <TableHead>code</TableHead>
          <TableHead>description</TableHead>
          <TableHead className="text-right">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course:Course) => (
          <TableRow key={course.code}>
            <TableCell className="font-medium">{course.name}</TableCell>
            <TableCell>{course.code}</TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell className="text-right"><p className="text-blue-500 hover:unerline cursor-pointer">details</p></TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  )
}