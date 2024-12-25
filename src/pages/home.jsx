import LOGO from "@/assets/logo.svg";

export default function Home() {
    return (
        <section className="flex items-center h-screen w-full md:p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center flex flex-col items-center">
                    <span className='flex gap-3 items-center text-[#181D27] md:text-6xl text-3xl not-italic font-normal leading-[110%]'><img src={LOGO} alt="Logo" className='md:h-20 h-12' />CodeAnt AI</span>
                    <p className="text-2xl mt-4 mb-8 font-semibold md:text-3xl">Welcome to CodeAnt AI Assignment.</p>
                </div>
            </div>
        </section>
    )
}
