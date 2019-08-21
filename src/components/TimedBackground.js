import React from 'react'
import Granim from 'react-granim'

function TimedBackground(props)
{
	let style = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: -1
	}

	let hour = props.dateTime.getHours()

	function generateGradients(gradient, num)
	{
		let gradients = []
		for (let i = 0; i < gradient.length - 1; i++)
		{
			gradients.push([
				gradient[i],
				gradient[i + 1]
			])
		}
		return gradients
	}

	// Morning: 5:00 AM - 11:59 AM
	if (5 <= hour && hour < 12)
	{
		var gradient = [
			"#C0392B", "#BD3931", "#BA3A38", "#B83A3F", 
			"#B53B46", "#B23B4D", "#B03C54", "#AD3D5A", 
			"#AA3D61", "#A83E68", "#A53E6F", "#A33F76", 
			"#A03F7D", "#9D4083", "#9B418A", "#984191", 
			"#954298", "#93429F", "#9043A6", "#8E44AD"
		]

		return (
			<Granim style={ style } states={{
				'default-state': {
					gradients: generateGradients(gradient),
					transitionSpeed: 1000
				}
			}}/>
		)
	}

	// Afternoon: 12:00 PM - 5:59 PM
	else if (12 <= hour && hour < 18)
	{
		return (
			<Granim style={ style } states={{
				'default-state': {
					gradients: [
						['#2980B9', '#6DD5FA'],
						['#6DD5FA', '#FFFFFF']
					],
					transitionSpeed: 10000
				}
			}}/>
		)
	}

	// Evening: 6:00 PM - 8:59 PM
	else if (18 <= hour && hour < 21)
	{
		var gradient = [
			"#000046", "#01094E", "#021356", "#041C5E", 
			"#052666", "#072F6E", "#083976", "#0A427E", 
			"#0B4C86", "#0D558E", "#0E5F97", "#10689F", 
			"#1172A7", "#137BAF", "#1485B7", "#168EBF", 
			"#1798C7", "#19A1CF", "#1AABD7", "#1CB5E0"
		]

		return (
			<Granim style={ style } states={{
				'default-state': {
					gradients: generateGradients(gradient),
					transitionSpeed: 1000
				}
			}}/>
		)
	}

	// Night: 9:00 PM - 4:59 AM
	else
	{
		var gradient = [
			"#0F0C29", "#131031", "#181439", "#1D1941", 
			"#211D4A", "#262252", "#2B265A", "#302B63", 
			"#2E295C", "#2C2856", "#2A2750", "#28264A", 
			"#262544", "#24243E", "#20203A", "#1D1C37", 
			"#191833", "#161430", "#12102C", "#0F0C29"
		]

		return (
			<Granim style={ style } states={{
				'default-state': {
					gradients: generateGradients(gradient),
					transitionSpeed: 1000
				}
			}}/>
		)
	}
}

export default TimedBackground
