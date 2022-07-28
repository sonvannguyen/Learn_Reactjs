import {useState, useEffect} from 'react'
import SliderData from '../assets/fake-data/hero-slider'
import { BiRightArrowAlt, BiLeftArrowAlt} from "react-icons/bi";


const Slider = () => {
    const [slideActive, setSlideActive] = useState(1)
    const totalSlide = SliderData.length

    const handleNextSlide = () => {
        slideActive === totalSlide ? setSlideActive(1) : setSlideActive(slideActive + 1)
    }
    const handlePrevSlide = () => {
        slideActive === 1 ? setSlideActive(totalSlide) : setSlideActive(slideActive - 1)
    }
    useEffect(()=> {
        const autoSlide = setInterval(()=> {
            handleNextSlide()
        }, 3000)
        return ()=> {
            clearInterval(autoSlide)
        }
    }, [slideActive])
    return ( 
        <div className='slide container'>
        {
                SliderData.map((item, index) => (
                    <div
                         key={index}
                         className={slideActive === index + 1 ? 'slide__item slide__active' : 'slide__item'}
                    >
                        <div className="slide__item__info">
                            <h1 className="slide__item__info__title" style={{color: item.color}}>
                                {item.title}
                            </h1>
                            <p className="slide__item__info__desc">
                                {item.description}
                            </p>
                            <button className="slide__item__info__btn" style={{backgroundColor: item.color}} >
                                Xem chi tiết...
                            </button>
                        </div>
                        <img src= {item.img} alt="" className="slide__item__image" />

                        <div className="slide__wrap__icon">
                            <BiLeftArrowAlt onClick={handlePrevSlide} className='slide__icon'/>
                            <span className="slide__posCurrent">{slideActive} / {totalSlide}</span>
                            <BiRightArrowAlt onClick={handleNextSlide} className='slide__icon'/>
                        </div>

                    </div>
                ))
            }
        </div>
     );
}
//  
export default Slider;
