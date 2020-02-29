import tank from './components/tank.js'
import graves from './components/graveyard.js'

const init = () => {
    tank.tankBuilder();
    graves.buildGraveyard();

}

init();