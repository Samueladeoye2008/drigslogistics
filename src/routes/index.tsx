import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Box,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Plane,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
  type LucideIcon,
} from "lucide-react";

import fleetImage from "@/assets/logisticsheader.png";
import galleryImage from "@/assets/gallery.jpg";
import galleryImageAlt from "@/assets/gallery1.jpg";
import headLogo from "@/assets/headlogo.png";
import heroImage from "@/assets/logisticsheader.jpg";
import truck1 from "@/assets/truck1.jpg";
import truck2 from "@/assets/truck2.jpeg";
import truck3 from "@/assets/truck3.jpeg";
import truck4 from "@/assets/truck4.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drigs Roamers | Logistics Across Nigeria" },
      { name: "description", content: "Fast, secure local, interstate, freight and e-commerce logistics across Nigeria." },
      { property: "og:title", content: "Drigs Roamers | Logistics Across Nigeria" },
      { property: "og:description", content: "Moving goods safely and on time across Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services: Array<[LucideIcon, string, string]> = [
  [Truck, "Local & interstate", "Reliable parcel and cargo delivery across every state in Nigeria."],
  [Plane, "Freight & cargo", "Careful movement of bulk, sensitive and time-critical freight by road or air."],
  [Warehouse, "Warehousing", "Secure and organized storage for businesses of every size."],
  [Box, "E-commerce logistics", "Pickup, packaging and last-mile support that keeps online stores moving."],
];

const faqs = [
  ["How do I book a delivery?", "Send us your pickup point, destination and package details through the quote form. Our team will confirm the best option."],
  ["Where do you deliver?", "We provide local and interstate delivery services across all states in Nigeria."],
  ["Can I track my shipment?", "Yes. We keep you informed from pickup through transit to final handoff."],
];

