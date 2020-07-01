import {$} from '../../core/dom';
export class Excel {
	constructor(selector, options) {
		this.$element = $(selector);
		this.components = options.components || [];
	}

	getRoot() {
		const $excel_root = $.create('div', 'excel');
		this.components = this.components.map( Component => {
			const $component_root = $.create('div', Component.root_class);
			const component = new Component($component_root);
			$component_root.html(component.toHTML());
			$excel_root.append($component_root);
			return component;
		});
		return $excel_root;
	}

	render() {
		this.$element.append(this.getRoot());
		this.components.forEach(component => {
			component.init();
		});
	}
}