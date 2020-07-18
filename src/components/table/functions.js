import {$} from '../../core/dom';

export function resizeHandler(root, event) {
	let resizer = $(event.target);
	if ($(event.target).data.resize === 'column') {
		let column = $(event.target).closest('[data-type="resizable"]');
		let { width: colWidth} = column.getCoords();
		let {left: resLeft, width: resWidth, top: resTop} = resizer.getCoords();
		let xCoord;
		let cels = root.findAll(`[data-index="${column.data.index}"]`);
		document.onmousemove = event => {
			let delta = event.x - resLeft + colWidth - resWidth;
			xCoord = delta;
			resizer.style({
				bottom:  -document.documentElement.clientHeight + resTop + 'px',
				left: xCoord  + 'px',
				opacity: 1
			});
		};
		document.onmouseup = () => {
			resizer.style({
				bottom:  0,
				right: 0,
				opacity: 0
			});
			cels.forEach( cell => $(cell).style({width: xCoord + resWidth + 'px'}));
			document.onmousemove = null;
			document.onmouseup = null;
		};
	} else if ($(event.target).data.resize === 'row') {
		let row = $(event.target).closest('[data-type="resizable"]');
		let {bottom, height} = row.getCoords();
		let delta;
		document.onmousemove = event => {
			delta = bottom - event.y;
			resizer.style({
				right:  -document.documentElement.clientWidth + 'px',
				bottom: delta  + 'px',
				opacity: 1
			});
		};
		document.onmouseup = () => {
			document.onmousemove = null;
			document.onmouseup = null;
			let rowHeight = height - delta + 'px';
			row.style({height: rowHeight});
			resizer.style({
				bottom: 0,
				right: 0,
				opacity: 0
			});
		};
	}
}