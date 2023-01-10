import './Orders.css'


export const Orders = (props) => {


    return(

        <div>
        {/* Admin */}
        <div className="container">
          <h1 className="h1-order">Welcome Owner</h1>
          <div className="order" >
            <p className="order-name p-order">name</p>
            <p className="price-order p-order">size price$</p>
            <p className="delivery p-order" />
            <div className="approve">
              <button className="button-order">Accept</button><button className="button-order">Cancel</button>
            </div>
          </div>
        </div>
        {/* Users */}
        <div className="container-order">
          <div >
            <div className="order">
              <div className="container-orders">
                <h1>Your Order : </h1>
                <p  className="name-order p-order" />
                <p className='p-order'> size </p>
                <p className='p-order'>Total : <span className="price-order">$</span></p>
                <div>
                  <button className="button-order">Submit your Order</button><button className="button-order">Delete your Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

    )
}