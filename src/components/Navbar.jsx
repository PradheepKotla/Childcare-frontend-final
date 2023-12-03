import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
	<div className="navbar">
		<div className='navbar-main container'>
			<h1>ChildCare</h1>
			<ul>
				<Link to={"/aboutus"} style={{textDecoration:"none",color:"#232946"}}><li>About Us</li></Link>
				<Link to={"/contact"} style={{textDecoration:"none",color:"#232946"}}><li>Contact Us</li></Link>
				<Link to={"/"} style={{textDecoration:"none",color:"#232946"}}><li>Login</li></Link>
			</ul>
		</div>
	</div>
	
  )
}
