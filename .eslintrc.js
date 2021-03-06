module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
		"next",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	plugins: [],
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-undef": "error", //未定義の変数のエラーとする
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": "off",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
