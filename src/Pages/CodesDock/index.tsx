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
                <p className="codes-dock-text-content">
                    Organization is very important and my GitHub didn't escape
                    from it. If you want to check the code that I write along
                    courses or something like that, check out my "courses"
                    repository. The "misc" repository is the lair for different
                    and small software ideas. Finally, if you want to check the
                    currently project/repository that I'm working on, press the
                    start button below. About the "courses" repository, I don't
                    like to simply copy things so at the end of each project I
                    tend to increment it a bit. To avoid creating one single
                    repository for micro projects, I decided to create a major
                    repo for it, it's not the best practice but, well, it seemed
                    right. Maybe the current project that I'm working is not
                    publicly available but I'll always update the link for the
                    latest one.
                </p>
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
