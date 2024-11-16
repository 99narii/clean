import React from 'react';
import Slider from 'react-slick';
import MainImg from '../../Assets/img/main.jpg'
import MainImg1 from '../../Assets/img/main1.jpg'
import MainImg2 from '../../Assets/img/main2.jpg'
import './style.scss';
const BannerSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        MainImg,MainImg1,MainImg2
    ];

    return (
        <div >
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='slider-container'>
                        <img className="slider-image" src={image} alt={`Banner ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                        <div className="slider-overlay">
                            <p className='tit'>원룸 청소 / 오피스텔 청소</p>
                            <p className='sub_tit'>다음 세입자를 위한 배려</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
