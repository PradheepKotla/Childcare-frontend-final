import { useNavigate } from 'react-router-dom';
import '../css/TeacherRegister.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Axios from "../Axios"
import Spinner from './Spinner';

export default function TeacherRegister() {
	const navigate=useNavigate();

	const [name,setName]=useState("");
	const [phone_no,setPhone]=useState("");
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	const handleSubmit=(e)=>{
		e.preventDefault()
		setLoading(true)
		const userData={
			name,
			phone_no,
			email,
			password,
			parent:false,
			teacher:true
		}
		Axios.post("/account/register/",userData)
		.then((response)=>{
			console.log(response.data)
			setLoading(false)
			navigate('/teacher')
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
		<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} >Teacher Register</motion.h1>
		<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
		<input required type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
			<input required type='number' maxLength={10} placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value.slice(0,10))} value={phone_no}/>
			<input required type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
			<input required type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
			{error?<p style={{fontSize:"1.4rem",color:"red",fontFamily:"var(--main-font-text)"}}>There was a error. Try Again</p>:""}
			<button type='submit'>Register</button>
			<p style={{fontSize:"1.5rem"}}>Already have an Account? <span onClick={()=>navigate('/teacher')} style={{textDecoration:"underline",cursor:"pointer"}}>Login</span></p>
			<p style={{fontSize:"1.5rem"}}>Are you a Parent? <span onClick={()=>navigate('/parentregister')} style={{textDecoration:"underline",cursor:"pointer"}}>Register as Parent</span></p>
		</motion.form>
</div>
}
		
	</div>
	)
  }