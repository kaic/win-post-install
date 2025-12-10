export default {
  id: 'remove-bing-weather',
  name: 'Remove Bing Weather',
  description: 'Uninstall Microsoft Bing Weather app',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.BingWeather | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
