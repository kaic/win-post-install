import { memo } from 'react';
import { useSelection } from '../../context/SelectionContext';
import Badge from '../Common/Badge';
import { BADGE_COLORS, BADGE_LABELS } from '../../constants';

const ConfigOption = memo(({ config }) => {
  const { selectedConfigs, toggleConfig } = useSelection();
  const isSelected = selectedConfigs.includes(config.id);

  return (
    <div
      className={`cursor-pointer ${isSelected ? 'win98-inset win98-selected' : 'win98-raised'}`}
      style={{
        padding: '12px',
        backgroundColor: isSelected ? 'var(--win98-blue-dark)' : 'var(--win98-gray-light)'
      }}
      onClick={() => toggleConfig(config.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleConfig(config.id);
        }
      }}
      aria-label={`${isSelected ? 'Unselect' : 'Select'} ${config.name} configuration`}
      aria-pressed={isSelected}
    >
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={isSelected}
          readOnly
          className="win98-checkbox mt-0.5 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap mb-1">
            <h4
              className="text-[11px] font-bold"
              style={{
                color: isSelected ? 'var(--win95-text-inverse)' : 'var(--win98-black)'
              }}
            >
              {config.name}
            </h4>
            {config.recommended && (
              <Badge color={BADGE_COLORS.recommended}>
                {BADGE_LABELS.recommended}
              </Badge>
            )}
            {config.requiresAdmin && (
              <Badge color={BADGE_COLORS.adminRequired} textColor="black">
                {BADGE_LABELS.adminRequired}
              </Badge>
            )}
            {config.requiresRestart && (
              <Badge color={BADGE_COLORS.restartRequired}>
                {BADGE_LABELS.restartRequired}
              </Badge>
            )}
          </div>
          <p
            className="text-[10px]"
            style={{
              color: isSelected ? '#e0e0e0' : 'var(--win98-gray-dark)'
            }}
          >
            {config.description}
          </p>
          {config.warning && (
            <p
              className="text-[10px] font-bold mt-1"
              style={{
                color: isSelected ? '#ffaa00' : '#ff6600'
              }}
            >
              ⚠️ {config.warning}
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export default ConfigOption;
