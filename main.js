const reviews=[
    {
        id:1,
        name:'Nicloes Hail',
        job:'Data Analytics',
        about:"A skilled Data Analytics professional. With a knack for unraveling complex datasets, Nicloes turns raw information into actionable insights. A true trailblazer, Nicloes is dedicated to illuminating pathways to success through meticulous analysis. Welcome to the realm where data finds its voice, guided by Nicloes Hail.",
        img:'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
    },
    {
        id:2,
        name:'Samira Jain',
        job:'Web Developer',
        about:"Meet Samira Jain, a passionate Web Developer who translates ideas into captivating online realities. With a mastery of coding languages and a knack for user-centric design, Samira brings websites to life, seamlessly blending aesthetics and functionality. In a world driven by digital experiences, Samira's expertise ensures every click is a step into innovation.",
        img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id:3,
        name:'Rolef king',
        job:'Graphics Designer',
        about:"Step into the world of creativity with Rolef King, an ingenious Graphics Designer who weaves visual magic into every project. Rolef's artistic flair and attention to detail breathe life into concepts, transforming them into stunning visual masterpieces. Whether it's branding, illustrations, or UI/UX designs, Rolef's work leaves an indelible mark, capturing attention and igniting imagination.",
        img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        
    },
    {
        id:4,
        name:'Anna Dkosta',
        job:'Tester',
        about:"Precision meets perfection in the work of Anna Dkosta, a meticulous Tester who leaves no stone unturned in ensuring flawless digital experiences. Anna's dedication to quality assurance guarantees that software and applications run seamlessly, meeting the highest standards. With an eagle eye for detail and a commitment to excellence, Anna ensures that technology performs at its best.",
        img:'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg'
    }
];


let name=document.querySelector('.authore');
let job=document.querySelector('.job');
let about=document.querySelector('.description');
let img=document.querySelector('#img-creator')
console.log(img);

function reviwGenrator(person){
    name.textContent=person.name;
    job.textContent=person.job;
    about.textContent=person.about;
    img.setAttribute('src',person.img)
}


reviwGenrator(reviews[0]);


let index=0;
const right=document.querySelector(".right");
const left=document.querySelector(".left");
const Surprice=document.querySelector(".Surprice");
console.log(Surprice)

right.addEventListener('click',(e)=>{
    e.preventDefault();
    index++;
    if(index>=4){
        index=0;
    }
    reviwGenrator(reviews[index]);
    console.log("rigt selelct")
})
left.addEventListener('click',(e)=>{
    e.preventDefault();
    index--;
    if(index<0){
        index=3;
    }
    reviwGenrator(reviews[index]);
})
Surprice.addEventListener('click',(e)=>{
    e.preventDefault();
    let random=Math.floor(Math.random()*4);
    reviwGenrator(reviews[random]);
    console.log(random)
})



