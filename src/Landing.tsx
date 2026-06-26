import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
import filaLogo from './Fila_Gradient_Transparent.png';
import {
  IconShieldCheck,
  IconUser,
  IconStethoscope,
  IconDownload,
  IconChartLine,
  IconSparkles,
  IconShare,
  IconActivityHeartbeat,
  IconSearch,
  IconHeart,
  IconUsersGroup,
  IconCheck,
  IconX,
  IconMail,
  IconLoader2,
} from '@tabler/icons-react';

const FORMSPREE_WAITLIST = 'mdarglpd';
const FORMSPREE_CONTACT = 'xqevqdgy';

async function submitToFormspree(formId: string, data: Record<string, string>) {
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Submission failed');
  return res.json();
}

function useCountUp(end: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return { value, ref };
}

const inputBase: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: 14,
  color: '#102a45',
  background: '#fff',
  border: '1px solid #adcce6',
  borderRadius: 10,
  padding: '10px 13px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) { setSent(false); setError(''); setName(''); setEmail(''); setMessage(''); }
  }, [open]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) { setError('Please fill out all required fields.'); return; }
    setSending(true);
    setError('');
    try {
      await submitToFormspree(FORMSPREE_CONTACT, { name, email, message });
      setSent(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(16,42,69,0.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 16, padding: '24px', maxWidth: 360, width: '100%', position: 'relative', boxShadow: '0 24px 64px rgba(16,42,69,0.2)' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <IconX size={20} color="#80add1" stroke={1.8} />
        </button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(69,122,171,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <IconCheck size={24} color="#457aab" stroke={2.2} />
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 19, color: '#102a45', marginBottom: 6 }}>Message sent!</div>
            <p style={{ fontWeight: 300, fontSize: 14.5, color: '#244a73', lineHeight: 1.5, margin: 0 }}>Thanks for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 20, color: '#102a45', marginBottom: 4 }}>Get in touch</div>
            <p style={{ fontWeight: 300, fontSize: 14, color: '#244a73', lineHeight: 1.5, margin: '0 0 12px' }}>Questions, feedback, or partnership inquiries? We'd love to hear from you.</p>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name*" aria-label="Name" required className="fila-input" style={inputBase} />
              <input value={email} onChange={e => { setEmail(e.target.value); setError(''); }} type="email" placeholder="you@email.com*" aria-label="Email" required className="fila-input" style={inputBase} />
              <textarea value={message} onChange={e => { setMessage(e.target.value); setError(''); }} placeholder="Your message*" aria-label="Message" required rows={4} className="fila-input" style={{ ...inputBase, resize: 'vertical', minHeight: 80 }} />
              {error && <div style={{ fontSize: 13.5, color: '#b04a4a' }}>{error}</div>}
              <button type="submit" disabled={sending} className="fila-btn" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: '#fff', background: 'linear-gradient(135deg, #244a73 0%, #457aab 100%)', border: 'none', borderRadius: 10, padding: '12px 24px', cursor: sending ? 'wait' : 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 6px 18px rgba(36,74,115,0.28)', opacity: sending ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                {sending ? <><IconLoader2 size={18} color="#fff" stroke={2} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function Landing() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroErr, setHeroErr] = useState('');
  const [heroDone, setHeroDone] = useState(false);
  const [heroSending, setHeroSending] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaErr, setCtaErr] = useState('');
  const [ctaDone, setCtaDone] = useState(false);
  const [ctaSending, setCtaSending] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const heroInputRef = useRef<HTMLInputElement>(null);

  const stat1 = useCountUp(14);
  const stat2 = useCountUp(4000);
  const stat3 = useCountUp(65);

  const valid = useCallback((e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((e || '').trim()), []);

  const submitHero = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid(heroEmail)) { setHeroErr('Please enter a valid email address.'); return; }
    setHeroSending(true);
    setHeroErr('');
    try {
      await submitToFormspree(FORMSPREE_WAITLIST, { email: heroEmail.trim() });
      setHeroDone(true);
    } catch {
      setHeroErr('Something went wrong. Please try again.');
    } finally {
      setHeroSending(false);
    }
  };

  const submitCta = async (e: FormEvent) => {
    e.preventDefault();
    if (!valid(ctaEmail)) { setCtaErr('Please enter a valid email address.'); return; }
    setCtaSending(true);
    setCtaErr('');
    try {
      await submitToFormspree(FORMSPREE_WAITLIST, { email: ctaEmail.trim() });
      setCtaDone(true);
    } catch {
      setCtaErr('Something went wrong. Please try again.');
    } finally {
      setCtaSending(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes filaUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fila-landing ::selection { background: #adcce6; color: #102a45; }
        .fila-landing input::placeholder, .fila-landing textarea::placeholder { color: #80add1; }
        .fila-landing .fila-input:focus { border-color: #457aab; box-shadow: 0 0 0 3px rgba(69,122,171,0.15); }
        .fila-landing .fila-input-dark:focus { border-color: #adcce6; box-shadow: 0 0 0 3px rgba(173,204,230,0.2); }
        .fila-landing .fila-btn:hover { transform: translateY(-1px); box-shadow: 0 9px 24px rgba(36,74,115,0.36); }
        .fila-landing .fila-btn-light:hover { transform: translateY(-1px); background: #c2d9ee; }
        .fila-landing .fila-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(16,42,69,0.13); }
        .fila-landing .fila-contact-link:hover { color: #adcce6 !important; }
        @media (max-width: 640px) {
          .fila-landing .fila-hero-badges { flex-direction: column; gap: 10px !important; }
          .fila-landing .fila-stats-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .fila-landing .fila-features-grid { grid-template-columns: 1fr !important; }
          .fila-landing .fila-personas-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .fila-landing .fila-form { flex-direction: column; }
          .fila-landing .fila-form input { flex: 1 1 auto !important; }
          .fila-landing .fila-form button { width: 100%; }
        }
      `}</style>
      <div className="fila-landing" style={{ fontFamily: "'Inter', sans-serif", color: '#102a45', background: '#d6e6f5' }}>

        {/* HEADER */}
        <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(214,230,245,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(173,204,230,0.4)', padding: '0 clamp(20px,5vw,56px)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <img src={filaLogo} alt="Fila" style={{ height: 44 }} />
            <button onClick={() => setContactOpen(true)} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, color: '#244a73', background: 'transparent', border: '1.5px solid #457aab', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', transition: 'background 0.2s, color 0.2s', display: 'flex', alignItems: 'center', gap: 7 }} onMouseEnter={e => { e.currentTarget.style.background = '#244a73'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#244a73'; }}>
              <IconMail size={15} stroke={2} /> Contact
            </button>
          </div>
        </header>

        {/* HERO */}
        <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,56px) clamp(40px,5vw,56px)', maxWidth: 1180, margin: '0 auto', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(2.7rem, 6.4vw, 5.1rem)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: '0 0 26px', color: '#102a45', animation: 'filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both' }}>
              Your health record,<br />
              <span style={{ background: 'linear-gradient(135deg, #244a73, #adcce6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>finally yours.</span>
            </h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', lineHeight: 1.6, color: '#244a73', maxWidth: 620, margin: '0 0 36px', animation: 'filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both' }}>
              Fila is the first patient-owned longitudinal health record system built for patients, not providers. One platform with records from every provider, giving patients a comprehensive health history and agency over their own health.
            </p>

            <div style={{ animation: 'filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.24s both' }}>
              {heroDone ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 13, background: '#fff', border: '1px solid #adcce6', borderRadius: 12, padding: '18px 22px', maxWidth: 540, boxShadow: '0 8px 24px rgba(16,42,69,0.08)' }}>
                  <div style={{ flex: 'none', width: 38, height: 38, borderRadius: '50%', background: '#457aab', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconCheck size={20} color="#fff" stroke={2.4} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: '#102a45' }}>You're on the list.</div>
                    <div style={{ fontWeight: 300, fontSize: 14, color: '#244a73', marginTop: 2 }}>We'll email you when beta access opens.</div>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={submitHero} className="fila-form" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 540 }}>
                    <input ref={heroInputRef} value={heroEmail} onChange={e => { setHeroEmail(e.target.value); setHeroErr(''); }} type="email" placeholder="you@email.com" aria-label="Email address" className="fila-input" style={{ flex: '1 1 240px', minWidth: 0, fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, color: '#102a45', background: '#fff', border: '1px solid #adcce6', borderRadius: 10, padding: '15px 18px', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }} />
                    <button type="submit" disabled={heroSending} className="fila-btn" style={{ flex: '0 0 auto', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: '#fff', background: 'linear-gradient(135deg, #244a73 0%, #457aab 100%)', border: 'none', borderRadius: 10, padding: '15px 26px', cursor: heroSending ? 'wait' : 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 6px 18px rgba(36,74,115,0.28)', opacity: heroSending ? 0.7 : 1 }}>{heroSending ? 'Joining...' : 'Join the Waitlist'}</button>
                  </form>
                  {heroErr && <div style={{ fontSize: 13.5, color: '#b04a4a', marginTop: 9, paddingLeft: 2 }}>{heroErr}</div>}
                </>
              )}
            </div>

            <p style={{ fontWeight: 300, fontSize: 13.5, color: '#80add1', margin: '18px 0 0', animation: 'filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>Private beta launching soon. Waitlist members get first access.</p>

            <div className="fila-hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 30px', marginTop: 22, animation: 'filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.38s both' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconShieldCheck size={22} color="#457aab" stroke={1.6} />
                <span style={{ fontWeight: 400, fontSize: 14, color: '#244a73' }}>HIPAA-compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconUser size={22} color="#457aab" stroke={1.6} />
                <span style={{ fontWeight: 400, fontSize: 14, color: '#244a73' }}>Built for patients</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconStethoscope size={22} color="#457aab" stroke={1.6} />
                <span style={{ fontWeight: 400, fontSize: 14, color: '#244a73' }}>Every provider, one place</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ background: '#102a45', padding: 'clamp(56px,7vw,88px) clamp(20px,5vw,56px)' }}>
          <div className="fila-stats-grid" style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(40px,6vw,72px)' }}>
            <div ref={stat1.ref} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(3.2rem,5.5vw,4.6rem)', lineHeight: 1, color: '#adcce6', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{stat1.value}</div>
              <div style={{ width: 36, height: 3, background: '#457aab', borderRadius: 2, margin: '20px auto' }} />
              <div style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.55, color: '#80add1', maxWidth: 240, margin: '0 auto' }}>providers seen by the average chronic care patient<sup style={{ fontSize: '0.75em', opacity: 0.7 }}> 1</sup></div>
            </div>
            <div ref={stat2.ref} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(3.2rem,5.5vw,4.6rem)', lineHeight: 1, color: '#adcce6', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{stat2.value.toLocaleString()}+</div>
              <div style={{ width: 36, height: 3, background: '#457aab', borderRadius: 2, margin: '20px auto' }} />
              <div style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.55, color: '#80add1', maxWidth: 240, margin: '0 auto' }}>EHR systems in the U.S., most don't talk to each other<sup style={{ fontSize: '0.75em', opacity: 0.7 }}> 2</sup></div>
            </div>
            <div ref={stat3.ref} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(3.2rem,5.5vw,4.6rem)', lineHeight: 1, color: '#adcce6', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{stat3.value}%</div>
              <div style={{ width: 36, height: 3, background: '#457aab', borderRadius: 2, margin: '20px auto' }} />
              <div style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.55, color: '#80add1', maxWidth: 240, margin: '0 auto' }}>of diagnostic errors linked to fragmented patient data<sup style={{ fontSize: '0.75em', opacity: 0.7 }}> 3</sup></div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background: '#d6e6f5', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(1.9rem,3.6vw,2.9rem)', lineHeight: 1.1, letterSpacing: '-0.015em', color: '#102a45', margin: '0 0 54px', maxWidth: 640 }}>One platform. Your complete health story.</h2>
            <div className="fila-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 22 }}>
              {[
                { icon: <IconDownload size={34} color="#adcce6" stroke={1.5} />, title: 'Import', desc: 'Pull records from any provider via FHIR, document upload, or digital scan.' },
                { icon: <IconChartLine size={34} color="#adcce6" stroke={1.5} />, title: 'Track', desc: 'Log symptoms, medications, visits, and results in one living timeline.' },
                { icon: <IconSparkles size={34} color="#adcce6" stroke={1.5} />, title: 'Recommend', desc: 'AI surfaces patterns across your record and coaches you on what to raise with your provider.' },
                { icon: <IconShare size={34} color="#adcce6" stroke={1.5} />, title: 'Share', desc: 'Send a unified, read-only health history summary to any provider in seconds.' },
              ].map(c => (
                <div key={c.title} style={{ background: '#102a45', borderRadius: 16, padding: '30px 26px 32px', position: 'relative', overflow: 'hidden' }}>
                  {c.icon}
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 19, color: '#fff', margin: '22px 0 10px' }}>{c.title}</div>
                  <p style={{ fontWeight: 300, fontSize: 14.5, lineHeight: 1.6, color: '#80add1', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section style={{ background: 'linear-gradient(160deg, rgba(36,74,115,0.07) 0%, rgba(173,204,230,0.18) 100%)', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(1.9rem,3.6vw,2.9rem)', lineHeight: 1.1, letterSpacing: '-0.015em', color: '#102a45', margin: '0 0 54px', maxWidth: 680 }}>Built for the patients most failed by today's system.</h2>
            <div className="fila-personas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 18 }}>
              {[
                { icon: <IconActivityHeartbeat size={24} color="#457aab" stroke={1.7} />, title: 'The Chronic Care Patient', desc: 'Juggling a dozen specialists and a tangle of medications across systems that never sync.' },
                { icon: <IconSearch size={24} color="#457aab" stroke={1.7} />, title: 'The Diagnostic Odyssey Patient', desc: 'Years of tests and visits, still searching for an answer no single chart can see.' },
                { icon: <IconHeart size={24} color="#457aab" stroke={1.7} />, title: 'The Health-Conscious Patient', desc: 'Tracking wearables, labs, and concierge care, and wanting it all in one clear view.' },
                { icon: <IconUsersGroup size={24} color="#457aab" stroke={1.7} />, title: 'The Family Health Manager', desc: 'Carrying the medical history of parents and children, holding every detail in their head.' },
              ].map(c => (
                <div key={c.title} className="fila-card" style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', boxShadow: '0 2px 14px rgba(16,42,69,0.05)', border: '1px solid rgba(128,173,209,0.3)', transition: 'transform 0.25s, box-shadow 0.25s', cursor: 'default' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(69,122,171,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{c.icon}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 19, color: '#102a45', marginBottom: 10 }}>{c.title}</div>
                  <p style={{ fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: '#244a73', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECOND CTA */}
        <section style={{ position: 'relative', background: 'linear-gradient(135deg, #102a45 0%, #244a73 100%)', padding: 'clamp(72px,9vw,116px) clamp(20px,5vw,56px)', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3.1rem)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#fff', margin: '0 0 18px' }}>Be among the first to take control.</h2>
            <p style={{ fontWeight: 300, fontSize: 'clamp(1rem,1.5vw,1.18rem)', lineHeight: 1.55, color: '#adcce6', margin: '0 0 36px' }}>Beta access opens to waitlist members first. Reserve your place today.</p>

            {ctaDone ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 13, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(173,204,230,0.4)', borderRadius: 12, padding: '18px 24px', backdropFilter: 'blur(8px)' }}>
                <div style={{ flex: 'none', width: 36, height: 36, borderRadius: '50%', background: '#457aab', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconCheck size={19} color="#fff" stroke={2.4} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: '#fff' }}>You're on the list.</div>
                  <div style={{ fontWeight: 300, fontSize: 14, color: '#adcce6', marginTop: 2 }}>Watch your inbox for beta access.</div>
                </div>
              </div>
            ) : (
              <>
                <form onSubmit={submitCta} className="fila-form" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 520, margin: '0 auto' }}>
                  <input value={ctaEmail} onChange={e => { setCtaEmail(e.target.value); setCtaErr(''); }} type="email" placeholder="you@email.com" aria-label="Email address" className="fila-input-dark" style={{ flex: '1 1 240px', minWidth: 0, fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, color: '#fff', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(173,204,230,0.45)', borderRadius: 10, padding: '15px 18px', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }} />
                  <button type="submit" disabled={ctaSending} className="fila-btn-light" style={{ flex: '0 0 auto', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: '#102a45', background: '#adcce6', border: 'none', borderRadius: 10, padding: '15px 26px', cursor: ctaSending ? 'wait' : 'pointer', transition: 'transform 0.2s, background 0.2s', opacity: ctaSending ? 0.7 : 1 }}>{ctaSending ? 'Joining...' : 'Join the Waitlist'}</button>
                </form>
                {ctaErr && <div style={{ fontSize: 13.5, color: '#f0b4b4', marginTop: 11 }}>{ctaErr}</div>}
              </>
            )}
          </div>
        </section>

        {/* FOOTNOTES */}
        <footer style={{ background: '#0c2238', padding: 'clamp(32px,4vw,48px) clamp(20px,5vw,56px)' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <div style={{ borderTop: '1px solid rgba(128,173,209,0.15)', paddingTop: 24 }}>
              <ol style={{ margin: 0, padding: '0 0 0 18px', listStyleType: 'decimal', fontWeight: 300, fontSize: 12.5, lineHeight: 1.7, color: '#5a8ab0' }}>
                <li>Anderson, G. (2010). <em>Chronic Care: Making the Case for Ongoing Care</em>. Robert Wood Johnson Foundation.</li>
                <li>Wang, T. (2018). A framework for performance comparison among major electronic health record systems. <em>PMC</em>.</li>
                <li>Graber, M. L., Franklin, N., &amp; Gordon, R. (2005). Diagnostic error in internal medicine. <em>Archives of Internal Medicine</em>, 165(13), 1493–1499.</li>
              </ol>
            </div>
            <div style={{ marginTop: 24, fontWeight: 300, fontSize: 12, color: '#3d6d8f' }}>
              &copy; {new Date().getFullYear()} Fila Holistic Health. All rights reserved.
            </div>
          </div>
        </footer>

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
