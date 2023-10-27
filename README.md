# IV React App Template with TypeScript 😎

This template provides all the features of Vite + Yarn + Tailwind + Headless UI + Custom Aliases for your application paths.

The best configuration there is!

## ✨ Perks of this template

- Super Fast dev Reloading with Vite and SWC ⛈️
- Static Type checking with TypeScript 🦸🏻
- Yarn as the package manager 🐈‍⬛
- Tailwindcss out of box! 💅🏻
- Headless UI to complement with Tailwindcss
- Best Folder structure for react apps 📂
- Customizable aliases to customize as per your wants!
- Pre-constructed Basic routes for navigation and Layout page.

> Looking for The same thing with JavaScript? [Check out](https://github.com/Idrisvohra9/iv-react-template-js)

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- Yarn (package manager)

## 🚀 Get Started

Follow these steps to bootstrap a powerpack of a React App:

1. Clone the repository:

```bash
git clone https://github.com/Idrisvohra9/iv-react-template-ts.git
```

2. Navigate to the project directory (Or optionally change the directory name to your project name and also change the name property inside the package.json file):

```bash
cd iv-react-template-ts
```

3. Install the dependencies:

```bash
yarn
```

4. Start the development server:

```bash
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## License 📜:

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## The Tools that come with the project 🛠️:

- [Vite + SWC](https://vitejs.dev) for Fast Refresh
- [TypeScript](https://www.typescriptlang.org/) for strict and static type checking
- [Tailwind CSS](https://tailwindcss.com) for Fast and beautiful Styling
- [Headless UI ](https://headlessui.com/) complementing the tailwindcss.
- [React](https://react.dev) as the framework.
- [Yarn](https://yarnpkg.com/) the best package manager.
