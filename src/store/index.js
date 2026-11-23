import {create} from 'zustand';

const useMacbookStore=create((set)=>({
    color:'silver',
    scale:14,
    texture:'/public/videos/feature-1.mp4',
    setColor:(color)=>set({color}),
    setScale:(scale)=>set({scale}),
    setTexture:(texture)=>set({texture}),
    reset:()=>set({color:'silver',scale:14,texture:'/public/videos/feature-1.mp4'}),
}));
export default useMacbookStore;
