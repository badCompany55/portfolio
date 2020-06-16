import React from 'react'
import Helmet from 'react-helmet'

import Header from './header.js'
import '../styles/layout.scss'

const Layout = ({children}) => {
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
					<Header/>
					{children}
				</div>
			</div>
		</>
	)
}

export default Layout