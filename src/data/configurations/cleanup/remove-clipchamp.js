export default {
  id: 'remove-clipchamp',
  name: 'Remove Clipchamp',
  description: 'Uninstall Clipchamp video editor',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage *Clipchamp* | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
