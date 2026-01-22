export type RoleView = 'fullstack' | 'backend' | 'frontend';

export interface ImpactStory {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  backendOwnership: string[];
  frontendOwnership: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export const proofStrip: Metric[] = [
  { label: 'Faster Payment Processing', value: '65%' },
  { label: 'API Uptime', value: '99.9%' },
  { label: 'Users Streamlined', value: '1,000+' },
  { label: 'Reduced Redundant Logins', value: '66%' },
  { label: 'Less Manual Job Research', value: '90%+' },
];

export const impactStories: ImpactStory[] = [
  {
    id: 'lawbux',
    title: 'LawBux: Fintech Payment & Onboarding',
    summary: 'Owned production payment systems and nonprofit verification workflows.',
    outcomes: [
      '65% faster payment processing',
      '99.9% API uptime',
      '100% verified nonprofit onboarding',
    ],
    backendOwnership: [
      'Implemented Stripe Connect + Identity integration patterns for secure, automated onboarding.',
      'Developed high-reliability API integration patterns for mission-critical donation flows.',
      'Built secure authentication patterns using AWS Cognito and JWT standard.',
      'Managed cloud infrastructure and deployment context within AWS environments.',
    ],
    frontendOwnership: [
      'Engineered React Native payment workflows with focus on security and reliability.',
      'Optimized async handling and state management for complex transaction states.',
      'Designed resilient error handling and UX consistency across high-traffic donation flows.',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Workflow & SSO Modernization',
    summary: 'Revived legacy logistics platforms with modern auth and streamlined UI.',
    outcomes: [
      'Reduced redundant logins by 66%',
      'Simplified order creation from 6 steps to 3 (for 1,000+ users)',
      'Improved internal processing efficiency by 15%',
    ],
    backendOwnership: [
      'Coordinated with backend auth services to implement Single Sign-On (SSO) and RBAC.',
      'Identified and resolved API contract mismatches between legacy systems and modern UI.',
      'Fixed critical integration bugs and handled complex validation edge cases.',
    ],
    frontendOwnership: [
      'Led modernization from legacy systems to a performant Angular + TypeScript architecture.',
      'Developed reusable component library using PrimeNG for consistent enterprise UI.',
      'Translated Figma designs into streamlined, efficient user flows for logistics operators.',
    ],
  },
  {
    id: 'nextrole',
    title: 'NextRoleAI: AI Job Market Intelligence',
    summary: 'Built an autonomous AI system to reduce manual job research effort.',
    outcomes: [
      'Reduced manual job research effort by 90%+',
      'Enabled faster, data-driven job market discovery.',
    ],
    backendOwnership: [
      'Developed FastAPI orchestrator for multi-agent LLM workflows.',
      'Built LangGraph-based agents for autonomous searching and parsing.',
      'Implemented LangChain pipelines for structured data extraction.',
      'Integrated Tavily search API for real-time job market ingestion.',
    ],
    frontendOwnership: [
      'Designed and built a React dashboard for clear insight consumption.',
      'Implemented intuitive information hierarchy for high-density AI-generated data.',
      'Focused on usability and fast reading patterns for recruiter/job-seeker insights.',
    ],
  },
];

export const howIWork = [
  {
    title: 'Find the real bottleneck',
    description: 'I identify technical debt, latency, or workflow friction that impacts the bottom line.',
  },
  {
    title: 'Design for production',
    description: 'I build with security, observability, and edge cases in mind from day one.',
  },
  {
    title: 'Measure impact',
    description: 'I iterate based on before/after metrics to ensure technology delivers business value.',
  },
];

export const contactInfo = {
  email: 'viswayadeedya.vy@gmail.com',
  linkedin: 'https://linkedin.com/in/viswayadeedya',
  github: 'https://github.com/viswayadeedya',
  resumeUrl: '/resume.pdf',
};
