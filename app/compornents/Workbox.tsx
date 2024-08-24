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
    <li className={`w-full md:w-1/3 h-auto mb-8 px-2 ${props.className}`}>
      <Animation
        animation="animate__fadeInUp"
        delay="200ms"
        rootMargin="-100px"
      >
        <Link
          href={props.href}
          className="text-2xl text-black hover:opacity-70 duration-300"
          target="_blank"
        >
          <div className="relative w-full pb-[70.71%] overflow-hidden">
            <img
              src={props.img}
              alt={props.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <p className="mt-2">{props.title}</p>
        </Link>
      </Animation>
    </li>
  );
};

export default Workbox;
