import imgLogo from '@/assets/7f84654afce9a0d76d2f3d7f900f8636f7fed4ec.svg';
import { TextSlideIn } from './TextSlideIn';

function TickerBand() {
    return (
        <div
            className="footer-ticker"
            style={{
                width: '100vw',
                height: 'var(--footer-ticker-height, 297px)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div
                className="footer-ticker-text-wrap"
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: 0,
                    whiteSpace: 'nowrap',
                    animation: 'footerTicker 20s linear infinite',
                }}
            >
                {[0, 1, 2, 3].map((i) => (
                    <span
                        key={i}
                        className="footer-ticker-text"
                        style={{
                            fontFamily: "'Teko', sans-serif",
                            fontSize: 'clamp(60px, 15vw, 150px)',
                            fontWeight: 600,
                            lineHeight: '1',
                            letterSpacing: '1.09px',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginRight: '50px',
                        }}
                    >
                        <span style={{ color: '#0C0C0C', WebkitTextStroke: '1px #FF6B35' }}>
                            Call for project{' '}
                        </span>
                        <span
                            style={{
                                color: 'white',
                                letterSpacing: '2px',
                            }}
                        >
                            +44.093.99
                        </span>
                    </span>
                ))}
            </div>
            <style>{`
                @keyframes footerTicker {
                    0% { transform: translateY(-50%) translateX(0); }
                    100% { transform: translateY(-50%) translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

function SocialLink({ name }: { name: string }) {
    return (
        <a
            href="#"
            className="flex items-center"
            style={{
                gap: '12px',
                textDecoration: 'none',
            }}
        >
            <div
                style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '11px',
                    backgroundColor: 'white',
                }}
            />
            <span
                style={{
                    fontFamily: "'Kanit', sans-serif",
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '26px',
                    color: 'white',
                }}
            >
                {name}
            </span>
        </a>
    );
}

export function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#0C0C0C',
                maxWidth: '1920px',
                margin: '0 auto',
                overflow: 'hidden',
            }}
        >
            {/* Ticker band */}
            <TickerBand />

            {/* Main footer content */}
            <div
                className="footer-main"
                style={{
                    borderTop: '1px solid #3C3C3C',
                    borderBottom: '1px solid #3C3C3C',
                    height: '370px',
                    marginLeft: '310px',
                    maxWidth: '1300px',
                    position: 'relative',
                }}
            >
                <div className="flex footer-main-inner" style={{ height: '100%', gap: '10%' }}>
                    {/* Logo column */}
                    <div
                        className="footer-logo-col"
                        style={{
                            width: '220px',
                            borderRight: '1px solid #3C3C3C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={imgLogo}
                            alt="GeekPie"
                            style={{ width: '189px', height: '189px', marginLeft: '-30px', marginTop: '-11px' }}
                        />
                    </div>

                    {/* Opening hours */}
                    <div className="footer-col" style={{ paddingTop: '99px', width: '190px', flexShrink: 0 }}>
                        <TextSlideIn direction="up" delay={0}>
                            <p
                                style={{
                                    fontFamily: "'Kanit', sans-serif",
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: '35px',
                                    letterSpacing: '3px',
                                    color: '#5F5F5F',
                                    margin: 0,
                                }}
                            >
                                OPENING HOURS
                            </p>
                        </TextSlideIn>
                        <p
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                letterSpacing: '-0.16px',
                                color: 'white',
                                margin: '8px 0 0 0',
                            }}
                        >
                            Sunday – Closed
                        </p>
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                letterSpacing: '-0.16px',
                                color: 'white',
                                margin: 0,
                            }}
                        >
                            Mon – Fri 9AM – 6PM
                        </p>
                        <a
                            href="#"
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '35px',
                                color: 'rgba(255, 255, 255, 0.5)',
                                textDecoration: 'none',
                                display: 'block',
                                marginTop: '0',
                            }}
                        >
                            Appointments Recommended
                        </a>
                    </div>

                    {/* Studio address */}
                    <div style={{ paddingTop: '99px', width: '210px', flexShrink: 0 }} className="footer-col">
                        <TextSlideIn direction="up" delay={100}>
                            <p
                                style={{
                                    fontFamily: "'Kanit', sans-serif",
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: '35px',
                                    letterSpacing: '3px',
                                    color: '#5F5F5F',
                                    margin: 0,
                                }}
                            >
                                STUDIO ADDRESS
                            </p>
                        </TextSlideIn>
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                letterSpacing: '-0.16px',
                                color: 'white',
                                margin: '10px 0 0 0',
                            }}
                        >
                            213 Marina Street, Los Angeles
                            <br />
                            USA, 665432
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter" style={{ paddingTop: '85px', flex: 1 }}>
                        <TextSlideIn direction="up" delay={200}>
                            <h6
                                style={{
                                    fontFamily: "'Teko', sans-serif",
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    lineHeight: '28px',
                                    color: 'white',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    margin: '33px 0 0 0',
                                }}
                            >
                                SIGN UP FOR ALL THE LATEST
                                <br />
                                NEWS AND OFFERS
                            </h6>
                        </TextSlideIn>

                        {/* Email input */}
                        <div style={{ position: 'relative', marginTop: '25px' }}>
                            <div
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    borderRadius: '100px',
                                    height: '55px',
                                    width: '320px',
                                    marginLeft: '15px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        fontFamily: "'Kanit', sans-serif",
                                        fontSize: '14px',
                                        fontWeight: 300,
                                        color: 'white',
                                        padding: '0 25px',
                                        height: '100%',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                            {/* Submit button */}
                            <button
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '5px',
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '100px',
                                    backgroundColor: '#FF6B35',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M1 8H16M16 8L9 1M16 8L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="footer-bottom"
                style={{
                    height: '100px',
                    marginLeft: '310px',
                    maxWidth: '1300px',
                    position: 'relative',
                }}
            >
                <div className="flex items-center footer-bottom-inner" style={{ height: '100%' }}>
                    {/* Copyright */}
                    <div
                        className="footer-copyright"
                        style={{
                            width: '220px',
                            borderRight: '1px solid #5F5F5F',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                color: 'white',
                                margin: 0,
                            }}
                        >
                            ©{' '}
                            <span style={{ fontWeight: 700 }}>GeekPie</span>
                            {' '}Agency 2026
                        </p>
                    </div>

                    {/* Social links */}
                    <div
                        className="flex items-center footer-social-links"
                        style={{
                            marginLeft: '49px',
                            gap: '60px',
                        }}
                    >
                        <SocialLink name="Facebook" />
                        <SocialLink name="Instagram" />
                        <SocialLink name="Linked" />
                        <SocialLink name="Pinterest" />
                        <SocialLink name="YouTube" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
