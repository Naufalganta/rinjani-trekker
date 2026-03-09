export default function Contact() {
  return (
    <main>

      <section className="hero hero-small">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <h1>GET IN TOUCH</h1>
          <p>Kami siap membantu merencanakan petualangan Rinjani Anda</p>
        </div>
      </section>


      <section className="section">

        <div className="container">

          <div className="row">

            <div className="col-text">

              <h2>Hubungi Kami</h2>

              <p>
                Punya pertanyaan tentang paket atau jalur pendakian?
                Jangan ragu untuk menghubungi kami.
              </p>

              <div className="contact-details">

                <p>📞 +62 812 3456 7890</p>
                <p>📧 info@rinjanitrekker.com</p>
                <p>📍 Senaru, Lombok Utara</p>

              </div>

            </div>


            <div className="col-image">

              <div className="booking-card">

                <h3>Kirim Pesan</h3>

                <form>

                  <input
                    type="text"
                    placeholder="Nama"
                    className="form-control"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />

                  <textarea
                    placeholder="Pesan"
                    className="form-control"
                  />

                  <button className="btn btn-primary">
                    Kirim
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}