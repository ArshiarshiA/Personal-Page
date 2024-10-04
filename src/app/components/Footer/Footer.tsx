import { FaRegCopyright } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <div className="border-t border-gray-400">
                <div></div>
                <div className="py-5">
                    <p className="flex items-center justify-center">Developed by<span className="px-1 underline">Arshia Mansury</span> with <FaHeart className="ml-1" color="red" />.</p>
                </div>
            </div>
        </footer>
    )
}