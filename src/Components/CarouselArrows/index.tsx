import { useEffect, useState } from 'react';

import './index.css';

import Arrow from './../../Assets/Icons/Arrow.png';

type CarouselArrowedProps = {
    collection: Array<string>;
    mainDivWidth: string;
    mainDivHeight: string;
    imgWidth: string;
    imgHeight: string;
};

function CarouselArrowed({
    collection,
    mainDivWidth,
    mainDivHeight,
    imgWidth,
    imgHeight,
}: CarouselArrowedProps) {
    const [imageDisplaying, setImageDisplaying] = useState(0);
    const [lastDirection, setLastDirection] = useState<'left' | 'right'>(
        'left'
    );

    function SetImage(direction: 'left' | 'right') {
        switch (direction) {
            case 'right':
                if (imageDisplaying != collection.length - 1) {
                    setImageDisplaying(imageDisplaying + 1);
                    setLastDirection('right');
                }
                break;

            case 'left':
                if (imageDisplaying != 0) {
                    setImageDisplaying(imageDisplaying - 1);
                    setLastDirection('left');
                }
                break;
        }
    }

    useEffect(() => {
        let image = document.getElementById('carousel-image-displaying');
        if (image != null) {
            image.classList.remove('animate-carousel-image-left');
            image.classList.remove('animate-carousel-image-right');
            setTimeout(() => {
                if (lastDirection == 'right') {
                    image?.classList.add('animate-carousel-image-right');
                } else {
                    image?.classList.add('animate-carousel-image-left');
                }
            }, 1);
        }
    }, [imageDisplaying]);

    return (
        <div
            className="carousel-arrowed-main-div"
            style={{ width: mainDivWidth, height: mainDivHeight }}
        >
            <img
                src={Arrow}
                className="arrows"
                style={{
                    opacity: imageDisplaying == 0 ? 0.1 : 1,
                    cursor: imageDisplaying == 0 ? 'default' : 'pointer',
                }}
                onClick={() => SetImage('left')}
                draggable={false}
            />
            <img
                className="carousel-arrowed-image-displaying"
                id="carousel-image-displaying"
                draggable={false}
                src={collection[imageDisplaying]}
                style={{ width: imgWidth, height: imgHeight }}
            />
            <img
                src={Arrow}
                style={{
                    rotate: '180deg',
                    opacity: imageDisplaying == collection.length - 1 ? 0.1 : 1,
                    cursor:
                        imageDisplaying == collection.length - 1
                            ? 'default'
                            : 'pointer',
                }}
                className="arrows"
                onClick={() => SetImage('right')}
                draggable={false}
            />
        </div>
    );
}

export default CarouselArrowed;
