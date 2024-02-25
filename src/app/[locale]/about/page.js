import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl"
import CardCourse from "@/app/UI/components/CardCourse";
import { certificates } from "@/app/UI/certificates";
import { en_progreso, espectativas, mas_sobre_mi } from "@/app/UI/data";



export default function About(){

    const locale = useLocale()
    const t = useTranslations();



    return(
        <main className="m-auto w-9/12 mt-10 flex flex-col gap-y-8">

            <section className="mb-8">
                <h3 className={`text-4xl font-bold text-center mb-4 text-gray-950 dark:text-gray-300`}>
                    {t('about_page.tittle')}
                </h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <div className="grid place-content-center gap-3">
                    <p className={`text-xl text-gray-950 dark:text-gray-300`}>
                        {t('about_page.text_principal_a')}
                    </p>
                    <p className={`text-xl text-gray-950 dark:text-gray-300`}>
                        {t('about_page.text_principal_b')}
                    </p>
                    <p className={`text-xl text-gray-950 dark:text-gray-300`}>
                        {t('about_page.text_principal_c')}
                    </p>
                </div>
            </section>

            <section className="text-gray-950 dark:text-gray-300">
                <h3 className={`text-4xl mb-4 font-bold text-center`}>
                    {t('about_page.academy')}
                </h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4">
                    {
                        certificates.map( (element, index) =>
                            <CardCourse key={index} element={element} locale={locale} />
                        )
                    }
                </ul>
            </section>

            <section className="text-gray-950 dark:text-gray-300">
                <h3 className={`text-4xl mb-4 font-bold text-center `}>
                    {t('about_page.in_progress.tittle')}
                </h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            <li className="border-2 text-black dark:text-white border-black dark:border-white px-4 py-8 rounded-2xl grid place-content-center">
                                <h3 className="text-xl font-bold">
                                    {t('about_page.in_progress.items.unpa.name')}
                                </h3>
                                <p className="text-lg">
                                    {t('about_page.in_progress.items.unpa.place')}
                                </p>
                            </li>
                            <li className="border-2 text-black dark:text-white border-black dark:border-white px-4 py-8 rounded-2xl grid place-content-center">
                                <h3 className="text-xl font-bold">
                                    {t('about_page.in_progress.items.codo_a_codo.name')}
                                </h3>
                                <p className="text-lg">
                                    {t('about_page.in_progress.items.codo_a_codo.place')}
                                </p>
                            </li>
                            <li className="border-2 text-black dark:text-white border-black dark:border-white px-4 py-8 rounded-2xl grid place-content-center">
                                <h3 className="text-xl font-bold">
                                    {t('about_page.in_progress.items.alura_latam.name')}
                                </h3>
                                <p className="text-lg">
                                    {t('about_page.in_progress.items.alura_latam.place')}
                                </p>
                            </li>
                </ul>
            </section>
            
            
            <section className="mb-8 text-gray-950 dark:text-gray-300">
                <h3 className={`mb-4 text-4xl font-bold text-center`}>
                    {t('about_page.spectatives.tittle')}
                </h3>
                <hr className="mb-8 bg-black dark:bg-white border-0 h-1" />
                    <ul className="flex flex-col gap-3">
                        <li className={`text-xl`}> 
                            {t('about_page.spectatives.items.item_one')}
                        </li>
                        <li className={`text-xl`}> 
                            {t('about_page.spectatives.items.item_two')}
                        </li>
                        <li className={`text-xl`}> 
                            {t('about_page.spectatives.items.item_three')}
                        </li>
                    </ul>
            </section>
        </main>
    );
}