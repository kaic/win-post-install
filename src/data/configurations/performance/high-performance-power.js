export default {
  id: 'high-performance-power',
  name: 'High Performance power plan',
  description: 'Set power plan to High Performance for maximum performance',
  category: 'performance',
  commandBat: [
    'powercfg /S SCHEME_MIN'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'May increase power consumption on laptops'
};
