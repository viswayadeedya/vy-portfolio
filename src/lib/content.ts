export type RoleView = 'fullstack' | 'backend' | 'frontend';

export interface Metric {
  id: string;
  systemChange: string;
  technicalAction: string;
  outcome: string;
  emphasis: RoleView[];
}

export interface StoryPerspective {
  roleTitle: string;
  reframe: string;
  decisions: string[];
  focusMetrics: string[];
}

export interface ImpactStory {
  id: string;
  title: string;
  oneLiner: {
    fullstack: string;
    backend: string;
    frontend: string;
  };
  problem: string;
  constraints: string;
  perspectives: {
    fullstack: StoryPerspective;
    backend: StoryPerspective;
    frontend: StoryPerspective;
  };
  tradeOffs: string;
  result: string;
}

export const proofStrip: Metric[] = [
  {
    id: 'm1',
    systemChange: 'Fintech Onboarding',
    technicalAction: 'Stripe Identity + API Centralization',
    outcome: '30% faster turnaround',
    emphasis: ['fullstack', 'backend'],
  },
  {
    id: 'm2',
    systemChange: 'Auth Architecture',
    technicalAction: 'OAuth (Google/Apple) + JWT',
    outcome: 'Least-privilege security',
    emphasis: ['backend'],
  },
  {
    id: 'm3',
    systemChange: 'Legacy Modernization',
    technicalAction: 'Angular + Figma-to-UI refactor',
    outcome: 'Daily use by 100s of ops users',
    emphasis: ['fullstack', 'frontend'],
  },
  {
    id: 'm4',
    systemChange: 'Serverless Infrastructure',
    technicalAction: 'AWS Lambda + DynamoDB',
    outcome: '40% lower server costs',
    emphasis: ['fullstack', 'backend'],
  },
  {
    id: 'm5',
    systemChange: 'AI Insight Pipeline',
    technicalAction: 'LangGraph multi-agent flow',
    outcome: '90%+ manual effort reduction',
    emphasis: ['fullstack', 'frontend'],
  },
];

