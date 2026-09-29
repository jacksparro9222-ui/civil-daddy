import InquiryForm from "./inquiry-form";

const photos = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85",
  living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85",
  kitchen: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85",
  bedroom: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=1000&q=85",
  exterior: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
};

const services = [
  { number: "01", name: "Interior design", detail: "Thoughtful layouts, finishes and details for homes and workspaces." },
  { number: "02", name: "Civil & renovation", detail: "Practical construction and renovation work shaped around your space." },
  { number: "03", name: "Custom furniture", detail: "Made-to-fit furniture, storage and feature pieces for everyday living." },
  { number: "04", name: "False ceilings", detail: "Ceiling design and finishing that bring a room together." },
  { number: "05", name: "3D visualisation", detail: "See the direction of your space before work begins." },
];

const inspiration = [
  { title: "A calmer living room", type: "Residential interiors", image: photos.living },
  { title: "A kitchen made for living", type: "Kitchens & cabinetry", image: photos.kitchen },
  { title: "Restful private spaces", type: "Bedrooms & furniture", image: photos.bedroom },
  { title: "A fresh start for a home", type: "Civil & renovation", image: photos.exterior },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Civil Daddy home"><span className="logo-frame"><img src="/civil-daddy-logo.jpg" alt="Civil Daddy" /></span></a>
      <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Inspiration</a><a href="#about">About</a></nav>
      <a className="header-cta" href="#inquire">Discuss your project <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <img className="hero-image" src={photos.hero} alt="Contemporary interior with warm materials and natural light" />
      <div className="hero-shade" />
      <div className="hero-content wrap">
        <p className="eyebrow light">GOA · CIVIL & INTERIORS</p>
        <h1>Good spaces<br/><em>change everything.</em></h1>
        <p className="hero-intro">From the first idea to the finishing detail, create a space that feels right for the way you live.</p>
        <div className="hero-actions"><a className="button button-primary" href="#inquire">Tell us about your project <span>↗</span></a><a className="text-link light-link" href="#work">Explore the possibilities <span>↘</span></a></div>
      </div>
      <div className="hero-bottom wrap"><span>INTERIORS / CIVIL WORK / FURNITURE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="intro wrap" id="about"><div><p className="eyebrow">THE CIVIL DADDY APPROACH</p><h2>One team for the space<br/><em>you have in mind.</em></h2></div><div className="intro-side"><p>Whether it’s an interior refresh, a renovation or a new piece of custom furniture, the best result starts with understanding your space and what you need from it.</p><a className="under-link" href="#inquire">Let’s talk about your plans <span>↗</span></a></div></section>

    <section className="services-section" id="services"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Built around<br/><em>your vision.</em></h2></div><p>Explore the ways we can help shape your next space.</p></div><div className="service-list">{services.map((s)=><a href="#inquire" className="service-row" key={s.name}><span className="service-number">{s.number}</span><span className="service-title">{s.name}</span><span className="service-detail">{s.detail}</span><span className="service-arrow">↗</span></a>)}</div></div></section>

    <section className="work-section wrap" id="work"><div className="section-heading work-heading"><div><p className="eyebrow">SPACE INSPIRATION</p><h2>Imagine what’s<br/><em>possible.</em></h2></div><p>Ideas for the spaces we can create together. Images shown are illustrative stock photography.</p></div><div className="work-grid">{inspiration.map((item,i)=><div className={`work-card work-card-${i+1}`} key={item.title}><div className="work-image"><img src={item.image} alt={item.title} loading="lazy" /></div><div className="work-caption"><div><span>{item.type}</span><h3>{item.title}</h3></div><span aria-hidden="true">↗</span></div></div>)}</div><p className="photo-note">These are inspiration images, not completed Civil Daddy projects. Real project photography can be added here.</p></section>

    <section className="process-section"><div className="wrap process-grid"><div><p className="eyebrow light">START WITH A CONVERSATION</p><h2>Your next space<br/>starts <em>here.</em></h2></div><div className="process-copy"><p>Tell us what you’re planning, where the property is and how to reach you. We’ll use those details to discuss the next step.</p><div className="process-steps"><div><span>01</span> Share your brief</div><div><span>02</span> Discuss the possibilities</div><div><span>03</span> Plan the next step</div></div></div></div></section>

    <section className="contact-section wrap" id="inquire"><div className="contact-info"><p className="eyebrow">PROJECT ENQUIRIES</p><h2>Let’s make<br/><em>room for better.</em></h2><p>Tell us a little about your project. We’ll have your details ready when we get in touch.</p><div className="contact-direct"><span>Prefer to speak directly?</span><a href="tel:+917888111024">+91 78881 11024</a><a href="https://wa.me/917888111024" target="_blank" rel="noopener noreferrer">Message on WhatsApp ↗</a></div><div className="location">BASED IN PANAJI, GOA</div></div><InquiryForm /></section>
    <footer><div className="wrap footer-inner"><a className="brand footer-brand" href="#top" aria-label="Civil Daddy home"><span className="logo-frame"><img src="/civil-daddy-logo.jpg" alt="Civil Daddy" /></span></a><span>Spaces for living. Built with care.</span><div><a href="https://www.instagram.com/civildaddy01/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div></div></footer>
  </main>;
}
