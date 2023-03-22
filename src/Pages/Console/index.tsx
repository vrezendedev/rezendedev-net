import { useState, useRef, useEffect } from 'react';

import './index.css';

import ResumePT from './../../Assets/Files/Resume PTBR - Vinicius Rezende.pdf';
import ResumeEN from './../../Assets/Files/Resume EN - Vinicius Rezende.pdf';

const availableCommands = [
    '/start',
    '/help',
    '/get about',
    '/get external',
    '/open github',
    '/open linkedin',
    '/open bandcamp',
    '/open itchio',
    '/get curriculum',
    '/download en-us',
    '/download pt-br',
    '/get misc',
    '/get pip-boy',
    '/get truth',
];

function Console() {
    const [isWriting, setIsWriting] = useState(false);
    const [openLinks, setOpenLinks] = useState(false);
    const [shouldDownloadCurriculum, setShouldDownloadCurriculum] =
        useState(false);
    const [option, setOption] = useState('/start');
    const [previousOption, setPreviousOption] = useState('');
    const output = useRef<HTMLParagraphElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const downloadCurriculum = (url: string) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split('/').pop();
                const aTag = document.createElement('a');
                aTag.href = url;
                aTag.setAttribute('download', fileName as string);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };

    useEffect(() => {
        if (output.current != null) {
            if (option != previousOption) {
                output.current.innerHTML = ConsoleOptions(option);
            }
        }
    }, [option]);

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
        return () => clearInterval(id);
    }, [isWriting]);

    function ExecuteConsole() {
        if (input.current != null) {
            if (input.current.value != null) {
                if (
                    input.current.value != '/get back' &&
                    input.current.value != option &&
                    availableCommands.includes(input.current.value)
                ) {
                    setPreviousOption(option);
                }
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
                setShouldDownloadCurriculum(false);
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
                setShouldDownloadCurriculum(false);
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
                <br/>
                &emsp;&emsp;/get back [previous master command]
                `;
            case '/get about':
                setOpenLinks(false);
                setShouldDownloadCurriculum(false);
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
            case '/get back':
                setShouldDownloadCurriculum(false);
                if (!previousOption.includes('open') && previousOption != '') {
                    setOption(previousOption);
                    setPreviousOption('');
                } else if (previousOption == '') {
                    setOption('/start');
                } else if (previousOption.includes('download')) {
                    setOption('/get curriculum');
                    setPreviousOption('');
                } else {
                    setOption('/get external');
                    setPreviousOption('');
                }
            case '/get curriculum':
                setOpenLinks(false);
                setShouldDownloadCurriculum(true);
                return `> executed 
                <br/>
                &emsp;&emsp;[/get curriculum]
                <br/>
                <br/>
                &emsp;&emsp;/download en-us
                <br/>
                &emsp;&emsp;/download pt-br`;
            case '/download en-us':
                if (shouldDownloadCurriculum) downloadCurriculum(ResumeEN);
                return shouldDownloadCurriculum
                    ? '> executed [/download en-us]'
                    : '> unable to [re?] execute [/download en-us] by now...';
            case '/download pt-br':
                if (shouldDownloadCurriculum) downloadCurriculum(ResumePT);
                return shouldDownloadCurriculum
                    ? '> executed [/download pt-br]'
                    : '> unable to [re?] execute [/download pt-br] by now...';
            case '/get misc':
                setOpenLinks(false);
                setShouldDownloadCurriculum(false);
                return `> executed [/get misc]
                <br/>
                <br/>
                > This console represents a mobile version of this website...
                <br/>
                <br/>
                > The purpose here was to create a different, but simple,
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>experience...</em>
                <br/>
                <br/>
                > Try the 
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>desktop</em>
                <br/>
                &emsp;&emsp;version for another, 
                <br/>
                &emsp;&emsp;totally different,
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>experience...</em>
                <br/>
                <br/>
                > Thank you for the attention!
                `;
            case '/get pip-boy':
                setOpenLinks(false);
                setShouldDownloadCurriculum(false);
                return `> executed [/get pip-boy]
                <br/>
                <br/>
                > Oh... a fellow Fallout fan!
                <br/>
                > Yep, it's an easter egg. Nice catch!
                `;
            case '/get truth':
                setOpenLinks(false);
                setShouldDownloadCurriculum(false);
                return `> executed [/get truth]
                <br/>
                <br/>
                > I...
                <br/>
                &emsp;&emsp;&emsp;&emsp;<em>freaking</em>
                <br/>
                &emsp;&emsp;love programming!
                `;
            default:
                setOpenLinks(false);
                setShouldDownloadCurriculum(false);
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
