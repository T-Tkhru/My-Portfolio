import Link from "next/link";

interface WorkboxProps {
  href: string;
  title: string;
  img: string;
}

const Workbox = (props: WorkboxProps) => {
  return (
    <li className="w-auto md:w-1/3 h-auto mb-8">
      <Link href={props.href} className="text-2xl text-black">
        <img src={props.img} className="" />
        <p className="mt-2">{props.title}</p>
      </Link>
    </li>
  );
};

export default Workbox;
