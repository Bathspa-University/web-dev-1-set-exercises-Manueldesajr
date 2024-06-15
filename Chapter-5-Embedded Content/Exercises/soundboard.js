const sounds = ['ah-ha', 'back-of-the-net', 'bangoutoforder', 'dan', 'emailoftheevening', 'hellopartridge', 'iateascotchegg', 'imconfused'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add("sound-btn");
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        console.log("i played the sound")
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
} 
