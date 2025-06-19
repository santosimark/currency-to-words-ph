const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function numberToWords(n) {
    if (n === 0) return 'zero';
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100)
        return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
    if (n < 1000)
        return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numberToWords(n % 100) : '');
    if (n < 1000000)
        return numberToWords(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + numberToWords(n % 1000) : '');

    return 'number too large';
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert a number (like 1250.50) to Philippine Peso check-style words
 */
function convertToWords(amount) {
    if (isNaN(amount)) return '';

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

// Export for use in other modules
module.exports = {
    convertToWords
};
