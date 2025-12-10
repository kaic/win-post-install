export default {
  id: 'enable-hardware-gpu-scheduling',
  name: 'Enable Hardware-accelerated GPU scheduling',
  description: 'Let GPU manage its own memory (Windows 10 2004+)',
  category: 'gaming',
  registryBat: [
    'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v HwSchMode /t REG_DWORD /d 2 /f'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'Requires compatible GPU and drivers'
};
