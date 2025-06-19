# 🇵🇭 currency-to-words-ph

**Convert Philippine Peso amounts into readable words** — perfect for checks, invoices, receipts, and official documents.

> Example: `1250.50` → `"One thousand two hundred fifty pesos and fifty centavos"`

---

## ✨ Features

- Converts numbers to **check-style currency text**
- Handles both **pesos** and **centavos**
- Proper **pluralization** (e.g., *peso* vs *pesos*)
- Lightweight, no external dependencies
- Easy to integrate in Node, Vue, React, or Laravel projects

---

## 📦 Installation

```bash
npm install currency-to-words-ph
```

---

## 🚀 Usage

```bash
const { convertToWords } = require('currency-to-words-ph');

console.log(convertToWords(1250.50));
// Output: "One thousand two hundred fifty pesos and fifty centavos"

//MORE EXAMPLES

convertToWords(1.00);
// "One peso"

convertToWords(1.01);
// "One peso and one centavo"

convertToWords(0);
// "Zero pesos"

convertToWords(10500.25);
// "Ten thousand five hundred pesos and twenty-five centavos"

```

## ✅ Use Cases

🧾 PDF receipts

💵 Check printing

🧮 Accounting software

📃 Government bidding forms

🧑‍💼 Invoicing tools (Laravel, Vue, etc.)

## 🛠 Roadmap

- [ ] Filipino (Tagalog) language support

- [ ] Add support for millions/billions

- [ ] Add CLI: currency-to-words 1234.56

- [ ] Add customization options (uppercase, suffix like "only")