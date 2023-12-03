import { useNavigate } from 'react-router-dom';
import '../css/ParentRegister.css'
import '../css/ParentLogin.css'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Axios from "../Axios"
import Spinner from './Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from './app/User';

export default function TeacherDashboard() {
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const accessToken=useSelector((state)=>state.user.user)

	const [id,setId]=useState("");
	const [name,setName]=useState("");
	const [phone_no,setPhone]=useState("");
	const [email,setEmail]=useState("");
	const [hours,setHours]=useState("");
	const [earned,setEarned]=useState("");
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	useEffect(()=>{
		setLoading(true)
		Axios.get("/account/profile/",{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setId(response.data.id)
			setName(response.data.name)
			setPhone(response.data.phone_no)
			setEmail(response.data.email)
			setLoading(false)
		})
		.catch((error)=>{
			console.log(error.response.data)
			// setError(true);
			setLoading(false);
		})


		Axios.get(`/facility/teacher/`,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setHours(response.data.hours_worked)
			setEarned(response.data.earned_salary)
			// setName(response.data.name)
			// setPhone(response.data.phone_no)
			// setEmail(response.data.email)
			setLoading(false)
		})
		.catch((error)=>{
			console.log(error.response.data)
			// setError(true);
			setLoading(false);
		})
	},[id])

	const handleSubmit=(e)=>{
		e.preventDefault()
		setLoading(true)
		const userData={
			name,
			phone_no,
			email,
		}
		Axios.patch("/account/update-profile/",userData,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setLoading(false)
			// navigate('/parent')
		})
		.catch((error)=>{
			console.log(error.response.data)
			setError(true);
			setLoading(false);
		})
	}
	const handleLogout=()=>{
		setLoading(true)
		navigate('/r_logout')
	}

	return (
	<div className='parentlogin'>
		{loading?<Spinner/>:
		<div  className="parentlogin-main container">
		<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{name}'s Dashboard</motion.h1>
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dashboard-buttons">
			{/* <button onClick={()=>navigate('/childsection')}>Child Section</button> */}
			<button onClick={()=>handleLogout()}>Logout</button>
		</motion.div>
		{earned?<div className="section-child">
			<p><b>Hours Worked:</b> {hours}</p>
			<p><b>Earned Money:</b> {earned}</p>
		</div>:""}
		
		<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
		<div style={{width:"100%"}}>
				<label htmlFor="" style={{fontWeight:"bold"}}>Name</label>
				<input required type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
			</div>
			<div style={{width:"100%"}}>
				<label htmlFor="" style={{fontWeight:"bold"}}>Phone Number</label>
				<input required type='number' maxLength={10} placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value.slice(0,10))} value={phone_no}/>
			</div>
			<div style={{width:"100%"}}>
				<label htmlFor="" style={{fontWeight:"bold"}}>Email</label>
				<input required type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
			</div>
			{error?<p style={{fontSize:"1.4rem",color:"red",fontFamily:"var(--main-font-text)"}}>There was a error. Try Again</p>:""}
			<button type='submit'>Update Profile</button>
			{/* <p style={{fontSize:"1.5rem"}}>Already have an Account? <span onClick={()=>navigate('/parent')} style={{textDecoration:"underline",cursor:"pointer"}}>Login</span></p>
			<p style={{fontSize:"1.5rem"}}>Are you a Teacher? <span onClick={()=>navigate('/teacherregister')} style={{textDecoration:"underline",cursor:"pointer"}}>Register as Teacher</span></p> */}
		</motion.form>
		</div>
}
	</div>
	)
  }