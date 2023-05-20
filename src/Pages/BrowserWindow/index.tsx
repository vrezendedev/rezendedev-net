import { useState, useEffect } from 'react';

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

import WizfrozZero from './../../Assets/Misc/Wizfroz_00.png';
import WizfrozOne from './../../Assets/Misc/Wizfroz_01.png';
import WizfrozTwo from './../../Assets/Misc/Wizfroz_02.png';
import WizfrozThree from './../../Assets/Misc/Wizfroz_03.png';

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

import Grave from './../../Assets/Art/3D/grave.glb';
import QuoteAndTextDisplay from '../Templates/QuoteAndTextDisplay';

import DiscRed from './../../Assets/Icons/DiscRed.png';
import DiscBlue from './../../Assets/Icons/DiscBlue.png';
import DiscYellow from './../../Assets/Icons/DiscYellow.png';
import DiscPurple from './../../Assets/Icons/DiscPurple.png';

import FronzenInGMajor from './../../Assets/Art/Music/frozen_in_g_major.mp3';
import SummerFestivalExperimental from './../../Assets/Art/Music/summer_festival_experimental.mp3';
import WizfrozLevelSong from './../../Assets/Art/Music/wizfroz_level_song.wav';
import WizfrozMainMenuSong from './../../Assets/Art/Music/wizfroz_main_menu.wav';

