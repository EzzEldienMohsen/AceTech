import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './../components';

const Home = () => {
  let theme = JSON.parse(localStorage.getItem('theme') || 'true');

  const [isDark, setIsDark] = React.useState(theme);
  const toggleTheme = () => {
    setIsDark(() => !isDark);
    localStorage.setItem('theme', JSON.stringify(!isDark));
  };
  return (
    <div
      data-theme={isDark ? 'luxury' : 'winter'}
      className="w-full h-[100vh] box-border ease-in"
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
