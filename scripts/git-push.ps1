param(
    [Parameter(Mandatory=$true)]
    [string]$Message,
    [string]$Branch = "main"
)

# Hiển thị đúng tiếng Việt trên console Windows PowerShell 5.1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Tìm lệnh graphify: ưu tiên PATH, sau đó tới module Python (pip install graphifyy)
function Invoke-Graphify {
    param([string[]]$GraphifyArgs)
    if (Get-Command graphify -ErrorAction SilentlyContinue) {
        & graphify @GraphifyArgs
        return $LASTEXITCODE
    }
    foreach ($py in @("py", "python", "python3")) {
        if (Get-Command $py -ErrorAction SilentlyContinue) {
            $pyArgs = @()
            if ($py -eq "py") { $pyArgs += "-3" }
            & $py @pyArgs -c "import graphify" 2>$null
            if ($LASTEXITCODE -eq 0) {
                & $py @pyArgs -m graphify @GraphifyArgs
                return $LASTEXITCODE
            }
        }
    }
    return $null
}

# 1. Kiểm tra trạng thái Git
$status = git status --porcelain
if (-not $status) {
    Write-Host "Không có thay đổi nào cần commit." -ForegroundColor Yellow
    exit 0
}

# 2. Add và Commit
git add .
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Commit thất bại. Dừng lại."
    exit 1
}

# 3. Push lên remote
Write-Host "Đang đẩy code lên GitHub ($Branch)..." -ForegroundColor Cyan
git push origin $Branch

if ($LASTEXITCODE -ne 0) {
    Write-Error "Lỗi khi push lên GitHub. Bỏ qua cập nhật Graphify."
    exit 1
}

# 4. Cập nhật knowledge graph
Write-Host "Push GitHub thành công! Đang cập nhật knowledge graph..." -ForegroundColor Green
$code = Invoke-Graphify @("update", ".")
if ($null -eq $code) {
    Write-Warning "Không tìm thấy graphify (PATH hoặc Python module 'graphify'). Bỏ qua bước cập nhật."
} elseif ($code -eq 0) {
    Write-Host "Cập nhật Graphify hoàn tất. Nhớ commit thay đổi trong graphify-out/ ở lần push sau." -ForegroundColor Green
} else {
    Write-Warning "graphify update trả về mã lỗi $code."
}

# 5. Nhắc nhở cập nhật tài liệu
Write-Host "`n[State Check] Cập nhật AGENT_STATE.md (Completed tasks, Changelog) cho các agent tiếp theo." -ForegroundColor Yellow
Write-Host "[Doc Check] Cập nhật ARCHITECTURE.md nếu commit này thay đổi luồng kỹ thuật hoặc kiến trúc hệ thống." -ForegroundColor Yellow
Write-Host "[Requirements Check] Kiểm tra và đồng bộ package.json / dependencies nếu có thay đổi." -ForegroundColor Yellow
