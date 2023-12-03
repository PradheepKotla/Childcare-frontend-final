import { useEffect, useState } from 'react'
import '../css/ParentLogin.css'
import Spinner from './Spinner'
import Axios from '../Axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function TeacherLoginR() {
	const navigate=useNavigate();
	const [id,setId]=useState("");
	const accessToken=useSelector((state)=>state.user.user)
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	useEffect(()=>{
		Axios.get("/facility/teacher/",{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setId(response.data.id)
		})
		.catch((error)=>{
			console.log(error.response.data)
		})

		const data={
			start_time:time,
		}
		Axios.patch(`/facility/teacher/${id}/`,data,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			navigate("/teacherdashboard")
		})
		.catch((error)=>{
			console.log(error.response.data)
		})
	},[id,accessToken])
  return (
	<div className='parentlogin'>
		<Spinner/>
		<h2>Logging into your Account...</h2>
	</div>
  )
}
