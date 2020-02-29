import tank from './components/tank.js'
import graves from './components/graveyard.js'
import personData from './helpers/data/personData.js'

const sharkAttackEvent = () => {
    personData.randomMurder();
    tank.tankBuilder();
    graves.buildGraveyard();
}

const reviveEvent = (e) => {
    const personId = e.target.id;
    personData.bringToLife(personId);
    tank.tankBuilder();
    graves.buildGraveyard();
}

const init = () => {
    tank.tankBuilder();
    graves.buildGraveyard();
    $("#bite-me").click(sharkAttackEvent)
    $('body').on('click', '.revive-btn', reviveEvent);
}

init();