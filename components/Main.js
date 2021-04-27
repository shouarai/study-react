import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "./Links";

export function Main(props) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Headline page={props.page}>
					{/* コンポーネントはchildrenで渡すことが多い */}
					<code className={styles.code}>pages/{props.page}.js</code>
				</Headline>
				<Links />
			</main>
		</div>
	);
}
