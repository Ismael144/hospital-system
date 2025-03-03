const currencyFormatter = (value, options = {}) => {

    if (value === undefined || value === null) return;

    const formatter = new Intl.NumberFormat(options.locale || 'en-US', {
        style: options.style || 'decimal',
        currency: options.currency,
        minimumFractionDigits: options.minimumFractionDigits || 0,
        maximumFractionDigits: options.maximumFractionDigits || 2,
        ...options,
    });

    return formatter.format(value);

};

export default currencyFormatter;
