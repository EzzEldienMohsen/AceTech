import React from 'react';
import { pages } from './assets';
import { CiSun } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';
import { VscThreeBars } from 'react-icons/vsc';
import logo from './assets/golden-logo-for-site--91x91.png';
function App() {
  const [isDark, setIsDark] = React.useState(true);
  const toggleTheme = () => {
    setIsDark(() => !isDark);
  };
  return (
    <div
      data-theme={isDark ? 'luxury' : 'winter'}
      className="grid grid-cols-8 md:flex justify-between px-5 py-3 items-center md:px-10 md:py-5"
    >
      <img src={logo} className="col-span-5" />
      <div className="dropdown dropdown-end gri md:hidden col-span-1">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-transparent text-4xl "
        >
          <VscThreeBars />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {pages.map((link) => {
            return (
              <li
                key={link}
                className="mr-6 tracking-wide capitalize text-xl font-bold"
              >
                <a>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden justify-between items-center md:flex px-3 mr-10">
        {pages.map((link) => {
          return (
            <div
              key={link}
              className="mr-6 tracking-wide capitalize text-xl font-bold"
            >
              {link}
            </div>
          );
        })}
      </div>
      <button
        className="btn bg-transparent text-4xl md:text-2xl border-0 btn-ghost ease-linear col-span-2"
        onClick={toggleTheme}
      >
        {isDark ? <FaRegMoon /> : <CiSun />}
      </button>
    </div>
  );
}

export default App;
