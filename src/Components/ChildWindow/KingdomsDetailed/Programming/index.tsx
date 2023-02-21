import './../index.css';

import ProgrammingKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Programming/ProgrammingKingdomDetailedTerrain.png';
import ProgrammingKingdomDetailedDock from '../../../../Assets/ChildWindow/Kingdoms/Programming/ProgrammingKingdomDetailedDock.png';
import ProgrammingKingdomDetailedLighthouse from '../../../../Assets/ChildWindow/Kingdoms/Programming/ProgrammingKingdomDetailedLighthouse.png';
import ProgrammingKingdomDetailedWebShip from '../../../../Assets/ChildWindow/Kingdoms/Programming/ProgrammingKingdomDetailedWebShip.png';

import { ContentWindowProps } from '../../index';

import Clouds from '../../../Clouds';

function ProgrammingKingdomDetailed({
    setLocationSubtitle,
}: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={ProgrammingKingdomDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={ProgrammingKingdomDetailedDock}
                draggable={false}
                style={{
                    left: '34%',
                    top: '23%',
                }}
                onMouseEnter={() => setLocationSubtitle(`Code's Dock`)}
                onMouseLeave={() => setLocationSubtitle('')}
            />

            <img
                className="building"
                src={ProgrammingKingdomDetailedLighthouse}
                draggable={false}
                style={{
                    left: '28%',
                    top: '55%',
                }}
                onMouseEnter={() =>
                    setLocationSubtitle('Lighthouse of Technologies')
                }
                onMouseLeave={() => setLocationSubtitle('')}
            />

            <img
                className="building"
                src={ProgrammingKingdomDetailedWebShip}
                draggable={false}
                style={{
                    right: '21%',
                    bottom: '47%',
                }}
                onMouseEnter={() => setLocationSubtitle(`Web's Ship`)}
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

export default ProgrammingKingdomDetailed;
