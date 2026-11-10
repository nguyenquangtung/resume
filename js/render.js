/**
 * ============================================================
 *  render.js — Dynamically renders all resume sections from
 *  RESUME_DATA (js/data.js). Supports lang = "en" | "vi".
 *  Upgraded with UI/UX Design System, interactive filters & stats.
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

  /** "A · B · C" -> tech chip spans */
  function techChips(tech) {
    if (!tech) return "";
    return tech.split("·").map(function (p) { return p.trim(); })
      .filter(Boolean)
      .map(function (p) { return '<span class="tech-chip">' + p + '</span>'; })
      .join(" ");
  }

  /* ── badge URL builder ────────────────────────────────── */
  function badgeUrl(b) {
    var logoColor = b.color === "ffffff" ? "white" : b.color;
    return "https://img.shields.io/badge/"
      + encodeURIComponent(b.label) + "-1e293b"
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

    // Status pill
    var statusHtml = p.status ? (
      '<div class="status-pill fade-in-up">\n' +
      '  <span class="status-pulse-dot"></span>\n' +
      '  <span>' + t(p.status, lang) + '</span>\n' +
      '</div>\n'
    ) : '';

    // Social icons
    var socialsHtml = data.socials.map(function (s) {
      return '<a target="_blank" rel="noopener noreferrer" href="' + s.url + '" title="' + s.label + '" aria-label="' + s.label + '">'
        + '<i class="' + s.icon + '"></i></a>';
    }).join("\n          ");

    // Download buttons
    var btnVnLabel = isVi ? "Tải CV (Tiếng Việt)"    : "Download CV (Vietnamese)";
    var btnEnLabel = isVi ? "Tải CV (Tiếng Anh)"     : "Download CV (English)";

    // Highlights stats grid
    var statsHtml = '';
    if (p.highlights && p.highlights.length > 0) {
      statsHtml = '<div class="hero-stats-grid mb-4 fade-in-up">\n';
      p.highlights.forEach(function (h) {
        statsHtml +=
          '  <div class="stat-card">\n' +
          '    <div class="stat-number">' + h.number + '</div>\n' +
          '    <div class="stat-label">' + t(h.label, lang) + '</div>\n' +
          '  </div>\n';
      });
      statsHtml += '</div>\n';
    }

    var html =
      statusHtml +
      '<div class="role-badge mb-2"><i class="fas fa-microchip mr-2"></i>' + t(p.role, lang) + '</div>\n' +
      '<h2 class="hero-name mb-3">' + t(p.name, lang) + '</h2>\n' +
      '<div class="contact-badges-row mb-4">\n' +
      '  <a class="contact-badge contact-badge-tel tel" href="tel:' + p.phone.replace(/[^0-9+]/g, '') + '"><i class="fas fa-phone"></i><span>' + p.phone + '</span></a>\n' +
      '  <a class="contact-badge" href="mailto:' + p.email + '"><i class="fas fa-envelope"></i><span>' + p.email + '</span></a>\n' +
      '  <div class="contact-badge"><i class="fas fa-map-marker-alt"></i><span>' + t(p.address, lang) + '</span></div>\n' +
      '</div>\n' +
      '<p class="lead mb-4">' + t(p.bio, lang) + '</p>\n' +
      statsHtml +
      '<div class="social-icons mb-4">\n          ' + socialsHtml + '\n        </div>\n' +
      '<div class="download-cta-row mb-4">\n' +
      '  <a class="btn-download btn-download-vn" target="_blank" rel="noopener noreferrer" href="' + p.cvLinks.vi + '">\n' +
      '    <i class="fas fa-file-pdf"></i> ' + btnVnLabel + '\n  </a>\n' +
      '  <a class="btn-download btn-download-en" target="_blank" rel="noopener noreferrer" href="' + p.cvLinks.en + '">\n' +
      '    <i class="fas fa-download"></i> ' + btnEnLabel + '\n  </a>\n' +
      '</div>\n' +
      '<a class="scroll-down-arrow js-scroll-trigger" href="#skills">\n' +
      '  <span>' + (isVi ? "Khám phá kỹ năng" : "Explore Skills") + '</span>\n' +
      '  <i class="fas fa-arrow-right"></i>\n' +
      '</a>';

    setHTML("about-content", html);
  }

  /* ── SKILLS ───────────────────────────────────────────── */
  function renderSkills(data, lang) {
    var isVi = lang === "vi";
    var allLabel = isVi ? "Tất cả" : "All Skills";

    // Filter bar
    var filterHtml = '<div class="skills-filter-bar mb-4" role="group" aria-label="' + (isVi ? "Lọc kỹ năng" : "Filter skills") + '">\n'
      + '  <button type="button" class="filter-pill active" aria-pressed="true" data-filter="all">' + allLabel + '</button>\n';

    data.skills.forEach(function (group) {
      var catName = t(group.category, lang);
      var groupId = group.id || catName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      filterHtml += '  <button type="button" class="filter-pill" aria-pressed="false" data-filter="' + groupId + '">' + catName + '</button>\n';
    });
    filterHtml += '</div>\n';

    var html = '<div class="section-title-wrap mb-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Kỹ năng chuyên môn" : "Technical Skills") + '</h3>\n'
      + '  <p class="section-subtitle">' + (isVi ? "Các công nghệ, nền tảng và kỹ năng được áp dụng thực tế" : "Core technologies, platforms & practical engineering skills") + '</p>\n'
      + '</div>\n'
      + filterHtml
      + '<div class="skills-grid">\n';

    data.skills.forEach(function (group) {
      var catName = t(group.category, lang);
      var groupId = group.id || catName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      var groupIcon = group.icon || "fas fa-layer-group";

      html += '<div class="skills-group card-glass fade-in-up" data-category="' + groupId + '">\n';
      html += '  <div class="skills-category-header">\n'
           + '    <div class="skills-cat-icon"><i class="' + groupIcon + '"></i></div>\n'
           + '    <div class="skills-category-title">' + catName + '</div>\n'
           + '  </div>\n';

      // Badges
      if (group.badges && group.badges.length > 0) {
        html += '  <div class="skills-badges mb-3">\n';
        group.badges.forEach(function (b) {
          html += '    <img src="' + badgeUrl(b) + '" alt="' + b.label + '" title="' + b.label + '" height="24" loading="lazy" />\n';
        });
        html += '  </div>\n';
      }

      // Skill list items
      html += '  <ul class="skills-list">\n';
      group.items.forEach(function (item) {
        var highlightTag = item.highlight ? ' <span class="badge-featured">' + (isVi ? "Nổi bật" : "Featured") + '</span>' : '';
        var nameHtml = item.name ? '<strong>' + item.name + '</strong>' + highlightTag + ': ' : '';
        html += '    <li class="' + (item.highlight ? 'item-highlight' : '') + '">\n'
          + '      <span class="skill-check"><i class="fas fa-check"></i></span>\n'
          + '      <div class="skill-text">' + nameHtml + t(item.desc, lang) + '</div>\n'
          + '    </li>\n';
      });
      html += '  </ul>\n';
      html += '</div>\n'; // .skills-group
    });

    html += '</div>\n'; // .skills-grid
    setHTML("skills-content", html);

    // Bind filter pill buttons
    initSkillsFilter();
  }

  function initSkillsFilter() {
    var buttons = document.querySelectorAll(".skills-filter-bar .filter-pill");
    var groups = document.querySelectorAll(".skills-grid .skills-group");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        var filter = btn.getAttribute("data-filter");

        groups.forEach(function (grp) {
          if (filter === "all" || grp.getAttribute("data-category") === filter) {
            grp.style.display = "";
            setTimeout(function () { grp.classList.add("visible"); }, 10);
          } else {
            grp.style.display = "none";
          }
        });
      });
    });
  }

  /* ── PROJECTS ─────────────────────────────────────────── */
  function renderProjects(data, lang) {
    var isVi = lang === "vi";
    var html = '<div class="section-title-wrap mb-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Dự án tiêu biểu" : "Featured Projects") + '</h3>\n'
      + '  <p class="section-subtitle">' + (isVi ? "Hệ thống Computer Vision, Edge AI và LLM đã triển khai thực tế" : "Computer Vision, Edge AI and LLM systems built for real use") + '</p>\n'
      + '</div>\n'
      + '<div class="projects-grid">\n';

    data.projects.forEach(function (proj) {
      var linksHtml = (proj.links || []).map(function (lnk) {
        return '<a class="project-link" target="_blank" rel="noopener noreferrer" href="' + lnk.url + '">'
          + '<i class="' + lnk.icon + '"></i> ' + t(lnk.label, lang) + '</a>';
      }).join("\n            ");

      // Work projects have no public links: show a context label instead of a date
      var metaHtml = proj.context
        ? '<span class="project-context"><i class="fas fa-industry"></i> ' + t(proj.context, lang) + '</span>'
        : '<span class="project-date">' + t(proj.date, lang) + '</span>';

      var footerHtml = linksHtml
        ? '  <div class="project-links mt-auto">\n            ' + linksHtml + '\n          </div>\n'
        : '  <div class="project-links mt-auto"><span class="project-private">'
          + '<i class="fas fa-lock"></i> ' + (isVi ? "Dự án nội bộ, không công khai mã nguồn" : "Internal project, source not public")
          + '</span></div>\n';

      html +=
        '<article class="project-card card-glass fade-in-up' + (proj.featured ? ' project-featured' : '') + '">\n' +
        '  <div class="project-card-header">\n' +
        '    <div>\n' +
        '      <h4 class="project-title">' + t(proj.title, lang) + '</h4>\n' +
        '      <div class="project-chips mt-1">' + techChips(proj.tech) + '</div>\n' +
        '    </div>\n' +
        '    ' + metaHtml + '\n' +
        '  </div>\n' +
        '  <p class="project-desc">' + t(proj.desc, lang) + '</p>\n' +
        footerHtml +
        '</article>\n';
    });

    html += '</div>\n'; // .projects-grid
    setHTML("projects-content", html);
  }

  /* ── EXPERIENCE ───────────────────────────────────────── */
  function renderExperience(data, lang) {
    var isVi = lang === "vi";
    var evalStyle = 'font-size:.75rem;font-style:italic;color:var(--accent);font-weight:600;margin-left:6px;';

    var html = '<div class="section-title-wrap mb-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Kinh nghiệm làm việc" : "Work Experience") + '</h3>\n'
      + '  <p class="section-subtitle">' + (isVi ? "Hành trình phát triển sự nghiệp trong lĩnh vực AI & Tự động hóa" : "Professional experience in AI engineering and industrial systems") + '</p>\n'
      + '</div>\n'
      + '<div class="experience-timeline">\n';

    data.experience.forEach(function (exp) {
      var evalHtml = exp.evalUrl
        ? ' &nbsp;·&nbsp; <a target="_blank" rel="noopener noreferrer" href="' + exp.evalUrl + '" style="' + evalStyle + '">'
          + '<i class="fas fa-certificate mr-1"></i>' + t(exp.evalLabel, lang) + '</a>'
        : '';

      // Sub-items list (bullet points + optional video link)
      var itemsHtml = '';
      if (exp.items && exp.items.length > 0) {
        itemsHtml += '<ul class="exp-items">\n';
        exp.items.forEach(function (item) {
          var videoBtn = item.videoUrl
            ? ' <a class="exp-video-link" target="_blank" rel="noopener noreferrer" href="' + item.videoUrl + '">'
              + '<i class="fab fa-youtube"></i> ' + (isVi ? 'Xem demo' : 'Watch demo') + '</a>'
            : '';
          itemsHtml += '  <li><span class="exp-item-dot"></span><span class="exp-item-text">'
            + t(item.text, lang) + videoBtn + '</span></li>\n';
        });
        itemsHtml += '</ul>\n';
      }

      html +=
        '  <div class="exp-item fade-in-up">\n' +
        '    <div class="exp-dot"></div>\n' +
        '    <div class="exp-card card-glass">\n' +
        '      <div class="exp-card-header">\n' +
        '        <div>\n' +
        '          <div class="exp-company">' + t(exp.company, lang)
            + ' <a class="company-link" target="_blank" rel="noopener noreferrer" href="' + exp.infoUrl + '"><i class="fas fa-external-link-alt"></i></a></div>\n' +
        '          <div class="exp-position">' + t(exp.position, lang) + evalHtml + '</div>\n' +
        '        </div>\n' +
        '        <span class="exp-date">' + t(exp.date, lang) + '</span>\n' +
        '      </div>\n' +
        '      <p class="exp-desc">' + t(exp.desc, lang) + '</p>\n' +
        itemsHtml +
        (exp.tech ? '      <div class="project-chips exp-tech">' + techChips(exp.tech) + '</div>\n' : '') +
        '    </div>\n' +
        '  </div>\n';
    });

    html += '</div>\n';
    setHTML("experience-content", html);
  }

  /* ── EDUCATION & CERTIFICATIONS ───────────────────────── */
  function renderEducation(data, lang) {
    var isVi = lang === "vi";
    var html = '<div class="section-title-wrap mb-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Học vấn & Đào tạo" : "Education") + '</h3>\n'
      + '</div>\n'
      + '<div class="edu-grid mb-5">\n';

    data.education.forEach(function (edu) {
      html +=
        '<div class="edu-card card-glass fade-in-up">\n' +
        '  <div class="edu-icon-wrap"><i class="' + edu.icon + '"></i></div>\n' +
        '  <div class="edu-info">\n' +
        '    <div class="edu-school">' + t(edu.school, lang) + '</div>\n' +
        '    <div class="edu-major">' + t(edu.major, lang) + '</div>\n' +
        '  </div>\n' +
        '  <span class="edu-date">' + t(edu.date, lang) + '</span>\n' +
        '</div>\n';
    });

    html += '</div>\n'; // .edu-grid

    // Competitions
    html += '<div class="section-title-wrap mb-3 mt-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Thành tích & Cuộc thi" : "Competitions & Honors") + '</h3>\n'
      + '</div>\n';

    data.competitions.forEach(function (comp) {
      html +=
        '<div class="competition-card card-glass fade-in-up mb-4">\n' +
        '  <div class="comp-badge"><i class="fas fa-trophy"></i></div>\n' +
        '  <div class="comp-info">\n' +
        '    <div class="competition-title">' + comp.title + '</div>\n' +
        '    <div class="competition-desc">' + t(comp.desc, lang)
          + ' &nbsp;·&nbsp; <a target="_blank" rel="noopener noreferrer" href="' + comp.certUrl + '" class="cert-verify-link">'
          + t(comp.certLabel, lang) + '</a></div>\n' +
        '  </div>\n' +
        '  <span class="competition-date">' + comp.date + '</span>\n' +
        '</div>\n';
    });

    // Certifications
    html += '<div class="section-title-wrap mb-3 mt-4">\n'
      + '  <h3 class="mb-0">' + (isVi ? "Chứng chỉ chuyên ngành" : "Certifications") + '</h3>\n'
      + '</div>\n'
      + '<div class="cert-container card-glass p-3 p-md-4 fade-in-up"><ul class="cert-list">\n';

    var toggleIdx = 0;
    data.certifications.forEach(function (cert) {
      if (cert.children) {
        var idx = toggleIdx++;
        html +=
          '<li><button type="button" class="toggle-button toggle-arrow" aria-expanded="false" onclick="toggleItem(' + idx + ')">'
          + '<i class="fas fa-folder-open mr-2" style="color:var(--accent);"></i>'
          + t(cert.label, lang) + '</button>\n' +
          '  <ul class="toggle-list toggle-item">\n';
        cert.children.forEach(function (child) {
          html += '    <li><a target="_blank" rel="noopener noreferrer" href="' + child.url + '"><i class="fas fa-award mr-2"></i>' + t(child.label, lang) + '</a></li>\n';
        });
        html += '  </ul>\n</li>\n';
      } else {
        html += '<li><a target="_blank" rel="noopener noreferrer" href="' + cert.url + '"><i class="fas fa-award mr-2"></i>' + t(cert.label, lang) + '</a></li>\n';
      }
    });

    html += '</ul></div>\n';
    setHTML("education-content", html);
  }

  /* ── DARK MODE ────────────────────────────────────────── */
  function initDarkMode(lang) {
    // Inject toggle button into sidebar (before lang-switcher)
    var langSwitcher = document.querySelector(".lang-switcher");
    if (langSwitcher && !document.querySelector(".dark-mode-toggle")) {
      var btn = document.createElement("button");
      btn.className = "dark-mode-toggle";
      btn.setAttribute("id", "darkModeToggle");
      btn.setAttribute("aria-label", "Toggle dark mode");
      langSwitcher.parentNode.insertBefore(btn, langSwitcher);
    }

    // Apply saved preference immediately (default = dark)
    var saved = localStorage.getItem("resumeTheme");
    if (saved !== "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    updateDarkModeButton(lang);

    // Toggle handler
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dark-mode-toggle")) return;
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("resumeTheme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("resumeTheme", "dark");
      }
      updateDarkModeButton(lang);
    });
  }

  function updateDarkModeButton(lang) {
    var btn = document.getElementById("darkModeToggle");
    if (!btn) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    var isVi   = lang === "vi";
    btn.innerHTML = isDark
      ? '<span class="dm-icon"><i class="fas fa-sun"></i></span>' + (isVi ? "Chế độ Sáng" : "Light Mode")
      : '<span class="dm-icon"><i class="fas fa-moon"></i></span>' + (isVi ? "Chế độ Tối" : "Dark Mode");
  }

  /* ── FLOATING BACK TO TOP ────────────────────────────── */
  function initBackToTop() {
    if (document.getElementById("backToTopBtn")) return;
    var btt = document.createElement("button");
    btt.id = "backToTopBtn";
    btt.className = "back-to-top-btn";
    btt.setAttribute("aria-label", "Back to top");
    btt.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btt);

    // In slide mode each section scrolls on its own, so track whichever element scrolled
    function scroller() {
      return document.querySelector(".deck > section.is-active") || window;
    }
    function scrollTopOf(el) {
      return el === window ? window.scrollY : el.scrollTop;
    }
    function refresh() {
      btt.classList.toggle("visible", scrollTopOf(scroller()) > 400);
    }

    document.addEventListener("scroll", refresh, true); // capture: section scrolls don't bubble
    document.addEventListener("deck:change", refresh);

    btt.addEventListener("click", function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scroller().scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  /* ════════════════════════════════════════════════════════
     MAIN ENTRY POINT
  ════════════════════════════════════════════════════════ */

  window.renderResume = function (lang) {
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
    initDarkMode(lang);
    initBackToTop();
    if (typeof window.initDeck === "function") window.initDeck(lang);

    // Font Awesome icons are decorative; hide them from screen readers
    document.querySelectorAll("i.fas, i.fab, i.far").forEach(function (i) {
      i.setAttribute("aria-hidden", "true");
    });

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
    }, 50);
  };

})();
