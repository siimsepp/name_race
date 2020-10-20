const textarea = document.querySelector('#textarea');
const input = document.querySelector('#nimed-btn');
const ul = document.querySelector('#ul');

const nimed = document.querySelector('.nimed');
const nupud = document.querySelector('.nupud');
const manguVoitja = document.querySelector('.mangu-voitja');
const manguVoitjaId = document.querySelector('#mangu-voitja-id');


const nupp = document.querySelector('#nupp');



input.addEventListener('click', e => {
    const nimedArr = textarea.value.split('\n'); 
    alustaMangu(nimedArr); 
});

const alustaMangu = nimedArr => {
    nupud.style.visibility = 'visible';
    nimed.style.display = 'none';

    // let summad = [0, 0, 0, 0, 0, 0];
    let summad = new Array(nimedArr.length+1).join('0').split('').map(parseFloat);
    nupp.addEventListener('click', () => {

        
        
        document.querySelector('.vooru-voitja').style.visibility = 'visible';
        document.querySelector('.skoor').style.visibility = 'visible';

        if (Math.max(...summad) !== 10) {

            const randNum = Math.floor(Math.random() * nimedArr.length + 1) - 1;
            const voitja = nimedArr[randNum];
            summad[randNum]++;

            document.getElementById('voitja').innerHTML = `<h3>${voitja}</h3>`;


            html = '';
            nimedArr.map((nimi, index) => {
                html += `<li class="collection-item"><h5>${nimi}: ${summad[index]}</h5></li>`;
            })
            ul.innerHTML = html;

            if (Math.max(...summad) === 10) {
                // Näita võitja cardi.
                console.log('Oleme siin');
                manguVoitja.style.visibility = 'visible';
                let i = summad.indexOf(Math.max(...summad));
                manguVoitjaId.innerHTML = `<h2>Võitis ${nimedArr[i]}</h2>`;

                nupp.disabled = true;
                const mangiUuestiBtn = document.getElementById('mangiuuesti');
                mangiUuestiBtn.style.visibility = 'visible';

                mangiUuestiBtn.addEventListener('click', () => {
                    location.reload();
                });
            }
        }
    });

}
