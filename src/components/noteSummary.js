import React from'react'

const Summary = () => {
	return (
		<div class="summary">
			<h3>Summary</h3>
			<article class="problem">
				<div class="head">
					<i class="fas fa-cog"></i>
					<h4>Problems</h4>
				</div>
				<ul>
					<li>Keeping track of everything that needs to be completed during the day can be a an overwhelming task. </li>
					<li>Keeping lists organized due to ever changing contents.</li>
					<li>Finding a particular note over a very large list.</li>
				</ul>
			</article>
			<article class="goals">
				<div class="head">
					<i class="fas fa-chart-line"></i>
					<h4>Goals</h4>
				</div>
				<ul>
					<li>Create easy note taking ability with summary at a glace.</li>
					<li>Easily organizable with drap and drop ability.</li>
					<li>For large lists, have searchable interface.</li>
				</ul>
			</article>
		</div>
	)
}

export default Summary