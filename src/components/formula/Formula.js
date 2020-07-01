import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
	static root_class = 'excel__formula';
	constructor(root) {
		super(root, {
			componentName: 'Formula',
			listeners: ['input']
		});
		this.$root = root;
	}

	onInput(event) {
		const value = event.target.textContent;
		console.log(value);
		
	}

	toHTML() {
		return `
			<div class="info">fx</div>
			<div class="input" contenteditable spellcheck="false"></div>
		`;
	}
}