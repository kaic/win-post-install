export default {
  id: 'classic-context-menu-win11',
  name: 'Classic right-click menu (Win11)',
  description: 'Restore Windows 10 context menu in Windows 11',
  category: 'visual',
  commandBat: [
    'reg add "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /ve /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: false,
  warning: 'Only works on Windows 11'
};
