const CarouselItem = ({carousel_img}) => {
    return(
        <div className="carousel_item">
            <img src={carousel_img} alt="" />
            <div className="carousel_body">
                <h1>Cosmic</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis architecto numquam excepturi aperiam voluptates impedit, recusandae exercitationem debitis vero. Labore aut recusandae dolorum eum velit error, commodi pariatur corporis quas eius odit, magni soluta numquam ipsam, laudantium eveniet debitis. Esse inventore eveniet repellat aut fugit tenetur sint facere nemo?</p>
                <div className="data">
                    
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;