const audio = new Audio();
audio.volume = 0.25;

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
    const [lastMusic, setLastMusic] = useState('');

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
                                title: 'Wizfroz',
                                text: `Wizfroz is a game  about a wizard frog that is running away from the evil flies empire. Cast spells and jump around across five unique levels. 
                                The actual state of the game should not be considered as finished as the Art, UI, SFX and Music are not sufficiently "polished" - please, considered it as a proof of concept. 
                                The entire game and it's features was developed/created by me - not including SFX.`,
                                images: [
                                    WizfrozZero,
                                    WizfrozOne,
                                    WizfrozTwo,
                                    WizfrozThree,
                                ],
                                onClick: () => {
                                    open(
                                        'https://wiseshepherd.itch.io/wizfroz',
                                        '_blank'
                                    );
                                },
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
                        text={`&emsp;Expressing myself through art is one of the most relevant and delightful activity for me. Bob Ross, Eric Barone and Adam Younis are figures that has influenced me of getting into art... because of the last two, specific pixel art. 
                        <br />
                        &emsp;Pixel art allows complexity through simplicity due the amount of information that a single pixel can represent. I've been going back and forth with art because of time-consuming stuff such as college and work - that's why it as a hobby for me. 
                        <br />
                        &emsp;Even though it's a hobby, I still try to learn and study about it. Below you can check some pieces of pixel art and sketches - the softwares that I like to use are Aseprite and Leonardo.`}
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
            case 'castleof3d.sail':
                return (
                    <SliderCarouselAndTextDisplay
                        quote="A Donut can also be a 3D Model."
                        author="Random Guru."
                        textTitle="Placing cubes as placing bricks on castles:"
                        text={`&emsp;3D is such an interesting kind of art... I'm not saying that others are uninteresting but there is this peculiar combination between technology and art with this one. 
                        <br />
                        &emsp;I'm more an enthusiast than anything else when we talk about 3D Art. Maybe its because I really like simplicity over complexity but when I create 3D Art I go right into low poly models. 
                        The combination between low poly and pixelated or handpainted textures is something that really catches me, so I'll focus on that. Currently using Blender and no plans for changing to another software. 
                        <br />
                        &emsp;As for inspirations/recommendations, I would like to name a few creators: Tooley1998, Blender Guru, Granth Abbott and William Santacruz - check them out on YouTube.`}
                        carouselProps={{
                            itemsType: '3D',
                            sliderHeight: '160px',
                            collection: [
                                {
                                    title: 'Just a placeholder, also a Grave.',
                                    height: '150px',
                                    width: '150px',
                                    content: Grave,
                                },
                                {
                                    title: 'Just another placeholder, also a Grave again.',
                                    height: '150px',
                                    width: '150px',
                                    content: Grave,
                                },
                            ],
                        }}
                    />
                );
            case 'inspirationvillage.sail':
                return (
                    <QuoteAndTextDisplay
                        quote="There are no mistakes, just happy accidents."
                        author="Bob Ross, it is Bob Ross."
                        textTitle="Creating art through inspiration, but who or what inspires me?"
                        text={`&emsp;Creativity, for me, is one of the most important traits that anyone can have and/or develop. Beyond that, art in any form is a magnificent way to practice and explore creativity. 
                        When you draw or  paint or create a 3D model... you bring an idea to life - not literally, but quite. If you want to have interesting ideas you have to see the world and what I mean with that? 
                        Well, ideas can pop up from anywhere but usually inspiration can come through any other artists. 
                        <br /> 
                        &emsp;You can have an idea for a piece while reading, listening to music, watching a movie, playing a game, contemplating about another artist's piece and so on. But... there will always be some artists that truly inspires you - 
                        here, in Inspiration Village, I'll just mention the visual part of it. 
                        <br />
                        &emsp;I'm completely inspired by Eric Barone... his art pieces really represents the passion for his creations and that, in a way, enhances the beauty of the pixels. Stardew Valley has an unique touch that brings nostalgia yet shows something new. 
                        <br />
                        &emsp;Do I need to explain why Bob Ross is an inspiration? Art is a way to de-stress your mind and he, clearly, showed that. 
                        <br />
                        &emsp;To mention a few non-name specific inspirations: Gravity Falls,  A Hat In Time, Celeste,  
                        Ragnarok and many others. Well, probably that already gave you an idea about who or what inspires me.`}
                    />
                );
            case 'melodicalharp.sail':
                return (
                    <SliderCarouselAndTextDisplay
                        quote="Mighty music will declare war against meaningless forces!"
                        author="Slayes, the bard."
                        textTitle="Music-evoked emotions:"
                        text={`&emsp;Music is a very important part of my life. I quite listen to music 24/7 and have been trying to study composition for a while. For me it's such a great power to express ourselves and evoke emotions through sounds. 
                        <br />
                        &emsp;When I was a kid, my father insisted for me to try learn any instrument, so I took guitar classes and, then, a couple of years back I decided to learn piano. To be fair, I'm not that good with the practical part but I really like to create stuff - that's why I tended to composition / music production.  
                        <br />
                        &emsp;Here, below, I'll show what I call music sketches... I usually try to create a few with an ambience in mind to, rapidly, evoke a target emotion. Since I focused on creating game soundtracks I find these little sketches very useful - it's a faster way to put into practice theoretical stuff.  
                        <br />
                        &emsp;Creating games is a synonym for creating experiences and music is one of the leading actors in this context. Finally, since it's such a personal relation between the listener and the track, sometimes the evoked emotion will not be the targeted one. 
                        But that's okay, what really matters is that it should be meaningful or intriguing for the listener and that's what I, deeply, try to achieve.`}
                        carouselProps={{
                            itemsType: '2D',
                            sliderHeight: '160px',
                            collection: [
                                {
                                    title: 'Frozen in G Major',
                                    height: '128px',
                                    width: '128px',
                                    content: DiscBlue,
                                    onClick: () => {
                                        if (
                                            !audio.paused &&
                                            lastMusic === FronzenInGMajor
                                        ) {
                                            audio.pause();
                                        } else {
                                            setLastMusic(FronzenInGMajor);
                                            audio.currentTime = 0;
                                            audio.src = FronzenInGMajor;
                                            audio.play();
                                        }
                                    },
                                },
                                {
                                    title: 'Experimental - Summer Festival',
                                    height: '128px',
                                    width: '128px',
                                    content: DiscRed,
                                    onClick: () => {
                                        if (
                                            !audio.paused &&
                                            lastMusic ===
                                                SummerFestivalExperimental
                                        ) {
                                            audio.pause();
                                        } else {
                                            setLastMusic(
                                                SummerFestivalExperimental
                                            );
                                            audio.currentTime = 0;
                                            audio.src =
                                                SummerFestivalExperimental;
                                            audio.play();
                                        }
                                    },
                                },
                                {
                                    title: `Wizfroz's Levels`,
                                    height: '128px',
                                    width: '128px',
                                    content: DiscYellow,
                                    onClick: () => {
                                        if (
                                            !audio.paused &&
                                            lastMusic === WizfrozLevelSong
                                        ) {
                                            audio.pause();
                                        } else {
                                            setLastMusic(WizfrozLevelSong);
                                            audio.currentTime = 0;
                                            audio.src = WizfrozLevelSong;
                                            audio.play();
                                        }
                                    },
                                },
                                {
                                    title: `Wizfroz's Main Menu`,
                                    height: '128px',
                                    width: '128px',
                                    content: DiscPurple,
                                    onClick: () => {
                                        if (
                                            !audio.paused &&
                                            lastMusic === WizfrozMainMenuSong
                                        ) {
                                            audio.pause();
                                        } else {
                                            setLastMusic(WizfrozMainMenuSong);
                                            audio.currentTime = 0;
                                            audio.src = WizfrozMainMenuSong;
                                            audio.play();
                                        }
                                    },
                                },
                            ],
                        }}
                    />
                );
            case 'collectorscabin.sail':
                return (
                    <QuoteAndTextDisplay
                        quote="Yeah, let's make terrible music."
                        author="Young C418, on an interview."
                        textTitle="Trial and Error and Inspiration!"
                        text={`&emsp;First of all, I freaking love soundtracks. Each song represents so much and the creators are truly masters... so a quick shot-out for a few: C418, Laura Shigihara, Lena Raine, Jemery Soule and ConcernedApe (yes, again). 
                        These are a few who inspires me to keep going and trying to create meaningful tracks not only for others but for me too.
                        Out of curiosity, I do have other sources of inspiration... as I like a couple of different music genres: Power & Symphonic Metal, Instrumental, Classic, Country, Rock...  
                        <br />
                        &emsp;When I try to compose, I do a trial and error section, trying to understand where I want to go on that imagined scenario. Maybe that's because I don't have a complete knowdlegde on the subject or that's just the way I like to compose - anyway, 
                        it's worth mention it. 
                        <br />
                        &emsp;I could talk about a lot of things that I find interesting about music but one thing that I really want to mention is the timeless aspect of it. Music can carry emotions with it and make you remember when you listen to it. 
                        For example, Harry Potter's soundtrack is pure nostalgia for me and the feelings that it brings it's unique... so as for Minecraft's soundtrack.. and so on. 
                        <br />
                        &emsp;The point is, as a composer you can create something that stores feelings and memories and that's amazing. That's why I'm into music too. `}
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
