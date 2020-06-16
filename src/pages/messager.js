import React from 'react'
import Layout from '../components/layout.js'
import MessImg from '../components/imgs/messageImg.js'
import MessLoginGif from '../components/gifs/userLogin.gif'
import MessUsageGif from '../components/gifs/userMessage.gif'
import Summary from '../components/messagerSummary'
import Carousel from '../components/messageAppCarousel.js'

const Message = () => {
	return (
		<Layout>
			<main className="projectContainer">
				<header className="projectHeader">
					<h1 className="title">Messager</h1>
					<p className="description">A PWA application facilitating instant messaging between confirmed friends.</p>
					<table>
						<thead>
							<tr>
								<th>Tech Stack</th>
								<th>Code</th>
								<th>Live Site</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="techStack">React</td>
								<td><a href= "https://github.com/zacheryirvin/messageAppFront">FRONT</a></td>
								<td><a href="https://messageapp.netlify.app/">SITE</a></td>
							</tr>
							<tr>
								<td className="techStack">NodeJS</td>
								<td><a href="https://github.com/zacheryirvin/messageAppBack">BACK</a></td>
							</tr>
							<tr>
								<td className="techStack">PostgresQL</td>
							</tr>
							<tr>
								<td className="techStack">Triggers</td>
							</tr>
							<tr>
								<td className="techStack">Pusher API</td>
							</tr>
						</tbody>
					</table>
					<div className="imgCont">
						<MessImg/>
					</div>
				</header>
				<Summary/>
				<Carousel gifs={[MessLoginGif, MessUsageGif]} />
			</main>
		</Layout>		
	)
}

export default Message