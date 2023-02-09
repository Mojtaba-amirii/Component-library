import Button from "./Button";
import Alert from "./Alert";
import { AiTwotoneAlert } from "react-icons/ai";
import { SiOpenbadges } from "react-icons/si";
import Badge from "./Badge";
import Card from "./Card";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  function handleClick(title) {
    console.log("button " + title + " clicked!");
  }

  function onDismiss() {
    return alert("Alert dismissed!");
  }

  const [showModal, setShowModal] = useState(false);
  function onClose() {
    return setShowModal(false);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 m-3 w-full ">
      <Alert color="alert1" icon={<AiTwotoneAlert />} onDismiss={onDismiss} />

      <div>
        <button
          className=" text-white bg-stone-700 border border-transparent hover:bg-stone-800 font-medium rounded-xl p-3"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>

        <Modal show={showModal} size="medium" onClose={onClose} />
      </div>
      <div>
        <Button
          onClick={handleClick}
          title="Done"
          color="primary"
          size="medium"
          disabled
        />
        <Button
          onClick={handleClick}
          title="Undone"
          color="secondary"
          size="medium"
        />
        <Button
          onClick={handleClick}
          title="Click"
          color="secondary"
          size="medium"
          disabled
        />
        <Button
          onClick={handleClick}
          title="UnClick"
          color="primary"
          size="medium"
        />
      </div>
      <div>
        <Badge
          title="2 minutes ago"
          color="badge1"
          size="m"
          icon={<SiOpenbadges />}
        />
        <Badge
          title="3 days ago"
          color="badge2"
          size="m"
          icon={<SiOpenbadges />}
        />
      </div>
      <div>
        <Card
          href={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          imgAlt="A Picture"
          imgSrc="/image-1.jpg"
        />
      </div>
    </div>
  );
}

export default App;
