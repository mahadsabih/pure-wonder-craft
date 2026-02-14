import imgTestimonial from '@/assets/22a741faaed90f334375c040f3a64c6fe4fff2bf.png';

function StarIcon() {
    return (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 0L16.09 8.26L25 9.27L18.5 15.14L20.18 24.02L13 19.77L5.82 24.02L7.5 15.14L1 9.27L9.91 8.26L13 0Z"
                fill="#FF6B35"
            />
        </svg>
    );
}

function QuoteIcon() {
    return (
        <div
            className="testimonial-quote-icon"
            style={{
                width: '126px',
                height: '126px',
                borderRadius: '100px',
                backgroundColor: '#121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '-53px',
                left: '438px',
            }}
        >
            <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 42V28.17C0 23.52 0.87 19.2 2.6 15.21C4.33 11.22 7.21 7.14 11.24 2.97L19.72 8.82C17.06 11.82 15.11 14.73 13.87 17.55C12.63 20.37 11.95 23.43 11.83 26.73H19.72V42H0ZM26.52 42V28.17C26.52 23.52 27.39 19.2 29.12 15.21C30.85 11.22 33.73 7.14 37.76 2.97L46.24 8.82C43.58 11.82 41.63 14.73 40.39 17.55C39.15 20.37 38.47 23.43 38.35 26.73H46.24V42H26.52Z" fill="white" />
            </svg>
        </div>
    );
}

export function Testimonial() {
    return (
        <section
            style={{
                backgroundColor: 'rgba(255, 107, 53, 0.75)',
                maxWidth: '1920px',
                margin: '0 auto',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div
                className="testimonial-inner"
                style={{
                    marginLeft: '238px',
                    maxWidth: '1444px',
                    paddingTop: '140px',
                    paddingBottom: '140px',
                    position: 'relative',
                }}
            >
                <div className="flex testimonial-content" style={{ gap: '102px' }}>
                    {/* Left - Photo */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div
                            className="testimonial-photo"
                            style={{
                                width: '532px',
                                height: '649.03px',
                                borderRadius: '25px',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={imgTestimonial}
                                alt="Testimonial"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Quote icon badge */}
                        <QuoteIcon />
                    </div>

                    {/* Right - Content */}
                    <div className="testimonial-right" style={{ paddingTop: '40.57px', maxWidth: '666px' }}>
                        <div className="testimonial-right-content" style={{ overflow: 'hidden', maxHeight: '488px' }}>
                            {/* Name */}
                            <p
                                className="testimonial-name"
                                style={{
                                    fontFamily: "'Teko', sans-serif",
                                    fontSize: '36px',
                                    fontWeight: 600,
                                    lineHeight: '40px',
                                    color: '#121212',
                                    textTransform: 'uppercase',
                                    margin: 0,
                                }}
                            >
                                Johannes Times
                            </p>

                            {/* Location */}
                            <p
                                style={{
                                    fontFamily: "'Kanit', sans-serif",
                                    fontSize: '22px',
                                    fontWeight: 400,
                                    lineHeight: '35px',
                                    color: '#010101',
                                    margin: '2px 0 0 0',
                                }}
                            >
                                Chicago
                            </p>

                            {/* Divider */}
                            <div
                                style={{
                                    height: '2px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.17)',
                                    marginTop: '38px',
                                    width: '100%',
                                }}
                            />

                            {/* Quote text */}
                            <p
                                className="testimonial-text"
                                style={{
                                    fontFamily: "'Kanit', sans-serif",
                                    fontSize: '28px',
                                    fontWeight: 400,
                                    fontStyle: 'italic',
                                    lineHeight: '40px',
                                    color: '#121212',
                                    marginTop: '40px',
                                    margin: '40px 0 0 0',
                                }}
                            >
                                I saved over 60% using GeekPie for my real estate
                                <br />
                                platform. The AI agent they built transformed client
                                <br />
                                engagement. Highly recommended! Thank you !!!
                            </p>

                            {/* Rating */}
                            <div className="flex items-center" style={{ marginTop: '48px', gap: '11px' }}>
                                <span
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontSize: '30px',
                                        fontWeight: 600,
                                        lineHeight: '34px',
                                        color: '#121212',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Rating:
                                </span>
                                <div
                                    className="flex items-center"
                                    style={{
                                        backgroundColor: '#121212',
                                        borderRadius: '6px',
                                        padding: '7px 15px',
                                        gap: '5.5px',
                                        height: '42px',
                                    }}
                                >
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                            </div>
                        </div>

                        {/* Pagination dots */}
                        <div className="flex testimonial-dots" style={{ gap: '12px', marginTop: '80px' }}>
                            <div
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    borderRadius: '7.5px',
                                    border: '1px solid #010101',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{ width: '9px', height: '9px', borderRadius: '4.5px', backgroundColor: '#010101' }} />
                            </div>
                            <div
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    borderRadius: '7.5px',
                                    border: '1px solid transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{ width: '9px', height: '9px', borderRadius: '4.5px', backgroundColor: '#010101' }} />
                            </div>
                            <div
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    borderRadius: '7.5px',
                                    border: '1px solid transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{ width: '9px', height: '9px', borderRadius: '4.5px', backgroundColor: '#010101' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
