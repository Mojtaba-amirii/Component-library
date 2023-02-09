const styles = {
  color: {
    alert1: "bg-red-500 hover:bg-red-600",
    alert2: "bg-green-500 hover:bg-green-600",
  },
  size: {
    small: "text-sm px-4 py-2",
    medium: "text-md px-6 py-3",
  },
};

export default function Alert(props) {
  const { color, size, icon, onDismiss } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      className={`rounded-lg ${colorClass} ${sizeClass} flex flex-row justify-center items-center`}
    >
      <div>{icon}</div>
      <span>
        <span className="font-medium">Info alert!</span>
        Change a few things up and try submit again.
      </span>
      <button
        className=" bg-slate-700 hover:bg-slate-500  border border-black rounded-lg px-2 m-1"
        onClick={() => onDismiss()}
      >
        X
      </button>
    </div>
  );
}
