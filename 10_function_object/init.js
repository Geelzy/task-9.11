document.getElementById("btnRetry").addEventListener("click",(event)=>{
    location.reload()
})

window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById("otch").innerText = initPerson.otch;
    document.getElementById("proff").innerText = initPerson.proffesion;
    document.getElementById("birthYearOutput").innerText = initPerson.year;
    document.getElementById("day").innerText = initPerson.day;
    document.getElementById("month").innerText = initPerson.month;
};
document.getElementById("btnsbros").addEventListener("click",(event)=>{
    document.getElementById('firstNameOutput').innerText = "Генерация";
    document.getElementById('surnameOutput').innerText = "Генерация фамилии";
    document.getElementById("genderOutput").innerText = "Генерация пола";
    document.getElementById("otch").innerText = "Генерация отчества";
    document.getElementById("proff").innerText = "Генерация профессии";
    document.getElementById("birthYearOutput").innerText = "Генерация года";
    document.getElementById("day").innerText = "Генерация дня";
    document.getElementById("month").innerText = "Генерация месяца";
    
    
})

