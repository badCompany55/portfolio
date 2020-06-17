import React, {useState} from 'react'
import {Link} from 'gatsby'


const MobileNav = (props) => {
	const [currentClass, setCurrentClass] = useState(null)
	const navClick = ((e) => {
		setCurrentClass('mobileHeaderClose')
	})
	return (
		<header className={currentClass || props.class}>
			<nav>
				<Link to="/">Projects</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<a href="https://github.com/zacheryirvin">Github</a>
				<a href="https://www.linkedin.com/in/zach-irvin/">LinkedIn</a>
			</nav>
		</header>
	)
}
export default MobileNav