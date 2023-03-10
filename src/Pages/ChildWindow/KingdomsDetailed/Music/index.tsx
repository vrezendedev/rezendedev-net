import './../index.css';

import MusicKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Music/MusicKingdomDetailedTerrain.png';
import MusicKingdomDetailedHarp from '../../../../Assets/ChildWindow/Kingdoms/Music/MusicKingdomDetailedHarp.png';
import MusicKingdomDetailedCabin from '../../../../Assets/ChildWindow/Kingdoms/Music//MusicKingdomDetailedCabin.png';

import { ContentWindowProps } from '../../index';

import Clouds from './../../../../Components/Clouds';

function MusicKingdomDetailed({
    setLocationSubtitle,
    handleBrowserContent,
}: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={MusicKingdomDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={MusicKingdomDetailedHarp}
                draggable={false}
                style={{
                    left: '25.8%',
                    top: '55%',
                }}
                onMouseEnter={() => setLocationSubtitle('Melodical Harp')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('melodicalharp.sail')}
            />

            <img
                className="building"
                src={MusicKingdomDetailedCabin}
                draggable={false}
                style={{
                    right: '42%',
                    bottom: '25%',
                }}
                onMouseEnter={() => setLocationSubtitle(`Collector's Cabin`)}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('collectorscabin.sail')}
            />

            <Clouds
                parentHeight={180}
                parentWidth={324}
                zIndex={14}
                numberOfClouds={8}
            />
        </div>
    );
}

export default MusicKingdomDetailed;
