export const getTimeUntilMay23 = () => {
	// Get current date
	const now = new Date();
	const currentYear = now.getFullYear();
	
	// Create this year's birthday date
	let targetDate = new Date(currentYear, 4, 23); // Month is 0-based, so 4 = May
	
	// If this year's birthday has passed, use next year's date
	if (now > targetDate) {
		targetDate = new Date(currentYear + 1, 4, 23);
	}

	// Calculate the difference in milliseconds
	const differenceInMilliseconds = targetDate.getTime() - now.getTime();

	// Convert milliseconds to days, hours, minutes, and seconds
	const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor(
		(differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
	);
	const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

	// Return the result
	return `${days}days ${hours}h ${minutes}min ${seconds}sec`;
};

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
