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
    systemChange: 'Payment Service Refactor',
    technicalAction: 'Async retries + idempotency',
    outcome: '65% faster processing',
    emphasis: ['fullstack', 'backend'],
  },
  {
    id: 'm2',
    systemChange: 'Auth Architecture',
    technicalAction: 'Cognito + JWT integration',
    outcome: '99.9% API uptime',
    emphasis: ['backend'],
  },
  {
    id: 'm3',
    systemChange: 'Legacy Modernization',
    technicalAction: 'Angular refactor + PrimeNG',
    outcome: 'Steps reduced from 6 to 3',
    emphasis: ['fullstack', 'frontend'],
  },
  {
    id: 'm4',
    systemChange: 'Workflow Engine',
    technicalAction: 'SSO + RBAC Integration',
    outcome: '66% less redundant login',
    emphasis: ['fullstack', 'backend'],
  },
  {
    id: 'm5',
    systemChange: 'AI Ingestion Pipeline',
    technicalAction: 'LangGraph multi-agent flow',
    outcome: '90%+ less manual effort',
    emphasis: ['fullstack', 'frontend'],
  },
];

export const impactStories: ImpactStory[] = [
  {
    id: 'lawbux',
    title: 'Fintech Payment & Onboarding',
    oneLiner: {
      fullstack: 'Owned end-to-end payment workflows and nonprofit identity verification.',
      backend: 'Architected Stripe Connect integrations and high-reliability API patterns.',
      frontend: 'Implemented secure React Native payment flows and resilient state management.',
    },
    problem: 'Manual nonprofit onboarding was slow and payment processing faced intermittent latency under load.',
    constraints: 'High security requirements (KYC), mission-critical reliability, and mobile-first context.',
    perspectives: {
      fullstack: {
        roleTitle: 'Lead Full-stack Engineer',
        reframe: 'Full-cycle ownership of the payment lifecycle, from AWS Cognito auth to React Native UI.',
        decisions: [
          'Unified Stripe Identity verification with backend auth for seamless KYC.',
          'Built custom hooks for transaction state management to prevent double-charges.',
          'Configured AWS auto-scaling to handle donation spikes.',
        ],
        focusMetrics: ['65% faster payment processing', '100% verified onboarding'],
      },
      backend: {
        roleTitle: 'Backend / Infrastructure Lead',
        reframe: 'System reliability and secure integration patterns for Stripe Connect.',
        decisions: [
          'Implemented idempotent request patterns to ensure transaction safety.',
          'Optimized Node.js service performance through targeted profiling of Stripe API calls.',
          'Established JWT-based secure access patterns across AWS microservices.',
        ],
        focusMetrics: ['99.9% API uptime', '65% faster processing'],
      },
      frontend: {
        roleTitle: 'Senior Frontend Engineer',
        reframe: 'High-trust mobile payment experiences and complex async handling.',
        decisions: [
          'Developed a robust React Native error-boundary system for payment failures.',
          'Translated Figma payment flows into high-performance, accessible components.',
          'Optimized client-side caching for faster non-profit lookup.',
        ],
        focusMetrics: ['Top-tier UX consistency', 'Resilient Mobile Flow'],
      },
    },
    tradeOffs: 'Chose a stricter validation pattern at the cost of slightly higher initial development time to ensure 100% data integrity in fintech flows.',
    result: 'Delivered a system supporting 100% verified onboarding and 65% faster average transaction speed.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Workflow Modernization',
    oneLiner: {
      fullstack: 'Transformed legacy logistics workflow into a modern, SSO-integrated platform.',
      backend: 'Harmonized legacy API contracts with modern authentication services.',
      frontend: 'Led Angular modernization to resolve UI technical debt and friction.',
    },
    problem: '1,000+ users were stuck with a 6-step order process and redundant login friction.',
    constraints: 'Legacy system dependency, strictly defined enterprise security protocols, large user base.',
    perspectives: {
      fullstack: {
        roleTitle: 'Full-stack Systems Lead',
        reframe: 'Bridging the gap between legacy backend limitations and modern UX needs.',
        focusMetrics: ['Steps reduced from 6 to 3', '66% less login friction'],
        decisions: [
          'Designed a middleware layer to normalize legacy API responses for the new frontend.',
          'Implemented Single Sign-On (SSO) across the entire enterprise ecosystem.',
          'Mapped complex logistics logic into a simplified 3-step UI sequence.',
        ],
      },
      backend: {
        roleTitle: 'Backend Integration Lead',
        reframe: 'Securing and streamlining enterprise auth and API interoperability.',
        focusMetrics: ['15% improved processing efficiency', 'Robust API Contracts'],
        decisions: [
          'Resolved critical API contract mismatches that caused intermittent sync issues.',
          'Hardened RBAC (Role Based Access Control) patterns for sensitive order data.',
          'Debugged complex integration edge cases in the legacy logistics pipeline.',
        ],
      },
      frontend: {
        roleTitle: 'Frontend Architect',
        reframe: 'Enterprise-scale UI modernization and workflow optimization.',
        focusMetrics: ['Simplified flow for 1,000+ users', 'High Maintainability'],
        decisions: [
          'Architected a modular Angular component library using PrimeNG for reuse.',
          'Implemented strict TypeScript patterns to reduce runtime UI errors by 40%.',
          'Conducted user testing to identify and eliminate 3 unnecessary workflow steps.',
        ],
      },
    },
    tradeOffs: 'Prioritized workflow simplification over deep feature expansion to maximize immediate user productivity gains.',
    result: 'Reduced order steps by 50% and improved internal processing efficiency by 15% across 1,000+ users.',
  },
  {
    id: 'nextrole',
    title: 'NextRoleAI: AI Market Intelligence',
    oneLiner: {
      fullstack: 'Built an autonomous AI system that reframed job research through multi-agent orchestration.',
      backend: 'Designed LangGraph workflows for complex, non-linear AI research tasks.',
      frontend: 'Created a high-density insights dashboard for rapid decision making.',
    },
    problem: 'Manual job market research was taking dozens of hours with low information density.',
    constraints: 'Dynamic search targets (Tavily), LLM non-determinism, need for structured outputs.',
    perspectives: {
      fullstack: {
        roleTitle: 'Product & AI Engineer',
        reframe: 'End-to-end delivery of an AI agent that thinks like a recruiter.',
        focusMetrics: ['90%+ reduction in research time', 'Structured AI insights'],
        decisions: [
          'Orchestrated multi-agent flows using LangGraph for deep-dive parsing.',
          'Built a React frontend focused on information hierarchy for AI summaries.',
          'Implemented structured output validation using Pydantic on the FastAPI backend.',
        ],
      },
      backend: {
        roleTitle: 'AI Systems Engineer',
        reframe: 'Orchestrating autonomous agents and ensuring LLM pipeline reliability.',
        focusMetrics: ['Autonomous Search Reliability', 'FastAPI Performance'],
        decisions: [
          'Engineered non-linear agent graphs to handle job parsing edge cases.',
          'Integrated Tavily search with specific context filtering for high-signal ingestion.',
          'Optimized backend prompt chains for cost and latency reduction.',
        ],
      },
      frontend: {
        roleTitle: 'Frontend & UX Lead',
        reframe: 'Making complex AI outputs readable, actionable, and trustable.',
        focusMetrics: ['Intuitive Information Hierarchy', 'Fast Consumption'],
        decisions: [
          'Designed a dashboard that visually highlights "Confidence Scores" for AI data.',
          'Built custom list views that allow recruiters to scan 50+ jobs in seconds.',
          'Implemented real-time agent status updates for better user feedback.',
        ],
      },
    },
    tradeOffs: 'Chose a multi-agent approach over a simple linear chain to ensure higher data accuracy, despite increased graph complexity.',
    result: 'Automated 90%+ of manual research, turning hours of searching into seconds of scanning.',
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
