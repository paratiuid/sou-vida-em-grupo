export function gtmevent({ event }) {
	window['dataLayer'] = window['dataLayer'] || [];
	window['dataLayer'].push({
		event
	});
};
