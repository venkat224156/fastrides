import { App as CapacitorApp } from '@capacitor/app';
import './styles.css';

const images = {
  hero: 'https://d14tal8bchn59o.cloudfront.net/H00ofTv8Bj9J_P5UCDSa_xNO5j81SJYV0Yf7ctfYyVA/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027114/slandbg_original.png',
  fleet: 'https://d14tal8bchn59o.cloudfront.net/LDcbzxrimUgtHwfFihBTEJtrdg3XpPM4oWPLT3cmOBU/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027125/ChatGPT_Image_Apr_30__2026__08_46_26_PM_original.png',
  van: 'https://images.unsplash.com/photo-1656426630273-ca84171a2010?ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=1200&h=1200&fit=crop',
  car: 'https://images.unsplash.com/photo-1763268265028-1631360c07dd?ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=1200&h=1200&fit=crop',
  smallCar: 'https://images.unsplash.com/photo-1663852408695-f57f4d75a536?ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=1200&h=800&fit=crop',
  contactBg: 'https://d14tal8bchn59o.cloudfront.net/5IbHm-xz6vUf4foir-jHsYsbAQF4E6afV0Tks9SunT4/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027115/image_original.png',
  slides: [
    'https://d14tal8bchn59o.cloudfront.net/V6tCuDSsJWqLaDMl6Y3lkal_86CaXBdSNuhCofmwfMA/rs:fill:960:435:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027142/V4movVYfQ3mdUxNBTMoe6g_original.avif',
    'https://d14tal8bchn59o.cloudfront.net/EEiHDLHuXcWJto5eczILU5aK-ADg5WKrqiyW4x-JU4E/rs:fill:960:435:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027141/u4dWMZWxSnCzVc1I2EMPpA_original.avif',
    'https://d14tal8bchn59o.cloudfront.net/JUf43cQgEmj7alf0_LumOsEci8JqA4PacIwbku-v3qQ/rs:fill:960:435:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027137/benz_sprinter_2025_original.avif',
    'https://d14tal8bchn59o.cloudfront.net/kEGJ66DxYl2BHMDzJzPpHwUUu3XfDlco_Mk5Lm9WT7c/rs:fill:960:435:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027139/fm_t3G4OSEiLFKIoZNOzcw_original.avif',
    'https://d14tal8bchn59o.cloudfront.net/suYbdpDw0VZbzWgxaWqas-I7omEl8RYKqNmtdo_clB0/rs:fill:960:435:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/125265/photos/24027138/Ahapot97Q1e9vEerjZfUlQ_original.avif'
  ]
};

const navItems = [
  ['/', 'Home'],
  ['/about-us', 'About Us'],
  ['/our-fleet', 'Our Fleet'],
  ['/contact-us', 'Contact Us']
];

const footer = () => `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <h2>About FastRides</h2>
        <p>FastRides is a Dallas, Texas car rental business offering luxury Benz vans and small cars for daily, monthly, and long-term rentals. We provide transparent pricing, fast booking, zero hidden fees, and exceptional customer service.</p>
      </div>
      <div>
        <h2>Contact Details:</h2>
        <p><strong>Location:</strong> <a href="https://maps.google.com/maps?q=Dallas%2C+Texas+&z=15&mrt=loc" target="_blank" rel="noreferrer">Dallas, Texas</a></p>
        <p><strong>Phone:</strong> <a href="tel:6786979591">678 697 9591</a></p>
        <p><strong>Hours:</strong><br />Monday - Friday: 9:00am - 5:00pm<br />Saturday - Sunday: Closed</p>
      </div>
    </div>
    <nav aria-label="Footer">
      ${navItems.map(([href, label]) => `<a href="${href}" data-link>${label}</a>`).join('')}
    </nav>
    <div class="copyright">Copyright &copy;2026 FastRides. All Rights Reserved. <a href="http://www.LuminsTech.com" target="_blank" rel="noreferrer">Designed by LuminsTech LLC</a></div>
  </footer>
`;

const shell = (content, path) => `
  <header class="site-header">
    <a class="brand" href="/" data-link>
      <span class="brand-mark">FR</span>
      <span>FastRides</span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
    <nav class="site-nav" aria-label="Site">
      ${navItems.map(([href, label]) => `<a class="${path === href ? 'active' : ''}" href="${href}" data-link>${label}</a>`).join('')}
    </nav>
  </header>
  <main>${content}</main>
  ${footer()}
`;

const hero = ({ title, subtitle, button = 'Contact Us', href = '/contact-us', bg = images.hero, compact = false }) => `
  <section class="hero reveal bounce ${compact ? 'hero-compact' : ''}" style="--hero-image: url('${bg}')">
    <div class="hero-box">
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <a class="button" href="${href}" data-link>${button}</a>
    </div>
  </section>
`;

