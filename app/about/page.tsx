export default function About() {
  return (
    <main>

      <header className="about-hero">
        <div className="about-hero-bg"></div>
      </header>

      <section className="section-about-content">

        <div className="orange-vertical-line"></div>

        <div className="container">

          <h1 className="about-title">
            About Us
          </h1>

          <div className="about-grid">

            <div className="about-col">

              <p>
                The difference between the VIP and VVIP packages lies
                in the hotel accommodations provided before the hike.
              </p>

              <br />

              <p>
                The camping equipment and meal types in this package
                are identical to the VVIP package.
              </p>

              <p>
                Below is a list of hotels you can choose.
              </p>

            </div>


            <div className="about-col">

              <p>
                Our team has years of experience guiding trekkers
                safely to the summit of Mount Rinjani.
              </p>

              <p>
                We provide professional guides, porters,
                and complete trekking equipment.
              </p>

              <a href="#" className="btn btn-primary mt-2">
                CEK
              </a>

            </div>

          </div>

        </div>

      </section>


      <section className="about-bottom-hero">

        <div className="bottom-orange-shape"></div>

        <div className="container bottom-content">

          <h2>RINJANI DEDYTREKKER</h2>

          <p>
            Professional trekking service to Mount Rinjani.
          </p>

          <div className="social-icons-large">

            <a href="#">
              <i data-feather="instagram"></i>
            </a>

            <a href="#">
              <i data-feather="facebook"></i>
            </a>

            <a href="#">
              <i data-feather="video"></i>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}