export default {
  id: 'remove-maps',
  name: 'Remove Windows Maps',
  description: 'Uninstall Windows Maps application',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.WindowsMaps | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
