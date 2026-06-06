import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { GitFork, Star, Github, Linkedin, Instagram } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'github':
            return <Github size={22} />;
        case 'linkedin':
            return <Linkedin size={22} />;
        case 'instagram':
            return <Instagram size={22} />;
        case 'tiktok':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.8 1.02 1.96 1.77 3.24 2.2v3.91c-1.69-.17-3.26-.89-4.55-2.01-.06-.06-.11-.11-.17-.17v7.32c.01 4.07-2.73 7.61-6.73 8.28-4.55.93-8.87-1.92-9.67-6.38-.86-4.43 1.83-8.8 6.22-9.75 1.1-.25 2.24-.22 3.32.09v4.06c-.73-.25-1.52-.31-2.28-.15-2.13.43-3.53 2.5-3.13 4.65.37 2.05 2.21 3.49 4.28 3.37 2.11-.04 3.75-1.84 3.73-3.95V0h.01Z"/>
                </svg>
            );
        case 'whatsapp':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.004 0C5.378 0 .004 5.37.004 11.99c0 2.112.551 4.16 1.597 5.973L.03 24l6.196-1.62c1.745.95 3.712 1.455 5.77 1.457h.005c6.623 0 12-.53 12-11.99C24.004 5.37 18.63 0 12.004 0zm0 21.99c-1.8 0-3.56-.48-5.11-1.39l-.37-.22-3.8 1 1.01-3.7-.24-.38a9.93 9.93 0 0 1-1.52-5.32c0-5.5 4.49-9.97 10.01-9.97 2.67 0 5.18 1.04 7.07 2.93a9.88 9.88 0 0 1 2.93 7.05c-.01 5.5-4.5 9.98-10.02 9.98zm5.49-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.21 8.21 0 0 1-2.42-1.49 9.09 9.09 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.5.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.3-.2-.6-.35z"/>
                </svg>
            );
        default:
            return null;
    }
};

const Footer = async () => {
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const repoStats = await fetch(
            'https://api.github.com/repos/nachitzaid/portfolio-2.0',
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            },
        );

        if (repoStats.ok) {
            const data = (await repoStats.json()) as RepoStats;
            stargazers_count = data.stargazers_count || 0;
            forks_count = data.forks_count || 0;
        }
    } catch (error) {
        console.error('Error fetching repo stats:', error);
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-8 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex justify-center items-center gap-4 mt-2 mb-10">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-muted-foreground hover:text-white transition-all hover:scale-110 p-2.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
                            aria-label={link.name}
                        >
                            {getSocialIcon(link.name)}
                        </a>
                    ))}
                </div>

                <div className="">
                    <a
                        href="https://github.com/nachitzaid/portfolio-2.0"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Zaid Nachit
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
