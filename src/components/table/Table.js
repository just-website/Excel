import { ExcelComponent } from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './functions';
import {TableSelection} from './TableSelection';
import {$} from '../../core/dom';
import {getIds} from '../../core/utils';
export class Table extends ExcelComponent {
	constructor(root) {
		super(root, {
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup', 'keydown']
		});
		this.root = root;
	}
	static root_class = 'excel__table';

	init() {
		super.init();
		let cell = this.root.find('[data-id="0:0"]');
		this.selection = new TableSelection();
		this.selection.select(cell);
	}

	toHTML() {
		return createTable(30);
	}

	onClick() {
		// console.log('click', {event});
	}

	onKeydown(event) {
		let {code, target, shiftKey} = event;
		let currentCodes = ['Enter', 'Tab', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];
		if (currentCodes.includes(code) && !shiftKey) {
			let currentId = $(target).data.id;
			let nextId = getNextId(currentId, code);
			let nextElement = this.root.find(`[data-id="${nextId}"]`);
			this.selection.select(nextElement);
		}
	}

	onMousedown(event) {
		let {resize, cell: isCell} = event.target.dataset;
		if (resize) {
			resizeHandler(this.root, event);
		}
		if (isCell) {
			let cell = $(event.target);
			if (event.shiftKey) {
				let group = getIds(this.selection.lastActiveCell, cell)
					.map((id) => this.root.find(`[data-id="${id}"]`));
				this.selection.selectGroup(group);
			} else {
				this.selection.select(cell);
			}
		}
	}

	onMousemove() {
		// console.log('mousemove', {event});
	}

	onMouseup() {
		// console.log('mouseup', {event});
	}
}

function getNextId(id, keyCode) {
	let [row, column] = id.split(':');
	switch (keyCode) {
		case 'Tab':
		case 'ArrowRight':
			column++;
			break;
		case 'ArrowLeft': 
			column--;
			break;
		case 'ArrowUp': 
			row--;
			break
		case 'ArrowDown': 
		case 'Enter': 
			row++;
	}
	if(column < 0) {
		column = 0;
	}
	if (row < 0) {
		row = 0;
	}
	return `${row}:${column}`;
}