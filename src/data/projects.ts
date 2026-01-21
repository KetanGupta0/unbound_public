export interface Project {
    id: string;
    title: string;
    category: "Web App" | "Mobile App" | "DevOps" | "AI/ML";
    description: string;
    imageColor: string; // Placeholder for actual image
    technologies: string[];
    client?: string;
    year: string;
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "FinTech Dashboard",
        category: "Web App",
        description: "A real-time financial analytics dashboard handling millions of transactions per second.",
        imageColor: "from-blue-600 to-indigo-900",
        technologies: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
        client: "Global Bank Corp",
        year: "2024"
    },
    {
        id: "2",
        title: "E-Commerce Microservices",
        category: "DevOps",
        description: "Migrated a monolithic legacy application to a scalable microservices architecture using Kubernetes.",
        imageColor: "from-purple-600 to-pink-900",
        technologies: ["Docker", "Kubernetes", "AWS EKS", "Terraform"],
        client: "RetailGiant",
        year: "2023"
    },
    {
        id: "3",
        title: "HealthTrack Mobile App",
        category: "Mobile App",
        description: "Cross-platform mobile application for tracking patient vitals and medication schedules.",
        imageColor: "from-green-600 to-teal-900",
        technologies: ["React Native", "Firebase", "Redux"],
        client: "HealthPlus",
        year: "2024"
    },
    {
        id: "4",
        title: "AI Customer Support Bot",
        category: "AI/ML",
        description: "LLM-powered chatbot reducing support ticket volume by 40% using RAG architecture.",
        imageColor: "from-yellow-600 to-orange-900",
        technologies: ["Python", "OpenAI API", "HuggingFace", "Pinecone"],
        client: "TechStream",
        year: "2025"
    },
    {
        id: "5",
        title: "Logistics ERP System",
        category: "Web App",
        description: "End-to-end enterprise resource planning system for fleet management.",
        imageColor: "from-red-600 to-rose-900",
        technologies: ["Vue.js", "Django", "PostgreSQL"],
        client: "CargoExpress",
        year: "2023"
    },
    {
        id: "6",
        title: "Smart Home Controller",
        category: "Mobile App",
        description: "IoT interface for controlling smart home devices via mobile.",
        imageColor: "from-cyan-600 to-blue-900",
        technologies: ["Flutter", "MQTT", "Dart"],
        client: "LivingSmart",
        year: "2024"
    }
];
