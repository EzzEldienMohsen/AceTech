import React from 'react';
import { Header } from './components';

function App() {
  let theme = JSON.parse(localStorage.getItem('theme') || 'true');

  const [isDark, setIsDark] = React.useState(theme);
  const toggleTheme = () => {
    setIsDark(() => !isDark);
    localStorage.setItem('theme', JSON.stringify(!isDark));
  };
  return (
    <div
      data-theme={isDark ? 'luxury' : 'winter'}
      className="w-full h-[100vh] box-border"
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
