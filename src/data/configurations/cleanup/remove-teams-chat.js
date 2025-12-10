export default {
  id: 'remove-teams-chat',
  name: 'Remove Teams Chat',
  description: 'Uninstall Microsoft Teams Chat integration from Windows 11',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage MicrosoftTeams* | Remove-AppxPackage"'
  ],
  registryBat: [
    'reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /v TaskbarMn /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
