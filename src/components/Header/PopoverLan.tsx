import React, { ReactNode } from 'react'
import { usePathname,useRouter } from 'next/navigation'

export default function PopoverLan({children, languajeES,languajeEN}:{children:ReactNode, languajeES:String,languajeEN:String}) {
    const router = useRouter();
    
    return (
        <>
            <div className='relative'>
                {children}
                <div className='absolute left-[-1.9rem] flex flex-col items-center'>
                    <div className='w-0 h-0 border-solid border-transparent border-t-[6px] border-r-4 border-l-4 rotate-180 border-t-slate-400'></div>
                    <div className="w-[100%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button 
                            onClick={() => router.replace('/en')}
                            aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                        >
                            {languajeEN}
                        </button>
                        <button
                            onClick={() => router.replace('/es')}
                            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        >
                            {languajeES}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
