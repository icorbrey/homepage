import React from 'react'
import Styles from '../sass/welcome-banner.module.sass'

function WelcomeBanner(props)
{
	let hour = props.dateTime.getHours()
	let greeting
	let styles = [
		Styles.WelcomeBanner
	]

	// Morning: 5:00 AM - 11:59 AM
	// Afternoon: 12:00 PM - 5:59 PM
	// Evening: 6:00 PM - 8:59 PM
	// Night: 9:00 PM - 4:59 AM

	// Set proper greeting based on time
	greeting = 5 <= hour && hour < 12
		? 'Good morning'
		: 12 <= hour && hour < 18
			? 'Good afternoon'
			: 18 <= hour && hour < 21
				? 'Good evening'
				: 'It\'s late'
	
	// Set the font color to white if the background is dark
	if (hour < 12 || 18 <= hour)
		styles.push(Styles.Light)

	return (
		<span className={ styles.join(' ') }>
			{ `${greeting}, ${props.name}.` }
		</span>
	)
}

export default WelcomeBanner
