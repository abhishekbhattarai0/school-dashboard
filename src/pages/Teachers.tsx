import SearchBox from '@/components/SearchBox'
import TeacherTable from '@/components/TeacherTable'
import { Button } from '@/components/ui/button'
import React, { useMemo, useState } from 'react'

interface Teacher {
  name: string,
  subject: string,
  address: string
}

const teachers: Teacher[] = [
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


function Teachers() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filterTeacher = useMemo(() => {
    if (!searchTerm) {
      return teachers
    }

    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return teachers.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(lowercaseSearchTerm) ||
        teacher.subject.toLowerCase().includes(lowercaseSearchTerm) ||
        teacher.address.toLowerCase().includes(lowercaseSearchTerm)
    );
  }, [searchTerm])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <Button variant={'outline'}>Add Teacher</Button>
        <div className="w-full sm:w-auto">
          <SearchBox placeholder="search teachers" value={searchTerm} onChange={handleChange} />
        </div>
      </div>
      <TeacherTable teachers={filterTeacher} />
    </div>
  )
}

export default Teachers