import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo.png"
            alt="Rinjani Logo"
            width={120}
            height={40}
          />
        </Link>

        <div className="navbar-menu">
          <Link href="/">Home</Link>
          <Link href="/packet">Packet</Link>
          <Link href="/about">About</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}