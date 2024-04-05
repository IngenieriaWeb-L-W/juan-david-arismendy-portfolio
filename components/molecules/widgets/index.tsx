import Image from "next/image";


interface ProgressProps {
    text: string;
    percentage?: number;
}

export function ProgressBar({ text, percentage }: ProgressProps) {
    return (

        <div className="flex flex-col w-full ">

            <div className="flex gap-5 justify-between mt-5 w-full text-base leading-6 capitalize whitespace-nowrap text-neutral-500">
                <div>{text}</div>
                <div>{percentage}%</div>
            </div>
            <div className="flex flex-col justify-center py-0.5 pr-0 pl-px mt-2.5 w-full border border-yellow-500 border-solid rounded-[30px]">
                <div className="shrink-0 mr-10 h-0.5 bg-primary rounded-[30px]" />
            </div>
        </div>
    );
}

export function TextWithIcon() {
    return (
        <div className="flex gap-4 px-5 text-base leading-6 capitalize text-neutral-500">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57b569859136ac59f3c6469cc3d7e9458c149453e49f0e05d709e3e28cb94337?apiKey=16c5b9866e1241e69e5115f796372ea1&"
                className="shrink-0 self-start aspect-square w-[15px]"
            />
            <div>Bootstrap, Materialize</div>
        </div>
    );
}

export function ProfilePictureWithLabel() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex overflow-hidden relative flex-col items-center w-full rounded-full aspect-square">
                <Image
                    src={'/foto.jpg'}
                    alt={"Foto perfil"}
                    width={500}
                    height={500}
                />
                <div className="relative shrink-0 mt-9 w-4 h-4 bg-lime-500 rounded-full" />
            </div>
            <div className="mt-9 w-full text-lg font-medium leading-6 capitalize text-zinc-800">
                Juan David Arismendy
            </div>
            <div className="mt-5 w-full text-base leading-6 capitalize text-neutral-500">
                Font-end Developer
            </div>
        </div>
    );
}