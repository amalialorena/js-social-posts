// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.    
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


// 1. Trasformo il template html in elementi js
// 2. Rendo dinamico il template
// 3. Creo l'array di oggetti
// 4. Genero il template con i dati dell'array
// 5. Aggiungo funzionalità click

let profilePic = "https://unsplash.it/300/300?image=15";
let author = "Phil Mangione";
let image = "https://unsplash.it/600/300?image=171";
let text = "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."
let date = "4 mesi fa";
let likes = 80;

let template = `<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${profilePic}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${author}</div>
            <div class="post-meta__time">${date}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${text}</div>
<div class="post__image">
    <img src="${image}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>            
</div>`;

let container = document.getElementById("container");

container.innerHTML = template;

