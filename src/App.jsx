import React from 'react';
import { Header } from './components';

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const toggleTheme = () => {
    setIsDark(() => !isDark);
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
