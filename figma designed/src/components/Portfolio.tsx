import imgBackground from '@/assets/3cf61b4b1ace96df6fd9be4e08cd0cb18f627897.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import { TextRotateIn } from './TextRotateIn';
import { Tilt3D } from './Tilt3D';
import { ImageParallaxHover } from './ImageParallaxHover';
import { HoverImageReveal } from './HoverImageReveal';
import imgProject1 from '@/assets/de6aa0d987c167846fb4cd46e661519ab0ca65e4.png';
import imgProject2 from '@/assets/087956d14579594f0408ff34576b3a5db97ad868.png';
import imgProject3 from '@/assets/b6a72fe5a61efc06449afa65e4bc7753593cfb39.png';
import imgProject4 from '@/assets/c58e083d2a2a5908628618b6f0ebe645ddbbfadb.png';
import imgProject5 from '@/assets/e8621bb6edf28a24c544a77ce0735c0521019d69.png';
import arrowSmall from '@/assets/arrow-small.svg';

interface Project {
    number: string;
    title: string;
    image: string;
    expanded?: boolean;
    description?: string;
    link: string;
}

const projects: Project[] = [
    { number: '01', title: 'Mockup 3d', image: imgProject1, link: '#' },
    { number: '02', title: 'Tricity Branding', image: imgProject2, link: '#' },
    {
        number: '03',
        title: '3d Wheel Top',
        image: imgProject3,
        expanded: true,
        description: 'Ad inani nominati scriptorem tation sale instructiore, natum feugaiti anvel, mundi omnes consetetur ex, nibh has.',
        link: '#',
    },
    { number: '04', title: 'Holographic airpod', image: imgProject4, link: '#' },
    { number: '05', title: 'Nature branding', image: imgProject5, link: '#' },
];

function CollapsedCard({ project }: { project: Project }) {
    return (
        <HoverImageReveal imageUrl={project.image} imageWidth={320} imageHeight={220}>
            <Tilt3D max={6} perspective={1200}>
                <div
                    className="flex items-center justify-between"
                    style={{
                        backdropFilter: 'blur(7.5px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '200px',
                        padding: '35px 33px 35px 102px',
                        maxWidth: '1319px',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    {/* Left: Number + Title */}
                    <div className="flex items-center portfolio-card-number" style={{ gap: '0' }}>
                        <span
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: '36px',
                                fontWeight: 400,
                                lineHeight: '28.6px',
                                color: 'white',
                            }}
                        >
                            {project.number}
                        </span>
                        <a
                            href={project.link}
                            className="portfolio-card-title-link"
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: '80px',
                                fontWeight: 500,
                                lineHeight: '90.2px',
                                color: 'white',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                marginLeft: '58px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {project.title}
                        </a>
                    </div>

                    {/* Right: Thumbnail */}
                    <div
                        className="portfolio-card-thumb"
                        style={{
                            width: '315.75px',
                            height: '157px',
                            borderRadius: '100px',
                            overflow: 'hidden',
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '168%',
                                objectFit: 'cover',
                                marginTop: '-34%',
                            }}
                        />
                    </div>
                </div>
            </Tilt3D>
        </HoverImageReveal>
    );
}

function ExpandedCard({ project }: { project: Project }) {
    return (
        <Tilt3D max={4} perspective={1500}>
            <div
                style={{
                    backdropFilter: 'blur(7.5px)',
                    backgroundColor: '#FF6B35',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '80px',
                    maxWidth: '1319px',
                    width: '100%',
                    overflow: 'hidden',
                    height: '485px',
                    position: 'relative',
                }}
            >
                {/* Left content */}
                <div style={{ position: 'absolute', left: '101px', top: '96px' }}>
                    {/* Number */}
                    <span
                        style={{
                            fontFamily: "'Teko', sans-serif",
                            fontSize: '36px',
                            fontWeight: 400,
                            lineHeight: '28.6px',
                            color: '#121212',
                        }}
                    >
                        {project.number}
                    </span>

                    {/* Title */}
                    <div style={{ marginLeft: '62px', marginTop: '-24px' }}>
                        <a
                            href={project.link}
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: '80px',
                                fontWeight: 500,
                                lineHeight: '90.2px',
                                color: '#121212',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            {project.title}
                        </a>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '18px',
                                fontWeight: 300,
                                lineHeight: '30px',
                                color: '#121212',
                                marginTop: '23px',
                                maxWidth: '550px',
                            }}
                        >
                            {project.description}
                        </p>

                        {/* View Project Details button */}
                        <a
                            href={project.link}
                            className="inline-flex items-center"
                            style={{
                                marginTop: '45px',
                                textDecoration: 'none',
                                gap: '0',
                            }}
                        >
                            <div
                                className="flex items-center justify-center"
                                style={{
                                    height: '48px',
                                    backgroundColor: '#121212',
                                    borderRadius: '100px',
                                    padding: '0 34px',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Kanit', sans-serif",
                                        fontSize: '11.2px',
                                        fontWeight: 500,
                                        lineHeight: '11.2px',
                                        color: 'white',
                                        whiteSpace: 'nowrap',
                                        textAlign: 'center',
                                    }}
                                >
                                    View Project Details
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-center"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#121212',
                                    borderRadius: '24px',
                                    marginLeft: '-2px',
                                }}
                            >
                                <img
                                    src={arrowSmall}
                                    alt=""
                                    style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)' }}
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right: Large image */}
                <ImageParallaxHover
                    style={{
                        position: 'absolute',
                        right: '34px',
                        top: '34px',
                        width: '473px',
                        height: '415px',
                        borderRadius: '50px',
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            width: '104.82%',
                            height: '100%',
                            objectFit: 'cover',
                            marginLeft: '-2.41%',
                        }}
                    />
                </ImageParallaxHover>
            </div>
        </Tilt3D>
    );
}

export function Portfolio() {
    return (
        <section
            className="relative w-full"
            style={{
                maxWidth: '1920px',
                margin: '0 auto',
                overflow: 'hidden',
            }}
        >
            {/* Dark wavy background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                    src={imgBackground}
                    alt=""
                    className="absolute left-0 w-full"
                    style={{ height: '112.72%', top: '-6.36%' }}
                    aria-hidden="true"
                />
            </div>

            <div
                className="relative portfolio-inner"
                style={{
                    padding: '156px 0px 147px',
                    maxWidth: '1480px',
                    margin: '0 auto',
                }}
            >
                {/* Header */}
                <div className="portfolio-header" style={{ maxWidth: '987px', marginLeft: '246.5px', marginBottom: '128px' }}>
                    {/* Label */}
                    <TextRotateIn axis="y" delay={100}>
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                letterSpacing: '1.6px',
                                color: 'white',
                                textTransform: 'uppercase',
                                margin: '0 0 45px 0',
                            }}
                        >
                            EXCLUSIVE PROJECTS
                        </p>
                    </TextRotateIn>

                    {/* Watermark heading */}
                    <div className="portfolio-heading">
                        <ScrollTextReveal
                            lines={['Checkout our best & exclusive', 'projects from portfolio']}
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

                {/* Project cards */}
                <div className="flex flex-col" style={{ gap: '50px' }}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            style={{
                                marginBottom: project.expanded ? '0' : '0',
                                marginLeft: i === 0 || i === 4 ? '0' : i === 2 ? '0' : '161px',
                            }}
                        >
                            {project.expanded ? (
                                <ExpandedCard project={project} />
                            ) : (
                                <CollapsedCard project={project} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
