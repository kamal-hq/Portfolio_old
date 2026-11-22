/**
 * Decommission Notice Controller
 * Keeps the top warning banner spacer/nav offset synced and manages
 * the on-screen decommission warning modal across all pages.
 */
(function () {
  const NEW_PORTFOLIO_URL = 'https://muhammadkamal.vercel.app/';
  const STORAGE_KEY = 'mk_archive_notice_dismissed';

  function syncBannerHeight() {
    const banner = document.getElementById('mk-decomm-banner');
    const spacer = document.getElementById('mk-decomm-spacer');
    if (!banner) return;

    const height = Math.ceil(banner.getBoundingClientRect().height);
    if (height > 0) {
      document.documentElement.style.setProperty('--mk-decomm-h', height + 'px');
      if (spacer) {
        spacer.style.height = height + 'px';
      }
    }
  }

  function isPageReload() {
    try {
      if (window.performance && typeof window.performance.getEntriesByType === 'function') {
        const entries = window.performance.getEntriesByType('navigation');
        if (entries && entries.length > 0) {
          return entries[0].type === 'reload';
        }
      }
      if (window.performance && window.performance.navigation) {
        return window.performance.navigation.type === 1;
      }
    } catch (e) {
      // Ignore navigation timing access errors
    }
    return false;
  }

  function wasDismissed() {
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function markDismissed() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      // Ignore storage access errors
    }
  }

  function createModal() {
    let backdrop = document.getElementById('mk-decomm-backdrop');
    if (backdrop) return backdrop;

    backdrop = document.createElement('div');
    backdrop.id = 'mk-decomm-backdrop';
    backdrop.className = 'mk-decomm-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'mk-decomm-modal-title');
    backdrop.setAttribute('aria-hidden', 'true');

    backdrop.innerHTML =
      '<div class="mk-decomm-modal">' +
        '<button type="button" class="mk-decomm-modal__close" aria-label="Close warning notice">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
        '<div class="mk-decomm-modal__icon" aria-hidden="true">' +
          '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
        '</div>' +
        '<div class="mk-decomm-modal__pill">Warning &middot; Portfolio Decommissioned</div>' +
        '<h2 id="mk-decomm-modal-title" class="mk-decomm-modal__title">This Portfolio Has Moved</h2>' +
        '<p class="mk-decomm-modal__desc">' +
          'You are viewing an older archived version of Muhammad Kamal\'s portfolio (<strong>Portfolio_old</strong>). ' +
          'A newer, actively maintained portfolio is now live:' +
        '</p>' +
        '<a class="mk-decomm-modal__url-box" href="' + NEW_PORTFOLIO_URL + '">' +
          '<span>' + NEW_PORTFOLIO_URL + '</span>' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
        '</a>' +
        '<div class="mk-decomm-modal__actions">' +
          '<a class="mk-decomm-modal__cta" href="' + NEW_PORTFOLIO_URL + '">' +
            '<span>Visit New Portfolio</span>' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>' +
          '<button type="button" class="mk-decomm-modal__dismiss">Stay on Archived Site</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(backdrop);
    return backdrop;
  }

  function initNotice() {
    syncBannerHeight();

    const banner = document.getElementById('mk-decomm-banner');
    if (banner && typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncBannerHeight).observe(banner);
    }
    window.addEventListener('resize', syncBannerHeight);
    window.addEventListener('load', syncBannerHeight);

    const backdrop = createModal();
    const closeBtn = backdrop.querySelector('.mk-decomm-modal__close');
    const dismissBtn = backdrop.querySelector('.mk-decomm-modal__dismiss');
    const primaryCta = backdrop.querySelector('.mk-decomm-modal__cta');
    const infoBtn = document.getElementById('mk-decomm-info-btn');
    let previousFocus = null;

    function openModal() {
      previousFocus = document.activeElement;
      backdrop.setAttribute('aria-hidden', 'false');
      backdrop.classList.add('is-open');
      if (primaryCta) {
        setTimeout(function () {
          primaryCta.focus();
        }, 30);
      }
    }

    function closeModal() {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
      markDismissed();
      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
    if (infoBtn) infoBtn.addEventListener('click', openModal);

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Show automatically on fresh visits or explicit page reloads.
    if (!wasDismissed() || isPageReload()) {
      openModal();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotice);
  } else {
    initNotice();
  }
})();
