import RenderRace from '../features/races/RenderRace';

const RaceInfoScreen = ({ route }) => {
    const { race } = route.params;
    return <RenderRace race={race} />;
};

export default RaceInfoScreen;