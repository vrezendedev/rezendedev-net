import { useState, useEffect, ReactNode, ComponentType } from 'react';

import './../BrowserWindow/index.css';

import Draggable from 'react-draggable';

import BrowserWindow from './../../Assets/BrowserWindow/BrowserWindow.png';
import BrowserWindowHeader from './../../Assets/BrowserWindow/BrowserWindowHeader.png';
import BrowserWindowHeaderOptions from './../../Assets/MainWindow/WindowHeaderOptions.png';
import Loading from './../../Assets/Icons/Loading.png';

import CountrysidingOne from './../../Assets/Misc/Countrysiding_01.png';
import CountrysidingTwo from './../../Assets/Misc/Countrysiding_02.png';
import CountrysidingThree from './../../Assets/Misc/Countrysiding_03.png';

import BobRossOne from './../../Assets/Misc//BobRoss_01.jpg';
import BobRossTwo from './../../Assets/Misc//BobRoss_02.jpg';

import SketchyOne from './../../Assets/Misc/SketchyBird_01.png';
import SketchyTwo from './../../Assets/Misc/SketchyBird_02.gif';

import SandtideOne from './../../Assets/Misc/Sandtide_01.png';
import SandtideTwo from './../../Assets/Misc/Sandtide_02.png';

import CodesDock from '../CodesDock';
import TowerOfWisdom from '../TowerOfWisdom';
import LighthouseOfTech from '../LighthouseOfTech';
import CrossContentDisplay from '../Templates/CrossContentDisplay';
import UtilitaryWindmill from '../UtilitaryWindmill';
import SliderCarouselAndTextDisplay from '../Templates/SliderCarouselAndTextDisplay';

import ElfPrincess from './../../Assets/Art/2D/ElfPrincess.png';
import ElfPrincessThumb from './../../Assets/Art/2D/ElfPrincessThumb.png';
import BabyDinosaur from './../../Assets/Art/2D/BabyDinosaur.png';
import BabyDinosaurThumb from './../../Assets/Art/2D/BabyDinosaurThumb.png';
import Cuphead from './../../Assets/Art/2D/Cuphead.png';
import CupheadThumb from './../../Assets/Art/2D/CupheadThumb.png';
import PrincessDragon from './../../Assets/Art/2D/PrincessDragon.png';
import PrincessDragonThumb from './../../Assets/Art/2D/PrincessDragonThumb.png';
import Tent from './../../Assets/Art/2D/Tent.png';
import Wally from './../../Assets/Art/2D/Wally.png';
import Plant from './../../Assets/Art/2D/Plant.png';
import Lagiacrus from './../../Assets/Art/2D/Lagiacrus.png';
import Penguins from './../../Assets/Art/2D/Penguins.png';

type BrowserContent =
    | 'towersofwisdom.sail'
    | 'codesdock.sail'
    | 'websship.sail'
    | 'lighthouseoftechnologies.sail'
    | 'melodicalharp.sail'
    | 'collectorscabin.sail'
    | 'pillarsofcreation.sail'
    | 'utilitarywindmill.sail'
    | 'towerof2d.sail'
    | 'castleof3d.sail'
    | 'inspirationvillage.sail';

const BrowserContents: Array<BrowserContent | string> = [
    'castleof3d.sail',
    'codesdock.sail',
    'collectorscabin.sail',
    'inspirationvillage.sail',
    'lighthouseoftechnologies.sail',
    'melodicalharp.sail',
    'pillarsofcreation.sail',
    'towerof2d.sail',
    'towersofwisdom.sail',
    'utilitarywindmill.sail',
    'websship.sail',
];

type BrowserProps = {
    isTopChild: boolean;
    browserContent: string;
    setTopModal: (value: React.SetStateAction<string>) => void;
    setDisplayBrowser: (value: React.SetStateAction<boolean>) => void;
    setBrowserContent: (value: React.SetStateAction<string>) => void;
};

