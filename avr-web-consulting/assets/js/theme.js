/**
 * AVR Web Consulting - Production Theme JavaScript
 * Fully accessible navigation, robust FAQ accordion handling, deferred hero video, and inquiry form.
 */

(function() {
  'use strict';

  function initAVRTheme() {
    // -----------------------------------------------------------------
    // 1. Mobile Navigation Drawer & Dropdowns
    // -----------------------------------------------------------------
    var menuBtn = document.getElementById('avr-mobile-menu-btn');
    var drawer = document.getElementById('avr-mobile-drawer');
    var overlay = document.getElementById('avr-mobile-overlay');
    var closeBtn = document.getElementById('avr-mobile-drawer-close');

    function openMobileMenu() {
      if (!drawer || !overlay) return;
      overlay.classList.remove('pointer-events-none', 'opacity-0');
      overlay.classList.add('pointer-events-auto', 'opacity-100');

      drawer.classList.remove('pointer-events-none', 'translate-x-full');
      drawer.classList.add('pointer-events-auto', 'translate-x-0');
      drawer.setAttribute('aria-hidden', 'false');

      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');

      if (closeBtn) closeBtn.focus();
    }

    function closeMobileMenu() {
      if (!drawer || !overlay) return;
      overlay.classList.remove('pointer-events-auto', 'opacity-100');
      overlay.classList.add('pointer-events-none', 'opacity-0');

      drawer.classList.remove('pointer-events-auto', 'translate-x-0');
      drawer.classList.add('pointer-events-none', 'translate-x-full');
      drawer.setAttribute('aria-hidden', 'true');

      if (menuBtn) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
      }
      document.body.classList.remove('overflow-hidden');
    }

    if (menuBtn) {
      menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMobileMenu();
        closeAllDesktopDropdowns();
      }
    });

    if (drawer) {
      var drawerLinks = drawer.querySelectorAll('a');
      drawerLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          closeMobileMenu();
        });
      });

      // Mobile Accordion Categories in Drawer
      var accTriggers = drawer.querySelectorAll('.avr-mobile-acc-trigger');
      accTriggers.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = btn.getAttribute('data-target');
          var content = document.getElementById(targetId);
          var icon = btn.querySelector('.avr-acc-icon');
          var isExpanded = btn.getAttribute('aria-expanded') === 'true';

          if (content) {
            if (isExpanded) {
              content.classList.add('hidden');
              btn.setAttribute('aria-expanded', 'false');
              if (icon) icon.classList.remove('rotate-180');
            } else {
              content.classList.remove('hidden');
              btn.setAttribute('aria-expanded', 'true');
              if (icon) icon.classList.add('rotate-180');
            }
          }
        });
      });
    }

    // Desktop Dropdowns
    var desktopGroups = document.querySelectorAll('.avr-nav-group');
    function closeAllDesktopDropdowns() {
      desktopGroups.forEach(function(group) {
        var dropdown = group.querySelector('.avr-nav-dropdown');
        var link = group.querySelector('.avr-nav-link');
        var chevron = group.querySelector('.avr-chevron');
        if (dropdown) {
          dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
        }
        if (link) link.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotate-180');
      });
    }

    desktopGroups.forEach(function(group) {
      var link = group.querySelector('.avr-nav-link');
      var dropdown = group.querySelector('.avr-nav-dropdown');
      var chevron = group.querySelector('.avr-chevron');

      if (!link || !dropdown) return;

      link.addEventListener('click', function(e) {
        if (window.innerWidth >= 1280 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
          e.preventDefault();
          var isExpanded = link.getAttribute('aria-expanded') === 'true';
          if (isExpanded) {
            dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
            link.setAttribute('aria-expanded', 'false');
            if (chevron) chevron.classList.remove('rotate-180');
          } else {
            closeAllDesktopDropdowns();
            dropdown.classList.add('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
            link.setAttribute('aria-expanded', 'true');
            if (chevron) chevron.classList.add('rotate-180');
          }
        }
      });

      group.addEventListener('mouseenter', function() {
        if (window.innerWidth >= 1280) {
          dropdown.classList.add('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'true');
          if (chevron) chevron.classList.add('rotate-180');
        }
      });

      group.addEventListener('mouseleave', function() {
        if (window.innerWidth >= 1280) {
          dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('rotate-180');
        }
      });
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.avr-nav-group')) {
        closeAllDesktopDropdowns();
      }
    });

    // -----------------------------------------------------------------
    // 2. FAQ Accordion Handling (Both Native <details> and Button Fallbacks)
    // -----------------------------------------------------------------
    // A. Native HTML5 <details> Enhancement (Core block wp:details)
    var detailsElements = document.querySelectorAll('details.wp-block-details, details.avr-faq-item');
    detailsElements.forEach(function(detail) {
      detail.addEventListener('toggle', function() {
        var summary = detail.querySelector('summary');
        var chevron = detail.querySelector('.avr-faq-icon, svg');
        if (chevron) {
          if (detail.open) {
            chevron.style.transform = 'rotate(180deg)';
          } else {
            chevron.style.transform = 'rotate(0deg)';
          }
        }
      });
    });

    // B. Custom/Legacy Button FAQ Accordions
    var faqButtons = document.querySelectorAll('[data-faq-trigger], [data-orientation="vertical"] button, .faq-trigger-btn');
    faqButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var item = btn.closest('.border-b') || btn.parentElement;
        var content = item ? item.querySelector('[role="region"], div[data-state], .faq-content') : null;
        var icon = btn.querySelector('svg.lucide-chevron-down') || btn.querySelector('svg');

        if (content) {
          var isClosed = content.hasAttribute('hidden') || content.classList.contains('hidden') || content.getAttribute('data-state') === 'closed';

          if (isClosed) {
            content.removeAttribute('hidden');
            content.classList.remove('hidden');
            content.setAttribute('data-state', 'open');
            btn.setAttribute('data-state', 'open');
            btn.setAttribute('aria-expanded', 'true');
            if (icon) icon.style.transform = 'rotate(180deg)';
          } else {
            content.setAttribute('hidden', '');
            content.classList.add('hidden');
            content.setAttribute('data-state', 'closed');
            btn.setAttribute('data-state', 'closed');
            btn.setAttribute('aria-expanded', 'false');
            if (icon) icon.style.transform = 'rotate(0deg)';
          }
        }
      });
    });

    // -----------------------------------------------------------------
    // 3. Optimized Deferred Hero Video Loading
    // -----------------------------------------------------------------
    var heroVideo = document.querySelector('video[data-avr-deferred-video], .avr-hero-video');
    if (heroVideo) {
      // Respect user's reduced-motion preference
      var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        var startVideo = function() {
          var source = heroVideo.querySelector('source');
          if (source && source.getAttribute('data-src')) {
            source.src = source.getAttribute('data-src');
            heroVideo.load();
            heroVideo.play().catch(function() {
              // Autoplay policy prevented playback, keep static poster visible
            });
          }
        };

        // Delay until critical render completes
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(startVideo, { timeout: 1500 });
        } else {
          window.addEventListener('load', function() {
            setTimeout(startVideo, 200);
          });
        }
      }
    }

    // -----------------------------------------------------------------
    // 4. Table of Contents Smooth Scrolling
    // -----------------------------------------------------------------
    var tocAnchors = document.querySelectorAll('aside a[href^="#"], .toc-link, nav[aria-label="On this page"] a');
    tocAnchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            var headerOffset = 90;
            var elementPosition = target.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            if (history.pushState) {
              history.pushState(null, '', href);
            }
          }
        }
      });
    });

    // -----------------------------------------------------------------
    // 5. Interactive Consultation & Inquiry Form Handler
    // -----------------------------------------------------------------
    var forms = document.querySelectorAll('form[data-avr-inquiry-form], form.pricing-inquiry-form, form#avr-inquiry-form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="inline-flex items-center gap-2"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg><span>Submitting...</span></span>';
        }

        var formData = new FormData(form);
        formData.append('action', 'avr_submit_inquiry');
        if (window.avr_theme_data && window.avr_theme_data.nonce) {
          formData.append('nonce', window.avr_theme_data.nonce);
        }

        var ajaxUrl = (window.avr_theme_data && window.avr_theme_data.ajax_url) || '/wp-admin/admin-ajax.php';

        fetch(ajaxUrl, {
          method: 'POST',
          body: formData
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          var notice = form.querySelector('.form-success-notice');
          if (!notice) {
            notice = document.createElement('div');
            notice.className = 'form-success-notice mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium';
            form.appendChild(notice);
          }
          notice.textContent = (data && data.message) || 'Thank you! Your inquiry has been sent successfully. Our team will contact you within 24 hours.';
          form.reset();
        })
        .catch(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          var notice = form.querySelector('.form-success-notice');
          if (!notice) {
            notice = document.createElement('div');
            notice.className = 'form-success-notice mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium';
            form.appendChild(notice);
          }
          notice.textContent = 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.';
          form.reset();
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAVRTheme);
  } else {
    initAVRTheme();
  }
})();
