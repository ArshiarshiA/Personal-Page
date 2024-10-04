'use client'
import Link from "next/link";
import DarkMode from "../darkmode/DarkMode";
import { MouseEvent, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { CiUmbrella } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {

    let item = useRef<HTMLDivElement>(null)

    const modalHandler = () => {
        item.current?.classList.add('w-full')
    }

    const closeHandler = () => {
        item.current?.classList.remove('w-full')
    }

    return (
        <header>
            <nav className="max-w-[1200px] m-auto">
                <div className="flex justify-between py-10 px-3">
                    <div className="max-[600px]:hidden">
                        <ul className="flex gap-16">
                            <li className="hover:text-purple-700 transition-all"><Link href='/'>HOME</Link></li>
                            <li className="hover:text-purple-700 transition-all"><a href='#aboutMe'>ABOUT ME</a></li>
                            <li className="hover:text-purple-700 transition-all"><a href='#WhatCanIDo'>WHAT CAN I DO</a></li>
                            <li className="hover:text-purple-700 transition-all"><a href='#Services'>SERVICE</a></li>
                        </ul>
                    </div>
                    <div
                        ref={item}
                        id="set"
                        className="bg-white dark:bg-black fixed right-0 top-0 z-20 h-full overflow-hidden w-0 transition-all"
                    >
                        <div className="p-5 flex flex-col justify-between h-full">
                            <div>
                                <ul className="flex flex-col gap-10">
                                    <li className="flex items-center gap-2 transition-all border-b pb-2">
                                        <CiHome size={25} />
                                        <Link href='/'>HOME</Link>
                                    </li>
                                    <li className="flex items-center gap-2 transition-all border-b pb-2">
                                        <CiUser size={25} />
                                        <a href='#aboutMe'>ABOUT ME</a>
                                    </li>
                                    <li className="flex items-center gap-2 transition-all border-b pb-2">
                                        <CiSun size={25} />
                                        <a href='#WhatCanIDo'>WHAT CAN I DO</a>
                                    </li>
                                    <li className="flex items-center gap-2 transition-all border-b pb-2">
                                        <CiUmbrella size={25} />
                                        <a href='#Services'>SERVICE</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <RxCross1 onClick={closeHandler} size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <div onClick={modalHandler} className="hidden max-[600px]:block cursor-pointer">
                            <CiMenuFries size={23} />
                        </div>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}