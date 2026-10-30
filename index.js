const projects=document.querySelector('.projects')
const skillsandtools=document.querySelector('.skills-rage')

const projectproperties={
  // Mobile data website
image:'images/densubsite.png',
name:'Densubsite',
description:'Mobile data & Airtime-to-cash with a clean and simple interface',
hmtl:'HTML',
css:'CSS',
javascript:'Javascipt',
linkimage:'logo/open-outline.svg',

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
}



}
// densub website
projects.innerHTML+=`<div class="my-project">
 <img class="projects-images" src="${projectproperties.image}" alt="">
 <div>

 <span class="website-name">${projectproperties.name}</span>
 <p class="p-width">${projectproperties.description}</p>


 <!-- skills used -->
  <div class="project-skils-and-link">
    <div class="project-skills">
    <span>${projectproperties.hmtl}</span>
    <span>${projectproperties.css}</span>
    <span>${projectproperties.javascript}</span>
  </div>
 <img class="logos" src="${projectproperties.linkimage}" alt="">

  </div>
  
</div> </div>`;

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
const projectnav=document.querySelector('.projects-nav')
  homenav.classList.add('green')

function showpage(page){
  allsections.forEach(allsections=>{
if(page==='Projects'){
    allsections.style.display='none';
    projectnav.classList.add('green')
      homenav.classList.remove('green')
    
  }

  else if(page==='Home'){
     allsections.style.display='block';
       homenav.classList.add('green')
         projectnav.classList.remove('green')
  }
  })
  
}

