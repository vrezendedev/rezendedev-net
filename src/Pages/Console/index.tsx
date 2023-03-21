import { useState, useEffect, useRef } from 'react';

import './index.css';

function Console() {
    const [isWriting, setIsWriting] = useState(false);
    const output = useRef<HTMLInputElement>(null);

    setInterval(() => {
        if (output.current != null && isWriting == false) {
            if (output.current.innerText.includes('|')) {
                output.current.innerText = output.current.innerText.replace(
                    '|',
                    ''
                );
            } else {
                output.current.innerText += '|';
            }
        }
    }, 1000);

    return (
        <div className="console-main-div">
            <div className="console-main-output-div">
                <p ref={output} className="output">
                    {'>'} 1 - About Me
                    <br />
                    {'>'} 2 - External Links
                    <br />
                    {'>'} 3 - Curriculum
                    <br />
                    {'>'} 4 - Misc
                    <br />
                    {`>`}
                </p>
            </div>
            <div className="console-main-input-div">
                <input className="input" type="text" />
            </div>
        </div>
    );
}

export default Console;
