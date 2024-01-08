import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { BsSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";

export default function ModTheme() {
    const {theme,setTheme} = useTheme()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    
    
    return (
        <>
            {
                isClient ? 
                theme === 'light' ?
                (
                    <button
                        className='text-[1.4rem]'
                        onClick={() => setTheme('dark')}
                    >
                        <IoIosMoon/>
                    </button>
                ) : 
                theme === 'dark' ? (
                    <button
                        className='text-[1.4rem]'
                        onClick={() => setTheme('light')}
                    >
                        <BsSunFill/>
                    </button>
                )
                : null
                :null
            }
        </>
    )
}
