import { useState } from 'react';
import { RACES } from '../shared/races';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [races, setRaces] = useState(RACES);

    return <DirectoryScreen races={races} />;
}

export default Main;