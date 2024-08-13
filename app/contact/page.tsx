import { Metadata } from "next";
import Link from "next/link";

// export  const metadata: Metadata = {
//   title: "Takaharu T. Portfolio - Contact",
//   description: "Contact Takaharu T.",
// };

export default function Contact() {
  return (
    <div>
      <h1>hello Contact</h1>
      <Link href="/" className="text-blue-400">
        back home
      </Link>
    </div>
  );
}
