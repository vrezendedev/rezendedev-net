import { useEffect, useState } from 'react';

import './../Clouds/index.css';

import Cloud_01 from '../../Assets/MainWindow/Clouds/Cloud_01.png';
import Cloud_02 from '../../Assets/MainWindow/Clouds/Cloud_02.png';
import Cloud_03 from '../../Assets/MainWindow/Clouds/Cloud_03.png';
import Cloud_04 from '../../Assets/MainWindow/Clouds/Cloud_04.png';
import Cloud_05 from '../../Assets/MainWindow/Clouds/Cloud_05.png';
import Cloud_06 from '../../Assets/MainWindow/Clouds/Cloud_06.png';
import Cloud_07 from '../../Assets/MainWindow/Clouds/Cloud_07.png';
import Cloud_08 from '../../Assets/MainWindow/Clouds/Cloud_08.png';

type Cloud = {
    velocity: number;
    startYPos: number;
    image: string;
};

type Direction = 'right' | 'left';

type CloudsProps = {
    parentWidth: number;
    parentHeight: number;
};

function Clouds({ parentWidth, parentHeight }: CloudsProps) {
    const [direction, setDirection] = useState<Direction>('right');
    const [clouds, setClouds] = useState<Array<Cloud>>([]);

    const numberOfClouds = 12;

    const availableClouds = [
        Cloud_01,
        Cloud_02,
        Cloud_03,
        Cloud_04,
        Cloud_05,
        Cloud_06,
        Cloud_07,
        Cloud_08,
    ];

    useEffect(() => {
        const directions: Array<Direction> = ['left', 'right'];

        setDirection(getRandomValue(directions));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (clouds.length < numberOfClouds) addNewCloud();
        }, 3000);
    }, [clouds]);

    function addNewCloud() {
        let startPosH;
        let posOffset = Math.random() * 3;
        let velocityOffset;

        do {
            velocityOffset = Math.random() * 15;
        } while (velocityOffset < 11 || velocityOffset > 13);

        do {
            startPosH =
                parentHeight / numberOfClouds + Math.random() * parentHeight;
        } while (startPosH > parentHeight - 30);

        startPosH =
            getRandomValue(['offsetUp', 'offsetDown']) == 'offsetUp'
                ? (startPosH += posOffset)
                : (startPosH -= posOffset);

        let cloud: Cloud = {
            velocity: velocityOffset,
            startYPos: startPosH,
            image: getRandomValue(availableClouds),
        };

        setClouds((prev) => [...prev, cloud]);
    }

    function getRandomValue<T>(array: ArrayLike<T>): T {
        return array[Math.floor(Math.random() * array.length)];
    }

    return (
        <div>
            {clouds.map((cloud, index) => {
                return (
                    <img
                        key={index}
                        src={cloud.image}
                        style={{
                            bottom: cloud.startYPos,
                            animation:
                                direction == 'right'
                                    ? `marqueeRight ${cloud.velocity}s linear infinite`
                                    : `marqueeLeft ${cloud.velocity}s linear infinite`,
                            pointerEvents: 'none',
                        }}
                        draggable="false"
                        className="clouds"
                    />
                );
            })}
        </div>
    );
}

export default Clouds;
