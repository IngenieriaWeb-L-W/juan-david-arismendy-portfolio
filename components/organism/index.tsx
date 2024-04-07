import { Button } from "../atoms/buttons";
import { KeyValueExpandedRow, Name, RegularText } from "../atoms/text";
import { EducationBox, Footer, KnowledgeBox, PortfolioBox, ProfilePictureWithLabel, ProgressBar, TextWithIcon } from "../molecules/widgets";
import Image from "next/image";

export function LeftColumn() {
    return (
        <div className="flex flex-col pb-20 bg-white">
            <div className="flex flex-col px-10 pt-12 pb-20 w-full max-md:px-5 max-sm:hidden">
                <ProfilePictureWithLabel />

                <div className="shrink-0 mt-16 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:mt-10" />
                <div className="flex flex-col py-1.5 pl-1.5 mt-6 text-base leading-6 capitalize whitespace-nowrap">
                    <div className="flex gap-5 justify-between px-px text-zinc-800 flex-col">
                        <KeyValueExpandedRow title="Age" value="35" ></KeyValueExpandedRow>
                        <KeyValueExpandedRow title="Freelance" value="Available" ></KeyValueExpandedRow>
                        <KeyValueExpandedRow title="City" value="Medellín, COL" ></KeyValueExpandedRow>
                    </div>

                </div>
                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />
                <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />

                <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
                    Languages
                </div>
                <ProgressBar text="Spanish" percentage={100} />
                <ProgressBar text="English" percentage={80} />


                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

                <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
                    <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />

                    Programming Languages
                </div>
                <ProgressBar text="Flutter/Dart" percentage={90} />
                <ProgressBar text="Java" percentage={70} />
                <ProgressBar text="Python" percentage={60} />
                <ProgressBar text="NodeJs" percentage={60} />
                <ProgressBar text="HTML/CSS" percentage={50} />


                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

                <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
                    <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800 w-full" />
                    Extra Skills
                </div>


                <TextWithIcon text="Git" />
                <TextWithIcon text="GitHub, Bitbucket" />
                <TextWithIcon text="Firebase" />
                <TextWithIcon text="Jira, Trello" />
                <TextWithIcon text="Scrum" />


            </div>

            <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

        </div >

    );
}

export function RightColumn() {

}

export function MainContent() {
    return (
        <div className="flex flex-col px-14 max-md:max-w-full max-sm:hidden pt-2">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-auto bg-white p-20">
                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
                        <Name></Name>
                        <br />
                        <RegularText></RegularText>
                        <br />
                        <Button text="HIRE ME ->" />
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <Image
                        src={'/foto.jpg'}
                        alt={"Foto perfil "}
                        width={300}
                        height={300}
                    />
                </div>

            </div>
            <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
                My Knowledge
            </div>
            <div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
                FrontEnd | Flutter | Cryptos | Robotics | Python
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <KnowledgeBox title="Mobile Development" description="iOS/Android apps using Flutter" />
                    <KnowledgeBox title="BackEnd" description="Build and deploy servers using Python, NodeJs or Java" />
                    <KnowledgeBox title="Electronic Circuit Design" description="Eagle" />
                </div>

                {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-4">
                    <KnowledgeBox title="" description="" />
                    <KnowledgeBox title="" description="" />
                    <KnowledgeBox title="" description="" />
                </div> */}
            </div>
            <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
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
            </div>

            <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
                Portfolio
            </div>
            <div className="self-center mt-8 text-base leading-6 text-center text-neutral-500 max-md:max-w-full">
                Some of my projects
            </div>
            <br />
            <div className="self-stretch max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                    <PortfolioBox title="Mobe" description="Mobile App to help motorcyclists in their daily lives" link="https://github.com/Juanda16/mobe" />
                    <PortfolioBox title="TokenPad" description="Cryptocurrencies tracker" link="https://tokenpad.io/" />
                    <PortfolioBox title="Personal CV" description="My personal CV as a React page" link="https://juan-david-arismendy.vercel.app" />

                </div>
            </div>

            <Footer />


        </div>
    );
}