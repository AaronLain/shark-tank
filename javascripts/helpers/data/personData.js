const persons = [
    {
        id: 'person1',
        name: 'zoe',
        isDead: false
    },

    {
        id: 'person2',
        name: 'luke',
        isDead: false
    },

    {
        id: 'person3',
        name: 'mary',
        isDead: false
    },

    {
        id: 'person4',
        name: 'aaron',
        isDead: false
    },

    {
        id: 'person5',
        name: 'anca',
        isDead: false
    },

    {
        id: 'person6',
        name: 'beth',
        isDead: false
    },

    {
        id: 'person7',
        name: 'bethany',
        isDead: false
    },

    {
        id: 'person8',
        name: 'chris',
        isDead: false
    },

    {
        id: 'person9',
        name: 'david',
        isDead: false
    },

    {
        id: 'person10',
        name: 'davis',
        isDead: false
    },

    {
        id: 'person11',
        name: 'dylan',
        isDead: false
    },

    {
        id: 'person12',
        name: 'joey',
        isDead: false
    },
    {
        id: 'person13',
        name: 'john',
        isDead: false
    },

    {
        id: 'person14',
        name: 'jose',
        isDead: false
    },

    {
        id: 'person15',
        name: 'kayla',
        isDead: false
    },

    {
        id: 'person16',
        name: 'kenneth',
        isDead: false
    },

    {
        id: 'person17',
        name: 'liza',
        isDead: false
    },

    {
        id: 'person18',
        name: 'michele',
        isDead: false
    },

    {
        id: 'person19',
        name: 'monique',
        isDead: false
    },

    {
        id: 'person20',
        name: 'ola',
        isDead: false
    },

    {
        id: 'person21',
        name: 'sarah',
        isDead: true
    },

    {
        id: 'person22',
        name: 'stephen',
        isDead: true
    },

    {
        id: 'person23',
        name: 'steven',
        isDead: true
    },

    {
        id: 'person24',
        name: 'todd',
        isDead: true
    },

    {
        id: 'person25',
        name: 'zac',
        isDead: true
    }

];

const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
};

const getDeadPersons = () => {
    return persons.filter((x) => x.isDead);
};

const randomMurder = () => {
    const alivePeople = getAlivePersons();
    const r = Math.floor(Math.random() * alivePeople.length);
    const getDeadPersonId = alivePeople[r].id;
    const deadMan = persons.findIndex((x) => x.id === getDeadPersonId);
    persons[deadMan].isDead = true;
}

const bringToLife = (personId) => {
    console.log(personId)
    const deadPerson = persons.findIndex((x) => x.id === personId);
    persons[deadPerson].isDead = false;
};

export default { getAlivePersons, getDeadPersons, randomMurder, bringToLife }