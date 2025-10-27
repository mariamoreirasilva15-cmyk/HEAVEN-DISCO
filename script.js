document.addEventListener('DOMContentLoaded', () => {
    
    const mainContent = document.getElementById('main-content');
    const mainHeader = document.getElementById('main-header');
    
    // Verifica se os elementos existem antes de adicionar o evento
    if (mainHeader && mainContent) {
        mainContent.addEventListener('scroll', () => {
            if (mainContent.scrollTop > 10) {
                mainHeader.classList.add('cabecalho-com-scroll');
            } else {
                mainHeader.classList.remove('cabecalho-com-scroll');
            }
        });
    }

    const playerCover = document.getElementById('player-cover');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playPauseIcon = document.getElementById('play-pause-icon');
    const todosOsCards = document.querySelectorAll('.card_musica');

    let isPlaying = false;

    const updatePlayer = (card) => {
        const title = card.getAttribute('data-title');
        const artist = card.getAttribute('data-artist');
        const cover = card.getAttribute('data-cover');

        // Verifica se os elementos do player existem antes de usá-los
        if (playerTitle) playerTitle.textContent = title;
        if (playerArtist) playerArtist.textContent = artist;
        if (playerCover) playerCover.src = cover;

        isPlaying = true;
        if (playPauseIcon) playPauseIcon.textContent = 'pause';
    };
    
    todosOsCards.forEach(card => {
        card.addEventListener('click', () => updatePlayer(card));
        
        const playButton = card.querySelector('.botao_play');
        if(playButton){
            playButton.addEventListener('click', (evento) => {
                evento.stopPropagation();
                updatePlayer(card);
            });
        }
    });

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (playPauseIcon) {
                playPauseIcon.textContent = isPlaying ? 'pause' : 'play_arrow';
            }
        });
    }
});