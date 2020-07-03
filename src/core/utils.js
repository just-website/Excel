export const utils = {
	parseMethodName(str) {
		if (!str)
		{
			return '';
		}
		return 'on' + str[0].toUpperCase() + str.slice(1);
	}
};