import { useNavigate } from 'react-router-dom'
import '../css/ParentLogin.css'
import { useEffect, useState } from 'react';
import Axios from '../Axios';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
export default function ChildSection() {
	const navigate=useNavigate();
	const accessToken=useSelector((state)=>state.user.user)
	
	const [data,setData]=useState("");
	const [loading,setLoading]=useState(false);

	useEffect(()=>{
		setLoading(true)
		Axios.get("/parent/child/",{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setData(response.data)
			setLoading(false)
		})
		.catch((error)=>{
			console.log(error.response.data)
			setLoading(false)
		})
	},[])
  return (
	<div className='parentlogin'>
		{loading?<Spinner/>:<div  className="parentlogin-main container">
		<h1>Your Children</h1>
		<div className="dashboard-buttons">
			<button onClick={()=>navigate("/newchild")}>Add Child</button>
		</div>
		{data && data.map((data)=>{
			return(
			<div key={data.id} className="section-child">
			<p>{data.name}</p>
			<div className="section-child-button">
				<button onClick={()=>navigate('/childedit/'+data.id)}>Edit</button>
				<button onClick={()=>navigate('/childpayment',{state:data})}>Payment</button>
			</div>
		</div>
			)
		})}
		</div>}
		
	</div>
  )
}
