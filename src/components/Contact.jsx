import { motion } from 'framer-motion'
import '../css/Contact.css'

export default function Contact() {
  return (
	<div className='contact'>
		<div className="contact-main container">
			<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} >Contact Us</motion.h1>
				<motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }}  action="">
					<div className="contact-main-form-first">
						<input type="text" placeholder='Name'/>
						<input type="text" placeholder='Email'/>
					</div>
					<input type="text" placeholder='Phone Number'/>
					<textarea name="" id="" cols="30" rows="10" placeholder='Comment'/>
					<button>Send</button>
				</motion.form>
		</div>
	</div>
  )
}
