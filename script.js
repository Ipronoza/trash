 document.querySelector("button").addEventListener('click', ()=>{
    document.querySelector("body").classList.toggle("blue_color");
    // console.log('zzzz');
 })

 let animDiv = document.createElement("div");
 animDiv.classList = "anim_div";
 document.body.append(animDiv);
