import util from '../helpers/utils.js'
import deadPersons from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const corpses = deadPersons.getDeadPersons();
    let domString = ''
    domString += `<div class="card">`
    domString += `<div class="card-header">GRAVEYARD</div>`
    domString += `<ul class="list-group list-group-flush">`
    corpses.forEach((corpse) => {
        domString += `<li class="list-group-item">${corpse.name}</li>`
    });
    domString += `</ul>`
    domString += `</div>`

    util.printToDom('graveyard', domString)
}

export default { buildGraveyard }