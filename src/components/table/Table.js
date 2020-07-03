import { ExcelComponent } from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
	
	static root_class = 'excel__table';

	toHTML() {
		return createTable(30);
	}
}