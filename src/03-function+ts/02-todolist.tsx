import React ,{ useRef, useState } from "react";

export default function App() {
  const mytext = useRef<HTMLInputElement>(null);
  const [list, setlist] = useState<string[]>([]);
  return (
    <div>
      <input type="text" ref={mytext} />
      <button
        onClick={() => {
          console.log((mytext.current as HTMLInputElement).value);
          setlist([...list, (mytext.current as HTMLInputElement).value]);
        }}
      >
        click
      </button>

      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

const Child: React.FC = (props) => {
  return <div>child</div>;
};
