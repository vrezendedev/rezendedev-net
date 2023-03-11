import './index.css';

export type CrossItemContent = {
    title: string;
    text: string;
    images: string[];
    onClick: null | (() => void);
};

export type CrossContentDisplayProps = {
    title: string;
    items: CrossItemContent[];
};

import CarouselArrowed from '../../../Components/CarouselArrows';

function CrossContentDisplay({ title, items }: CrossContentDisplayProps) {
    return (
        <div className="cross-content-main">
            <p className="cross-content-title">{title}</p>
            {items.map((obj, index) => {
                return (
                    <div
                        className={
                            index % 2 == 0
                                ? 'cross-item'
                                : 'cross-item cross-item-reverse'
                        }
                    >
                        <div className="cross-text-content">
                            <p
                                className={
                                    obj.onClick != null
                                        ? 'cross-item-title cross-content-title-expand'
                                        : 'cross-item-title'
                                }
                                onClick={
                                    obj.onClick != null ? obj.onClick : () => {}
                                }
                            >
                                {obj.title}
                            </p>
                            <p className="cross-item-text">{obj.text}</p>
                        </div>
                        <CarouselArrowed
                            id={obj.title + index}
                            collection={obj.images}
                            imgHeight="150px"
                            imgWidth="150px"
                            mainDivHeight="210px"
                            mainDivWidth="230px"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default CrossContentDisplay;
