# Graph Report - resume  (2026-11-10)

## Corpus Check
- 51 files · ~1,006,311 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 93 file(s) not represented in the graph (top: .scss 25, .css 22, .less 18)

## Summary
- 1024 nodes · 1878 edges · 86 communities (62 shown, 24 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 160 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aedd6215`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- all.min.js
- fontawesome.min.js
- jquery.slim.min.js
- fontawesome-free/package.json
- bootstrap.bundle.min.js
- jquery.js
- jquery.slim.js
- bootstrap.bundle.js
- all.js
- fontawesome.js
- bootstrap.js
- gulpfile.js
- package.json
- resolve
- resolve
- jquery.min.js
- devDependencies
- _objectSpread
- _objectSpread
- render.js
- matcherFromTokens
- matcherFromTokens
- getReferenceOffsets
- parseMeta
- bootstrap
- parseMeta
- bootstrap
- parseOffset
- getOffsetParent
- getBoundaries
- Capabilities
- replaceForPosition
- replaceForPosition
- domManip
- domManip
- Animation
- Capabilities
- flip
- attachToScrollParents
- deck.js
- 5. Quy Trình Setup Toàn Diện & Tối Ưu Token Cho Mọi Dự Án
- ARCHITECTURE.md — Tài Liệu Kiến Trúc & Bàn Giao Hệ Thống
- searchPseudoElements
- brands.js
- searchPseudoElements
- regular.js
- solid.js
- 2. Nhận Diện & Loại Bỏ 4 Nhóm "Vết Tích AI" (WP:AISIGNS)
- seo-meta-optimizer/SKILL.md
- bugs
- repository
- done
- getWidthOrHeight
- buildParams
- resolve
- AGENTS.md — Quy Định Dành Cho Các AI Agent
- getWidthOrHeight
- Claude Code Instructions (CLAUDE.md)
- resolve
- gulp-autoprefixer
- gulp-plumber
- gulp-sass
- merge-stream
- e
- V
- V
- createCache
- inspect
- javascript-pro/SKILL.md
- createCache
- AGENT_STATE.md — Trạng Thái Luân Chuyển Đa Agent
- find
- README.md
- finalPropName
- on
- on

## God Nodes (most connected - your core abstractions)
1. `Capabilities` - 14 edges
2. `_objectSpread()` - 13 edges
3. `_objectSpread()` - 13 edges
4. `getBoundaries()` - 12 edges
5. `Gt()` - 11 edges
6. `resolve()` - 11 edges
7. `replaceForPosition()` - 11 edges
8. `vl()` - 11 edges
9. `sl()` - 11 edges
10. `resolve()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `R()` --indirect_call--> `M()`  [INFERRED]
  vendor/jquery/jquery.min.js → vendor/fontawesome-free/js/all.min.js
- `xt()` --indirect_call--> `M()`  [INFERRED]
  vendor/jquery/jquery.min.js → vendor/fontawesome-free/js/all.min.js
- `sl()` --indirect_call--> `H()`  [INFERRED]
  vendor/fontawesome-free/js/all.min.js → vendor/jquery/jquery.slim.min.js
- `r()` --indirect_call--> `it()`  [INFERRED]
  vendor/bootstrap/js/bootstrap.bundle.min.js → vendor/fontawesome-free/js/fontawesome.min.js
- `a()` --indirect_call--> `wt()`  [INFERRED]
  vendor/bootstrap/js/bootstrap.bundle.min.js → vendor/fontawesome-free/js/fontawesome.min.js

## Import Cycles
- None detected.

## Communities (86 total, 24 thin omitted)

### Community 0 - "all.min.js"
Cohesion: 0.10
Nodes (45): ac(), bc(), c(), Cc(), cl(), dc(), dl(), ec() (+37 more)

### Community 1 - "fontawesome.min.js"
Cohesion: 0.11
Nodes (43): ae(), at(), B(), be(), bt(), ce(), ct(), dt() (+35 more)

### Community 2 - "jquery.slim.min.js"
Cohesion: 0.07
Nodes (35): d(), C(), I(), me(), a(), a(), ae(), t() (+27 more)

### Community 3 - "fontawesome-free/package.json"
Cohesion: 0.04
Nodes (44): author, email, name, url, bugs, url, bundleDependencies, contributors (+36 more)

### Community 4 - "bootstrap.bundle.min.js"
Cohesion: 0.11
Nodes (34): a(), ae(), bn(), Bt(), ce(), ee(), fe(), Ft() (+26 more)

### Community 5 - "jquery.js"
Cohesion: 0.05
Nodes (6): computeStyleTests(), dataAttr(), finalPropName(), getData(), roundPixelMeasures(), vendorPropName()

### Community 6 - "jquery.slim.js"
Cohesion: 0.06
Nodes (8): camelCase(), computeStyleTests(), dataAttr(), fcamelCase(), getData(), getDefaultDisplay(), roundPixelMeasures(), showHide()

### Community 7 - "bootstrap.bundle.js"
Cohesion: 0.07
Nodes (8): allowedAttribute(), _createClass(), _defineProperties(), _defineProperty(), getSpecialTransitionEndEvent(), _objectSpread(), sanitizeHtml(), setTransitionEndSupport()

### Community 8 - "all.js"
Cohesion: 0.12
Nodes (18): _arrayWithHoles(), _arrayWithoutHoles(), _classCallCheck(), _createClass(), css(), _defineProperties(), ensureCss(), findIconDefinition() (+10 more)

### Community 9 - "fontawesome.js"
Cohesion: 0.12
Nodes (18): _arrayWithHoles(), _arrayWithoutHoles(), _classCallCheck(), _createClass(), css(), _defineProperties(), ensureCss(), findIconDefinition() (+10 more)

### Community 10 - "bootstrap.js"
Cohesion: 0.10
Nodes (8): allowedAttribute(), _createClass(), _defineProperties(), _defineProperty(), getSpecialTransitionEndEvent(), _objectSpread(), sanitizeHtml(), setTransitionEndSupport()

### Community 11 - "gulpfile.js"
Cohesion: 0.14
Nodes (20): autoprefixer, banner, browsersync, browserSyncReload(), build, clean(), cleanCSS, css() (+12 more)

### Community 12 - "package.json"
Cohesion: 0.11
Nodes (20): author, contributors, dependencies, bootstrap@4.3.1, @fortawesome/fontawesome-free@5.7.2, jquery@3.3.1, jquery.easing@^1.4.1, description (+12 more)

### Community 13 - "resolve"
Cohesion: 0.16
Nodes (19): asyncCall(), asyncFlush(), findIcon(), fulfill(), generateSvgReplacementMutation(), handleThenable(), invokeCallback(), invokeResolver() (+11 more)

### Community 14 - "resolve"
Cohesion: 0.16
Nodes (19): asyncCall(), asyncFlush(), findIcon(), fulfill(), generateSvgReplacementMutation(), handleThenable(), invokeCallback(), invokeResolver() (+11 more)

### Community 15 - "jquery.min.js"
Cohesion: 0.05
Nodes (47): i(), o(), s(), Se(), a(), ae(), be(), ce() (+39 more)

### Community 16 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, browser-sync@2.26.3, del@^3.0.0, gulp@4.0.0, gulp-clean-css@4.0.0, gulp-header@2.0.7, gulp-rename@1.4.0, gulp-uglify@3.0.1 (+7 more)

### Community 17 - "_objectSpread"
Cohesion: 0.23
Nodes (15): asIcon(), asSymbol(), defineIcons(), _defineProperty(), generateLayersText(), joinStyles(), makeIconMasking(), makeIconStandard() (+7 more)

### Community 18 - "_objectSpread"
Cohesion: 0.23
Nodes (15): asIcon(), asSymbol(), defineIcons(), _defineProperty(), generateLayersText(), joinStyles(), makeIconMasking(), makeIconStandard() (+7 more)

### Community 19 - "render.js"
Cohesion: 0.23
Nodes (17): badgeUrl(), initBackToTop(), refresh(), scroller(), scrollTopOf(), initDarkMode(), initSkillsFilter(), renderAbout() (+9 more)

### Community 20 - "matcherFromTokens"
Cohesion: 0.20
Nodes (12): addCombinator(), condense(), createPositionalPseudo(), elementMatcher(), markFunction(), matcherFromGroupMatchers(), matcherFromTokens(), multipleContexts() (+4 more)

### Community 21 - "matcherFromTokens"
Cohesion: 0.20
Nodes (12): addCombinator(), condense(), createPositionalPseudo(), elementMatcher(), markFunction(), matcherFromGroupMatchers(), matcherFromTokens(), multipleContexts() (+4 more)

### Community 22 - "getReferenceOffsets"
Cohesion: 0.24
Nodes (9): applyStyleOnLoad(), computeAutoPlacement(), findIndex(), getArea(), getReferenceOffsets(), isFunction(), Popper(), runModifiers() (+1 more)

### Community 23 - "parseMeta"
Cohesion: 0.18
Nodes (11): attributesParser(), byOldName(), getCanonicalIcon(), getIconName(), isReserved(), maskParser(), nextUniqueId(), parseMeta() (+3 more)

### Community 24 - "bootstrap"
Cohesion: 0.25
Nodes (11): bootstrap(), classArray(), domready(), generateMutation(), getMutator(), isWatched(), observe(), onNode() (+3 more)

### Community 25 - "parseMeta"
Cohesion: 0.18
Nodes (11): attributesParser(), byOldName(), getCanonicalIcon(), getIconName(), isReserved(), maskParser(), nextUniqueId(), parseMeta() (+3 more)

### Community 26 - "bootstrap"
Cohesion: 0.25
Nodes (11): bootstrap(), classArray(), domready(), generateMutation(), getMutator(), isWatched(), observe(), onNode() (+3 more)

### Community 27 - "parseOffset"
Cohesion: 0.33
Nodes (7): applyStyle(), isNumeric(), offset(), parseOffset(), setAttributes(), setStyles(), toValue()

### Community 28 - "getOffsetParent"
Cohesion: 0.24
Nodes (10): computeStyle(), destroy(), findCommonOffsetParent(), getOffsetParent(), getRoot(), getRoundedOffsets(), getSupportedPropertyName(), isModifierEnabled() (+2 more)

### Community 29 - "getBoundaries"
Cohesion: 0.27
Nodes (16): getBordersSize(), getBoundaries(), getBoundingClientRect(), getClientRect(), getFixedPositionOffsetParent(), getOffsetRectRelativeToArbitraryNode(), getParentNode(), getScroll() (+8 more)

### Community 30 - "Capabilities"
Cohesion: 0.09
Nodes (22): Accessibility & Inclusive Design, Advanced Design Techniques, Behavioral Traits, Capabilities, Collaboration & Communication, Cross-Platform Design Excellence, Design Research & Validation, Design System Implementation (+14 more)

### Community 31 - "replaceForPosition"
Cohesion: 0.24
Nodes (10): apiObject(), blankMeta(), byLigature(), byUnicode(), classParser(), htmlEscape(), joinAttributes(), replaceForPosition() (+2 more)

### Community 32 - "replaceForPosition"
Cohesion: 0.24
Nodes (10): apiObject(), blankMeta(), byLigature(), byUnicode(), classParser(), htmlEscape(), joinAttributes(), replaceForPosition() (+2 more)

### Community 33 - "domManip"
Cohesion: 0.24
Nodes (10): buildFragment(), disableScript(), DOMEval(), domManip(), getAll(), manipulationTarget(), nodeName(), remove() (+2 more)

### Community 34 - "domManip"
Cohesion: 0.18
Nodes (13): buildFragment(), buildParams(), disableScript(), DOMEval(), domManip(), getAll(), isArrayLike(), manipulationTarget() (+5 more)

### Community 35 - "Animation"
Cohesion: 0.22
Nodes (9): Animation(), camelCase(), createFxNow(), createTween(), defaultPrefilter(), fcamelCase(), getDefaultDisplay(), propFilter() (+1 more)

### Community 36 - "Capabilities"
Cohesion: 0.10
Nodes (19): Accessibility & Inclusive Design, Behavioral Traits, Capabilities, Core React Expertise, Developer Experience & Tooling, Do not use this skill when, Example Interactions, Instructions (+11 more)

### Community 37 - "flip"
Cohesion: 0.40
Nodes (6): clockwise(), flip(), getOppositePlacement(), getOppositeVariation(), getPopperOffsets(), inner()

### Community 38 - "attachToScrollParents"
Cohesion: 0.33
Nodes (6): attachToScrollParents(), disableEventListeners(), enableEventListeners(), getWindow(), removeEventListeners(), setupEventListeners()

### Community 39 - "deck.js"
Cohesion: 0.19
Nodes (16): buildControls(), clearInline(), finish(), go(), initSwipe(), endDrag(), startDrag(), label() (+8 more)

### Community 40 - "5. Quy Trình Setup Toàn Diện & Tối Ưu Token Cho Mọi Dự Án"
Cohesion: 0.17
Nodes (11): 1. Nguyên Tắc Cốt Lõi (Single Source of Truth), 2. Quy Trình 5 Bước Bắt Buộc Khi Có Cập Nhật (The 5-Step Workflow), 3. Cấu Trúc Chuẩn Của `AGENT_STATE.md`, 4. Tự Động Hóa Qua Script `git-push.ps1`, 5. Quy Trình Setup Toàn Diện & Tối Ưu Token Cho Mọi Dự Án, Bước 1: Khởi Tạo File Trạng Thái & Tài Liệu, Bước 2: Tự Động Đăng Ký Hooks & Rules Cho 4 Nền Tảng Agent, Bước 3: Lập Chỉ Mục Mã Nguồn & Tạo Báo Cáo Rút Gọn (+3 more)

### Community 41 - "ARCHITECTURE.md — Tài Liệu Kiến Trúc & Bàn Giao Hệ Thống"
Cohesion: 0.20
Nodes (9): 1. Tổng Quan Hệ Thống (System Overview), 2. Sơ Đồ Phân Tầng & Luồng Kỹ Thuật (Technical Flow), 3. Quản Lý Mã Nguồn & Thư Viện, 4. Hướng Dẫn Phát Triển & Bảo Trì, 5. Điểm Lưu Ý Khi Bàn Giao & Mở Rộng, ARCHITECTURE.md — Tài Liệu Kiến Trúc & Bàn Giao Hệ Thống, Chạy môi trường local:, Luồng Dữ Liệu Chi Tiết (Data Flow) (+1 more)

### Community 42 - "searchPseudoElements"
Cohesion: 0.40
Nodes (5): disableObservation(), enableObservation(), processable(), replace(), searchPseudoElements()

### Community 43 - "brands.js"
Cohesion: 0.60
Nodes (3): defineIcons(), _defineProperty(), _objectSpread()

### Community 44 - "searchPseudoElements"
Cohesion: 0.40
Nodes (5): disableObservation(), enableObservation(), processable(), replace(), searchPseudoElements()

### Community 45 - "regular.js"
Cohesion: 0.60
Nodes (3): defineIcons(), _defineProperty(), _objectSpread()

### Community 46 - "solid.js"
Cohesion: 0.60
Nodes (3): defineIcons(), _defineProperty(), _objectSpread()

### Community 47 - "2. Nhận Diện & Loại Bỏ 4 Nhóm "Vết Tích AI" (WP:AISIGNS)"
Cohesion: 0.22
Nodes (8): 1. Nguyên Tắc Cốt Lõi (Core Principles), 2. Nhận Diện & Loại Bỏ 4 Nhóm "Vết Tích AI" (WP:AISIGNS), 3. Checklist Tự Rà Soát Trước Khi Xuất Văn Bản, Anti-AI Writing (Chống Dấu Vết Văn Phong AI), Nhóm 1: Từ vựng & Cụm từ "đặc sản AI" (AI Vocabulary Blacklist), Nhóm 2: Cấu trúc câu sáo rỗng (Formulaic Syntax), Nhóm 3: Giọng điệu thổi phồng & Phân tích nông cạn (Tone & Depth), Nhóm 4: Lời thừa mở đầu và Tóm tắt cưỡng chế (Meta-talk & Compulsive Wrap-ups)

### Community 48 - "seo-meta-optimizer/SKILL.md"
Cohesion: 0.25
Nodes (7): Approach, Do not use this skill when, Focus Areas, Instructions, Optimization Rules, Output, Use this skill when

### Community 49 - "bugs"
Cohesion: 0.67
Nodes (3): bugs, email, url

### Community 50 - "repository"
Cohesion: 0.67
Nodes (3): repository, type, url

### Community 51 - "done"
Cohesion: 0.67
Nodes (3): ajaxConvert(), ajaxHandleResponses(), done()

### Community 52 - "getWidthOrHeight"
Cohesion: 0.67
Nodes (3): boxModelAdjustment(), curCSS(), getWidthOrHeight()

### Community 53 - "buildParams"
Cohesion: 0.67
Nodes (3): buildParams(), isArrayLike(), toType()

### Community 54 - "resolve"
Cohesion: 0.67
Nodes (3): Identity(), resolve(), Thrower()

### Community 55 - "AGENTS.md — Quy Định Dành Cho Các AI Agent"
Cohesion: 0.29
Nodes (6): 1. QUY TẮC AN TOÀN BẢO MẬT & PRODUCTION (BẮT BUỘC), 2. QUY TRÌNH LÀM VIỆC ĐA AGENT (MULTI-AGENT WORKFLOW), 3. CẤU TRÚC KỸ THUẬT CỐT LÕI, AGENTS.md — Quy Định Dành Cho Các AI Agent, Sau khi hoàn thành công việc:, Trước khi bắt đầu công việc:

### Community 56 - "getWidthOrHeight"
Cohesion: 0.67
Nodes (3): boxModelAdjustment(), curCSS(), getWidthOrHeight()

### Community 57 - "Claude Code Instructions (CLAUDE.md)"
Cohesion: 0.29
Nodes (6): 1. Việc Đầu Tiên Phải Làm (First Action), 2. Quy Tắc Bảo Mật Bắt Buộc (Strict Security Rule), 3. Kỹ Năng Nội Bộ Khả Dụng (Local Project Skills), 4. Quy Trình Lưu & Đẩy Code (Git Push Workflow), 5. Cấu Trúc Kỹ Thuật Dự Án, Claude Code Instructions (CLAUDE.md)

### Community 58 - "resolve"
Cohesion: 0.67
Nodes (3): Identity(), resolve(), Thrower()

### Community 71 - "javascript-pro/SKILL.md"
Cohesion: 0.29
Nodes (6): Approach, Do not use this skill when, Focus Areas, Instructions, Output, Use this skill when

### Community 78 - "AGENT_STATE.md — Trạng Thái Luân Chuyển Đa Agent"
Cohesion: 0.33
Nodes (5): 1. Trạng Thái Hiện Tại (Current Status), 2. Việc Vừa Hoàn Thành (Completed Tasks), 3. Việc Cần Làm Tiếp Theo (Upcoming Tasks), 4. Nhật Ký Thay Đổi (Changelog), AGENT_STATE.md — Trạng Thái Luân Chuyển Đa Agent

### Community 79 - "find"
Cohesion: 0.50
Nodes (5): arrow(), find(), getOuterSizes(), hide(), isModifierRequired()

## Knowledge Gaps
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ee()` connect `bootstrap.bundle.min.js` to `jquery.slim.min.js`, `jquery.min.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `all.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10374149659863946 - nodes in this community are weakly interconnected._
- **Why does `ne()` connect `jquery.min.js` to `bootstrap.bundle.min.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `fontawesome.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10823311748381129 - nodes in this community are weakly interconnected._
- **Why does `gt()` connect `jquery.slim.min.js` to `bootstrap.bundle.min.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `jquery.slim.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07482993197278912 - nodes in this community are weakly interconnected._
- **Should `fontawesome-free/package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._