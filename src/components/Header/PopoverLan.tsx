import React, { ReactNode } from 'react'
import { usePathname,useRouter } from 'next/navigation'
import { FaCheck } from "react-icons/fa";

export default function PopoverLan({children, languajeES,languajeEN, visible}:{children:ReactNode, languajeES:String,languajeEN:String,visible:String}) {
    const router = useRouter();
    const pathname = usePathname()
    
    return (
        <>
            <div className='relative'>
                {children}
                <div className={`absolute left-[-1.9rem] flex flex-col items-center ${visible}`}>
                    <div className='w-0 h-0 border-solid border-transparent border-t-[6px] border-r-4 border-l-4 rotate-180 border-t-slate-400'></div>
                    <div className="w-[100%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button 
                            onClick={() => router.replace('/en')}
                            aria-current="true" 
                            className="w-[100%] px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600 flex justify-between items-center"
                        >
                            <div>{languajeEN}</div>
                            <div className={`ml-1 ${pathname.startsWith('en',1) ? '':'hidden'}`}><FaCheck /></div>
                        </button>
                        <button
                            onClick={() => router.replace('/es')}
                            className="w-[100%] px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white flex justify-between items-center"
                        >
                            <div>{languajeES}</div>
                            <div className={`ml-1 ${pathname.startsWith('es',1) ? '':'hidden'}`}><FaCheck /></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
