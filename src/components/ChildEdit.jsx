import { motion } from 'framer-motion'
import '../css/ParentLogin.css'
import { useEffect, useState } from 'react'
import Axios from '../Axios';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';
export default function ChildEdit() {
	const navigate=useNavigate();
	const accessToken=useSelector((state)=>state.user.user)
	let {id}=useParams();
	// let fees;
	

	const [name,setFirstName]=useState("");
	const [last_name,setLastName]=useState("");
	// const [date_of_birth,setDOB]=useState("");
	const [parent_name,setParentName]=useState("");
	const [parent_phone_number,setParentPhone]=useState("");
	const [allergies,setAllergies]=useState("");
	const [address,setAddress]=useState("");
	// const [consent_form,setConsentForm]=useState(null);
	// const [child_age,setChildAge]=useState("")
	const [loading,setLoading]=useState(false);
	const [error,setError]=useState(false);



	useEffect(()=>{
		setLoading(true)
		Axios.get(`/parent/child/${id}/`,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setFirstName(response.data.name)
			setLastName(response.data.last_name)
			setParentName(response.data.parent_name)
			setParentPhone(response.data.parent_phone_number)
			setAllergies(response.data.allergies)
			setAddress(response.data.address)
			setLoading(false)
		})
		.catch((error)=>{
			console.log(error.response)
			setLoading(false)
		})
	},[id])



	const handleSubmit=(e)=>{
		e.preventDefault()
		setLoading(true);
		// if(child_age==""){
		// 	setLoading(false)
		// 	alert("Please Select Age of Child")
		// 	setError(true)
		// }
		
		// switch(child_age){
		// 	case "infant":
		// 		fees=300;
		// 	break;
		// 	case "toddler":
		// 		fees=275;
		// 	break;
		// 	case "twadler":
		// 		fees=250;
		// 	break;
		// 	case "three_years_old":
		// 		fees=225;
		// 	break;
		// 	case "four_years_old":
		// 		fees=200;
		// 	break;
		// }

		// const formData = new FormData();
		// formData.append("name", name);
		// formData.append("last_name", last_name);
		// formData.append("date_of_birth", date_of_birth);
		// formData.append("parent_name", parent_name);
		// formData.append("parent_phone_number", parent_phone_number);
		// formData.append("allergies", allergies);
		// formData.append("address", address);
		// formData.append("child_fees",fees);
		// formData.append("file", consent_form);
		

		const formData={
			name,
			last_name,
			parent_name,
			parent_phone_number,
			allergies,
			address
		}
		Axios.patch(`/parent/child/${id}/`,formData,{
			headers:{
				"Authorization":`Bearer ${accessToken}` 
			}
		})
		.then((response)=>{
			console.log(response.data)
			setLoading(false)
			navigate('/childsection')
		})
		.catch((error)=>{
			console.log(error.response.data)
			setError(true)
		})
	}
  return (
	<div className='parentlogin'>
		{loading?<Spinner/>:
		<div  className="parentlogin-main container">
		<h1>Update Child Details</h1>
	<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
		<div style={{width:"100%"}}>
			<label htmlFor="" style={{fontWeight:"bold"}}>First Name</label>
			<input type="text" required placeholder='Enter First Name' value={name} onChange={(e)=>setFirstName(e.target.value)}/>
		</div>
		<div style={{width:"100%"}}>
			<label htmlFor="" style={{fontWeight:"bold"}}>Parent Name</label>
			<input type="text" required placeholder='Enter Parent Name' value={parent_name} onChange={(e)=>setParentName(e.target.value)}/>
		</div>
		<div style={{width:"100%"}}>
			<label htmlFor="" style={{fontWeight:"bold"}}>Phone Number</label>
			<input type="number" required placeholder='Enter Phone Number' value={parent_phone_number} onChange={(e)=>setParentPhone(e.target.value.slice(0,10))}/>
		</div>
		<div style={{width:"100%"}}>
			<label htmlFor="" style={{fontWeight:"bold"}}>Allergies</label>
			<input type="text" required placeholder='Enter Allergies' value={allergies} onChange={(e)=>setAllergies(e.target.value)}/>
		</div>
		<div style={{width:"100%"}}>
			<label htmlFor="" style={{fontWeight:"bold"}}>Address</label>
			<input type="text" required placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
		</div>
		
		{/* <select id="age" name="age" value={child_age} onChange={(e)=>setChildAge(e.target.value)}>
			<option value="">Select Age Of Child</option>
			<option value="infant">Infant</option>
			<option value="toddler">Toddler</option>
			<option value="twadler">Twadler</option>
			<option value="three_years_old">3 Years Old</option>
			<option value="four_years_old">4 Years Old</option>
		</select> */}
		{/* <label htmlFor="">Consent Form</label>
		<input type="file" required onChange={(e)=>setConsentForm(e.target.files[0])}/> */}
		{error?<p style={{fontSize:"1.4rem",color:"red",fontFamily:"var(--main-font-text)"}}>There was a error. Try Again</p>:""}
		<button type='submit'>Confirm Child</button>
	</motion.form>
		
	</div>
		}
		
	</div>
  )
}
