/**
 * Custom SVG Icons - Based on official software designs
 */

// Google Chrome - Official multicolor logo design
export const ChromeIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    {/* Outer circle segments */}
    <path d="M12 2C17.52 2 22 6.48 22 12c0 2.21-.72 4.25-1.94 5.9L15.5 11h-7L12 2z" fill="#EA4335"/>
    <path d="M2 12c0-2.21.72-4.25 1.94-5.9L8.5 13l3.5 6.06C6.48 19.06 2 15.52 2 12z" fill="#FBBC05"/>
    <path d="M12 22c-2.76 0-5.26-1.12-7.06-2.94l4.56-7.9h7L12 22z" fill="#34A853"/>
    {/* Center blue circle */}
    <circle cx="12" cy="12" r="5" fill="#4285F4"/>
    {/* Inner white circle */}
    <circle cx="12" cy="12" r="3.5" fill="white"/>
    {/* Center blue dot */}
    <circle cx="12" cy="12" r="2.5" fill="#4285F4"/>
  </svg>
);

// Google Drive - Multicolor official triangle design
export const GoogleDriveIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <path d="M8.5 3L2 14.5 5.5 21h13L22 14.5 15.5 3z" fill="#0066DA"/>
    <path d="M15.5 3L9 15h12z" fill="#00AC47"/>
    <path d="M5.5 21L2 14.5 9 15z" fill="#EA4335"/>
    <path d="M9 15l3.5 6L22 14.5z" fill="#00832D"/>
    <path d="M2 14.5L8.5 3 9 15z" fill="#FFBA00"/>
  </svg>
);

// WinRAR - Stack of books representing compressed archives (official WinRAR design)
export const WinRarIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="winrar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E92626"/>
        <stop offset="100%" stopColor="#C91F1F"/>
      </linearGradient>
    </defs>
    {/* Stack of books/archives */}
    <path d="M4 14l1-4h14l1 4v7H4z" fill="url(#winrar-grad)"/>
    <path d="M5 9l1-3h12l1 3z" fill="#D32323"/>
    <path d="M6 5l1-2h10l1 2z" fill="#BD1F1F"/>
    {/* Book spines */}
    <rect x="8" y="14" width="1" height="7" fill="#FFD700"/>
    <rect x="12" y="14" width="1" height="7" fill="#FFD700"/>
    <rect x="16" y="14" width="1" height="7" fill="#FFD700"/>
    {/* WinRAR signature band */}
    <rect x="4" y="17" width="16" height="1.5" fill="#FFD700" opacity="0.8"/>
  </svg>
);

// CPU-Z - Detailed processor chip icon
export const CpuZIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="cpuz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A9EFF"/>
        <stop offset="100%" stopColor="#1E5BA8"/>
      </linearGradient>
    </defs>
    {/* Chip pins */}
    <rect x="2" y="5" width="2" height="2" fill="#666"/>
    <rect x="2" y="9" width="2" height="2" fill="#666"/>
    <rect x="2" y="13" width="2" height="2" fill="#666"/>
    <rect x="2" y="17" width="2" height="2" fill="#666"/>
    <rect x="20" y="5" width="2" height="2" fill="#666"/>
    <rect x="20" y="9" width="2" height="2" fill="#666"/>
    <rect x="20" y="13" width="2" height="2" fill="#666"/>
    <rect x="20" y="17" width="2" height="2" fill="#666"/>
    <rect x="5" y="2" width="2" height="2" fill="#666"/>
    <rect x="9" y="2" width="2" height="2" fill="#666"/>
    <rect x="13" y="2" width="2" height="2" fill="#666"/>
    <rect x="17" y="2" width="2" height="2" fill="#666"/>
    <rect x="5" y="20" width="2" height="2" fill="#666"/>
    <rect x="9" y="20" width="2" height="2" fill="#666"/>
    <rect x="13" y="20" width="2" height="2" fill="#666"/>
    <rect x="17" y="20" width="2" height="2" fill="#666"/>
    {/* Chip body */}
    <rect x="5" y="5" width="14" height="14" rx="1" fill="url(#cpuz-grad)"/>
    {/* Chip details */}
    <rect x="8" y="8" width="8" height="8" fill="#000" opacity="0.2"/>
    <text x="12" y="14" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="monospace">Z</text>
  </svg>
);