const reveal = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65 } };

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="landing-shell">
      <header className="kinetic-hero" id="home">
        <nav className={`landing-nav ${menuOpen ? "nav-open" : ""}`}>
          <a className="landing-brand" href="#home" onClick={() => setMenuOpen(false)}>
            <img src={headLogo} alt="Drigs Roamers Logistics" />
            <span>DRIGS <strong>ROAMERS</strong><small>LOGISTICS LTD.</small></span>
          </a>
          <button className="nav-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className="landing-links">
            <a href="#about">About</a><a href="#services">Services</a><a href="#fleet">Fleet</a><a href="#contact">Contact</a>
          </div>
          <a className="pill-button nav-cta" href="#contact">Get a quote <ArrowRight size={17} /></a>
        </nav>

        <div className="hero-grid">
          <motion.div className="hero-text" initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="live-pill"><span /> Nationwide delivery network</div>
            <h1>DRIGS <em>ROAMERS</em><small>Logistics without limits.</small></h1>
            <p>We move what matters with reliable local, interstate and freight services built for Nigerian businesses and individuals.</p>
            <div className="hero-actions"><a className="pill-button" href="#contact">Start shipping <ArrowRight size={18} /></a><a className="pill-button ghost-button" href="#services">Explore services</a></div>
            <div className="hero-stats"><div><strong>36</strong><span>States covered</span></div><div><strong>24/7</strong><span>Delivery support</span></div><div><strong>4.9/5</strong><span>Client rating</span></div></div>
          </motion.div>
          <motion.div className="hero-media-wrap" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <picture className="hero-media"><source media="(max-width: 720px)" srcSet={heroImage} /><img src={fleetImage} alt="Drigs Roamers trucks moving across Nigeria" /></picture>
            <div className="route-card"><Truck /><div><span>Current route</span><strong>Lagos → Abuja</strong><i><b /></i></div></div>
          </motion.div>
        </div>
        <a className="scroll-cue" href="#about">Explore our network <ChevronDown size={17} /></a>
      </header>

      <main>
        <motion.section className="story-band" id="about" {...reveal}>
          <div className="section-kicker">Moving what matters</div>
          <div className="story-grid"><h2>Built for the road.<br /><span>Trusted at every stop.</span></h2><div><p>Drigs Roamers Logistics Ltd combines local knowledge, experienced drivers and a dependable fleet to make every delivery simple, safe and transparent.</p><div className="trust-row"><span><ShieldCheck /> Safe handling</span><span><PackageCheck /> Clear updates</span></div></div></div>
        </motion.section>

        <section className="service-band" id="services">
          <motion.div className="section-head" {...reveal}><div><div className="section-kicker">What we move</div><h2>One team.<br />Every kind of delivery.</h2></div><p>Practical logistics for individuals, growing stores and established businesses.</p></motion.div>
          <div className="service-list">{services.map(([Icon, title, description], index) => <motion.article key={title} {...reveal} transition={{ duration: 0.55, delay: index * 0.08 }}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{description}</p></motion.article>)}</div>
        </section>

        <section className="fleet-band" id="fleet">
          <motion.div className="fleet-copy" {...reveal}><div className="section-kicker">Real fleet. Real routes.</div><h2>Always in motion.</h2><p>From single parcels to commercial cargo, our fleet is ready for the next route.</p><a className="pill-button" href="#contact">Plan a delivery <ArrowRight size={18} /></a></motion.div>
          <div className="fleet-collage">
            {[truck1, galleryImage, truck2, truck3, truck4, galleryImageAlt].map((image, index) => <motion.figure key={image} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><img src={image} alt={`Drigs Roamers fleet in operation ${index + 1}`} loading="lazy" /></motion.figure>)}
          </div>
        </section>

        <section className="process-band">
          <motion.div className="section-head light-head" {...reveal}><div><div className="section-kicker">Simple by design</div><h2>From request to doorstep.</h2></div></motion.div>
          <div className="process-line">{[["01", "Share the details", "Tell us what is moving, where it is and where it needs to go."], ["02", "We plan the route", "Our team selects the safest, most efficient delivery path."], ["03", "Track the journey", "Receive clear updates until the final handoff is complete."]].map(([number, title, copy]) => <motion.div key={number} {...reveal}><b>{number}</b><h3>{title}</h3><p>{copy}</p></motion.div>)}</div>
        </section>

        <section className="faq-band">
          <motion.div {...reveal}><div className="section-kicker">Good to know</div><h2>Questions,<br />answered clearly.</h2></motion.div>
          <div className="faq-stack">{faqs.map(([question, answer], index) => <article className={activeFaq === index ? "faq-open" : ""} key={question}><button type="button" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown /></button><div><p>{answer}</p></div></article>)}</div>
        </section>

        <section className="contact-band" id="contact">
          <motion.div className="contact-copy" {...reveal}><div className="section-kicker">Ready to move?</div><h2>Let’s plan your next delivery.</h2><p>Share the route and package details. Our team will get back to you with a clear plan.</p><div className="contact-details"><a href="tel:+2348001234567"><Phone /> +234 800 123 4567</a><a href="mailto:support@drigsroamers.com"><Mail /> support@drigsroamers.com</a><span><MapPin /> Lagos, Nigeria</span></div></motion.div>
          <motion.form className="quote-form" onSubmit={submit} {...reveal}><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required placeholder="+234 ..." /></label><label>Delivery details<textarea name="details" required rows={4} placeholder="Pickup, destination and package details" /></label><button className="pill-button" type="submit">{sent ? <><Check size={18} /> Request received</> : <>Request a quote <ArrowRight size={18} /></>}</button>{sent && <p role="status">Thanks — our team will contact you shortly.</p>}</motion.form>
        </section>
      </main>
      <footer className="landing-footer"><a className="landing-brand" href="#home"><img src={headLogo} alt="Drigs Roamers Logistics" /><span>DRIGS <strong>ROAMERS</strong><small>LOGISTICS LTD.</small></span></a><p>Fast, secure and dependable logistics across Nigeria.</p><span>© 2026 Drigs Roamers Logistics Ltd.</span></footer>
    </div>
  );
}