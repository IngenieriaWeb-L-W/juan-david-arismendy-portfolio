import Link from "next/link";


interface ButtonProps {
    text: string;
    color?: string;
}

export function Button({ text, color = 'bg-primary' }: ButtonProps) {
    return (
        <button
            className={`
        ${color}
        px-4 py-2 rounded-md text-secondary font-normal text-center 
      `}
        >
            {text}
        </button>
    );
}

export function YellowButton({ text }: ButtonProps) {
    return (
        Button({ text: text })
    );
}

export function Menu() {
    return <button
        className='w-6 h-3 text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="11px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" /></svg>
    </button>;

}

export function IconButton({ icon, link }: { icon: string, link: string }) {
    return (
        <Link href={link}>
            <button className='text-secondary ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d={icon} /></svg>

            </button>
        </Link>
    );
}








