export interface Job {
    id: string;
    title: string;
    department: "Engineering" | "Design" | "Marketing" | "Product" | "Operations";
    location: "Remote" | "New York, NY" | "San Francisco, CA" | "London, UK";
    type: "Full-time" | "Contract" | "Part-time";
    description: string;
    responsibilities: string[];
    requirements: string[];
    postedDate: string;
}

export const JOBS: Job[] = [
    {
        id: "1",
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        postedDate: "2026-01-15",
        description: "We are looking for a Senior Full Stack Engineer to lead the development of our core learning platform. You will work closely with the product team to deliver high-quality features.",
        responsibilities: [
            "Architect and build scalable web applications using Next.js and Node.js",
            "Mentor junior engineers and conduct code reviews",
            "Optimize application performance and ensure high availability",
            "Collaborate with designers to implement pixel-perfect UIs"
        ],
        requirements: [
            "5+ years of experience with React, TypeScript, and Node.js",
            "Strong understanding of database design (PostgreSQL)",
            "Experience with AWS and CI/CD pipelines",
            "Excellent problem-solving and communication skills"
        ]
    },
    {
        id: "2",
        title: "Product Designer",
        department: "Design",
        location: "New York, NY",
        type: "Full-time",
        postedDate: "2026-01-18",
        description: "Join our design team to craft intuitive and beautiful user experiences for our students and instructors.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity mockups",
            "Maintain and evolve our design system",
            "Conduct user research and usability testing",
            "Collaborate with engineers to ensure design implementation quality"
        ],
        requirements: [
            "3+ years of experience in product design",
            "Proficiency in Figma and prototyping tools",
            "Strong portfolio demonstrating UX/UI skills",
            "Ability to articulate design decisions clearly"
        ]
    },
    {
        id: "3",
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Contract",
        postedDate: "2026-01-10",
        description: "Help us build robust infrastructure to support our globally distributed user base.",
        responsibilities: [
            "Manage and improve our Kubernetes clusters on EKS",
            "Automate deployment workflows using GitHub Actions",
            "Monitor system health and respond to incidents",
            "Implement security best practices"
        ],
        requirements: [
            "Strong experience with Docker and Kubernetes",
            "Proficiency in Terraform or Pulumi",
            "Experience with monitoring tools (Prometheus, Grafana)",
            "Scripting skills in Bash or Python"
        ]
    },
    {
        id: "4",
        title: "Technical Content Writer",
        department: "Marketing",
        location: "London, UK",
        type: "Part-time",
        postedDate: "2026-01-20",
        description: "Create engaging technical content to help developers understand complex concepts and promote our courses.",
        responsibilities: [
            "Write blog posts, tutorials, and whitepapers",
            "Collaborate with instructors to extract key insights",
            "Optimize content for SEO",
            "Manage our newsletter and social media channels"
        ],
        requirements: [
            "Proven experience writing technical content for developers",
            "Strong understanding of software engineering concepts",
            "Excellent English writing and editing skills",
            "Ability to explain complex topics simply"
        ]
    }
];
