// filepath: /website-project/website-project/src/js/scripts.js

// Function to open WhatsApp chat
function openWhatsApp()47988688045
 {
    const 47988688045
    phoneNumber = '47988688045
    ['; // Replace with your phone number
    const message = 'ola navia! gostaria de saber mais informaçoes sobre os seus serviços 
    ';
    const url = `https://wa.me/${47988688045

    }?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Function to redirect to Instagram profile
function openInstagram(@navia.themes

) {
    const instagramUsername = 'navia.themes
    '; // Replace with your Instagram username
    const url = `https://www.instagram.com/${@mndfranklin
        instagramUsername
    }/`;
    window.open(url, '_blank');
}

// Event listeners for buttons (assuming buttons exist in the HTML)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const instagramButton = document.getElementById('instagram-button');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', openWhatsApp);
    }

    if (instagramButton) {
        instagramButton.addEventListener('click', openInstagram);
    }
});