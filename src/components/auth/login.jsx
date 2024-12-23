import SUBIMG from "@assets/subtract.svg";
import LOGO from "@assets/logo.svg";
import ANTPIECHART from "@assets/ant-design_pie-chart-filled.svg";
import ArrowUp from "@assets/Icons/arrow-up.svg";
import { useState } from "react";
import { loginSAASOptions, loginSelfHostedOptions, toogleOptions } from "@/constants/login";
import ToggleSwitch from "../switch/toggleSwitch";
import { Button } from "../ui/button";


export default function Login() {
    return (
        <div className="grid lg:grid-cols-2 h-screen">
            <div className="border-r border-[#E9EAEB] bg-white hidden flex-col justify-center items-center lg:flex">
                {/* Card 1 */}
                <div className="rounded-3xl bg-white shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)] w-[27.9375rem]">
                    <div className="py-[21px] pl-[22px] flex gap-2 items-center">
                        <img src={LOGO} alt="Logo" className="w-7 h-8" />
                        <h1 className="text-lg not-italic font-bold leading-[27px] text-dark-color">AI to Detect & Autofix Bad Code</h1>
                    </div>
                    <hr className="text-dark-color-3" />
                    <div className="p-5 pb-7 pr-10 flex justify-between">
                        {[["30+", "Language Support"], ["10K+", "Developers"], ["100K+", "Hours Saved"]].map(([num, text]) => (
                            <div key={text} className="flex flex-col">
                                <span className="text-dark-color text-lg not-italic font-bold leading-[27px] flex justify-center">{num}</span>
                                <span className="text-neutral-900 text-sm not-italic font-normal leading-5">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-[16.5625rem] shadow-[0px_0px_24px_0px_rgba(8,23,53,0.16)] rounded-3xl py-4 px-8 flex flex-col gap-4 -top-3 -right-28 z-10 bg-white"
                >
                    <div className="flex justify-between items-center">
                        <div className="bg-[#9D90FA40] rounded-full size-14 grid place-content-center">
                            <img src={ANTPIECHART} alt="Ant Pie Chart" />
                        </div>
                        <div className="flex flex-col ">
                            <span className="text-secondary-color text-sm not-italic font-bold leading-5 flex items-center"><img src={ArrowUp} alt="Arrow Up" />14%</span>
                            <span className="text-neutral-900 text-xs not-italic font-normal leading-4">This week</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-neutral-900 text-sm not-italic font-bold leading-5">Issues Fixed</span>
                        <span className="text-dark-color text-[2rem] not-italic font-bold leading-8">500K+</span>
                    </div>
                </div>
                <img src={SUBIMG} alt="Subtract" className="w-72 h-80 absolute bottom-0 left-0" />
            </div>
            <LoginOptions />
        </div>
    );
}

function LoginOptions() {
    const [selectedOption, setSelectedOption] = useState(toogleOptions[0]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        console.log("Selected Option:", option);
    };
    return (
        <div className="bg-[#FAFAFA] md:p-6 px-4 flex justify-center items-center">
            <div className="flex flex-col gap-8 w-full">
                <div className="bg-white flex flex-col border border-[#E9EAEB] rounded-xl">
                    <div className="flex flex-col gap-5 py-9 px-6">
                        <div className="flex flex-col md:gap-9 gap-6 justify-center items-center">
                            <span className="flex gap-3.5 items-center text-[#181D27] text-3xl not-italic font-normal leading-[110%]"><img src={LOGO} alt="Logo" /> CodeAnt AI</span>
                            <span className="text-[#181D27] md:text-[32px] text-2xl not-italic font-semibold leading-[48px]">Welcome to CodeAnt AI</span>
                        </div>

                        <ToggleSwitch options={toogleOptions} onSelect={handleOptionChange} />
                    </div>

                    <hr className="text-dark-color-3" />

                    <div className="py-6 md:px-28 px-4 grid gap-4">
                        {selectedOption === toogleOptions[0] ?
                            loginSAASOptions.map((option, index) => (
                                <Button key={index} icon={option.icon} text={option.name} variant="outline" size="lg" className="flex gap-4" >
                                    <img src={option.icon} alt={option.name} className="size-6" />{option.name}
                                </Button>

                            ))
                            : loginSelfHostedOptions.map((option, index) => (
                                <Button key={index} icon={option.icon} text={option.name} variant="outline" size="lg" className="flex gap-4" >
                                    <img src={option.icon} alt={option.name} className="size-6" />{option.name}
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <p className="text-[#181D27] text-center text-base not-italic font-normal leading-6">By signing up you agree to the <b>Privacy Policy.</b></p>
            </div>
        </div>
    )
}