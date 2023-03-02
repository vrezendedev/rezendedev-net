import './../index.css';

import WizardReignDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Wizard/WizardReignDetailedTerrain.png';
import WizardReignDetailedTowers from '../../../../Assets/ChildWindow/Kingdoms/Wizard/WizardReignDetailedTowers.png';

import { ContentWindowProps } from '../../index';

import Clouds from './../../../../Components/Clouds';

function WizardReignDetailed({
    setLocationSubtitle,
    handleBrowserContent,
}: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={WizardReignDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={WizardReignDetailedTowers}
                draggable={false}
                style={{
                    left: '58%',
                    top: '42%',
                }}
                onMouseEnter={() => setLocationSubtitle('Towers of Wisdom')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => handleBrowserContent('towersofwisdom.sail')}
            />

            <Clouds
                parentHeight={180}
                parentWidth={324}
                zIndex={14}
                numberOfClouds={8}
            />
        </div>
    );
}

export default WizardReignDetailed;
