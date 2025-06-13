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
// const teachers:Teacher[] = [
//   {
//     name: "Dr. Linda Carter",
//     subject: "Mathematics",
//     address: "101 Academy Street, Boston, MA",
//   },
//   {
//     name: "Mr. Thomas Walker",
//     subject: "English Literature",
//     address: "55 Maple Lane, Denver, CO",
//   },
//   {
//     name: "Ms. Susan Reyes",
//     subject: "Biology",
//     address: "789 Oak Avenue, San Diego, CA",
//   },
//   {
//     name: "Mr. Robert Jenkins",
//     subject: "Physics",
//     address: "231 Elm Street, Seattle, WA",
//   },
//   {
//     name: "Dr. Angela Kim",
//     subject: "Chemistry",
//     address: "453 Pine Drive, Chicago, IL",
//   },
//   {
//     name: "Mrs. Monica Patel",
//     subject: "History",
//     address: "612 Cedar Road, New York, NY",
//   },
//   {
//     name: "Mr. David Brown",
//     subject: "Physical Education",
//     address: "329 Walnut Street, Austin, TX",
//   },
//   {
//     name: "Ms. Karen Thompson",
//     subject: "Art",
//     address: "400 Birch Court, Portland, OR",
//   },
//   {
//     name: "Dr. James Wilson",
//     subject: "Economics",
//     address: "212 Willow Ave, Atlanta, GA",
//   },
//   {
//     name: "Mrs. Rebecca Nguyen",
//     subject: "Computer Science",
//     address: "784 Spruce Boulevard, Miami, FL",
//   },
//   {
//     name: "Mr. Edward Lopez",
//     subject: "Philosophy",
//     address: "910 Redwood Lane, Las Vegas, NV",
//   },
//   {
//     name: "Ms. Olivia Moore",
//     subject: "Sociology",
//     address: "678 Magnolia Street, Minneapolis, MN",
//   },
//   {
//     name: "Mr. Charles Garcia",
//     subject: "Political Science",
//     address: "344 Aspen Circle, Kansas City, MO",
//   },
//   {
//     name: "Dr. Emily Adams",
//     subject: "Engineering",
//     address: "512 Larch Drive, Philadelphia, PA",
//   },
//   {
//     name: "Mr. Brian Foster",
//     subject: "Music",
//     address: "288 Hickory Blvd, Charlotte, NC",
//   },
//   {
//     name: "Ms. Natalie Brooks",
//     subject: "Environmental Science",
//     address: "123 Dogwood Lane, Sacramento, CA",
//   },
//   {
//     name: "Mrs. Hannah Lee",
//     subject: "Statistics",
//     address: "960 Poplar Court, Houston, TX",
//   },
//   {
//     name: "Mr. Logan Scott",
//     subject: "Architecture",
//     address: "845 Sycamore Avenue, Phoenix, AZ",
//   },
//   {
//     name: "Dr. Sophia Martinez",
//     subject: "Psychology",
//     address: "405 Chestnut Blvd, Columbus, OH",
//   },
//   {
//     name: "Mr. Jason Rivera",
//     subject: "Linguistics",
//     address: "701 Fir Street, San Antonio, TX",
//   },
// ]



export function TeachersTable({teachers}: TeacherTableProps) {
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
        {teachers.map((teacher: Teacher,index) => (
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