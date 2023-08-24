let myskills=[
    {name:"Html",
    imgurl:"./images/html.png",
    content:"Proficient in creating structured and semantically meaningful web pages using HTML5, ensuring proper content hierarchy and accessibility for enhanced user experience."
    },
    {name:"Css-3",
    imgurl:"./images/css-3.png",
    content:"Basic understanding of CSS3 styling principles, able to apply styling to HTML elements for improved presentation and visual appeal, while striving for consistency across different browsers."
    },
    {name:"Javascript",
    imgurl:"./images/js.png",
    content:"Familiarity with fundamental JavaScript concepts, enabling me to add simple interactivity and dynamic behavior to web pages, such as form validation and responsive navigation menus."
    },
    {name:"Bootstrap",
    imgurl:"./images/bootstrap.png",
    content:"Extensive experience in utilizing Bootstrap to design and develop responsive websites and web applications."
    },
    {name:"React",
    imgurl:"./images/atom.png",
    content:"Developed dynamic and interactive web pages using React.js, utilizing both functional components with React Hooks and class components."
    },
    {name:"Github",
    imgurl:"./images/github.png",
    content:"Familiarity with version control systems like Git, which are essential for collaborative development and tracking changes in code."
    
    }

    ]

myskills.forEach((value)=>{
    let row=document.querySelector(".main")
    let col=document.createElement("div")
    col.classList.add("col-lg-4")
    col.classList.add("col-md-6")
    col.classList.add("mb-4")
    row.appendChild(col)
    let cards=document.createElement("div")
    cards.classList.add("cards")
    cards.classList.add("p-2")
    col.appendChild(cards)
    let cardsholder=document.createElement("div")
    cardsholder.classList.add("cardholder")
    cards.appendChild(cardsholder)
    let front=document.createElement("div")
    front.classList.add("thefront")
    cardsholder.appendChild(front)
    let cardimg=document.createElement("div")
    cardimg.classList.add("card-img-top")
    cardimg.classList.add("text-center")
    front.appendChild(cardimg)
    let img=document.createElement("img")
    cardimg.appendChild(img)
    img.src=value.imgurl
    let heading= document.createElement("h1")
    heading.classList.add("card-title")
    heading.innerHTML=value.name
    front.appendChild(heading)
    let buttondiv=document.createElement("div")
    buttondiv.classList.add("text-center")
    front.appendChild(buttondiv)
    let link=document.createElement("button")
    buttondiv.appendChild(link)
    link.classList.add("btn")
    link.classList.add("show")
    link.innerHTML="Show more"
    let back=document.createElement("div")
    back.classList.add("theback")
    cardsholder.appendChild(back)

    //=========back side content=======

    let content=document.createElement("div")
    content.classList.add("content")
    back.appendChild(content)
    let keys=document.createElement("p")
    content.appendChild(keys)
    keys.innerHTML=value.content
    let backbtn=document.createElement("button")
    backbtn.classList.add("btn")
    backbtn.innerHTML="back"
    content.appendChild(backbtn)

    // ========card flipping front to back function=======

    const handleShowbtn=()=>{
        cardsholder.style.transform="rotateY(180deg)"
    }
    link.addEventListener("click",handleShowbtn);

    // ========card flipping back to front function=======

    const handleShowbtn2=()=>{
        cardsholder.style.transform="rotateY(0deg)"
    }
    backbtn.addEventListener("click",handleShowbtn2);

})


// =============Scroll reveal animation effect=========== 

window.addEventListener('scroll',handleReveal);

function handleReveal(){
let reveal1=document.querySelector('.reveal-1');
let reveal2=document.querySelector('.reveal-2');
let revealpoint=150;

    let revealtop1=reveal1.getBoundingClientRect().top;
    let revealtop2=reveal2.getBoundingClientRect().top;
    let windowheight=window.innerHeight;
    if(revealtop1<windowheight-revealpoint){
        reveal1.classList.add("active");
    }
    else{
        reveal1.classList.remove("active")
    }

    if(revealtop2<windowheight-revealpoint){
        reveal2.classList.add("active");
    }
    else{
        reveal2.classList.remove("active")
    }

    // skill section reveal
    let reveal3=document.querySelector('.reveal-3')
    let revealtop3=reveal3.getBoundingClientRect().top;
    if(revealtop3 < windowheight-revealpoint){

        reveal3.classList.add("active-2")
    }
    else{
        reveal3.classList.remove("active-2")
    }

    // project section reveal
    let reveal4=document.querySelector('.reveal-4')
    let revealtop4=reveal4.getBoundingClientRect().top;
    if(revealtop4 < windowheight-revealpoint){

        reveal4.classList.add("active-3")
    }
    else{
        reveal4.classList.remove("active-3")
    }
        
    // contact section reveal
    let reveal5=document.querySelector('.reveal-5')
    let revealtop5=reveal5.getBoundingClientRect().top;

    if(revealtop5 < windowheight-revealpoint){

        reveal5.classList.add("active-4")
    }
    else{
        reveal5.classList.remove("active-4")
    }

}

// Email sending and receiving function

    // get the elements 
let fname=document.getElementById('fname');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let message=document.getElementById("msg");
let form=document.getElementById('form');
console.log(fname,email,phone,message)

form.addEventListener("submit",handleFunction);

function handleFunction(event){
event.preventDefault();

SendandReceivemail();
}

let obj={}
function SendandReceivemail(){
  obj.name=fname.value;
  obj.email=email.value;
  obj.phone=phone.value;
  obj.message=message.value;

  let serviceid="service_hf99pya";
  let templateid="template_6885z9o";
  let templateid2="template_8vi2kn7";
  
    emailjs.send(serviceid,templateid2,obj)
    .then(res=>{
        console.log(res)
    }).catch(err=>console.log(err))

    emailjs.send(serviceid,templateid,obj)
    .then(res=>{
        fname.value='';
        email.value='';
        phone.value='';
        message.value='';
        alert("your message sent successfully")
    }).catch(err=>{console.log(err)
            alert(err)
        })
}
