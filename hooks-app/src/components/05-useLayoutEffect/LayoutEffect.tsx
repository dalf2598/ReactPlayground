import { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useFecth from "../../hooks/useFetch";
import "./layout.css";

const LayoutEffect: React.FC = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFecth(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote } = data ? data[0] : { quote: "" };
  
  const pTag = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(() => pTag.current?.getClientRects());
  }, [quote])

  return (
    <div>
      <h1>BreakingBad Quotes!!! </h1>
      <hr />

      <blockquote className="blockquote text-center">
        <p ref={pTag} className="mb-0">{quote}</p>
      </blockquote>
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>
      <button className="btn btn-primary" onClick={() => increment()}>
        Next Quote
      </button>
    </div>
  );
};

export default LayoutEffect;
