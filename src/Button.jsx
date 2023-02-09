const styles = {
  color: {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-yellow-500 hover:bg-yellow-600",
  },
  size: {
    small: "text-sm px-4 py-2",
    medium: "text-md px-6 py-3",
  },
  disabled: "bg-gray-300 hover:bg-gray-300",
};

export default function Button(props) {
  const { title, color, size, onClick, disabled } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = disabled ? styles.disabled : "";
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(title)}
      className={`rounded-lg ${colorClass} ${sizeClass} ${disabledClass}`}
    >
      {title}
    </button>
  );
}
