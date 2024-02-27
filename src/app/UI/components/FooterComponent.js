import { TbPointFilled } from "react-icons/tb";

export default function FooterComponent(){
    return(
        <footer className={`h-24 absolute bottom-0 flex flex-row items-center w-10/12 m-auto justify-between`}>
            <div className={`flex flex-row text-white`}>
                <TbPointFilled size={32} />
                <TbPointFilled size={32} />
                <TbPointFilled size={32} />
            </div>
            <hr className={`h-1 dark:bg-rose-500 w-5/12 border-0`} />
        </footer>
    );
}