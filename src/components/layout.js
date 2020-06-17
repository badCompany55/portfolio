import React, {useState} from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'

import Header from './header.js'
import MobileHeader from './mobileNav.js'
import '../styles/layout.scss'

const Layout = ({children}) => {
	const [currentClass, setCurrentClass] = useState('hidden')
	const navClick = ((e) => {
		currentClass === 'mobileHeaderOpen'
		? setCurrentClass('mobileHeaderClose')
		: setCurrentClass('mobileHeaderOpen')
	})
	return (
		<>
			<Helmet>
				<script 
					src="https://kit.fontawesome.com/7fe8297e16.js"
					crossorigin="anonymous"
				></script>
			</Helmet>
			<div className="outerContainer">
				<div className="innerContainer">
					<i className="fas fa-bars" onClick={navClick}></i>
					<MobileHeader class={currentClass}/>
					<Header/>
					{children}
				</div>
			</div>
		</>
	)
}

export default Layout