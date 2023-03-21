import { useState, useRef, useEffect } from 'react';

import './index.css';

function Console() {
    const [option, setOption] = useState(0);
    const output = useRef<HTMLParagraphElement>(null);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const id = setInterval(() => {
            if (output.current != null) {
                if (output.current.innerText.includes('|')) {
                    output.current.innerText = output.current.innerText.replace(
                        ' |',
                        ' '
                    );
                } else {
                    output.current.innerText += ' |';
                }
            }
        }, 1000);

        if (output.current != null)
            output.current.innerHTML = ConsoleOptions(option);

        return () => clearInterval(id);
    }, [option]);

    function ExecuteConsole() {
        if (input.current != null) {
            if (input.current.value != null) {
                if (!(input.current.value.length > 2)) {
                    setOption(Number.parseInt(input.current.value));
                    input.current.value = '';
                    input.current.blur();
                } else {
                    if (output.current != null) {
                        output.current.innerHTML = ConsoleOptions(-1);
                    }
                }
            }
        }
    }

    function ConsoleOptions(option: number): string {
        switch (option) {
            case 0:
                return `> 0 - Menu...
                <br />
                > 1 - About Me...
                <br />
                > 2 - External Links...
                <br />
                > 3 - Curriculum...
                <br />
                > 4 - Misc...
                <br />
                >`;
            case 1:
                return `> Option One...
                <br />
                >`;
            case 2:
                return `> Option Two...
                <br />
                >`;
            case 3:
                return `> Option Three...
                <br />
                >`;
            case 4:
                return `> Option Four...
                <br />
                >`;
            default:
                return `> Undefined Command...
                <br />
                > `;
        }
    }

    return (
        <div className="console-main-div">
            <div className="console-main-output-div">
                <p ref={output} className="output"></p>
            </div>
            <div className="console-main-input-div">
                <input
                    ref={input}
                    className="input"
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            ExecuteConsole();
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Console;
