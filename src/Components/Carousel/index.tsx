import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import './index.css';

export type Item = {
    title: string;
    content: string;
    onClick: () => void;
};

type CarouselProps = {
    itemsType: '2D' | '3D';
    collection: Array<Item>;
};

function Carousel({ itemsType, collection }: CarouselProps) {
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
                animate={{ x: 100 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <motion.div className="carousel-items">
                    {RenderCarouselItems()}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Carousel;
