function Cards({data}) {
    return ( 
        <div className="cards-block">
            {data.map(h=><div className="card"><h3>{h}</h3></div>)}
        </div>
     );
}

export default Cards;