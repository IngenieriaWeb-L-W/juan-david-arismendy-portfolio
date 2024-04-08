import { Badge } from "../atoms/badge";
import { IconButton } from "../atoms/buttons";
import { MyKnowledgeSection, SummarySection, EducationSection, PortfolioSection } from "../molecules/center_sections";
import { ExtraSkillsSection, LanguagesSection, PersonalInfo, ProgrammingLanguagesSection } from "../molecules/sections";
import { EducationBox, Footer, KnowledgeBox, PortfolioBox, ProfilePictureWithLabel, ProgressBar, TextWithIcon } from "../molecules/widgets";

export function LeftColumn() {
    return (
        <div className="flex flex-col pb-20 bg-white">
            <div className="flex flex-col px-10 pt-12 pb-20 w-full max-md:px-5 max-sm:hidden">
                <ProfilePictureWithLabel />

                <div className="shrink-0 mt-16 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:mt-10" />

                <PersonalInfo />

                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

                <LanguagesSection />

                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

                <ProgrammingLanguagesSection />

                <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

                <ExtraSkillsSection />

            </div>

            <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

        </div >

    );
}


export function MainContent() {
    return (
        <div className="flex flex-col px-14 max-md:max-w-full max-sm:hidden pt-2">

            <SummarySection />

            <MyKnowledgeSection />

            <EducationSection />

            <PortfolioSection />

            <Footer />


        </div>
    );
}

export function RightColumn() {
    return (
        <div className="flex flex-col items-center px-6 pt-20 pb-20 bg-white ">
            <div className="text-lg font-bold leading-6 text-zinc-800">
                Links
            </div>
            <div className="flex flex-col items-center mt-5">

                <IconButton icon={"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"}
                    link="https://www.linkedin.com/in/juanarismendy16/"
                >

                </IconButton> {/* Linkedin */}
            </div>
            <div>
                <IconButton icon={"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"}
                    link="https://www.github.com/Juanda16"
                >
                </IconButton> {/* Github */}
            </div>

            {/* <Badge image="/foto.jpg" /> */}
        </div>

    );
}