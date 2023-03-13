import './index.css';

import CarouselSlider, {
    CarouselSliderProps,
} from '../../../Components/CarouselSlider';

export type SliderCarouselAndTextDisplayProps = {
    quote: string;
    author: string;
    textTitle: string;
    text: string;
    carouselProps: CarouselSliderProps;
};

function SliderCarouselAndTextDisplay({
    quote,
    author,
    textTitle,
    text,
    carouselProps,
}: SliderCarouselAndTextDisplayProps) {
    return (
        <div className="quote-slider-content-main">
            <div className="quote-slider-quote-div">
                <p className="quote-slider-quote">{quote}</p>
                <p className="quote-slider-author">{author}</p>
            </div>
            <div className="quote-slider-text-div">
                <p className="quote-slider-text-title">{textTitle}</p>
                <p className="quote-slider-text-content">&emsp;{text}</p>
            </div>
            <div className="quote-slider-carousel">
                <CarouselSlider
                    collection={carouselProps.collection}
                    itemsType={carouselProps.itemsType}
                    sliderHeight={carouselProps.sliderHeight}
                />
            </div>
        </div>
    );
}

export default SliderCarouselAndTextDisplay;
