export default {
  id: 'disable-wifi-sense',
  name: 'Disable WiFi Sense',
  description: 'Stop sharing WiFi passwords',
  category: 'network',
  registryBat: [
    'reg add "HKLM\\SOFTWARE\\Microsoft\\WcmSvc\\wifinetworkmanager\\config" /v AutoConnectAllowedOEM /t REG_DWORD /d 0 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: true
};
