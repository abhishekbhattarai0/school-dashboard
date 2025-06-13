import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
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

function CourseTable() {
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-4 font-semibold">
          <p>Name</p>
          <p>Code</p>
          <p>Description</p>
          <p>View</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center border-b py-2 text-sm"
          >
            <p>{course.name}</p>
            <p>{course.code}</p>
            <p className="truncate">{course.description}</p>
            <Button size="sm">View</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default CourseTable
