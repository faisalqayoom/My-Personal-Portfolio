import React, { createContext, useState, useEffect } from 'react'
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const handleToggleTheme = () => {
    localStorage.setItem("theme", theme === 'dark' ? 'light' : 'dark')
    console.log("button clicked")
    if (theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    const CheckStorage = localStorage.getItem('theme')
    if (CheckStorage !== null) {
      setTheme(CheckStorage)
    }
    else {
      setTheme('dark')
    }
  }, [])




  return (
    <ThemeContext.Provider
      value={{
        handleToggleTheme,
        theme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider