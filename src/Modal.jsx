const styles = {
  color: {
    modal1: "bg-blue-500 hover:bg-blue-600",
    modal2: "bg-green-500 hover:bg-green-600",
  },
  size: {
    small: "text-sm px-4 py-2",
    medium: "text-md px-6 py-3",
  },
};

export default function Modal(props) {
  const { color, size, show, onClose } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  if (!show) {
    return null;
  }

  return (
    <div
      className={`rounded-lg ${colorClass} ${sizeClass}  border rounded-lg bg-gray-600`}
    >
      <div className="flex items-start justify-between item-center rounded-t border-b p-5">
        Small modal
        <button
          className=" bg-slate-700 hover:bg-slate-500  border border-black rounded-lg px-2 m-1"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="p-6 border-b">
        <div className="space-y-6 p-6">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-2 m-4">
        <button
          className="text-white bg-green-700 border border-transparent hover:bg-green-800 font-medium rounded-xl p-2"
          onClick={onClose}
        >
          I accept
        </button>
        <button
          className="text-gray bg-red-700 border border-transparent hover:bg-red-800 font-medium rounded-xl p-2"
          onClick={onClose}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
