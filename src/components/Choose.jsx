import { motion } from 'framer-motion'
import '../css/Choose.css'
import { useNavigate } from 'react-router-dom'

export default function Choose() {
	const navigate=useNavigate();
  return (
	<div className='choose'>
			<div className="choose-main container">
				<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Login/Register For?</motion.h1>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="choose-main-buttons">
					<button onClick={()=>navigate('/parent')}>Parent</button>
					<button onClick={()=>navigate('/teacher')}>Teacher</button>
				</motion.div>
			</div>
	</div>
  )
}
