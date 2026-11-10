# ARCHITECTURE.md — Tài Liệu Kiến Trúc & Bàn Giao Hệ Thống

> **Mục đích**: Giúp lập trình viên bảo trì, cộng tác viên hoặc đối tác mới đọc hiểu ngay kiến trúc hệ thống, luồng dữ liệu kỹ thuật và cách vận hành dự án mà không cần lần mò từng dòng code.

---

## 1. Tổng Quan Hệ Thống (System Overview)

- **Tên dự án**: Online Personal Resume / Portfolio
- **Domain xuất bản**: `https://quangtung.io.vn` (cấu hình qua `CNAME`)
- **Nền tảng triển khai**: GitHub Pages (tự động phân phối file tĩnh từ nhánh `main`)
- **Mô hình kiến trúc**: Static Client-Side Application với cơ chế Dynamic Hydration qua Vanilla JS & JSON data store.

---

## 2. Sơ Đồ Phân Tầng & Luồng Kỹ Thuật (Technical Flow)

```mermaid
flowchart TD
    subgraph Data_Layer ["Tầng Dữ Liệu"]
        D["js/data.js (window.RESUME_DATA)"]
    end

    subgraph Template_Engine ["Tầng Xử Lý & Hiển Thị (Client-Side)"]
        R["js/render.js"]
        D -->|Nạp dữ liệu| R
        R -->|Bilingual translation: t(field, lang)| H["DOM Hydration"]
        R -->|Shields.io Badges & Filters| H
    end

    subgraph Pages ["Giao Diện Người Dùng"]
        EN["index.html (English)"]
        VI["index_vnm.html (Tiếng Việt)"]
        H -->|Render content vào #about, #experience...| EN
        H -->|Render content vào #about, #experience...| VI
    end

    subgraph Build_Pipeline ["Quy Trình Build & Asset Management"]
        SCSS["scss/resume.scss"] -->|Gulp Sass + Autoprefixer| CSS["css/resume.css"]
        CSS -->|CleanCSS minification| CSSMIN["css/resume.min.css"]
        NM["node_modules (Bootstrap 4, FontAwesome 5, jQuery)"] -->|Gulp modules task| VENDOR["vendor/"]
    end

    subgraph Hosting ["Triển Khai"]
        EN & VI & CSSMIN & VENDOR & CNAME --> GHP["GitHub Pages (quangtung.io.vn)"]
    end
```

### Luồng Dữ Liệu Chi Tiết (Data Flow)

1. **Khởi tạo dữ liệu**: `js/data.js` khai báo biến toàn cục `window.RESUME_DATA`, cấu trúc hóa toàn bộ thông tin cá nhân (Profile, About, Experience, Projects, Skills, Education, Certifications) với các trường hỗ trợ song ngữ `{ en: "...", vi: "..." }`.
2. **Hydration giao diện**: Khi trang `index.html` hoặc `index_vnm.html` load xong:
   - Script xác định ngôn ngữ hiển thị (`en` hoặc `vi`).
   - `js/render.js` đọc `window.RESUME_DATA`, xử lý template strings và inject vào các placeholder element tương ứng (`#about`, `#experience`, `#projects`, `#skills`, `#education`, `#interests`, `#awards`).
   - Tự động tạo dynamic badges thông qua Shields.io URL builder.
3. **Điều hướng dạng slide** (`js/deck.js`, gọi từ cuối `renderResume`): `<main id="main-content">` trở thành "deck", mỗi `section.resume-section` là một panel cao bằng màn hình, cuộn dọc độc lập. Bấm dải cạnh phải (desktop) hoặc thanh dưới đáy (mobile), menu sidebar, link `#id` hay phím ←/→ để chuyển; section tiếp theo trượt từ phải sang trái. URL hash cập nhật theo section (nút Back hoạt động, link trực tiếp `#projects` được). Không có JS thì trang vẫn cuộn dọc như cũ; khi in, mọi section xếp chồng. CSS nằm ở mục 15 của `css/resume.css`.
4. **Tương tác khác**: bộ lọc kỹ năng trong `render.js`. `resume.js` (smooth scroll + scrollspy của jQuery) chỉ còn tác dụng khi không bật chế độ slide; `deck.js` chặn handler cũ và tắt scrollspy.

---

## 3. Quản Lý Mã Nguồn & Thư Viện

| Thành phần | Công nghệ / Phiên bản | Vai trò kỹ thuật |
| :--- | :--- | :--- |
| **Core Framework** | Bootstrap 4.3.1 | Hệ thống grid responsive, flexbox utilities, navbar |
| **Icons & Assets** | Font Awesome 5.7.2 | Icon chuyên nghiệp cho mạng xã hội, kỹ năng, công việc |
| **Core Library** | jQuery 3.3.1 + Easing | Hỗ trợ tương tác DOM, hiệu ứng scroll mượt cho navigation |
| **Build Tool** | Gulp 4.0.0 | Tự động hóa biên dịch SCSS, gộp vendor, minification |
| **Dev Server** | BrowserSync 2.26.3 | Live-reload phục vụ phát triển cục bộ |

---

## 4. Hướng Dẫn Phát Triển & Bảo Trì

### Chạy môi trường local:
```powershell
# Cài đặt dependencies
npm install

# Khởi động Gulp watch + BrowserSync server (port 3000)
npm start
```

### Quy trình đẩy code lên production:
Sử dụng script tự động hóa được tích hợp sẵn:
```powershell
.\scripts\git-push.ps1 -Message "Nội dung commit cập nhật" -Branch "main"
```
Script sẽ thực hiện tuần tự:
1. Git add & commit với message.
2. Push lên nhánh `main` để GitHub Pages cập nhật.
3. Tự động đồng bộ sơ đồ tri thức `graphify . --update`.
4. Nhắc nhở cập nhật `AGENT_STATE.md` và `ARCHITECTURE.md`.

---

## 5. Điểm Lưu Ý Khi Bàn Giao & Mở Rộng

- **Tránh sửa file sinh tự động**: Tránh chỉnh sửa trực tiếp vào `css/resume.min.css` hay các file trong `vendor/`. Luôn chỉnh sửa trong `scss/` hoặc `js/data.js` / `js/render.js` rồi chạy Gulp build.
- **Tùy biến nội dung CV**: Mọi cập nhật nội dung chỉ cần chỉnh sửa trong `js/data.js`. Cả 2 trang tiếng Anh (`index.html`) và tiếng Việt (`index_vnm.html`) sẽ tự động cập nhật đồng bộ.
- **Tên miền tùy biến**: Tên miền `quangtung.io.vn` được gắn qua file `CNAME`. Khi trỏ DNS mới, giữ nguyên file này để tránh mất liên kết tên miền.

