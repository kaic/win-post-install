export default {
  id: 'advanced-tcp-ack-frequency',
  name: 'Advanced: TCP Delayed ACK (TcpAckFrequency)',
  description: 'Optional legacy tweak for specific TCP latency scenarios. Applies TcpAckFrequency=1 per active network interface (does not disable Nagle globally).',
  category: 'gaming',
  registryBat: [
    'REM Advanced / legacy tweak: TcpAckFrequency is per-interface and only affects some TCP workloads.',
    'REM Most games use UDP; keep disabled unless you know you need it.',
    'REM Applies to currently connected physical adapters (Ethernet/Wi-Fi).',
    'powershell -Command "$ErrorActionPreference=\'Stop\'; $adapters = Get-NetAdapter | Where-Object { $_.Status -eq \'Up\' -and $_.HardwareInterface -eq $true -and $_.InterfaceGuid }; foreach ($a in $adapters) { $path = \'HKLM:\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\\{\' + $a.InterfaceGuid + \'}\'; New-Item -Path $path -Force | Out-Null; New-ItemProperty -Path $path -Name TcpAckFrequency -PropertyType DWord -Value 1 -Force | Out-Null }"'
  ],
  recommended: false,
  requiresRestart: true,
  requiresAdmin: true,
  warning: 'Important: This tweak takes effect but may not improve latency. TCP-only (no UDP impact) and can increase ACK traffic.'
};
