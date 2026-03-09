// ==========================
// DOCUMENT READY
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const navbarMenu = document.querySelector(".navbar-menu");
    const menuBtn = document.querySelector("#menu-btn");

    feather.replace();

    if (menuBtn && navbarMenu) {
        menuBtn.onclick = (e) => {
            e.preventDefault();
            navbarMenu.classList.toggle("active");
        };
    }

    document.addEventListener("click", function(e) {
        if (
            menuBtn &&
            navbarMenu &&
            !menuBtn.contains(e.target) &&
            !navbarMenu.contains(e.target)
        ) {
            navbarMenu.classList.remove("active");
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                if (navbarMenu.classList.contains("active")) {
                    navbarMenu.classList.remove("active");
                }
            }
        });
    });

});

window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        document.body.classList.add("loaded");
    }
});


// ==========================
// LOAD NEWS FROM GOOGLE SHEET CSV
// ==========================

const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5rXVCT4XGmr1e_2cmsZdXb4rTjd3NBG4M19B6P9RooeaCZ3EamYEDw7-yJxto7rvTui7UK4NLCEMj/pub?output=csv";

async function loadNews() {
    const container = document.getElementById("news-container");
    if (!container) return;

    try {
        const response = await fetch(csvUrl);
        const data = await response.text();

        const rows = data.split("\n").slice(1);
        let htmlContent = "";

        rows.forEach(row => {
            const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            if (cols.length >= 5) {
                const title = cols[0].replace(/"/g, "").trim();
                const desc = cols[1].replace(/"/g, "").trim();
                const img = cols[2].replace(/"/g, "").trim();
                const url = cols[3].replace(/"/g, "").trim();
                const date = cols[4].replace(/"/g, "").trim();

                htmlContent += `
                    <div class="news-card">
                        <img src="${img || 'images/logo.png'}" class="news-img" alt="Rinjani News">
                        <div class="news-content">
                            <a href="${url}" target="_blank" class="news-title">${title}</a>
                            <p class="news-desc">${desc.substring(0, 100)}...</p>
                            <div class="news-footer">
                                <i data-feather="calendar" style="width:14px"></i> ${date}
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        container.innerHTML = htmlContent;
        feather.replace();

    } catch (error) {
        container.innerHTML = "<p style='text-align:center'>Gagal memuat berita.</p>";
    }
}

window.addEventListener("load", loadNews);


// ==========================
// WHATSAPP BUTTON
// ==========================

function chatWhatsApp() {
    const nomorHP = "6289652322981";
    const pesan = "Halo Admin, saya ingin booking paket wisata.";
    const url = "https://wa.me/" + nomorHP + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}


// ==========================
// GOOGLE SHEETS SUBMIT FINAL FIX
// ==========================

const scriptURL = "https://script.google.com/macros/s/AKfycbzW3rp6N4O5k1QjM7AtKbJOmqWkpK6wMiBukPchGircU6Wkx9QKW__jy5rxsZJo2wUq/exec";

document.addEventListener("DOMContentLoaded", function() {

    const bookingForm = document.getElementById("bookingForm");
    if (!bookingForm) return;

    bookingForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const submitBtn = bookingForm.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.innerText = "Mengirim...";

        try {

            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(new FormData(bookingForm)).toString()
            });

            const result = await response.text();
            console.log("Server response:", result);

            alert("Booking berhasil dikirim!");
            bookingForm.reset();

        } catch (error) {
            console.error("Fetch error:", error);
            alert("Terjadi kesalahan saat mengirim booking.");
        }

        submitBtn.disabled = false;
        submitBtn.innerText = "SUBMIT FORM";
    });

});

// ==========================
// LIVE PAYMENT CALCULATION
// ==========================

const adultsSelect = document.querySelector("select[name='adults']");
const kidsSelect = document.querySelector("select[name='kids']");
const paymentMethod = document.getElementById("paymentMethod");

const previewBox = document.getElementById("paymentPreview");
const totalEl = document.getElementById("totalPrice");
const payNowEl = document.getElementById("payNow");
const remainingEl = document.getElementById("remaining");

if (adultsSelect && kidsSelect && paymentMethod) {

    const pricePerAdult = 2500000;
    const pricePerKid = 1500000;

    function calculateTotal() {
        const adults = parseInt(adultsSelect.value || 0);
        const kids = parseInt(kidsSelect.value || 0);

        const total = (adults * pricePerAdult) + (kids * pricePerKid);

        if (!paymentMethod.value) {
            previewBox.style.display = "none";
            return;
        }

        let payNow = 0;
        let remaining = 0;

        if (paymentMethod.value === "dp") {
            payNow = total * 0.3;
            remaining = total - payNow;
        } else {
            payNow = total;
            remaining = 0;
        }

        previewBox.style.display = "block";
        totalEl.innerText = total.toLocaleString();
        payNowEl.innerText = payNow.toLocaleString();
        remainingEl.innerText = remaining.toLocaleString();
    }

    adultsSelect.addEventListener("change", calculateTotal);
    kidsSelect.addEventListener("change", calculateTotal);
    paymentMethod.addEventListener("change", calculateTotal);
}