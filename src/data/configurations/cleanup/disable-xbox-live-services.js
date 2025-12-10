export default {
  id: 'disable-xbox-live-services',
  name: 'Disable Xbox Live services',
  description: 'Stop and disable Xbox Live Auth Manager, Game Save, and Accessory Management services',
  category: 'cleanup',
  commandBat: [
    'sc config XblAuthManager start= disabled',
    'sc stop XblAuthManager',
    'sc config XblGameSave start= disabled',
    'sc stop XblGameSave',
    'sc config XboxGipSvc start= disabled',
    'sc stop XboxGipSvc'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Will prevent Xbox features and Game Pass games from working'
};
