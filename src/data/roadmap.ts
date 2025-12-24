export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  category: "fundamentals" | "field" | "library" | "concept";
  prerequisites?: string[];
  resources?: {
    title: string;
    url: string;
  }[];
  children?: string[]; // IDs of next nodes
}

export interface RoadmapPath {
  id: string;
  name: string;
  description: string;
  nodes: RoadmapNode[];
  color: string;
}

export const roadmapData: RoadmapNode[] = [
  // Fundamentals Path
  {
    id: "js-basics",
    title: "JavaScript Basics",
    description: "Variables, data types, operators, and basic syntax",
    level: "beginner",
    category: "fundamentals",
    children: ["js-functions", "js-control-flow"],
    resources: [
      { title: "MDN: JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" }
    ]
  },
  {
    id: "js-functions",
    title: "Functions & Scope",
    description: "Function declarations, expressions, arrow functions, closures",
    level: "beginner",
    category: "fundamentals",
    prerequisites: ["js-basics"],
    children: ["js-objects", "js-arrays"],
    resources: [
      { title: "MDN: Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }
    ]
  },
  {
    id: "js-control-flow",
    title: "Control Flow",
    description: "Conditionals, loops, switch statements",
    level: "beginner",
    category: "fundamentals",
    prerequisites: ["js-basics"],
    children: ["js-functions"],
    resources: [
      { title: "MDN: Control Flow", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" }
    ]
  },
  {
    id: "js-objects",
    title: "Objects & Arrays",
    description: "Object manipulation, array methods, destructuring",
    level: "intermediate",
    category: "fundamentals",
    prerequisites: ["js-functions"],
    children: ["js-dom", "js-async"],
    resources: [
      { title: "MDN: Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" }
    ]
  },
  {
    id: "js-arrays",
    title: "Array Methods",
    description: "map, filter, reduce, and other array methods",
    level: "intermediate",
    category: "fundamentals",
    prerequisites: ["js-functions"],
    children: ["js-objects"],
    resources: [
      { title: "MDN: Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }
    ]
  },
  {
    id: "js-async",
    title: "Async JavaScript",
    description: "Promises, async/await, fetch API, event loop",
    level: "intermediate",
    category: "fundamentals",
    prerequisites: ["js-objects"],
    children: ["js-modules", "field-frontend", "field-backend"],
    resources: [
      { title: "MDN: Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" }
    ]
  },
  {
    id: "js-dom",
    title: "DOM Manipulation",
    description: "Selecting elements, events, DOM APIs",
    level: "intermediate",
    category: "fundamentals",
    prerequisites: ["js-objects"],
    children: ["field-frontend"],
    resources: [
      { title: "MDN: DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" }
    ]
  },
  {
    id: "js-modules",
    title: "ES6 Modules",
    description: "import/export, module systems",
    level: "intermediate",
    category: "fundamentals",
    prerequisites: ["js-async"],
    children: ["field-frontend", "field-backend"],
    resources: [
      { title: "MDN: Modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" }
    ]
  },
  {
    id: "js-advanced",
    title: "Advanced Concepts",
    description: "Prototypes, classes, generators, proxies, symbols",
    level: "advanced",
    category: "concept",
    prerequisites: ["js-modules"],
    children: ["field-fullstack"],
    resources: [
      { title: "MDN: Advanced", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
    ]
  },

  // Frontend Field
  {
    id: "field-frontend",
    title: "Frontend Development",
    description: "Build user interfaces and web applications",
    level: "intermediate",
    category: "field",
    prerequisites: ["js-dom", "js-modules"],
    children: ["lib-react", "lib-vue", "lib-angular"],
    resources: [
      { title: "MDN: Frontend", url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" }
    ]
  },
  {
    id: "lib-react",
    title: "React",
    description: "Component-based UI library",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-frontend"],
    children: ["lib-nextjs", "lib-react-native"],
    resources: [
      { title: "React Docs", url: "https://react.dev" }
    ]
  },
  {
    id: "lib-vue",
    title: "Vue.js",
    description: "Progressive JavaScript framework",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-frontend"],
    children: ["lib-nuxt"],
    resources: [
      { title: "Vue Docs", url: "https://vuejs.org" }
    ]
  },
  {
    id: "lib-angular",
    title: "Angular",
    description: "TypeScript-based framework",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-frontend"],
    resources: [
      { title: "Angular Docs", url: "https://angular.io" }
    ]
  },
  {
    id: "lib-nextjs",
    title: "Next.js",
    description: "React framework for production",
    level: "advanced",
    category: "library",
    prerequisites: ["lib-react"],
    resources: [
      { title: "Next.js Docs", url: "https://nextjs.org" }
    ]
  },
  {
    id: "lib-nuxt",
    title: "Nuxt.js",
    description: "Vue framework for production",
    level: "advanced",
    category: "library",
    prerequisites: ["lib-vue"],
    resources: [
      { title: "Nuxt Docs", url: "https://nuxt.com" }
    ]
  },
  {
    id: "lib-react-native",
    title: "React Native",
    description: "Build mobile apps with React",
    level: "advanced",
    category: "library",
    prerequisites: ["lib-react"],
    resources: [
      { title: "React Native Docs", url: "https://reactnative.dev" }
    ]
  },

  // Backend Field
  {
    id: "field-backend",
    title: "Backend Development",
    description: "Server-side JavaScript development",
    level: "intermediate",
    category: "field",
    prerequisites: ["js-async", "js-modules"],
    children: ["lib-nodejs", "lib-express"],
    resources: [
      { title: "MDN: Backend", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side" }
    ]
  },
  {
    id: "lib-nodejs",
    title: "Node.js",
    description: "JavaScript runtime for server-side",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-backend"],
    children: ["lib-express", "lib-nestjs"],
    resources: [
      { title: "Node.js Docs", url: "https://nodejs.org" }
    ]
  },
  {
    id: "lib-express",
    title: "Express.js",
    description: "Web framework for Node.js",
    level: "intermediate",
    category: "library",
    prerequisites: ["lib-nodejs"],
    children: ["lib-nestjs"],
    resources: [
      { title: "Express Docs", url: "https://expressjs.com" }
    ]
  },
  {
    id: "lib-nestjs",
    title: "NestJS",
    description: "Progressive Node.js framework",
    level: "advanced",
    category: "library",
    prerequisites: ["lib-express"],
    resources: [
      { title: "NestJS Docs", url: "https://nestjs.com" }
    ]
  },

  // Full Stack
  {
    id: "field-fullstack",
    title: "Full Stack Development",
    description: "End-to-end application development",
    level: "advanced",
    category: "field",
    prerequisites: ["field-frontend", "field-backend", "js-advanced"],
    children: ["lib-typescript", "lib-graphql"],
    resources: [
      { title: "Full Stack Guide", url: "https://developer.mozilla.org/en-US/docs/Learn" }
    ]
  },

  // Additional Libraries & Tools
  {
    id: "lib-typescript",
    title: "TypeScript",
    description: "Typed superset of JavaScript",
    level: "intermediate",
    category: "library",
    prerequisites: ["js-advanced"],
    resources: [
      { title: "TypeScript Docs", url: "https://www.typescriptlang.org" }
    ]
  },
  {
    id: "lib-graphql",
    title: "GraphQL",
    description: "Query language for APIs",
    level: "advanced",
    category: "library",
    prerequisites: ["field-fullstack"],
    resources: [
      { title: "GraphQL Docs", url: "https://graphql.org" }
    ]
  },
  {
    id: "lib-webpack",
    title: "Webpack / Vite",
    description: "Build tools and bundlers",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-frontend"],
    resources: [
      { title: "Webpack Docs", url: "https://webpack.js.org" },
      { title: "Vite Docs", url: "https://vitejs.dev" }
    ]
  },
  {
    id: "lib-testing",
    title: "Testing",
    description: "Jest, Vitest, Testing Library",
    level: "intermediate",
    category: "library",
    prerequisites: ["field-frontend", "field-backend"],
    resources: [
      { title: "Jest Docs", url: "https://jestjs.io" }
    ]
  }
];

export const getNodeById = (id: string): RoadmapNode | undefined => {
  return roadmapData.find(node => node.id === id);
};

export const getNodesByCategory = (category: string): RoadmapNode[] => {
  return roadmapData.filter(node => node.category === category);
};

export const getNodesByLevel = (level: string): RoadmapNode[] => {
  return roadmapData.filter(node => node.level === level);
};

