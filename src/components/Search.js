import React from 'react'
import Styles from '../sass/search.module.sass'

function Search(props)
{
	return (
		<input
			className={ Styles.Search }
			placeholder='Search...'/>
	)
}

export default Search
