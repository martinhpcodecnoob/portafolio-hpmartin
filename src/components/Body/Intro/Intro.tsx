'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Perfil from '../../../../public/perfil.png'
import { IBM_Plex_Mono } from "next/font/google";
const ibm = IBM_Plex_Mono({ subsets: ['cyrillic-ext'], weight:'700' });
import s from './Intro.module.css'

export default function Intro({contactme,introText}:{contactme:string,introText:string}) {
    const textIntro:string = introText
    const [textVisible, setTextoVisible] = useState<string>('');
    const [textNoVisible, setTextNoVisible] = useState<string>(textIntro);
    const time = 100
    
    useEffect(() => {
        const intervalo = setInterval(() => {
            if (textNoVisible.length > 0) {
            setTextoVisible((prevTextoVisible) => prevTextoVisible + textNoVisible[0]);
            setTextNoVisible((prevTextNoVisible) => prevTextNoVisible.slice(1));
            } else {
            // Reiniciar cuando se haya escrito todo el texto
            // setTextoVisible('');
            // setTextNoVisible(textIntro);
            }
        }, time);
    
        // Limpiar intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
    }, [textNoVisible])
    

    return (
        <main className='flex justify-between lgx:flex-col mt-9'>
            <div>
                <div className={`text-[1.5rem] mdx:text-[1.2rem] ${ibm.className}`}>
                    Martin Hernandez
                </div>
                <h1 className='text-[4rem] mdx:text-[3rem]'>
                    <strong className={`${s.lightBlue} ${ibm.className}`}>
                        Full Stack
                    </strong>
                    {" "}Engineer
                </h1>
                <div id='typewriter1' className={`text-[1.5rem] mdx:text-[1.2rem]`}>
                    {textVisible}|
                </div>
                <div className='my-5'>
                    <a className={`bg-gradient-to-r from-[#0A3FFB] to-[#d41919] text-white px-4 py-2 rounded-[1rem]`} href='#footer'>
                        {contactme}
                    </a>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className={`w-[25rem] h-[22rem] flex justify-center items-center relative mdx:hidden`}>
                    <Image alt='perfil' className={`h-[16rem] w-[16rem] rounded-[8rem] z-30 ${s.fly1}`} src={Perfil}/>
                    <div className={`absolute left-0 top-0 z-10 ${s.fly2}`}>
                        <svg width="380" height="325" viewBox="0 0 380 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="sign2" d="M115.501 318C110.342 318.017 105.388 315.078 101.717 309.823L10.3399 178.992C8.54603 176.424 7.12172 173.365 6.14959 169.992C5.17747 166.619 4.67694 163 4.67694 159.344C4.67694 155.689 5.17747 152.07 6.14959 148.697C7.12172 145.324 8.54603 142.265 10.3399 139.696L101.348 9.39417C105.139 3.99206 110.247 0.975855 115.563 1.00015C120.878 1.02444 125.973 4.08726 129.741 9.52392C133.512 15.0046 135.631 22.4304 135.631 30.1725C135.631 37.9146 133.513 45.3406 129.741 50.8214L62.1147 148.875C60.0078 151.937 58.8246 156.086 58.8246 160.411C58.8246 164.737 60.0078 168.885 62.1147 171.947L129.375 269.468C132.121 273.443 133.992 278.51 134.751 284.028C135.509 289.546 135.121 295.266 133.635 300.463C132.149 305.661 129.633 310.102 126.405 313.224C123.176 316.346 119.382 318.008 115.501 318Z" fill="#0A3FFB"/>
                        </svg>
                    </div>
                    <div className={`absolute left-6 top-7 ${s.fly3}`}>
                        <svg width="380" height="325" viewBox="0 0 380 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="sign1" d="M268.015 318C264.135 318.008 260.34 316.346 257.112 313.224C253.884 310.102 251.368 305.661 249.882 300.463C248.396 295.266 248.008 289.546 248.767 284.028C249.525 278.51 251.396 273.443 254.143 269.469L321.397 171.948C323.504 168.885 324.687 164.737 324.687 160.411C324.687 156.086 323.504 151.937 321.397 148.875L253.776 50.8215C251.906 48.1098 250.422 44.8906 249.41 41.3477C248.398 37.8047 247.877 34.0075 247.877 30.1726C247.877 26.3378 248.398 22.5405 249.41 18.9976C250.422 15.4547 251.906 12.2356 253.776 9.52401C257.544 4.08735 262.638 1.02444 267.953 1.00015C273.269 0.975855 278.376 3.99215 282.167 9.39426L373.168 139.696C374.962 142.265 376.386 145.324 377.358 148.697C378.33 152.07 378.831 155.689 378.831 159.344C378.831 163 378.33 166.619 377.358 169.992C376.386 173.365 374.962 176.424 373.168 178.992L281.798 309.822C278.127 315.077 273.173 318.016 268.015 318Z" fill="#d41919"/>
                        </svg>
                    </div>
                </div>
                <div className={`w-[23rem] h-[20rem] flex justify-center items-center relative md:hidden`}>
                    <Image alt='perfil' className={`h-[12rem] w-[12rem] rounded-[8rem] z-30 ${s.fly1}`} src={Perfil}/>
                    <div className={`absolute left-5 top-10 z-10 ${s.fly2}`}>
                        <svg width="280" height="225" viewBox="0 0 380 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="sign2" d="M115.501 318C110.342 318.017 105.388 315.078 101.717 309.823L10.3399 178.992C8.54603 176.424 7.12172 173.365 6.14959 169.992C5.17747 166.619 4.67694 163 4.67694 159.344C4.67694 155.689 5.17747 152.07 6.14959 148.697C7.12172 145.324 8.54603 142.265 10.3399 139.696L101.348 9.39417C105.139 3.99206 110.247 0.975855 115.563 1.00015C120.878 1.02444 125.973 4.08726 129.741 9.52392C133.512 15.0046 135.631 22.4304 135.631 30.1725C135.631 37.9146 133.513 45.3406 129.741 50.8214L62.1147 148.875C60.0078 151.937 58.8246 156.086 58.8246 160.411C58.8246 164.737 60.0078 168.885 62.1147 171.947L129.375 269.468C132.121 273.443 133.992 278.51 134.751 284.028C135.509 289.546 135.121 295.266 133.635 300.463C132.149 305.661 129.633 310.102 126.405 313.224C123.176 316.346 119.382 318.008 115.501 318Z" fill="#0A3FFB"/>
                        </svg>
                    </div>
                    <div className={`absolute left-16 top-15 ${s.fly3}`}>
                        <svg width="280" height="225" viewBox="0 0 380 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="sign1" d="M268.015 318C264.135 318.008 260.34 316.346 257.112 313.224C253.884 310.102 251.368 305.661 249.882 300.463C248.396 295.266 248.008 289.546 248.767 284.028C249.525 278.51 251.396 273.443 254.143 269.469L321.397 171.948C323.504 168.885 324.687 164.737 324.687 160.411C324.687 156.086 323.504 151.937 321.397 148.875L253.776 50.8215C251.906 48.1098 250.422 44.8906 249.41 41.3477C248.398 37.8047 247.877 34.0075 247.877 30.1726C247.877 26.3378 248.398 22.5405 249.41 18.9976C250.422 15.4547 251.906 12.2356 253.776 9.52401C257.544 4.08735 262.638 1.02444 267.953 1.00015C273.269 0.975855 278.376 3.99215 282.167 9.39426L373.168 139.696C374.962 142.265 376.386 145.324 377.358 148.697C378.33 152.07 378.831 155.689 378.831 159.344C378.831 163 378.33 166.619 377.358 169.992C376.386 173.365 374.962 176.424 373.168 178.992L281.798 309.822C278.127 315.077 273.173 318.016 268.015 318Z" fill="#d41919"/>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    )
}
