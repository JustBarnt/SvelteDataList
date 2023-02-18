module.exports = {
	"root": true,
	"parser": "@typescript-eslint/parser",
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	"plugins": ["svelte3", "@typescript-eslint"],
	"ignorePatterns": ["*.cjs"],
	"overrides": [{ "files": ["*.svelte"], "processor": "svelte3/svelte3" }],
	"settings": {
		"svelte3/typescript": () => require("typescript")
	},
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 2020
	},
	"env": {
		"browser": true,
		"es2017": true,
		"node": true
	},
	"rules": {
		"@typescript-eslint/array-type": "warn",
		"@typescript-eslint/brace-style": [
			"error",
			"allman",
			{
				"allowSingleLine": true
			}
		],
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/comma-spacing": [
			"error",
			{
				"after": true
			}
		],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-inferrable-types": 0,
		"@typescript-eslint/no-redeclare": 1,
		"@typescript-eslint/no-shadow": [
			"off"
		],
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/object-curly-spacing": [
			"error",
			"always"
		],
		"@typescript-eslint/prefer-for-of": "warn",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true
			}
		],
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/space-before-blocks": "off",
		"@typescrupt-eslint/space-before-function-paren": "off",
		"arrow-spacing": [
			"warn",
			{
				"after": true,
				"before": true
			}
		],
		"curly": [
			"error",
			"multi-or-nest"
		],
		"dot-location": [
			"error",
			"property"
		],
		"eqeqeq": "error",
		"no-console": "off",
		"no-constant-condition": 1,
		"no-empty": "error",
		"no-floating-decimal": "error",
		"no-lonely-if": "off",
		"no-undef": "off",
		"no-unreachable": 1,
		"no-var": 1,
		"prefer-const": 1,
		"yoda": "warn"
	}
};
