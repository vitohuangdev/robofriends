# robofriends

A small React app built with [Vite](https://vitejs.dev/). Search, filter, and play around with randomly generated robofriends.

## 🧭 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## ⚙️ Installation

```
git clone https://github.com/vitohuangdev/robofriends.git
cd robofriends
npm install
```

> Requires Node.js 18+.

## 🚀 Usage

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## 🧱 Project Structure

```
robofriends/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons, and static files
│   ├── components/  # Reusable UI components
│   ├── data/        # Mock data or JSON files
│   ├── App.jsx      # Root React component
│   ├── App.css      # App-specific styles
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── eslint.config.js # ESLint configuration
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js   # Vite configuration
└── README.md
```

## 📜 Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Build for production into `/dist`   |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint to check for code issues |

## 🧩 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- CSS Modules (for scoped styling)
