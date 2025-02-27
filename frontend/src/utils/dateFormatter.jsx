function formatDate(dateStr) {
    // Create a Date object from the input string.
    const date = new Date(dateStr);

    // Check if the date is valid.
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }

    // Get month, day, and year using UTC methods.
    const month = date.getUTCMonth() + 1; // Months are zero-indexed.
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Return the formatted date string.
    return `${month}/${day}/${year}`;
}

export default formatDate;