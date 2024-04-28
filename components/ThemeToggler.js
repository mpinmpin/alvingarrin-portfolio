import React, { useState } from 'react';

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const toggleCSS = () => {
    const linkTag = document.querySelector('#theme-link');
    if (linkTag) {
      linkTag.href = isDarkTheme ? '@/styles/dark.css' : '@/styles/light.css';
    }
  };

  return (
    <div>
      <button className='button-global' onClick={() => {toggleTheme(); toggleCSS();}}>Toggle Theme</button>
      <link id="theme-link" rel="stylesheet" href="@/styles/light.css" />
    </div>
  );
};

export default ThemeToggler;