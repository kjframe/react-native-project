import { useState } from 'react';
import { View } from 'react-native';
import { RACES } from '../shared/races';
import RaceInfoScreen from './RaceInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [races, setRaces] = useState(RACES);
    const [selectedRaceId, setSelectedRaceId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                races={races}
                onPress={(raceId) => setSelectedRaceId(raceId)}
            />
            <RaceInfoScreen
                race={
                    races.filter(
                        (race) => race.id === selectedRaceId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;