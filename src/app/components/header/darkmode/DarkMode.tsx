'use client'
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { memo, useState } from "react"

function DarkMode(){

    let [isDark , setIsDark] = useState<boolean>(false)

    const changeTheme = () => {
        document.body.classList.toggle('dark')
        setIsDark(isDark == false ? true : false)
    }

    return(
        isDark ? (
            <GoSun onClick={changeTheme} className="cursor-pointer text-yellow-500" size={23} />
        ) : (
            <IoMoon onClick={changeTheme} className="cursor-pointer" size={23} />
        )
    )
}
export default memo(DarkMode);