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

# 4. Tự động chạy graphify update nếu push thành công
if ($LASTEXITCODE -eq 0) {
    Write-Host "Push GitHub thành công! Đang cập nhật knowledge graph..." -ForegroundColor Green
    if (Get-Command graphify -ErrorAction SilentlyContinue) {
        graphify . --update
        Write-Host "Cập nhật Graphify hoàn tất." -ForegroundColor Green
    } else {
        Write-Warning "Không tìm thấy lệnh graphify trên máy để update."
    }

    # 5. Nhắc nhở cập nhật AGENT_STATE.md và ARCHITECTURE.md
    Write-Host "`n[State Check] Cập nhật AGENT_STATE.md (Completed tasks, Changelog) cho các agent tiếp theo." -ForegroundColor Yellow
    Write-Host "[Doc Check] Cập nhật ARCHITECTURE.md nếu commit này thay đổi luồng kỹ thuật hoặc kiến trúc hệ thống." -ForegroundColor Yellow

    # 6. Kiểm tra và cập nhật file Requirements/Dependencies
    Write-Host "[Requirements Check] Kiểm tra và đồng bộ package.json / dependencies nếu có thay đổi." -ForegroundColor Yellow
} else {
    Write-Error "Lỗi khi push lên GitHub. Bỏ qua cập nhật Graphify."
}

