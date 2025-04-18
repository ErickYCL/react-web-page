"use client";
import React from "react";

const SkillsPanel: React.FC = () => {
    const skills = [
        { name: "React", icon: "⚛️", grade: "Basico" },
        { name: "TypeScript", icon: "🟦", grade: "Básico" },
        { name: "JavaScript", icon: "🟨", grade: "Básico" },
        { name: "SQL", icon: "📚", grade: "Básico-Intermedio" },
        { name: "PostgreSQL", icon: "🐘", grade: "Intermedio" },
        { name: "TailwindCSS", icon: "🎨", grade: "Básico-Intermedio" },
        { name: "Flutter", icon: "📱", grade: "Básico-Intermedio" },
        { name: "Java", icon: "☕", grade: "Básico-Intermedio" },
        { name: "Git/GitHub", icon: "🔗", grade: "Básico-Intermedio" },
        {
            name: "PHP", icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="w-8 h-8"
            >
                <path
                    fill="#777BB3"
                    d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0z"
                />
                <path
                    fill="#FFF"
                    d="M47.5 70.6H36.7l-2 10.4h-6.6l9.7-44h13.5c4.3 0 7.5.8 9.7 2.4s3.3 3.8 3.3 6.5c0 1.9-.4 3.7-1.3 5.1s-2.2 2.6-4.1 3.4c1.6.5 2.9 1.4 3.9 2.7 1 1.3 1.5 2.8 1.5 4.6 0 2.8-1 5.1-3.1 6.8-2 1.7-4.9 2.6-8.5 2.6zm1.5-24.3c-.8-.6-2.1-.9-3.9-.9h-4.1l-2.5 11.8h4.5c1.7 0 3-.3 3.9-.9.9-.6 1.4-1.6 1.4-3 0-1.4-.4-2.3-1.3-2.9zm-1.3 13.4c-1.2-.7-3.3-1.1-6.1-1.1h-3.5l-2.8 13.5h4.2c2.7 0 4.8-.3 6.2-1 1.4-.7 2.1-1.9 2.1-3.6.1-1.5-.5-2.6-1.9-3.4zM74.4 70.6h-10.9l-2 10.4H55l9.7-44h13.5c4.3 0 7.5.8 9.7 2.4s3.3 3.8 3.3 6.5c0 1.9-.4 3.7-1.3 5.1s-2.2 2.6-4.1 3.4c1.6.5 2.9 1.4 3.9 2.7 1 1.3 1.5 2.8 1.5 4.6 0 2.8-1 5.1-3.1 6.8-2.1 1.7-4.9 2.6-8.5 2.6zm1.5-24.3c-.8-.6-2.1-.9-3.9-.9h-4.1l-2.5 11.8h4.5c1.7 0 3-.3 3.9-.9.9-.6 1.4-1.6 1.4-3 0-1.4-.4-2.3-1.3-2.9zm-1.3 13.4c-1.2-.7-3.3-1.1-6.1-1.1h-3.5l-2.8 13.5h4.2c2.7 0 4.8-.3 6.2-1 1.4-.7 2.1-1.9 2.1-3.6.1-1.5-.5-2.6-1.9-3.4z"
                />
            </svg>, grade: "Básico-Intermedio"
        },

    ];

    return (
        <div className="max-w-7xl mx-auto mt-10 px-4">
            {/* Encabezado */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mt-20">HABILIDADES</h1>

            </header>

            {/* Panel de habilidades */}
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center mb-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-800  p-4 rounded-xl shadow-lg hover:bg-blue-950  hover:scale-105 transition-transform-colors duration-300 "
                    >
                        <span className="text-4xl mb-2">{skill.icon}</span>
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <p className="text-md font-semibold text-gray-300">{skill.grade}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default SkillsPanel;
