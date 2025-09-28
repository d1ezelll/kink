document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-list__item');
    
    faqItems.forEach(item => {
        const closeElement = item.querySelector('.faq-list__item-close');
        
        closeElement.addEventListener('click', function() {
        
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
});


// Словарь переводов
const translations = {
    ru: {
        introTitle__white: "Закрытая",
        introSubtitle__text: "Ночь свободы, уважения и игры. Атмосфера<br>для общения и знакомства без предрассудков.",
        introSubtitle__descriptionBlock: "Чикаго",
        introSubtitle__descriptionBlock18: "Только 18+",
        introBottom__listItemFirst: "Закрытая локация",
        introBottom__listItemSecond: "Вход по кодовому слову",
        introBottom__listItemThird: "Проверка 18+",
        introBottom__listItemFourth: "Конфиденциально",
        introBottom__button: "Подать заявку",
        mapTitle__text: "Следующая встреча — ",
        mapSubtitle__text: "<span>Правила:</span><br>уважение границ, согласие <br> без компромиссов. Дресс<br>-код: тёмная элегантность.",
        mapSubtitle__listItemFirst: "согласие",
        mapSubtitle__listItemSecond: "приватность",
        mapSubtitle__listItemThird: "без фото/видео в зоне мероприятия",
        mapSubtitle__listItemFourth: "соблюдение дресс-кода.",
        aboutList__itemFirst: "Подаёте заявку и авторизуетесь через почту",
        aboutList__itemSecond: "Получаете письмо с датой/временем/районом и кодовым словом",
        aboutList__itemThird: "Подтверждаете 18+ — проходите верификацию личности",
        aboutList__itemFourth: "Получаете финальное письмо с инструкцией входа.",
        introBottom__buttonSecond: "Подать заявку",
        faqList__itemCloseFirst: "Зачем авторизация?",
        faqList__itemCloseSecond: "Зачем KYC?",
        faqList__itemCloseThird: "Где адрес?",
        faqList__itemCloseFourth: "Что брать с собой?",
        faqList__itemOpenFirst: "Только 18+, защита участников и исключение ботов/дублей.",
        faqList__itemOpenSecond: "Только 18+, защита участников и исключение ботов/дублей.",
        faqList__itemOpenThird: "Только 18+, защита участников и исключение ботов/дублей.",
        faqList__itemOpenFourth: "Только 18+, защита участников и исключение ботов/дублей.",
        footerContact: "Контакты",
        footerPolitics: "Политика конфиденциальности",
        footerAgreement: "Пользовательское соглашение",
        footerRules: "Правила мероприятия"
    },
    en: {
        introTitle__white: "Private",
        introSubtitle__text: "A night of freedom, respect and play. An atmosphere<br>for communication and acquaintance without prejudice.",
        introSubtitle__descriptionBlock: "Chicago",
        introSubtitle__descriptionBlock18: "Only 18+",
        introBottom__listItemFirst: "Closed location",
        introBottom__listItemSecond: "Input by code word",
        introBottom__listItemThird: "Check 18+",
        introBottom__listItemFourth: "Confidential",
        introBottom__button: "Submit a request",
        mapTitle__text: "Next meeting — ",
        mapSubtitle__text: "<span>Rules:</span><br>respect for boundaries, consent<br>— without compromise. Dress <br>code: dark elegance.",
        mapSubtitle__listItemFirst: "consent",
        mapSubtitle__listItemSecond: "privacy",
        mapSubtitle__listItemThird: "without photos/videos in the event area",
        mapSubtitle__listItemFourth: "compliance with the dress code.",
        aboutList__itemFirst: "Submit an application and log in via email",
        aboutList__itemSecond: "You receive an email with the date/time/area and the code word",
        aboutList__itemThird: "Confirm 18+ — go through identity verification",
        aboutList__itemFourth: "You receive the final email with the login instructions.",
        introBottom__buttonSecond: "Submit a request",
        faqList__itemCloseFirst: "Why do I need authorization?",
        faqList__itemCloseSecond: "Why KYC?",
        faqList__itemCloseThird: "Where's the address?",
        faqList__itemCloseFourth: "What should I take with me?",
        faqList__itemOpenFirst: "Only 18+, participant protection and exclusion of bots/duplicates.",
        faqList__itemOpenSecond: "Only 18+, participant protection and exclusion of bots/duplicates.",
        faqList__itemOpenThird: "Only 18+, participant protection and exclusion of bots/duplicates.",
        faqList__itemOpenFourth: "Only 18+, participant protection and exclusion of bots/duplicates.",
        footerContact: "Contacts",
        footerPolitics: "Privacy policy",
        footerAgreement: "User agreement",
        footerRules: "Rules of the event"
    }
};


function changeLanguage(lang) {
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        document.getElementById('introTitleKink').src = './img/first/kink.png';
        document.querySelector('.intro-title-kink').style.width = '95%';
        document.querySelector('.intro-title-kink').style.right = '-6%';
        document.getElementById('chicago').src = './img/second/chicago.png';
        document.getElementById('galery').src = './img/photo/galery.png';
        document.getElementById('aboutTitle').src = './img/fourth/how.png';
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            document.getElementById('introTitleKink').src = './img/first/kink_en.png';
            document.querySelector('.intro-title-kink').style.width = '80%';
            document.querySelector('.intro-title-kink').style.right = '3%';
            document.getElementById('chicago').src = './img/second/chicago_en.png';
            document.getElementById('galery').src = './img/photo/galery_en.png';
            document.getElementById('aboutTitle').src = './img/fourth/how_en.png';
        }
    });
    
    localStorage.setItem('preferred-language', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
    const defaultLang = savedLang || browserLang;
    
    changeLanguage(defaultLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});