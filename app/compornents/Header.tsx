import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-950 flex justify-between h-20 items-center">
            <img src="/logo.png" alt="logo" className="max-h-full"/>
            <ul className="flex space-x-10 mr-4 text-2xl">
                <li>
                    <Link href="/" className="text-white">Home</Link>
                </li>
                <li>
                    <Link href="/works" className="text-white">works</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white">Contact</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;