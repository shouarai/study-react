import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const Home = (props) => {
	const [posts, setPosts] = useState([]);

	const getPosts = useCallback(async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const json = await res.json();
		console.log(json);
		setPosts(json);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]); //eslintがエラーを吐いているので一応 本来はなくてもよい
	console.log(posts); //最初は初期値の[]が入る。その後非同期でgetPosts()の値が入る
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			{posts.length > 0 ? (
				<ol>
					{posts.map((post) => {
						return <li key={post.id}>{post.title}</li>;
					})}
				</ol>
			) : null}
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
