import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
	return (
		<header className="mainHeader">
		<p>Zach Irvin</p>
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

export default Header