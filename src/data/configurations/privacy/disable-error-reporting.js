export default {
  id: 'disable-error-reporting',
  name: 'Disable Windows Error Reporting',
  description: 'Stop sending error reports to Microsoft',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting" /v Disabled /t REG_DWORD /d 1 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
