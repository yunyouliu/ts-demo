import { useState } from "react";

export default function App() {
  const [state, setState] = useState<string>("kerwin");
  return (
    <div>app-{state.substring(0, 1).toUpperCase() + state.substring(1)}
    <button onClick={()=>{
      setState("xiaoming")
    }}>click</button>
    </div>
  );
}
