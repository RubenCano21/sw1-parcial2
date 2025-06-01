# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


## LIBRERIAS UTILIZADAS EN EL PROYECTO

- Libreria de CSS Daisy UI
```bash
npm i -D daisyui@latest
```

- Use daisyUI with Tailwind CSS CLI

```bash
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

## COMANDOS BASICOS DE GIT
- Realizar un Commit
`git commit -m "Descripción del commit o lo que se implementó"`
- Enviar los cambios al repositorio:
`git push origin [nombre_rama]`
- Obtener los cambios del repositorio:
`git pull origin [nombre_rama]`
- Crear una nueva rama: 
`git branch [nombre_rama]`

- Cambiar de rama:
`git switch [nombre_de_la_rama]`
- Fusionar las ramas (merge):
  1. Sitúate en la rama destino (la rama que va a recibir los cambios):
  `git switch [rama_destino]`
  2. Asegúrate de tener los últimos cambios:
  `git pull origin [rama_destino]`
  3. finalmente ingresamos el siguiente comando con el nombre de la rama de la cual queremos fusionar
  `git merge [rama_origen]`

