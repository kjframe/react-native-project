import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { RACES } from '../shared/races';

const DirectoryScreen = ({ navigation }) => {
    const [races, setRaces] = useState(RACES);

    const renderDirectoryItem = ({ item: race }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('RaceInfo', { race })
                }
            >
                <Avatar source={race.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{race.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {race.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={races}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;