import { useEffect, useState } from 'react';

import './index.css';

import Arrow from './../../Assets/Icons/Arrow.png';

type CarouselArrowedProps = {
    collection: Array<string>;
    mainDivWidth: string;
    mainDivHeight: string;
    imgWidth: string;
    imgHeight: string;
    id: string;
};

function CarouselArrowed({
    collection,
    mainDivWidth,
    mainDivHeight,
    imgWidth,
    imgHeight,
    id,
}: CarouselArrowedProps) {
    const [imageDisplaying, setImageDisplaying] = useState(0);
    const [lastDirection, setLastDirection] = useState<'left' | 'right'>(
        'right'
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
        let image = document.getElementById(id);
        if (image != null) {
            image.classList.remove('animate-carousel-image-left');
            image.classList.remove('animate-carousel-image-right');
            setTimeout(() => {
                if (image != null) {
                    if (lastDirection == 'right') {
                        image.classList.add('animate-carousel-image-right');
                    } else {
                        image.classList.add('animate-carousel-image-left');
                    }
                }
            }, 1);
        }
    }, [imageDisplaying]);

    return (
        <div
            className="carousel-arrowed-main-div"
            style={{ width: mainDivWidth, height: mainDivHeight }}
            key={Math.random()}
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
                id={id}
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
            <div className="carousel-images-list">
                {collection.map((obj, index) => {
                    return (
                        <input
                            type="radio"
                            checked={index == imageDisplaying ? true : false}
                            onChange={() => {}}
                            key={index}
                            style={{
                                opacity: index == imageDisplaying ? 1 : 0.05,
                            }}
                            value={index}
                            className="carousel-images-list-radio"
                            onClick={() => setImageDisplaying(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CarouselArrowed;