const home = () => `
  ${hero({
    title: 'FastRides',
    subtitle: 'Premium Benz vans and affordable small cars for daily, monthly, and long-term rentals in Dallas, Texas.',
    button: 'Explore Rentals',
    href: '/our-fleet'
  })}
  <section class="section center reveal">
    <p class="eyebrow">Our Fleet</p>
    <h2>Premium Rental Options</h2>
    <p class="lead">FastRides offers premium Benz vans and affordable small cars for daily, monthly, and long-term rentals in Dallas, Texas. Choose the vehicle that fits your lifestyle.</p>
    <div class="gallery-grid">
      <article class="rental-card">
        <a href="/our-fleet/" data-link><img src="${images.van}" alt="Luxury Mercedes-Benz van" /></a>
        <h3>Luxury Benz Vans</h3>
        <p>Premium Mercedes-Benz Sprinter vans for group travel, airport transportation, executive rides, and special occasions. Spacious, comfortable, and professional.</p>
        <a class="button" href="/our-fleet/" data-link>Book a Van</a>
      </article>
      <article class="rental-card">
        <a href="/our-fleet/" data-link><img src="${images.car}" alt="Small car rental" /></a>
        <h3>Small Cars</h3>
        <p>Efficient and reliable small cars for daily commuting, errands, and long-term rentals. Clean, fuel-efficient, and easy to drive around Dallas.</p>
        <a class="button" href="/our-fleet/" data-link>Book a Car</a>
      </article>
    </div>
  </section>
  ${slideshow()}
  ${steps()}
  ${splitSection({
    title: 'Your Premier Car Rental in Dallas, Texas',
    body: 'At FastRides, we prioritize your comfort and satisfaction. Whether you need a luxury Benz van for group transportation or a small car for everyday use, we have the right vehicle for you.',
    list: ['Luxury Benz Vans', 'Small Cars', 'Affordable Rates', 'Fast & Easy Booking', 'Flexible Rental Periods', 'Local & Trusted'],
    image: images.fleet,
    dark: true,
    reverse: true,
    button: 'Contact Us',
    href: '/contact-us'
  })}
  ${splitSection({
    title: 'Welcome to FastRides',
    body: 'At FastRides, we take pride in providing premium car rental services in Dallas, Texas and the surrounding areas. Whether you need a luxury Benz van for group travel, an executive ride, or a practical small car for daily use or long-term rental, we have the perfect vehicle for you. With transparent pricing, zero hidden fees, and exceptional customer service, we make renting easy.',
    image: images.fleet,
    button: 'More About Us',
    href: '/about-us'
  })}
  <section class="map-section reveal"><iframe title="Dallas map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBkYw4ExEywmCLpW4ebZgsxPGubqK2-el0&q=Dallas%2C+Texas" loading="lazy" allowfullscreen></iframe></section>
`;

const steps = () => `
  <section class="steps-section reveal" style="--section-image: url('${images.hero}')">
    <p class="eyebrow">Three Easy Steps</p>
    <h2>How It Works</h2>
    <div class="steps-grid">
      ${[
        ['01', 'Call Us Today', 'Make your reservation online or speak with our team for personalized assistance.'],
        ['02', 'Choose Your Car', 'Select from our Benz vans or small cars to fit your travel needs and budget.'],
        ['03', 'Pick Up and Go', 'Visit our location, pick up your vehicle, and hit the road in style.']
      ].map(([num, title, text]) => `<article><div class="step-icon">${num}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
    </div>
  </section>
