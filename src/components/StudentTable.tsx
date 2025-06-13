
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

// const students = [
//   {
//     name: "Alice Johnson",
//     course: "Computer Science",
//     address: "123 Main Street, Springfield, IL",
//   },
//   {
//     name: "Bob Smith",
//     course: "Mathematics",
//     address: "456 Elm Street, Springfield, IL",
//   },
//   {
//     name: "Clara Davis",
//     course: "Biology",
//     address: "789 Oak Avenue, Riverside, CA",
//   },
//   {
//     name: "Daniel Kim",
//     course: "Mechanical Engineering",
//     address: "321 Maple Lane, Boston, MA",
//   },
//   {
//     name: "Eva Patel",
//     course: "Philosophy",
//     address: "654 Pine Street, Austin, TX",
//   },
//   {
//     name: "Frank Zhang",
//     course: "Physics",
//     address: "987 Cedar Drive, Seattle, WA",
//   },
//   {
//     name: "Grace Thompson",
//     course: "History",
//     address: "135 Birch Road, Portland, OR",
//   },
//   {
//     name: "Henry Liu",
//     course: "Economics",
//     address: "246 Walnut Blvd, Denver, CO",
//   },
//   {
//     name: "Isabella Nguyen",
//     course: "Chemistry",
//     address: "579 Chestnut Circle, Miami, FL",
//   },
//   {
//     name: "Jack Brown",
//     course: "Political Science",
//     address: "864 Redwood Street, Phoenix, AZ",
//   },
//   {
//     name: "Katie Miller",
//     course: "Art History",
//     address: "110 Aspen Way, Chicago, IL",
//   },
//   {
//     name: "Leo Garcia",
//     course: "Business Administration",
//     address: "210 Spruce Avenue, New York, NY",
//   },
//   {
//     name: "Maria Rodriguez",
//     course: "Linguistics",
//     address: "332 Dogwood Lane, San Diego, CA",
//   },
//   {
//     name: "Nathan Clark",
//     course: "Environmental Science",
//     address: "422 Poplar Court, Atlanta, GA",
//   },
//   {
//     name: "Olivia Lee",
//     course: "Software Engineering",
//     address: "537 Willow Road, Minneapolis, MN",
//   },
//   {
//     name: "Peter Evans",
//     course: "Statistics",
//     address: "601 Fir Drive, Charlotte, NC",
//   },
//   {
//     name: "Quinn Foster",
//     course: "Architecture",
//     address: "743 Hickory Street, Houston, TX",
//   },
//   {
//     name: "Rachel Adams",
//     course: "Music",
//     address: "888 Magnolia Blvd, Las Vegas, NV",
//   },
//   {
//     name: "Samuel Wright",
//     course: "Engineering Physics",
//     address: "900 Sycamore Ave, Kansas City, MO",
//   },
//   {
//     name: "Tina Brooks",
//     course: "Psychology",
//     address: "1020 Larch Lane, Philadelphia, PA",
//   },
// ]
export function StudentTable({students}: StudentTableProps ) {
  if(!students || students.length === 0){
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
        {students.map((student,index) => (
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
