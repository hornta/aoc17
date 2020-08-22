module.exports = {
	env: {
		node: true,
	},
	extends: ["@hornta/eslint-config-hornta", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
	plugins: ["unicorn", "import"],
};
