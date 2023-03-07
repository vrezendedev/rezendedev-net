import { useState } from 'react';

import './index.css';

import CourseRepo from './../../Assets/Icons/CourseRepo.png';
import MiscRepo from './../../Assets/Icons/MiscRepo.png';
import CurrentlyWorkingRepo from './../../Assets/Icons/CurrentlyWorkingRepo.png';

function CodesDock() {
    const [displayImageText, SetDisplayImageText] = useState('');

    return (
        <div className="codes-dock-content-main">
            <div className="codes-dock-quote-div">
                <p className="codes-dock-quote">
                    "A Dock without explanation is a meaningless dock!"
                </p>
                <p className="codes-dock-author">
                    Alastor, the philosophical stevedore/fisherman.
                </p>
            </div>
            <div className="codes-dock-text-div">
                <p className="codes-dock-text-title">Fishing Repositories</p>
                <p className="codes-dock-text-content"></p>
            </div>
            <div className="codes-dock-images">
                <img
                    src={CourseRepo}
                    draggable={false}
                    onMouseOver={() => {
                        SetDisplayImageText('courses');
                    }}
                    onMouseLeave={() => {
                        SetDisplayImageText('');
                    }}
                    onClick={() => {
                        open(
                            'https://github.com/vrezendedev/courses',
                            '_blank'
                        );
                    }}
                />
                {displayImageText == 'courses' ? (
                    <p className="item-courses">Courses Repository</p>
                ) : null}

                <img
                    src={MiscRepo}
                    draggable={false}
                    onMouseOver={() => {
                        SetDisplayImageText('misc');
                    }}
                    onMouseLeave={() => {
                        SetDisplayImageText('');
                    }}
                    onClick={() => {
                        open('https://github.com/vrezendedev/misc', '_blank');
                    }}
                />
                {displayImageText == 'misc' ? (
                    <p className="item-misc">Misc Repository</p>
                ) : null}

                <img
                    src={CurrentlyWorkingRepo}
                    draggable={false}
                    onMouseOver={() => {
                        SetDisplayImageText('currently');
                    }}
                    onMouseLeave={() => {
                        SetDisplayImageText('');
                    }}
                    onClick={() => {
                        open(
                            'https://github.com/vrezendedev/rezendedev-net',
                            '_blank'
                        );
                    }}
                />
                {displayImageText == 'currently' ? (
                    <p className="item-currently">Currently working...</p>
                ) : null}
            </div>
        </div>
    );
}

export default CodesDock;
