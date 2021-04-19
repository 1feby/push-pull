import {useEffect , useState} from 'react';
import io from 'socket.io-client';
import {Widget,addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const Base_Url='http://localhost:8000';

const socket=io(Base_Url);

const WS=()=>{
    const[ClientId , setClientId]=useState('')
    const handleNewUserMessage=(message)=>{
      
        socket.emit('message',{id : ClientId,message: message});
   
     };
    useEffect(()=>{
        socket.on('message',(message)=>{
            addResponseMessage(message.message);
        });
    },[]);
    return(
        <>
        <Widget 
            handleNewUserMessage={handleNewUserMessage}
        />
       
        <input value={ClientId} onChange={(e)=>setClientId(e.target.value)}></input>
        </>
    );
};
export default WS;