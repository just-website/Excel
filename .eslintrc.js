module.exports = {
	'parser': 'babel-eslint',
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'jquery': true,
		'node': true
	},
	'extends': 'eslint:recommended', // предустановленные наборы правил
	'globals': { // глобальные переменные
		'$': 'readonly',
	},
	'parserOptions': { // парсер
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'ignorePatterns': [
		'node_modules/', 
		'!.eslintrc.js',
	], // игнорирование файлов и каталогов
	'overrides': [ // исключения
		{
			'files': [
				'gulpfile.js'
			],
			'rules': {
				'indent': 'off'
			}
		}
	],
	'plugins': [ // плагины
	],
	'settings': {
	},
	'rules': { // правила
		'indent': [
			'warn',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'quotes': [
			'warn', 
			'single'
		],
		'semi': [
			'warn',
			'always'
		],
		'no-unused-vars': [
			'error', 
		],
		// 'require-jsdoc': ['error', {
		// 	'require': {
		// 		'FunctionDeclaration': false,
		// 		'MethodDefinition': true,
		// 		'ClassDeclaration': true,
		// 		'ArrowFunctionExpression': false,
		// 		'FunctionExpression': false
		// 	}
		// }]
	}
};