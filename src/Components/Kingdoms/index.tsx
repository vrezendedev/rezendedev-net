import { useEffect, useState } from 'react';

import './../Kingdoms/index.css';

import ArtKingdomTerrain from '../../Assets/MainWindow/Kingdoms/Art/ArtKingdomTerrain.png';
import ArtKingdomLimits from '../../Assets/MainWindow/Kingdoms/Art/ArtKingdomLimits.png';
import ArtKindgomTitle from '../../Assets/MainWindow/Kingdoms/Art/ArtKingdomTitle.png';

import ProgrammingKingdomTerrain from '../../Assets/MainWindow/Kingdoms/Programming/ProgrammingKingdomTerrain.png';
import ProgrammingKingdomLimits from '../../Assets/MainWindow/Kingdoms/Programming/ProgrammingKingdomLimit.png';
import ProgrammingKingdomTitle from '../../Assets/MainWindow/Kingdoms/Programming/ProgrammingKingdomTitle.png';

import GameDevTerrain from '../../Assets/MainWindow/Kingdoms/GameDev/GameDevTerrain.png';
import GameDevLimit from '../../Assets/MainWindow/Kingdoms/GameDev/GameDevLimit.png';
import GameDevTitle from '../../Assets/MainWindow/Kingdoms/GameDev/GameDevTitle.png';

import WizardRealmTerrain from '../../Assets/MainWindow/Kingdoms/Wizard/WizardRealmTerrain.png';
import WizardRealmLimit from '../../Assets/MainWindow/Kingdoms/Wizard/WizardRealmLimit.png';
import WizardRealmTitle from '../../Assets/MainWindow/Kingdoms/Wizard/WizardRealmTitle.png';

import MusicKingdomTerrain from '../../Assets/MainWindow/Kingdoms/Music/MusicKingdomTerrain.png';
import MusicKingdomLimit from '../../Assets/MainWindow/Kingdoms/Music/MusicKingdomLimit.png';
import MusicKingdomTitle from '../../Assets/MainWindow/Kingdoms/Music/MusicKingdomTitle.png';

import VoidTerrain from '../../Assets/MainWindow/Kingdoms/Void/VoidTerrain.gif';
import VoidLimit from '../../Assets/MainWindow/Kingdoms/Void/VoidLimit.png';
import VoidTitle from '../../Assets/MainWindow/Kingdoms/Void/VoidTitle.png';

type Kingdom = {
    name: string;
    terrainClass: string;
    terrainImage: string;
    limitClass: string;
    limitImage: string;
    titleClass: string;
    titleImage: string;
};

type KingdomProps = {
    kingdomHighlighted: string;
    setKingdomHighlighted: React.Dispatch<React.SetStateAction<string>>;
    setKingdomModals: React.Dispatch<React.SetStateAction<String[]>>;
};

function Kingdoms({
    kingdomHighlighted,
    setKingdomHighlighted,
    setKingdomModals,
}: KingdomProps) {
    const Kingdoms: Array<Kingdom> = [
        {
            name: 'art',
            terrainClass: 'art-kingdom-terrain',
            terrainImage: ArtKingdomTerrain,
            limitClass: 'art-kingdom-limits',
            limitImage: ArtKingdomLimits,
            titleClass: 'art-kingdom-title',
            titleImage: ArtKindgomTitle,
        },
        {
            name: 'programming',
            terrainClass: 'programming-kingdom-terrain',
            terrainImage: ProgrammingKingdomTerrain,
            limitClass: 'programming-kingdom-limits',
            limitImage: ProgrammingKingdomLimits,
            titleClass: 'programming-kingdom-title',
            titleImage: ProgrammingKingdomTitle,
        },
        {
            name: 'gamedev',
            terrainClass: 'gamedev-kingdom-terrain',
            terrainImage: GameDevTerrain,
            limitClass: 'gamedev-kingdom-limits',
            limitImage: GameDevLimit,
            titleClass: 'gamedev-kingdom-title',
            titleImage: GameDevTitle,
        },
        {
            name: 'wizard',
            terrainClass: 'wizard-kingdom-terrain',
            terrainImage: WizardRealmTerrain,
            limitClass: 'wizard-kingdom-limits',
            limitImage: WizardRealmLimit,
            titleClass: 'wizard-kingdom-title',
            titleImage: WizardRealmTitle,
        },
        {
            name: 'music',
            terrainClass: 'music-kingdom-terrain',
            terrainImage: MusicKingdomTerrain,
            limitClass: 'music-kingdom-limits',
            limitImage: MusicKingdomLimit,
            titleClass: 'music-kingdom-title',
            titleImage: MusicKingdomTitle,
        },
        {
            name: 'void',
            terrainClass: 'void-terrain',
            terrainImage: VoidTerrain,
            limitClass: 'void-limits',
            limitImage: VoidLimit,
            titleClass: 'void-title',
            titleImage: VoidTitle,
        },
    ];

    return (
        <div>
            {Kingdoms.map((kingdom) => {
                return (
                    <div key={kingdom.name}>
                        <img
                            className={kingdom.terrainClass}
                            src={kingdom.terrainImage}
                            style={{
                                opacity:
                                    kingdomHighlighted == kingdom.name
                                        ? '1'
                                        : '0.25',
                            }}
                            draggable="false"
                        />
                        <img
                            className={kingdom.limitClass}
                            src={kingdom.limitImage}
                            style={{
                                display:
                                    kingdomHighlighted == kingdom.name
                                        ? 'none'
                                        : 'inline',
                            }}
                            draggable="false"
                        />
                        <img
                            className={kingdom.titleClass}
                            src={kingdom.titleImage}
                            onMouseOver={() =>
                                setKingdomHighlighted(kingdom.name)
                            }
                            onMouseLeave={() => setKingdomHighlighted(' ')}
                            onClick={() =>
                                setKingdomModals((prev) => {
                                    if (!prev.includes(kingdom.name))
                                        return [...prev, kingdom.name];
                                    else return prev;
                                })
                            }
                            draggable="false"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Kingdoms;
