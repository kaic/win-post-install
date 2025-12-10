export default {
  id: 'remove-your-phone',
  name: 'Remove Your Phone/Phone Link',
  description: 'Uninstall Microsoft Your Phone (Phone Link) app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.YourPhone | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage *WindowsPhone* | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Will disable phone integration features'
};
