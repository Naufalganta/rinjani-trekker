import Image from "next/image";
import Link from "next/link";

export default function Packet() {
  return (
    <main>

      {/* HERO */}
      <section className="hero hero-small">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <h1>PAKET YANG KAMI TAWARKAN</h1>
          <p>Pilih petualangan terbaik Anda di Gunung Rinjani</p>
        </div>
      </section>


      {/* WA FLOAT */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="wa-float"
      >
        <div className="wa-icon">WA</div>
      </a>


      {/* PENJELASAN */}
      <section className="section orange-section">
        <div className="container">
          <div className="row">

            <div className="col-text text-white">
              <h2 className="section-title-white">
                Penjelasan Singkat
              </h2>

              <p>
                Perbedaan antara paket VIP dan VVIP terletak pada
                akomodasi hotel sebelum pendakian.
              </p>

              <p style={{ marginTop: "1rem", fontWeight: 700 }}>
                Berikut adalah daftar trek yang bisa Anda pilih:
              </p>
            </div>

            <div className="col-image">
              <Image
                src="/images/sun.PNG"
                alt="Rinjani View"
                width={500}
                height={400}
                className="img-rounded shadow"
              />
            </div>

          </div>
        </div>
      </section>


      {/* PACKET LIST */}
      <section className="section">
        <div className="container">

          <div className="section-header text-center">
            <h2 className="text-primary">PACKETS</h2>
            <p>Pilihan durasi dan rute pendakian</p>
          </div>

          <div className="grid-3">

            <div className="packet-item">
              <div className="packet-content">
                <h3>2D 1N Summit</h3>
                <p>Start Sembalun End Sembalun</p>

                <Link
                  href="/packet-info"
                  className="btn btn-primary btn-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            <div className="packet-item">
              <div className="packet-content">
                <h3>2D 1N Pelawangan</h3>
                <p>Start Senaru End Senaru</p>

                <Link
                  href="/packet-info"
                  className="btn btn-primary btn-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

            <div className="packet-item">
              <div className="packet-content">
                <h3>3D 2N Summit</h3>
                <p>Start Sembalun End Senaru</p>

                <Link
                  href="/packet-info"
                  className="btn btn-primary btn-block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}