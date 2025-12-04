// Datos de la aplicación
const appData = {
    testimonials: [
        {
            name: "María González",
            text: "Iron Flex ha cambiado mi vida. En 6 meses he logrado resultados que no conseguí en años en otros gimnasios. Los entrenadores son excelentes.",
            rating: 5
        },
        {
            name: "Carlos Rodríguez",
            text: "Las instalaciones son de primera calidad y el ambiente es muy motivador. He mejorado mi condición física notablemente desde que me uní.",
            rating: 4
        },
        {
            name: "Ana Martínez",
            text: "Me encanta la variedad de clases grupales. El yoga y el spinning son mis favoritas. El personal siempre está dispuesto a ayudar.",
            rating: 5
        },
        {
            name: "Javier López",
            text: "Como persona ocupada, valoro mucho la flexibilidad de horarios. Puedo entrenar temprano por la mañana o tarde por la noche.",
            rating: 4
        }
    ],
    gallery: [
        {
            id: 1,
            src: "./assets/1.jpg",
            alt: "Zona de cardio"
        },
        {
            id: 2,
            src: "./assets/2.jpg",
            alt: "Zona de cintas"
        },
        {
            id: 3,
            src: "./assets/3.webp",
            alt: "Lugar amplio"
        },
        {
            id: 4,
            src: "./assets/4.jpg",
            alt: "Zona de pesas"
        },
        {
            id: 5,
            src: "./assets/5.jpg",
            alt: "Maquinas nuevas"
        },
        {
            id: 6,
            src: "./assets/6.avif",
            alt: "Horario nocturno"
        },
        {
            id: 7,
            src: "./assets/7.webp",
            alt: "Zona yoga"
        },
        {
            id: 8,
            src: "./assets/8.jpg",
            alt: "Horario matutino"
        }
    ]
};

// Estado de la aplicación
let currentState = {
    favorites: [],
    currentTestimonial: 0,
    isDarkMode: false,
    currentLanguage: 'es',
    subscriptionPlan: null,
    subscriptionPrice: null
};

