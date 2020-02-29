import util from '../helpers/utils.js'
import deadPersons from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const corpses = deadPersons.getDeadPersons();
    let domString = ''
    corpses.forEach((corpse) => {
        domString += '<div class="col-3 person-card">'
        domString += '<div class="card">'
        domString += `<div class="card-body">${corpse.name}</div>`
        domString += `<button class="btn btn-dark revive-btn" id="${corpse.id}">REVIVE</button>`
        domString += '</div>'
        domString += '</div>'
    });

    util.printToDom('graveyard', domString)
}

export default { buildGraveyard }