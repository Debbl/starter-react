import { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-2">
      <div className="text-gray-600">count {count}</div>
      <div className="flex items-center gap-x-2">
        <button
          className="rounded-md border px-6 py-1 hover:bg-gray-100"
          onClick={() => setCount((c) => c + 1)}
        >
          +1
        </button>
        <button
          className="rounded-md border px-6 py-1 hover:bg-gray-100"
          onClick={() => setCount((c) => c - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default Index;