// Textos en diferentes idiomas
const translations = {
    es: {
        // Navbar
        inicio: "Inicio",
        planes: "Planes",
        testimonios: "Testimonios",
        instalaciones: "Instalaciones",
        contacto: "Contacto",
        
        // Hero
        heroTitle: "Iron Flex",
        heroSubtitle: "Transforma tu cuerpo, fortalece tu mente. El mejor gimnasio con equipos de última generación y entrenadores profesionales.",
        heroButton: "Descubre nuestros planes",
        
        // Plans
        plansTitle: "Nuestros Planes",
        basicPlan: "Básico",
        proPlan: "Pro",
        premiumPlan: "Premium",
        popularBadge: "Popular",
        month: "mes",
        subscribeButton: "Suscribirse",
        
        // Testimonials
        testimonialsTitle: "Lo que dicen nuestros clientes",
        
        // Gallery
        galleryTitle: "Nuestras Instalaciones",
        
        // Contact
        contactTitle: "Contáctanos",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        subscribePromotions: "Suscribirme a promociones y novedades",
        sendMessage: "Enviar Mensaje",
        
        // Footer
        projectBy: "Proyecto ficticio desarrollado por Thomas Ramírez - Desarrollador Web con más de 2 años de experiencia, especializado en Landing Pages Profesionales, SEO y Marketing Digital.",
        demoPurpose: "Esta página fue creada con fines demostrativos, utilizando HTML, CSS y JavaScript puro. No pertenece a ninguna empresa real.",
        orderLanding: "Si querés una landing igual de profesional, encargá la tuya por solo $10 USD en mi perfil de",
        
        // Subscription Modal
        subscriptionTitle: "Suscribirse al Plan",
        paymentNotice: "AVISO: Este es un formulario ficticio. No ingreses información real de tarjeta de crédito.",
        fullName: "Nombre Completo",
        phone: "Teléfono",
        cardNumber: "Número de Tarjeta",
        expiryDate: "Fecha de Expiración",
        confirmSubscription: "Confirmar Suscripción",
        
        // BMI Calculator
        bmiTitle: "Calculadora de IMC",
        bmiDescription: "El Índice de Masa Corporal (IMC) es una medida que evalúa si tu peso es adecuado en relación con tu altura. Esta herramienta te ayuda a conocer tu estado nutricional, pero no sustituye el diagnóstico de un profesional.",
        height: "Altura (cm)",
        weight: "Peso (kg)",
        age: "Edad",
        gender: "Sexo",
        male: "Masculino",
        female: "Femenino",
        other: "Otro",
        calculateBMI: "Calcular IMC",
        bmiValue: "Tu IMC es",
        underweight: "Bajo peso",
        normal: "Peso normal",
        overweight: "Sobrepeso",
        obesity1: "Obesidad Grado 1",
        obesity2: "Obesidad Grado 2",
        obesity3: "Obesidad Grado 3",
        
        // Map
        gymName: "Iron Flex Gym",
        gymAddress: "Av. Siempre Viva 742, Buenos Aires",
        gymHours: "Horario: Lunes a Viernes 6:00-22:00",
        
        // WhatsApp Tooltip
        whatsappTooltip: "¿Querés comprar una página como esta?"
    },
    en: {
        // Navbar
        inicio: "Home",
        planes: "Plans",
        testimonios: "Testimonials",
        instalaciones: "Facilities",
        contacto: "Contact",
        
        // Hero
        heroTitle: "Iron Flex",
        heroSubtitle: "Transform your body, strengthen your mind. The best gym with state-of-the-art equipment and professional trainers.",
        heroButton: "Discover our plans",
        
        // Plans
        plansTitle: "Our Plans",
        basicPlan: "Basic",
        proPlan: "Pro",
        premiumPlan: "Premium",
        popularBadge: "Popular",
        month: "month",
        subscribeButton: "Subscribe",
        
        // Testimonials
        testimonialsTitle: "What our clients say",
        
        // Gallery
        galleryTitle: "Our Facilities",
        
        // Contact
        contactTitle: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Message",
        subscribePromotions: "Subscribe to promotions and news",
        sendMessage: "Send Message",
        
        // Footer
        projectBy: "Fictional project developed by Thomas Ramírez - Web Developer with over 2 years of experience, specialized in Professional Landing Pages, SEO and Digital Marketing.",
        demoPurpose: "This page was created for demonstration purposes, using pure HTML, CSS and JavaScript. It does not belong to any real company.",
        orderLanding: "If you want a landing page just as professional, order yours for only $10 USD on my",
        
        // Subscription Modal
        subscriptionTitle: "Subscribe to Plan",
        paymentNotice: "NOTICE: This is a fictional form. Do not enter real credit card information.",
        fullName: "Full Name",
        phone: "Phone",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        confirmSubscription: "Confirm Subscription",
        
        // BMI Calculator
        bmiTitle: "BMI Calculator",
        bmiDescription: "The Body Mass Index (BMI) is a measure that assesses whether your weight is appropriate for your height. This tool helps you know your nutritional status, but does not replace a professional diagnosis.",
        height: "Height (cm)",
        weight: "Weight (kg)",
        age: "Age",
        gender: "Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        calculateBMI: "Calculate BMI",
        bmiValue: "Your BMI is",
        underweight: "Underweight",
        normal: "Normal weight",
        overweight: "Overweight",
        obesity1: "Obesity Grade 1",
        obesity2: "Obesity Grade 2",
        obesity3: "Obesity Grade 3",
        
        // Map
        gymName: "Iron Flex Gym",
        gymAddress: "742 Evergreen Ave, Buenos Aires",
        gymHours: "Hours: Monday to Friday 6:00-22:00",
        
        // WhatsApp Tooltip
        whatsappTooltip: "Do you want to buy a page like this?"
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar pantalla de carga después de 2 segundos
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 2000);

    // Cargar datos del localStorage
    loadFromLocalStorage();

    // Inicializar componentes
    initTestimonials();
    initGallery();
    initEventListeners();
    initScrollAnimations();

    // Iniciar auto-play del slider de testimonios
    startTestimonialAutoPlay();
});

