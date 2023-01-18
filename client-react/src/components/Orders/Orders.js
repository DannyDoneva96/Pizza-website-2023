import './Orders.css'


export const Orders = (props) => {


    return(

        <div>
        <div className="container">
          <h1 className="h1-order">Welcome to your order list</h1>
          <div className="order" >
            <p className="order-name p-order">name</p>
            <p className="price-order p-order">size price$</p>
            <p className="delivery p-order" />
            <div className="approve">
              <button className="button-order">Accept</button><button className="button-order">Cancel</button>
            </div>
          </div>
        </div>
     
        </div>

    

    )
}