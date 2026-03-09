export default function Booking() {
  return (
    <main>

      {/* HEADER */}

      <header className="booking-page-header">
        <h1>PENGISIAN DATA DIRI</h1>
      </header>


      {/* BOOKING FORM */}

      <section className="booking-section-wrapper">

        <div className="booking-container">

          <h2 className="booking-title">
            How to Book?
          </h2>

          <p className="booking-step-label">
            1. Please fill in complete the booking form below and click Submit Form
          </p>


          <form id="bookingForm" className="booking-form-box">


            <div className="booking-group">
              <label className="booking-label">
                Full Name* (required)
              </label>

              <input
                type="text"
                name="fullname"
                className="booking-input"
                required
              />
            </div>


            <div className="booking-group">
              <label className="booking-label">
                Nationality* (required)
              </label>

              <input
                type="text"
                name="nationality"
                className="booking-input"
                required
              />
            </div>


            <div className="booking-group">
              <label className="booking-label">
                Phone number* (required)
              </label>

              <input
                type="tel"
                name="phone"
                className="booking-input"
                required
              />
            </div>


            <div className="booking-group">
              <label className="booking-label">
                E-mail Address* (required)
              </label>

              <input
                type="email"
                name="email"
                className="booking-input"
                required
              />
            </div>


            <div className="booking-group">

              <label className="booking-label">
                Type Of Service
              </label>

              <select
                name="service"
                className="booking-input booking-select"
              >
                <option value="">Select Service</option>
                <option value="vip">VIP Package</option>
                <option value="vvip">VVIP Package</option>
                <option value="standard">Standard Package</option>
              </select>

            </div>


            {/* PARTICIPANTS */}

            <div className="booking-group">

              <label className="booking-label">
                Number Of Participants
              </label>

              <div className="booking-row">

                <div className="booking-col-half">

                  <label className="booking-sub-label">
                    Adults
                  </label>

                  <select
                    name="adults"
                    className="booking-input booking-select"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                </div>


                <div className="booking-col-half">

                  <label className="booking-sub-label">
                    Kids
                  </label>

                  <select
                    name="kids"
                    className="booking-input booking-select"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>

                </div>

              </div>

            </div>


            {/* PICKUP DATE */}

            <div className="booking-group">

              <label className="booking-label">
                Pickup Date* (one day before starting the hike)
              </label>

              <input
                type="date"
                name="pickupDate"
                className="booking-input"
                required
              />

            </div>


            {/* PICKUP LOCATION */}

            <div className="booking-group">

              <label className="booking-label">
                Pickup Location & Time
              </label>

              <input
                type="text"
                name="pickupLocation"
                className="booking-input"
                placeholder="Example: Lombok Airport at 10:00 AM"
                required
              />

            </div>


            {/* TREKKING DATE */}

            <div className="booking-group">

              <label className="booking-label">
                Trekking Date
              </label>

              <div className="booking-row">

                <div className="booking-col-half">

                  <label className="booking-sub-label">
                    From
                  </label>

                  <input
                    type="date"
                    name="trekFrom"
                    className="booking-input"
                    required
                  />

                </div>


                <div className="booking-col-half">

                  <label className="booking-sub-label">
                    To
                  </label>

                  <input
                    type="date"
                    name="trekTo"
                    className="booking-input"
                    required
                  />

                </div>

              </div>

            </div>


            {/* NOTES */}

            <div className="booking-group">

              <label className="booking-label">
                Additional Information
              </label>

              <textarea
                name="notes"
                className="booking-input booking-textarea"
                rows={5}
              ></textarea>

            </div>


            {/* PAYMENT */}

            <div className="booking-group">

              <label className="booking-label">
                Payment Method*
              </label>

              <select
                name="paymentMethod"
                id="paymentMethod"
                className="booking-input booking-select"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="dp">Deposit (30%)</option>
                <option value="full">Full Payment (100%)</option>
              </select>

            </div>


            {/* PRICE PREVIEW */}

            <div
              className="booking-group"
              id="paymentPreview"
              style={{ display: "none" }}
            >

              <p>
                <strong>Total Price:</strong>
                Rp <span id="totalPrice">0</span>
              </p>

              <p>
                <strong>Pay Now:</strong>
                Rp <span id="payNow">0</span>
              </p>

              <p>
                <strong>Remaining:</strong>
                Rp <span id="remaining">0</span>
              </p>

            </div>


            {/* ANTI SPAM */}

            <input
              type="text"
              name="website"
              id="website"
              style={{ display: "none" }}
            />


            <button
              type="submit"
              className="booking-btn-submit"
            >
              SUBMIT FORM
            </button>


          </form>

        </div>

      </section>

    </main>
  );
}