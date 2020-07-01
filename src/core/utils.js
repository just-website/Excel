export const utils = {
	methodName(str) {
		if (!str)
		{
			return '';
		}
		return 'on' + str[0].toUpperCase() + str.slice(1);
	}
};