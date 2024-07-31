import Link from "next/link";
import Image from "next/image";
import UserButton from "./user-button";

export default function Header() {
    return (
        <header className="sticky flex justify-center border-b">
            <div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
                <div className="flex gap-4 items-center">
                    <Link href="/">
                        <Image 
                            src="/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="min-w-8"
                        />
                    </Link>
                </div>
                <UserButton />
            </div>
        </header>
    );
}