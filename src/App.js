import './App.scss';
import Navigation from './components/navbar/Navigation';
import Router from './components/router/Router';
import { ThemeContext } from './context/Contxt';
import { useContext } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"


function App() {
  const { handleToggleTheme, theme } = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
      <Navigation />
      <Router />
      <div className=' fixed lg:top-5 top-[100px] right-4 z-[9999]'>
        <button className='dark:text-sec text-xl text-white px-[7px] py-[3px] dark:bg-white bg-sec rounded-lg' onClick={handleToggleTheme}>{theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}</button>
      </div>
    </div>
  );
}

export default App;
