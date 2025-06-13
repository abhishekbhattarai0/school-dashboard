import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Teacher {
  name: string,
  subject: string,
  address: string
}
interface TeacherTableProps {
  teachers: Teacher[]
}




export function TeachersTable({ teachers }: TeacherTableProps) {
  if (!teachers || teachers.length === 0) {
    return <p className="text-center py-8 text-gray-500">No teachers found.</p>;
  }
  return (
    <Table>
      <TableCaption>List of Teachers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map((teacher: Teacher, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{teacher.name}</TableCell>
            <TableCell>{teacher.subject}</TableCell>
            <TableCell>{teacher.address}</TableCell>
            <TableCell className="text-right"><p className="text-blue-500 hover:unerline cursor-pointer">details</p></TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
export default TeachersTable