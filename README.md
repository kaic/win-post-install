# Windows Post-Install Script Generator

A web-based tool that generates customized Windows post-installation batch scripts. Select from 115 software applications and 80 Windows configurations to create a personalized setup script.

---

## Support This Project

If you find this tool useful, consider sponsoring to help keep it alive and actively maintained!

<a href="https://github.com/sponsors/kaic">
  <img src="https://img.shields.io/badge/Sponsor-♥-ea4aaa?style=for-the-badge&logo=github-sponsors" alt="Sponsor kaic" />
</a>

## How to Use (Production)

Just open the live version:

👉 **https://kaic.me/win-post-install**

There you can:

1. Choose the apps and settings you want.
2. Generate a `.bat` script.
3. Download it and run on your fresh Windows install (USB or local machine).

Runs entirely in your browser — no installation required.

---

## Features

- **115 Software Applications:** Curated apps across 13 categories  
- **80 System Configurations:** Performance, privacy, UI, gaming tweaks  
- **Cleanup Tools:** Remove bloatware safely  
- **One-Click Script Generation:** Ready-to-run batch file  
- **Windows 98-Inspired UI:** Nostalgia + modern functionality  
- **Safe and Reversible:** Uses official Windows tools (`winget`, PowerShell)

---

## Live Demo

🔗 **https://kaic.me/win-post-install**

---

## Technologies

- React 19  
- Vite  
- Tailwind CSS  
- React Icons  
- Winget  
- PowerShell  

---

## Running Locally (Development Only)

You only need this if you plan to run or modify the source code.

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
git clone https://github.com/kaic/win-post-install.git
cd win-post-install
npm install
npm run dev
```

Build
```bash
npm run build
```

The production build will be outputed to the `dist/` directory.

## Usage

### Using the Web Interface

1. **Browse Categories**: Navigate through software categories (Browsers, Development, Gaming, etc.)
2. **Select Software**: Click on applications you want to install
3. **Configure System**: Switch to the Configurations tab to optimize Windows settings
4. **Review Selection**: View your selected items in the right panel
5. **Download Script**: Click "Download Script" to generate your batch file
6. **Run on Windows**: Execute the downloaded `.bat` file as Administrator on your Windows machine

### Running the Generated Script

1. Download the `windows-setup.bat` file from the web interface
2. Right-click the file and select "Run as Administrator"
3. The script will:
   - Install selected software using winget
   - Apply system configurations via registry and PowerShell
   - Remove bloatware if selected
   - Display progress and completion status

### Adding Your Own Software

Edit `src/data/software-catalog.js` to add new software entries:

```javascript
{
  id: 'my-app',
  name: 'My Application',
  category: 'utilities',
  wingetId: 'Publisher.MyApp',
  icon: SiMyapp,
  description: 'Description of my application',
  website: 'https://example.com',
  recommended: false
}
```

### Adding System Configurations

Edit `src/data/configurations.js` to add new configurations:

```javascript
{
  id: 'my-config',
  name: 'My Configuration',
  description: 'What this configuration does',
  category: 'performance',
  registryBat: [
    'reg add "HKCU\\Path" /v Value /t REG_DWORD /d 1 /f'
  ],
  recommended: false,
  requiresRestart: false,
  requiresAdmin: true
}
```

## Project Structure

```
win-post-install/
├── src/
│   ├── components/
│   │   ├── Common/          # Reusable UI components
│   │   ├── Software/        # Software selection interface
│   │   └── Configurations/  # System configuration interface
│   ├── data/
│   │   ├── software-catalog.js    # Software definitions
│   │   ├── configurations.js      # System configurations
│   │   └── categories.js          # Category definitions
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## Contributing

Contributions are welcome! Please read our **[Contributing Guide](CONTRIBUTING.md)** for detailed instructions on:

- Development setup
- Adding software to the catalog
- Adding system configurations
- Modifying the UI
- Code style guidelines
- Pull request process

### Quick Start

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes and test locally
4. Commit using conventional commits: `git commit -m "feat: add new feature"`
5. Push and open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Software metadata and installation via [Winget](https://github.com/microsoft/winget-cli)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI design inspired by classic Windows 98 interface
- Community contributions and suggestions

## Disclaimer

This tool generates scripts that modify system settings and install software. Always review generated scripts before execution. The authors are not responsible for any system issues resulting from script execution. Use at your own risk and ensure you have backups of important data.
