import { useEffect, useState } from 'react';

import Icon from './Assets/Desktop/Icon.png';

import './main.css';

import MainWindow from './Components/MainWindow';

function App() {
    const [selected, setSelected] = useState(false);
    const [modal, setModal] = useState(false);
    const [windowSize, SetWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [platform, SetPlatform] = useState('');

    useEffect(() => {
        function HandleWindowResize() {
            SetWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        SetWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        window.addEventListener('resize', HandleWindowResize);

        return () => window.removeEventListener('resize', HandleWindowResize);
    }, []);

    useEffect(() => {
        if (windowSize.width >= 1024) {
            SetPlatform('desktop');
        } else {
            SetPlatform('mobile');
        }
    }, [windowSize]);

    useEffect(() => {
        const eventCallback = () => {
            if (selected) setSelected(false);
        };
        document.body.addEventListener('click', eventCallback);
        return () => document.body.removeEventListener('click', eventCallback);
    }, [selected]);

    return platform == 'desktop' ? (
        <>
            {modal != true ? (
                <img
                    src={Icon}
                    className="icon"
                    draggable="false"
                    style={{
                        borderColor: 'rgba(0, 190, 255, .4)',
                        borderStyle: selected == true ? 'solid' : '',
                        borderWidth: selected == true ? '2px' : '0px',
                        backgroundColor:
                            selected == true ? 'rgba(0, 190, 255, .4)' : '',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelected(!selected);
                    }}
                    onDoubleClick={() => setModal(!modal)}
                />
            ) : (
                <MainWindow isModalOpen={setModal} />
            )}
        </>
    ) : (
        <>
            <h1 style={{ color: 'white' }}>Hey, pal, fix that width!</h1>
        </>
    );
}

export default App;
