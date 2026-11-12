import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId =setInterval(() => setTime(new Date()),1000);
    return () => clearInterval(timerId);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return (
    <div className="clock-container ">
      <div className="clock">
        {formattedTime}
      </div>

    </div>
  );
}

export default App;
