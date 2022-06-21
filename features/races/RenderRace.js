import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderRace = ({ race }) => {
    if (race) {
        return (
            <Card containerStyle={{ padding: 1 }}>
                <Card.Image source={race.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{race.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderRace;