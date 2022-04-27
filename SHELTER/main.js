// JSON PETS DATA

const petsData = [{
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

//     POP-UP

const POPUP = document.querySelector('.pets__modal');
let cardPetsPopUp = document.querySelector('#item-active'); //  > .card__wrapp
let cardPetsPopUpLIVE = cardPetsPopUp.children;

// Modal animation
function popupAnimation() {
    // modal on/off
    let isModalOn = POPUP.style.display === 'flex';
    POPUP.style.display = isModalOn ? 'none' : 'flex';
    // stop scroll
    document.querySelector('body').classList.toggle('_lock');
    // blackout
    document.querySelector('.blackout-modal').classList.toggle('_blackout-popup-active');
}

document.querySelector('.blackout-modal').addEventListener('click', popupAnimation);

// Modal events

let popupGenerator = (event) => {
    // delegation
    if (event.target.closest('.card__pets')) {
        popupAnimation();
    }

    // zeroing
    POPUP.innerHTML = '';

    // found index
    let dataID = event.target.closest('.card__pets').getAttribute('data-id');
    console.log(dataID)
    // popup generator
    POPUP.insertAdjacentHTML('afterbegin', `
        <img src="../../assets/images/${petsData[dataID].img}" width="500" height="500">
        <div class="content">
          <h3>${petsData[dataID].name}</h3>
          <h4>${petsData[dataID].type} - ${petsData[dataID].breed}</h4>
          <h5>${petsData[dataID].description}</h5>
          <ul class="content-list">
            <li><h5><b>Age: </b>${petsData[dataID].age}</h5></li>
            <li><h5><b>Inoculations: </b>${petsData[dataID].inoculations}</h5></li>
            <li><h5><b>Diseases: </b>${petsData[dataID].diseases}</h5></li>
            <li><h5><b>Parasites: </b>${petsData[dataID].parasites}</h5></li>
          </ul>
        </div>
        <div class="btn-close button__round"></div>`);
};

cardPetsPopUp.addEventListener('click', popupGenerator);




//      CAROUSEL 

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const carousel = document.querySelector('.carousel');

// fn btn
function animationBtnLeft() {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', animationBtnLeft);
    btnRight.removeEventListener('click', animationBtnRight);
    cardPetsPopUp.removeEventListener('click', popupGenerator);
}

function animationBtnRight() {
    carousel.classList.add('transition-right');
    btnRight.removeEventListener('click', animationBtnRight);
    btnLeft.removeEventListener('click', animationBtnLeft);
    cardPetsPopUp.removeEventListener('click', popupGenerator);

}

// event click
btnLeft.addEventListener('click', animationBtnLeft);
btnRight.addEventListener('click', animationBtnRight);
// event back end
carousel.addEventListener('animationend', (animationEvent) => {

    if (animationEvent.animationName === 'move-left') {
        carousel.classList.remove('transition-left');

        const itemsLeft = document.querySelector('#item-left').innerHTML;
        document.querySelector('#item-active').innerHTML = itemsLeft;

    } else {
        carousel.classList.remove('transition-right');
        const itemsRight = document.querySelector('#item-right').innerHTML;
        document.querySelector('#item-active').innerHTML = itemsRight;
    }
    btnLeft.addEventListener('click', animationBtnLeft);
    btnRight.addEventListener('click', animationBtnRight);
    btnLeft.addEventListener('click', nonActiveGeneratorLeft);
    btnRight.addEventListener('click', nonActiveGeneratorRight);
    cardPetsPopUp.addEventListener('click', popupGenerator);
});

// card generator


const cardPetsActive = document.querySelectorAll("#item-active > div > div");
const cardPetsLeft = document.querySelectorAll("#item-left > div > div");
const cardPetsRight = document.querySelectorAll("#item-right > div > div");
const cardWrapp = document.querySelector(".card__wrapp > div");
const cardPets = document.querySelectorAll('.card__pets');

let randomStack = [];
let usedStack = [];

// active section
function cardGeneretor() {
    // random generator
    for (let i = 0; i < cardPets.length - 1; i++) {
        randomStack.push(i);
    }

    // zeroing
    for (let i = 0; i < cardPetsActive.length; i++) {
        cardPetsActive[i].innerHTML = '';
    }

    // card generator
    for (let i = 0; i < 3; i++) {
        let random = randomStack.splice(Math.random() * (randomStack.length), 1)[0];

        cardPetsActive[i].insertAdjacentHTML('afterbegin', `<button class="button__pets">Learn more</button>`);
        cardPetsActive[i].insertAdjacentHTML('afterbegin', `<p>${petsData[random].name}</p>`);
        cardPetsActive[i].insertAdjacentHTML('afterbegin', `<img src="${petsData[random].img}">`);
        cardPetsActive[i].dataset.id = random;
    }
};
cardGeneretor();



// non-active sections LEFT
function nonActiveGeneratorLeft() {
    btnLeft.removeEventListener('click', nonActiveGeneratorLeft);
    btnRight.removeEventListener('click', nonActiveGeneratorRight);

    // zeroing
    for (let i = 0; i < cardPetsLeft.length; i++) {
        cardPetsLeft[i].innerHTML = '';
    }
    // generator
    for (let i = 0; i < 3; i++) {
        let random = randomStack.splice(Math.random() * (randomStack.length), 1)[0];
        usedStack.push(random);
        cardPetsLeft[i].insertAdjacentHTML('afterbegin', `<button class="button__pets">Learn more</button>`);
        cardPetsLeft[i].insertAdjacentHTML('afterbegin', `<p>${petsData[random].name}</p>`);
        cardPetsLeft[i].insertAdjacentHTML('afterbegin', `<img src="${petsData[random].img}">`);
        cardPetsLeft[i].dataset.id = random;

    }

    // new diff cards
    randomStack = [];
    // random
    for (let i = 0; i < cardPets.length - 1; i++) {
        randomStack.push(i);
    }
    randomStack = randomStack.filter(x => !usedStack.includes(x));
    usedStack = [];
}

// non-active sections RIGHT
function nonActiveGeneratorRight() {
    btnLeft.removeEventListener('click', nonActiveGeneratorLeft);
    btnRight.removeEventListener('click', nonActiveGeneratorRight);

    // zeroing
    for (let i = 0; i < cardPetsRight.length; i++) {
        cardPetsRight[i].innerHTML = '';
    }
    // generator
    for (let i = 0; i < 3; i++) {
        let random = randomStack.splice(Math.random() * (randomStack.length), 1)[0];
        usedStack.push(random);
        cardPetsRight[i].insertAdjacentHTML('afterbegin', `<button class="button__pets">Learn more</button>`);
        cardPetsRight[i].insertAdjacentHTML('afterbegin', `<p>${petsData[random].name}</p>`);
        cardPetsRight[i].insertAdjacentHTML('afterbegin', `<img src="${petsData[random].img}">`);
        cardPetsRight[i].dataset.id = random;

    }

    // new diff cards
    randomStack = [];
    // random
    for (let i = 0; i < cardPets.length - 1; i++) {
        randomStack.push(i);
    }
    randomStack = randomStack.filter(x => !usedStack.includes(x));
    usedStack = [];
}

btnLeft.addEventListener('click', nonActiveGeneratorLeft);
btnRight.addEventListener('click', nonActiveGeneratorRight);



//       BURGER-MENU

const menuBurger = document.querySelector('.menu-burger');
const navigation = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
const blackoutWindow = document.querySelector('.blackout');
const activeLink = document.querySelector('.active-link');
const headerOurPets = document.querySelector('.header');

function menuEvents() {
    // menu animation
    navigation.classList.toggle('_active');
    // stop scroll
    document.querySelector('body').classList.toggle('_lock');
    // burger animation
    const is90deg = (menuBurger.style.transform === 'rotate(90deg)');
    menuBurger.style.transform = is90deg ? 'rotate(0deg)' : 'rotate(90deg)';
    // blackout
    document.querySelector('.blackout').classList.toggle('_blackout-active');
    // deactivate link
    activeLink.href = '#!';
    // our pets sticky header fix
    const isHeaderSticky = headerOurPets.style.position === 'sticky';
    headerOurPets.style.position = isHeaderSticky ? 'none' : 'sticky';
}

function menuEventsOff() {
    // burger animation
    const is90deg = (menuBurger.style.transform === 'rotate(90deg)');
    menuBurger.style.transform = is90deg ? 'rotate(0deg)' : 'rotate(90deg)';
    // menu animation
    navigation.classList.remove('_active');
    // stop scroll
    document.querySelector('body').classList.remove('_lock');
    // blackout
    document.querySelector('.blackout').classList.remove('_blackout-active');
}

// click events
menuBurger.addEventListener('click', menuEvents);
blackoutWindow.addEventListener('click', menuEvents);
navLinks.addEventListener('click', menuEventsOff);


//   HOVER FIX

const btnCLOSE = document.querySelector('.btn-close');
const blackoutFIX = document.querySelector('.blackout-modal');

blackoutFIX.addEventListener('mouseover', () => {
    document.querySelector('.btn-close').classList.add('js-hover');
});

blackoutFIX.addEventListener('mouseout', () => {
    document.querySelector('.btn-close').classList.remove('js-hover');
});

// btn CLOSE FIX

const modalBtnClose = document.querySelector('.pets__modal');

modalBtnClose.addEventListener('click', (event) => {
    if (event.target.className === 'btn-close button__round') {
        popupAnimation()
    }
});
