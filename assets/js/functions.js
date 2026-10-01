const defaultChar = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultChar,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcener = (name) => {
    return {
        ...defaultChar,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }    
}

const createLittleMonster = () => {
    return {
        ...defaultChar,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultChar,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const Stage =  {
    fighter1: null,
    fighter2: null,
    fighter1E1: null,
    fighter2E2: null,

    start(fighter1, fighter2, fighter1E1, fighter2E2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E1 = fighter1E1;
        this.fighter2E2 = fighter2E2;

        this.fighter1E1.querySelector('.atackBtn').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2E2.querySelector(".atackBtn").addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update(){
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife)*100;
        this.fighter1E1.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2E2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife)*100;
        this.fighter2E2.querySelector('.bar').style.width = `${f2Pct}%`;
    },
        
    doAttack(attacking, attacked){
        if(this.fighter1.life <= 0 || this.fighter2.life <= 0){
            log.addMenssage("Um dos dois papocou")
            return;
        }

        const attackFator = (Math.random() * 2).toFixed(2);
        const defenseFator = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFator;
        const actualDefense = attacked.defense * defenseFator;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMenssage(`${attacking.name} causou ${actualAttack.toFixed(1)} em ${attacked.name}`)
        } else{
            log.addMenssage(`${attacked.name} conseguiu se defender`)
        }

        this.update();
    },

}

const log = {
    list: [],
    addMenssage(msg){
        this.list.push(msg);
        this.render();
    },

    render(){
        let painel = document.querySelector('.log');
        painel.innerHTML = '';

        for(let i in this.list){
            painel.innerHTML += `<li>${this.list[i]}</li>`
        }
    }

}