import { useEffect, useId, useRef } from 'react';

const WinDialog = ({
  open,
  title,
  children,
  primaryAction,
  secondaryAction,
  onClose,
  icon = 'ℹ️',
  width = 420,
}) => {
  const titleId = useId();
  const dialogRef = useRef(null);
  const primaryButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      if (primaryButtonRef.current) {
        primaryButtonRef.current.focus();
      } else if (dialogRef.current) {
        dialogRef.current.focus();
      }
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="win-dialog-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="xp-window win-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex={-1}
        style={{ width }}
      >
        <div className="xp-title-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '16px' }}>{icon}</span>
            <span id={titleId}>{title}</span>
          </div>
          <div className="xp-title-buttons">
            <button
              className="xp-title-button xp-title-button-close"
              title="Close"
              onClick={() => onClose?.()}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        </div>

        <div style={{ padding: '12px' }}>
          <div style={{ marginBottom: '12px', fontSize: '11px', lineHeight: 1.4 }}>
            {children}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', flexWrap: 'wrap' }}>
            {secondaryAction && (
              <button
                className="win98-button"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </button>
            )}
            {primaryAction && (
              <button
                ref={primaryButtonRef}
                className={`win98-button ${primaryAction.variant === 'danger' ? 'win98-button-danger' : 'win98-button-primary'}`}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinDialog;

