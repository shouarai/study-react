import { useEffect, useState, useCallback } from "react";

export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getPosts = useCallback(async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			if (!res.ok) {
				throw new Error("エラーが発生したためデータの取得に失敗しました"); //catch(error)に飛ぶ
			}
			const json = await res.json();
			console.log(json);
			setPosts(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]); //eslintがエラーを吐いているので一応 本来はなくてもよい
	console.log(posts); //最初は初期値の[]が入る。その後非同期でgetPosts()の値が入る

	if (loading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (posts.length === 0) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{posts.map((post) => {
				return <li key={post.id}>{post.title}</li>;
			})}
		</ol>
	);
};
