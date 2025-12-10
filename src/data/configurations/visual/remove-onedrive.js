export default {
  id: 'remove-onedrive',
  name: 'Remove OneDrive',
  description: 'Uninstall and remove OneDrive from Windows',
  category: 'visual',
  commandBat: [
    'taskkill /f /im OneDrive.exe',
    '%SystemRoot%\\System32\\OneDriveSetup.exe /uninstall',
    '%SystemRoot%\\SysWOW64\\OneDriveSetup.exe /uninstall',
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\OneDrive" /v DisableFileSyncNGSC /t REG_DWORD /d 1 /f',
    'reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v OneDrive /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'OneDrive will be completely removed from your system'
};
