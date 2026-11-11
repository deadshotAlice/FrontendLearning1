
import useMacbookStore from '../store/index.js';
const ProductViewer = () => {
    const {color,scale,setColor,setScale} = useMacbookStore();
    return (
        <section id="product-viewer">
            <h2 style={{color:"white",}}>Take a closer look</h2>
        <div className="info">MacBook Pro {scale} in {color}</div>
        <div className="control">
        <div className="color-control">
        <div onClick={()=>setColor('grey')} className={`grey ${color === 'grey' ? 'active' : ''}`}></div>
            <div onClick={()=>setColor('silver')} className={`silver ${color === 'silver' ? 'active' : ''}`}></div>
        </div>
            <div className="size-control">
                <div onClick={()=>setScale(14)} className={scale === 14 ? 'active' : ''}><p>14"</p></div>
                <div onClick={()=>setScale(16)} className={scale === 16 ? 'active' : ''}><p>16"</p></div>
            </div>
        </div>
        </section>


    )
}
export default ProductViewer
