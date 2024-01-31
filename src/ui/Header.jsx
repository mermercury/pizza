import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useEffect, useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 dark:bg-yellow-200">
      <Link to="/" className="tracking-[5px]">
        Fast Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="py absolute right-5 top-[70px] rounded bg-black px-5 text-white hover:bg-stone-700 dark:bg-white dark:text-black"
      >
        {darkMode ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}
