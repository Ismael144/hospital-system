import { useState, useEffect } from 'react';

const useNumberFormatter = (value, options = {}) => {
    const [formattedValue, setFormattedValue] = useState('');

    useEffect(() => {
        if (value === undefined || value === null) return;
        
        const formatter = new Intl.NumberFormat(options.locale || 'en-US', {
            style: options.style || 'decimal',
            currency: options.currency,
            minimumFractionDigits: options.minimumFractionDigits || 0,
            maximumFractionDigits: options.maximumFractionDigits || 2,
            ...options,
        });

        setFormattedValue(formatter.format(value));
    }, [value, options]);

    return formattedValue;
};

export default useNumberFormatter;
