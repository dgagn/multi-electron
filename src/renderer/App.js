import Time from './time';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="">
      <Time />
    </div>
  );
}

export default App;
