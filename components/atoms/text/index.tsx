export function Title_1({ title }: { title: string }) {
    return <h1 className='text-secondary font-light text-center text-4xl '>{title}</h1>;
}

export function ButtonText({ title }: { title: string }) {
    return <h2 className='text-secondary font-bold text-center text-3xl'>{title}</h2>;
}

export function Name() {
    return (
        <div className="text-5xl font-bold text-primary leading-[59px] max-w-[500px] max-md:text-4xl max-md:leading-[55px]">
            <span className="text-zinc-800">I’m Juan Arismendy</span>
            <br />
            <span className="text-primary">Front-end</span>
            <span className="text-zinc-800"> Developer </span>
        </div>
    );
}

export function RegularText() {
    return (
        <div className="text-base leading-6 capitalize max-w-[100%] text-tertiary">
            +10 years of experience in programming (Dart - Flutter , Python - Django , NodeJs, C++), electronic circuit design, microcontrollers, design and development of automation systems, customized equipment, and academic research on it. Spanish - English
            I’m interested about improve my skills as a Flutter Developer
            Robotics passionate.
        </div>
    );
}

export function KeyValueExpandedRow({ title, value }: { title: string, value: string }) {
    return (
        <div className="flex flex-row justify-between gap-5 px-px text-secondary">
            <div className="text-secondary">{title}:</div>
            <div className="text-secondary">{value}</div>
        </div>
    );
}
