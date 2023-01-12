

export const Product = ({x}) => {
   {console.log(x)}
    return(
      
         <article className = "pizza-article">
            <img src={x.imgUrl} alt="ghygyh" />
             <h3 className="pizza-name">{x.productName}</h3>
         </article>
    )
}
