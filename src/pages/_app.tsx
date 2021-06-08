import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global';
import '../styles/Sou.scss' ;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Component { ...pageProps } />
			<GlobalStyle />
		</>
	)
}

export default App
