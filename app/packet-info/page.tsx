import Link from "next/link";

export default function PacketInfo() {
  return (
    <main>

      <section className="section">

        <div className="container">

          <h2
            className="text-primary text-center"
            style={{ marginBottom: "40px" }}
          >
            PRICE INFO
          </h2>


          <div className="pricing-wrapper">


            {/* 2D1N */}

            <div className="pricing-category">

              <h3>2 Days 1 Night Package</h3>

              <div className="pricing-grid">

                <div className="price-card">

                  <span className="plan-name">
                    Deluxe
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>


                <div className="price-card">

                  <span className="plan-name">
                    Standard
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </div>


            {/* 3D2N */}

            <div className="pricing-category">

              <h3>3 Days 2 Nights Package</h3>

              <div className="pricing-grid">

                <div className="price-card">

                  <span className="plan-name">
                    Deluxe
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>


                <div className="price-card">

                  <span className="plan-name">
                    Standard
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </div>


            {/* 4D3N */}

            <div className="pricing-category">

              <h3>4 Days 3 Nights Package</h3>

              <div className="pricing-grid">

                <div className="price-card">

                  <span className="plan-name">
                    Deluxe
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>


                <div className="price-card">

                  <span className="plan-name">
                    Standard
                  </span>

                  <ul className="price-list">
                    <li>
                      <span>1 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>2-4 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                    <li>
                      <span>5-10 Pax</span>
                      <span className="price-val">$500</span>
                    </li>
                  </ul>

                  <Link
                    href="/booking"
                    className="book-btn-outline"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </div>


          </div>

        </div>

      </section>

    </main>
  );
}