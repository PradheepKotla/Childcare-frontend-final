import { useNavigate } from 'react-router-dom';
import '../css/TeacherLogin.css'
import { motion } from 'framer-motion';
import Spinner from './Spinner';
import { useDispatch } from 'react-redux';
import { userLogin } from './app/User'
import { useState } from 'react';
import Axios from "../Axios"

export default function TeacherLogin() {
	const dispatch=useDispatch();
	const navigate=useNavigate();

	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	const handleSubmit=(e)=>{
		e.preventDefault()
		setLoading(true)
		const userData={
			email,
			password,
		}
		Axios.post("/account/login/",userData)
		.then((response)=>{
			console.log(response.data)
			localStorage.setItem('access_token',response.data.tokens.access)
			dispatch(userLogin());

			// Axios.patch("/facility/teacher/1/")
			setLoading(false)
			navigate('/r_login')
		})
		.catch((error)=>{
			console.log(error.response.data)
			setError(true);
			setLoading(false);
		})
	}
  return (
	<div className='parentlogin'>
		{loading?<Spinner/>:
		<div  className="parentlogin-main container">
		<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Teacher Login</motion.h1>
		<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
		<input required type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
			<input required type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
			{error?<p style={{fontSize:"1.4rem",color:"red",fontFamily:"var(--main-font-text)"}}>There was a error. Try Again</p>:""}
			<button type='submit'>Login</button>
			<p style={{fontSize:"1.5rem"}}>Don't have an Account? <span onClick={()=>navigate('/teacherregister')} style={{textDecoration:"underline",cursor:"pointer"}}>Register</span></p>
			<p style={{fontSize:"1.5rem"}}>Are you a Teacher? <span onClick={()=>navigate('/parent')} style={{textDecoration:"underline",cursor:"pointer"}}>Login as Teacher</span></p>
		</motion.form>
		</div>
		}
	</div>
  )
}
