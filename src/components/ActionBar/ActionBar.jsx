import { useSelection } from '../../context/SelectionContext';
import { useScriptGenerator } from '../../hooks/useScriptGenerator';
import { useState } from 'react';
import WinDialog from '../Common/WinDialog';

const ActionBar = () => {
  const { selectedSoftware, selectedConfigs, clearAll } = useSelection();
  const { downloadScript } = useScriptGenerator();
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  const totalSelected = selectedSoftware.length + selectedConfigs.length;

  const handleDownload = () => {
    if (totalSelected === 0) return;
    setShowDownloadDialog(true);
  };

  const handleClear = () => {
    if (totalSelected === 0) return;
    setShowClearDialog(true);
  };

  return (
    <div className="win98-inset" style={{
      padding: '8px',
      marginBottom: '8px',
      backgroundColor: 'var(--win95-light-gray)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Left: Selection count */}
          <div style={{ fontSize: '11px' }}>
            <span style={{ fontWeight: 'bold' }}>{totalSelected}</span>
            <span> items selected </span>
            <span style={{ color: 'var(--win98-gray-medium)' }}>• </span>
            <span>
              {selectedSoftware.length} software, {selectedConfigs.length} configs
            </span>
          </div>

          {/* Right: Action buttons */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <button
              onClick={handleDownload}
              disabled={totalSelected === 0}
              className="win98-button win98-button-primary"
              style={{ minWidth: '120px' }}
              aria-label={`Download installation script for ${totalSelected} selected items`}
            >
              Download Script
            </button>
            <button
              onClick={handleClear}
              disabled={totalSelected === 0}
              className="win98-button win98-button-danger"
              aria-label={`Clear all ${totalSelected} selected items`}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      <WinDialog
        open={showDownloadDialog}
        title="Download Script"
        icon="📄"
        onClose={() => setShowDownloadDialog(false)}
        primaryAction={{
          label: 'Download',
          onClick: () => {
            downloadScript();
            setShowDownloadDialog(false);
          },
          variant: 'primary',
        }}
        secondaryAction={{
          label: 'Close',
          onClick: () => setShowDownloadDialog(false),
        }}
      >
        Right-click the downloaded .bat file and select "Run as Administrator"
      </WinDialog>

      <WinDialog
        open={showClearDialog}
        title="Clear All"
        icon="⚠️"
        onClose={() => setShowClearDialog(false)}
        primaryAction={{
          label: 'Clear',
          onClick: () => {
            clearAll();
            setShowClearDialog(false);
          },
          variant: 'danger',
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => setShowClearDialog(false),
        }}
      >
        Clear all {totalSelected} selections?
      </WinDialog>
    </div>
  );
};

export default ActionBar;