function Browser({
    isTopChild,
    setTopModal,
    setDisplayBrowser,
    browserContent,
    setBrowserContent,
}: BrowserProps) {
    const [mouseOnHeader, setMouseOnHeader] = useState(false);
    const [display, setDisplay] = useState('none');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.body.style.cursor = 'wait';

        function HandleOnChangeSearchBar(e: any) {
            setIsLoading(true);
            setBrowserContent(e.target.value);
        }

        let searchBar = document.getElementById('search-bar');
        (searchBar as HTMLInputElement).removeEventListener(
            'input',
            HandleOnChangeSearchBar
        );
        (searchBar as HTMLInputElement).addEventListener(
            'input',
            HandleOnChangeSearchBar
        );

        setTimeout(() => {
            document.body.style.cursor = 'default';
            setDisplay('inline');
        }, 1500);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        let searchBar = document.getElementById('search-bar');
        (searchBar as HTMLInputElement).value = browserContent;

        if (BrowserContents.includes(browserContent)) {
            document.body.style.cursor = 'wait';
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
            }, 2000);
        }
    }, [browserContent]);

    function switchBrowserContent() {
        if (isLoading == true) return null;
        switch (browserContent as BrowserContent) {
            case 'codesdock.sail':
                return <CodesDock />;
            case 'lighthouseoftechnologies.sail':
                return <LighthouseOfTech />;
            case 'websship.sail':
                return (
                    <CrossContentDisplay
                        title={`Ships that already sailed away and it's stories:`}
                        items={[
                            {
                                title: 'countrysiding.net',
                                text: `It was my first website and back in the days I only knew HTML and CSS/SASS. It was blast for me when I deployed the website, afterall, 
                                    it was my first finished project. Simple projects are key for evolving our habilities as developers in the beginning. I have plans to redo the entire website after developing more of the game.`,
                                images: [
                                    CountrysidingOne,
                                    CountrysidingTwo,
                                    CountrysidingThree,
                                ],
                                onClick: () => {
                                    open(
                                        'https://countrysiding.net/',
                                        '_blank'
                                    );
                                },
                            },
                            {
                                title: 'rezendedev.net',
                                text: `I think we don't need screenshots, you are already here, so I'll leave a pair of Bob Ross photos!
                                    It's a funny story, I own this domain since 2021 or so... and spent so much time postponing the development because I didn't have an idea that satisfied me. So, suddenly, I had it and here we are. 
                                    I decided to develop it using React along with Typescript and Sass - I already used frameworks like Tailwind/Bulma but i prefer the old ways.`,
                                images: [BobRossOne, BobRossTwo],
                                onClick: null,
                            },
                        ]}
                    />
                );
            case 'pillarsofcreation.sail':
                return (
                    <CrossContentDisplay
                        title="The Pillars:"
                        items={[
                            {
                                title: 'Sketchy Bird',
                                text: `It was the first game that I did "alone"- me, the sweet documentation and StackOverflow. Sadly, I lost the .exe, the art and the Unity project but I still have the source code for the scripts on my GitHub - 
                                it's on a private repository but I can show it, if necessary. For creating the game:  art on Leonardo Drawing App, sound effects on Audacity and, as I spoiled before, Unity Game Engine along with C# for programming. 
                                I created the game at the start of 2022 and for me was a very nice feeling to finish a project.`,
                                images: [SketchyTwo, SketchyOne],
                                onClick: null,
                            },
                            {
                                title: 'Sandtide',
                                text: `Sandtide is a side-project that I'm developing along with two friends: Erik - aka Joe Grace - and Pezzo. Sandtide is an isometric pixel art strategy game with random world-generation where you're a commander of an expedition on a 
                                new discovered planet that has an unique ore: the Enud. Due to work and college, the development is on a slow pace but we definetly going to finish and release it. Within the team, I act as Game Designer, Programmer, 
                                Artist and Musician. Out of curiosity, Joe Grace acts like a Programmer and Game Designer along with Pezzo on the project. The main goal of the game is to extract as many ores as you can while evolving your different 
                                structures and avoiding the sand monsters that are attracted by sound.`,
                                images: [SandtideOne, SandtideTwo],
                                onClick: null,
                            },
                        ]}
                    />
                );
            case 'utilitarywindmill.sail':
                return <UtilitaryWindmill />;
            case 'towersofwisdom.sail':
                return <TowerOfWisdom />;
            case 'towerof2d.sail':
                return (
                    <SliderCarouselAndTextDisplay
                        quote="The memoir of sanity is represented by art... wait, what am I talking about?"
                        author="H. Oblivious, the forgetful and wise artist."
                        textTitle="Each pixel, another step climbing:"
                        text={`Expressing myself through art is one of the most relevant and delightful activity for me. Bob Ross, Eric Barone and Adam Younis are figures that has influenced me of getting into art... because of the last two, specific pixel art. 
                        Pixel art allows complexity through simplicity due the amount of information that a single pixel can represent.
                        I've been going back and forth with art because of time-consuming stuff such as college and work - that's why it as a hobby for me. 
                        Even though it's a hobby, I still try to learn and study about it. Below you can check some pieces of pixel art and sketches - the softwares that I like to use are Aseprite and Leonardo.`}
                        carouselProps={{
                            itemsType: '2D',
                            sliderHeight: '160px',
                            collection: [
                                {
                                    title: 'Wally',
                                    height: '96px',
                                    width: '96px',
                                    onClick: () => {
                                        open(Wally, '_blank');
                                    },
                                    content: Wally,
                                },
                                {
                                    title: 'Elf Princess',
                                    height: '150px',
                                    width: '150px',
                                    onClick: () => {
                                        open(ElfPrincess, '_blank');
                                    },
                                    content: ElfPrincessThumb,
                                },
                                {
                                    title: 'Lagiacrus',
                                    height: '96px',
                                    width: '96px',
                                    onClick: () => {
                                        open(Lagiacrus, '_blank');
                                    },
                                    content: Lagiacrus,
                                },
                                {
                                    title: 'Dragon Princess',
                                    height: '150px',
                                    width: '150px',
                                    onClick: () => {
                                        open(PrincessDragon, '_blank');
                                    },
                                    content: PrincessDragonThumb,
                                },
                                {
                                    title: 'Plant',
                                    height: '96px',
                                    width: '96px',
                                    onClick: () => {
                                        open(Plant, '_blank');
                                    },
                                    content: Plant,
                                },
                                {
                                    title: 'Baby Dinosaur',
                                    height: '150px',
                                    width: '150px',
                                    onClick: () => {
                                        open(BabyDinosaur, '_blank');
                                    },
                                    content: BabyDinosaurThumb,
                                },
                                {
                                    title: 'Penguins',
                                    height: '96px',
                                    width: '96px',
                                    onClick: () => {
                                        open(Penguins, '_blank');
                                    },
                                    content: Penguins,
                                },
                                {
                                    title: 'Cuphead',
                                    height: '150px',
                                    width: '150px',
                                    onClick: () => {
                                        open(Cuphead, '_blank');
                                    },
                                    content: CupheadThumb,
                                },
                                {
                                    title: 'Tent',
                                    height: '96px',
                                    width: '96px',
                                    onClick: () => {
                                        open(Tent, '_blank');
                                    },
                                    content: Tent,
                                },
                            ],
                        }}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <Draggable
            disabled={!mouseOnHeader}
            onDrag={() => setTopModal('browser')}
            onStop={() => setMouseOnHeader(false)}
            bounds="parent"
        >
            <div
                className="browser-window"
                style={{
                    maxWidth: '540px',
                    width: '540px',
                    maxHeight: '500px',
                    height: '500px',
                    display: display,
                    zIndex: isTopChild == true ? 1000 : 15,
                }}
                onClick={() => setTopModal('browser')}
            >
                <input
                    type="text"
                    id="search-bar"
                    spellCheck={false}
                    autoComplete="off"
                    className="search-bar"
                    style={{ width: '510px' }}
                />

                <img
                    className="browser-window-header"
                    src={BrowserWindowHeader}
                    onMouseMove={() => setMouseOnHeader(true)}
                    onMouseLeave={() => setMouseOnHeader(false)}
                    style={{
                        cursor: mouseOnHeader == true ? 'move' : 'default',
                    }}
                    draggable={false}
                />

                <img
                    src={BrowserWindowHeaderOptions}
                    className="browser-window-header-options"
                    draggable={false}
                    onClick={() => setDisplayBrowser(false)}
                />

                <img
                    className="browser-window-background"
                    src={BrowserWindow}
                    draggable={false}
                />

                <img
                    src={Loading}
                    className="loading-img"
                    draggable={false}
                    style={{ opacity: isLoading == false ? 0 : 1 }}
                />

                {isLoading == false ? switchBrowserContent() : null}
            </div>
        </Draggable>
    );
}

export default Browser;
