# 🔢 Number Converter

![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?style=for-the-badge\&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264de4?style=for-the-badge\&logo=css3\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

✨ A **modern and responsive web app** built with **JavaScript, HTML, and CSS** that converts numbers into **words or currency words** using the [Number Conversion SOAP API](https://www.dataaccess.com/webservicesserver/numberconversion.wso).

---

## 🚀 Live Demo

🔗 [https://ayesha-asadd.github.io/Number-Conversation-/](#) 

---

## 🎨 Features

* 🔄 Convert **integers to words** (e.g., `123 → one hundred twenty three`)
* 💵 Convert **numbers to currency words** (e.g., `123 → one hundred twenty three dollars`)
* 📱 Fully **responsive and elegant UI**
* ⚡ Real-time **SOAP API integration** with JavaScript
* 🎨 Gradient background, animations, and modern design

---

## 🖼️ Preview

<img width="1225" height="837" alt="image" src="https://github.com/user-attachments/assets/3f3c827c-0f19-4930-8594-a9794f3f0f51" />


---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| **HTML5**      | Structure of the app            |
| **CSS3**       | Styling, gradients & animations |
| **JavaScript** | Logic & SOAP API requests       |
| **SOAP API**   | Number Conversion Web Service   |
| **CORS Proxy** | To handle cross-origin requests |

---

## 📂 Project Structure

```
📦 number-converter
 ┣ 📜 index.html   → Main layout & UI
 ┣ 📜 script.js    → SOAP API integration logic
 ┣ 📜 style.css    → Styling & animations
 ┣ 📜 README.md    → Project documentation
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/number-converter.git
cd number-converter
```

### 2️⃣ Open in Browser

Just open `index.html` in your browser.

### 3️⃣ Try Conversions

* Select **Convert integer to words** → Enter `345` → Output: *three hundred forty five*
* Select **Convert number to currency words** → Enter `345` → Output: *three hundred forty five dollars*

---

## 📡 How It Works

This app connects to the **Number Conversion SOAP Web Service**:

* `NumberToWords` → Converts integers into words
* `NumberToDollars` → Converts numbers into currency words

It sends XML requests via `fetch()` and parses the SOAP response using **DOMParser** in JavaScript.

---

## 🤝 Contributing

Contributions are welcome! 🚀

* Fork this repository
* Create a feature branch (`feature-xyz`)
* Commit your changes
* Open a Pull Request

---

## 📜 License

Licensed under the **MIT License** – free to use, modify, and distribute.

