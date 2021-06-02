import React from 'react';
import Head from "next/head";
import styles from "./index.module.scss"

import SousegurosLogo from "../assets/logo.sou.seguros.svg";

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Home page</title>
			</Head>

			<SousegurosLogo />
			<main>
				<h1 className={styles.red}>Hello Word</h1>
				<a href="/sobre">Sobre</a>
			</main>
		</div>
	)
}


export default Home
