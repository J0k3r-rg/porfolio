import { colors } from "../../colors";

export default function FooterComponent(){
    return(
        <footer className={`h-24 flex flex-col items-center w-11/12 mt-10 m-auto ${colors.footer.light} ${colors.footer.dark}`}>
            <hr className="w-full pb-8" />
            <h3 className="text-2xl font-bold">Portfolio Mauricio Maldonado</h3>
        </footer>
    );
}