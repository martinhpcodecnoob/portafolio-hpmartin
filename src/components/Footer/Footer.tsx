'use client'
import { Footerr } from '@/InterfaceTS/footer'
import React from 'react'
export default function FooterD({footer}:{footer:Footerr}) {
    return (
        <>
            <section id='footer'>
                <div className='h-[8rem] flex justify-center items-center'>
                    {footer.name}
                </div>
            </section>
        </>
    )
}