`;

const slideshow = () => `
  <section class="section slideshow-section reveal">
    <div class="center">
      <h2>2025 Mercedes-Benz Sprinter - Interior & Exterior</h2>
      <p class="lead">Explore every angle of our luxury 2025 Mercedes-Benz Sprinter - spacious interior, premium seating, and sleek exterior built for comfort and style.</p>
    </div>
    <div class="slideshow" data-slideshow>
      <button class="slide-control prev" type="button" aria-label="Previous slide">Previous</button>
      <div class="slide-track">
        ${images.slides.map((src, index) => `<img class="${index === 0 ? 'active' : ''}" src="${src}" alt="Mercedes-Benz Sprinter gallery ${index + 1}" />`).join('')}
      </div>
      <button class="slide-control next" type="button" aria-label="Next slide">Next</button>
      <div class="slide-dots">${images.slides.map((_, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" aria-label="Go to slide ${index + 1}"></button>`).join('')}</div>
    </div>
  </section>
`;

const splitSection = ({ title, body, image, list = [], dark = false, reverse = false, button, href }) => `
  <section class="split-section reveal ${dark ? 'dark' : ''} ${reverse ? 'reverse' : ''}">
    <div class="split-image"><img src="${image}" alt="${title}" /></div>
    <div class="split-copy">
      <h2>${title}</h2>
      <p>${body}</p>
      ${list.length ? `<ul>${list.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
      ${button ? `<a class="button ${dark ? 'light' : ''}" href="${href}" data-link>${button}</a>` : ''}
    </div>
  </section>
`;

const about = () => `
  ${hero({
    title: 'About FastRides',
    subtitle: 'Dallas, Texas car rentals with luxury Benz vans, small cars, transparent pricing, and fast booking.',
    button: 'View Rentals',
    href: '/our-fleet',
    bg: images.fleet,
    compact: true
  })}
  ${splitSection({
    title: 'Local & Trusted',
    body: 'FastRides was built for practical, comfortable travel across Dallas and the surrounding areas. Our fleet focuses on spacious Mercedes-Benz vans for groups and efficient small cars for everyday driving, with flexible rental periods and simple communication from start to finish.',
    image: images.van,
    button: 'Contact Us',
    href: '/contact-us'
  })}
  ${steps()}
`;

const rentals = () => `
  ${hero({
    title: 'Explore Our Fleet',
    subtitle: 'Browse our premium selection of luxury Benz vans and small cars. Daily, monthly, and long-term rentals available in Dallas, Texas.',
    button: 'Get Started',
    href: '/contact-us',
    bg: images.fleet,
    compact: true
  })}
  ${splitSection({
    title: 'Luxury Benz Vans',
    body: 'Premium Mercedes-Benz Sprinter vans for group travel, airport transportation, executive rides, events, and special occasions. Spacious interiors, comfortable seating, and a polished ride for Dallas trips of all sizes.',
    image: images.fleet,
    dark: true,
    button: 'Contact Us for Availability',
    href: '/contact-us'
  })}
  ${splitSection({
    title: 'Small Cars',
    body: 'Looking for an affordable and reliable everyday vehicle? FastRides offers well-maintained small cars for commuting, errands, city driving, and weekend getaways. Available for daily, weekly, and monthly rentals with transparent rates and zero hidden fees.',
    image: images.smallCar,
    reverse: true,
    button: 'Contact Us for Availability',
    href: '/contact-us'
  })}
  ${slideshow()}
`;

const contact = () => `
  ${hero({
    title: 'Contact Us',
    subtitle: 'Ready to book a Benz van or small car? Reach out and the FastRides team will help with availability and rental details.',
    button: 'Call 678 697 9591',
    href: 'tel:6786979591',
    bg: images.contactBg,
    compact: true
  })}
  <section class="contact-section reveal" style="--section-image: url('${images.contactBg}')">
    <div class="contact-copy">
      <h2>Contact Us Today</h2>
      <p>Get in touch with FastRides to find the perfect vehicle for your needs.</p>
    </div>
    <form class="contact-form" data-contact-form>
      <label><span>Your Name</span><input name="name" type="text" placeholder="Your Name *" required /></label>
      <label><span>Your Email Address</span><input name="email" type="email" placeholder="Your Email Address *" required /></label>
      <label><span>Your Phone Number</span><input name="phone" type="tel" placeholder="Your Phone Number *" required /></label>
      <label><span>Your Message</span><textarea name="message" placeholder="Your Message *" required></textarea></label>
      <button class="button light" type="submit">Submit</button>
      <p class="form-status" role="status"></p>
    </form>
  </section>
`;

const routes = {
  '/': home,
  '/about-us': about,
  '/our-fleet': rentals,
  '/contact-us': contact
};

function render(path = window.location.pathname) {
  const routePath = routes[path] ? path : '/';
  document.querySelector('#app').innerHTML = shell(routes[routePath](), routePath);
  document.title = `FastRides | ${routePath === '/' ? 'Dallas Car Rental' : navItems.find(([href]) => href === routePath)?.[1]}`;
  wireInteractions();
  requestAnimationFrame(() => document.body.classList.add('loaded'));
}

function navigate(url) {
  const next = new URL(url, window.location.origin);
  if (next.origin !== window.location.origin || next.pathname.startsWith('/tel:')) return;
  window.history.pushState({}, '', next.pathname);
  render(next.pathname);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function wireInteractions() {
  document.querySelectorAll('[data-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(link.href);
    });
  });

  const menu = document.querySelector('.menu-toggle');
  menu?.addEventListener('click', () => {
    const nav = document.querySelector('.site-nav');
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('[data-slideshow]').forEach(setupSlideshow);
  document.querySelector('[data-contact-form]')?.addEventListener('submit', handleContact);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

function setupSlideshow(root) {
  const slides = [...root.querySelectorAll('.slide-track img')];
  const dots = [...root.querySelectorAll('.slide-dots button')];
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === current));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === current));
  };

  root.querySelector('.prev')?.addEventListener('click', () => show(current - 1));
  root.querySelector('.next')?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  window.setInterval(() => {
    if (document.body.contains(root)) show(current + 1);
  }, 5500);
}

function handleContact(event) {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  event.currentTarget.reset();
  status.textContent = 'Thanks for reaching out. This local clone captured your message in the browser.';
}

window.addEventListener('popstate', () => render(window.location.pathname));

CapacitorApp.addListener('backButton', ({ canGoBack }) => {
  if (window.location.pathname !== '/') {
    window.history.back();
  } else if (canGoBack) {
    window.history.back();
  } else {
    CapacitorApp.exitApp();
  }
});

render();
