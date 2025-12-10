# Contributing to Windows Post-Install Script Generator

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
  - [Adding Software to the Catalog](#adding-software-to-the-catalog)
  - [Adding System Configurations](#adding-system-configurations)
  - [Modifying the UI](#modifying-the-ui)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Labels](#labels)

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/win-post-install.git`
3. Create a new branch: `git checkout -b feat/your-feature-name`

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
cd win-post-install
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
win-post-install/
├── src/
│   ├── components/          # React components
│   │   ├── ActionBar/       # Download/action buttons
│   │   ├── Common/          # Reusable UI components
│   │   ├── ConfigurationSelector/  # System configs UI
│   │   ├── Layout/          # Header, Footer, Layout
│   │   └── SoftwareSelector/       # Software selection UI
│   ├── data/
│   │   ├── software-catalog.js     # Software definitions (115+ apps)
│   │   ├── configurations.js       # System configurations (80 tweaks)
│   │   └── categories.js           # Category definitions
│   ├── generators/
│   │   ├── bat-generator.js        # Batch script generation
│   │   └── script-utils.js         # Helper utilities
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   └── utils/               # Utility functions
├── .github/
│   ├── workflows/           # GitHub Actions (CI/CD)
│   └── ISSUE_TEMPLATE/      # Issue templates
└── public/                  # Static assets
```

## How to Contribute

### Adding Software to the Catalog

Each software is defined in its own file: `src/data/software/<category>/<software-id>.js`

The main catalog file `src/data/software-catalog.js` automatically imports all individual files.

#### Software Object Schema

```javascript
{
  id: 'unique-identifier',        // lowercase, hyphenated (e.g., 'visual-studio-code')
  name: 'Display Name',           // Official software name
  description: 'Brief description of what the software does',
  category: 'category-id',        // Must match a category from categories.js
  wingetId: 'Publisher.AppName',  // Verified winget package ID
  icon: IconComponent,            // React icon component (see Icons section)
  iconColor: '#HEX_COLOR',        // Optional: brand color for the icon
  popular: true,                  // Optional: highlight as popular
  requiresAdmin: true,            // Optional: requires admin to install
  license: 'free'                 // 'free', 'paid', or 'open-source'
}
```

#### Finding the Winget ID

Run this command on Windows to find the correct package ID:

```powershell
winget search "software name"
```

Use the exact ID from the results (e.g., `Microsoft.VisualStudioCode`).

#### Icons

We use [React Icons](https://react-icons.github.io/react-icons/). Import icons from:

- `react-icons/si` - Simple Icons (brand logos) - **preferred for software**
- `react-icons/fa` - Font Awesome
- `react-icons/fi` - Feather Icons
- `react-icons/vsc` - VS Code Icons

Example:
```javascript
import { SiVisualstudiocode } from 'react-icons/si';
```

If an official icon doesn't exist, use a generic icon from Feather (`fi`) or create a custom one in `src/assets/icons/`.

#### Available Categories

| Category ID | Description |
|-------------|-------------|
| `browsers` | Web browsers |
| `communication` | Messaging, email, video calls |
| `media-players` | Audio/video players |
| `productivity` | Office, notes, organization |
| `development` | IDEs, code editors, dev tools |
| `media-creation` | Photo, video, audio editing |
| `gaming` | Game launchers, gaming utilities |
| `security` | VPNs, password managers, privacy |
| `cloud-storage` | Cloud sync and backup |
| `utilities` | System utilities, compression |
| `antivirus` | Antivirus and protection |
| `drivers` | Graphics, audio drivers |
| `runtimes` | Runtime libraries (.NET, VC++, Java) |

#### Example: Adding New Software

1. Create a new file: `src/data/software/productivity/notion.js`
2. Add the software object:

```javascript
export default {
  id: 'notion',
  name: 'Notion',
  description: 'All-in-one workspace for notes, docs, and collaboration',
  category: 'productivity',
  wingetId: 'Notion.Notion',
  icon: 'SiNotion',
  iconColor: '#000000',
  popular: true,
  requiresAdmin: true,
  license: 'free'
};
```

3. The software will be automatically imported by `software-catalog.js`

**No need to edit the main catalog file!** Just create your file in the correct category folder.

### Adding System Configurations

Each configuration is defined in its own file: `src/data/configurations/<category>/<config-id>.js`

The main configurations file `src/data/configurations.js` automatically imports all individual files.

#### Configuration Object Schema

```javascript
{
  id: 'unique-id',               // lowercase, hyphenated
  name: 'Display Name',
  description: 'What this configuration does',
  category: 'category-id',       // Must match a config category
  registryBat: [                 // Array of registry commands
    'reg add "HKCU\\Path" /v Value /t REG_DWORD /d 1 /f'
  ],
  commandBat: [                  // Array of PowerShell/CMD commands
    'powercfg -h off'
  ],
  recommended: false,            // Show as recommended
  requiresRestart: false,        // Needs system restart
  requiresAdmin: true,           // Needs admin privileges
  warning: 'Optional warning'    // Show warning to users
}
```

#### Configuration Categories

| Category ID | Description |
|-------------|-------------|
| `file-explorer` | File Explorer settings |
| `performance` | Performance optimizations |
| `gaming` | Gaming optimizations |
| `privacy` | Privacy and telemetry |
| `visual` | Visual customization |
| `windows-update` | Windows Update settings |
| `start-menu` | Start Menu & Taskbar |
| `network` | Network settings |
| `cleanup` | Bloatware removal |

#### Example: Adding New Configuration

1. Create a new file: `src/data/configurations/privacy/disable-web-search.js`
2. Add the configuration object:

```javascript
export default {
  id: 'disable-web-search',
  name: 'Disable Web Search in Start Menu',
  description: 'Prevents Windows from searching the web when using Start Menu search',
  category: 'privacy',
  registryBat: [
    'reg add "HKCU\\Software\\Policies\\Microsoft\\Windows\\Explorer" /v DisableSearchBoxSuggestions /t REG_DWORD /d 1 /f'
  ],
  recommended: true,
  requiresRestart: false,
  requiresAdmin: false
};
```

3. The configuration will be automatically imported by `configurations.js`

**No need to edit the main configurations file!** Just create your file in the correct category folder.

### Modifying the UI

When modifying UI components:

1. **Understand the component structure** - Components are in `src/components/`
2. **Follow existing patterns** - Match the Windows 98 retro style
3. **Use Tailwind CSS** - All styling uses Tailwind with custom theme
4. **Test responsiveness** - Ensure changes work on different screen sizes

#### Theme Colors (Tailwind)

```css
win95-white: '#ffffff'
win95-light-gray: '#c0c0c0'
win95-dark-gray: '#808080'
win95-blue: '#000080'
win95-red: '#ff0000'
```

## Code Style Guidelines

- Use functional components with hooks
- Use ES6+ features (arrow functions, destructuring, etc.)
- Keep components small and focused
- Use meaningful variable and function names
- Add comments only when logic isn't self-evident

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Description | Example |
|--------|-------------|---------|
| `feat:` | New feature | `feat: add Discord to catalog` |
| `fix:` | Bug fix | `fix: correct winget ID for Firefox` |
| `docs:` | Documentation | `docs: update contributing guide` |
| `refactor:` | Code refactoring | `refactor: simplify script generator` |
| `chore:` | Maintenance | `chore: update dependencies` |
| `test:` | Tests | `test: add unit tests for generator` |

Example commit messages:
```
feat: add Notion to productivity category
fix: resolve scroll issue in software selector
docs: add instructions for adding custom icons
```

## Pull Request Process

1. **Create a branch** from `main` with a descriptive name:
   - `feat/add-notion-software`
   - `fix/scroll-issue`
   - `docs/update-readme`

2. **Make your changes** following the guidelines above

3. **Test locally**:
   ```bash
   npm run lint    # Check for linting errors
   npm run build   # Ensure build succeeds
   npm run dev     # Test in browser
   ```

4. **Commit** using conventional commit format

5. **Push** to your fork and create a Pull Request

6. **Fill out the PR template** completely

7. **Wait for CI** - Both lint and build checks must pass

8. **Address feedback** if reviewers request changes

## Labels

Use these labels to categorize your issues and PRs:

| Label | Description | Use for |
|-------|-------------|---------|
| `catalog` | Software catalog changes | Adding/modifying software |
| `config` | Configuration changes | Adding/modifying system configs |
| `ui` | UI/UX modifications | Visual and interaction changes |
| `docs` | Documentation | README, guides, comments |
| `bug` | Bug reports | Issues and bug fixes |
| `enhancement` | New features | Feature requests and implementations |
| `ci` | CI/CD changes | Workflow and pipeline updates |

---

## Questions?

If you have questions or need help:

1. Check existing [issues](https://github.com/kaic/win-post-install/issues)
2. Open a new issue with your question
3. Read through the codebase - it's well-structured and documented

Thank you for contributing!
