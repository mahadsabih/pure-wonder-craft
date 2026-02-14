import bgRadial from '@/assets/3acbccb114277a7b6493955adfa72065eb7b6e0d.png';
import playVideoSvg from '@/assets/play-video.svg';
import arrowIcon from '@/assets/arrow-white.svg';
import { MagneticButton } from './MagneticButton';
import { TextRotateIn } from './TextRotateIn';
import { SpotlightButton } from './SpotlightButton';
import { HoverParallax } from './HoverParallax';

export function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden hero-section"
            style={{ height: '1012px', maxWidth: '1920px', margin: '0 auto', backgroundColor: '#FBF9ED' }}
            data-name="Background"
        >
            {/* Radial ray background */}
            <img
                src={bgRadial}
                alt=""
                className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none"
                aria-hidden="true"
            />
            {/* White overlay at 90% opacity */}
            <div
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                style={{ backgroundColor: 'white', opacity: 0.9 }}
                aria-hidden="true"
            />

            {/* Content container */}
            <HoverParallax intensity={0.03}>
                <div
                    className="relative h-full hero-content"
                    style={{ marginLeft: '62px', marginRight: '62px', maxWidth: '1796px', height: '1012px' }}
                >
                    {/* Left text block */}
                    <div
                        className="absolute hero-text-block"
                        style={{ left: 0, top: '250px', width: '679px' }}
                    >
                        {/* Subtitle */}
                        <TextRotateIn axis="y" delay={200}>
                            <p
                                className="uppercase hero-subtitle"
                                style={{
                                    fontFamily: "'Kanit', sans-serif",
                                    fontSize: '20px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    letterSpacing: '3px',
                                    color: '#363636',
                                    marginBottom: '35px',
                                    paddingLeft: '5px',
                                }}
                            >
                                Hi, WE ARE GEEKPIE
                            </p>
                        </TextRotateIn>

                        {/* Main heading */}
                        <TextRotateIn axis="x" delay={500} duration={1000}>
                            <div style={{ marginBottom: '0' }} className="hero-heading-wrap">
                                <h1
                                    className="hero-heading"
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '150px',
                                        fontWeight: 700,
                                        lineHeight: '152px',
                                        color: '#1A1A1A',
                                        margin: 0,
                                        padding: 0,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    WEB &amp; APP{' '}
                                    <br />
                                    DEVELOPMENT
                                    <br />
                                    <span style={{ color: '#FF6B35' }}>AGENCY</span>
                                </h1>
                            </div>
                        </TextRotateIn>

                        {/* CTA Arrow Button */}
                        <div style={{ marginTop: '19px' }}>
                            <MagneticButton>
                                <SpotlightButton
                                    style={{ borderRadius: '100px' }}
                                    color="rgba(255,255,255,0.25)"
                                >
                                    <a
                                        href="#about"
                                        className="flex items-center justify-center btn-hover-invert hero-cta"
                                        style={{
                                            width: '86px',
                                            height: '86px',
                                            borderRadius: '100px',
                                            backgroundColor: '#FF6B35',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                        }}
                                        aria-label="Learn more"
                                    >
                                        <img
                                            src={arrowIcon}
                                            alt=""
                                            style={{ width: '23px', height: '22px' }}
                                        />
                                    </a>
                                </SpotlightButton>
                            </MagneticButton>
                        </div>
                    </div>

                    {/* Right - Play Video SVG illustration */}
                    <div
                        className="absolute parallax-item hero-illustration"
                        data-parallax-depth="1.5"
                        style={{
                            right: 0,
                            top: '250px',
                            width: '916px',
                            height: '605px',
                        }}
                    >
                        <img
                            src={playVideoSvg}
                            alt="Web and app development illustration"
                            className="w-full h-full"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </HoverParallax>
        </section>
    );
}
