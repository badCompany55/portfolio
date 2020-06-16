import React from 'react'

const Summary = () => {
	return (
		<div className="summary">
			<h3>Summary</h3>
			<article className="problem">
				<div className="head">
					<i class="fas fa-cog"></i>
					<h4>Problems</h4>
				</div>
				<ul>
					<li>Scheduling in a contractor can be diffiult do misaligned schedules, how busy the contractor is, and not knowing what is the best time for yourself and the contractor.</li>
					<li>Trying to schedule over the phone can often lead to inability to get ahold of one another, miscommunication for the scheduled time, as well as forgetfullness as there isn't a reminder. </li>
					<li>Payment can be cumbersome if one has to physically meet the contractor to make payment. </li>
				</ul>
			</article>
			<article className="goals">
				<div class="head">
					<i class="fas fa-chart-line"></i>
					<h4>Goals</h4>
				</div>
				<ul>
					<li>Facilitate ease scheduling by being able to coordinate the schedules of both customer and contractor through the use of a visual calendar. </li>
					<li>Create easy confirmation, reminders, cancelations, and reschedualing ability through the web app without the need for a phone conversation. </li>
					<li>Integrate payment processing for completed work through the Stripe API.</li>
				</ul>
			</article>
		</div>
	)
}

export default Summary