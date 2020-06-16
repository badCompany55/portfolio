import React from 'react'
import Layout from '../components/layout.js'
import Pt3SchedulerImg from '../components/imgs/pt3image.js'
import Summary from '../components/schedulerSummary.js'
import Carousel from '../components/carousel.js'
import contScheduleGIF from "../components/gifs/contractorSetSchedule.gif"
import contConfirmDenyGIF from "../components/gifs/contractorConfirmDenySched.gif"
import userRequestAppointGIF from "../components/gifs/userRequestAppointment.gif"
import userFeedbackGIF from "../components/gifs/userFeedback.gif"

const Scheduler = () => {
	return (
		<Layout>
			<main className="projectContainer">
				<header className="projectHeader">
					<h1 className="title">Inquiry</h1>
					<p className="description">A web application that simplifies the scheduling/payment workflow between contractor and customer.</p>
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
								<td><a href= "https://github.com/pt3-labs-contractor/PT3Labs_Contractor_FE">FONT</a></td>
								<td>N/A</td>
							</tr>
							<tr>
								<td className="techStack">NodeJS</td>
								<td><a href= "https://github.com/pt3-labs-contractor/PT3Labs_Contractor_BE">BACK</a></td>
							</tr>
							<tr>
								<td className="techStack">PostgresQL</td>
							</tr>
							<tr>
								<td className="techStack">OAuth</td>
							</tr>
							<tr>
								<td className="techStack">Stripe API</td>
							</tr>
						</tbody>
					</table>
					<div className="imgCont">
						<Pt3SchedulerImg/>
					</div>
				</header>
				<Summary/>
				<Carousel gifs={[contScheduleGIF, contConfirmDenyGIF, userRequestAppointGIF, userFeedbackGIF]} />
			</main>
		</Layout>
	)
}

export default Scheduler