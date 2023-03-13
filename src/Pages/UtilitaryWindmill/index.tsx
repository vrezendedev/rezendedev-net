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
    Aseprite: `Aseprite is a great software for creating pixel-art. I've been using since 2021 but, unfortunately, I slowed down with creating art due to work and college but, finally, 
               after being able to manage my time, I can get back into working with my art. Even so, it's my main software for creating pixel-art.`,
    Blender: `A free and open source software for creating 3D models. When I was younger, I tried to use it a couple of times but it was a little bit hard for me back then. With the help of 
    Blender Guru and after many donuts, now I can have fun creating my, simple, 3D models. I have plans to create some games with a cartoonish-low poly style.`,
    Reaper: `Reaper is an awesome DAW that I've been using since the start of 2023 - search for whyreaper.com to get more info about why you should choose Reaper as the DAW to work with. Games without 
    music are not completely magical thats why I decided to learn how to produce and compose music - and it's being a hell of a journey.`,
    Unity: `Unity was my first decision for a Game Engine as C# was my first programming language. Unity is full of nice features and has a very helpful and friendly community.  
    I'm more used to work with 2D, however, I can venture into 3D as well.`,
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
                            &emsp;{windmillItemsText[itemSelected]}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default UtilitaryWindmill;
