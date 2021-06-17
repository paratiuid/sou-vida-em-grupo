import { AppProps } from 'next/app'

import '../styles/Sou.scss' ;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component { ...pageProps } />
		</>
	)
}
