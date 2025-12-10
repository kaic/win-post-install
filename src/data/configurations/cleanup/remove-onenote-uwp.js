export default {
  id: 'remove-onenote-uwp',
  name: 'Remove OneNote (UWP)',
  description: 'Uninstall OneNote UWP app (does not affect OneNote desktop)',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.Office.OneNote | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Only removes UWP version, desktop OneNote remains installed'
};
