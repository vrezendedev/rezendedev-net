import './../index.css';

import VoidDetailedTerrain from '../../../../Assets/ChildWindow/Kingdoms/Void/VoidDetailedTerrain.gif';
import VoidGitHubStar from '../../../../Assets/ChildWindow/Kingdoms/Void/VoidGitHubStar.png';
import VoidItchIoStar from '../../../../Assets/ChildWindow/Kingdoms/Void/VoidItchIoStar.png';
import VoidLinkedInStar from '../../../../Assets/ChildWindow/Kingdoms/Void/VoidLinkedInStar.png';
import VoidBandcampStar from '../../../../Assets/ChildWindow/Kingdoms/Void/VoidBandcampStar.png';

import { ContentWindowProps } from '../../index';

function VoidDetailed({ setLocationSubtitle }: ContentWindowProps) {
    return (
        <div>
            <img
                className="terrain-detailed"
                src={VoidDetailedTerrain}
                draggable={false}
            />
            <img
                className="building"
                src={VoidGitHubStar}
                draggable={false}
                style={{
                    left: '24.5%',
                    top: '19%',
                }}
                onMouseEnter={() => setLocationSubtitle('GitHub')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() =>
                    open('https://github.com/vrezendedev/', '_blank')
                }
            />
            <img
                className="building"
                src={VoidItchIoStar}
                draggable={false}
                style={{
                    left: '70.5%',
                    top: '19%',
                }}
                onMouseEnter={() => setLocationSubtitle('Itch.Io')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() => open('https://wiseshepherd.itch.io/', '_blank')}
            />
            <img
                className="building"
                src={VoidLinkedInStar}
                draggable={false}
                style={{
                    left: '17%',
                    top: '63%',
                }}
                onMouseEnter={() => setLocationSubtitle('LinkedIn')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() =>
                    open(
                        'https://www.linkedin.com/in/vinicius-inacio-rezende/',
                        '_blank'
                    )
                }
            />
            <img
                className="building"
                src={VoidBandcampStar}
                draggable={false}
                style={{
                    right: '25.8%',
                    top: '62%',
                }}
                onMouseEnter={() => setLocationSubtitle('Bandcamp')}
                onMouseLeave={() => setLocationSubtitle('')}
                onClick={() =>
                    open('https://wiseshepherd.bandcamp.com/', '_blank')
                }
            />
        </div>
    );
}

export default VoidDetailed;
