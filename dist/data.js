"use strict";
;
const cards = [
    {
        id: 1,
        title: 'Title',
        imageURL: 'src/img/Macbook.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 1,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 1,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
    {
        id: 2,
        title: 'Title',
        imageURL: 'src/img/Iphone.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 2,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 2,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
    {
        id: 3,
        title: 'Title',
        imageURL: 'src/img/Ipad.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 3,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 3,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
    {
        id: 4,
        title: 'Title',
        imageURL: 'src/img/AppleWatch.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 4,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 4,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
    {
        id: 5,
        title: 'Title',
        imageURL: 'src/img/Airpods.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 5,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 5,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
    {
        id: 6,
        title: 'Title',
        imageURL: 'src/img/Mac.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
            {
                id: 1,
                postId: 6,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
            {
                id: 2,
                postId: 6,
                email: "rrr",
                body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
            },
        ]
    },
];
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
        <div class="img-container"><img src="${card.imageURL}"alt="${card.title}"></div>
        <div class="text-container"><h3">${card.title}</h3>
        <p>${card.body}</p></div>

        <button class="expand-text"><a href="">Expand...</a></button>
        `;
    cardElement.addEventListener('click', () => {
        window.location.href = `details.html?id=${card.id}`;
    });
    return cardElement;
}
function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
        cards.forEach((card) => {
            const cardElement = createCardElement(card);
            cardContainer.appendChild(cardElement);
        });
    }
}
renderCards();
function renderPostDetails() {
    const postDetailsContainer = document.getElementById('postDetails');
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = Number(urlParams.get('id'));
    const selectedCard = cards.find((card) => card.id === cardId);
    if (postDetailsContainer && selectedCard) {
        const cardDetailsElement = document.createElement('div');
        cardDetailsElement.innerHTML =
            `
        <img src="${selectedCard.imageURL}"alt="${selectedCard.title}">
        <h1>${selectedCard.title}</h1>
        <p>${selectedCard.body}</p>
        <ul>
            ${selectedCard.comments.map((Comment) => `<li>${Comment.id} - ${Comment.email} - ${Comment.body}</li>`).join('')}
        </ul>
        `;
        postDetailsContainer.appendChild(cardDetailsElement);
    }
}
renderPostDetails();