// Cargar datos del localStorage
function loadFromLocalStorage() {
    const savedFavorites = localStorage.getItem('ironFlexFavorites');
    const savedTheme = localStorage.getItem('ironFlexTheme');
    const savedLanguage = localStorage.getItem('ironFlexLanguage');

    if (savedFavorites) {
        currentState.favorites = JSON.parse(savedFavorites);
    }

    if (savedTheme === 'dark') {
        toggleDarkMode(true);
    }

    if (savedLanguage) {
        currentState.currentLanguage = savedLanguage;
        updateLanguage();
    }
}

// Guardar datos en localStorage
function saveToLocalStorage() {
    localStorage.setItem('ironFlexFavorites', JSON.stringify(currentState.favorites));
    localStorage.setItem('ironFlexTheme', currentState.isDarkMode ? 'dark' : 'light');
    localStorage.setItem('ironFlexLanguage', currentState.currentLanguage);
}

// Cambiar idioma
function toggleLanguage() {
    currentState.currentLanguage = currentState.currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage();
    saveToLocalStorage();
}

// Actualizar textos según idioma
function updateLanguage() {
    const lang = currentState.currentLanguage;
    const t = translations[lang];
    
    // Actualizar botón de idioma
    document.getElementById('language-toggle').textContent = lang === 'es' ? 'EN' : 'ES';
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = t.inicio;
    navLinks[1].textContent = t.planes;
    navLinks[2].textContent = t.testimonios;
    navLinks[3].textContent = t.instalaciones;
    navLinks[4].textContent = t.contacto;
    
    // Actualizar hero
    document.querySelector('.hero h1').textContent = t.heroTitle;
    document.querySelector('.hero p').textContent = t.heroSubtitle;
    document.querySelector('.cta-button').textContent = t.heroButton;
    
    // Actualizar planes
    document.querySelector('#plans-section .section-title').textContent = t.plansTitle;
    const planCards = document.querySelectorAll('.plan-card');
    planCards[0].querySelector('h3').textContent = t.basicPlan;
    planCards[1].querySelector('h3').textContent = t.proPlan;
    planCards[2].querySelector('h3').textContent = t.premiumPlan;
    planCards[1].querySelector('.popular-badge').textContent = t.popularBadge;
    
    const subscribeButtons = document.querySelectorAll('.plan-card .btn');
    subscribeButtons.forEach(button => {
        button.textContent = t.subscribeButton;
    });
    
    // Actualizar testimonios
    document.querySelector('#testimonials-section .section-title').textContent = t.testimonialsTitle;
    
    // Actualizar galería
    document.querySelector('#gallery-section .section-title').textContent = t.galleryTitle;
    
    // Actualizar contacto
    document.querySelector('#contact-section .section-title').textContent = t.contactTitle;
    document.querySelector('label[for="name"]').textContent = t.name;
    document.querySelector('label[for="email"]').textContent = t.email;
    document.querySelector('label[for="message"]').textContent = t.message;
    document.querySelector('label[for="subscribe"]').textContent = t.subscribePromotions;
    document.querySelector('#contact-section .btn').textContent = t.sendMessage;
    
    // Actualizar mapa
    const mapPlaceholder = document.querySelector('.map-placeholder div');
    mapPlaceholder.querySelector('h3').textContent = t.gymName;
    mapPlaceholder.querySelector('p:nth-child(2)').textContent = t.gymAddress;
    mapPlaceholder.querySelector('p:nth-child(3)').textContent = t.gymHours;
    
    // Actualizar calculadora de IMC
    const bmiSection = document.querySelector('.bmi-section');
    bmiSection.querySelector('.bmi-title').textContent = t.bmiTitle;
    bmiSection.querySelector('.bmi-description').textContent = t.bmiDescription;
    bmiSection.querySelector('label[for="height"]').textContent = t.height;
    bmiSection.querySelector('label[for="weight"]').textContent = t.weight;
    bmiSection.querySelector('label[for="age"]').textContent = t.age;
    bmiSection.querySelector('label[for="gender"]').textContent = t.gender;
    
    const genderSelect = document.getElementById('gender');
    genderSelect.innerHTML = `
        <option value="">${t.gender}</option>
        <option value="male">${t.male}</option>
        <option value="female">${t.female}</option>
        <option value="other">${t.other}</option>
    `;
    
    bmiSection.querySelector('.btn').textContent = t.calculateBMI;
    
    // Actualizar footer
    const disclaimer = document.querySelector('.disclaimer');
    disclaimer.querySelector('p:nth-child(1)').textContent = t.projectBy;
    disclaimer.querySelector('p:nth-child(2)').textContent = t.demoPurpose;
    const lastParagraph = disclaimer.querySelector('p:nth-child(3)');
    lastParagraph.innerHTML = `${t.orderLanding} <a href="https://www.fiverr.com/tu_usuario">fiverr</a>.`;
    
    // Actualizar tooltip de WhatsApp
    document.getElementById('whatsapp-float').setAttribute('data-tooltip', t.whatsappTooltip);
}

