export interface Resource {
  title: string;
  description: string;
  url: string;
  type: "documentation" | "book" | "course" | "article" | "video" | "tool";
  topics: string[];
  icon?: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  color: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: "fundamentals",
    title: "JavaScript Fundamentals",
    description: "Core concepts, syntax, and basics",
    color: "from-blue-500 to-cyan-500",
    resources: [
      {
        title: "MDN JavaScript Guide",
        description: "The most comprehensive JavaScript documentation on the web",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        type: "documentation",
        topics: ["basics", "syntax", "variables", "types", "operators"],
      },
      {
        title: "JavaScript.info",
        description: "Modern JavaScript tutorial from basics to advanced topics",
        url: "https://javascript.info",
        type: "documentation",
        topics: ["basics", "advanced", "async", "dom"],
      },
      {
        title: "Eloquent JavaScript",
        description: "Free book by Marijn Haverbeke - Learn programming and JavaScript",
        url: "https://eloquentjavascript.net",
        type: "book",
        topics: ["basics", "functions", "objects", "async"],
      },
      {
        title: "You Don't Know JS",
        description: "Deep dive book series into JavaScript's core mechanisms",
        url: "https://github.com/getify/You-Dont-Know-JS",
        type: "book",
        topics: ["advanced", "scope", "closures", "this", "prototypes"],
      },
    ],
  },
  {
    id: "arrays-objects",
    title: "Arrays & Objects",
    description: "Working with data structures",
    color: "from-purple-500 to-pink-500",
    resources: [
      {
        title: "MDN Array Methods",
        description: "Complete reference for all array methods",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        type: "documentation",
        topics: ["arrays", "methods", "map", "filter", "reduce"],
      },
      {
        title: "MDN Object Methods",
        description: "Working with objects, properties, and methods",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        type: "documentation",
        topics: ["objects", "properties", "methods", "destructuring"],
      },
      {
        title: "Array Explorer",
        description: "Interactive tool to find the right array method",
        url: "https://arrayexplorer.netlify.app",
        type: "tool",
        topics: ["arrays", "methods"],
      },
      {
        title: "Object Methods in JavaScript",
        description: "Comprehensive guide to object manipulation",
        url: "https://www.freecodecamp.org/news/complete-guide-to-javascript-object-methods/",
        type: "article",
        topics: ["objects", "methods"],
      },
    ],
  },
  {
    id: "async",
    title: "Async & Promises",
    description: "Asynchronous programming patterns",
    color: "from-orange-500 to-red-500",
    resources: [
      {
        title: "MDN Promises",
        description: "Complete guide to Promises in JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        type: "documentation",
        topics: ["promises", "async", "await"],
      },
      {
        title: "JavaScript Promises: An Introduction",
        description: "Google's guide to understanding promises",
        url: "https://web.dev/promises/",
        type: "article",
        topics: ["promises", "async"],
      },
      {
        title: "Async JavaScript",
        description: "Book by Trevor Burnham on async patterns",
        url: "https://www.oreilly.com/library/view/async-javascript/9781449339904/",
        type: "book",
        topics: ["async", "promises", "callbacks", "event-loop"],
      },
      {
        title: "Loupe - Event Loop Visualizer",
        description: "Visualize how the JavaScript event loop works",
        url: "http://latentflip.com/loupe",
        type: "tool",
        topics: ["event-loop", "async", "callbacks"],
      },
    ],
  },
  {
    id: "functions",
    title: "Functions & Closures",
    description: "Function patterns and closures",
    color: "from-green-500 to-emerald-500",
    resources: [
      {
        title: "MDN Functions",
        description: "Complete guide to functions in JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        type: "documentation",
        topics: ["functions", "closures", "arrow-functions", "scope"],
      },
      {
        title: "Understanding Closures",
        description: "Deep dive into JavaScript closures",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        type: "documentation",
        topics: ["closures", "scope", "functions"],
      },
      {
        title: "Functional-Light JavaScript",
        description: "Book on functional programming in JavaScript",
        url: "https://github.com/getify/Functional-Light-JS",
        type: "book",
        topics: ["functions", "functional-programming", "closures"],
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    description: "Prototypes, generators, proxies, and more",
    color: "from-indigo-500 to-purple-500",
    resources: [
      {
        title: "MDN Inheritance and Prototype Chain",
        description: "Understanding JavaScript's prototype-based inheritance",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
        type: "documentation",
        topics: ["prototypes", "inheritance", "objects"],
      },
      {
        title: "MDN Generators",
        description: "Guide to generator functions and iterators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators",
        type: "documentation",
        topics: ["generators", "iterators", "async"],
      },
      {
        title: "MDN Proxy",
        description: "Using Proxy for metaprogramming",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",
        type: "documentation",
        topics: ["proxy", "metaprogramming", "advanced"],
      },
      {
        title: "JavaScript: The Definitive Guide",
        description: "Comprehensive reference book by David Flanagan",
        url: "https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/",
        type: "book",
        topics: ["advanced", "reference", "complete-guide"],
      },
    ],
  },
  {
    id: "es6",
    title: "ES6+ Features",
    description: "Modern JavaScript features",
    color: "from-yellow-500 to-orange-500",
    resources: [
      {
        title: "ES6 Features",
        description: "Complete guide to ES6 features",
        url: "https://github.com/lukehoban/es6features",
        type: "documentation",
        topics: ["es6", "arrow-functions", "destructuring", "modules"],
      },
      {
        title: "Exploring ES6",
        description: "Book by Axel Rauschmayer on ES6 features",
        url: "https://exploringjs.com/es6/",
        type: "book",
        topics: ["es6", "modern-javascript"],
      },
      {
        title: "ES6 Katas",
        description: "Learn ES6 by solving katas",
        url: "http://es6katas.org",
        type: "tool",
        topics: ["es6", "practice", "learning"],
      },
      {
        title: "Can I Use",
        description: "Browser compatibility tables for ES6+ features",
        url: "https://caniuse.com",
        type: "tool",
        topics: ["es6", "compatibility", "browsers"],
      },
    ],
  },
  {
    id: "dom",
    title: "DOM & Events",
    description: "Working with the DOM and events",
    color: "from-teal-500 to-cyan-500",
    resources: [
      {
        title: "MDN DOM",
        description: "Complete guide to the Document Object Model",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        type: "documentation",
        topics: ["dom", "events", "manipulation"],
      },
      {
        title: "MDN Events",
        description: "Understanding events and event handling",
        url: "https://developer.mozilla.org/en-US/docs/Web/Events",
        type: "documentation",
        topics: ["events", "event-handling", "bubbling"],
      },
      {
        title: "DOM Enlightenment",
        description: "Book on understanding the DOM",
        url: "https://domenlightenment.com",
        type: "book",
        topics: ["dom", "manipulation"],
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & Debugging",
    description: "Testing frameworks and debugging tools",
    color: "from-rose-500 to-pink-500",
    resources: [
      {
        title: "Jest Documentation",
        description: "JavaScript testing framework by Facebook",
        url: "https://jestjs.io",
        type: "documentation",
        topics: ["testing", "jest", "unit-testing"],
      },
      {
        title: "Chrome DevTools",
        description: "Master the Chrome DevTools for debugging",
        url: "https://developer.chrome.com/docs/devtools/",
        type: "documentation",
        topics: ["debugging", "devtools", "chrome"],
      },
      {
        title: "JavaScript Testing Best Practices",
        description: "Comprehensive testing guide",
        url: "https://github.com/goldbergyoni/javascript-testing-best-practices",
        type: "article",
        topics: ["testing", "best-practices"],
      },
    ],
  },
];

// Get resources by topic
export const getResourcesByTopic = (topic: string): Resource[] => {
  const allResources: Resource[] = [];
  resourceCategories.forEach((category) => {
    category.resources.forEach((resource) => {
      if (resource.topics.some((t) => t.toLowerCase().includes(topic.toLowerCase()))) {
        allResources.push(resource);
      }
    });
  });
  return allResources;
};

// Get resources by category
export const getResourcesByCategory = (categoryId: string): ResourceCategory | undefined => {
  return resourceCategories.find((cat) => cat.id === categoryId);
};

