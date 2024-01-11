import React from 'react'
import s from '../Intro/Intro.module.css'
import s1 from './About.module.css'
import { IBM_Plex_Mono } from "next/font/google";
import { GiPolarStar } from "react-icons/gi";
const ibm = IBM_Plex_Mono({ subsets: ['cyrillic-ext'], weight:'700' });
export default function About() {
    return (
        <section>
            <div>
                <h2 className='text-[2.3rem] relative'>
                    Sobre{" "}
                    <strong className={`${s.lightBlue} ${ibm.className}`}>
                        Mi
                    </strong>
                    <GiPolarStar className={`${s1.starryicon} absolute top-[-15px] left-[11rem]`}/>
                </h2>
                <p className='text-[1.4rem] mdx:text-[1.1rem]'>
                    Me llamo Martin Giovanni Hernandez Peña soy de Ica en Peru lugar
                    del eterno Sol donde estas rodeado de dunas y un oasis.
                    <br />
                    <br />
                    Siempre me ha gustado las novedades de las tecnologias y 
                    poder experimentar, compartir lo que aprendo y aprendo de otros.
                    Ser desarrolador Full Stack me ha dado la ventaja en desarrollarme
                    tanto en como hacer bonitas interfaces como crear la estructura
                    interna el cerebro de la aplicacion web.
                </p>
            </div>
        </section>
    )
}
