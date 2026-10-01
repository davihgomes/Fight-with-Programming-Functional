const char = createKnight('Dante')
const monster = createBigMonster();

Stage.start(
    char, monster, document.querySelector('#char'), document.querySelector('#monster')
)