# demo-projects-ts

clone github repo to local and declare wokflow in readme file

01 - Create a react project with TS.

# commit -> created react project with TS

install dependencies `react-router-dom , react-icons , axios`

02 - create routes for different apps in App Component,
Create Component for different apps and initialize routes respectively.

# commit -> Created a components for different apps and initialized the routes for them in App Component

03 - install tailwind dependencies in vite `npm install -D tailwindcss postcss autoprefixer` and `npx tailwindcss init -p`

04 - create `tailwind.config.js` in the root of your project and paste below object.

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

05 - add below statements in root css file

@tailwind base;
@tailwind components;
@tailwind utilities;

# commit -> intalled dependencies for tailwindcss in project
