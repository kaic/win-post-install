/**
 * Reusable badge component for license types and attributes
 */
const Badge = ({ color, textColor = 'white', children }) => {
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 text-[10px] leading-none border border-black"
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
