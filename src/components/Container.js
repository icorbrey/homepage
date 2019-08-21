import React from 'react'
import Styles from '../sass/container.module.sass'

function Container(props)
{
	// Get style from module
	let styles = [ Styles.Container ]

	// If this isn't a fluid container, prioritize prop breakpoints over style
	if (!props.fluid)
		styles.push(props.breakpoints || Styles.Breakpoints)

	// Allow overriding of classes
	if (props.className)
		styles.push(props.className)

	return (
		<div className={ styles.join(' ') }>
			{ props.children }
		</div>
	)
}

export default Container
