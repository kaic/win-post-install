export default {
  id: 'remove-casual-games',
  name: 'Remove casual games',
  description: 'Uninstall Candy Crush, Bubble Witch, and similar pre-installed games',
  category: 'cleanup',
  commandBat: [
    'powershell -Command "Get-AppxPackage *CandyCrush* | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage *BubbleWitch* | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage king.com* | Remove-AppxPackage"',
    'powershell -Command "Get-AppxPackage *MarchofEmpires* | Remove-AppxPackage"'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
