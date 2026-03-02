/**
 * ============================================================
 *  render.js — Dynamically renders all resume sections from
 *  RESUME_DATA (js/data.js). Supports lang = "en" | "vi".
 *
 *  Usage: include data.js BEFORE render.js, then call
 *         renderResume("en") or renderResume("vi").
 * ============================================================
 */

(function () {
  "use strict";

  /* ── helpers ─────────────────────────────────────────── */

  /** Resolve a bilingual field: { en, vi } or plain string */
  function t(field, lang) {
    if (!field) return "";
    if (typeof field === "object" && (field.en !== undefined || field.vi !== undefined)) {
      return field[lang] !== undefined ? field[lang] : field.en || "";
    }
    return String(field);
  }

  /** Safely set innerHTML of an element by ID */
  function setHTML(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  /* ── badge URL builder ────────────────────────────────── */
  function badgeUrl(b) {
    var logoColor = b.color === "ffffff" ? "white" : b.color;
    return "https://img.shields.io/badge/"
      + encodeURIComponent(b.label) + "-282C34"
      + "?logo=" + encodeURIComponent(b.logo)
      + "&logoColor=" + encodeURIComponent(logoColor);
  }

  /* ════════════════════════════════════════════════════════
     SECTION RENDERERS
  ════════════════════════════════════════════════════════ */

  /* ── SIDEBAR (nav + name + avatar) ───────────────────── */
  function renderSidebar(data, lang) {
    // Nav-brand name (mobile header)
    var brandEl = document.querySelector("#sideNav .navbar-brand .d-block.d-lg-none");
    if (brandEl) brandEl.innerHTML = t(data.profile.name, lang);

    // Nav links text
    var navLabels = {
      "#about":      { en: "About",      vi: "Giới thiệu" },
      "#skills":     { en: "Skills",     vi: "Kỹ năng" },
      "#projects":   { en: "Projects",   vi: "Dự án" },
      "#experience": { en: "Experience", vi: "Kinh nghiệm" },
      "#education":  { en: "Education",  vi: "Học vấn" },
    };
    document.querySelectorAll("#sideNav .nav-link.js-scroll-trigger").forEach(function (a) {
      var href = a.getAttribute("href");
      if (navLabels[href]) a.textContent = navLabels[href][lang];
    });

    // Download CV nav link
    var dlNav = document.querySelector("#sideNav .nav-link[data-role='download-nav']");
    if (dlNav) {
      dlNav.href = data.profile.cvLinks[lang] || data.profile.cvLinks.en;
      dlNav.textContent = lang === "vi" ? "Tải CV" : "Download CV";
    }

    // Language switcher active state
    document.querySelectorAll(".lang-switcher a").forEach(function (a) {
      a.classList.toggle("active-lang", a.getAttribute("data-lang") === lang);
    });
  }

  /* ── ABOUT ────────────────────────────────────────────── */
  function renderAbout(data, lang) {
    var p = data.profile;
    var isVi = lang === "vi";

    // Social icons
    var socialsHtml = data.socials.map(function (s) {
      return '<a target="_blank" href="' + s.url + '" title="' + s.label + '">'
        + '<i class="' + s.icon + '"></i></a>';
    }).join("\n          ");

    // Download buttons
    var btnVnLabel = isVi ? "Tải CV (Tiếng Việt)"    : "Download CV (Vietnamese)";
    var btnEnLabel = isVi ? "Tải CV (Tiếng Anh)"     : "Download CV (English)";

    var html =
      '<p class="role-title">' + t(p.role, lang) + '</p>\n' +
      '<h2 class="mb-1">' + t(p.name, lang) + '</h2>\n' +
      '<div class="mt-3 mb-1">\n' +
      '  <div class="subheading mb-1"><i class="fas fa-phone-alt mr-2" style="font-size:.85rem;opacity:.45;"></i><a href="tel:">' + p.phone + '</a></div>\n' +
      '  <div class="subheading mb-1"><i class="fas fa-envelope mr-2" style="font-size:.85rem;opacity:.45;"></i><a href="mailto:' + p.email + '">' + p.email + '</a></div>\n' +
      '  <div class="subheading mb-4"><i class="fas fa-map-marker-alt mr-2" style="font-size:.85rem;opacity:.45;"></i>' + t(p.address, lang) + '</div>\n' +
      '</div>\n' +
      '<p class="lead mb-5">' + t(p.bio, lang) + '</p>\n' +
      '<div class="social-icons mb-4">\n          ' + socialsHtml + '\n        </div>\n' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;">\n' +
      '  <a class="btn-download btn-download-vn" target="_blank" href="' + p.cvLinks.vi + '">\n' +
      '    <i class="fas fa-download"></i> ' + btnVnLabel + '\n  </a>\n' +
      '  <a class="btn-download btn-download-en" target="_blank" href="' + p.cvLinks.en + '">\n' +
      '    <i class="fas fa-download"></i> ' + btnEnLabel + '\n  </a>\n' +
      '</div>\n' +
      '<a class="scroll-down-arrow js-scroll-trigger" href="#skills">\n' +
      '  <span>' + (isVi ? "Cuộn xuống" : "Scroll") + '</span>\n' +
      '  <i class="fas fa-angle-double-down"></i>\n' +
      '</a>';

    setHTML("about-content", html);
  }

  /* ── SKILLS ───────────────────────────────────────────── */
  function renderSkills(data, lang) {
    var isVi = lang === "vi";
    var html = '<h3 class="mb-0">' + (isVi ? "Kỹ năng" : "Skills") + '</h3>\n';

    data.skills.forEach(function (group) {
      var catName = t(group.category, lang);
      html += '<div class="skills-category-title">' + catName + '</div>\n';

      // Badges
      if (group.badges && group.badges.length > 0) {
        html += '<div class="skills-badges mb-1">\n';
        group.badges.forEach(function (b) {
          html += '  <img src="' + badgeUrl(b) + '" alt="' + b.label + '" title="' + b.label + '" height="26" />\n';
        });
        html += '</div>\n';
      }

      // Skill list items
      html += '<ul class="skills-list mb-2">\n';
      group.items.forEach(function (item) {
        var nameHtml = item.name ? '<strong>' + item.name + ':</strong> ' : '';
        html += '  <li><span class="skill-check"><i class="fas fa-check"></i></span>'
          + '<span>' + nameHtml + t(item.desc, lang) + '</span></li>\n';
      });
      html += '</ul>\n';
    });

    setHTML("skills-content", html);
  }

  /* ── PROJECTS ─────────────────────────────────────────── */
  function renderProjects(data, lang) {
    var isVi = lang === "vi";
    var html = '<h3 class="mb-0">' + (isVi ? "Dự án" : "Projects") + '</h3>\n';

    data.projects.forEach(function (proj) {
      var linksHtml = proj.links.map(function (lnk) {
        return '<a class="project-link" target="_blank" href="' + lnk.url + '">'
          + '<i class="' + lnk.icon + '"></i> ' + t(lnk.label, lang) + '</a>';
      }).join("\n            ");

      html +=
        '<div class="project-card fade-in-up">\n' +
        '  <div class="project-card-header">\n' +
        '    <div>\n' +
        '      <div class="project-title">' + t(proj.title, lang) + '</div>\n' +
        '      <div class="project-tech">' + proj.tech + '</div>\n' +
        '    </div>\n' +
        '    <span class="project-date">' + t(proj.date, lang) + '</span>\n' +
        '  </div>\n' +
        '  <div class="project-links">\n            ' + linksHtml + '\n          </div>\n' +
        '  <p class="project-desc">' + t(proj.desc, lang) + '</p>\n' +
        '</div>\n';
    });

    setHTML("projects-content", html);
  }

  /* ── EXPERIENCE ───────────────────────────────────────── */
  function renderExperience(data, lang) {
    var isVi = lang === "vi";
    var evalStyle = 'font-size:.72rem;font-style:italic;text-transform:none;font-family:\'Muli\',sans-serif;color:var(--text-muted);';

    var html = '<h3 class="mb-0">' + (isVi ? "Kinh nghiệm" : "Experience") + '</h3>\n'
      + '<div class="experience-timeline">\n';

    data.experience.forEach(function (exp) {
      var evalHtml = exp.evalUrl
        ? ' &nbsp;·&nbsp; <a target="_blank" href="' + exp.evalUrl + '" style="' + evalStyle + '">'
          + t(exp.evalLabel, lang) + '</a>'
        : '';

      html +=
        '  <div class="exp-item fade-in-up">\n' +
        '    <div class="exp-dot"></div>\n' +
        '    <div class="exp-card">\n' +
        '      <div class="exp-company">' + t(exp.company, lang)
          + ' <a target="_blank" href="' + exp.infoUrl + '">↗ info</a></div>\n' +
        '      <div class="exp-position">' + t(exp.position, lang) + evalHtml + '</div>\n' +
        '      <span class="exp-date">' + t(exp.date, lang) + '</span>\n' +
        '      <p class="exp-desc">' + t(exp.desc, lang) + '</p>\n' +
        '    </div>\n' +
        '  </div>\n';
    });

    html += '</div>\n';
    setHTML("experience-content", html);
  }

  /* ── EDUCATION ────────────────────────────────────────── */
  function renderEducation(data, lang) {
    var isVi = lang === "vi";
    var html = '<h3 class="mb-0">' + (isVi ? "Học vấn" : "Education") + '</h3>\n';

    data.education.forEach(function (edu) {
      html +=
        '<div class="edu-card fade-in-up">\n' +
        '  <div>\n' +
        '    <div class="edu-school">' + t(edu.school, lang) + '</div>\n' +
        '    <div class="edu-major"><i class="' + edu.icon + ' mr-1"></i> ' + t(edu.major, lang) + '</div>\n' +
        '  </div>\n' +
        '  <span class="edu-date">' + t(edu.date, lang) + '</span>\n' +
        '</div>\n';
    });

    /* ── Competitions ── */
    html += '<h3 class="mb-0 mt-5">' + (isVi ? "Cuộc thi" : "Competitions") + '</h3>\n';

    data.competitions.forEach(function (comp) {
      html +=
        '<div class="competition-card fade-in-up">\n' +
        '  <div>\n' +
        '    <div class="competition-title">' + comp.title + '</div>\n' +
        '    <div class="competition-desc">' + t(comp.desc, lang)
          + ' &nbsp;·&nbsp; <a target="_blank" href="' + comp.certUrl + '" style="color:var(--accent2);font-weight:600;">'
          + t(comp.certLabel, lang) + '</a></div>\n' +
        '  </div>\n' +
        '  <span class="competition-date">' + comp.date + '</span>\n' +
        '</div>\n';
    });

    /* ── Certifications ── */
    html += '<h3 class="mb-0 mt-5">' + (isVi ? "Chứng chỉ" : "Certifications") + '</h3>\n'
      + '<div class="mt-3"><ul class="cert-list">\n';

    var toggleIdx = 0;
    data.certifications.forEach(function (cert) {
      if (cert.children) {
        var idx = toggleIdx++;
        html +=
          '<li><button class="toggle-button toggle-arrow" onclick="toggleItem(' + idx + ')">'
          + t(cert.label, lang) + '</button>\n' +
          '  <ul class="toggle-list toggle-item">\n';
        cert.children.forEach(function (child) {
          html += '    <li><a target="_blank" href="' + child.url + '">' + t(child.label, lang) + '</a></li>\n';
        });
        html += '  </ul>\n</li>\n';
      } else {
        html += '<li><a target="_blank" href="' + cert.url + '">' + t(cert.label, lang) + '</a></li>\n';
      }
    });

    html += '</ul></div>\n';
    setHTML("education-content", html);
  }

  /* ════════════════════════════════════════════════════════
     MAIN ENTRY POINT
  ════════════════════════════════════════════════════════ */

  /**
   * Render the entire resume from RESUME_DATA.
   * @param {"en"|"vi"} lang
   */  window.renderResume = function (lang) {
    lang = lang === "vi" ? "vi" : "en";
    var data = window.RESUME_DATA || (typeof RESUME_DATA !== "undefined" ? RESUME_DATA : null);
    if (!data) {
      console.error("renderResume: RESUME_DATA not found. Make sure data.js is loaded first.");
      return;
    }

    renderSidebar(data, lang);
    renderAbout(data, lang);
    renderSkills(data, lang);
    renderProjects(data, lang);
    renderExperience(data, lang);
    renderEducation(data, lang);

    // Re-run scroll-reveal observer after DOM is populated
    setTimeout(function () {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      }, { threshold: 0.1 });
      document.querySelectorAll(".fade-in-up").forEach(function (el) {
        observer.observe(el);
      });
    }, 0);
  };

})();
