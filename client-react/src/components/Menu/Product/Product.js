


export const Product = (props) => {

    return(

        <article className = "pizza-article">
            <img src={props.imgUrl} alt="" />
            <h3 className="pizza-name">{props.name}</h3>
            <p className="desc">{props.description}</p>
        </article>
    )
}
