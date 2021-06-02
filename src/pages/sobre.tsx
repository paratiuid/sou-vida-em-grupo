import React from 'react';
import Head from "next/head";
import styles from "./index.module.scss"

import SousegurosLogo from "../assets/logo.sou.seguros.svg";

const About: React.FC = () => {
	return (
		<div>
			<Head>
				<title>About</title>
			</Head>

			<a href="/"><SousegurosLogo /></a>
			<main>
				<h1 className={styles.red}>Sobre o Sou Seguros</h1>
			</main>
		</div>
	)
}


export default About
