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
	if (5 <= hour && hour < 12)
	{
		greeting = 'Good morning'
		styles.push(Styles.Light)
	}

	// Afternoon: 12:00 PM - 5:59 PM
	else if (12 <= hour && hour < 18)
	{
		greeting = 'Good afternoon'
	}

	// Evening: 6:00 PM - 8:59 PM
	else if (18 <= hour && hour < 21)
	{
		greeting = 'Good evening'
		styles.push(Styles.Light)
	}

	// Night: 9:00 PM - 4:59 AM
	else
	{
		greeting = 'It\'s late'
		styles.push(Styles.Light)
	}

	return (
		<span className={ styles.join(' ') }>
			{ `${greeting}, ${props.name}.` }
		</span>
	)
}

export default WelcomeBanner
