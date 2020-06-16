import React, {useState} from 'react'
import {Link} from 'gatsby'

const Carousel = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	return (
		<div className='messCarousel'>
		{props.gifs.map((x, i) => {
			const fullWord = x.match(/[cuAES]\w+\w/g)
			const phrase = (fullWord[0].match(/[A-Z][a-z]+/g).join(" ") || fullWord[1].match(/[A-Z][a-z]+/g).join(" "))
			return (
				<Link to={`#${x.slice(-7)}`} key={i} id={i} className={i === currentSlide ? "active" : "scrollLink"} onClick={((e) => {
					const id = e.target.id
					setCurrentSlide(Number(id))
				})}>{phrase}</Link>
			)
		})}
			<div className="messSlides">
				{props.gifs.map((x, i) => {
					return (
						<div key={x} id={x.slice(-7)} style={{backgroundImage: `url(${x})`}} className='gifs'></div>
					)
				})}
			</div>
		</div>
	)
}

export default Carousel