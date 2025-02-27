"use client"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";


function DarkModeSwitch() {

    const { theme, setTheme, systemTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
        {currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className="text-xl cursor-pointer hover:bg-amber-500"  /> : <MdDarkMode onClick={() => setTheme('dark')} className="text-xl cursor-pointer hover:bg-amber-500" />}


    </div>
  )
}

export default DarkModeSwitch