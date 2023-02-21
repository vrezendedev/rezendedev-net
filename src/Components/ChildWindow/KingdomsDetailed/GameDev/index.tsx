import './../index.css';

import GameDevKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/GameDev/GameDevKingdomDetailedTerrain.png';
import GameDevKingdomDetailedPillars from '../../../../Assets/ChildWindow/Kingdoms/GameDev/GameDevKingdomDetailedPillars.png';
import GameDevKingdomDetailedWindmill from '../../../../Assets/ChildWindow/Kingdoms/GameDev/GameDevKingdomDetailedWindmill.png';

import { ContentWindowProps } from '../../index';

import Clouds from '../../../Clouds';

function GameDevKingdomDetailed({ setLocationSubtitle }: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={GameDevKingdomDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={GameDevKingdomDetailedPillars}
                draggable={false}
                style={{
                    left: '42.5%',
                    top: '36%',
                }}
                onMouseEnter={() => setLocationSubtitle('Pillars of Creation')}
                onMouseLeave={() => setLocationSubtitle('')}
            />

            <img
                className="building"
                src={GameDevKingdomDetailedWindmill}
                draggable={false}
                style={{
                    right: '35%',
                    bottom: '27%',
                }}
                onMouseEnter={() => setLocationSubtitle('Utilitary Windmill')}
                onMouseLeave={() => setLocationSubtitle('')}
            />

            <Clouds
                parentHeight={180}
                parentWidth={324}
                zIndex={15}
                numberOfClouds={8}
            />
        </div>
    );
}

export default GameDevKingdomDetailed;
