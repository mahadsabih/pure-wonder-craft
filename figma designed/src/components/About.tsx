import { imgGroup, imgGroup1 } from '@/imports/svg-o2a0p';
import { ScrollTextReveal } from './ScrollTextReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { TextRotateIn } from './TextRotateIn';
import { TextFadeIn } from './TextFadeIn';
import { ScrollReveal } from './ScrollReveal';
import { DirectionAwareHover } from './DirectionAwareHover';

const stats = [
    {
        number: '500',
        suffix: '+',
        label: 'Active users',
        description: 'Leading businesses trust GeekPie',
    },
    {
        number: '99',
        suffix: '%',
        label: 'Client satisfaction',
        description: 'Exceptional service quality',
    },
    {
        number: '50',
        suffix: '+',
        label: 'Expert Team',
        description: 'Skilled professionals',
    },
    {
        number: '200',
        suffix: '+',
        label: 'Project Completed',
        description: 'Successful deployments',
    },
];

function DecorativeCircle() {
    return (
        <div
            className="relative"
            style={{ width: '159px', height: '158px', marginTop: '0', marginLeft: '63px' }}
        >
            {/* Background circle SVG from the original design */}
            <div style={{ position: 'absolute', top: 0, left: '50px', width: '136px', height: '137px' }}>
                <img src={imgGroup1} alt="" style={{ width: '100%', height: '100%' }} aria-hidden="true" />
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '159px', height: '158px' }}>
                <img src={imgGroup} alt="" style={{ width: '100%', height: '100%' }} aria-hidden="true" />
            </div>
        </div>
    );
}

function StatCell({ stat }: { stat: typeof stats[0] }) {
    return (
        <div
            className="about-stat-cell"
            style={{
                borderRight: '1px solid #D5D5D5',
                borderBottom: '1px solid #D5D5D5',
                padding: '56px 62px',
                width: '380.5px',
                height: '397.48px',
                boxSizing: 'border-box',
            }}
        >
            {/* Number */}
            <div style={{ marginBottom: '30px' }}>
                <span
                    className="about-stat-number"
                    style={{
                        fontFamily: "'Teko', sans-serif",
                        fontSize: '80px',
                        fontWeight: 600,
                        lineHeight: '80px',
                        color: '#FF6B35',
                    }}
                >
                    <AnimatedCounter value={parseInt(stat.number)} />
                </span>
                <span
                    className="about-stat-suffix"
                    style={{
                        fontFamily: "'Teko', sans-serif",
                        fontSize: '80px',
                        fontWeight: 600,
                        lineHeight: '80px',
                        color: '#121212',
                    }}
                >
                    {stat.suffix}
                </span>
            </div>

            {/* Label */}
            <p
                style={{
                    fontFamily: "'Kanit', sans-serif",
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: '35px',
                    letterSpacing: '-0.24px',
                    color: '#121212',
                    margin: '0 0 0 0',
                }}
            >
                {stat.label}
            </p>

            {/* Description */}
            <p
                style={{
                    fontFamily: "'Kanit', sans-serif",
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '27px',
                    color: '#4A4A4A',
                    margin: '12px 0 0 0',
                }}
            >
                {stat.description}
            </p>
        </div>
    );
}

export function About() {
    return (
        <section
            className="relative w-full"
            style={{
                maxWidth: '1920px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
            }}
        >
            <div
                className="relative flex about-inner"
                style={{
                    marginLeft: '238px',
                    marginRight: '238px',
                    maxWidth: '1444px',
                    paddingTop: '161px',
                    paddingBottom: '161px',
                }}
            >
                {/* Left side - text and decorative element */}
                <div className="shrink-0 about-left" style={{ width: '580px', paddingTop: '0' }}>
                    {/* WHY CHOOSE US label */}
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
                                margin: '0 0 52px 0',
                            }}
                        >
                            WHY CHOOSE US
                        </p>
                    </TextRotateIn>

                    {/* Watermark heading */}
                    <div className="about-heading">
                        <ScrollTextReveal
                            lines={['Why you should', 'choose GEEKPIE']}
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

                    {/* Body text */}
                    <TextFadeIn direction="up" delay={200}>
                        <div
                            className="about-body"
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '18px',
                                fontWeight: 300,
                                lineHeight: '30px',
                                color: '#5F5F5F',
                                marginTop: '52px',
                                maxWidth: '551px',
                            }}
                        >
                            <p style={{ margin: 0 }}>
                                At GeekPie we have a team of experts with cutting-edge solutions for
                                your business.
                            </p>
                        </div>
                    </TextFadeIn>

                    {/* Decorative circle element */}
                    <div style={{ marginTop: '100px' }} className="about-decorative">
                        <DecorativeCircle />
                    </div>
                </div>

                {/* Right side - 2x2 stats grid */}
                <div
                    className="about-stats-grid"
                    style={{
                        marginLeft: '101px',
                        border: '1px solid #D5D5D5',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}
                >
                    {stats.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 150}>
                            <DirectionAwareHover
                                overlay={
                                    <span style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '28px',
                                        fontWeight: 500,
                                        color: 'white',
                                        textTransform: 'uppercase',
                                    }}>
                                        {stat.label}
                                    </span>
                                }
                            >
                                <StatCell stat={stat} />
                            </DirectionAwareHover>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
