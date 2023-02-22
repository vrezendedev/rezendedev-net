import './../index.css';

import ArtKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedTerrain.png';
import ArtKingdomDetailedTower from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedTower.png';
import ArtKingdomDetailedCastle from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedCastle.png';
import ArtKingdomDetailedVillage from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedVillage.png';

import { ContentWindowProps } from '../../index';

import Clouds from '../../../Clouds';

function ArtKingdomDetailed({
    setLocationSubtitle,
    handleBrowserContent,
}: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={ArtKingdomDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={ArtKingdomDetailedTower}
                draggable={false}
                style={{
                    left: '36.5%',
                    top: '23%',
                }}
                onMouseEnter={() => setLocationSubtitle('Tower of 2D')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('towerof2d.sail')}
            />

            <img
                className="building"
                src={ArtKingdomDetailedCastle}
                draggable={false}
                style={{
                    left: '35%',
                    top: '60%',
                }}
                onMouseEnter={() => setLocationSubtitle('Castle of 3D')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('castleof3d.sail')}
            />

            <img
                className="building"
                src={ArtKingdomDetailedVillage}
                draggable={false}
                style={{
                    right: '30%',
                    bottom: '32%',
                }}
                onMouseEnter={() => setLocationSubtitle('Inspiration Village')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('inspirationvillage.sail')}
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

export default ArtKingdomDetailed;
