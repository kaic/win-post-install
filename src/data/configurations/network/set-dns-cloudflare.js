export default {
  id: 'set-dns-cloudflare',
  name: 'Set DNS to Cloudflare 1.1.1.1',
  description: 'Change system DNS to Cloudflare for privacy and speed',
  category: 'network',
  commandBat: [
    'netsh interface ip set dns "Ethernet" static 1.1.1.1 primary',
    'netsh interface ip add dns "Ethernet" 1.0.0.1 index=2',
    'netsh interface ip set dns "Wi-Fi" static 1.1.1.1 primary',
    'netsh interface ip add dns "Wi-Fi" 1.0.0.1 index=2'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true,
  warning: 'May not work if interface names are different'
};
