var buttonSkill = document.getElementById('button-skill');
var skills = document.getElementById('skills');
buttonSkill.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = "none";
    }
});
