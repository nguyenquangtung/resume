# AGENTS.md — Quy Định Dành Cho Các AI Agent

> Áp dụng cho toàn bộ AI Agent làm việc trong kho lưu trữ này (Antigravity, Cursor, Claude, Codex, GitHub Copilot).

---

## 1. QUY TẮC AN TOÀN BẢO MẬT & PRODUCTION (BẮT BUỘC)

> [!CAUTION]
> 1. **Tuyệt đối không tự ý SSH / remote vào server hoặc môi trường production** để sửa file, đổi cấu hình, deploy hoặc can thiệp dịch vụ khi chưa có chỉ thị từ người dùng.
> 2. **Luôn hỏi lại trước khi tương tác**: Mọi thao tác hạ tầng bên ngoài máy tính này đều bắt buộc phải dừng lại, giải thích rõ câu lệnh và chờ người dùng xác nhận.

---

## 2. QUY TRÌNH LÀM VIỆC ĐA AGENT (MULTI-AGENT WORKFLOW)

### Trước khi bắt đầu công việc:
1. Luôn đọc file `AGENT_STATE.md` để nắm trạng thái hiện tại của dự án, các đầu việc vừa hoàn tất và việc còn tồn đọng.
2. Tra cứu kiến trúc hệ thống và luồng dữ liệu tại `ARCHITECTURE.md`.
3. Kiểm tra các thay đổi đang dở dang bằng `git status`. Không ghi đè code khi người dùng đang chỉnh sửa.

### Sau khi hoàn thành công việc:
1. Cập nhật `AGENT_STATE.md`: Đánh dấu các task đã hoàn thành và thêm một dòng vào mục **Changelog**.
2. Nếu có thay đổi cấu trúc luồng dữ liệu hoặc kiến trúc, cập nhật tương ứng vào `ARCHITECTURE.md`.
3. Khi commit và push mã nguồn, ưu tiên sử dụng script:
   ```powershell
   .\scripts\git-push.ps1 -Message "Mô tả việc đã làm" -Branch "main"
   ```
4. Kiểm tra dependencies trong `package.json` nếu có cài thêm thư viện mới.

---

## 3. CẤU TRÚC KỸ THUẬT CỐT LÕI

- **Dữ liệu**: Nằm toàn bộ ở `js/data.js` (`RESUME_DATA`).
- **Engine render**: Nằm ở `js/render.js`.
- **Styling**: Sửa trong `scss/`, biên dịch qua Gulp ra `css/`.
- **Deploy**: GitHub Pages nhận mã nguồn tĩnh từ nhánh `main`.

