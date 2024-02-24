'use client'
import { useState,useTransition } from 'react';
import { useRouter, usePathname } from '../../../../../navigation';

export default function SwitchLang() {

    const router = useRouter();
    const pathname = usePathname()

    const [isPending, startTransition] = useTransition();

    const [lang, setLang] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          return localStorage.getItem('lang') || 'es';
        }
        return 'en';
      });

    const changeLang = () => {
        setLang(lang === 'en' ? 'es' : 'en');
        localStorage.setItem('lang', lang === 'en' ? 'es' : 'en');
        startTransition(() => {
            router.replace(pathname, { locale: lang });
          });
      }

    return (
        <div className="px-4 py-1">
            <button
                className="flex flex-row text-gray-950 dark:text-slate-300"
                type="button"
                onClick={changeLang}
            >
                <div
                    className={`bg-white w-10 h-10 absolute mt-3 duration-500 ${lang === 'en' ? 'ml-0.5 rounded-l-md' : 'ml-12 rounded-r-md'}`}
                >

                </div>
                <span className='border-2 p-2 border-black my-2 font-bold text-xl rounded-l-md'>
                    {
                        'ES'
                    }
                </span>
                <span className='border-2 p-2 border-black my-2 font-bold text-xl rounded-r-md'>
                    {
                        'EN'
                    }
                </span>
            </button>
        </div>
    )
}