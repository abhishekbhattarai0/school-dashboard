import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import SignIn from './pages/SignIn'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Courses from './pages/Courses'
import Grades from './pages/Grades'
import StudentLayout from './pages/addStudentPage/StudentLayout'
import { StudentAcademicDetails } from './pages/addStudentPage/StudentAcademicDetails'
import { StudentPersonalDetails } from './pages/addStudentPage/StudentPersonalDetails'
import { StudentContactDetails } from './pages/addStudentPage/StudentContactDetails'
import { StudentGaurdianDetails } from './pages/addStudentPage/StudentGaurdianDetails'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="students" element={<Students />} /> */}
          <Route path="teachers" element={<Teachers />} />
          <Route path="courses" element={<Courses />} />
          <Route path="grades" element={<Grades />} />
          {/* <Route path="add-student" element={<AddStudent />} /> */}
          <Route path="students/" element={<StudentLayout />} >
            <Route index element={<Students />} />
            <Route path='students' element={<Students />} />

            {/* <Route path="/students/add-student" element={<AddStudent />} /> */}
            <Route path="/students/add-student/student-personal" element={<StudentPersonalDetails />} />
            <Route path="/students/add-student/student-contact" element={<StudentContactDetails />} />
            <Route path="/students/add-student/guardian-contact" element={<StudentGaurdianDetails />} />
            <Route path="/students/add-student/student-academic" element={<StudentAcademicDetails />} />

          </Route>
          <Route path="*" element={<PageNotFound />} />


        </Route>
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