// CCleaner - Broom with official orange/red CCleaner colors
export const CCleanerIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="ccleaner-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B1A"/>
        <stop offset="50%" stopColor="#E85500"/>
        <stop offset="100%" stopColor="#CC4D00"/>
      </linearGradient>
    </defs>
    {/* Broom handle */}
    <rect x="10.5" y="2" width="3" height="12" rx="1.5" fill="#8B4513"/>
    {/* Broom bristles */}
    <path d="M7 14h10l1 2v6l-1 0H7l-1 0v-6z" fill="url(#ccleaner-grad)"/>
    {/* Bristle details */}
    <line x1="8" y1="16" x2="8" y2="22" stroke="#CC4D00" strokeWidth="0.5"/>
    <line x1="10" y1="16" x2="10" y2="22" stroke="#CC4D00" strokeWidth="0.5"/>
    <line x1="12" y1="16" x2="12" y2="22" stroke="#CC4D00" strokeWidth="0.5"/>
    <line x1="14" y1="16" x2="14" y2="22" stroke="#CC4D00" strokeWidth="0.5"/>
    <line x1="16" y1="16" x2="16" y2="22" stroke="#CC4D00" strokeWidth="0.5"/>
    {/* Handle grip */}
    <rect x="10.5" y="5" width="3" height="1" fill="#6B3410" opacity="0.5"/>
    <rect x="10.5" y="8" width="3" height="1" fill="#6B3410" opacity="0.5"/>
  </svg>
);

// BleachBit - Spray bottle for cleaning/bleaching data
export const BleachBitIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="bleachbit-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3498DB"/>
        <stop offset="100%" stopColor="#2874A6"/>
      </linearGradient>
    </defs>
    {/* Spray bottle body */}
    <path d="M9 8h6v12c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V8z" fill="url(#bleachbit-grad)"/>
    {/* Bottle neck */}
    <rect x="10.5" y="5" width="3" height="3" fill="#2E86C1"/>
    {/* Spray trigger */}
    <path d="M14 6h2l1 2h-2z" fill="#E74C3C"/>
    <rect x="15" y="8" width="2" height="1" fill="#C0392B"/>
    {/* Spray particles */}
    <circle cx="17" cy="5" r="0.8" fill="#85C1E9" opacity="0.7"/>
    <circle cx="18.5" cy="6" r="0.6" fill="#85C1E9" opacity="0.6"/>
    <circle cx="19" cy="4" r="0.5" fill="#85C1E9" opacity="0.5"/>
    <circle cx="20" cy="5.5" r="0.4" fill="#85C1E9" opacity="0.4"/>
    {/* Label on bottle */}
    <rect x="9.5" y="11" width="5" height="3" fill="#fff" opacity="0.3"/>
  </svg>
);

// Driver Booster - Update/boost icon
export const DriverBoosterIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="driver-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00D4FF"/>
        <stop offset="100%" stopColor="#0084FF"/>
      </linearGradient>
    </defs>
    <path d="M12 2L4 12h5v8h6v-8h5L12 2z" fill="url(#driver-grad)"/>
    <circle cx="12" cy="21" r="1.5" fill="#00D4FF"/>
  </svg>
);

// Revo Uninstaller - Uninstall/trash icon
export const RevoUninstallerIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="revo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E53935"/>
        <stop offset="100%" stopColor="#C62828"/>
      </linearGradient>
    </defs>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z" fill="url(#revo-grad)"/>
    <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#B71C1C"/>
    <rect x="9" y="9" width="2" height="8" rx="1" fill="#fff" opacity="0.8"/>
    <rect x="13" y="9" width="2" height="8" rx="1" fill="#fff" opacity="0.8"/>
  </svg>
);

// Winamp - Classic media player with lightning bolt design
export const WinampIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="winamp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6600"/>
        <stop offset="100%" stopColor="#CC5200"/>
      </linearGradient>
    </defs>
    {/* Lightning bolt in Winamp style */}
    <path d="M14 2L6 13h5v7l8-11h-5z" fill="url(#winamp-grad)"/>
    {/* Equalizer bars */}
    <rect x="3" y="18" width="1.5" height="4" fill="#00CC00"/>
    <rect x="5" y="16" width="1.5" height="6" fill="#00CC00"/>
    <rect x="7" y="19" width="1.5" height="3" fill="#00CC00"/>
  </svg>
);

// eMule - P2P file sharing with mule/network theme
export const EMuleIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="emule-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0057B7"/>
        <stop offset="100%" stopColor="#003D82"/>
      </linearGradient>
    </defs>
    {/* Network nodes representing P2P */}
    <circle cx="12" cy="12" r="3" fill="url(#emule-grad)"/>
    <circle cx="5" cy="6" r="2" fill="#0057B7"/>
    <circle cx="19" cy="6" r="2" fill="#0057B7"/>
    <circle cx="5" cy="18" r="2" fill="#0057B7"/>
    <circle cx="19" cy="18" r="2" fill="#0057B7"/>
    {/* Network connections */}
    <line x1="12" y1="12" x2="5" y2="6" stroke="#0057B7" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="19" y2="6" stroke="#0057B7" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="5" y2="18" stroke="#0057B7" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="19" y2="18" stroke="#0057B7" strokeWidth="1.5"/>
  </svg>
);

