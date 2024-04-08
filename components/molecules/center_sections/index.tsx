import { Button } from "@/components/atoms/buttons";
import { Name, RegularText } from "@/components/atoms/text";
import Image from "next/image";
import { EducationBox, KnowledgeBox, PortfolioBox } from "../widgets";

export function SummarySection() {
    return (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-auto bg-white p-20">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
                    <Name></Name>
                    <br />
                    <RegularText></RegularText>
                    <br />
                    <Button text="Contact Me ->" />
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                <Image
                    src={'/foto.png'}
                    alt={"Foto perfil "}
                    width={400}
                    height={400}
                />
            </div>

        </div>
    );

}

export function MyKnowledgeSection() {
    return (

        <><div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
            My Knowledge
        </div><div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
                FrontEnd | Flutter | Cryptos | Robotics | Python
            </div><div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <KnowledgeBox title="Mobile Development" description="iOS/Android apps using Flutter" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 36 36'%3E%3Cpath fill='%23ffb400' d='M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 26h-2v-2h2Zm-8-4V6h14v20Z' class='clr-i-solid clr-i-solid-path-1'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E" />
                    <KnowledgeBox title="BackEnd" description="Build and deploy servers using Python, NodeJs or Java" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffb400' d='m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z'/%3E%3Ccircle cx='9' cy='8' r='1' fill='%23ffb400'/%3E%3Ccircle cx='6' cy='8' r='1' fill='%23ffb400'/%3E%3Cpath fill='%23ffb400' d='M28 4H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2m0 2v4H4V6zM4 26V12h24v14z'/%3E%3C/svg%3E" />
                    <KnowledgeBox title="Electronic Circuit Design" description="Eagle" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffb400' d='M10 13a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m7 4a1 1 0 0 0 0-2h-2V9h2a1 1 0 0 0 0-2h-2.18A3 3 0 0 0 17 5.18V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H9V3a1 1 0 0 0-2 0v2.18A3 3 0 0 0 5.18 7H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2v2H3a1 1 0 0 0 0 2h2.18A3 3 0 0 0 7 18.82V21a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2.18A3 3 0 0 0 18.82 17H21a1 1 0 0 0 0-2h-2v-2Zm-4 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm-3-3a1 1 0 1 0 1 1a1 1 0 0 0-1-1'/%3E%3C/svg%3E" />
                </div>
            </div></>
    );
}

export function EducationSection() {
    return (
        <><div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
            Education
        </div>
            <div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
                Software and hardware passionate
            </div>
            <br />
            <div className="flex flex-col px-9 py-9 bg-white max-w-full max-md:px-5">
                <EducationBox institution="Universidad de Antioquia" program="Software Engineering" title="system engineer " description="
            Programming languages (e.g., Python, Java, JavaScript)
            Algorithms and data structures
            Software design principles
            Testing and debugging
            Problem-solving and critical thinking" />
                <div className="shrink-0 mt-5 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:max-w-full" />
                <EducationBox institution="Universidad de Antioquia" program="Electronic Engineering" title="electronic engineer " description="
        Electronic engineering deals with the design, development, testing, and application of electronic circuits, devices, and systems. It focuses on using electrical components like transistors, capacitors, and resistors to create electronic functionalitie" />
                <div className="shrink-0 mt-9 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:max-w-full" />
                <EducationBox institution="Pascual Bravo" program="Mechatronic Engineering" title="Mechatronic engineer " description="
        Mechatronics engineering is an interdisciplinary field that combines several engineering disciplines to design, develop, and control complex systems." />
            </div>  </>
    );
}

export function PortfolioSection() {
    return (
        <><div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
            Portfolio
        </div><div className="self-center mt-8 text-base leading-6 text-center text-neutral-500 max-md:max-w-full">
                Some of my projects
            </div><br /><div className="self-stretch max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                    <PortfolioBox title="Mobe" description="Mobile App to help motorcyclists" link="https://github.com/Juanda16/mobe" image="/portfolio/mobe2.png" />
                    <PortfolioBox title="TokenPad" description="Cryptocurrencies tracker" link="https://tokenpad.io/" image="/portfolio/tokenpad.png" />
                    <PortfolioBox title="Personal CV" description="My personal CV as a React page" link="https://juan-david-arismendy.vercel.app" image="/portfolio/mycv.png" />

                </div>
            </div></>
    );
}