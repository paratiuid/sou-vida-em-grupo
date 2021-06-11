import React from 'react'
import Document, {
	DocumentInitialProps,
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class AppDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
		): Promise<DocumentInitialProps> {
			const sheet = new ServerStyleSheet()
			const originalRenderPage = ctx.renderPage

			try {
				ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				})

				const initialProps = await Document.getInitialProps(ctx)
				return {
					...initialProps,
					styles: (
						<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						</>
						)
					}
				} finally {
					sheet.seal()
				}
			}

	render(): JSX.Element {
		return (
			<Html lang="pt">
			<Head>
			<title>Seguro de vida em grup | Sou Seguros</title>
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
			<body>
			<Main />
			<NextScript />
			</body>
			</Html>
		)
	}
}
