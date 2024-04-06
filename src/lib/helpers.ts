export const getTimeUntilSeptember12024 = () => {
	// Define the target date
	const targetDate = new Date('2024-09-01T00:00:00').getTime();

	// Get the current date and time
	const currentDate = new Date().getTime();

	// Calculate the difference in milliseconds
	const differenceInMilliseconds = targetDate - currentDate;

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
	return `${days}days ${hours}hours ${minutes}min ${seconds}sec`;
};

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
