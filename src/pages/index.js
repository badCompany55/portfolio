import React from 'react'

import Layout from '../components/layout.js'
import LandingHeader from '../components/landingHeader.js'
import PicGrid from '../components/picGrid.js'
import SleepTrack from '../components/imgs/largeSleepTrackImg.js'
import Pt3Img from '../components/imgs/largePt3Img.js'
import NoteImg from '../components/imgs/largeNoteImg.js'
import MessImg from '../components/imgs/largeMessageImg.js'

const IndexPage = () => {
	return (
	<>
		<Layout>
			<LandingHeader/>
			<PicGrid pics={[MessImg, Pt3Img, SleepTrack, NoteImg]} class={"picWrapAni"} />
		</Layout>
	</>
	)
}

export default IndexPage