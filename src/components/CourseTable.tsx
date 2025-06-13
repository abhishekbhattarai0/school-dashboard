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



interface CourseTableProps {
  courses: Course[];
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