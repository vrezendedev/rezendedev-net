import { useState, useRef, useEffect } from 'react';

import './index.css';

function Console() {
    const [isWriting, setIsWriting] = useState(false);
    const [openLinks, setOpenLinks] = useState(false);
    const [option, setOption] = useState('/start');
    const [previousOption, setPreviousOption] = useState('');
    const output = useRef<HTMLParagraphElement>(null);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let id = 0;

        if (isWriting == false) {
            id = setInterval(() => {
                if (input.current != null) {
                    if (input.current.value.includes('|')) {
                        input.current.value = input.current.value.replace(
                            '|',
                            ''
                        );
                    } else {
                        input.current.value += '|';
                    }
                }
            }, 1000);
        }

        if (output.current != null) {
            if (option != previousOption) {
                output.current.innerHTML = ConsoleOptions(option);
            }
        }

        return () => clearInterval(id);
    }, [option, isWriting]);

    function ExecuteConsole() {
        if (input.current != null) {
            if (input.current.value != null) {
                setPreviousOption(option);
                setOption(input.current.value);
                input.current.value = '';
                input.current.blur();
            } else {
                if (output.current != null) {
                    output.current.innerHTML = ConsoleOptions('');
                }
            }
        }
    }

    function ConsoleOptions(option: string): string {
        switch (option) {
            case '/start':
                setOpenLinks(false);
                return `> executed [/start]
                <br/>
                <br/>
                > Welcome to 
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>rezendedev.net</em>
                <br/> 
                &emsp; mobile version... 
                <br/> 
                &emsp; or, should I say...
                <br/> 
                &emsp; console version... 
                <br/>
                <br/>
                > Type /help to show available commands...`;
            case '/help':
                setOpenLinks(false);
                return `> executed [/help]
                <br/>
                <br/>
                &emsp;&emsp;/get about
                <br/>
                &emsp;&emsp;/get external
                <br/>
                &emsp;&emsp;/get curriculum
                <br/>
                &emsp;&emsp;/get misc
                <br/>`;
            case '/get about':
                setOpenLinks(false);
                return `> executed [/get about]
                <br/>
                >...
                <br/>
                 Hi! My name is
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>Vinicius Rezende.</em>
                <br/> 
                Currently, a FullStack web developer.
                <br/>
                <br/>
                >...
                <br/>
                I started studying programming in 2020,
                join a college in 2021
                and being professionally 
                developing since 2022.
                <br/>
                <br/>
                >...
                <br/>
                I have knowledge in C#, TS, JS, React... [and more].
                <br/>
                <br/>
                >...
                <br/>
                Passion, curiosity and creativity is what leads my path as a developer.
                `;
            case '/get external':
                setOpenLinks(true);
                return `> executed [/get external]
                <br/>
                <br/>
                &emsp;&emsp;/open itchio
                <br/>
                &emsp;&emsp;/open linkedin
                <br/>
                &emsp;&emsp;/open github
                <br/>
                &emsp;&emsp;/open bandcamp
                <br/>`;
            case '/open github':
                OpenLink('https://github.com/vrezendedev/');
                return openLinks
                    ? '> executed [/open github]'
                    : '> unable to [re?] execute [/open github] by now...';
            case '/open itchio':
                OpenLink('https://wiseshepherd.itch.io/');
                return openLinks
                    ? '> executed [/open itchio]'
                    : '> unable to [re?] execute [/open itchio] by now...';
            case '/open linkedin':
                OpenLink(
                    'https://www.linkedin.com/in/vinicius-inacio-rezende/'
                );
                return openLinks
                    ? '> executed [/open linkedin]'
                    : '> unable to [re?] execute [/open linkedin] by now...';
            case '/open bandcamp':
                OpenLink('https://wiseshepherd.bandcamp.com/');
                return openLinks
                    ? '> executed [/open bandcamp]'
                    : '> unable to [re?] execute [/open bandcamp] by now...';
            default:
                setOpenLinks(false);
                return `> Undefined Command...
                <br />
                > `;
        }
    }

    function OpenLink(url: string) {
        if (openLinks) {
            open(url, '_blank');
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
                    onKeyDown={(e: any) => {
                        if (e.key === 'Enter') {
                            ExecuteConsole();
                            setIsWriting(false);
                        }
                    }}
                    onFocus={(e: any) => {
                        setIsWriting(true);
                        e.target.value = e.target.value.replace('|', '');
                    }}
                />
            </div>
        </div>
    );
}

export default Console;
