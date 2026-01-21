export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: "Frontend" | "Backend" | "DevOps" | "System Design" | "Mobile" | "AI/ML";
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    price: number;
    priceDisplay: string;
    rating: number;
    students: number;
    // Extended Details
    longDescription?: string;
    learningOutcomes?: string[];
    schedule?: string[];
    curriculum?: { week: string; topic: string; details: string }[];
    features?: string[];
}

export const ALL_COURSES: Course[] = [
    {
        id: "1",
        slug: "full-stack-mastery",
        title: "Full Stack Mastery",
        description: "The ultimate guide to building enterprise applications with Next.js, Node.js, and PostgreSQL.",
        longDescription: "This is not just another 'todo list' tutorial. In this comprehensive bootcamp, you will build a production-ready Learning Management System (LMS) from scratch. We cover advanced patterns, database design, authentication flows, and real-world deployment strategies. You will graduate with a portfolio piece that actual employers respect.",
        category: "Frontend",
        level: "Advanced",
        duration: "12 Weeks",
        price: 299,
        priceDisplay: "$299",
        rating: 4.9,
        students: 1240,
        learningOutcomes: [
            "Architect scalable Next.js applications using App Router",
            "Design complex relational database schemas with PostgreSQL",
            "Implement secure authentication with JWT and OAuth",
            "Deploy to AWS using Docker and CI/CD pipelines",
            "Master TypeScript for type-safe codebases"
        ],
        schedule: [
            "Mon & Wed: Live Lectures (7 PM - 9 PM EST)",
            "Fri: Code Review & Q&A Sessions",
            "Sat: Hackathon & Project Work"
        ],
        curriculum: [
            { week: "Week 1-2", topic: "Advanced React & Next.js Patterns", details: "Server Components, Suspense, Streaming, and State Management." },
            { week: "Week 3-4", topic: "Database Design & Backend API", details: "PostgreSQL, Prisma/Drizzle, and REST/GraphQL API design." },
            { week: "Week 5-6", topic: "Authentication & Security", details: "NextAuth, RBAC, and protecting routes/API endpoints." },
            { week: "Week 7-8", topic: "Real-time Systems", details: "WebSockets, Server-Sent Events, and Redis Pub/Sub." },
            { week: "Week 9-10", topic: "DevOps & Deployment", details: "Docker, GitHub Actions, and AWS ECS/Vercel." },
            { week: "Week 11-12", topic: "Capstone Project", details: "Build and launch your own SaaS product." }
        ]
    },
    {
        id: "2",
        slug: "system-design-architect",
        title: "System Design for Architects",
        description: "Learn how to design scalable systems like Netflix, Uber, and WhatsApp from first principles.",
        longDescription: "System Design is the differentiator between a Senior Engineer and an Architect. This course breaks down complex distributed systems concepts—sharding, replication, CAP theorem, consistent hashing—into digestible modules. You will learn to design systems that can handle millions of concurrent users.",
        category: "System Design",
        level: "Advanced",
        duration: "8 Weeks",
        price: 249,
        priceDisplay: "$249",
        rating: 5.0,
        students: 850,
        learningOutcomes: [
            "Master key concepts: Caching, Load Balancing, Sharding",
            "Design data-intensive applications from scratch",
            "Evaluate trade-offs between Consistency and Availability",
            "Handle back-of-the-envelope calculations for capacity planning"
        ],
        schedule: [
            "Tue & Thu: Live Workshops",
            "Sat: System Design Mock Interviews"
        ],
        curriculum: [
            { week: "Week 1", topic: "Scalability Fundmentals", details: "Vertical vs Horizontal scaling, Load Balancers." },
            { week: "Week 2", topic: "Database Internals", details: "B-Trees, LSM Trees, Indexing strategies." },
            { week: "Week 3", topic: "Distributed Systems Patterns", details: "Consensus algorithms (Raft/Paxos), Leader Election." },
            { week: "Week 4-8", topic: "Case Studies & Design Interviews", details: "Designing Uber, Twitter, Netflix, and Instagram." }
        ]
    },
    {
        id: "3",
        slug: "devops-cloud-native",
        title: "DevOps & Cloud Native",
        description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines in a production environment.",
        category: "DevOps",
        level: "Advanced",
        duration: "10 Weeks",
        price: 279,
        priceDisplay: "$279",
        rating: 4.8,
        students: 920,
        learningOutcomes: [
            "Containerize any application with Docker",
            "Orchestrate microservices with Kubernetes",
            "Automate deployments with GitHub Actions",
            "Infrastructure as Code using Terraform"
        ],
        schedule: ["Self-paced with Weekly Office Hours"],
        curriculum: []
    },
    // ... (Other courses would have similar detailed data or fallback)
    {
        id: "4",
        slug: "react-internals",
        title: "Deep Dive into React Internals",
        description: "Understand the Virtual DOM, Reconciliation, and concurrent mode. Write your own React.",
        category: "Frontend",
        level: "Advanced",
        duration: "6 Weeks",
        price: 199,
        priceDisplay: "$199",
        rating: 4.9,
        students: 1500
    },
    {
        id: "5",
        slug: "rust-systems-programming",
        title: "Rust for Systems Programming",
        description: "Build high-performance CLI tools and web servers with Rust ownership model.",
        category: "Backend",
        level: "Intermediate",
        duration: "8 Weeks",
        price: 229,
        priceDisplay: "$229",
        rating: 4.7,
        students: 600
    },
    {
        id: "6",
        slug: "microservices-spring-boot",
        title: "Microservices with Spring Boot",
        description: "Designing, building, and deploying robust Java microservices architectures.",
        category: "Backend",
        level: "Intermediate",
        duration: "10 Weeks",
        price: 249,
        priceDisplay: "$249",
        rating: 4.6,
        students: 1100
    },
    {
        id: "7",
        slug: "aws-solutions-architect",
        title: "AWS Solutions Architect Prep",
        description: "Comprehensive preparation for the SAA-C03 certification with real labs.",
        category: "DevOps",
        level: "Beginner",
        duration: "6 Weeks",
        price: 149,
        priceDisplay: "$149",
        rating: 4.8,
        students: 2100
    },
    {
        id: "8",
        slug: "graphql-apollo",
        title: "Mastering GraphQL with Apollo",
        description: "Stop over-fetching. Build efficient APIs with schema-first design.",
        category: "Backend",
        level: "Intermediate",
        duration: "4 Weeks",
        price: 129,
        priceDisplay: "$129",
        rating: 4.7,
        students: 800
    },
    {
        id: "9",
        slug: "mobile-react-native",
        title: "Cross-Platform Mobile with React Native",
        description: "Build iOS and Android apps with a single codebase. Native modules included.",
        category: "Mobile",
        level: "Intermediate",
        duration: "8 Weeks",
        price: 199,
        priceDisplay: "$199",
        rating: 4.5,
        students: 950
    },
    {
        id: "10",
        slug: "ai-engineer-bootcamp",
        title: "AI Engineer Bootcamp",
        description: "From Python basics to deploying LLMs. LangChain, OpenAI, and vector databases.",
        category: "AI/ML",
        level: "Advanced",
        duration: "14 Weeks",
        price: 399,
        priceDisplay: "$399",
        rating: 4.9,
        students: 450
    },
    {
        id: "11",
        slug: "python-automation",
        title: "Python for Automation",
        description: "Automate boring stuff. Web scraping, Excel manipulation, and bots.",
        category: "Backend",
        level: "Beginner",
        duration: "4 Weeks",
        price: 99,
        priceDisplay: "$99",
        rating: 4.8,
        students: 3000
    },
    {
        id: "12",
        slug: "kubernetes-operators",
        title: "Advanced Kubernetes Operators",
        description: "Extend Kubernetes with custom CRDs and controllers in Go.",
        category: "DevOps",
        level: "Advanced",
        duration: "6 Weeks",
        price: 299,
        priceDisplay: "$299",
        rating: 5.0,
        students: 300
    },
    {
        id: "13",
        slug: "flutter-interactive",
        title: "Interactive UIs with Flutter",
        description: "Build beautiful, fluid mobile interfaces with Dart and Flutter.",
        category: "Mobile",
        level: "Beginner",
        duration: "8 Weeks",
        price: 179,
        priceDisplay: "$179",
        rating: 4.6,
        students: 700
    },
    {
        id: "14",
        slug: "backend-go",
        title: "Backend Engineering with Go",
        description: "Simplicity and concurrency. Build fast APis with the standard library.",
        category: "Backend",
        level: "Intermediate",
        duration: "8 Weeks",
        price: 199,
        priceDisplay: "$199",
        rating: 4.8,
        students: 900
    },
    {
        id: "15",
        slug: "swift-ios",
        title: "Modern iOS Development with SwiftUI",
        description: "Declarative UI for Apple platforms. Build your first iPhone app.",
        category: "Mobile",
        level: "Beginner",
        duration: "10 Weeks",
        price: 249,
        priceDisplay: "$249",
        rating: 4.7,
        students: 550
    },
    {
        id: "16",
        slug: "cybersecurity-basics",
        title: "Cybersecurity Fundamentals",
        description: "Network security, ethical hacking basics, and securing web apps.",
        category: "DevOps",
        level: "Beginner",
        duration: "6 Weeks",
        price: 149,
        priceDisplay: "$149",
        rating: 4.5,
        students: 1100
    },
    {
        id: "17",
        slug: "data-structures-algo",
        title: "DSA for Technical Interviews",
        description: "Ace the FAANG interview. Trees, Graphs, DP, and Greedy algorithms.",
        category: "Backend",
        level: "Intermediate",
        duration: "12 Weeks",
        price: 199,
        priceDisplay: "$199",
        rating: 4.9,
        students: 5000
    },
    {
        id: "18",
        slug: "figma-ui-ux",
        title: "UI/UX Design with Figma",
        description: "Design systems, prototyping, and developer handoff workflows.",
        category: "Frontend",
        level: "Beginner",
        duration: "4 Weeks",
        price: 129,
        priceDisplay: "$129",
        rating: 4.7,
        students: 1300
    },
    {
        id: "19",
        slug: "web3-solidity",
        title: "Blockchain Development with Solidity",
        description: "Build Smart Contracts and DApps on Ethereum.",
        category: "Backend",
        level: "Advanced",
        duration: "10 Weeks",
        price: 349,
        priceDisplay: "$349",
        rating: 4.4,
        students: 400
    },
    {
        id: "20",
        slug: "performance-optimization",
        title: "Web Performance Optimization",
        description: "Core Web Vitals, critical rendering path, and advanced caching strategies.",
        category: "Frontend",
        level: "Advanced",
        duration: "4 Weeks",
        price: 199,
        priceDisplay: "$199",
        rating: 4.9,
        students: 650
    }
];
