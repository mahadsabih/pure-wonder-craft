import imgImage from '@/assets/874cc617ec91a2ef302c9fd9b0d332441cd98007.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import imgImage1 from '@/assets/2b6aaab643fbe3ff960e05786c24160fbf48d699.png';
import imgWhatsApp from '@/assets/0c5395206800f3e2b5e690641a292b063a89391e2.png';
import arrowOrange from '@/assets/arrow-orange-large.svg';
import arrowDiagonal from '@/assets/arrow-diagonal.svg';
import arrowSmall from '@/assets/arrow-small.svg';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { TextRotateIn } from './TextRotateIn';
import { TextFadeIn } from './TextFadeIn';
import { SpotlightButton } from './SpotlightButton';

export function AboutCompany() {
    return (
        <section
            className="relative w-full overflow-hidden about-company-section"
            style={{
                maxWidth: '1920px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                paddingTop: '0',
                paddingBottom: '0',
            }}
        >
            <div
                className="relative about-company-inner"
                style={{
                    marginLeft: '200px',
                    marginRight: '200px',
                    maxWidth: '1520px',
                }}
            >
                {/* Main content area */}
                <div className="flex about-company-flex" style={{ paddingTop: '160px' }}>
                    {/* Left column - vertical border + image + years counter */}
                    <div
                        className="relative shrink-0 about-company-left"
                        style={{
                            width: '376px',
                            borderRight: '1px solid #D5D5D5',
                        }}
                    >
                        {/* Office photo */}
                        <div
                            className="about-company-photo"
                            style={{
                                width: '309px',
                                height: '353px',
                                borderRadius: '27px',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={imgImage}
                                alt="Office"
                                style={{
                                    width: '142.54%',
                                    height: '503px',
                                    objectFit: 'cover',
                                    marginTop: '-150px',
                                }}
                            />
                        </div>

                        {/* 1+ Years Experience counter */}
                        <div
                            style={{
                                borderTop: '1px solid #D5D5D5',
                                marginTop: '67px',
                                paddingTop: '30px',
                                paddingLeft: '20px',
                            }}
                        >
                            <div className="flex items-end baseline" style={{ gap: '12px' }}>
                                <span
                                    className="about-company-counter-num"
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '180px',
                                        fontWeight: 400,
                                        lineHeight: '90px',
                                        letterSpacing: '-9px',
                                        color: '#FF6B35',
                                    }}
                                >
                                    <AnimatedCounter value={15} />
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '58px',
                                        fontWeight: 400,
                                        lineHeight: '58px',
                                        letterSpacing: '-9px',
                                        color: '#1A1A1A',
                                        marginBottom: '100px',
                                    }}
                                >
                                    +
                                </span>
                                <p
                                    style={{
                                        fontFamily: "'Kanit', sans-serif",
                                        fontSize: '28px',
                                        fontWeight: 500,
                                        lineHeight: '32px',
                                        letterSpacing: '-0.56px',
                                        color: '#121212',
                                        marginTop: '0px',
                                        paddingLeft: '0px',
                                    }}
                                >
                                    Years{' '}
                                    <span style={{ color: '#FF6B35' }}>Experience</span>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right column */}
                    <div
                        className="relative about-company-right-content"
                        style={{
                            marginLeft: '61px',
                            flex: 1,
                            maxWidth: '1083px',
                        }}
                    >
                        {/* Top row: heading + arrow decoration */}
                        <div className="relative" style={{ marginBottom: '0' }}>
                            {/* ABOUT COMPANY label */}
                            <TextRotateIn axis="y" delay={100}>
                                <p
                                    style={{
                                        fontFamily: "'Kanit', sans-serif",
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                        letterSpacing: '1.6px',
                                        color: '#4B4B4B',
                                        textTransform: 'uppercase',
                                        marginBottom: '25px',
                                    }}
                                >
                                    ABOUT COMPANY
                                </p>
                            </TextRotateIn>

                            {/* Watermark heading */}
                            <div className="about-company-heading">
                                <ScrollTextReveal
                                    lines={['Building relationship', 'with our clients through', 'INNOVATIVE SOLUTIONS']}
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '84px',
                                        fontWeight: 600,
                                        lineHeight: '76px',
                                        color: '#121212',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                    }}
                                />
                            </div>

                            {/* Large orange arrow decoration (top right) */}
                            <div
                                className="absolute"
                                style={{
                                    top: '0',
                                    right: '-80px',
                                    width: '115px',
                                    height: '115px',
                                }}
                            >
                                {/* Orange filled arrow */}
                                <img
                                    src={arrowOrange}
                                    alt=""
                                    aria-hidden="true"
                                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                                />
                                {/* Outlined arrow (offset) */}
                                <img
                                    src={arrowDiagonal}
                                    alt=""
                                    aria-hidden="true"
                                    style={{ width: '117px', height: '115px', position: 'absolute', top: '8px', left: '9px' }}
                                />
                            </div>
                        </div>

                        {/* Bottom row: text + second image + WhatsApp badge */}
                        <div
                            className="relative flex"
                            style={{ marginTop: '40px' }}
                        >
                            {/* Body text + CTA button */}
                            <div style={{ width: '626px', paddingLeft: '3px' }}>
                                <div style={{ paddingTop: '50px', paddingLeft: '72px' }}>
                                    <TextFadeIn direction="up" delay={200}>
                                        <div
                                            style={{
                                                fontFamily: "'Kanit', sans-serif",
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                lineHeight: '27px',
                                                color: '#5F5F5F',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            <p style={{ margin: '0 0 27px 0' }}>
                                                At GeekPie we have a team of experts with a wide range of specialized skills in web development, mobile apps, and custom AI agents.
                                            </p>
                                            <p style={{ margin: 0 }}>
                                                We create intelligent solutions for real estate, finance, education, and more.
                                            </p>
                                        </div>
                                    </TextFadeIn>

                                    {/* Let's Collaborate button */}
                                    <div style={{ marginTop: '50px' }}>
                                        <MagneticButton>
                                            <SpotlightButton
                                                style={{ borderRadius: '100px' }}
                                                color="rgba(255,255,255,0.25)"
                                            >
                                                <a
                                                    href="#contact"
                                                    className="relative inline-flex items-center cursor-pointer group wobble-hover btn-hover-invert-group"
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <div
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            height: '60px',
                                                            backgroundColor: '#FF6B35',
                                                            borderRadius: '100px',
                                                            paddingLeft: '49.5px',
                                                            paddingRight: '49.5px',
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily: "'Inter', sans-serif",
                                                                fontSize: '14px',
                                                                fontWeight: 500,
                                                                lineHeight: '14px',
                                                                color: '#121212',
                                                                whiteSpace: 'nowrap',
                                                            }}
                                                        >
                                                            Let's Collaborate
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="flex items-center justify-center"
                                                        style={{
                                                            width: '60px',
                                                            height: '60px',
                                                            backgroundColor: '#FF6B35',
                                                            borderRadius: '30px',
                                                            marginLeft: '-1px',
                                                        }}
                                                    >
                                                        <img
                                                            src={arrowSmall}
                                                            alt=""
                                                            style={{ width: '15.5px', height: '15.5px' }}
                                                        />
                                                    </div>
                                                </a>
                                            </SpotlightButton>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </div>

                            {/* Second photo */}
                            <div
                                style={{
                                    width: '309px',
                                    height: '353px',
                                    borderRadius: '27px',
                                    overflow: 'hidden',
                                    marginLeft: '72px',
                                }}
                            >
                                <img
                                    src={imgImage1}
                                    alt="Team collaboration"
                                    style={{
                                        width: '142.54%',
                                        height: '503px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            {/* WhatsApp circular badge with rotating text */}
                            <div
                                className="absolute"
                                style={{
                                    right: '-17px',
                                    top: '-90px',
                                    width: '200.62px',
                                    height: '200.62px',
                                }}
                            >


                                {/* Center image */}
                                <div
                                    className="flex items-center justify-center"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <img
                                        src={imgWhatsApp}
                                        alt="GeekPie Web and App Development Agency"
                                        style={{
                                            // marginTop: '40px',
                                            width: '150px',
                                            height: '150px',
                                            objectFit: 'cover',
                                            // borderRadius: '50%',
                                        }}
                                    />
                                </div>

                                {/* Rotating text ring */}
                                <svg
                                    viewBox="0 0 200 200"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        animation: 'spinText 12s linear infinite',
                                    }}
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                        />
                                    </defs>
                                    <text
                                        style={{
                                            fontFamily: "'Kanit', sans-serif",
                                            fontSize: '20px',
                                            fontWeight: 900,
                                            letterSpacing: '1.2px',
                                            textTransform: 'uppercase',
                                            fill: '#FF6B35',
                                            stroke: '#000000',
                                            strokeWidth: 0.6,
                                        }}
                                    >
                                        <textPath href="#circlePath" startOffset="0%">
                                            <tspan fill="#FF6B35">GEEKPIE</tspan>{' '}
                                            <tspan fill="#FFFFFF">WEB</tspan>{' '}
                                            <tspan fill="#FF6B35">AND</tspan>{' '}
                                            <tspan fill="#FFFFFF">APP</tspan>{' '}
                                            <tspan fill="#FF6B35">DEVELOPMENT</tspan>{' '}
                                            <tspan fill="#FFFFFF">AGENCY</tspan>{' '}
                                            <tspan fill="#FF6B35">•</tspan>
                                        </textPath>
                                    </text>
                                </svg>


                                {/* Keyframes for rotation */}
                                <style>{`
                                    @keyframes spinText {
                                        from { transform: rotate(0deg); }
                                        to { transform: rotate(360deg); }
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
