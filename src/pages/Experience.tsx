import { HeadTitle } from "../shared/HeadTitle";

export const Experience = () => {
    const experiences = [
        {
            role: "Frontend Developer (React & TypeScript)",
            company: "QuickStay - Hotel Booking Platform",
            period: "2026 - Present",
            description: "Building a full-featured hotel booking platform with an owner dashboard, room management, and dynamic search.",
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Clerk Auth", "React Router"],
            achievements: [
                "Architected a comprehensive Owner Dashboard for managing room listings and multi-image uploads.",
                "Integrated Clerk authentication with customized user management menus.",
                "Delivered a fully responsive user interface featuring dynamic navbar blur effects and smooth routing.",
            ],
        },
        {
            role: "Web Developer",
            company: "Personal & Freelance Projects",
            period: "2025 - 2026",
            description: "Developed modern, high-performance web applications with a focus on clean code and type safety.",
            skills: ["JavaScript (ES6+)", "React.js", "REST APIs", "Git/GitHub", "HTML5/CSS3"],
            achievements: [
                "Converted UI/UX designs into pixel-perfect, interactive web components.",
                "Implemented complex state management and strictly typed forms with TypeScript.",
            ],
        },
    ];

    return (
        <div className="pt-28 pb-16 px-4 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto min-h-screen">
            <HeadTitle
                title="Experience & Projects"
                subTitle="A summary of my professional journey, hands-on project experience, and technical skill set."
            />

            <div className="mt-12 space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                <p className="text-blue-600 font-medium text-sm mt-0.5">{exp.company}</p>
                            </div>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full w-fit">
                                {exp.period}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                            {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mt-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {exp.achievements.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="mt-6 flex flex-wrap gap-2 pt-2">
                            {exp.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};