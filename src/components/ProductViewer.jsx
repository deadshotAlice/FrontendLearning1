
import useMacbookStore from '../store/index.js';
const ProductViewer = () => {
    const {setColor,setScale} = useMacbookStore();
    return (
        <section id="product-viewer">
            <h2 style={{color:"white",}}>Take a closer look</h2>
        <div className="info">MacBook Pro 16</div>
        <div className="control">
        <div className="color-control">
        <div onClick={()=>setColor('#abd5bd')} className="light"></div>
            <div className="dark"></div>
        </div>
            <div className="size-control">
                <div onClick={()=>setScale(0.08)}><p>14"</p></div>
                <div><p>16"</p></div>
            </div>
        </div>
        </section>


    )
}
export default ProductViewer
