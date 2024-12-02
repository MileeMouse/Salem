function navigateToOption() {
    // Obtém o valor da opção selecionada
    const selectedOption = document.getElementById('portal-options').value;

    if (selectedOption) {
        // Redireciona para a URL correspondente
        window.location.href = selectedOption;
    } else {
        // Caso nenhuma opção tenha sido selecionada
        alert('Por favor, selecione uma opção antes de prosseguir.');
    }
}

let currentIndex = 0;
const depoimentos = document.querySelectorAll('.depoimento');
const totalDepoimentos = depoimentos.length;

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalDepoimentos - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalDepoimentos - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.depoimentos-carousel').style.transform = `translateX(${offset}%)`;
}

// Imagens
// Configuração do slider
const slider = document.getElementById("image-slider");
const slides = slider.querySelectorAll(".image");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

let currentSlide = 0;

// Atualiza a posição do slider
function updateSlider() {
    const offset = -currentSlide * 100; // Move o slider 100% para cada slide
    slider.style.transform = `translateX(${offset}%)`;
}

// Evento do botão "Próximo"
nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
    updateSlider();
});

// Evento do botão "Anterior"
prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta para o slide anterior
    updateSlider();
});

// Alterador de mapas

var mapas = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2124001557386!2d-49.30195038227947!3d-25.531300932705694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfc8c1ee754a9%3A0x12fbab5124e27157!2sCuritiba%20-%20State%20of%20Paran%C3%A1%2C%2081690-400!5e0!3m2!1sen!2sbr!4v1715798988292!5m2!1sen!2sbr&hl=pt&language=pt",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2124001557386!2d-51.16801278234866!3d-29.924038510868647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951976d2d16c3dbb%3A0xb67eb24c1a1686c3!2sCanoas%20-%20RS%2C%2092330-500!5e0!3m2!1sen!2sbr!4v1715799457602!5m2!1sen!2sbr&hl=pt&language=pt",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.007319673063!2d-46.622436785006335!3d-23.686298670570016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4c59ebedf021%3A0x146aa3fbbcb36d2c!2sDiadema%20-%20SP%2C%2009911-160!5e0!3m2!1sen!2sbr!4v1715799556884!5m2!1sen!2sbr&hl=pt&language=pt",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2546022686216!2d-63.03383348523882!3d-9.909992492926657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93cd5e3e2d33a25f%3A0xf816c29b38d0e20!2sR.%20Cardeal%2C%201785%20-%20Setor%202%2C%20Ariquemes%20-%20RO%2C%2076873-200%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1715801939944!5m2!1spt-BR!2sus&hl=pt&language=pt",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7270.882325067712!2d-50.62541492510253!3d-24.33112059032179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e9833c0774be0b%3A0xe40800b301fd2072!2sRua%20Professora%20Edith%20Gordan%2C%20412%20-%20Centro%2C%20Tel%C3%AAmaco%20Borba%20-%20PR%2C%2084261-230%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1719251198469!5m2!1spt-BR!2sus"
];

function mudarMapa(index) {
    document.getElementById('mapa_iframe').src = mapas[index];
}

function selecionarPolo(element) {
    // Remove a classe 'selected' de todos os polos
    document.querySelectorAll('.polo').forEach(polo => polo.classList.remove('selected'));

    // Adiciona a classe 'selected' ao polo clicado
    element.classList.add('selected');
  }

  //MOBILE



