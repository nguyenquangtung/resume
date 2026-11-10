param (
    [string[]]$Skills = @(),
    [string[]]$VaultPaths = @(
        "T:\Skills",
        "T:\Skills\vault\antigravity-skills\skills",
        ".brain\vault\antigravity-skills\skills"
    ),
    [string]$TargetDir = ".agent\skills"
)

if (-not (Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

foreach ($skill in $Skills) {
    $found = $false
    foreach ($vault in $VaultPaths) {
        $source = Join-Path $vault $skill
        if (Test-Path $source) {
            $dest = Join-Path $TargetDir $skill
            if (Test-Path $dest) {
                Remove-Item -Path $dest -Recurse -Force
            }
            # Copy or link skill
            Copy-Item -Path $source -Destination $dest -Recurse -Force
            Write-Host "[OK] Activated skill: $skill (from $vault)" -ForegroundColor Green
            $found = $true
            break
        }
    }

    if (-not $found) {
        Write-Warning "[SKIP] Skill not found in vaults: $skill"
    }
}

