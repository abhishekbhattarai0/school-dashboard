import SearchBox from '@/components/SearchBox'
import StudentTable from '@/components/StudentTable'
import { Button } from '@/components/ui/button'
import { useMemo, useState } from 'react'

interface Student {
  name: string,
  course: string,
  address: string
}
const students: Student[] = [
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

function Students() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filterCourse = useMemo(() => {
    if (!searchTerm) {
      return students
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase();

    return students.filter((student: Student) =>
      student.name.toLowerCase().includes(lowercaseSearchTerm) ||
      student.course.toLowerCase().includes(lowercaseSearchTerm) ||
      student.address.toLowerCase().includes(lowercaseSearchTerm)
    );
  }, [searchTerm])
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <Button variant={'outline'}>Add Student</Button>
        <div className="w-full sm:w-auto">
          <SearchBox placeholder="search students" value={searchTerm} onChange={handleChange} />
        </div>
      </div>
      <StudentTable students={filterCourse} />
    </div>
  )
}

export default Students