# Windows Post-Install Script Generator

A web-based tool that generates customized Windows post-installation batch scripts. Select from 115 software applications and 80 system configurations to create a personalized Windows setup script.

## Features

- **115 Software Applications**: Curated collection across 13 categories including browsers, development tools, media players, productivity apps, and more
- **80 System Configurations**: Optimize Windows settings for performance, privacy, visual customization, and gaming
- **Cleanup Tools**: Remove Windows bloatware and unnecessary components safely
- **One-Click Script Generation**: Generate ready-to-run batch scripts with your selections
- **Windows 98-Inspired UI**: Nostalgic interface design with modern functionality
- **No Installation Required**: Runs entirely in your browser
- **Safe and Reversible**: All changes use official Windows tools (winget, PowerShell) and are reversible

## Demo

Visit the live application: [https://kaic.me/win-post-install](https://kaic.me/win-post-install)

## Technologies

- **React 19**: Modern UI framework
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Comprehensive icon library
- **Winget**: Windows Package Manager for software installation
- **PowerShell**: Windows automation and system configuration

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kaic/win-post-install.git
cd win-post-install
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

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

Contributions are welcome! Here's how you can help:

### Reporting Issues

- Use GitHub Issues to report bugs or request features
- Include detailed steps to reproduce bugs
- Suggest new software or configurations with relevant details

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and test thoroughly
4. Commit using conventional commits: `git commit -m "feat: add new feature"`
5. Push to your fork: `git push origin feature/my-feature`
6. Open a Pull Request with a clear description

### Commit Convention

This project uses conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `chore:` Maintenance tasks
- `refactor:` Code refactoring
- `test:` Test additions or changes

### Adding Software

When adding new software:
- Verify the winget package ID is correct
- Use official icons when available
- Provide accurate descriptions and website links
- Test the installation on a Windows machine
- Place in the appropriate category

### Adding Configurations

When adding configurations:
- Test changes on Windows 10 and 11
- Document any side effects or warnings
- Mark as recommended only if widely beneficial
- Specify if restart is required
- Include reversible commands when possible

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Software metadata and installation via [Winget](https://github.com/microsoft/winget-cli)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI design inspired by classic Windows 98 interface
- Community contributions and suggestions

## Disclaimer

This tool generates scripts that modify system settings and install software. Always review generated scripts before execution. The authors are not responsible for any system issues resulting from script execution. Use at your own risk and ensure you have backups of important data.
