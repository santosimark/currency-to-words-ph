const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'
];

const scales = [
    '', 'thousand', 'million', 'billion'
];

// Convert a number < 1000 to words
function convertHundreds(n) {
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) {
        return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
    }
    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    return ones[hundreds] + ' hundred' + (remainder ? ' ' + convertHundreds(remainder) : '');
}

// Convert any number to words
function numberToWords(n) {
    if (n === 0) return 'zero';

    let result = '';
    let scaleIndex = 0;

    while (n > 0) {
        const chunk = n % 1000;
        if (chunk > 0) {
            const chunkText = convertHundreds(chunk);
            const scale = scales[scaleIndex];
            result = chunkText + (scale ? ' ' + scale : '') + (result ? ' ' + result : '');
        }
        n = Math.floor(n / 1000);
        scaleIndex++;
    }

    return result.trim();
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main converter
function convertToWords(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) return '';

    const [pesoPart, centPart] = amount.toFixed(2).split('.').map(Number);

    const pesoWords = numberToWords(pesoPart);
    const centWords = numberToWords(centPart);

    const pesoLabel = pesoPart === 1 ? 'peso' : 'pesos';
    const centLabel = centPart === 1 ? 'centavo' : 'centavos';

    if (centPart === 0) {
        return `${capitalize(pesoWords)} ${pesoLabel}`;
    }

    return `${capitalize(pesoWords)} ${pesoLabel} and ${centWords} ${centLabel}`;
}

// Export
module.exports = {
    convertToWords
};
