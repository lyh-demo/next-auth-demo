import Link from "next/link";
import packageJSON from "next-auth/package.json";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 px-4 my-4 mx-0 w-full text-sm sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:my-12 sm:mx-auto sm:max-w-3xl sm:h-5">
            <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="https://nextjs.authjs.dev">官方文档</Link>
                <Link href="https://www.npmjs.com/package/next-auth">NPM</Link>
            </div>
            <div className="flex gap-2 justify-start items-center">
                <img 
                    alt="Logo" 
                    src="https://authjs.dev/img/logo-sm.png" 
                    className="size-5" 
                />
                <Link href="https://npmjs.org/package/next-auth">{packageJSON.version}</Link>
            </div>
        </footer>
    );
}