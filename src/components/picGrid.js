import React from 'react'

const PicGrid = (props) => {
	return (
		<div className="picGrid">
		{props.pics.map(x => {
			return (
				<div className={props.class}>
				{x()}
				</div>
			)
		})}
		</div>
	)
}

export default PicGrid