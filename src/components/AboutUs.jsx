import { motion } from 'framer-motion'
import '../css/AboutUs.css'

export default function AboutUs() {
	const data=[{
		"id":1,
		"title":"About Us",
		"description":"`Welcome to ChildCare, where we believe in nurturing a brighter future for your little ones! Our Child Care Management System is designed with your child's well-being and development at its heart. As parents, we understand the importance of providing a secure and enriching environment for your children to thrive.At ChildCare, we strive to make the childcare experience seamless and enjoyable for both parents and caregivers. Our innovative Child Care Management System is tailored to meet the unique needs of modern families, offering a range of features to ensure your peace of mind and your child's happiness.",
		"image":"https://images.pexels.com/photos/8926638/pexels-photo-8926638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		"id":2,
		"title":"Our Mission",
		"description":"We are on a mission to redefine childcare management by seamlessly integrating technology with compassion. Our goal is to simplify the lives of parents and empower childcare providers to deliver the highest quality of care.",
		"image":"https://images.pexels.com/photos/8422249/pexels-photo-8422249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		"id":3,
		"title":"Key Features",
		"description":"Secure Access: Rest easy knowing that your child is in safe hands. Our system employs state-of-the-art security measures to guarantee the confidentiality and safety of your child's information.Effortless Communication: Stay connected with your child's caregivers effortlessly. Receive updates, messages, and important information in real-time, fostering a strong partnership between parents and childcare providers.Learning and Development: Explore the exciting world of your child's growth and development. Our system keeps you informed about your child's milestones, activities, and educational progress.Billing and Payments: Streamline your financial interactions with our integrated billing and payment system. Easily manage invoices and payments, making the administrative side of childcare hassle-free.",
		"image":"https://images.pexels.com/photos/8422262/pexels-photo-8422262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		"id":4,
		"title":"Why Choose ChildCare?",
		"description":"Experienced Professionals: Our team comprises dedicated professionals who are passionate about early childhood education and well-versed in the intricacies of childcare management.User-Friendly Interface: We understand the demands of modern parenting. Our user-friendly interface is designed to be intuitive and accessible, ensuring a smooth experience for busy parents and caregivers.Continuous Improvement: We are committed to continuous improvement. As childcare practices evolve, so do we. Count on us to stay at the forefront of innovation in childcare management.",
		"image":"https://images.pexels.com/photos/8612980/pexels-photo-8612980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	// {
	// 	"id":5,
	// 	"title":"This is a Title.",
	// 	"description":"This is a description",
	// 	"image":"https://images.pexels.com/photos/8926638/pexels-photo-8926638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	// }
]
  return (
	<div className='aboutus conatiner'>
		<div className="aboutus-image">
			<img src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
		</div>
		{data.map((data)=>{
			return(
				<motion.section initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0.7 }
				}} key={data.id} className='aboutus-section'>
				<div className="aboutus-section-image">
					<img src={data.image} alt="" />
				</div>
				<div className="aboutus-section-info">
					<h1>{data.title}</h1>
					<p>{data.description}</p>
				</div>
			</motion.section>
			)
		})}
	</div>
  )
}
