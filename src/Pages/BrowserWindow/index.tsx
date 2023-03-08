import { useState, useEffect, ReactNode, ComponentType } from 'react';

import './../BrowserWindow/index.css';

import Draggable from 'react-draggable';

import BrowserWindow from './../../Assets/BrowserWindow/BrowserWindow.png';
import BrowserWindowHeader from './../../Assets/BrowserWindow/BrowserWindowHeader.png';
import BrowserWindowHeaderOptions from './../../Assets/MainWindow/WindowHeaderOptions.png';
import Loading from './../../Assets/Icons/Loading.png';

import CodesDock from '../CodesDock';
import TowerOfWisdom from '../TowerOfWisdom';
import LighthouseOfTech from '../LighthouseOfTech';

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
            case 'towersofwisdom.sail':
                return <TowerOfWisdom />;
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
