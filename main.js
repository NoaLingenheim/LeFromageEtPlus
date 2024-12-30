document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('info-button').addEventListener('click', function() {
    window.location.href = 'info.html';
});
document.getElementById('cv-button').addEventListener('click', function() {
    window.location.href = 'cv.html';
});


document.getElementById('connect-button').addEventListener('click', function() {
    const pseudo = document.getElementById('pseudo').value;
    const password = document.getElementById('password').value;
    const Content = "<h1>CV de Noa LINGENHEIM</h1><br><p> J'ai 16 ans. Je travaille actuellement dans l'équipe B4Y. Je suis développeur UEFN (UnrealEngine For Fortnite), UE (Unreal Engine) et maitrise encore d'autres languages.</p>"

    // Example validation (you can replace this with actual authentication logic)
    if (pseudo === 'webmaster' && password === 'NSInsi') {
        document.getElementById('CvConnect').style.display = 'none';
        document.getElementById('CvContent').innerHTML = Content;
    } else {
        alert('Identifiant ou mot de passe incorrect');
    }
});