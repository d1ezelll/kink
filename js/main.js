document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-list__item');
            
            faqItems.forEach(item => {
                const closeElement = item.querySelector('.faq-list__item-close');
                
                closeElement.addEventListener('click', function() {
                    // Закрываем все элементы
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Переключаем текущий элемент
                    item.classList.toggle('active');
                });
            });
        });
