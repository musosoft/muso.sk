import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export function ThemeToggle({ className }) {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark);
      }}
      className={className}
    >
      {isDark ? (
        <HiOutlineMoon size="2em" className="text-gray-400" />
      ) : (
        <HiOutlineSun size="2em" className="text-yellow-300" />
      )}
    </button>
  );
}
