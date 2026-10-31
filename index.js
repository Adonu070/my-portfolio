const projects=document.querySelector('.projects')
const skillsandtools=document.querySelector('.skills-rage')

const projectproperties={
 technology:{
hmtl:'HTML',
css:'CSS',
javascript:'Javascipt',

  },


linkimage:'logo/open-outline.svg',


  // Mobile data website
  densubsite:{
    image:'images/densubsite.png',
name:'Densubsite',
description:'Mobile data & Airtime-to-cash with a clean and simple interface',
 
 },

// skills and tools

sklills:{
htmlimage:'logo/html-5-svgrepo-com.svg',
htmlname:'HTML',

cssimage:'logo/css-svgrepo-com.svg',
cssname:'CSS',

javascriptimage:'logo/javascript-svgrepo-com.svg',
javascriptname:'Javascript',

apiimage:'logo/api-interface-svgrepo-com.svg',
apiname:'APis',

gihthubimage:'logo/logo-github.svg',
githubname:'GitHub',

vscodeimage:'logo/vscode-svgrepo-com.svg',
vscodename:'VScode',
},



// merichrunchy
maricrunchy:{
  image:'images/crunchy.png',
  name:'Meri-chruny',
  description:'E-commerce website frontend with modern UI and good user experience',

}

}
// densub website
projects.innerHTML+=`<div class="my-project">
 <img class="projects-images" src="${projectproperties.densubsite.image}" alt="">
 <div>

 <span class="website-name">${projectproperties.densubsite.name}</span>
 <p class="p-width">${projectproperties.densubsite.description}</p>


 <!-- skills used -->
  <div class="project-skils-and-link">
    <div class="project-skills">
    <span>${projectproperties.technology.hmtl}</span>
    <span>${projectproperties.technology.css}</span>
    <span>${projectproperties.technology.javascript}</span>
  </div>
 <img class="logos" src="${projectproperties.linkimage}" alt="">

  </div>
  
</div> </div>`;

// densubsite website end

// merit-chrunchy

projects.innerHTML+=`<div class="my-project">
 <img class="projects-images" src="${projectproperties.maricrunchy.image}" alt="">
 <div>

 <span class="website-name">${projectproperties.maricrunchy.name}</span>
 <p class="p-width">${projectproperties.maricrunchy.description}</p>


 <!-- skills used -->
  <div class="project-skils-and-link">
    <div class="project-skills">
    <span>${projectproperties.technology.hmtl}</span>
    <span>${projectproperties.technology.css}</span>
    <span>${projectproperties.technology.javascript}</span>
  </div>
 <img class="logos" src="${projectproperties.linkimage}" alt="">

  </div>
  
</div> </div>`
// merit-crunchy end



skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.htmlimage}" alt="">
<span>${projectproperties.sklills.htmlname}</span>
</div>`;
skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.cssimage}" alt="">
<span>${projectproperties.sklills.cssname}</span>
</div>`;

skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.javascriptimage}" alt="">
<span>${projectproperties.sklills.javascriptname}</span>
</div>`;
skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.apiimage}" alt="">
<span>${projectproperties.sklills.apiname}</span>
</div>`;
skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.gihthubimage}" alt="">
<span>${projectproperties.sklills.githubname}</span>
</div>`;

skillsandtools.innerHTML+=`<div class="skils-rap">
  <img class="skills-image" src="${projectproperties.sklills.vscodeimage}" alt="">
<span>${projectproperties.sklills.vscodename}</span>
</div>`;
// densub website end


// project clicked

const allsections=document.querySelectorAll('.all-sections');
const homenav=document.querySelector('.home-nav');
const homenavsign=document.querySelector('.home-nav-sign')
const projectnav=document.querySelector('.projects-nav');
const projectnavsign=document.querySelector('.project-nav-sign');
const menueblur=document.querySelector('.menue-blur')
const menu=document.querySelector('.menu')
  homenav.classList.add('green')
  homenavsign.style.display='block';
menueblur.style.display='none';

function showpage(page){
  allsections.forEach(allsections=>{
    projectnavsign.style.display='none';
     homenavsign.style.display='none';
     menueblur.style.display='none'
if(page==='Projects'){
    allsections.style.display='none';
    projectnav.classList.add('green')
      homenav.classList.remove('green')
      projectnavsign.style.display='block'
  }

  else if(page==='Home'){
     allsections.style.display='block';
       homenav.classList.add('green')
         projectnav.classList.remove('green');
           homenavsign.style.display='block';
  }
  })
  
}


const theblur=document.querySelector('.theblur')
const sendmassage=document.querySelector('.send-massage');



theblur.addEventListener('click',()=>{
  theblur.style.display='none';
})

sendmassage.addEventListener('click',() =>{
  theblur.style.display='block';
})

menu.addEventListener('click',()=>{
  menueblur.style.display='block'
})
menueblur.addEventListener('click',()=>{
  menueblur.style.display='none'
})