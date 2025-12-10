export default {
  id: 'remove-solitaire',
  name: 'Remove Microsoft Solitaire',
  description: 'Uninstall Microsoft Solitaire Collection',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage Microsoft.MicrosoftSolitaireCollection | Remove-AppxPackage"'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
