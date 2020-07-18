const CODES = {
	'A': 65,
	'Z': 90
};

function createCell(data = '', index) {
	return `
		<div class="cell" contenteditable="" data-index="${index}">
			${data}
		</div>
	`;
}

function createRow(info = '', data = '') {
	const resize = info ? '<div class="row-resize" data-resize="row"></div>' : '';
	return `
	<div class="row" data-type="resizable">
		<div class="row-info">
			${info}
			${resize}
		</div>
		<div class="row-data">
			${data}
		</div>
	</div>
	`;
}

function createColumn(data, index) {
	const resize = '<div class="col-resize" data-resize="column"></div>';
	return `
		<div class="column" data-type="resizable" data-index="${index}">
			${data}
			${resize}
		</div>
	`;
}

function fromCharCode(_, index) {
	return String.fromCharCode(CODES.A + index);
} 

export function createTable(rowsCount = 30) {
	const rows = [];
	const colsCount = CODES.Z - CODES.A + 1;
	const header = new Array(colsCount)
		.fill('')
		.map(fromCharCode)
		.map(createColumn)
		.join('');

	const body = new Array(rowsCount)
		.fill('')
		.map((el, index) => {
			const rowData = new Array(colsCount)
				.fill('')
				.map(createCell)
				.join('');
			return createRow(index + 1, rowData);
		}).join('');

	rows.push(createRow('', header));
	rows.push(body);

	return rows.join('');
}