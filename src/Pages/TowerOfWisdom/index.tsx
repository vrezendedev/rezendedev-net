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
                <p className="tower-wisdom-text-content"></p>
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
