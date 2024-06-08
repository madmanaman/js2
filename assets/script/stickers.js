document.getElementById('btn1').addEventListener('click', function() {
        let inputs = document.querySelectorAll('.numeroTickets');
        let total = 0;
    

    inputs.forEach(function(input) {
        total += parseInt(input.value) || 0;
    });
    
    let totalStickers = document.getElementById('totalStickers');
    if (total <= 10) {
        totalStickers.textContent = `Llevas ${total} stickers`;
    } else {
        totalStickers.textContent = 'Llevas demasiados stickers';
    }
    });