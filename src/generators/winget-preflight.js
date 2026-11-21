/**
 * Batch snippet that refreshes the winget package source before installing.
 * An outdated "App Installer" fails with "The server certificate did not match
 * any of the expected values"; warn about it up front instead of only logging it.
 * Note: no parentheses inside the echo lines, they would close the if block.
 */
export const WINGET_PREFLIGHT_BAT = `:: Check that winget works and its package source is reachable
where winget >nul 2>&1
if %errorLevel% neq 0 (
    echo WARNING: winget was not found. Install or update "App Installer" from the Microsoft Store.
    echo.
) else (
    winget source update >nul 2>>errors.log
    if %errorLevel% neq 0 (
        echo WARNING: winget could not update its package source.
        echo If you see "The server certificate did not match any of the expected values",
        echo update "App Installer" from the Microsoft Store or run Windows Update, then run this script again.
        echo.
    )
)
`;
