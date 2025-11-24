# react-component-library-storybook

## Description

A collection of reusable React components. Renders toasts, input fields, navigation, and more in Storybook.

## 📦 Installation

````bash
npm install
npm run dev
npm run build

![ ][(https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-01.jpg)](https://github.com/VictoriaKiselova/react-component-library/blob/main/screenshots/photo_2025-11-24_00-37-01.jpg?raw=true)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-14.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-19.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-37.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-40.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-44.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-37-57.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-38-00.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-38-03.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-38-19.jpg)
![ ](https://raw.githubusercontent.com/VictoriaKiselova/react-component-library/main/screenshots/photo_2025-11-24_00-38-23.jpg)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```


