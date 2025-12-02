/**
 * Reusable badge component for license types and attributes
 */
const Badge = ({ color, textColor = 'white', children }) => {
  return (
    <span
      className="px-1 text-[10px] border border-black"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