// Inicializar testimonios
function initTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    appData.testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    updateTestimonialPosition();
}

// Actualizar posición del slider de testimonios
function updateTestimonialPosition() {
    const container = document.getElementById('testimonials-container');
    container.style.transform = `translateX(-${currentState.currentTestimonial * 100}%)`;
}

// Cambiar testimonio
function changeTestimonial(direction) {
    const totalTestimonials = appData.testimonials.length;
    currentState.currentTestimonial = (currentState.currentTestimonial + direction + totalTestimonials) % totalTestimonials;
    updateTestimonialPosition();
}

// Auto-play del slider de testimonios
function startTestimonialAutoPlay() {
    setInterval(() => {
        changeTestimonial(1);
    }, 5000);
}

// Inicializar galería
function initGallery() {
    const galleryContainer = document.getElementById('gallery');
    
    appData.gallery.forEach((image, index) => {
        const isFavorited = currentState.favorites.includes(image.id);
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="gallery-img">
            <div class="gallery-overlay">
                <div class="gallery-actions">
                    <button class="gallery-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${image.id}, this)">
                        ${isFavorited ? '❤️' : '🤍'}
                    </button>
                    <button class="gallery-btn" onclick="shareImage(${index})">
                        📤
                    </button>
                    <button class="gallery-btn" onclick="openGalleryModal(${index})">
                        👁️
                    </button>
                </div>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Abrir modal de galería
function openGalleryModal(imageIndex) {
    const modalContent = document.getElementById('gallery-modal-content');
    const image = appData.gallery[imageIndex];
    const isFavorited = currentState.favorites.includes(image.id);
    
    modalContent.innerHTML = `
        <div style="position: relative;">
            <img src="${image.src}" alt="${image.alt}" style="width: 100%; border-radius: 10px;">
            <div style="position: absolute; bottom: 15px; right: 15px; display: flex; gap: 10px;">
                <button class="gallery-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(${image.id}, this)">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
                <button class="gallery-btn" onclick="shareImage(${imageIndex})">
                    📤
                </button>
            </div>
            <div style="position: absolute; top: 15px; left: 15px; right: 15px; display: flex; justify-content: space-between;">
                <button class="gallery-btn" onclick="changeGalleryImage(${imageIndex - 1})" ${imageIndex === 0 ? 'disabled' : ''}>
                    ❮
                </button>
                <button class="gallery-btn" onclick="changeGalleryImage(${imageIndex + 1})" ${imageIndex === appData.gallery.length - 1 ? 'disabled' : ''}>
                    ❯
                </button>
            </div>
        </div>
        <p style="text-align: center; margin-top: 1rem;">${image.alt}</p>
    `;
    
    openModal('gallery-modal');
}

// Cambiar imagen en el modal de galería
function changeGalleryImage(newIndex) {
    if (newIndex < 0 || newIndex >= appData.gallery.length) return;
    openGalleryModal(newIndex);
}

// Alternar favorito
function toggleFavorite(imageId, button) {
    const index = currentState.favorites.indexOf(imageId);
    
    if (index === -1) {
        // Agregar a favoritos
        currentState.favorites.push(imageId);
        button.classList.add('favorited');
        button.innerHTML = '❤️';
        showToast('Agregado a favoritos');
    } else {
        // Quitar de favoritos
        currentState.favorites.splice(index, 1);
        button.classList.remove('favorited');
        button.innerHTML = '🤍';
        showToast('Eliminado de favoritos');
    }
    
    saveToLocalStorage();
}

// Compartir imagen
function shareImage(imageIndex) {
    const image = appData.gallery[imageIndex];
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Iron Flex - Gimnasio',
            text: `Mira esta imagen de Iron Flex: ${image.alt}`,
            url: url
        })
        .then(() => showToast('Imagen compartida'))
        .catch(err => console.log('Error al compartir:', err));
    } else {
        // Fallback: copiar enlace al portapapeles
        navigator.clipboard.writeText(url)
            .then(() => showToast('Enlace copiado al portapapeles'))
            .catch(err => {
                // Fallback más básico
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Enlace copiado al portapapeles');
            });
    }
}

