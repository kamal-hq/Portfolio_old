/* ============================== */
/* ===== CERTIFICATE RENDER ===== */
/* ============================== */

/**
 * Builds a single certificate card element from a data object.
 * Returns a DOM node ready to append into the grid.
 */
function buildCertCard(cert) {
  const card = document.createElement("div");
  card.className = `cert-card ${cert.category}`;

  const img = document.createElement("img");
  img.src = cert.thumbnail;
  img.alt = cert.fullTitle;
  img.loading = cert.loading;
  card.appendChild(img);

  const info = document.createElement("div");
  info.className = "info";

  const h3 = document.createElement("h3");
  h3.textContent = cert.title;
  info.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = cert.provider;
  info.appendChild(p);

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  // View button — opens lightbox via addEventListener (no onclick attribute)
  const viewBtn = document.createElement("button");
  viewBtn.className = "view-btn";
  viewBtn.innerHTML = '<i class="fa-solid fa-eye"></i> View';
  viewBtn.addEventListener("click", function () {
    openLightbox(cert.fullImage, cert.fullTitle);
  });
  btnContainer.appendChild(viewBtn);

  // Download button
  const dlLink = document.createElement("a");
  dlLink.href = cert.fullImage;
  dlLink.download = "";
  dlLink.className = "download-btn";
  dlLink.innerHTML = '<i class="fa-solid fa-download"></i>';
  btnContainer.appendChild(dlLink);

  info.appendChild(btnContainer);
  card.appendChild(info);

  return card;
}

/**
 * Renders all certificates into the #certGrid container.
 * Expects the global CERTIFICATES array from assets/data/certificates.js
 * to already be loaded via a <script> tag before this file.
 */
function renderCertificates() {
  const grid = document.getElementById("certGrid");
  if (!grid || typeof CERTIFICATES === "undefined") return;

  // Clear any existing content (safety measure)
  grid.innerHTML = "";

  CERTIFICATES.forEach(function (cert) {
    grid.appendChild(buildCertCard(cert));
  });
}


/* ============================== */
/* ===== CERTIFICATE FILTER ===== */
/* ============================== */

document.addEventListener('DOMContentLoaded', function () {

  // 0. RENDER: Build certificate cards from data
  renderCertificates();

  const filterBtns = document.querySelectorAll(".filter-btn");
  const mobileToggleBtn = document.querySelector(".mobile-filter-toggle");
  const filterMenu = document.querySelector(".filter-buttons");

  // 1. MOBILE: Toggle Menu Open/Close
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent immediate closing
      filterMenu.classList.toggle("show");
    });

    // Close menu if clicking outside of it
    document.addEventListener("click", function (e) {
      if (!filterMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        filterMenu.classList.remove("show");
      }
    });
  }

  // 2. FILTERING LOGIC
  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {

        // A. Update Active State
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        // B. MOBILE: Update Toggle Text & Close Menu
        if (mobileToggleBtn && window.innerWidth <= 768) {
          var btnText = btn.innerText;
          // Update the button text to show what is selected
          mobileToggleBtn.innerHTML = '<i class="fa-solid fa-filter"></i> ' + btnText + ' ▾';
          // Close the dropdown
          filterMenu.classList.remove("show");
        }

        // C. Filter The Cards — re-query because cards are now dynamically rendered
        var certCards = document.querySelectorAll(".cert-card");
        var category = btn.getAttribute("data-filter");

        certCards.forEach(function (card) {
          // If category is 'all' OR the card has the specific category class
          if (category === "all" || card.classList.contains(category)) {
            // CRITICAL: Use 'flex' to keep your button alignment perfect
            card.style.display = "flex";

            // Add fade-in animation
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            setTimeout(function () {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 50);
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});


/* ============================ */
/* ===== LIGHTBOX LOGIC ======= */
/* ============================ */

/**
 * Opens the certificate lightbox with the given image and caption.
 * Scoped as a plain function — called by the dynamically-attached
 * addEventListener handlers on View buttons (no window.* needed).
 */
function openLightbox(imageSrc, caption) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var captionText = document.getElementById("caption");

  if (!lightbox || !lightboxImg || !captionText) return;

  lightbox.style.display = "block";
  lightboxImg.src = imageSrc;
  captionText.textContent = caption;
}

/**
 * Closes the lightbox modal.
 */
function closeLightbox() {
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

// Attach lightbox close handlers via addEventListener (no .onclick assignment)
document.addEventListener('DOMContentLoaded', function () {
  var closeBtn = document.querySelector(".close-lightbox");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");

  // Close when clicking the 'x' button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  // Close when clicking outside the image (on the overlay)
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target !== lightboxImg) {
        closeLightbox();
      }
    });
  }
});