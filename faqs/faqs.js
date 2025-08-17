document.addEventListener('DOMContentLoaded', () => {
        const faqIcons = document.querySelectorAll('.faq__head i');
        faqIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent click from bubbling to parent elements
                const faq = e.target.closest('.faq'); // Get the parent FAQ element
                faq.classList.toggle('show'); // Toggle the show class
                // Update icon based on show class
                e.target.className = faq.classList.contains('show') 
                    ? 'uil uil-angle-up' 
                    : 'uil uil-angle-down';
            });
        });
    });