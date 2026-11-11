import {create} from 'zustand';

const useMacbookStore=create((set)=>({
    color:'grey',
    setColor:(color)=>set({color}),
    scale:14,
    setScale:(scale)=>set({scale}),
    reset:(reset)=>set({color:"#2e2c2e",scale:0.08}),
}))
export default useMacbookStore;
