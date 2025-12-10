export default {
  id: 'remove-office-hub',
  name: 'Remove Office Hub',
  description: 'Remove Microsoft Office trial/hub application',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.MicrosoftOfficeHub | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
