import React, { Component } from 'react'
import Styles from '../sass/app.module.sass'

import Search from './Search'
import Container from './Container'
import WelcomeBanner from './WelcomeBanner'
import TimedBackground from './TimedBackground';

export default class App extends Component
{
	constructor(props)
	{
		super(props)

		this.state = {
			dateTime: new Date(0, 0, 0, 3, 0, 0, 0)
		}
	}

	render()
	{
		return (
			<div className={ Styles.Root }>
				<TimedBackground dateTime={ this.state.dateTime } />
				<div className={ Styles.App }>
					<Container className={ Styles.Container }>
						<WelcomeBanner
							dateTime={ this.state.dateTime }
							name='Isaac' />
						<Search />
					</Container>
				</div>
			</div>
		)
	}
}
