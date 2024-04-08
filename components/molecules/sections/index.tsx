import { KeyValueExpandedRow } from "@/components/atoms/text";
import { ProgressBar, TextWithIcon } from "../widgets";

export function PersonalInfo() {
    return (
        <div className="flex flex-col py-1.5 pl-1.5 mt-6 text-base leading-6 capitalize whitespace-nowrap">
            <div className="flex gap-5 justify-between px-px text-zinc-800 flex-col">
                <KeyValueExpandedRow title="Age" value="35" ></KeyValueExpandedRow>
                <KeyValueExpandedRow title="Freelance" value="Available" ></KeyValueExpandedRow>
                <KeyValueExpandedRow title="City" value="Medellín, COL" ></KeyValueExpandedRow>
            </div>
        </div>);
}

export function LanguagesSection() {
    return (
        <><div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" /><div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            Languages
        </div><ProgressBar text="Spanish" percentage={100} /><ProgressBar text="English" percentage={80} /></>
    );
}

export function ProgrammingLanguagesSection() {
    return (
        <><div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />

            Programming Languages
        </div><ProgressBar text="Flutter/Dart" percentage={90} /><ProgressBar text="Java" percentage={70} /><ProgressBar text="Python" percentage={60} /><ProgressBar text="NodeJs" percentage={60} /><ProgressBar text="HTML/CSS" percentage={50} /></>
    );
}

export function ExtraSkillsSection() {
    return (
        <><div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800 w-full" />
            Extra Skills
            <br />
        </div><TextWithIcon text="Git" /><TextWithIcon text="GitHub, Bitbucket" /><TextWithIcon text="Firebase" /><TextWithIcon text="Jira, Trello" /><TextWithIcon text="Scrum" /></>
    );
}

