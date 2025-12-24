const discord = document.getElementById('btndis');
const github = document.getElementById('btngit');

discord.addEventListener('click', function(){
    discord.innerHTML = '<img src="assets/img/discord.png" alt="discordimg" width="20px"> Carregando...'
    discord.style.cursor = 'not-allowed'
    github.style.cursor = 'not-allowed'
    discord.disabled = true;
    github.disabled = true;

    setTimeout(() => {
        discord.innerHTML = '<img src="assets/img/discord.png" alt="discordimg" width="20px"> Discord'
        discord.style.cursor = 'pointer'
        window.location.href = "https://discord.gg/Vvf5E5EmJk"
        github.disabled = false;
    }, 1000);
});

github.addEventListener('click', function(){
    github.innerHTML = '<img src="./assets/img/github.png" alt="github" width="20px"> Carregando...'
    github.style.cursor = 'not-allowed'
    discord.style.cursor = 'not-allowed'
    github.disabled = true;
    discord.disabled = true;


    setTimeout(() => {
        github.innerHTML = '<img src="./assets/img/github.png" alt="github" width="20px"> Github'
        github.style.cursor = 'pointer'
        window.location.href = "https://github.com/VictorVzx"
        discord.disabled = false;
    }, 1000);
})