// Abrir modal de suscripción
function openSubscriptionModal(plan, price) {
    currentState.subscriptionPlan = plan;
    currentState.subscriptionPrice = price;
    
    const t = translations[currentState.currentLanguage];
    document.getElementById('subscription-modal-title').textContent = `${t.subscriptionTitle} ${plan}`;
    
    // Actualizar textos del formulario
    document.querySelector('label[for="sub-name"]').textContent = t.fullName;
    document.querySelector('label[for="sub-email"]').textContent = t.email;
    document.querySelector('label[for="sub-phone"]').textContent = t.phone;
    document.querySelector('label[for="sub-card"]').textContent = t.cardNumber;
    document.querySelector('label[for="sub-expiry"]').textContent = t.expiryDate;
    document.querySelector('.subscription-form .btn').textContent = t.confirmSubscription;
    
    openModal('subscription-modal');
}

// Procesar suscripción
function processSubscription() {
    const name = document.getElementById('sub-name').value;
    const email = document.getElementById('sub-email').value;
    const phone = document.getElementById('sub-phone').value;
    
    // Validaciones básicas
    if (!name || !email || !phone) {
        showToast('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Por favor, ingresa un email válido');
        return;
    }
    
    // Simular procesamiento de suscripción
    const t = translations[currentState.currentLanguage];
    showConfirmation(
        '¡Suscripción exitosa!', 
        `Te has suscrito al plan ${currentState.subscriptionPlan} por $${currentState.subscriptionPrice}/mes. Recibirás un correo con los detalles de tu membresía.`
    );
    
    // Limpiar formulario
    document.getElementById('sub-name').value = '';
    document.getElementById('sub-email').value = '';
    document.getElementById('sub-phone').value = '';
    document.getElementById('sub-card').value = '';
    document.getElementById('sub-expiry').value = '';
    document.getElementById('sub-cvv').value = '';
    
    closeModal('subscription-modal');
}

