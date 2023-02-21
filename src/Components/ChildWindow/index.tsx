import { useState, useEffect, ReactNode, ComponentType } from 'react';

import Draggable from 'react-draggable';

import './../ChildWindow/index.css';

import ChildWindowBackground from '../../Assets/ChildWindow/ChildWindow.png';
import ChildWindowHeaderOptions from '../../Assets/ChildWindow/ChildWindowHeaderOptions.png';

import ArtKingdomHeader from '../../Assets/ChildWindow/ArtKingdomHeader.png';
import ProgrammingKingdomHeader from '../../Assets/ChildWindow/ProgrammingKingdomHeader.png';
import MusicKingdomHeader from '../../Assets/ChildWindow/MusicKingdomHeader.png';
import GameDevKingdomHeader from '../../Assets/ChildWindow/GameDevKingdomHeader.png';
import WizardReignHeader from '../../Assets/ChildWindow/WizardReignHeader.png';
import VoidHeader from '../../Assets/ChildWindow/VoidHeader.png';

import ArtKingdomDetailed from './KingdomsDetailed/Art/index';
import ProgrammingKingdomDetailed from './KingdomsDetailed/Programming/index';
import GameDevKingdomDetailed from './KingdomsDetailed/GameDev/index';
import MusicKingdomDetailed from './KingdomsDetailed/Music';
import WizardReignDetailed from './KingdomsDetailed/Wizard';
import VoidDetailed from './KingdomsDetailed/Void';

type KingdomContent = Record<string, Contents>;

type Contents = {
    header: string;
    content: ComponentType<ContentWindowProps>;
};

export type ContentWindowProps = {
    setLocationSubtitle: (value: React.SetStateAction<string>) => void;
};

type ChildWindowProps = {
    isTopChild: boolean;
    setTopModal: (value: React.SetStateAction<string>) => void;
    childKingdom: string;
    setKingdomModals: (value: React.SetStateAction<string[]>) => void;
};

const KingdomContents: KingdomContent = {
    art: {
        header: ArtKingdomHeader,
        content: ArtKingdomDetailed,
    },
    programming: {
        header: ProgrammingKingdomHeader,
        content: ProgrammingKingdomDetailed,
    },
    gamedev: {
        header: GameDevKingdomHeader,
        content: GameDevKingdomDetailed,
    },
    music: {
        header: MusicKingdomHeader,
        content: MusicKingdomDetailed,
    },
    wizard: {
        header: WizardReignHeader,
        content: WizardReignDetailed,
    },
    void: {
        header: VoidHeader,
        content: VoidDetailed,
    },
};

function ChildWindow({
    isTopChild,
    setTopModal,
    childKingdom,
    setKingdomModals,
}: ChildWindowProps) {
    const [mouseOnHeader, setMouseOnHeader] = useState(false);
    const [display, setDisplay] = useState('none');
    const [locationSubtitle, setLocationSubtitle] = useState('');

    const Content = KingdomContents[childKingdom].content;

    useEffect(() => {
        document.body.style.cursor = 'wait';

        setTimeout(() => {
            document.body.style.cursor = 'default';
            setDisplay('inline');
        }, 250);
    }, []);

    return (
        <Draggable
            disabled={!mouseOnHeader}
            onDrag={() => setTopModal(childKingdom)}
            onStop={() => setMouseOnHeader(false)}
            bounds="parent"
        >
            <div
                className="child-window"
                style={{
                    maxWidth: '324px',
                    width: '324px',
                    maxHeight: '200px',
                    height: '200px',
                    display: display,
                    zIndex: isTopChild == true ? 1000 : 11,
                }}
                onClick={() => setTopModal(childKingdom)}
            >
                <img
                    className="child-window-header"
                    src={KingdomContents[childKingdom].header}
                    onMouseMove={() => setMouseOnHeader(true)}
                    onMouseLeave={() => setMouseOnHeader(false)}
                    style={{
                        cursor: mouseOnHeader == true ? 'move' : 'default',
                    }}
                    draggable={false}
                />

                <img
                    src={ChildWindowHeaderOptions}
                    className="child-window-header-options"
                    draggable={false}
                    onClick={() =>
                        setKingdomModals((prev) =>
                            prev.filter((obj) => obj != childKingdom)
                        )
                    }
                />

                <img
                    className="child-window-background"
                    src={ChildWindowBackground}
                    draggable={false}
                />

                <Content setLocationSubtitle={setLocationSubtitle} />

                {locationSubtitle != '' ? (
                    <div
                        className="locationSubtitle"
                        style={{ pointerEvents: 'none' }}
                    >
                        <p className="subtitle">{locationSubtitle}</p>
                    </div>
                ) : null}
            </div>
        </Draggable>
    );
}

export default ChildWindow;
