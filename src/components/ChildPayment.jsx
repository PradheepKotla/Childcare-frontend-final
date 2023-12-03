import { motion } from 'framer-motion'
import '../css/ParentLogin.css'
import { useState } from 'react'
import Axios from '../Axios';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
export default function ChildPayment() {
	const location=useLocation();
	const navigate=useNavigate();
	const accessToken=useSelector((state)=>state.user.user)
	// let fees;
	

	// const [name,setFirstName]=useState("");
	// const [last_name,setLastName]=useState("");
	// const [date_of_birth,setDOB]=useState("");
	// const [parent_name,setParentName]=useState("");
	// const [parent_phone_number,setParentPhone]=useState("");
	// const [allergies,setAllergies]=useState("");
	// const [address,setAddress]=useState("");
	// const [consent_form,setConsentForm]=useState(null);
	// const [child_age,setChildAge]=useState("")
	const [card_no,setCard]=useState();
	const [month,setMonth]=useState();
	const [year,setYear]=useState();
	const [name_on_card,setName]=useState();
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);

	// const handleSubmit=(e)=>{
	// 	e.preventDefault()
	// 	setLoading(true);
	// 	if(child_age==""){
	// 		setLoading(false)
	// 		alert("Please Select Age of Child")
	// 		setError(true)
	// 	}
		
	// 	switch(child_age){
	// 		case "infant":
	// 			fees=300;
	// 		break;
	// 		case "toddler":
	// 			fees=275;
	// 		break;
	// 		case "twadler":
	// 			fees=250;
	// 		break;
	// 		case "three_years_old":
	// 			fees=225;
	// 		break;
	// 		case "four_years_old":
	// 			fees=200;
	// 		break;
	// 	}

	// 	const formData = new FormData();
	// 	formData.append("name", name);
	// 	formData.append("last_name", last_name);
	// 	formData.append("date_of_birth", date_of_birth);
	// 	formData.append("parent_name", parent_name);
	// 	formData.append("parent_phone_number", parent_phone_number);
	// 	formData.append("allergies", allergies);
	// 	formData.append("address", address);
	// 	formData.append("child_fees",fees);
	// 	formData.append("file", consent_form);
	// 	Axios.post("/parent/child/",formData,{
	// 		headers:{
	// 			"Authorization":`Bearer ${accessToken}` 
	// 		}
	// 	})
	// 	.then((response)=>{
	// 		console.log(response.data)
	// 		setLoading(false)
	// 		navigate('/childsection')
	// 	})
	// 	.catch((error)=>{
	// 		console.log(error.response.data)
	// 		setError(true)
	// 	})
	// }
	const handleSubmit=(e)=>{
		e.preventDefault()
		setLoading(true);
		const data={
			child:location.state.id,
			price:location.state.child_fees,
			card_no,
			month,
			year,
			name_on_card,
			status:true,
		}
		Axios.post("/parent/payment/",data,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
				}
		})
		.then((response)=>{
			console.log(response.data)
			setLoading(false)
			navigate("/childsection")
		})
		.catch((error)=>{
			console.log(error.response)
			setError(true)
			setLoading(false)
		})
	}
  return (
	<div className='parentlogin'>
		{loading?<Spinner/>:
		<div  className="parentlogin-main container">
		<h1>Payment</h1>
	<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
		<input type="number" required placeholder='Enter Card Number' value={card_no} onChange={(e)=>setCard(e.target.value.slice(0,16))}/>
		<input type="number" required placeholder='Month' value={month} onChange={(e)=>setMonth(e.target.value.slice(0,2))}/>
		<input type="number" required placeholder='Year' value={year} onChange={(e)=>setYear(e.target.value.slice(0,2))}/>
		<input type="password" required placeholder='CVV' maxLength={3}/>
		<input type="text" required placeholder='Enter Name on Card' value={name_on_card} onChange={(e)=>setName(e.target.value)}/>
		{error?<p style={{fontSize:"1.4rem",color:"red",fontFamily:"var(--main-font-text)"}}>There was a error. Try Again</p>:""}
		<button type='submit'>Confirm Payment</button>
	</motion.form>
		
	</div>
		}
		
	</div>
  )
}
