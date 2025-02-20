import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Eric Do',
  initials: 'ED'
}

export const ABOUT = {
  title: `Computer Science Student @ UNSW`,
  description: `Passionate about building high-performance systems and scalable applications. 
  I focus on algorithmic solutions and performance optimisation, with interests spanning across data analytics and capital markets.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/ericnd',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ericnd/',
    icon: LinkedInIcon
  },
  {
    title: 'Email',
    url: 'mailto:e.ricdo@outlook.com',
    icon: MailIcon
  },
]

export const CAREER = [
  {
    company: 'Circana',
    jobs: [
      {
        title: 'Data Analyst',
        start: 'Jul, 2023',
        end: 'Oct, 2023',
        description: [
          'Ensured data compliance for 1500+ product categories using Python.',
          'Built stakeholder relationships across Client Insights and other teams.',
          'Improved business processes with Python scripts, boosting efficiency.',
          'Conducted research on product categories to support business decisions.',
        ]
      }
    ]
  },
  {
    company: 'Sunswift Racing',
    jobs: [
      {
        title: 'Software Engineer',
        start: 'Feb, 2023',
        end: 'May, 2023',
        description: [
          'Analyzed 50+ hours of track data, improving battery accuracy.',
          'Modeled solar-electric vehicle dynamics, increasing race efficiency.',
          'Contributed to a world record and international race win through data insights.',
        ]
      }
    ]
  },
  {
    company: 'Macquarie Group',
    jobs: [
      {
        title: 'Summer Analyst',
        start: 'Dec, 2022',
        end: 'Feb, 2023',
        description: [
          'Coordinated with technical teams, reducing project delays.',
          'Streamlined workflows by managing user stories, improving efficiency.',
          'Enhanced customer satisfaction by through journey analysis.',
          'Boosted API performance via debugging Java methods and SQL queries.',
        ]
      }
    ]
  },
  {
    company: 'UNSW Mathematics Society',
    jobs: [
      {
        title: 'Director',
        start: 'Oct, 2022',
        end: 'Present',
        description: [
          'Maintained MERN stack website integrated with 3rd party content managers.',
          'Led cross-team initiatives to rebrand and market the society.',
          'Developed a scheduling tool for subcommittee candidate interviews.'
        ]
      }
    ]
  },
  {
    company: 'UNSW Robotics & Mechatronics Society',
    jobs: [
      {
        title: 'Executive',
        start: 'Nov, 2023',
        end: 'Jul, 2023',
        description: [
          'Wrote grants to student council, securing funding for society activities.',
          'Managed administration for sign-ups and demographics.',
          'Liaised with the SRC to address society-related issues.'
        ]
      },
      {
        title: 'Subcomittee',
        start: 'March, 2022',
        end: 'Oct, 2022',
        description: [
          'Organized hackathons, sumobot competitions, and large-scale workshops.',
          'Mentored students on Arduino-based autonomous robot development.',
          'Maintained the society website using Next.js, TypeScript, and Tailwind.'
        ]
      }
    ]
  },
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'Propagate.Ink',
    tags: [
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.CSS,
      TAGS.VERCEL
    ],
    description:
      'A modern note taking app that leverages mind mapping and markdown to help you think and write better.',
    link: {
      preview: 'https://www.propagate.ink/'
    },
  },
  {
    title: 'UNSW Mathematics Society Website',
    tags: [
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      'The official website for the UNSW Mathematics Society.',
    link: {
      github: 'https://github.com/MathSocUNSW/mathsoc-website',
      preview: 'https://unswmathsoc.org'
    },
  },
  {
    title: 'GooberGPT',
    tags: [
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL,
      TAGS.OPENAI
    ],
    description:
      'A chatbot that uses OpenAI GPT-3.5 Turbo to generate silly responses.',
    link: {
      github: 'https://github.com/ericnd/goober-gpt',
      preview: 'https://goober-gpt.vercel.app/'
    },
  },
  {
    title: 'UNSW Cat Appreciation Society Website',
    tags: [
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      'The unfinished website for the UNSW Cat Appreciation Society.',
    link: {
      github: 'https://github.com/UNSW-CatSoc/catsoc-website',
      preview: 'https://catsoc-website-preview.vercel.app/'
    },
  },
]
