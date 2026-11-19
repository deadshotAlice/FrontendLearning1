import {create} from 'zustand';

const useMacbookStore=create((set)=>({
    color:'silver',
    scale:14,
    setColor:(color)=>set({color}),

    setScale:(scale)=>set({scale}),
    reset:()=>set({color:'silver',scale:14}),
}));
export default useMacbookStore;
