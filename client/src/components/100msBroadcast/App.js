import './App.css';
import JoinRoom from './JoinRoom.js'
import Room from './Room.js';
import './styles.css'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

function App() {
  
  const isConnected = useHMSStore(selectIsConnectedToRoom)

  return (
    
    <div className="App wrapper"> 
      {isConnected
        ? <Room />
        : <JoinRoom />
      }
    </div>
  );
}

export default App;
