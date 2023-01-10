import './Orders.css'


export const Orders = (props) => {


    return(

        <div>
        {/* Admin */}
        <div className="container">
          <h1>Welcome Owner</h1>
          <div className="order" >
            <p className="order-name">name</p>
            <p className="price">size price$</p>
            <p className="delivery" />
            <div className="approve">
              <button>Accept</button><button>Cancel</button>
            </div>
          </div>
        </div>
        {/* Users */}
        <div className="container-order">
          <div >
            <div className="order">
              <div className="container-orders">
                <h1>Your Order : </h1>
                <p className="name-order" />
                <p> size </p>
                <p>Total : <span className="price">$</span></p>
                <div>
                  <button>Submit your Order</button><button>Delete your Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

    )
}