import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Posts } from "src/components/Posts";
import { Header } from "src/components/Header";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<Posts />

			{/* nullで非表示にする
			{props.isShow ? <h1>{props.count}</h1> : null}
			<button onClick={props.handleClick}>ボタン</button>
			<button onClick={props.handleDisplay}>
				{props.isShow ? "非表示" : "表示"}
			</button>
			<input type='text' value={props.text} onChange={props.handleChange} />
			<button onClick={props.handleAdd}>追加</button>
			<ul>
				{props.array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page='index' />
			<Footer /> */}
		</div>
	);
};

export default Home;
