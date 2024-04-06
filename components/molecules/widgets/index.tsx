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
                    width={300}
                    height={300}
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

export function KnowledgeBox() {
    return (
        <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-20 pt-7 pb-12 w-full capitalize bg-white max-md:px-5 max-md:mt-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e23b15b1fd42e27222f47056300736252f1f1e8d1d9a6d528474ceb77d1390d?apiKey=16c5b9866e1241e69e5115f796372ea1&"
                    className="self-center aspect-square w-[68px]"
                />
                <div className="mt-8 text-lg font-medium leading-6 text-zinc-800">
                    web development
                </div>
                <div className="mt-5 text-base leading-6 text-center text-neutral-500">
                    blog, e-commerce
                </div>
            </div>
        </div>
    );
}

export function EducationBox() {
    return (
        <div className="mt-8 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-1 max-md:mt-10">
                        <div className="text-lg font-medium leading-6 capitalize text-zinc-800">
                            Programming Course
                        </div>
                        <div className="flex gap-5 justify-between mt-7">
                            <div className="my-auto text-base leading-6 capitalize text-zinc-800">
                                Student
                            </div>
                            <div className="justify-center px-2 py-1.5 text-xs leading-3 text-white bg-yellow-500 rounded-sm">
                                Jan 1016 - Dec 2021
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow capitalize max-md:mt-10 max-md:max-w-full">
                        <div className="text-lg font-medium leading-6 text-zinc-800 max-md:max-w-full">
                            Certificate of web training
                        </div>
                        <div className="mt-9 text-base leading-6 text-neutral-500 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                            dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                            Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                            fusce tempus etiam et pellentesque. Molestie risus enim neque
                            eget dui.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PortfolioBox() {
    return (
        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-lg font-medium leading-6 capitalize max-md:mt-10">
                <div className="flex flex-col pb-4 bg-white">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db79053aca8682e6657a8bc4361cf0fdfb9cd128a4f5b294a4a37c9456b2e393?apiKey=16c5b9866e1241e69e5115f796372ea1&"
                        className="w-full aspect-[1.03]"
                    />
                    <div className="flex flex-col px-7 mt-8 max-md:px-5">
                        <div className="text-zinc-800">How to make web tempates</div>
                        <div className="mt-3.5 text-base leading-6 text-neutral-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                            nulla diam in ac dictum a urna{" "}
                        </div>
                        <div className="flex gap-1 mt-5 text-yellow-500 max-md:pr-5">
                            <div>Learn more {">"}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div className="flex justify-center items-center mt-9 px-16 py-5 text-base leading-6 capitalize bg-white max-w-full text-zinc-800 max-md:px-5">
            <div className="flex gap-4">

                <div className="flex-auto my-auto">
                    2024 All Rights Reserved. Juan David Arismendy
                </div>
            </div>
        </div>
    );
}