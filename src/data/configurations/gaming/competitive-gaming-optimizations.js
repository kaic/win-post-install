export default {
  id: 'competitive-gaming-optimizations',
  name: 'Competitive Gaming Optimizations',
  description: 'Apply optimizations for competitive games (CS2, Valorant, etc.) - Disables mouse acceleration, disables accessibility key toggles, adjusts multimedia scheduling',
  category: 'gaming',
  registryBat: [
    'REM Disable Mouse Acceleration (Enhanced Pointer Precision)',
    'reg add "HKCU\\Control Panel\\Mouse" /v MouseSpeed /t REG_SZ /d 0 /f',
    'reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold1 /t REG_SZ /d 0 /f',
    'reg add "HKCU\\Control Panel\\Mouse" /v MouseThreshold2 /t REG_SZ /d 0 /f',
    'REM Disable Sticky Keys, Filter Keys, Toggle Keys',
    'reg add "HKCU\\Control Panel\\Accessibility\\StickyKeys" /v Flags /t REG_SZ /d 506 /f',
    'reg add "HKCU\\Control Panel\\Accessibility\\Keyboard Response" /v Flags /t REG_SZ /d 122 /f',
    'reg add "HKCU\\Control Panel\\Accessibility\\ToggleKeys" /v Flags /t REG_SZ /d 58 /f',
    'REM Multimedia scheduling tweaks (legacy): reduce network throttling / responsiveness',
    'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v NetworkThrottlingIndex /t REG_DWORD /d 4294967295 /f',
    'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v SystemResponsiveness /t REG_DWORD /d 0 /f',
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'Changes mouse behavior and system scheduling settings. Test in-game to verify improvements.'
};
