import imgAshley from '@/assets/5e869dff2c3f715d14141583ea4f3154100d1add.png';
import { ScrollTextReveal } from './ScrollTextReveal';
import { TextRotateIn } from './TextRotateIn';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';
import { ImageParallaxHover } from './ImageParallaxHover';
import imgGarrison from '@/assets/e5d26388c2ffd1d3a2cf7f6e3bcdaace2739d625.png';
import imgJordan from '@/assets/51ccd9a0fde48c99f36ff5ff99f3116a35096e90.png';
import imgLeonerdo from '@/assets/081e9026626eab0e83b3e2587040daa3c0fe3839.png';
import imgErik from '@/assets/9e9d0de76358c0cee905246d1375cbd21b288b87.png';
import imgScarlet from '@/assets/73b7684f06055921d5861490b200889d25ea357d.png';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Ashley Raily Jonson', role: 'Business Consultant', image: imgAshley },
    { name: 'Garrison Gardner', role: 'Business Consultant', image: imgGarrison },
    { name: 'Jordan Alexander', role: 'Business Consultant', image: imgJordan },
    { name: 'Leonerdo Brandon', role: 'Business Consultant', image: imgLeonerdo },
    { name: 'Erik R Stocklin', role: 'Business Consultant', image: imgErik },
    { name: 'Scarlet Elizabeth', role: 'Business Consultant', image: imgScarlet },
];

function TeamCard({ member }: { member: TeamMember }) {
    return (
        <Tilt3D max={8} perspective={1200}>
            <div
                className="team-card"
                style={{
                    width: '419.98px',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                }}
            >
                {/* Portrait photo */}
                <ImageParallaxHover className="team-card-photo" style={{ width: '419.98px', height: '572.22px' }}>
                    <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </ImageParallaxHover>

                {/* Name and role */}
                <div style={{ paddingTop: '43px', paddingRight: '32px', textAlign: 'center' }}>
                    <p
                        style={{
                            fontFamily: "'Teko', sans-serif",
                            fontSize: '32px',
                            fontWeight: 500,
                            lineHeight: '34px',
                            color: '#121212',
                            textTransform: 'uppercase',
                            margin: 0,
                        }}
                    >
                        {member.name}
                    </p>
                    <p
                        style={{
                            fontFamily: "'Kanit', sans-serif",
                            fontSize: '18px',
                            fontWeight: 300,
                            lineHeight: '26px',
                            color: '#555555',
                            margin: '18px 0 0 0',
                        }}
                    >
                        {member.role}
                    </p>
                </div>
            </div>
        </Tilt3D>
    );
}

export function Team() {
    return (
        <section
            style={{
                backgroundColor: '#F2EDEA',
                maxWidth: '1920px',
                margin: '0 auto',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Content container */}
            <div
                style={{
                    marginLeft: '163px',
                    paddingTop: '137px',
                    paddingBottom: '100px',
                    maxWidth: '1594px',
                }}
                className="team-inner"
            >
                {/* Header */}
                <div className="team-header" style={{ marginLeft: '381px', maxWidth: '832px', marginBottom: '100px' }}>
                    {/* Label */}
                    <TextRotateIn axis="y" delay={100}>
                        <p
                            style={{
                                fontFamily: "'Kanit', sans-serif",
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                letterSpacing: '1.6px',
                                color: '#121212',
                                textTransform: 'uppercase',
                                margin: '0 0 45px 0',
                            }}
                        >
                            OUR TEAM
                        </p>
                    </TextRotateIn>

                    {/* Watermark heading */}
                    <div className="team-heading">
                        <ScrollTextReveal
                            lines={['MEET OUR incredible Team', 'of great minds']}
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontSize: '84px',
                                fontWeight: 600,
                                lineHeight: '76px',
                                color: '#121212',
                                textTransform: 'uppercase',
                            }}
                        />
                    </div>
                </div>

                {/* Team grid - staggered 3x2 */}
                <div style={{ position: 'relative' }}>
                    {/* Row 1 */}
                    <div className="flex team-grid-row" style={{ gap: '167px', marginLeft: '0' }}>
                        <div style={{ marginTop: '0' }}>
                            <ScrollReveal delay={0}>
                                <TeamCard member={teamMembers[0]} />
                            </ScrollReveal>
                        </div>
                        <div className="team-stagger" style={{ marginTop: '150px' }}>
                            <ScrollReveal delay={200}>
                                <TeamCard member={teamMembers[1]} />
                            </ScrollReveal>
                        </div>
                        <div style={{ marginTop: '0' }}>
                            <ScrollReveal delay={400}>
                                <TeamCard member={teamMembers[2]} />
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex team-grid-row team-row-2" style={{ gap: '167px', marginLeft: '0', marginTop: '50px' }}>
                        <div style={{ marginTop: '0' }}>
                            <ScrollReveal delay={0}>
                                <TeamCard member={teamMembers[3]} />
                            </ScrollReveal>
                        </div>
                        <div style={{ marginTop: '150px' }}>
                            <ScrollReveal delay={200}>
                                <TeamCard member={teamMembers[4]} />
                            </ScrollReveal>
                        </div>
                        <div style={{ marginTop: '0' }}>
                            <ScrollReveal delay={400}>
                                <TeamCard member={teamMembers[5]} />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
