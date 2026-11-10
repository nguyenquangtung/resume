---
name: multi-agent-sync
description: >-
  Chuẩn hóa quy trình làm việc đa AI Agent (Claude, Codex, Antigravity, Cursor, Copilot).
  Tự động duy trì file trạng thái chung (AGENT_STATE.md), sơ đồ tri thức (Graphify), tài liệu kiến trúc (ARCHITECTURE.md),
  và quy trình Git Push Workflow đảm bảo chuyển đổi giữa các agent mượt mà, không quên ngữ cảnh.
---

# Multi-Agent Synchronization Skill (`multi-agent-sync`)

Skill này định nghĩa và thực thi quy trình đồng bộ liên tục khi một dự án được phát triển bởi nhiều AI Agent khác nhau (**Claude Code, Codex, Antigravity, Cursor, Copilot...**).

---

## 1. Nguyên Tắc Cốt Lõi (Single Source of Truth)

Khi làm việc với nhiều Agent, rủi ro lớn nhất là **"mất ngữ cảnh"** và **"lệch pha công việc"** (agent này không biết agent kia vừa sửa gì hoặc dự định làm gì). Để khắc phục triệt để:

1. **File Trạng Thái Tiến Độ (`AGENT_STATE.md`):** Đặt tại thư mục gốc của repo. Đây là file nhật ký duy nhất mọi agent **bắt buộc đọc trước khi làm** và **bắt buộc cập nhật trước khi kết thúc phiên**.
2. **File Ngữ Cảnh Chuyên Biệt Theo Từng Nền Tảng:**
   - **Claude**: `CLAUDE.md` (tự động đọc bởi Claude Code).
   - **Antigravity / Cursor / Codex**: `.agent/rules/project-context.md` và `AGENTS.md`.
3. **Sơ Đồ Tri Thức Mã Nguồn (Graphify):** Duy trì `graphify-out/` để mọi agent có thể truy vấn cấu trúc hàm, dependency và call-graph.
4. **Tài Liệu Luồng Kỹ Thuật Bàn Giao (`ARCHITECTURE.md`):** Mô tả kiến trúc phân tầng, flow dữ liệu chính và các điểm cần lưu ý khi vận hành.

---

## 2. Quy Trình 5 Bước Bắt Buộc Khi Có Cập Nhật (The 5-Step Workflow)

Mỗi khi agent hoàn thành một tính năng, sửa bug hoặc thay đổi cấu trúc mã nguồn, phải thực hiện đúng 5 bước:

```
[1. Cập Nhật AGENT_STATE.md]
         │
         ▼
[2. Git Commit & Push (scripts/git-push.ps1)]
         │
         ▼
[3. Graphify Knowledge Graph Update]
         │
         ▼
[4. Cập Nhật ARCHITECTURE.md (nếu đổi flow/route)]
         │
         ▼
[5. Rà Soát Dependencies (requirements.txt / package.json)]
```

---

## 3. Cấu Trúc Chuẩn Của `AGENT_STATE.md`

Khi khởi tạo hoặc cập nhật dự án mới, file `AGENT_STATE.md` phải tuân theo định dạng sau:

```markdown
# Multi-Agent State & Handover Log (AGENT_STATE.md)

## 1. Trạng Thái Hiện Tại (Current Snapshot)
- **Thời điểm cập nhật:** YYYY-MM-DD HH:mm (Timezone)
- **Agent cập nhật gần nhất:** [Claude / Codex / Antigravity / Cursor]
- **Mục tiêu sản phẩm / Task chính:** [Tóm tắt 1-2 câu]
- **Trạng thái Repo / Branch:** [Branch hiện tại, commit hash mới nhất]

## 2. Việc Đã Hoàn Thành (Completed Tasks)
- [x] Tính năng A...
- [x] Khởi tạo backend...

## 3. Việc Đang Làm Dở Dang & Cần Làm Tiếp (Next Action Items)
*Agent tiếp theo hãy nhận diện và làm tiếp theo thứ tự ưu tiên:*
1. [Lĩnh vực] Tác vụ cụ thể cần làm tiếp...
2. [Lĩnh vực] Tác vụ phụ trợ...

## 4. Nhật Ký Thay Đổi Của Các Agent (Changelog)
- **YYYY-MM-DD (Agent Name):** [Mô tả ngắn gọn 1 dòng về những gì vừa thay đổi trong commit]
```

---

## 4. Tự Động Hóa Qua Script `git-push.ps1`

Mỗi repo cần có sẵn file `scripts/git-push.ps1` với nội dung chuẩn hóa:

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$Message,
    [string]$Branch = "main"
)

