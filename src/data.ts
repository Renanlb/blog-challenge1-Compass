interface Card {
    id: number;
    title: string;
    imageURL: string;
    body: string;
    comments: Comment1[];
};

interface Comment1 {
    id: number;
    postId: number;
    email: string;
    body: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: 'Iphone',
        imageURL: 'src/img/iphone.jpeg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 1,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 1,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
    {
        id: 2,
        title: 'Macbook',
        imageURL: 'src/img/macbook.jpg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 2,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 2,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
    {
        id: 3,
        title: 'Apple Watch',
        imageURL: 'src/img/applewatch.jpeg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 3,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 3,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
    {
        id: 4,
        title: 'Airpods Pro',
        imageURL: 'src/img/airpods.jpg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 4,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 4,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
    {
        id: 5,
        title: 'Ipad',
        imageURL: 'src/img/ipad.jpeg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 5,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 5,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
    {
        id: 6,
        title: 'Mac',
        imageURL: 'src/img/Mac.jpg',
        body:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...',
        comments: [
           {
            id: 1, 
            postId: 6,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },
           {
            id: 2, 
            postId: 6,
            email:  "rrr",
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
           },         
        ]
    },
];

function createCardElement(card: Card): HTMLDivElement {
    const cardElement = document.createElement('div')
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
        })
    }
}

renderCards();

function renderPostDetails(){
    const postDetailsContainer = document.getElementById('postDetails');
    const urlParams = new URLSearchParams(window.location.search)
    const cardId = Number(urlParams.get('id'));

    const selectedCard = cards.find((card) => card.id === cardId);
    if (postDetailsContainer && selectedCard) {
        const cardDetailsElement = document.createElement('div');
        cardDetailsElement.innerHTML = 
        `
        <div class="postDetailsContainer">
        <div class="img-details"><img src="${selectedCard.imageURL}"alt="${selectedCard.title}"></div>
        <div class="title-details"><h1>${selectedCard.title}</h1></div>
        <div class="body-details"><p>${selectedCard.body}</p></div>
        </div>
        <div class="comments-container">
        <span class="usuario">
            ${selectedCard.comments.map((Comment) => `<li>${Comment.id}: ${Comment.email}: ${Comment.body}</li>`).join('')}
        </span>
        </div>
        `;
        postDetailsContainer.appendChild(cardDetailsElement);
    }
}
renderPostDetails();