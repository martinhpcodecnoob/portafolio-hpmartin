'use client'
import React, { useEffect, useState } from 'react'
import s from './Stars.module.css'
import {useTheme} from 'next-themes'
export default function Stars() {
    const {theme} =useTheme()
    console.log(theme);
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
  return (
    <>
        {
            isClient ? (
                <section className={`${theme === 'dark'? s.sectionStars : ''}`}>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                    <span className={`${theme === 'dark' ? s.spanStars : ''}`}></span>
                </section>
            ) : null
        }
    </>
  )
}
