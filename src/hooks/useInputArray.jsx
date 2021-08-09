import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const [array, setArray] = useState([]);

	const handleChange = useCallback((e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内にしてください");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			const newArray = [...prevArray, 1];
			return newArray;
		});
	}, []);
	return { text, array, handleChange, handleAdd };
};
