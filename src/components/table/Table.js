import { ExcelComponent } from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './functions';
import {TableSelection} from './TableSelection';
import {$} from '../../core/dom';
import {getIds} from '../../core/utils';
export class Table extends ExcelComponent {
	constructor(root) {
		super(root, {
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
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

	onMousedown(event) {
		let {resize, cell: isCell} = event.target.dataset;
		if (resize) {
			resizeHandler(this.root, event);
		}
		if (isCell) {
			let cell = $(event.target);
			if (event.shiftKey) {
				let group = getIds(this.selection.lastActiveCell, cell)
					.map((id) => this.root
						.find(`[data-id="${id}"]`));
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