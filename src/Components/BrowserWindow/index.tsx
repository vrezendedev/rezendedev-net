import { useState, useEffect, ReactNode, ComponentType } from 'react';

import './../BrowserWindow/index.css';

import Draggable from 'react-draggable';

import BrowserWindow from './../../Assets/BrowserWindow/BrowserWindow.png';
import BrowserWindowHeader from './../../Assets/BrowserWindow/BrowserWindowHeader.png';
import BrowserWindowHeaderOptions from './../../Assets/MainWindow/WindowHeaderOptions.png';

type BrowserContent =
    | 'towersofwisdom.sail'
    | 'codesdock.sail'
    | 'lighthouseoftechnologies.sail'
    | 'melodicalharp.sail'
    | 'collectorscabin.sail'
    | 'pillarsofcreation.sail'
    | 'towerof2d.sail'
    | 'castleof3d.sail'
    | 'inspirationvillage.sail';

type BrowserProps = {
    isTopChild: boolean;
    browserContent: string;
    setTopModal: (value: React.SetStateAction<string>) => void;
    setDisplayBrowser: (value: React.SetStateAction<boolean>) => void;
};

function Browser({
    isTopChild,
    setTopModal,
    setDisplayBrowser,
    browserContent,
}: BrowserProps) {
    const [mouseOnHeader, setMouseOnHeader] = useState(false);
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        document.body.style.cursor = 'wait';

        setTimeout(() => {
            document.body.style.cursor = 'default';
            setDisplay('inline');
        }, 1500);
    }, []);

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
                    className="search-bar"
                    style={{ width: '510px' }}
                    value={browserContent}
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
            </div>
        </Draggable>
    );
}

export default Browser;
