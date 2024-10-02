import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./Components/themeBtn";
import Card from "./Components/Card";


function App() {
    const [themeMode, setThemeMode] = useState("Light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    
    const darkTheme = () => {
        setThemeMode("dark")
    }
    
// Actual Change in a Theme 

useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)    
}, [themeMode])
    
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
