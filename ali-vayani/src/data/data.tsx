import { ReactNode } from 'react';
import { 
    SiReact, SiNextdotjs, SiExpo, 
    SiPython, SiTypescript, SiFlask,
    SiNodedotjs, SiSvelte, SiTailwindcss,
    SiPrisma, SiFirebase, SiMongodb,
    SiPytorch, SiUnrealengine, SiSpringboot
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export interface CardInfo {
    title: string;
    description: string;
    image: string;
    svg?: ReactNode;
    link: string;
}

export interface TimelineEvent {
    name: string;
    date: string;
    title: string;
    description: string;
    role?: string;
    org?: string;
    url?: string;
    hoverColor?: string;
    hoverBg?: string;
}

export const timeline: TimelineEvent[] = [
    {
        name: "aramco",
        date: "may 2025 - aug. 2025",
        title: "2025 software intern",
        description: "• starting soon...",
        role: "incoming intern",
        org: "aramco",
        url: "https://www.aramco.com/en",
        hoverColor: "#3eb458"
    },
    {
        name: "freetail hackers",
        date: "feb. 2025 - present",
        title: "software engineer",
        description: "• pushing code to rodeo, our hackathon platform",
        role: "software engineer",
        org: "freetail hackers",
        url: "https://freetailhackers.com/",
        hoverColor: "#000000",
        hoverBg: "white"
    },
    {
        name: "MyMosque",
        date: "jan. 2025 - present",
        title: "founder & developer",
        description: "• released 1.0 of MyMosque",
        role: "solo developing",
        org: "mymosque",
        url: "https://github.com/ali-vayani/MyMosque",
        hoverColor: "#C8C079"
    },
    {
        name: "UT Austin 🤘🏽",
        date: "aug. 2024 - dec. 2027",
        title: "b.s. computer science",
        description: "• pursuing knowledge",
        role: "computer science",
        org: "UT Austin",
        url: "https://www.cs.utexas.edu/",
        hoverColor: "#cd6a00"
    }
];

export const photos = [
    {
        image: "/tower.jpg",
        alt: "tower",
        style: "rotate-[-6deg]",
        rotation: 6
    },
    {
        image: "/formal.jpg",
        alt: "formal",
        style: "rotate-[4deg]",
        rotation: -4
    },
    {
        image: "/cravings.jpg",
        alt: "cravings",
        style: "rotate-[-3deg]",
        rotation: 3
    },
    {
        image: "/og.jpg",
        alt: "og",
        style: "rotate-[5deg]",
        rotation: -5
    },
]

export const projects: CardInfo[] = [
    {
        title: "MyMosque",
        description: "Built MyMosque, a community-focused mobile app with mosque locator, prayer times, and event update",
        image: "/mymosque.jpg",
        link: "https://github.com/ali-vayani/MyMosque"
    },
    {
        title: "The Heat Ordering Platform",
        description: "Developed ordering platform for school cafeteria & admin panel to edit menu items",
        image: "/TheHeatLogo.png",
        link: "https://the-heat.vercel.app/"
    },
    {
        title: "Digit Classifier",
        description: "Built a deep neural network for MNIST digit classification and a Tkinter app for real-time user-drawn predictions",
        image: "/mnist.png",
        link: "https://github.com/ali-vayani/pytorch/tree/main/MNIST%20Project"
    },
    {
        title: "Snake RL Agent",
        description: "Developed Snake game agent using Q-learning and a neural network, with training scripts and visualizations",
        image: "/snake.jpg",
        link: "https://github.com/ali-vayani/snake-game-rl"
    }
]

export const tech: CardInfo[] = [
    // Languages
    {
        title: "Java",
        svg: <FaJava size={150} color="#007396" />,
        link: "https://www.java.com/",
        description: "Object-oriented programming language known for its portability and enterprise applications.",
        image: "none"
    },
    {
        title: "Python",
        svg: <SiPython size={150} color="#3776AB" />,
        link: "https://www.python.org/",
        description: "Versatile programming language known for its simplicity and extensive libraries.",
        image: "none"
    },
    {
        title: "TypeScript",
        svg: <SiTypescript size={150} color="#3178C6" />,
        link: "https://www.typescriptlang.org/",
        description: "Typed superset of JavaScript that compiles to plain JavaScript.",
        image: "none"
    },
    // Frontend
    {
        title: "React",
        svg: <SiReact size={150} color="#087EA4" />,
        link: "https://react.dev/",
        description: "Popular JavaScript library for building user interfaces.",
        image: "none"
    },
    {
        title: "Next.js",
        svg: <SiNextdotjs size={150} color="white" />,
        link: "https://nextjs.org/",
        description: "React framework for production-grade applications.",
        image: "none"
    },
    {
        title: "Svelte",
        svg: <SiSvelte size={150} color="#FF3E00" />,
        link: "https://svelte.dev/",
        description: "Modern framework that shifts work to compile time.",
        image: "none"
    },
    {
        title: "Tailwind CSS",
        svg: <SiTailwindcss size={150} color="#06B6D4" />,
        link: "https://tailwindcss.com/",
        description: "Utility-first CSS framework for rapid UI development.",
        image: "none"
    },
    {
        title: "Expo",
        svg: <SiExpo size={150} color="white" />,
        link: "https://expo.dev/",
        description: "Framework for universal React applications.",
        image: "none"
    },
    // Backend
    {
        title: "Spring Boot",
        svg: <SiSpringboot size={150} color="#6DB33F" />,
        link: "https://spring.io/projects/spring-boot",
        description: "Java-based framework for building enterprise applications.",
        image: "none"
    },
    {
        title: "Node.js",
        svg: <SiNodedotjs size={150} color="#339933" />,
        link: "https://nodejs.org/",
        description: "JavaScript runtime for server-side applications.",
        image: "none"
    },
    {
        title: "Flask",
        svg: <SiFlask size={150} color="white" />,
        link: "https://flask.palletsprojects.com/",
        description: "Lightweight Python web framework.",
        image: "none"
    },
    // Databases & ORMs
    {
        title: "MongoDB",
        svg: <SiMongodb size={150} color="#47A248" />,
        link: "https://www.mongodb.com/",
        description: "NoSQL database for modern applications.",
        image: "none"
    },
    {
        title: "Firebase",
        svg: <SiFirebase size={150} color="#FFCA28" />,
        link: "https://firebase.google.com/",
        description: "Google's platform for web and mobile development.",
        image: "none"
    },
    {
        title: "Prisma",
        svg: <SiPrisma size={150} color="#2D3748" />,
        link: "https://www.prisma.io/",
        description: "Next-generation ORM for Node.js and TypeScript.",
        image: "none"
    },
    // AI/ML
    {
        title: "PyTorch",
        svg: <SiPytorch size={150} color="#EE4C2C" />,
        link: "https://pytorch.org/",
        description: "Open source machine learning framework.",
        image: "none"
    },
    // Game Development
    {
        title: "Unreal Engine",
        svg: <SiUnrealengine size={150} color="white" />,
        link: "https://www.unrealengine.com/",
        description: "Advanced 3D game engine and development platform.",
        image: "none"
    }
]