// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// function TeacherTable() {
//   return (
//     <Card>
//         <CardHeader>
//             <div className="flex  justify-between">
//                 <p>Name</p>
//                 <p>Course</p>
//                 <p>Address</p>
//                 <p>view</p>
//             </div>
//         </CardHeader>
//         <CardContent>
//             <div className="flex  justify-between border-b-2   py-1 items-center">
//                 <p>Name</p>
//                 <p>Course</p>
//                 <p className=" text-clip"> doloribus quidem nihil?</p>
//                 <Button>view</Button>
//             </div>
//         </CardContent>
//     </Card>
//   )
// }

// export default TeacherTable

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const teachers = [
  {
    name: "Dr. Linda Carter",
    subject: "Mathematics",
    address: "101 Academy Street, Boston, MA",
  },
  {
    name: "Mr. Thomas Walker",
    subject: "English Literature",
    address: "55 Maple Lane, Denver, CO",
  },
  {
    name: "Ms. Susan Reyes",
    subject: "Biology",
    address: "789 Oak Avenue, San Diego, CA",
  },
  {
    name: "Mr. Robert Jenkins",
    subject: "Physics",
    address: "231 Elm Street, Seattle, WA",
  },
  {
    name: "Dr. Angela Kim",
    subject: "Chemistry",
    address: "453 Pine Drive, Chicago, IL",
  },
  {
    name: "Mrs. Monica Patel",
    subject: "History",
    address: "612 Cedar Road, New York, NY",
  },
  {
    name: "Mr. David Brown",
    subject: "Physical Education",
    address: "329 Walnut Street, Austin, TX",
  },
  {
    name: "Ms. Karen Thompson",
    subject: "Art",
    address: "400 Birch Court, Portland, OR",
  },
  {
    name: "Dr. James Wilson",
    subject: "Economics",
    address: "212 Willow Ave, Atlanta, GA",
  },
  {
    name: "Mrs. Rebecca Nguyen",
    subject: "Computer Science",
    address: "784 Spruce Boulevard, Miami, FL",
  },
  {
    name: "Mr. Edward Lopez",
    subject: "Philosophy",
    address: "910 Redwood Lane, Las Vegas, NV",
  },
  {
    name: "Ms. Olivia Moore",
    subject: "Sociology",
    address: "678 Magnolia Street, Minneapolis, MN",
  },
  {
    name: "Mr. Charles Garcia",
    subject: "Political Science",
    address: "344 Aspen Circle, Kansas City, MO",
  },
  {
    name: "Dr. Emily Adams",
    subject: "Engineering",
    address: "512 Larch Drive, Philadelphia, PA",
  },
  {
    name: "Mr. Brian Foster",
    subject: "Music",
    address: "288 Hickory Blvd, Charlotte, NC",
  },
  {
    name: "Ms. Natalie Brooks",
    subject: "Environmental Science",
    address: "123 Dogwood Lane, Sacramento, CA",
  },
  {
    name: "Mrs. Hannah Lee",
    subject: "Statistics",
    address: "960 Poplar Court, Houston, TX",
  },
  {
    name: "Mr. Logan Scott",
    subject: "Architecture",
    address: "845 Sycamore Avenue, Phoenix, AZ",
  },
  {
    name: "Dr. Sophia Martinez",
    subject: "Psychology",
    address: "405 Chestnut Blvd, Columbus, OH",
  },
  {
    name: "Mr. Jason Rivera",
    subject: "Linguistics",
    address: "701 Fir Street, San Antonio, TX",
  },
]



function TeacherTable() {
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-4 font-semibold">
          <p>Name</p>
          <p>Subject</p>
          <p>Address</p>
          <p >View</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {teachers.map((student, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center border-b py-2 text-sm"
          >
            <p>{student.name}</p>
            <p>{student.subject}</p>
            <p className="truncate">{student.address}</p>
            <Button variant={"link"} size="sm" className="text-blue-600 cursor-pointer w-0">details</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TeacherTable
