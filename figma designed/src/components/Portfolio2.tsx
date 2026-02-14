import imgBackground from '@/assets/3cf61b4b1ace96df6fd9be4e08cd0cb18f627897.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import imgHouse from '@/assets/0e236bba65a1d61d53801f8794b174b8b411d7a2.svg';
import imgInvestment from '@/assets/0d89fad924b80d6925da49237454821c60775df8.svg';
import imgLearning from '@/assets/24e92aa21cc62a8c2fa1c412356504d492001af4.svg';
import { MagneticButton } from './MagneticButton';
import { SpotlightButton } from './SpotlightButton';

interface CaseStudy {
    number: string;
    title: string;
    description: string;
    image: string;
    imageSize: { width: number; height: number };
    gradientDirection: 'left' | 'right';
    imagePosition: 'right' | 'left';
}

const caseStudies: CaseStudy[] = [
    {
        number: '01',
        title: 'Real Estate AI Platform',
        description: 'AI-powered property matching and virtual tour system for premium agencies.',
        image: imgHouse,
        imageSize: { width: 503, height: 506 },
        gradientDirection: 'right',
        imagePosition: 'right',
    },
    {
        number: '02',
        title: 'Finance Dashboard App',
        description: 'Mobile and web app with AI-driven investment recommendations.',
        image: imgInvestment,
        imageSize: { width: 500, height: 496 },
        gradientDirection: 'left',
        imagePosition: 'left',
    },
    {
        number: '03',
        title: 'EdTech Learning Platform',
        description: 'Education platform with AI tutoring and adaptive learning.',
        image: imgLearning,
        imageSize: { width: 536, height: 536 },
        gradientDirection: 'right',
        imagePosition: 'right',
    },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
    const gradientBg =
        study.gradientDirection === 'right'
            ? 'linear-gradient(135deg, rgb(45, 45, 45) 0%, rgb(26, 26, 26) 100%)'
            : 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(45, 45, 45) 100%)';

    const isImageLeft = study.imagePosition === 'left';

    return (
        <div
            className="portfolio2-card"
            style={{
                backgroundImage: gradientBg,
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: isImageLeft ? 'row-reverse' : 'row',
                position: 'relative',
                minHeight: '420px',
            }}
        >
            {/* Text content */}
            <div
                className="portfolio2-card-text"
                style={{
                    flex: 1,
                    padding: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: 0,
                }}
            >
                {/* Number */}
                <p
                    style={{
                        fontFamily: "'Kanit', sans-serif",
                        fontSize: '29px',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#FF6B35',
                        margin: 0,
                    }}
                >
                    {study.number}
                </p>

                {/* Title */}
                <h3
                    className="portfolio2-card-title"
                    style={{
                        fontFamily: "'Teko', sans-serif",
                        fontSize: '76px',
                        fontWeight: 700,
                        lineHeight: '91.2px',
                        color: 'white',
                        margin: 0,
                    }}
                >
                    {study.title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "'Kanit', sans-serif",
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '28.8px',
                        color: '#F5F5F5',
                        margin: '9px 0 20.8px 0',
                    }}
                >
                    {study.description}
                </p>

                {/* Button */}
                <MagneticButton>
                    <SpotlightButton
                        style={{ borderRadius: '8px' }}
                        color="rgba(255,255,255,0.2)"
                    >
                        <a
                            href="#"
                            className="btn-hover-invert portfolio2-card-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FF6B35',
                                border: '2px solid #FF6B35',
                                borderRadius: '8px',
                                padding: '22px 42px',
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '18px',
                                fontWeight: 600,
                                color: 'white',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                alignSelf: 'flex-start',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            View Case Study
                        </a>
                    </SpotlightButton>
                </MagneticButton>
            </div>

            {/* Image area */}
            <div
                className="portfolio2-card-image"
                style={{
                    width: `${study.imageSize.width}px`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <img
                    src={study.image}
                    alt={study.title}
                    style={{
                        width: `${study.imageSize.width}px`,
                        height: `${study.imageSize.height}px`,
                        objectFit: 'contain',
                    }}
                />
            </div>
        </div>
    );
}

export function Portfolio2() {
    return (
        <section
            style={{
                position: 'relative',
                maxWidth: '1920px',
                margin: '0 auto',
                overflow: 'hidden',
            }}
        >
            {/* Dark textured background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            >
                <img
                    src={imgBackground}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="portfolio2-inner"
                style={{
                    position: 'relative',
                    marginLeft: '220px',
                    maxWidth: '1480px',
                    paddingTop: '156px',
                    paddingBottom: '120px',
                }}
            >
                {/* Watermark heading */}
                <div className="portfolio2-header" style={{ marginLeft: '246px', maxWidth: '987px', marginBottom: '100px' }}>
                    <div className="portfolio2-heading">
                        <ScrollTextReveal
                            lines={['Explore our top-performing', 'AI Agent solutions']}
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: '84px',
                                fontWeight: 600,
                                lineHeight: '76px',
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                        />
                    </div>
                </div>

                {/* Case study cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.number} study={study} />
                    ))}
                </div>
            </div>
        </section>
    );
}