# 1. Kiểm tra trạng thái Git
$status = git status --porcelain
if (-not $status) {
    Write-Host "Không có thay đổi nào cần commit." -ForegroundColor Yellow
    exit 0
}

# 2. Add và Commit
git add .
git commit -m "$Message"

# 3. Push lên remote
Write-Host "Đang đẩy code lên GitHub ($Branch)..." -ForegroundColor Cyan
git push origin $Branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "Push GitHub thành công!" -ForegroundColor Green
    
    # 4. Tu dong chay graphify update neu push thanh cong
    if (Get-Command graphify -ErrorAction SilentlyContinue) {
        Write-Host "Dang cap nhat knowledge graph..." -ForegroundColor Cyan
        graphify . --update --code-only
        Write-Host "Cap nhat Graphify hoan tat." -ForegroundColor Green
    }

    # 5. Nhắc nhở cập nhật ARCHITECTURE.md & Dependencies
    Write-Host "[Doc Check] Cập nhật ARCHITECTURE.md nếu commit này thay đổi luồng kỹ thuật." -ForegroundColor Yellow
    Write-Host "[Requirements Check] Kiểm tra và đồng bộ requirements.txt / package.json nếu có dependencies mới." -ForegroundColor Yellow
} else {
    Write-Error "Lỗi khi push lên GitHub. Vui lòng kiểm tra lại quyền truy cập hoặc conflict."
}
```

---

## 5. Quy Trình Setup Toàn Diện & Tối Ưu Token Cho Mọi Dự Án

Khi kích hoạt lệnh `/multi-agent-sync setup` trên bất kỳ dự án nào, thực hiện đầy đủ các bước:

### Bước 1: Khởi Tạo File Trạng Thái & Tài Liệu
1. Tạo `AGENT_STATE.md` (chứa **Mục 0: 1-Click Switch Prompts** và **Mục 5: Graphify Token-Saving Protocol**).
2. Tạo `CLAUDE.md`, `AGENTS.md`, `ARCHITECTURE.md` và `.agent/rules/project-context.md`.
3. Tạo script `scripts/git-push.ps1` tự động hóa chuỗi `commit -> push -> graphify update`.

### Bước 2: Tự Động Đăng Ký Hooks & Rules Cho 4 Nền Tảng Agent
Chạy chuỗi lệnh để cấu hình tự động cho các agent:
```powershell
graphify claude install       # Cài PreToolUse hook cho Claude Code trong .claude/
graphify codex install        # Cài hook và hướng dẫn cho OpenAI Codex trong .codex/
graphify cursor install       # Cài quy tắc .cursor/rules/graphify.mdc cho Cursor IDE
graphify antigravity install  # Cài rules và skill cho Google Antigravity
```

### Bước 3: Lập Chỉ Mục Mã Nguồn & Tạo Báo Cáo Rút Gọn
```powershell
graphify . --code-only           # Lập chỉ mục AST nhanh chóng không tốn API key
graphify cluster-only . --no-label # Tạo báo cáo rút gọn GRAPH_REPORT.md và graph.html
```

### Bước 4: 1-Click Switch Prompts (Sao Chép Nhanh Khi Đổi Agent)
- **Chuyển sang Claude Code:**
  > *"Đọc `AGENT_STATE.md` và `CLAUDE.md`. Dùng lệnh `graphify query/explain` khi cần tra cứu kiến trúc, tuyệt đối không nạp cả file `graph.json` để tiết kiệm token. Hãy tiếp tục thực hiện task ưu tiên 1 trong phần Next Action Items."*
- **Chuyển sang Codex / Cursor:**
  > *"Đọc `AGENT_STATE.md` và `ARCHITECTURE.md`. Xem `graphify-out/GRAPH_REPORT.md` để nắm các God Nodes cốt lõi (không mở file `graph.json`). Hãy tiếp tục làm task ưu tiên 1."*
- **Chuyển về Antigravity:**
  > *"Đọc `AGENT_STATE.md` để nắm tiến độ và tiếp tục làm task tiếp theo."*

### Bước 5: Nguyên Tắc Tiết Kiệm 99% Token Khi Dùng Graphify
1. **Tuyệt đối KHÔNG mở file thô `graphify-out/graph.json`** (ngốn 50k - 100k tokens).
2. **Đọc tóm tắt qua `graphify-out/GRAPH_REPORT.md`** (~1,000 tokens) để nắm 10 God Nodes.
3. **Tra cứu On-Demand bằng CLI** (~50 - 150 tokens):
   - `graphify explain "<Node/Function>"`
   - `graphify path "<A>" "<B>"`
   - `graphify query "<Câu hỏi>"`


