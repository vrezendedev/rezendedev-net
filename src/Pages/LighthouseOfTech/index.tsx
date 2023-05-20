import './index.css';

import CarouselArrowed from '../../Components/CarouselArrows';

import React from './../../Assets/Icons/React.svg';
import CSharp from './../../Assets/Icons/CSharp.svg';
import JS from './../../Assets/Icons/JS.svg';
import TS from './../../Assets/Icons/TS.svg';
import NodeJS from './../../Assets/Icons/NodeJS.svg';
import PostgreSQL from './../../Assets/Icons/PostgreSQL.svg';
import MySQL from './../../Assets/Icons/MySQL.svg';
import SQLServer from './../../Assets/Icons/SQLServer.svg';
import Angular from './../../Assets/Icons/Angular.svg';
import HTML5 from './../../Assets/Icons/HTML5.svg';
import CSS3 from './../../Assets/Icons/CSS3.svg';
import Sass from './../../Assets/Icons/Sass.svg';
import Git from './../../Assets/Icons/Git.svg';
import GitHub from './../../Assets/Icons/GitHub.svg';
import NPM from './../../Assets/Icons/NPM.svg';

import Golang from './../../Assets/Icons/Golang.svg';
import Rust from './../../Assets/Icons/Rust.svg';

import Docker from './../../Assets/Icons/Docker.svg';
import Kubernetes from './../../Assets/Icons/Kubernetes.svg';
import Lua from './../../Assets/Icons/Lua.svg';

type LighthouseItems = {
    title: string;
    content: string;
    imgHeight: string;
    imgWidth: string;
    divHeight: string;
    divWidth: string;
    collection: string[];
};

const LighthouseContent: Array<LighthouseItems> = [
    {
        title: 'On Sight:',
        content: `I’ve focused on web development in these two years of learning programming. I'm proficient in JS, TS, React, C# and other techs that you can check on the right. It's being a great experience to use these tools, but, as I said, they're tools - we have to learn how to use them right. During this period, I've tried to understand which paradigm and design pattern suits better for certain situations/tasks . Oh, of course, always trying to follow good code practices.`,
        imgWidth: '90px',
        imgHeight: '90px',
        divHeight: '180px',
        divWidth: '175px',
        collection: [
            React,
            CSharp,
            JS,
            TS,
            NodeJS,
            PostgreSQL,
            MySQL,
            SQLServer,
            Angular,
            HTML5,
            CSS3,
            Sass,
            Git,
            GitHub,
            NPM,
        ],
    },
    {
        title: 'Still tying the knots:',
        content: `For me, coding is all about challenge myself and constant learning.  Learning new programming languages and frameworks will make you a better developer. I chose these techs because they are very promising or they still relevant for the market.`,
        imgWidth: '90px',
        imgHeight: '90px',
        divHeight: '139px',
        divWidth: '175px',
        collection: [Golang, Lua, Rust],
    },
    {
        title: 'On the Horizon:',
        content: `I still need to learn a bunch of stuff that are very important for modern web development (Docker, Kubernetes... just to name a few) - and my interest and desire are aiming it. As a very curious programmer, I like to learn different and unique languages - that's why Lua is on the wishlist.`,
        imgWidth: '90px',
        imgHeight: '90px',
        divHeight: '139px',
        divWidth: '175px',
        collection: [Docker, Kubernetes],
    },
];

function LighthouseOfTech() {
    return (
        <div className="lighthouse-content-main">
            {LighthouseContent.map((obj) => {
                return (
                    <div key={obj.title} className="lighthouse-content">
                        <div className="lighthouse-text-div">
                            <p className="lighthouse-title">{obj.title}</p>
                            <p
                                className="lighthouse-text"
                                id={
                                    obj.title == 'On Sight:'
                                        ? 'first-item-div'
                                        : ''
                                }
                            >
                                &emsp;{obj.content}
                            </p>
                        </div>
                        <div className="lighthouse-carousel">
                            <CarouselArrowed
                                id={obj.title}
                                collection={obj.collection}
                                imgHeight={obj.imgHeight}
                                imgWidth={obj.imgWidth}
                                mainDivHeight={obj.divHeight}
                                mainDivWidth={obj.divWidth}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default LighthouseOfTech;
