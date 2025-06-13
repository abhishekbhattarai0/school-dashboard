import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Student {
  name: string,
  course: string,
  address: string
}

interface StudentTableProps {
  students: Student[]
}


export function StudentTable({ students }: StudentTableProps) {
  if (!students || students.length === 0) {
    return <p className="text-center py-8 text-gray-500">No student found.</p>;
  }
  return (
    <Table>
      <TableCaption>List of Students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.course}</TableCell>
            <TableCell>{student.address}</TableCell>
            <TableCell className="text-right"><p className="text-blue-500 hover:unerline cursor-pointer">details</p></TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
export default StudentTable
