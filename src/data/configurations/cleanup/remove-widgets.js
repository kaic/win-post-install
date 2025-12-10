export default {
  id: 'remove-widgets',
  name: 'Remove Widgets',
  description: 'Uninstall Windows 11 Widgets panel',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage *WebExperience* | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage MicrosoftWindows.Client.WebExperience | Remove-AppxPackage"'
  ],
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarDa /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Windows 11 only - will disable Widgets taskbar icon'
};
