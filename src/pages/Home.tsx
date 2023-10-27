import { useState } from "react";
import reactLogo from "@assets/react.svg";
import tailwindLogo from "@assets/tailwind.svg";
import typescriptLogo from "@assets/typescript.svg";
import yarnLogo from "@assets/yarn.svg";
import folderLogo from "@assets/folder-favourite.svg";
import viteLogo from "/vite.svg";
import star from "@assets/star.svg";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col w-screen">
      <div className="grid grid-cols-3 mb-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo" alt="logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={typescriptLogo} className="logo" alt="logo" />
        </a>
        <a href="https://yarnpkg.com/" target="_blank">
          <img src={yarnLogo} className="logo" alt="logo" />
        </a>
        <a href="https://github.com/Idrisvohra9/iv-react-template-ts" target="_blank">
          <img src={folderLogo} className="logo" alt="logo" />
        </a>
      </div>
      <h1 className="w-1/2 text-center">Idris Vohra's React App Template with TS</h1>
      <div className="card flex flex-col ">
        <button onClick={() => setCount((count) => count + 1)} className="mb-4 w-1/2">
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
        <a
          href="https://github.com/Idrisvohra9/iv-react-template-js"
          target="_blank"
          className="flex bg-slate-950 text-2xl p-2 rounded-md items-center mt-3"
        >
          <img src={star} className="w-6 h-6 mr-2" alt="logo" />
          Starring the repo is appreciated!
        </a>
      </div>
    </div>
  );
}
  