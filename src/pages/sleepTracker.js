import React from 'react'
import Layout from '../components/layout.js'
import Summary from '../components/sleepTrackerSummary.js'
import PicGrid from '../components/picGrid.js'

import SleepTracker from '../components/imgs/sleepimage.js'
import SleepTrackChart from '../components/imgs/sleepTrackChart.js'
import SleeptrackInitial from '../components/imgs/sleepTrackInital.js'
import SleepTrackMoodData from '../components/imgs/sleepTrackMoodData.js'
import SleepTrackSleepData from '../components/imgs/sleepTrackSleepData'

const Tracker = () => {
	return (
		<Layout>
			<main className="projectContainer">
				<header className="projectHeader">
					<h1 className="title">Sleep Tracker</h1>
					<p className="description">A web application to help record sleep patterns and achieve optimal sleep based on mood and sleep time.</p>
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
								<td><a href= "https://github.com/sleep-tracker-pt/bw-sleep-tracker-pt-fe">FRONT</a></td>
								<td>N/A</td>
							</tr>
							<tr>
								<td className="techStack">NodeJS</td>
								<td><a href= "https://github.com/sleep-tracker-pt/bw-sleep-tracker-pt-be"> BACK</a></td>
							</tr>
							<tr>
								<td className="techStack">PostgresQL</td>
							</tr>
							<tr>
								<td className="techStack">BCrypt</td>
							</tr>
							<tr>
								<td className="techStack">JWT Tokens</td>
							</tr>
						</tbody>
					</table>
					<div className="imgCont">
						<SleepTracker/>
					</div>
				</header>
				<Summary/>
				<PicGrid pics={[SleeptrackInitial, SleepTrackChart, SleepTrackMoodData, SleepTrackSleepData]} class="picWrap"/>
			</main>
		</Layout>
	)
}

export default Tracker