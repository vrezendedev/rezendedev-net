import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import './../MainWindow/index.css';

import Window from '../../Assets/MainWindow/Window.png';
import WindowHeader from '../../Assets/MainWindow/WindowHeader.png';
import WindowHeaderOptions from '../../Assets/MainWindow/WindowHeaderOptions.png';
import Water from '../../Assets/MainWindow/Water.gif';

import Clouds from './../../Components/Clouds';
import Kingdoms from '../Kingdoms';
import ChildWindow from '../ChildWindow';
import Browser from '../BrowserWindow';

type MainWindowProps = {
    isModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MainWindow(props: MainWindowProps) {
    const [mouseOnHeader, setMouseOnHeader] = useState(false);

    const [display, setDisplay] = useState('none');
    const [displayBrowser, setDisplayBrowser] = useState(false);

    const [kingdomHighlighted, setKingdomHighlighted] = useState('');
    const [kingdomModals, setKingdomModals] = useState<Array<string>>([]);

    const [browserContent, setBrowserContent] = useState('');

    const [topModal, setTopModal] = useState('');

    useEffect(() => {
        let window = document.getElementById('window')!;

        document.body.style.cursor = 'wait';

        for (let element of window.children) {
            (element as HTMLDivElement).draggable = false;
        }

        setTimeout(() => {
            document.body.style.cursor = 'default';
            setDisplay('inline');
        }, 1500);
    }, []);

    return (
        <>
            <Draggable
                disabled={!mouseOnHeader}
                onDrag={() => setTopModal('')}
                onStop={() => setMouseOnHeader(false)}
                bounds="parent"
            >
                <div
                    className="window"
                    id="window"
                    style={{
                        maxWidth: '650px',
                        width: '650px',
                        maxHeight: '380px',
                        height: '380px',
                        display: display,
                        zIndex: topModal == '' ? 1000 : 1,
                    }}
                >
                    <img
                        src={WindowHeaderOptions}
                        className="window-header-options"
                        draggable={false}
                        onClick={() => props.isModalOpen(false)}
                    />
                    <img
                        className="window-header"
                        src={WindowHeader}
                        onMouseMove={() => setMouseOnHeader(true)}
                        onMouseLeave={() => setMouseOnHeader(false)}
                        style={{
                            cursor: mouseOnHeader == true ? 'move' : 'default',
                        }}
                    />

                    <img className="window-background" src={Window} />

                    <img className="water" src={Water} />

                    <Clouds
                        parentWidth={550}
                        parentHeight={365}
                        zIndex={10}
                        numberOfClouds={16}
                    />

                    <Kingdoms
                        kingdomHighlighted={kingdomHighlighted}
                        setKingdomHighlighted={setKingdomHighlighted}
                        setKingdomModals={setKingdomModals}
                        setTopModal={setTopModal}
                    />
                </div>
            </Draggable>

            {kingdomModals.map((obj) => {
                return (
                    <ChildWindow
                        childKingdom={obj}
                        setKingdomModals={setKingdomModals}
                        key={obj}
                        isTopChild={obj == topModal}
                        setTopModal={setTopModal}
                        setBrowserContent={setBrowserContent}
                        setDisplayBrowser={setDisplayBrowser}
                    />
                );
            })}

            {displayBrowser == true ? (
                <Browser
                    isTopChild={'browser' == topModal}
                    setTopModal={setTopModal}
                    browserContent={browserContent}
                    setDisplayBrowser={setDisplayBrowser}
                    setBrowserContent={setBrowserContent}
                />
            ) : null}
        </>
    );
}

export default MainWindow;
