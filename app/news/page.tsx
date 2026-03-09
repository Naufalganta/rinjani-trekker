"use client";

import { useEffect } from "react";

export default function NewsPage() {

  useEffect(() => {

    const feedUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5rXVCT4XGmr1e_2cmsZdXb4rTjd3NBG4M19B6P9RooeaCZ3EamYEDw7-yJxto7rvTui7UK4NLCEMj/pub?output=csv";

    const container = document.getElementById("news-container");

    async function loadNews() {

      if (!container) return;

      try {

        const response = await fetch(feedUrl);
        const data = await response.text();

        const rows = data.split("\n").slice(2);

        let htmlContent = "";

        rows.slice(0, 9).forEach((row) => {

          const cols = row.split(",");

          if (cols.length >= 5) {

            const title = cols[0]?.trim() || "No Title";
            const description = cols[1]?.trim() || "";
            let imageUrl = cols[2]?.trim() || "";
            const url = cols[3]?.trim() || "#";
            const rawDate = cols[4]?.trim() || "";

            if (!imageUrl || imageUrl.toLowerCase() === "no image") {
              imageUrl =
                "https://via.placeholder.com/400x200?text=No+Image";
            }

            let formattedDate = rawDate;

            if (rawDate) {
              const parsedDate = new Date(rawDate);
              if (!isNaN(parsedDate.getTime())) {
                formattedDate = parsedDate.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
              }
            }

            htmlContent += `
            <div class="news-card">
              <img src="${imageUrl}" class="news-image"/>
              <div class="news-content">
                <a href="${url}" target="_blank" class="news-title">
                  ${title}
                </a>
                <div class="news-date">
                  ${formattedDate}
                </div>
              </div>
            </div>
            `;
          }
        });

        container.innerHTML = htmlContent;

      } catch (error) {

        container.innerHTML =
          "<p style='color:red'>Gagal memuat berita</p>";

        console.error(error);
      }
    }

    loadNews();

  }, []);

  return (
    <main>

      <section className="hero">

        <div className="container">

          <h1 className="section-title">
            Latest Updates
          </h1>

          <div
            id="news-container"
            className="news-list"
          >

            <p className="loading-text">
              Sedang memuat berita terbaru...
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}