/**
 * ============================================================
 *  deck.js — Slide-style section navigation
 *  Each <section class="resume-section"> becomes a full-height panel
 *  that scrolls vertically on its own. The next/previous panel slides
 *  in horizontally (next comes from the right).
 *
 *  Controls: right/left edge tabs, mobile bottom bar, sidebar links,
 *  in-page "#id" links, ArrowLeft / ArrowRight keys, browser back/forward.
 *  Without JS the page stays a normal vertical scroll.
 * ============================================================
 */

(function () {
  "use strict";

  var DURATION = 480;  // keep in sync with --deck-duration in CSS

  var deck, panels, ids, current = 0, busy = false, lang = "en";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  var LABELS = {
    about:      { en: "About",      vi: "Giới thiệu" },
    skills:     { en: "Skills",     vi: "Kỹ năng" },
    projects:   { en: "Projects",   vi: "Dự án" },
    experience: { en: "Experience", vi: "Kinh nghiệm" },
    education:  { en: "Education",  vi: "Học vấn" },
  };
  var UI = {
    next: { en: "Next",     vi: "Tiếp" },
    prev: { en: "Previous", vi: "Trước" },
  };

  function label(id) {
    return LABELS[id] ? LABELS[id][lang] : id;
  }

  /* ── build controls ──────────────────────────────────── */
  function buildControls() {
    var html =
      '<button type="button" class="deck-edge deck-edge-prev" data-deck="prev">' +
      '  <span class="deck-edge-dot"><i class="fas fa-chevron-left" aria-hidden="true"></i></span>' +
      '</button>' +
      '<button type="button" class="deck-edge deck-edge-next" data-deck="next">' +
      '  <span class="deck-edge-dot"><i class="fas fa-chevron-right" aria-hidden="true"></i></span>' +
      '</button>' +
      '<div class="deck-bar" role="navigation" aria-label="Sections">' +
      '  <button type="button" class="deck-bar-btn" data-deck="prev"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>' +
      '  <div class="deck-bar-status" aria-live="polite"></div>' +
      '  <button type="button" class="deck-bar-btn deck-bar-next" data-deck="next"><span class="deck-bar-next-label"></span><i class="fas fa-chevron-right" aria-hidden="true"></i></button>' +
      '</div>' +
      '<div class="deck-progress" aria-hidden="true"><span></span></div>';

    var wrap = document.createElement("div");
    wrap.className = "deck-controls";
    wrap.innerHTML = html;
    deck.appendChild(wrap);

    // Wheel over the edge strips still scrolls the current panel
    wrap.addEventListener("wheel", function (e) {
      panels[current].scrollBy({ top: e.deltaY, left: 0 });
    }, { passive: true });

    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-deck]");
      if (!btn) return;
      go(current + (btn.getAttribute("data-deck") === "next" ? 1 : -1));
    });
  }

  function updateControls() {
    var hasPrev = current > 0;
    var hasNext = current < panels.length - 1;
    var prevName = hasPrev ? label(ids[current - 1]) : "";
    var nextName = hasNext ? label(ids[current + 1]) : "";

    deck.querySelectorAll('[data-deck="prev"]').forEach(function (b) {
      b.hidden = !hasPrev;
      b.setAttribute("aria-label", UI.prev[lang] + ": " + prevName);
    });
    deck.querySelectorAll('[data-deck="next"]').forEach(function (b) {
      b.hidden = !hasNext;
      b.setAttribute("aria-label", UI.next[lang] + ": " + nextName);
    });
    deck.querySelector(".deck-bar-next-label").textContent = nextName;
    deck.querySelector(".deck-bar-status").textContent =
      pad(current + 1) + " / " + pad(panels.length) + " · " + label(ids[current]);
    deck.querySelector(".deck-progress span").style.transform =
      "scaleX(" + ((current + 1) / panels.length) + ")";

    // Sidebar active state (replaces Bootstrap scrollspy)
    document.querySelectorAll("#sideNav .nav-link.js-scroll-trigger").forEach(function (a) {
      var on = a.getAttribute("href") === "#" + ids[current];
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  /* ── panel state ─────────────────────────────────────── */
  function setState(panel, state) {
    panel.classList.remove("is-active", "is-before", "is-after", "is-leaving", "is-entering");
    if (state) panel.classList.add(state);
    var active = state === "is-active";
    panel.inert = !active;
    panel.setAttribute("aria-hidden", active ? "false" : "true");
  }

  function clearInline(p) {
    if (!p) return;
    p.style.transform = "";
    p.style.opacity = "";
    p.classList.remove("no-transition");
  }

  // fromDrag: a swipe already moved both panels with inline styles;
  // the transition then continues from where the finger let go.
  function show(index, animate, fromDrag) {
    if (index < 0 || index >= panels.length) return;
    if (index === current && panels[index].classList.contains("is-active")) return;
    if (busy) return;

    var from = current;
    var dir = index > from ? 1 : -1;
    var incoming = panels[index];
    var outgoing = panels[from];
    current = index;

    // Park every other panel off-screen on the correct side, without animating
    panels.forEach(function (p, i) {
      if (i === index || i === from) return;
      setState(p, i < index ? "is-before" : "is-after");
    });

    if (!animate || reduceMotion.matches || from === index) {
      clearInline(incoming);
      clearInline(outgoing);
      if (from !== index) setState(outgoing, from < index ? "is-before" : "is-after");
      setState(incoming, "is-active");
      finish(incoming);
      return;
    }

    busy = true;
    updateControls(); // sidebar + progress react immediately, not after the slide ends
    deck.classList.add("is-animating");
    deck.setAttribute("data-dir", dir > 0 ? "next" : "prev");

    if (fromDrag) {
      // Swap classes and drop inline positions in the same frame,
      // so CSS animates from the finger position to the final one
      outgoing.classList.add("is-leaving");
      incoming.classList.remove("is-before", "is-after");
      incoming.classList.add("is-entering", "is-active");
      outgoing.classList.remove("is-active");
      outgoing.classList.add(dir > 0 ? "is-before" : "is-after");
      clearInline(incoming);
      clearInline(outgoing);
    } else {
      // Start incoming on its side, then let CSS transition it to the center
      incoming.classList.add("no-transition");
      setState(incoming, dir > 0 ? "is-after" : "is-before");
      incoming.classList.add("is-entering");
      void incoming.offsetWidth; // commit start position
      incoming.classList.remove("no-transition");

      outgoing.classList.add("is-leaving");
      requestAnimationFrame(function () {
        incoming.classList.remove("is-before", "is-after");
        incoming.classList.add("is-active");
        outgoing.classList.remove("is-active");
        outgoing.classList.add(dir > 0 ? "is-before" : "is-after");
      });
    }

    // Clean up the moment the incoming panel lands (timer is only a fallback)
    var done = false;
    function onEnd(e) {
      if (e.target === incoming && e.propertyName === "transform") end();
    }
    function end() {
      if (done) return;
      done = true;
      incoming.removeEventListener("transitionend", onEnd);
      setState(outgoing, dir > 0 ? "is-before" : "is-after");
      setState(incoming, "is-active");
      deck.classList.remove("is-animating");
      busy = false;
      finish(incoming);
    }
    incoming.addEventListener("transitionend", onEnd);
    setTimeout(end, DURATION + 450); // generous: never cut a slow-starting slide short
  }

  function finish(panel) {
    updateControls();
    panel.focus({ preventScroll: true }); // arrow up/down + space scroll the panel
    document.dispatchEvent(new CustomEvent("deck:change", { detail: { id: ids[current], panel: panel } }));
  }

  /* ── navigation entry points ─────────────────────────── */
  function go(index, opts) {
    opts = opts || {};
    if (index < 0 || index >= panels.length || index === current || busy) return;
    show(index, true, opts.fromDrag);
    if (!opts.fromHistory) {
      try {
        history.pushState({ deck: ids[index] }, "", location.pathname + location.search + "#" + ids[index]);
      } catch (err) { /* e.g. sandboxed or file:// contexts */ }
    }
  }

  function indexFromHash() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    var i = ids.indexOf(id);
    return i;
  }

  function onLinkClick(e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute("href").slice(1);
    var i = ids.indexOf(id);
    if (i === -1) {
      // #page-top / brand link goes to the first panel
      if (id === "page-top") i = 0; else return;
    }
    e.preventDefault();
    e.stopImmediatePropagation(); // stop the old jQuery smooth-scroll handler
    if (window.jQuery) window.jQuery(".navbar-collapse").collapse("hide");
    if (i === current) {
      panels[i].scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
      return;
    }
    go(i);
  }

  function onKey(e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
  }

  /* ── touch swipe (phones / tablets) ──────────────────── */
  // Panels use `touch-action: pan-y`, so the browser keeps vertical scrolling
  // and hands horizontal moves to us. Swipes starting at the screen edges are
  // ignored to leave the OS back gesture alone.
  function initSwipe() {
    var EDGE = 24;          // px from screen edge reserved for OS gestures
    var LOCK = 10;          // px before deciding horizontal vs vertical
    var s = null;

    function reset() { s = null; }

    deck.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "touch" || !e.isPrimary || busy) return;
      if (e.clientX < EDGE || e.clientX > window.innerWidth - EDGE) return;
      if (e.target.closest(".deck-controls, input, textarea, select, [contenteditable]")) return;
      s = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, lock: null,
            w: deck.clientWidth, px: e.clientX, pt: e.timeStamp, v: 0 };
    });

    deck.addEventListener("pointermove", function (e) {
      if (!s || e.pointerId !== s.id) return;
      var dx = e.clientX - s.x;
      var dy = e.clientY - s.y;

      if (!s.lock) {
        if (Math.abs(dx) < LOCK && Math.abs(dy) < LOCK) return;
        if (Math.abs(dx) <= Math.abs(dy) * 1.3) { reset(); return; } // vertical scroll wins
        s.lock = true;
        startDrag(dx < 0 ? 1 : -1);
      }

      // Velocity (px/ms), lightly smoothed
      var dt = e.timeStamp - s.pt;
      if (dt > 0) s.v = 0.7 * ((e.clientX - s.px) / dt) + 0.3 * s.v;
      s.px = e.clientX;
      s.pt = e.timeStamp;

      // Don't let the drag cross back past the starting point
      s.dx = s.dir > 0 ? Math.min(dx, 0) : Math.max(dx, 0);
      drag(s.dx);
    });

    deck.addEventListener("pointerup", function (e) {
      if (!s || e.pointerId !== s.id) return;
      if (s.lock) endDrag(true);
      reset();
    });
    deck.addEventListener("pointercancel", function (e) {
      if (!s || e.pointerId !== s.id) return;
      if (s.lock) endDrag(false);
      reset();
    });

    function startDrag(dir) {
      s.dir = dir;
      s.active = panels[current];
      s.nbIndex = current + dir;
      s.nb = panels[s.nbIndex] || null;
      s.active.classList.add("no-transition");
      if (s.nb) {
        s.nb.classList.add("no-transition");
        setState(s.nb, dir > 0 ? "is-after" : "is-before");
        s.nb.classList.add("is-entering");
        deck.setAttribute("data-dir", dir > 0 ? "next" : "prev");
      }
    }

    function drag(dx) {
      if (s.nb) {
        var base = s.dir > 0 ? s.w : -s.w;
        s.nb.style.transform = "translateX(" + (base + dx) + "px)";
        s.active.style.transform = "translateX(" + (dx * 0.22) + "px)";
        s.active.style.opacity = String(1 - (Math.abs(dx) / s.w) * 0.65);
      } else {
        // First/last section: rubber-band so the user feels the end
        s.active.style.transform = "translateX(" + (dx * 0.18) + "px)";
      }
    }

    function endDrag(allowCommit) {
      var dx = Math.abs(s.dx);
      var fast = Math.abs(s.v) > 0.45 && dx > 30 && (s.v < 0) === (s.dir > 0);
      var commit = allowCommit && s.nb && (dx > s.w * 0.25 || fast);

      // A finished drag must not also click the link under the finger
      var swallow = function (ev) { ev.preventDefault(); ev.stopPropagation(); };
      document.addEventListener("click", swallow, true);
      setTimeout(function () { document.removeEventListener("click", swallow, true); }, 350);

      if (commit) {
        go(s.nbIndex, { fromDrag: true });
        return;
      }

      // Snap back
      var active = s.active, nb = s.nb;
      clearInline(active);
      clearInline(nb);
      if (nb) {
        busy = true;
        setTimeout(function () {
          nb.classList.remove("is-entering");
          busy = false;
        }, DURATION);
      }
    }
  }

  /* ── init ────────────────────────────────────────────── */
  window.initDeck = function (pageLang) {
    lang = pageLang === "vi" ? "vi" : "en";
    deck = document.getElementById("main-content");
    if (!deck || deck.classList.contains("deck")) return;

    panels = Array.prototype.slice.call(deck.querySelectorAll(":scope > section.resume-section"));
    if (panels.length < 2) return;
    ids = panels.map(function (p) { return p.id; });

    // Body no longer scrolls, so Bootstrap scrollspy would fight our active state
    if (window.jQuery && window.jQuery.fn.scrollspy) {
      try { window.jQuery("body").scrollspy("dispose"); } catch (err) { /* not initialised */ }
    }

    document.documentElement.classList.add("deck-mode");
    deck.classList.add("deck");
    deck.setAttribute("aria-roledescription", "carousel");

    panels.forEach(function (p) {
      p.setAttribute("tabindex", "-1");
      p.setAttribute("role", "region");
      p.setAttribute("aria-roledescription", "slide");
      p.setAttribute("aria-label", label(p.id));
    });

    buildControls();

    var start = indexFromHash();
    current = start >= 0 ? start : 0;
    panels.forEach(function (p, i) {
      setState(p, i === current ? "is-active" : (i < current ? "is-before" : "is-after"));
    });
    try {
      history.replaceState({ deck: ids[current] }, "", location.pathname + location.search + (start >= 0 ? location.hash : ""));
    } catch (err) { /* ignore */ }
    deck.scrollLeft = 0;
    updateControls();

    initSwipe();
    document.addEventListener("click", onLinkClick, true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("popstate", function () {
      var i = indexFromHash();
      if (i === -1) i = 0;
      if (i !== current) show(i, true);
    });
    // Anchor jumps must never scroll the clipped deck sideways
    deck.addEventListener("scroll", function () { deck.scrollLeft = 0; deck.scrollTop = 0; });
  };
})();
