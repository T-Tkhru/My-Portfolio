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
        <li>
          <Link
            href="https://x.com/TaKadayoooooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/X-logo.svg"
              alt="X Logo"
              className="mix-blend-difference h-8 hover:opacity-70 duration-300"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/acril0530/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Instagram-logo.svg"
              alt="Instagram Logo"
              className="mix-blend-difference h-8 hover:opacity-70 duration-300"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/T-Tkhru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github-mark-white.svg"
              alt="GitHub Logo"
              className="mix-blend-difference h-8 hover:opacity-70 duration-300"
            />
          </Link>
        </li>
      </ul>
      <a
        href="#top"
        className={`absolute right-0 mr-4 hover:opacity-70 duration-300 ${textcolor}`}
      >
        page top{" "}
      </a>
    </footer>
  );
};

export default Footer;
