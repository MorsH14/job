let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? 'block' : 'none';
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}, 5000);

showTestimonial(currentIndex);
