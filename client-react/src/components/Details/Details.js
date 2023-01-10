  import './Details.css'

 export const Details =(props )=> {

    return (  <div className="product-details-container">
    <article>
      <div className="pizzaImg-container">
        <img src="{{pizza.imgUrl}}" alt="" /> 
      </div>
      <form  className="product-details-form">
        <h1 name="productName" className="productName">name</h1>
        <p name="description" className="descr">des</p>
        <fieldset >
            {/* if piza */}
          <legend>Select size</legend>
          <div>
            <input type="radio" id="small" name="size" defaultValue="small"  defaultChecked />
            <label htmlFor="small">Small</label>
          </div>
          <div>
            <input type="radio" id="medium" name="size" defaultValue="medium"  />
            <label htmlFor="medium">Medium</label>
          </div>
          <div>
            <input type="radio" id="large" name="size" defaultValue="large"  />
            <label htmlFor="large">Large</label>
          </div>
          <div>
            <input type="radio" id="xxl" name="size" defaultValue="xxl"  />
            <label htmlFor="xxl">XXL</label>
          </div>
        </fieldset>
        <fieldset >
                        {/* if shake */}

          <legend>Select size</legend>
          <div>
            <input type="radio" id="small" name="size" defaultValue="small"  defaultChecked />
            <label htmlFor="small">Strawberry</label>
          </div>
          <div>
            <input type="radio" id="medium" name="size" defaultValue="medium"  />
            <label htmlFor="medium">Chocolate</label>
          </div>
          <div>
            <input type="radio" id="large" name="size" defaultValue="large"  />
            <label htmlFor="large">Mango</label>
          </div>
          <div>
            <input type="radio" id="xxl" name="size" defaultValue="xxl"  />
            <label htmlFor="xxl">Apple</label>
          </div>
        </fieldset>
        <fieldset >
                        {/* if drink */}
          <legend>Select size</legend>
          <div>
            <input type="radio" id="large" name="size" defaultValue="large"  />
            <label htmlFor="large">Can</label>
          </div>
          <div>
            <input type="radio" id="xxl" name="size" defaultValue="xxl"  />
            <label htmlFor="xxl">Bottle</label>
          </div>
        </fieldset>
      
        <div  className="error-mes"><i className="fa-solid fa-triangle-exclamation" />err</div>
        <button className="btn-add">Add to cart</button>
      </form>
    </article>
  </div>)
 }