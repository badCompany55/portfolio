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
					<li>Getting instant messaging in a secure environment can be difficult.</li>
					<li>Having instant messaging acrossed mutliple platforms can be troublesome without using different applications.</li>
				</ul>
			</article>
			<article class="goals">
				<div class="head">
					<i class="fas fa-chart-line"></i>
					<h4>Goals</h4>
				</div>
				<ul>
					<li>Facilitate a friend based contact service focued on mesaging</li>
					<li>Create two way connections between friends with instant updates via websockets and databes triggers.</li>
					<li>Have complete control your own messages with the abiltiy to friend, unfriend, or deny requests.</li>
				</ul>
			</article>
		</div>
	)
}

export default Summary