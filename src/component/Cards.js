function Cards(props)
{
return(
<div className="card" style={{width: "18rem"}}>
    <h1>title :{props.image}</h1>
  <img src="https://www.computerhope.com/jargon/j/javascript.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
);


}
export default Cards;