import { useState, useEffect } from 'react';

import './../index.css';

import ArtKingdomDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Art/ArtKingdomDetailedTerrain.png';

function ArtKingdomDetailed() {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={ArtKingdomDetailedTerrain}
                draggable="false"
            />
        </div>
    );
}

export default ArtKingdomDetailed;
