import { Route, Routes } from 'react-router-dom'
import './App.css'
import Choose from './components/Choose'
import Navbar from './components/Navbar'
import ParentLogin from './components/ParentLogin'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import TeacherLogin from './components/TeacherLogin'
import ParentRegister from './components/ParentRegister'
import TeacherRegister from './components/TeacherRegister'
import { userLogin } from './components/app/User'
import { useDispatch, useSelector } from 'react-redux'
import ParentDashboard from './components/ParentDashboard'
import ChildSection from './components/ChildSection'
import NewChild from './components/NewChild'
import ChildEdit from './components/ChildEdit'
import ChildPayment from './components/ChildPayment'
import TeacherDashboard from './components/TeacherDashboard'
import TeacherLoginR from './components/TeacherLoginR'
import TeacherLogoutR from './components/TeacherLogoutR'

function App() {

  const dispatch=useDispatch();
  dispatch(userLogin());
  const user=useSelector((state)=>state.user.user)
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Choose/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/parent' element={<ParentLogin/>}/>
        <Route path='/teacher' element={<TeacherLogin/>}/>
        <Route path='/parentregister' element={<ParentRegister/>}/>
        <Route path='/teacherregister' element={<TeacherRegister/>}/>
        <Route path='/parentdashboard' element={<ParentDashboard/>}/>
        <Route path='/childsection' element={<ChildSection/>}/>
        <Route path='/newchild' element={<NewChild/>}/>
        <Route path='/childedit/:id' element={<ChildEdit/>}/>
        <Route path='/childpayment' element={<ChildPayment/>}/>
        <Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
        <Route path='/r_login' element={<TeacherLoginR/>}/>
        <Route path='/r_logout' element={<TeacherLogoutR/>}/>

      </Routes>
      
    </div>
  )
}

export default App
