export default {
  id: 'ultimate-performance-power',
  name: 'Ultimate Performance power plan',
  description: 'Enable and set Ultimate Performance plan (Windows 10 Pro+)',
  category: 'performance',
  commandBat: [
    'powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61',
    'powercfg /S e9a42b02-d5df-448d-aa00-03f14749eb61'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'Only available on Windows 10 Pro and above. May increase power consumption.'
};
