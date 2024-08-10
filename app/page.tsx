import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>hello portfolio</h1>
      <ul>
        <li>
          <Link href="/works" className="text-blue-400">works</Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-400">About</Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-400">Contact</Link>
        </li>
      </ul>

    </div>
  );
}
