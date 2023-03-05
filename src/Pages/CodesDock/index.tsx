import './index.css';

import CourseRepo from './../../Assets/Icons/CourseRepo.png';
import MiscRepo from './../../Assets/Icons/MiscRepo.png';
import CurrentlyWorkingRepo from './../../Assets/Icons/CurrentlyWorkingRepo.png';

function CodesDock() {
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
                    Bacon ipsum dolor amet chislic ribeye cupim chicken,
                    prosciutto pork pork chop chuck kevin brisket hamburger.
                    Bresaola porchetta cupim, pork strip steak salami spare ribs
                    meatloaf ham hock doner pastrami sausage turkey andouille.
                    Short ribs bresaola frankfurter pork chop spare ribs venison
                    beef ribs sausage pork loin pork. Ham hock porchetta
                    shoulder ham cupim doner prosciutto meatball. Bacon ipsum
                    dolor amet chislic ribeye cupim chicken, prosciutto pork
                    pork chop chuck kevin brisket hamburger. Bresaola porchetta
                    cupim, pork strip steak salami spare ribs meatloaf ham hock
                    doner pastrami sausage turkey andouille. Short ribs bresaola
                    frankfurter pork chop spare ribs venison beef ribs sausage
                    pork loin pork. Ham hock porchetta shoulder ham cupim doner
                    prosciutto meatball.
                </p>
            </div>
            <div className="codes-dock-images">
                <img src={CourseRepo} draggable={false} />
                <img src={MiscRepo} draggable={false} />
                <img src={CurrentlyWorkingRepo} draggable={false} />
            </div>
        </div>
    );
}

export default CodesDock;
