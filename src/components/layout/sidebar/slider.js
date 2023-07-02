import './slider.css'

function slider() {

    return (
        <div className='main'>
            <div className="slider">
                <div id="slideshow">
                    <img src={require('../img/img1.webp')} alt="Slide 3" className="slide" />
                    <img src={require('../img/img2.webp')} alt="Slide 2" className="slide" />
                    <img src={require('../img/img3.webp')} alt="Slide 4" className="slide" />
                    <div id="btn-back"><i className="fa-solid fa-chevron-left"></i></div>
                    <div id="btn-next"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>

                <div className="Top_wrapper__op9fj">
                    <div className="Top_container__nX+Y8">
                        <div className="Top_left__ZoHsd">
                            <img className="Top_img-upper__6KNuL" src={require('../img/img3.jpg')}/>
                            <img className="Top_img-under__y-yeE" src={require('../img/img4.webp')} />
                        </div>
                        <div className="Top_center__Fg+xp">
                            <img src={require('../img/img1.webp')} />
                            <div className="Top_title__ZfHaq">BEST SELLER</div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

export default slider;