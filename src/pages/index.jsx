import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);

	const handleClick = useCallback(() => {
		if (count < 10) {
			setCount((count) => count + 1);
		}
	}, []);
	useEffect(() => {
		// console.log(`マウント時：${count}`);
		document.body.style.backgroundColor = "lightblue";
		return () => {
			// console.log(`アンマウント時：${count}`);
			document.body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<h1>{count}</h1>
			<button href='/about' onClick={handleClick}>
				ボタン
			</button>
			<Main page='index' />
			<Footer />
		</div>
	);
}
