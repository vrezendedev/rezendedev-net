import { useState, useEffect } from 'react';

import './../index.css';

import ArtKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedTerrain.png';
import ArtKingdomDetailedTower from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedTower.png';
import ArtKingdomDetailedCastle from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedCastle.png';
import ArtKingdomDetailedVillage from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedVillage.png';

import Clouds from '../../../Clouds';

function ArtKingdomDetailed() {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={ArtKingdomDetailedTerrain}
                draggable={false}
            />
            <img
                className="building-one-detailed"
                src={ArtKingdomDetailedTower}
                draggable={false}
                style={{
                    left: '36.5%',
                    top: '23%',
                }}
            />

            <img
                className="building-two-detailed"
                src={ArtKingdomDetailedCastle}
                draggable={false}
                style={{
                    left: '35%',
                    top: '60%',
                }}
            />

            <img
                className="building-three-detailed"
                src={ArtKingdomDetailedVillage}
                draggable={false}
                style={{
                    right: '30%',
                    bottom: '32%',
                }}
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

export default ArtKingdomDetailed;
