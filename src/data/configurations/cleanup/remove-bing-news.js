export default {
  id: 'remove-bing-news',
  name: 'Remove Bing News',
  description: 'Uninstall Microsoft Bing News app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.BingNews | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
