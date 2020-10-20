const textarea = document.querySelector('#textarea');
const inputPunktid = document.querySelector('#punktid');
const input = document.querySelector('#nimed-btn');
const ul = document.querySelector('#ul');

const nimedCard = document.querySelector('.nimed-card');
const nupudCard = document.querySelector('.nupud-card');
const vooruVoitjaCard = document.querySelector('.vooru-voitja-card');
const manguVoitjaCard = document.querySelector('.mangu-voitja-card');
const uuestiCard = document.querySelector('.uuesti-card');

const skoor = document.querySelector('.skoor');
const vooruVoitjaId = document.querySelector('#vooru-voitja-id');
const manguVoitjaId = document.querySelector('#mangu-voitja-id');


const mangiUuestiBtn = document.querySelector('#mangi-uuesti-btn');
const valiVoitjaBtn = document.querySelector('#vali-voitja-btn');
const uuedMangijadBtn = document.querySelector('#uued-mangijad-btn');




const sisestaNimed = () => {
    uuestiCard.style.display = 'none';
    nimedCard.style.display = 'block';
    input.addEventListener('click', e => {
        nimedArr = textarea.value.split('\n');
        let punktid = parseInt(inputPunktid.value);
        if(isNaN(punktid)){
           punktid = 10;
        }
        localStorage.setItem('nimedArr', JSON.stringify(nimedArr));
        localStorage.setItem('manguPunktid', JSON.stringify(punktid)); 
        alustaMangu(nimedArr, punktid);
        e.preventDefault();
    });
}

const alustaMangu = (nimedArr, punktid) => {
    nupudCard.style.display = 'block';
    nimedCard.style.display = 'none';

    let summad = new Array(nimedArr.length+1).join('0').split('').map(parseFloat);
    valiVoitjaBtn.addEventListener('click', () => {

        
        
        vooruVoitjaCard.style.display = 'block';
        skoor.style.visibility = 'visible';

        if (Math.max(...summad) !== punktid) {

            const randNum = Math.floor(Math.random() * nimedArr.length + 1) - 1;
            const voitja = nimedArr[randNum];
            summad[randNum]++;

            vooruVoitjaId.innerHTML = `<h3>${voitja}</h3>`;


            html = '';
            nimedArr.map((nimi, index) => {
                html += `<li class="collection-item"><h5>${nimi}: ${summad[index]}</h5></li>`;
            })
            ul.innerHTML = html;

            if (Math.max(...summad) === punktid) {
                manguVoitjaCard.style.display = 'block';
                let i = summad.indexOf(Math.max(...summad));
                manguVoitjaId.innerHTML = `<h2>Võitis ${nimedArr[i]}</h2>`;

                valiVoitjaBtn.disabled = true;
                
                nupudCard.style.display = 'block';
                uuestiCard.style.display = 'block';

                uuedMangijadBtn.addEventListener('click', () => {
                    nupudCard.style.display = 'none';
                    vooruVoitjaCard.style.display = 'none';
                    manguVoitjaCard.style.display = 'none';
                    ul.innerHTML = '';
                    valiVoitjaBtn.disabled = false;
                    sisestaNimed();
                });

                mangiUuestiBtn.addEventListener('click', () => {
                    location.reload();
                });
            }
        }
    });

}

// console.log(inputPunktid.value);
// console.log(typeof inputPunktid.value);


// const parsed = parseInt(x, base);
//   if (isNaN(parsed)) { return 0; }

// const punktid = parseInt(inputPunktid.value);
// console.log(punktid);


// console.log(typeof);
// const punktid = Number(inputPunktid.value) ? Number(inputPunktid.value) : 10;
// console.log(typeof punktid);
// console.log(inputPunktid.value);
// console.log(parseFloat(inputPunktid.value));
// console.log(Number.isFinite(parseInt(inputPunktid.value));
// console.log(punktid);
// console.log('Points: ' + punktid);


let nimedArr = localStorage.getItem('nimedArr') ? JSON.parse(localStorage.getItem("nimedArr")) : [];
let punktid = localStorage.getItem('manguPunktid') ? JSON.parse(localStorage.getItem("manguPunktid")) : 10;
// console.log(punktid);
if (nimedArr.length === 0) {
    sisestaNimed();
} else {
    alustaMangu(nimedArr, punktid); 
}
