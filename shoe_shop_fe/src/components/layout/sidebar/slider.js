import './slider.css'

function slider() {

    return (
        <div class='main'>
            <div class="slider">
                <div id="slideshow">
                    <img src={require('../img/img1.webp')} alt="Slide 3" class="slide" />
                    <img src={require('../img/img2.webp')} alt="Slide 2" class="slide" />
                    <img src={require('../img/img3.webp')} alt="Slide 4" class="slide" />
                    <div id="btn-back"><i class="fa-solid fa-chevron-left"></i></div>
                    <div id="btn-next"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            </div>

                <div class="Top_wrapper__op9fj">
                    <div class="Top_container__nX+Y8">
                        <div class="Top_left__ZoHsd">
                            <img class="Top_img-upper__6KNuL" src={require('../img/img3.jpg')}/>
                            <img class="Top_img-under__y-yeE" src={require('../img/img4.webp')} />
                        </div>
                        <div class="Top_center__Fg+xp">
                            <img src={require('../img/img1.webp')} />
                            <div class="Top_title__ZfHaq">BEST SELLER</div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

export default slider;