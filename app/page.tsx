import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-container">

          <Link href="#" className="navbar-logo">

            <Image
              src="/images/logo.png"
              alt="Rinjani Deddytrekker Logo"
              width={120}
              height={40}
            />

          </Link>

          <div className="navbar-menu">

            <Link href="/" className="nav-link active">
              Home
            </Link>

            <Link href="/packet" className="nav-link">
              Packet
            </Link>

            <Link href="/about" className="nav-link">
              About Us
            </Link>

            <Link href="/news" className="nav-link">
              News
            </Link>

            <Link href="/contact" className="nav-link">
              Contact
            </Link>

          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <h1>
            Welcome To <br />
            <span className="text-primary">
              RINJANI DEDDYTREKKER
            </span>
          </h1>

          <p>
            Professional trekking service to Mount Rinjani.
          </p>

          <Link href="/packet" className="btn btn-primary">
            Lihat Paket
          </Link>

        </div>

      </section>


      {/* FEATURE */}
      <section className="section section-feature">

        <div className="container">

          <div className="row">

            <div className="col-text">

              <div className="feature-box">

                <h2>Discover the Majesty of Mount Rinjani</h2>

                <p>
                  Rising 3,726 meters above sea level, Mount Rinjani is one of
                  Indonesia’s most iconic trekking adventures.
                </p>

              </div>

            </div>

            <div className="col-image">

              <Image
                src="/images/sun.PNG"
                alt="Rinjani View"
                width={500}
                height={400}
              />

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="container">

          <p>© 2026 Rinjani DedyTrekker</p>

        </div>

      </footer>

    </main>
  );
}