// Calcular IMC
function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseInt(ageInput.value);
    const gender = genderInput.value;
    
    // Validaciones
    if (!height || height < 50 || height > 250) {
        showToast('Por favor, ingresa una altura válida entre 50cm y 250cm');
        heightInput.focus();
        return;
    }
    
    if (!weight || weight < 10 || weight > 300) {
        showToast('Por favor, ingresa un peso válido entre 10kg y 300kg');
        weightInput.focus();
        return;
    }
    
    if (!age || age < 5 || age > 120) {
        showToast('Por favor, ingresa una edad válida entre 5 y 120 años');
        ageInput.focus();
        return;
    }
    
    if (!gender) {
        showToast('Por favor, selecciona tu sexo');
        genderInput.focus();
        return;
    }
    
    // Convertir altura a metros
    const heightInMeters = height / 100;
    
    // Calcular IMC
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);
    
    // Determinar categoría
    let category, description;
    const t = translations[currentState.currentLanguage];
    
    if (bmi < 18.5) {
        category = t.underweight;
        description = "Tu índice de masa corporal indica bajo peso. Consulta con un profesional de la salud para evaluar tu estado nutricional.";
    } else if (bmi < 25) {
        category = t.normal;
        description = "Tu índice de masa corporal se encuentra dentro del rango considerado saludable. Mantén un estilo de vida activo y una alimentación balanceada.";
    } else if (bmi < 30) {
        category = t.overweight;
        description = "Tu índice de masa corporal indica sobrepeso. Considera aumentar tu actividad física y mejorar tus hábitos alimenticios.";
    } else if (bmi < 35) {
        category = t.obesity1;
        description = "Tu índice de masa corporal indica obesidad grado 1. Te recomendamos consultar con un profesional de la salud para un plan personalizado.";
    } else if (bmi < 40) {
        category = t.obesity2;
        description = "Tu índice de masa corporal indica obesidad grado 2. Es importante buscar asesoramiento profesional para mejorar tu salud.";
    } else {
        category = t.obesity3;
        description = "Tu índice de masa corporal indica obesidad grado 3. Te recomendamos buscar atención médica especializada para tu caso.";
    }
    
    // Mostrar resultado
    document.getElementById('bmi-value').textContent = `${t.bmiValue} ${roundedBMI}`;
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-description').textContent = description;
    document.getElementById('bmi-result').classList.add('show');
    
    // Scroll al resultado
    document.getElementById('bmi-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Enviar formulario de contacto
function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;
    
    // Validaciones básicas
    if (!name || !email || !message) {
        showToast('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Por favor, ingresa un email válido');
        return;
    }
    
    // Simular envío del formulario
    showConfirmation(
        '¡Mensaje enviado!', 
        'Gracias por contactarnos. Te responderemos a la brevedad.'
    );
    
    // Guardar en localStorage (simulación)
    const contacts = JSON.parse(localStorage.getItem('ironFlexContacts') || '[]');
    contacts.push({
        name,
        email,
        message,
        date: new Date().toISOString()
    });
    localStorage.setItem('ironFlexContacts', JSON.stringify(contacts));
    
    // Mostrar confirmación de suscripción si está marcada
    if (subscribe) {
        setTimeout(() => {
            showToast(`Te has suscrito a nuestras promociones con el email: ${email}`);
        }, 1000);
    }
    
    // Limpiar formulario
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('subscribe').checked = false;
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Alternar modo oscuro/claro
function toggleDarkMode(forceState = null) {
    if (forceState !== null) {
        currentState.isDarkMode = forceState;
    } else {
        currentState.isDarkMode = !currentState.isDarkMode;
    }
    
    if (currentState.isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌙';
    }
    
    saveToLocalStorage();
}

// Scroll suave a sección
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Abrir modal
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// Cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Mostrar confirmación
function showConfirmation(title, message) {
    document.getElementById('confirmation-title').textContent = title;
    document.getElementById('confirmation-message').textContent = message;
    openModal('confirmation-modal');
}

// Mostrar toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Inicializar event listeners
function initEventListeners() {
    // Toggle del menú móvil
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Toggle del tema
    document.getElementById('theme-toggle').addEventListener('click', function() {
        toggleDarkMode();
    });
    
    // Toggle del idioma
    document.getElementById('language-toggle').addEventListener('click', function() {
        toggleLanguage();
    });
    
    // Botón de WhatsApp
    document.getElementById('whatsapp-float').addEventListener('click', function() {
        const message = encodeURIComponent('Hola, vengo de tu landing page y me gustaria contratar tu servicio de Fiverr por $10');
        window.open(`https://wa.me/5491173619142?text=${message}`, '_blank');
    });
    
    // Botón subir
    document.getElementById('scroll-to-top').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Mostrar/ocultar botón subir al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollButton = document.getElementById('scroll-to-top');
        if (window.scrollY > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Tooltip global
    document.addEventListener('mousemove', function(e) {
        const tooltip = document.querySelector('.tooltip');
        
        // Mostrar tooltip en elementos con data-tooltip
        const target = e.target;
        if (target.hasAttribute('data-tooltip')) {
            tooltip.textContent = target.getAttribute('data-tooltip');
            tooltip.classList.add('show');
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        } else {
            tooltip.classList.remove('show');
        }
    });
    
    // Controles del slider de testimonios
    document.getElementById('prev-testimonial').addEventListener('click', function() {
        changeTestimonial(-1);
    });
    
    document.getElementById('next-testimonial').addEventListener('click', function() {
        changeTestimonial(1);
    });
    
    // Cerrar modales al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

// Inicializar animaciones al hacer scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}