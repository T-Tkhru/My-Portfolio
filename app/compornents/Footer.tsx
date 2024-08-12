import Link from "next/link";
interface FooterProps {
  color: string;
}

const Footer = (props: FooterProps) => {
  const bgcolor = props.color === "black" ? "bg-black" : "bg-white";
  const textcolor = props.color === "black" ? "text-white" : "text-black";
  return (
    <footer className={`${bgcolor} border-t-2 h-32 relative`}>
      <ul className="flex h-30 space-x-10 pt-8 justify-center">
        <li className="hover:opacity-95">
          <Link href="https://x.com/TaKadayoooooo">
            <img
              src="/X-logo.svg"
              alt="X Logo"
              className="mix-blend-difference h-8 transition-filter duration-300 hover:filter hover:brightness-50"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/acril0530/">
            <img
              src="/Instagram-logo.svg"
              alt="Instagram Logo"
              className="mix-blend-difference h-8"
            />
          </Link>
        </li>
      </ul>
      <a href="#top" className={`absolute right-0 mr-4 ${textcolor}`}>
        page top{" "}
      </a>
    </footer>
  );
};

export default Footer;
