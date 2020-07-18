import { ExcelComponent } from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './functions';
export class Table extends ExcelComponent {
	constructor(root) {
		super(root, {
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
		});
		this.root = root;
	}
	static root_class = 'excel__table';

	toHTML() {
		return createTable(30);
	}

	onClick() {
		// console.log('click', {event});
	}

	onMousedown(event) {
		let {resize} = event.target.dataset;
		if (resize) {
			resizeHandler(this.root, event);
		}
	}

	onMousemove() {
		// console.log('mousemove', {event});
	}

	onMouseup() {
		// console.log('mouseup', {event});
	}
}