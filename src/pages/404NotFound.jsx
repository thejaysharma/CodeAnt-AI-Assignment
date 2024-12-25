import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";


export default function NotFound() {
    let navigate = useNavigate();
    return (
        <section className="flex items-center h-screen w-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center flex flex-col items-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl mb-8 font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                    <Button onClick={() => navigate("/")} className="">Back to homepage</Button>
                </div>
            </div>
        </section>
    )
}