// Nero - Burning disc with flames (Nero Burning ROM)
export const NeroIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="nero-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF4444"/>
        <stop offset="100%" stopColor="#CC0000"/>
      </linearGradient>
      <radialGradient id="nero-disc">
        <stop offset="0%" stopColor="#666"/>
        <stop offset="100%" stopColor="#333"/>
      </radialGradient>
    </defs>
    {/* CD/DVD disc */}
    <circle cx="12" cy="14" r="7" fill="url(#nero-disc)"/>
    <circle cx="12" cy="14" r="2" fill="#111"/>
    {/* Flames */}
    <path d="M10 7c0-2 1-4 2-5 1 1 2 3 2 5 0 1-.5 2-1 2.5-.5-.5-1-1.5-1-2.5z" fill="url(#nero-grad)"/>
    <path d="M7 9c-.5-1.5 0-3 .5-4 1 .5 1.5 2 2 3.5 0 .8-.5 1.3-1 1.5-.5-.3-.8-1-.5-1.5z" fill="#FF6600"/>
    <path d="M15 9c.5-1.5 0-3-.5-4-1 .5-1.5 2-2 3.5 0 .8.5 1.3 1 1.5.5-.3.8-1 .5-1.5z" fill="#FF6600"/>
  </svg>
);

// PowerISO - Power/lightning with ISO disc
export const PowerISOIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="poweriso-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0096FF"/>
        <stop offset="100%" stopColor="#0078D7"/>
      </linearGradient>
    </defs>
    {/* ISO disc */}
    <circle cx="12" cy="12" r="8" fill="url(#poweriso-grad)" opacity="0.3"/>
    <circle cx="12" cy="12" r="6" stroke="#0078D7" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="#0078D7"/>
    {/* Lightning bolt for "Power" */}
    <path d="M13 4l-3 6h2.5l-2 6 5-7h-2.5z" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5"/>
  </svg>
);

// UltraISO - Premium/ultra ISO disc
export const UltraISOIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="ultraiso-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB900"/>
        <stop offset="100%" stopColor="#FF8C00"/>
      </linearGradient>
    </defs>
    {/* Disc with premium look */}
    <circle cx="12" cy="12" r="9" fill="url(#ultraiso-grad)" opacity="0.2"/>
    <circle cx="12" cy="12" r="7" stroke="#FFB900" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="5" stroke="#FF8C00" strokeWidth="1.5" fill="none" opacity="0.6"/>
    <circle cx="12" cy="12" r="2.5" fill="#FFB900"/>
    {/* Star for "Ultra" premium quality */}
    <path d="M12 2l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z" fill="#FFB900" opacity="0.8"/>
  </svg>
);

// DirectX - Microsoft DirectX 3D cube logo
export const DirectXIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="dx-top" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#52B043"/>
        <stop offset="100%" stopColor="#8DC63F"/>
      </linearGradient>
      <linearGradient id="dx-left" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#107C10"/>
        <stop offset="100%" stopColor="#0B5A08"/>
      </linearGradient>
      <linearGradient id="dx-right" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3A8428"/>
        <stop offset="100%" stopColor="#2B6E1F"/>
      </linearGradient>
    </defs>
    {/* 3D Isometric cube representing DirectX */}
    {/* Top face */}
    <path d="M12 4L20 8.5L12 13L4 8.5Z" fill="url(#dx-top)"/>
    {/* Left face */}
    <path d="M4 8.5L4 15.5L12 20V13Z" fill="url(#dx-left)"/>
    {/* Right face */}
    <path d="M20 8.5L20 15.5L12 20V13Z" fill="url(#dx-right)"/>
    {/* Edges for depth */}
    <path d="M12 4L20 8.5L12 13L4 8.5Z" stroke="#0B5A08" strokeWidth="0.5" fill="none"/>
    {/* X overlay for DirectX branding */}
    <path d="M9 11l6 6M15 11l-6 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
  </svg>
);

// Visual C++ Redistributables - C++ with Microsoft colors
export const VCRedistIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
    {...props}
  >
    <defs>
      <linearGradient id="vcredist-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#68217A"/>
        <stop offset="100%" stopColor="#9B4F96"/>
      </linearGradient>
    </defs>
    {/* Background square */}
    <rect x="2" y="2" width="20" height="20" rx="2" fill="url(#vcredist-grad)"/>
    {/* C++ text */}
    <text x="6" y="17" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#fff">C++</text>
    {/* Plus symbols */}
    <text x="4" y="9" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#00D4FF">++</text>
    <text x="15" y="9" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#00D4FF">++</text>
    {/* Microsoft accent */}
    <rect x="3" y="18" width="2" height="2" fill="#F25022"/>
    <rect x="5.5" y="18" width="2" height="2" fill="#7FBA00"/>
    <rect x="8" y="18" width="2" height="2" fill="#00A4EF"/>
    <rect x="10.5" y="18" width="2" height="2" fill="#FFB900"/>
  </svg>
);

export default {
  ChromeIcon,
  GoogleDriveIcon,
  WinRarIcon,
  CpuZIcon,
  CCleanerIcon,
  BleachBitIcon,
  DriverBoosterIcon,
  RevoUninstallerIcon,
  WinampIcon,
  EMuleIcon,
  NeroIcon,
  PowerISOIcon,
  UltraISOIcon,
  DirectXIcon,
  VCRedistIcon,
};
