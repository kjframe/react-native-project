import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: race }) => {
        return (
            <ListItem>
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
            data={props.races}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;