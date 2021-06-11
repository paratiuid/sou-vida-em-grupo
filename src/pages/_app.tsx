import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global';
import '../styles/Sou.scss' ;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="googlebot" content="noindex" />
				<meta name="description" content="Seguro de vida em grupo - Cuidar do time é garantir a saúde financeira da sua empresa" />

				<meta name="twitter:card" content="summary" key="twcard" />
				<meta name="twitter:creator" content="" key="twhandle" />

				<meta property="og:url" content="t" key="ogurl" />
				<meta property="og:image" content="t" key="ogimage" />
				<meta property="og:site_name" content="t" key="ogsitename" />
				<meta property="og:title" content="t" key="ogtitle" />
				<meta property="og:description" content="t" key="ogdesc" />

				<title>Seguro de Vida Coletivo para Funcionários | Sou Seguros</title>
				<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				/>
				<link
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
				rel="stylesheet"
				/>
			</Head>
			<Component { ...pageProps } />
			<GlobalStyle />
		</>
	)
}

export default App
