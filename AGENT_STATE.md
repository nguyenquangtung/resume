# AGENT_STATE.md — Trạng Thái Luân Chuyển Đa Agent

> **Single Source of Truth (SSOT)**: Mọi AI Agent (Antigravity, Cursor, Claude, Copilot) trước khi thực hiện công việc bắt buộc đọc file này để nắm tiến độ và cập nhật trạng thái sau khi hoàn thành.

---

## 1. Trạng Thái Hiện Tại (Current Status)

- **Dự án**: Personal Online Resume / Portfolio (`quangtung.io.vn`)
- **Nhánh Git hiện tại**: `main`
- **Tiến độ tổng thể**: Đã thiết lập chuẩn đa Agent (`setup-project`), tạo đồ thị tri thức Graphify, thiết lập script Git Push Workflow và tài liệu kiến trúc bàn giao.

---

## 2. Việc Vừa Hoàn Thành (Completed Tasks)

- [x] **Graphify Check & Init**: Khởi tạo đồ thị tri thức mã nguồn ban đầu (`graphify . --code-only`), trích xuất 880 nodes, 1727 edges, 78 communities.
- [x] **Setup Scripts**:
  - `scripts/git-push.ps1`: Tự động hóa chuỗi Push Git -> Update Graphify -> Nhắc cập nhật Doc & State -> Rà soát dependencies.
  - `scripts/activate.ps1`: Tự động kích hoạt skill từ Vault vào `.agent/skills`.
- [x] **Kích hoạt & Đồng bộ Skills Nội Bộ (Local Project Skills)**:
  - Tích hợp 6 skill chuyên biệt vào `.agent/skills` (cho Antigravity) và liên kết junction sang `.claude/skills` (cho Claude Code).
  - Khởi tạo `CLAUDE.md` hướng dẫn chi tiết cho Claude Code gọi các skill cục bộ, quy tắc bảo mật và quy trình Git push.
- [x] **Chuẩn hóa tài liệu kiến trúc & agent**:
  - Khởi tạo `ARCHITECTURE.md` (kiến trúc phân tầng dữ liệu, template engine, pipeline Gulp & deploy GitHub Pages).
  - Khởi tạo `AGENTS.md` (quy chuẩn hành vi cho toàn bộ agent trong repo).

---

## 3. Việc Cần Làm Tiếp Theo (Upcoming Tasks)

- [ ] Bổ sung số liệu đo được cho các mục i-Soft trong `js/data.js` (độ chính xác OCR, FPS trên Jetson, số site/camera...).
- [ ] Làm rõ chatbot OEE dùng RAG hay text-to-SQL để ghi chính xác vào CV.
- [ ] Cập nhật file PDF CV trên Google Drive cho khớp nội dung web mới.
- [ ] Kiểm tra trên điện thoại thật (đã kiểm bằng headless Chrome 390px & 1440px), đặc biệt chế độ slide trên iOS Safari.

---

## 4. Nhật Ký Thay Đổi (Changelog)

| Thời gian (UTC+7) | Agent / Người thực hiện | Tóm tắt thay đổi |
| :--- | :--- | :--- |
| 2026-11-04 09:11 | Antigravity Agent | Thiết lập cấu trúc dự án `/setup-project`: sinh đồ thị Graphify, tạo `scripts/git-push.ps1`, `scripts/activate.ps1`, `ARCHITECTURE.md`, `AGENTS.md`, `AGENT_STATE.md`. |
| 2026-11-04 09:16 | Antigravity Agent | Thiết lập local skills cho Claude Code (`.claude/skills` junction) & Antigravity (`.agent/skills`), tạo `CLAUDE.md` nội bộ dự án. |
| 2026-11-04 09:50 | Claude Code | Định vị lại CV thành "AI Engineer · Computer Vision & Edge AI": viết lại bio, kinh nghiệm i-Soft (Jetson, OCR biển số, chatbot OEE local LLM), thêm nhóm skill Edge AI & LLM, 2 project thực tế, bỏ project web The Band. UI: sửa icon `fa-sparkles` không tồn tại, thêm OG/JSON-LD/canonical, chặn nháy theme, skip link, focus-visible, reduced-motion, ARIA cho filter/toggle, `rel=noopener`, tech chips ở kinh nghiệm, header project xếp dọc trên mobile. Chưa commit. |
| 2026-11-10 | Claude Code | Chế độ slide: thêm `js/deck.js` + CSS mục 15. Mỗi section là 1 panel cuộn dọc riêng; bấm cạnh phải / thanh dưới (mobile) / sidebar / phím ←→ để section kế trượt từ phải sang trái; hash URL + Back hoạt động; nút "lên đầu" theo panel; giữ nguyên layout cũ khi không có JS và khi in. Đã test bằng Chrome DevTools Protocol (1440px, 390px, dark/light). Chưa commit. |
| 2026-11-10 | Claude Code | Slide mode: thêm vuốt ngang trên điện thoại (kéo theo ngón tay, thả >25% hoặc vuốt nhanh thì chuyển, bỏ qua vùng 24px sát mép để không đụng cử chỉ Back). Nút cạnh trái/phải đổi thành nút tròn chỉ có mũi tên, bỏ viền focus dài của Bootstrap. Lưu ý: `npm start`/Gulp sẽ biên dịch `scss/` cũ và GHI ĐÈ `css/resume.css` (CSS hiện được sửa tay), đừng chạy. Chưa commit. |
| 2026-11-10 | Claude Code | Sửa hiệu ứng slide: easing cũ dồn về đầu (section mới tới trước, lớp mờ chạy sau). Đổi sang `cubic-bezier(0.5, 0, 0.2, 1)`, 480ms, dim 0.5, kết thúc theo `transitionend` thay cho timer cố định. Chưa commit. |
| 2026-11-10 | Claude Code | Sửa lỗi bóng mờ khi chuyển slide: `backdrop-filter` của `.card-glass` bị Chrome vẽ sai trong panel đang transform (section cũ lộ xuyên qua). Tắt blur trong `.deck` (nền panel đặc nên không đổi giao diện). Nới fallback timer lên DURATION+450ms. Chưa commit. |
| 2026-11-10 | Claude Code | Sửa tận gốc lỗi section cũ đè lên section mới khi bấm mũi tên trái (chỉ xảy ra khi Chrome dùng GPU): panel thêm `isolation: isolate` + `contain: paint`, z-index rõ ràng (parked 0, active 1, leaving 2, entering 3), bỏ `filter` ở panel rời đi. Thêm `?v=` vào link CSS/JS để tránh cache cũ; nhớ đổi số này mỗi khi sửa CSS/JS. Test lại bằng Chrome bật GPU. Chưa commit. |
| 2026-11-10 | Claude Code | Commit & push toàn bộ thay đổi trên lên `main` qua `scripts/git-push.ps1` (gồm cả file agent, skills, scripts, `graphify-out/` theo yêu cầu người dùng). |
