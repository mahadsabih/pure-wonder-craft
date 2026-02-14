export function Services() {
    const stats = [
        { value: '50+', label: 'Happy Clients', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { value: '100+', label: 'Projects Done', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { value: '30+', label: 'Team Members', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { value: '5+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    ];

    return (
        <section id="services" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <span className="text-sm md:text-base font-['Kanit'] tracking-[0.2em] text-[#4B4B4B] uppercase block">
                            Statistics
                        </span>
                        <h2 className="text-5xl md:text-6xl font-['Teko'] font-bold uppercase text-[#1A1A1A] leading-none">
                            Why You Should <br />
                            <span className="text-[#FF6B35]">Choose GeekPie</span>
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-[#FF6B35] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="bg-[#FBF9ED] p-4 rounded-xl border border-[#FF6B35]/20 max-w-sm">
                                <p className="text-sm text-[#000000] font-['Kanit']">
                                    We deliver high-performance solutions tailored to your business needs with proven expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="h-12 w-12 bg-[#FBF9ED] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors">
                                    <svg className="w-6 h-6 text-[#FF6B35] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-['Teko'] font-bold text-[#1A1A1A] mb-1">{stat.value}</h3>
                                <p className="text-[#000000] font-['Kanit']">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
