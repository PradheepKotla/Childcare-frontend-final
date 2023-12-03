import { useNavigate } from 'react-router-dom';
import '../css/ParentLogin.css'
import Spinner from './Spinner'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Axios from '../Axios';
import { userLogout } from './app/User';

export default function TeacherLogoutR() {
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const [id,setId]=useState("");
	const accessToken=useSelector((state)=>state.user.user)
	console.log(accessToken)
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
			end_time:time,
		}
		Axios.patch(`/facility/teacher/${id}/`,data,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			dispatch(userLogout());
			navigate("/")
		})
		.catch((error)=>{
			console.log(error.response.data)
		})
	},[id,accessToken])
  return (
	<div className='parentlogin'>
		<Spinner/>
		<h2>Logging out your Account...</h2>
	</div>
  )
}
