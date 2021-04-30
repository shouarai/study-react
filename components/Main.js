import classes from "./Main.module.css";
import { Headline } from "../components/Headline";
import { Links } from "./Links";

export function Main(props) {
	return (
		<main className={classes.main}>
			<Headline page={props.page}>
				{/* コンポーネントはchildrenで渡すことが多い */}
				<code className={classes.code}>pages/{props.page}.js</code>
			</Headline>
			<Links />
		</main>
	);
}
