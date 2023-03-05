import { useState } from 'react';

import './index.css';

import Aseprite from './../../Assets/Icons/Aseprite.png';
import Blender from './../../Assets/Icons/Blender.png';
import Reaper from './../../Assets/Icons/Reaper.png';
import Unity from './../../Assets/Icons/Unity.png';

import Windmill from '../../Components/Windmill';
import { WindmillCollectionItems } from '../../Components/Windmill';

const windmillItems: Array<WindmillCollectionItems> = [
    { content: Aseprite, subtitle: 'Aseprite' },
    { content: Blender, subtitle: 'Blender' },
    { content: Reaper, subtitle: 'Reaper' },
    { content: Unity, subtitle: 'Unity' },
];

const windmillItemsText: Record<string, string> = {
    Aseprite: 'Aseprite...',
    Blender: 'Blender...',
    Reaper: 'Reaper...',
    Unity: 'Unity...',
};

function UtilitaryWindmill() {
    const [itemSelected, setItemSelected] = useState('first');

    return (
        <div className="utilitary-windmill-main">
            <div className="utilitary-windmill-content">
                <Windmill
                    imgWidth="64px"
                    imgHeight="64px"
                    circleRadius={225}
                    setItemSelected={setItemSelected}
                    collection={windmillItems}
                />
            </div>
            <div className="utilitary-windmill-text-content">
                <p className="utilitary-windmill-title">
                    Tools for the Wind of Creativity {''}
                    {itemSelected == 'first'
                        ? 'awaiting for selection...'
                        : null}
                </p>
                <div className="utilitary-windmill-text-div">
                    {windmillItemsText[itemSelected] != null ? (
                        <p className="utilitary-windmill-text">
                            {windmillItemsText[itemSelected]}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default UtilitaryWindmill;
