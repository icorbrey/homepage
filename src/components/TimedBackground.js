import React from 'react'
import Granim from 'react-granim'
import Particles from 'react-particles-js'
import { tryStatement } from '@babel/types';

function TimedBackground(props)
{
	function timeOfDay()
	{
		// Morning:    5:00 AM - 11:59 AM
		// Afternoon: 12:00 PM -  5:59 PM
		// Evening:    6:00 PM -  8:59 PM
		// Night:      9:00 PM -  4:59 AM

		const hour = props.dateTime.getHours()

		if (5 <= hour && hour < 12)
			return 'morning'
		
		if (12 <= hour && hour < 18)
			return 'afternoon'

		if (18 <= hour && hour < 21)
			return 'evening'

		return 'night'
	}

	let gradients = []
	switch(timeOfDay())
	{
		case 'morning':
			gradients = [
				['#f5af19', '#f12711'],
				['#ff416c', '#ff4b2b']
			]
			break

		case 'afternoon':
			gradients = [
				['#1c92d2', '#f2fcfe'],
				['#5b86e5', '#36d1dc']
			]
			break

		case 'evening':
			gradients = [
				['#1a2a6c', '#b21f1f'],
				['#1d2671', '#c33764']
			]
			break

		default:
			gradients = [
				['#0f0c29', '#302b63'],
				['#000428', '#004e92']
			]
			break
	}

	return (
		<div>
			<Granim
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: -200
				}}
				states={{
					'default-state': {
						gradients: gradients,
						transitionSpeed: 10000
					}
				}} />
			<Particles
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: -100
				}}
				params={{
					particles: {
						number: {
							value: 160,
							density: {
								enable: false
							}
						},
						line_linked: {
							enable: false
						},
						move: {
							random: true,
							speed: 1,
							direction: 'top',
							out_mode: 'out'
						},
						size: {
							value: 3,
							random: true,
							anim: {
								speed: 4,
								size_min: 0.3
							}
						}
					},
					retina_detect: true
				}}/>
		</div>
	)
}

export default TimedBackground
