import React from 'react'
import Layout from '../components/layout.js'

import Summary from '../components/noteSummary.js'
import Carousel from '../components/carousel.js'

import addNoteGIF from "../components/gifs/AddNote.gif"
import editAndDeleteGIF from "../components/gifs/EditAndDelete.gif"
import sortAndSearchGIF from "../components/gifs/SortAndSearch.gif"
import NoteTakingImg from "../components/imgs/noteimage.js"

const Note = () => {
	return (
		<Layout>
			<main className="projectContainer">
				<header className="projectHeader">
					<h1 className="title">Note Taker</h1>
					<p className="description">A web application that allows for quick and easy note/reminder creation, edit, and delete.</p>
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
								<td><a href= "https://github.com/zacheryirvin/front-end-project-week">LINK</a></td>
								<td>N/A</td>
							</tr>
							<tr>
								<td className="techStack">Redux</td>
							</tr>
							<tr>
								<td className="techStack">PostgresQL</td>
							</tr>
							<tr>
								<td className="techStack">LESS</td>
							</tr>
						</tbody>
					</table>
					<div className="imgCont">
						<NoteTakingImg/>
					</div>
				</header>
				<Summary/>
				<Carousel gifs={[addNoteGIF, editAndDeleteGIF, sortAndSearchGIF]} />
			</main>
		</Layout>
	)
}

export default Note