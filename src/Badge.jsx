const styles = {
  color: {
    badge1: "bg-gray-500 hover:bg-gray-600",
    badge2: "bg-orange-500 hover:bg-orange-600",
  },
  size: {
    s: "text-sm px-4 py-2",
    m: "text-md px-6 py-3",
  },
};

export default function Badge(props) {
  const { title, color, size, icon } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      className={`rounded-lg ${colorClass} ${sizeClass} flex justify-center items-center m-2`}
    >
      <div>{icon}</div>
      {title}
    </div>
  );
}
