export const utils = {
	parseMethodName(str) {
		if (!str)
		{
			return '';
		}
		return 'on' + str[0].toUpperCase() + str.slice(1);
	}
};

export const getRange = (start, end) => {
	if (start > end) {
		[end, start] = [start, end];
	}
	let length = end - start + 1;
	return new Array(length).fill(null).map((_, index) => index + start);
};

export const getIds = (startCell, endCell) => {
	let [rowsStart, columsStart] = startCell.data.id.split(':');
	let [rowsEnd, columsEnd] = endCell.data.id.split(':');
	let rowsRange = getRange(+rowsStart, +rowsEnd);
	let columnsRange = getRange(+columsStart, +columsEnd);
	return columnsRange.map( column => rowsRange.map( row => `${row}:${column}`)).flat();
};