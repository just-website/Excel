export class TableSelection {
	constructor() {
		this.group = [];
		this.selectClass = 'selected';
		this.lastActiveCell = null;
	}

	select(element) {
		this.unselectAll();
		this.group.push(element);
		element.addClass(this.selectClass);
		this.lastActiveCell = element;
	}

	selectGroup(elements) {
		this.unselectAll();
		elements.forEach( element => {
			element.addClass(this.selectClass);
		});
		this.group = elements;
	}

	unselect(element) {
		element.removeClass(this.selectClass);
		this.group = this.group.filter( groupElement => groupElement !== element);
	}

	unselectAll() {
		this.group.forEach( element => element.removeClass(this.selectClass));
		this.group = [];
	}
}