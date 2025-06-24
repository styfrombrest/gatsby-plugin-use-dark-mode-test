import React from 'react'
import useDarkMode from 'use-dark-mode'

const ThemeSwitch = () => {
  const { value: isDarkMode, toggle } = useDarkMode(false, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    storageKey: 'darkMode',
  })

  return (
    <button
      onClick={toggle}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        transition: 'all 0.3s ease',
        color: 'var(--color-text)',
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeSwitch 