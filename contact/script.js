const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  gsap.set('.reveal', { autoAlpha: 0, y: 24 });
  gsap.to('.reveal', {
    autoAlpha: 1,
    y: 0,
    duration: 0.9,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: null
  });
  gsap.fromTo('.hero-media', { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out' });
  gsap.fromTo('.hero-copy-inner, .hero-aside .meta-block', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.12, delay: 0.1 });
}
const form = document.getElementById('contactForm');
const success = document.getElementById('successMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Subject / Reason: ${subject}`,
    '',
    message
  ].join('\n');
  const mailto = `mailto:reservations@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  success.style.display = 'block';
  success.textContent = 'Thank you — your note is ready to send. We’ve opened your email client with the details prefilled.';
});