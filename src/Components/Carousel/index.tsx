import { useState, useEffect, useRef, ComponentType } from 'react';
import { motion } from 'framer-motion';

import './index.css';

export type Item = {
    title: string;
    content: string;
    clickable: boolean;
    onClick: () => void | null;
};

type CarouselProps = {
    collection: Array<Item>;
};

function Carousel({ collection }: CarouselProps) {
    const [mouseOnContent, setMouseOnContent] = useState(false);
    const [carouselWidth, setCarouselWidth] = useState<number>(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setCarouselWidth(
            (carousel.current?.scrollWidth as number) -
                (carousel.current?.offsetWidth as number)
        );
    }, []);

    return (
        <div className="carousel-main">
            <motion.div
                className="carousel-motion"
                ref={carousel}
                whileTap={{
                    cursor: mouseOnContent == false ? 'grabbing' : 'default',
                }}
                dragConstraints={{ right: 200, left: -carouselWidth - 200 }}
                drag={mouseOnContent == false ? 'x' : false}
                initial={{ x: 800 }}
                animate={{ x: 200 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="carousel-items">
                    {collection.map((item) => (
                        <motion.div className="carousel-item" key={item.title}>
                            <img
                                src={item.content}
                                className="carousel-image"
                                draggable={false}
                                onMouseOver={() => setMouseOnContent(true)}
                                onMouseLeave={() => setMouseOnContent(false)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Carousel;
