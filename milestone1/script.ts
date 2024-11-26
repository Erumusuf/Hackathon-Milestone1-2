
const buttonSkill = document.getElementById('button-skill') as HTMLButtonElement 
const skills = document.getElementById('skills') as HTMLElement

buttonSkill.addEventListener('click', ()=>{
        if(skills.style.display === 'none'){
            skills.style.display = 'block'
        } else {
            skills.style.display =`none`
        }
});