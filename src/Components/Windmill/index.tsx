import { useState } from 'react';

import './index.css';

export type WindmillCollectionItems = {
    content: string;
    subtitle: string;
};

type WindmillProps = {
    collection: Array<WindmillCollectionItems>;
    setItemSelected: (value: string) => void;
    imgWidth: string;
    imgHeight: string;
    circleRadius: number;
};

function Windmill({
    collection,
    imgWidth,
    imgHeight,
    circleRadius,
    setItemSelected,
}: WindmillProps) {
    const [currentSubtitle, setCurrentSubtitle] = useState('');

    return (
        <div
            className="windmill-main"
            style={{ height: `${circleRadius}px`, width: `${circleRadius}px` }}
        >
            {collection.map((obj, index) => {
                let angle = 360 - 90;
                let dangle = 360 / collection.length;
                angle += dangle * index;
                return (
                    <img
                        src={obj.content}
                        width={imgWidth}
                        height={imgHeight}
                        className="windmill-item"
                        key={index}
                        style={{
                            transform: `rotate(${angle}deg) translate(${
                                circleRadius / 2
                            }px) rotate(-${angle}deg)`,
                            opacity: currentSubtitle == obj.subtitle ? 1 : 0.5,
                        }}
                        draggable={false}
                        onClick={() => {
                            if (currentSubtitle != obj.subtitle) {
                                setCurrentSubtitle('');
                                setItemSelected('');
                                setTimeout(() => {
                                    setCurrentSubtitle(obj.subtitle);
                                    setItemSelected(obj.subtitle);
                                }, 150);
                            }
                        }}
                    />
                );
            })}
            <div className="windmill-subtitle">
                {currentSubtitle != '' ? (
                    <p
                        className="windmill-item-subtitle"
                        style={{ opacity: 1 }}
                    >
                        {currentSubtitle}
                    </p>
                ) : null}
            </div>
        </div>
    );
}

export default Windmill;
