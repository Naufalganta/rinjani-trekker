"use client";
import Link from "next/link";

/* WHATSAPP FUNCTION */

const chatWhatsApp = () => {
  const nomorHP = "6289652322981";
  const pesan = "Halo Admin, saya ingin booking paket trekking.";
  const url =
    "https://wa.me/" + nomorHP + "?text=" + encodeURIComponent(pesan);

  window.open(url, "_blank");
};

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


      {/* WHATSAPP FLOAT */}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          chatWhatsApp();
        }}
        className="wa-float"
        id="wa-button"
      >
        <div className="wa-icon">
          <img src="/images/whatsapp.png" alt="whatsapp" />
        </div>
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
                Perbedaan antara paket VIP dan VVIP terletak pada akomodasi hotel
                yang disediakan sebelum pendakian.
              </p>

              <p style={{ marginTop: "1rem", fontWeight: "700" }}>
                Berikut adalah daftar trek yang bisa Anda pilih:
              </p>

            </div>

            <div className="col-image">

              <img
                src="/images/sun.PNG"
                alt="Rinjani View"
                className="img-rounded shadow"
              />

            </div>

          </div>

        </div>
      </section>


      {/* PACKET GRID */}

      <section className="section">

        <div className="container">

          <div className="section-header text-center">

            <h2 className="text-primary">
              PACKETS
            </h2>

            <p>
              Pilihan durasi dan rute pendakian
            </p>

          </div>


          <div className="grid-3">

            <div className="packet-item">
              <div className="packet-content">
                <h3>2D 1N Summit</h3>
                <p>Start Sembalun End Sembalun</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>


            <div className="packet-item">
              <div className="packet-content">
                <h3>2D 1N Pelawangan</h3>
                <p>Start Senaru End Senaru</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>


            <div className="packet-item">
              <div className="packet-content">
                <h3>3D 2N Summit</h3>
                <p>Start Sembalun End Senaru</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>


            <div className="packet-item">
              <div className="packet-content">
                <h3>3D 2N Lake</h3>
                <p>Start Sembalun End Sembalun</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>


            <div className="packet-item">
              <div className="packet-content">
                <h3>4D 3N Pelawangan</h3>
                <p>Start Senaru End Sembalun</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>


            <div className="packet-item">
              <div className="packet-content">
                <h3>4D 3N Summit</h3>
                <p>Full Trekking Experience</p>

                <Link href="/packet-info" className="btn btn-primary btn-block">
                  Lihat Detail
                </Link>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* BOOKING STEPS */}

      <section className="section bg-dark">

        <div className="container">

          <h3 className="text-primary mb-1">
            Booking mode as easy as 1-2-3
          </h3>

          <div className="steps-row">

            <div className="step-box">
              <span className="step-num">[ 1 ]</span>
              <span className="step-text">Pick Your Track</span>
            </div>

            <div className="step-box">
              <span className="step-num">[ 2 ]</span>
              <span className="step-text">Pick Your Packet</span>
            </div>

            <div className="step-box">
              <span className="step-num">[ 3 ]</span>
              <span className="step-text">Pick Your Class</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}