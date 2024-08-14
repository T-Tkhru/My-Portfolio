import Link from "next/link";
import Animation from "./Animation";

interface WorkboxProps {
  href: string;
  title: string;
  img: string;
  className: string;
}

const Workbox = (props: WorkboxProps) => {
  return (
    <li className={`w-auto md:w-1/3 h-auto mb-8 px-2 ${props.className}`}>
      <Animation animation="animate__fadeInUp" delay="200ms">
        <Link
          href={props.href}
          className="text-2xl text-black hover:opacity-70 duration-300"
        >
          <img src={props.img} className="" />
          <p className="mt-2">{props.title}</p>
        </Link>
      </Animation>
    </li>
  );
};

export default Workbox;
