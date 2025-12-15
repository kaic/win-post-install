import { memo } from 'react';
import { useSelection } from '../../context/SelectionContext';
import SoftwareIcon from '../Common/SoftwareIcon';
import Badge from '../Common/Badge';
import { LICENSE_COLORS, BADGE_COLORS, BADGE_LABELS } from '../../constants';

const SoftwareCard = memo(({ software }) => {
  const { selectedSoftware, toggleSoftware } = useSelection();
  const isSelected = selectedSoftware.includes(software.id);

  return (
    <div
      className={`cursor-pointer ${isSelected ? 'win98-inset win98-selected' : 'win98-raised'}`}
      style={{
        padding: '12px',
        backgroundColor: isSelected ? 'var(--win98-blue-dark)' : 'var(--win98-gray-light)'
      }}
      onClick={() => toggleSoftware(software.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSoftware(software.id);
        }
      }}
      aria-label={`${isSelected ? 'Unselect' : 'Select'} ${software.name}`}
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
          <div className="flex items-center gap-2 mb-1">
            <SoftwareIcon iconName={software.icon} color={software.iconColor} size={20} />
            <div className="flex-1">
              <div
                className="flex items-center gap-1.5 flex-wrap text-[11px] font-bold"
                style={{
                  color: isSelected ? 'var(--win95-text-inverse)' : 'var(--win98-black)'
                }}
              >
                <span>{software.name}</span>
                {software.popular && (
                  <Badge color={BADGE_COLORS.popular}>
                    {BADGE_LABELS.popular}
                  </Badge>
                )}
                {software.license && LICENSE_COLORS[software.license] && (
                  <Badge
                    color={LICENSE_COLORS[software.license]}
                    textColor={software.license === 'paid' ? 'black' : 'white'}
                  >
                    {BADGE_LABELS[software.license]}
                  </Badge>
                )}
              </div>
              <p
                className="text-[10px] mt-0.5"
                style={{
                  color: isSelected ? '#e0e0e0' : 'var(--win98-gray-dark)'
                }}
              >
                {software.description}
              </p>
              {software.notes && (
                <p
                  className="text-[10px] italic mt-0.5"
                  style={{
                    color: isSelected ? '#d0d0d0' : 'var(--win98-gray-medium)'
                  }}
                >
                  Note: {software.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SoftwareCard;
