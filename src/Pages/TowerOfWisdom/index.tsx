import { useState } from 'react';

import './index.css';

import CurriculumPtBr from './../../Assets/Icons/CurriculumPtBr.png';
import CurriculumEnUs from './../../Assets/Icons/CurriculumEnUs.png';

import ResumePT from './../../Assets/Files/Resume PTBR - Vinicius Rezende.pdf';
import ResumeEN from './../../Assets/Files/Resume EN - Vinicius Rezende.pdf';

function TowerOfWisdom() {
    const [displayImageText, SetDisplayImageText] = useState('');

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

    return (
        <div className="tower-wisdom-content-main">
            <p className="tower-wisdom-content-title">
                The Wizard! It's just an about me page.
            </p>
            <div className="tower-wisdom-text-div">
                <p className="tower-wisdom-text-content">
                    &emsp;Greetings, my name is Vinicius Rezende, also known
                    just as Rezende or, online, by my nick Wise Shepherd! I
                    started studying programming in 2020, join a college in 2021
                    and being professionally developing since 2022.
                    <br />
                    &emsp;Since young, I was passionate about games, I would
                    spend hours immersed on every single title that I grabbed
                    and I had that dream to create one. When i grew up, I went
                    to a total different path and join an Archaeology college...
                    but, at the end of it, I decided to quit and start a whole
                    new chapter: the programming one - and it's being a total
                    blast!
                    <br />
                    &emsp;Programming can give to us a new way of looking and
                    interpreting things. I am a very curious person and a
                    knowledge seeker and, somehow, the world of programming
                    delivers me constant self-challenge and self-realization.
                    With the freedom that programming give to us, we can create
                    anything - the creativity is truly unleashed.
                    <br />
                    &emsp;Currently I am FullStack Web Developer, maybe tomorrow
                    a Game Developer or a _____ Developer, I don't know, but job
                    titles really doesn't matter because, my main goal, is to be
                    a really good developer.
                    <br />
                    &emsp;So, what to expect from me? I'm very dedicated and
                    passionate for what I do, constant trying to learn new
                    things for updating myself, I'm a team player and, rarely,
                    gave up from challenges or difficulties.
                    <br />
                    &emsp;Feel free to talk with me on my LinkedIn and you can
                    download my curriculum down below!
                </p>
            </div>
            <div className="tower-wisdom-images">
                <img
                    src={CurriculumPtBr}
                    draggable={false}
                    onMouseOver={() => {
                        SetDisplayImageText('pt-br');
                    }}
                    onMouseLeave={() => {
                        SetDisplayImageText('');
                    }}
                    onClick={() => downloadCurriculum(ResumePT)}
                />
                {displayImageText == 'pt-br' ? (
                    <p className="item-pt-br">Baixar Curriculum PT-BR</p>
                ) : null}

                <img
                    src={CurriculumEnUs}
                    draggable={false}
                    onMouseOver={() => {
                        SetDisplayImageText('en-us');
                    }}
                    onMouseLeave={() => {
                        SetDisplayImageText('');
                    }}
                    onClick={() => downloadCurriculum(ResumeEN)}
                />
                {displayImageText == 'en-us' ? (
                    <p className="item-en-us">Download Curriculum EN-US </p>
                ) : null}
            </div>
        </div>
    );
}

export default TowerOfWisdom;
