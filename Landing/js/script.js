// --- Константы и переменные ---

const ringsCollection = {
    showAll: [
        "images/gold1.jpg",
        "images/silver1.jpg",
        "images/titan1.jpg",
        "images/platinum1.jpg",
        "images/titan2.jpg",
        "images/platinum2.jpg",
        "images/gold2.jpg",
        "images/silver2.jpg",
    ],
    gold: Array(8).fill(0).map((u,i) => "images/gold" + (i + 1) + ".jpg"),
    silver: Array(8).fill(0).map((u,i) => "images/silver" + (i + 1) + ".jpg"),
    platinum: Array(8).fill(0).map((u,i) => "images/platinum" + (i + 1) + ".jpg"),
    titanium: Array(8).fill(0).map((u,i) => "images/titan" + (i + 1) + ".jpg"),
}

const allRingsBtn = document.querySelector('.showAll'),
      goldRingsBtn = document.querySelector('.gold'),
      silverRingsBtn = document.querySelector('.silver')
      platinumRingsBtn = document.querySelector('.platinum'),
      titaniumRingsBtn = document.querySelector('.titanium');
const arrRings = [allRingsBtn, goldRingsBtn, silverRingsBtn, platinumRingsBtn, titaniumRingsBtn];

const c0 = document.querySelector('.c0');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const arrCircle = [c0, c1, c2, c3];

const blok1 = document.querySelector('.blok1'),
    blok2 = document.querySelector('.blok2'),
    blok3 = document.querySelector('.blok3'),
    blok4 = document.querySelector('.blok4'),
    bigBlok = document.querySelector('.big_blok'),
    btnRightLeft = document.querySelector('.btn_right_left'),
    btnLeft = document.querySelector('.btn_left'),
    btnRight = document.querySelector('.btn_right'),
    arrBlok = [blok1, blok2, blok3, blok4];


let activeCircleBtn = document.querySelector('.active_circle');
let typeActiveCircle = activeCircleBtn.classList[0];

let activeRingsBtn = document.querySelector('.active_link');
let typeActiveRings = activeRingsBtn.classList[0];

const ringsDiv = document.querySelector('.article4_flex');

// --- Основной код ---

// Добавление слушателей
arrRings.forEach(ringsBtn => {ringsBtn.addEventListener('click', (e) => onClickBtn(e, ringsBtn))});
arrCircle.forEach(circle => {circle.addEventListener('click', (e) => onClickCircle(e, circle))});
btnLeft.addEventListener('click', (e) => onClickLeftRightBtn(e, btnLeft, 1));
btnRight.addEventListener('click', (e) => onClickLeftRightBtn(e, btnLeft, -1));

// Ф-ия нажатия на кнопку навигации влево-вправо
function onClickLeftRightBtn(e, btn, typeBtn){
    e.preventDefault();
    if([...btn.classList].includes('btn_left')) onClickCircle(e, null, typeBtn);
    else onClickCircle(e, null, typeBtn);
}

// Ф-ия нажатия на кружочек
function onClickCircle(e, circleBtn = null, typeBtn = 0){
    e.preventDefault();
    activeCircleBtn.classList.remove('active_circle');
    if(circleBtn) activeCircleBtn = circleBtn;
    else if (typeBtn === 1) activeCircleBtn = arrCircle[(+[...activeCircleBtn.classList][0].slice(1)+4-1)%4];
    else activeCircleBtn = arrCircle[(+[...activeCircleBtn.classList][0].slice(1)+1)%4];
    typeActiveCircle = activeCircleBtn.classList[0];
    activeCircleBtn.classList.add('active_circle');
    onClickCircleBtn(typeActiveCircle);
}

// Ф-ия для удаления и вставки необходимых Dom-элементов (блоков: blok1, ...)
function onClickCircleBtn(activeCircle){
    [...bigBlok.children].forEach(i => i.remove());
    bigBlok.append(btnRightLeft);
    let num = +activeCircle.slice(1);
    for (let i=num+6; i>num+2; i--){
        bigBlok.append(arrBlok[i%4]);
    }
}

// Ф-ия при нажатии на кнопку меню колец
function onClickBtn(e, ringsBtn){
    e.preventDefault();
    activeRingsBtn.classList.remove('active_link');
    activeRingsBtn = ringsBtn;
    typeActiveRings = activeRingsBtn.classList[0];
    ringsBtn.classList.add('active_link');
    onClickRingsBtn(typeActiveRings);
}

// Ф-ия, формирующая кольца dom-элемента
function onClickRingsBtn(activeRings){
    [...ringsDiv.children].forEach(i => i.remove());

    ringsCollection[activeRings].forEach(i => {
        let ringImg = document.createElement('img');
        ringImg.setAttribute('src', i);
        ringImg.setAttribute('alt', 'img');
        ringImg.setAttribute('class', 'img4');
        ringImg.setAttribute('width', '232');
        ringImg.setAttribute('height', '232');
        ringsDiv.append(ringImg);
    })
}