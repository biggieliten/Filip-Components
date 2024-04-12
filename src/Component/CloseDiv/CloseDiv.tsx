import { useEffect, useRef, useState } from "react";
import "./CloseDiv.scss";

const CloseDiv = () => {
  const [close, setClose] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) {
        setClose(true);
        // console.log(boxRef);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [close]);

  return (
    <>
      <div ref={boxRef} className={`closeThisBox ${close ? "close" : ""}`}>
        <button
          className="closeButton"
          onClick={() => {
            setClose(!close);
          }}
        >
          &times;
        </button>
      </div>
    </>
  );
};

export default CloseDiv;
