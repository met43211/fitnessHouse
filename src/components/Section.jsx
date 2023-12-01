function Section({img, h, p, reverse}) {
    return ( 
        <section className={reverse&&'reverse'}>
            <div className="section-img">
                <img src={img} alt="" />
            </div>
            <div className="section-text">
                <h1>{h}</h1>
                <p>{p}</p>
            </div>
        </section>
     );
}

export default Section;