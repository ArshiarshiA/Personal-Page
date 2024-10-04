export default function Contact(){
    return(
        <div className="p-10 border border-black dark:border-white rounded-xl shadow-xl">
            <div className="max-w-[1200px] m-auto flex justify-between max-[793px]:flex-col max-[793px]:text-center max-[793px]:gap-5">
                <h1>CONTACT WITH ME</h1>
                <div className="flex gap-5 items-center max-[793px]:justify-center">
                    <p className="hover:after:contents hover:after:w-6 hover:after:h-[1px] hover:after:bg-purple-700 relative bottom-0">phone number: <a href="tel:09154748708">+989154748708</a></p>
                    <div className="w-6 h-[1px] bg-white"></div>
                    <p>email: marshia370@gmail.com</p>
                </div>
            </div>
        </div>
    )
}