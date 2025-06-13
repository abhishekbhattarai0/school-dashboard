import { CourseTable } from '@/components/CourseTable'
import SearchBox from '@/components/SearchBox'
import { Button } from '@/components/ui/button'
import React, {  useMemo, useState } from 'react';
interface Course {
  name: string;
  code: string;
  description: string;
}

const courses:Course[] = [
  {
    name: "Introduction to Computer Science",
    code: "CS101",
    description: "Fundamentals of programming, algorithms, and computer systems.",
  },
  {
    name: "Calculus I",
    code: "MATH201",
    description: "Differential and integral calculus of one variable.",
  },
  {
    name: "General Biology",
    code: "BIO110",
    description: "Basic principles of biology including cell structure and genetics.",
  },
  {
    name: "World History",
    code: "HIST105",
    description: "Survey of ancient to modern world civilizations and cultures.",
  },
  {
    name: "Physics: Mechanics",
    code: "PHY150",
    description: "Newtonian mechanics, motion, forces, and energy.",
  },
  {
    name: "Introduction to Philosophy",
    code: "PHIL101",
    description: "Major philosophical questions and schools of thought.",
  },
  {
    name: "Organic Chemistry",
    code: "CHEM210",
    description: "Structure, properties, and reactions of organic compounds.",
  },
  {
    name: "Art Appreciation",
    code: "ART100",
    description: "Understanding and analyzing visual arts in historical context.",
  },
  {
    name: "Macroeconomics",
    code: "ECON102",
    description: "Economic principles affecting national and global economies.",
  },
  {
    name: "Software Engineering",
    code: "CS220",
    description: "Design, development, testing, and maintenance of software systems.",
  },
]

function Courses() {
  const [searchTerm, setsearchTerm] = useState<string>('');

  const filterCourse = useMemo(() => {
    if(!searchTerm){
      console.log('first')
      return courses;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(lowerSearchTerm) ||
        course.code.toLowerCase().includes(lowerSearchTerm) ||
        course.description.toLowerCase().includes(lowerSearchTerm)
    );
  },[searchTerm])

    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setsearchTerm(e.target.value)
    
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <Button variant={'outline'}>Add Course</Button>
        <div className="w-full sm:w-auto">
          <SearchBox placeholder="search courses" value={searchTerm} onChange={handleChange} />
        </div>
      </div>
      <CourseTable courses={filterCourse} />
    </div>
  )
}

export default Courses