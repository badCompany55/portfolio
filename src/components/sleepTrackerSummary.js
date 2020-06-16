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
					<li>Getting the optimal amount of sleep can be difficult.</li>
					<li>Getting to bed at the right time and falling asleep consistently.</li>
					<li>Justification for the correct sleep patterns.</li>
				</ul>
			</article>
			<article className="goals">
				<div class="head">
					<i class="fas fa-chart-line"></i>
					<h4>Goals</h4>
				</div>
				<ul>
					<li>Establish current sleep patterns of user through user input.</li>
					<li>Determine weaknesses in sleep patterns</li>
					<li>Offer corrective guidlines for better sleep based on the data.</li>
				</ul>
			</article>
		</div>
	)
}

export default Summary