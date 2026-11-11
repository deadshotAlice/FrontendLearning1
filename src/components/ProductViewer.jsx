
const ProductViewer = () => {
    return (
        <section id="product-viewer">
            <h2 style={{color:"white",}}>Take a closer look</h2>
        <div className="info">MacBook Pro 16</div>
        <div className="control">
        <div className="color-control">
            <div className="light"></div>
            <div className="dark"></div>
        </div>
            <div className="size-control">
                <div><p>14</p></div>
                <div><p>16</p></div>
            </div>
        </div>
        </section>


    )
}
export default ProductViewer
