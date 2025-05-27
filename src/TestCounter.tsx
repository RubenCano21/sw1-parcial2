import { useState } from 'react';

export default function TestCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Test contador básico</h1>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </div>
  );
}