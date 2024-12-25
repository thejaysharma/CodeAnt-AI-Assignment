import { Button } from "@/components/ui/button";
import DatabaseIMG from "@assets/Icons/database.svg?react";
import RefreshIMG from "@assets/Icons/refresh.svg?react";
import PlusIMG from "@assets/Icons/plus.svg?react";
import SearchIMG from "@assets/Icons/search.svg?react";
import { repoData } from "@/constants/repoData";

export default function Repositories() {
    return (
        <div className="md:p-6 h-full w-full">
            <div className="bg-white md:rounded-xl border border-[#E9EAEB] overflow-auto md:max-h-[calc(100vh-48px)]">
                <div className="flex flex-col gap-4 border-b border-[#D5D7DA] md:px-6 md:py-5 px-4 py-5">
                    <div className="flex max-lg:flex-col max-lg:gap-3  lg:justify-between lg:items-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-[#181D27] text-2xl not-italic font-semibold">Repositories</span>
                            <span className="text-[#414651] text-sm not-italic font-normal leading-5">33 total repositories</span>
                        </div>

                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-1"><RefreshIMG className="fill-[#414651]" />Refresh All</Button>
                            <Button className="gap-1"><PlusIMG className="fill-[#FFFFFF]" />Add Repository</Button>

                        </div>
                    </div>

                    <div className="group">
                        <Input type="text" placeholder="Search repositories" className="pl-12 sm:w-[22.875rem]" Icon={<SearchIMG className="fill-[#414651]" />} />
                    </div>

                </div>

                {/* Repo Card */}
                {repoData.map((repo, index) => (
                    <RepoCard key={index} index={index} {...repo} />
                ))}
            </div>
        </div>
    )
}



import PropTypes from 'prop-types';
import { Input } from "@/components/ui/input";

function RepoCard({ repoName, repoType, techStack, repoSize, repoUpdated, index }) {
    return (
        <div className={`md:p-6 p-4 flex flex-col gap-3 hover:bg-[#F5F5F5] ${index !== repoData.length - 1 ? 'border-b border-[#D5D7DA]' : ''}`}>
            <div className="flex items-center gap-2">
                <span className="text-[#181D27] md:text-xl text-lg not-italic font-medium leading-6">{repoName}</span>
                <div className="pl-2 pr-2.5 py-0.5 bg-[#EFF8FF] rounded-full border border-[#B2DDFF] text-[#175CD3] text-center text-sm not-italic font-normal leading-5">{repoType}</div>
            </div>

            <div className="flex md:gap-10 gap-6 text-[#181D27] md:text-base text-sm not-italic font-normal md:leading-6 leading-5">
                <span className="flex gap-2 items-center">{techStack}<div className="rounded-full size-2 bg-[#1570EF]" /></span>
                <span className="flex gap-2 items-center"><DatabaseIMG className="fill-[#181D27]" />{repoSize}</span>
                <span className="flex gap-2 items-center">{repoUpdated}</span>
            </div>
        </div>
    )
}

RepoCard.propTypes = {
    repoName: PropTypes.string.isRequired,
    repoType: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    repoSize: PropTypes.string.isRequired,
    repoUpdated: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};
