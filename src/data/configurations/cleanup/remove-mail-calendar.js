export default {
  id: 'remove-mail-calendar',
  name: 'Remove Mail & Calendar',
  description: 'Uninstall Windows Mail and Calendar apps',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage microsoft.windowscommunicationsapps | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'You will need an alternative email client'
};
