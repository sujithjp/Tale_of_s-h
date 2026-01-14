// Landing button
const startBtn = document.getElementById("startBtn");
if(startBtn){
    startBtn.onclick = (e)=>{
        createHeart(e);
        setTimeout(()=> window.location.href="start.html",400);
    };
}
// Landing button
const startBtn1 = document.getElementById("startBtn1");
if(startBtn1){
    startBtn1.onclick = (e)=>{
        createHeart(e);
        setTimeout(()=> window.location.href="indexd.html",400);
    };
}

function createHeart(e){
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="💖";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),1000);
}

// Stories
const stories = {
    1:{ title:"Chapter 1 – First Meeting", text:`The first time I saw her was at an engagement ceremony...` },
    2:{ title:"Chapter 2 – Where It All Started", text:`After the engagement, I had no thoughts about loving her...` },
    3:{ title:"Chapter 3 – May Birthday Call", text:`On her birthday in May, I kept thinking...` },
    4:{ title:"Chapter 4 – Falling in Love", text:`Slowly, I noticed her nature, her kindness...` },
    5:{ title:"Chapter 5 – Friends, Feelings, and College Life", text:`I decided that my future should be with her...` }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("memory");
if(id && stories[id]){
    document.getElementById("story-content").innerHTML =
        `<h2>${stories[id].title}</h2><p>${stories[id].text}</p>`;
}

function goBack(){
    window.location.href="memories.html";
}
