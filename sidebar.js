let movies = [
    {
        name: "falcon and the winter soldier",
       
        image: "/Users/vishn/OneDrive/Desktop/Real projects/forms/img/p5.jpg"
    },
    {
        name: "Loki",
        
        image: "/Users/vishn/OneDrive/Desktop/Real projects/forms/img/4.jpg"
    },
    {
        name: "wanda and vision",
       
        image: "/Users/vishn/OneDrive/Desktop/Real projects/forms/img/p3.jpg"
    },
   
    {
        name: "raya and the last dragon",
       
        image:"/Users/vishn/OneDrive/Desktop/Real projects/forms/img/p2.jpg"
    },
    {
        name: "Luca",
       
        image: "/Users/vishn/OneDrive/Desktop/Real projects/forms/img/p1.jpg"
    }
];



const carousel=document.querySelector('.carousel');
let sliders =[];

let slideIndex = 0; //trace the current slide

const createslide = () => {
    if(slideIndex >= movies.length)
    {
        slideIndex = 0;
    }

    //create DOM Elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    //Atteching the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;


    //setting elements classnames
    slide.className = 'slider';
    content.className='slide-content';
    h1.className='movie-title';
    

    sliders.push(slide);
    if(sliders.length)
    {
        sliders[0].style.marginLeft=`calc(-${100 *(sliders.length-2)}% - ${ 30* (sliders.length -2)}px)`;
    }
}
    
for(let i=0;i<3;i++)
{
    createslide();
}

setInterval(() =>{
    createslide();
},3000);
