// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// function StudentTable() {
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

// export default StudentTable

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const students = [
  {
    name: "Alice Johnson",
    course: "Computer Science",
    address: "123 Main Street, Springfield, IL",
  },
  {
    name: "Bob Smith",
    course: "Mathematics",
    address: "456 Elm Street, Springfield, IL",
  },
  {
    name: "Clara Davis",
    course: "Biology",
    address: "789 Oak Avenue, Riverside, CA",
  },
  {
    name: "Daniel Kim",
    course: "Mechanical Engineering",
    address: "321 Maple Lane, Boston, MA",
  },
  {
    name: "Eva Patel",
    course: "Philosophy",
    address: "654 Pine Street, Austin, TX",
  },
  {
    name: "Frank Zhang",
    course: "Physics",
    address: "987 Cedar Drive, Seattle, WA",
  },
  {
    name: "Grace Thompson",
    course: "History",
    address: "135 Birch Road, Portland, OR",
  },
  {
    name: "Henry Liu",
    course: "Economics",
    address: "246 Walnut Blvd, Denver, CO",
  },
  {
    name: "Isabella Nguyen",
    course: "Chemistry",
    address: "579 Chestnut Circle, Miami, FL",
  },
  {
    name: "Jack Brown",
    course: "Political Science",
    address: "864 Redwood Street, Phoenix, AZ",
  },
  {
    name: "Katie Miller",
    course: "Art History",
    address: "110 Aspen Way, Chicago, IL",
  },
  {
    name: "Leo Garcia",
    course: "Business Administration",
    address: "210 Spruce Avenue, New York, NY",
  },
  {
    name: "Maria Rodriguez",
    course: "Linguistics",
    address: "332 Dogwood Lane, San Diego, CA",
  },
  {
    name: "Nathan Clark",
    course: "Environmental Science",
    address: "422 Poplar Court, Atlanta, GA",
  },
  {
    name: "Olivia Lee",
    course: "Software Engineering",
    address: "537 Willow Road, Minneapolis, MN",
  },
  {
    name: "Peter Evans",
    course: "Statistics",
    address: "601 Fir Drive, Charlotte, NC",
  },
  {
    name: "Quinn Foster",
    course: "Architecture",
    address: "743 Hickory Street, Houston, TX",
  },
  {
    name: "Rachel Adams",
    course: "Music",
    address: "888 Magnolia Blvd, Las Vegas, NV",
  },
  {
    name: "Samuel Wright",
    course: "Engineering Physics",
    address: "900 Sycamore Ave, Kansas City, MO",
  },
  {
    name: "Tina Brooks",
    course: "Psychology",
    address: "1020 Larch Lane, Philadelphia, PA",
  },
]


function StudentTable() {
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-4 font-semibold">
          <p>Name</p>
          <p>Course</p>
          <p>Address</p>
          <p >View</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {students.map((student, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center border-b py-2 text-sm"
          >
            <p>{student.name}</p>
            <p>{student.course}</p>
            <p className="truncate">{student.address}</p>
            <Button variant={"link"} size="sm" className="text-blue-600 cursor-pointer w-0">details</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default StudentTable
