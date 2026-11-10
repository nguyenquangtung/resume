# Claude Code Instructions (CLAUDE.md)

Chào mừng Claude Code đến với repository `t:\Personal\resume` (Portfolio cá nhân `https://quangtung.io.vn`). Dự án này được đồng vận hành bởi nhiều AI Agent (**Antigravity, Claude Code, Cursor, Copilot**).

---

## 1. Việc Đầu Tiên Phải Làm (First Action)

Trước khi thực hiện bất kỳ lệnh hay sửa code nào, **bắt buộc đọc file `AGENT_STATE.md`** ở thư mục gốc:
- Nắm rõ tiến độ hiện tại và các việc agent trước đã hoàn thành.
- Kiểm tra các task cần làm trong mục `3. Việc Cần Làm Tiếp Theo (Upcoming Tasks)`.
- Tra cứu cấu trúc dữ liệu và luồng render trong `ARCHITECTURE.md`.

---

## 2. Quy Tắc Bảo Mật Bắt Buộc (Strict Security Rule)

> [!CAUTION]
> 1. **Tuyệt đối KHÔNG tự ý SSH hoặc remote vào bất kỳ server / môi trường production nào** để sửa file, đổi cấu hình, deploy hoặc dừng/khởi động dịch vụ.
> 2. **Luôn luôn hỏi lại**: Bất kỳ lệnh nào có nguy cơ tương tác với remote server/production đều phải dừng lại, báo rõ lệnh định chạy, mục đích, rủi ro và chờ người dùng xác nhận bằng lời.

---

## 3. Kỹ Năng Nội Bộ Khả Dụng (Local Project Skills)

Dự án đã tích hợp sẵn bộ kỹ năng cục bộ tại `.claude/skills/` (đồng bộ trực tiếp với `.agent/skills/`):

- **`anti-ai-writing`** (`.claude/skills/anti-ai-writing/SKILL.md`): Viết nội dung CV, mô tả dự án và commit message tự nhiên, sắc bén, loại bỏ văn phong AI sáo rỗng.
- **`frontend-developer`** (`.claude/skills/frontend-developer/SKILL.md`): Tối ưu cấu trúc HTML5 ngữ nghĩa, SCSS/CSS, responsive layout cho mobile/desktop.
- **`javascript-pro`** (`.claude/skills/javascript-pro/SKILL.md`): Viết Vanilla JS sạch, tối ưu hóa template engine (`js/render.js`) và cấu trúc dữ liệu (`js/data.js`).
- **`ui-ux-designer`** (`.claude/skills/ui-ux-designer/SKILL.md`): Thiết kế giao diện, visual hierarchy, màu sắc, font chữ và trải nghiệm người dùng.
- **`seo-meta-optimizer`** (`.claude/skills/seo-meta-optimizer/SKILL.md`): Tối ưu hóa thẻ meta, OpenGraph, title cho domain `quangtung.io.vn`.
- **`multi-agent-sync`** (`.claude/skills/multi-agent-sync/SKILL.md`): Chuẩn hóa luồng bàn giao đa agent.

Khi thực hiện task liên quan, hãy tham khảo các file `SKILL.md` tương ứng để tuân thủ quy chuẩn.

---

## 4. Quy Trình Lưu & Đẩy Code (Git Push Workflow)

Khi hoàn thành công việc và cần đẩy code:

```
[1. Cập nhật AGENT_STATE.md] ──> [2. Git Commit & Push] ──> [3. Graphify Update] ──> [4. Cập nhật ARCHITECTURE.md] ──> [5. Rà soát Dependencies]
```

1. Sử dụng script tự động hóa được tích hợp sẵn:
   ```powershell
   .\scripts\git-push.ps1 -Message "Mô tả ngắn gọn việc vừa làm" -Branch "main"
   ```
2. Script sẽ tự động:
   - Commit & push lên nhánh `main` (kích hoạt GitHub Pages).
   - Tự động chạy `graphify update .` cập nhật sơ đồ tri thức mã nguồn.
3. Cập nhật lại `AGENT_STATE.md` (đánh dấu hoàn thành và thêm 1 dòng vào **Changelog**).
4. Nếu có thay đổi luồng kỹ thuật hoặc kiến trúc, cập nhật `ARCHITECTURE.md`.

---

## 5. Cấu Trúc Kỹ Thuật Dự Án

- **Dữ liệu CV**: Toàn bộ nội dung tập trung tại `js/data.js` (`window.RESUME_DATA`).
- **Engine hiển thị**: `js/render.js` thực hiện hydration vào các section `#about`, `#experience`, `#skills`, `#projects`...
- **Giao diện đa ngôn ngữ**: `index.html` (EN) và `index_vnm.html` (VI).
- **Styling**: Chỉnh sửa trong `scss/`, Gulp biên dịch ra `css/resume.css` và `css/resume.min.css`.

