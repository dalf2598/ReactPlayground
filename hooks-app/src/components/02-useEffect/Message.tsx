import { useEffect, useState } from "react";

const Message: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mouseMove = (event: any) => {
    setCoords({
      x: event.x,
      y: event.y,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Coords</h3>
      <p>{x}</p>
      <p>{y}</p>
    </>
  );
};

export default Message;
