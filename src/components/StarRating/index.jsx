import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
	<FaStar color={ selected ? "red" : "grey" } onClick={onSelect}/>
)

const StarRating = ({ totalStars = 5 , selectedStars = 0, selectedStarByUser, starClicked }) => {
	return (
		<div style={{ cursor: 'pointer' }}>
			{
				createArray(totalStars).map((n, i) => (
					<Star
						key={i}
						selected = { selectedStars ? selectedStars > i : selectedStarByUser > i }
                        onSelect= {() => { starClicked(i + 1) } }
					/>
				))
			}

		</div>
	)
}

export default StarRating;