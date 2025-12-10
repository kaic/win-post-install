export default {
  id: 'disable-timeline',
  name: 'Disable Timeline',
  description: 'Disable Windows Timeline feature',
  category: 'privacy',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" /v EnableActivityFeed /t REG_DWORD /d 0 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
};
