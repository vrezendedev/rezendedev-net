import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import './index.css';

export type CarouselSliderItem = {
    title: string;
    content: string;
    width: string;
    height: string;
    onClick: () => void;
};

export type CarouselSliderProps = {
    itemsType: '2D' | '3D';
    sliderHeight: string;
    collection: Array<CarouselSliderItem>;
};

function CarouselSlider({
    itemsType,
    collection,
    sliderHeight,
}: CarouselSliderProps) {
    const [mouseOnContent, setMouseOnContent] = useState(false);
    const [displaySubtitle, setDisplaySubtitle] = useState('');
    const carousel = useRef<HTMLDivElement | null>(null);

    function RenderCarouselItems() {
        if (itemsType == '2D') {
            return collection.map((item) => (
                <motion.div className="carousel-item" key={item.title}>
                    <img
                        alt={item.title}
                        src={item.content}
                        style={{
                            width: item.width,
                            height: item.height,
                        }}
                        className="carousel-image"
                        draggable={false}
                        onMouseOver={() => {
                            setMouseOnContent(true);
                            setDisplaySubtitle(item.title);
                        }}
                        onMouseLeave={() => {
                            setMouseOnContent(false);
                            setDisplaySubtitle('');
                        }}
                        onClick={item.onClick}
                    />
                    {displaySubtitle == item.title ? (
                        <div className="item-subtitle-div">
                            <p className="item-subtitle">{item.title}</p>
                        </div>
                    ) : null}
                </motion.div>
            ));
        } else {
            return collection.map((item) => (
                <motion.div
                    className="carousel-item"
                    key={item.title}
                    onMouseOver={() => setDisplaySubtitle(item.title)}
                    onMouseLeave={() => setDisplaySubtitle('')}
                    style={{ maxWidth: item.width, maxHeight: item.height }}
                >
                    {/*@ts-expect-error*/}
                    <model-viewer
                        alt={item.title}
                        src={item.content}
                        loading="eager"
                        shadow-intensity="5"
                        auto-rotate
                        rotation-per-second="45deg"
                    />
                    {displaySubtitle == item.title ? (
                        <div className="item-subtitle-div">
                            <p className="item-subtitle">{item.title}</p>
                        </div>
                    ) : null}
                </motion.div>
            ));
        }
    }

    return (
        <div ref={carousel} className="carousel-main">
            <motion.div
                className="carousel-motion"
                whileTap={{
                    cursor: mouseOnContent == false ? 'grabbing' : 'default',
                }}
                dragConstraints={carousel}
                drag={mouseOnContent == false ? 'x' : false}
                initial={{ x: 500 }}
                animate={{ x: 150 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                style={{ height: sliderHeight }}
            >
                <motion.div className="carousel-items">
                    {RenderCarouselItems()}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default CarouselSlider;
