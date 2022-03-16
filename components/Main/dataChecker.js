export const dateCheckHandler = (dateInput) => {
	const dateValue = new Date();
	const currentDate = dateValue.getMonth();
	const showDate = currentDate + 1;
	console.log(showDate);
	console.log(dateInput);
	return showDate;
};