export const impactStories: ImpactStory[] = [
  {
    id: 'impartial',
    title: 'Fintech Onboarding & Payments',
    oneLiner: {
      fullstack: 'Built end-to-end onboarding and payment workflows for merchants and nonprofits.',
      backend: 'Architected Stripe Identity integrations and role-based auth for secure verification.',
      frontend: 'Implemented React dashboards with complex state for multi-actor onboarding flows.',
    },
    problem: 'Manual nonprofit and merchant onboarding was fragmented, leading to slow approval times and high ops overhead.',
    constraints: 'Federal compliance (KYC/KYB), multi-role access control, and mission-critical financial data integrity.',
    perspectives: {
      fullstack: {
        roleTitle: 'Software Engineer @ Impartial',
        reframe: 'Owning the full lifecycle of merchant readiness, from identity verification to payment activation.',
        decisions: [
          'Centralized verification states and approvals into a unified backend system.',
          'Integrated Stripe Connect to delegate complex payment processing to managed flows.',
          'Built responsive React components to handle partial submissions and async review states.',
        ],
        focusMetrics: ['30% faster onboarding', 'Stripe-compliant activation'],
      },
      backend: {
        roleTitle: 'Backend Engineer @ Impartial',
        reframe: 'Securing the financial boundary with robust authentication and state-driven APIs.',
        decisions: [
          'Designed JWT-secured APIs enforcing least-privilege access across four distinct user roles.',
          'Implemented OAuth patterns for Google and Apple sign-in to streamline user entry.',
          'Optimized verification logic to reduce manual review cycles for internal ops teams.',
        ],
        focusMetrics: ['Least-privilege security', 'Ops work reduction'],
      },
      frontend: {
        roleTitle: 'Frontend Engineer @ Impartial',
        reframe: 'Creating high-trust, resilient interfaces for sensitive financial data entry.',
        decisions: [
          'Developed a client-side state machine to handle complex, non-linear onboarding steps.',
          'Implemented robust error handling for API failures during high-stakes payment setup.',
          'Translated Figma designs into a clean, accessible merchant dashboard using React.',
        ],
        focusMetrics: ['Reliable User Flows', '99% Error Recovery'],
      },
    },
    tradeOffs: 'Chose to centralize verification states on the backend rather than the client to ensure a single source of truth, despite slight increase in API complexity.',
    result: 'Reduced onboarding turnaround by 30% while enabling compliant payment activation for merchants and nonprofits.',
  },
  {
    id: 'imaginnovate',
    title: 'Enterprise Logistics Modernization',
    oneLiner: {
      fullstack: 'Transformed legacy internal logistics tools into a modern, component-based Angular architecture.',
      backend: 'Hardened backend stability by resolving critical security vulnerabilities and upgrading dependencies.',
      frontend: 'Led the UI migration for high-usage internal tools, reducing redirects and user friction.',
    },
    problem: 'Ops users were hindered by a fragmented, legacy UI and critical security vulnerabilities (CVEs) in backend dependencies.',
    constraints: 'Large-scale enterprise environment, deprecated dependency chains, and daily usage by hundreds of operations staff.',
    perspectives: {
      fullstack: {
        roleTitle: 'Software Engineer @ Imaginnovate',
        reframe: 'Bridging the gap between legacy stability and modern, friction-less user experiences.',
        focusMetrics: ['100% CVE resolution', 'Supports 100s of daily users'],
        decisions: [
          'Managed the migration of legacy JavaScript UIs to a reusable Angular component architecture.',
          'Collaborated across teams to validate fixes across frontend and backend layers for smooth releases.',
          'Simplified high-usage workflows by eliminating unnecessary redirects in order creation.',
        ],
      },
      backend: {
        roleTitle: 'Systems Engineer @ Imaginnovate',
        reframe: 'Infrastructure hardening and maintaining enterprise-grade security standards.',
        focusMetrics: ['Secure Dependency Chain', 'Zero downtime upgrades'],
        decisions: [
          'Upgraded deprecated backend dependencies and patched critical CVEs in core business logic.',
          'Standardized backend tests to maintain compatibility during large-scale framework upgrades.',
          'Resolved production incidents by debugging complex interactions between frontend and API layers.',
        ],
      },
      frontend: {
        roleTitle: 'Frontend Lead @ Imaginnovate',
        reframe: 'Modernizing internal tools to drive operational efficiency through refined UX.',
        focusMetrics: ['Reduced UI friction', 'Standardized Navigation'],
        decisions: [
          'Translated complex Figma designs into responsive, high-performance Angular interfaces.',
          'Improved workflow reliability by refining client-side form validation and navigation behavior.',
          'Standardized UI patterns across order and load management screens to reduce user error.',
        ],
      },
    },
    tradeOffs: 'Prioritized security patches and architectural migration over new feature development to ensure long-term platform viability.',
    result: 'Reduced UI friction for high-usage internal tools and achieved a 100% resolution rate for critical security vulnerabilities.',
  },
  {
    id: 'nextrole',
    title: 'NextRoleAI: Market Intelligence',
    oneLiner: {
      fullstack: 'Built an autonomous AI system that automates job market research through multi-agent orchestration.',
      backend: 'Designed LangGraph workflows for complex, non-linear market analysis and data parsing.',
      frontend: 'Created an insights dashboard optimized for clarity and high-speed information consumption.',
    },
    problem: 'Job market research (trending skills, demand patterns) required dozens of hours of manual searching and parsing.',
    constraints: 'Dynamic search targets (Tavily), handling unstructured LLM data, and need for structured competitive insights.',
    perspectives: {
      fullstack: {
        roleTitle: 'Product & AI Engineer',
        reframe: 'End-to-end delivery of an AI platform that transforms searching into automated scanning.',
        focusMetrics: ['90%+ effort reduction', 'Structured AI insights'],
        decisions: [
          'Orchestrated multi-agent flows using LangGraph for deep-dive job posting analysis.',
          'Built a React dashboard focusing on information hierarchy for surfacing trending patterns.',
          'Integrated FastAPI to coordinate backend search and LLM aggregation workflows.',
        ],
      },
      backend: {
        roleTitle: 'AI Systems Engineer',
        reframe: 'Orchestrating autonomous agents and ensuring consistent, high-signal data ingestion.',
        focusMetrics: ['Autonomous Reliability', 'FastAPI Orchestration'],
        decisions: [
          'Engineered non-linear agent graphs to handle diverse job posting formats and edge cases.',
          'Integrated Tavily search with specific context filtering for high-signal ingestion.',
          'Optimized prompt chains to transform unstructured data into consistent JSON formats for the UI.',
        ],
      },
      frontend: {
        roleTitle: 'Frontend & UX Lead',
        reframe: 'Making complex market intelligence readable, actionable, and visually clear.',
        focusMetrics: ['High Information Density', 'Fast Consumption'],
        decisions: [
          'Designed a dashboard that surface-levels trending skills and demand patterns for rapid review.',
          'Built custom visualization components for competitive hiring signals.',
          'Implemented async state handling for real-time AI research progress updates.',
        ],
      },
    },
    tradeOffs: 'Chose a multi-agent graph approach over simple sequential calls to handle retry logic and complex parsing, despite higher initial latency.',
    result: 'Automated 90%+ of manual research, transforming hours of searching into actionable dashboard insights.',
  },
];


export const howIWork = [
  {
    title: 'Identify the Bottleneck',
    description: 'I find the specific technical debt, latency source, or friction point that impacts business revenue.',
  },
  {
    title: 'Architect for Production',
    description: 'I design with security, observability, and edge cases in mind from the first line of code.',
  },
  {
    title: 'Measure and Iterate',
    description: 'I use before/after metrics to prove value and drive continuous system improvement.',
  },
];

export const contactInfo = {
  email: 'viswayadeedya.vy@gmail.com',
  linkedin: 'https://linkedin.com/in/viswayadeedya',
  github: 'https://github.com/viswayadeedya',
  resumeUrl: '/resume.pdf',
};
