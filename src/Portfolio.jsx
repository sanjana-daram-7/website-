import { useState, useEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Award,
  Phone,
  MousePointerClick,
  Terminal,
  Code2,
  Cpu,
  Copy,
  Check,
  Sun,
  Moon,
} from 'lucide-react'

const CONTACT_EMAIL = 'sanju.daram@gmail.com'
/* Short mailto — long URLs with body text break some mail clients and in-app browsers */
const MAIL_SUBJECT = 'Message from your portfolio'
const MAIL_BODY = 'Hi Sanjana,\n\n'
const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`
/** Works when no desktop mail app is set — opens Gmail in the browser */
const GMAIL_COMPOSE_HREF =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}` +
  `&su=${encodeURIComponent(MAIL_SUBJECT)}` +
  `&body=${encodeURIComponent(MAIL_BODY)}`

const skillGroups = [
  {
    label: 'Languages & stacks',
    items: [
      'Python',
      'C++',
      'C',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL',
      'React',
      'Flask',
      'Node.js',
    ],
  },
  {
    label: 'ML & data',
    items: [
      'NLP',
      'Hugging Face',
      'LangChain',
      'OpenAI API',
      'T5',
      'Pandas',
      'NumPy',
      'Seaborn',
      'Plotly',
    ],
  },
  {
    label: 'Cloud & systems',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Terraform', 'CI/CD', 'REST APIs', 'Git'],
  },
]

const projects = [
  {
    title: 'Conversational AI with Memory & Tools',
    stack: 'Python · LangChain · OpenAI API · Pinecone · FAISS',
    summary:
      'Multi-step conversational system with durable memory and tool integrations for automating complex tasks.',
    highlights: [
      'Vector indexing and retrieval with Pinecone and FAISS for semantic search over unstructured documents.',
      'Containerized deployment and scalable inference endpoints in cloud environments.',
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: 'LLM Chatbot & Text Summarizer',
    stack: 'Python · Hugging Face Transformers · Flask · OpenAI API',
    summary:
      'Chatbot and summarization pipeline to extract insights from long documents and mixed text sources.',
    highlights: [
      'Flask web app with REST APIs for model inference.',
      'Preprocessing and data cleaning to improve summary quality.',
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: 'AI Test Case & Description Generator',
    stack: 'Python · Flask · T5 · Qwen · HTML/CSS · CI/CD',
    summary:
      'End-to-end app that generates structured test cases and descriptions from user stories using fine-tuned LMs.',
    highlights: [
      'Full-stack Flask integration with outputs wired into CI/CD to speed QA.',
      'Reduces manual test authoring while keeping outputs structured for engineering teams.',
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: 'Financial Sector Gender Equality Analysis',
    stack: 'Python · Pandas · Excel · Seaborn · Plotly',
    summary:
      'Data analysis project assessing gender disparities in leadership across countries using HR and workforce data.',
    highlights: [
      'Led dataset cleaning, modeling, and exploratory analysis across multi-country sources.',
      'Visualized KPIs to surface factors affecting women’s representation in leadership.',
    ],
    demoUrl: null,
    githubUrl: null,
  },
]

const accentIcon = {
  sparkle: Sparkles,
  code: Code2,
  cpu: Cpu,
}

const TERM_COMMAND = 'cat ./identity.txt'
const TERM_OUTPUT =
  '→ CS @ UTA · ML & NLP pipelines · wildlife AI research · SWE VP'

const TypingCursor = () => (
  <span
    className="ml-0.5 inline-block h-3 w-px animate-pulse bg-fuchsia-500 align-middle dark:bg-fuchsia-400"
    aria-hidden
  />
)

const HeroTerminal = ({ isDark }) => {
  const [cmd, setCmd] = useState('')
  const [out, setOut] = useState('')
  const [phase, setPhase] = useState('cmd')

  useEffect(() => {
    let cancelled = false
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const speed = reduceMotion ? 0 : 34
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    ;(async () => {
      if (reduceMotion) {
        if (!cancelled) {
          setCmd(TERM_COMMAND)
          setOut(TERM_OUTPUT)
          setPhase('done')
        }
        return
      }
      for (let i = 0; i <= TERM_COMMAND.length && !cancelled; i++) {
        setCmd(TERM_COMMAND.slice(0, i))
        await sleep(speed)
      }
      if (cancelled) return
      setPhase('out')
      for (let j = 0; j <= TERM_OUTPUT.length && !cancelled; j++) {
        setOut(TERM_OUTPUT.slice(0, j))
        await sleep(speed)
      }
      if (cancelled) return
      setPhase('done')
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="corner-tech relative overflow-hidden rounded-xl border border-rose-200/90 bg-gradient-to-br from-rose-950/[0.04] via-white/60 to-fuchsia-50/40 px-4 py-3 text-left shadow-lg shadow-rose-200/25 backdrop-blur-md dark:border-fuchsia-500/20 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-fuchsia-950/40 dark:shadow-fuchsia-900/20">
      <div className="mb-2 flex items-center gap-2 border-b border-rose-200/60 pb-2 font-mono text-[10px] text-rose-500 sm:text-[11px] dark:border-white/10 dark:text-rose-400">
        <Terminal className="h-3.5 w-3.5 shrink-0 text-fuchsia-500 dark:text-fuchsia-400" strokeWidth={2} aria-hidden />
        <span className="truncate">sanjana@portfolio:~$</span>
        {!isDark && <span className="ml-auto hidden text-rose-300/80 sm:inline">utf-8 · light</span>}
        {isDark && <span className="ml-auto hidden text-violet-300/90 sm:inline">utf-8 · dark</span>}
      </div>
      <p className="min-h-[1.25rem] font-mono text-xs text-fuchsia-700/95 sm:min-h-[1.5rem] sm:text-sm dark:text-fuchsia-300">
        <span className="text-rose-400 dark:text-rose-400">$</span> {cmd}
        {phase === 'cmd' && <TypingCursor />}
      </p>
      <p className="mt-2 min-h-[2.5rem] pl-1 font-mono text-[11px] leading-relaxed text-rose-900/85 sm:min-h-[2.75rem] sm:text-xs dark:text-rose-200/90">
        {out}
        {phase === 'out' && <TypingCursor />}
      </p>
      {phase === 'done' && (
        <p className="mt-3 flex items-center gap-1 font-mono text-[11px] text-rose-400/70 dark:text-fuchsia-400/80">
          <TypingCursor />
          <span className="sr-only">Typing complete</span>
        </p>
      )}
    </div>
  )
}

const SectionTitle = ({ eyebrow, title, kicker, className = '', accent = 'sparkle' }) => {
  const Icon = accentIcon[accent] ?? Sparkles
  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {eyebrow && (
        <p className="mb-2 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-fuchsia-600/85 dark:text-fuchsia-400/90">
          <span className="select-none text-rose-300 dark:text-rose-500/70" aria-hidden>
            //
          </span>
          <Icon className="h-3.5 w-3.5 shrink-0 text-fuchsia-500 dark:text-fuchsia-400" strokeWidth={2} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-rose-950 md:text-4xl dark:text-rose-50">
        {title}
      </h2>
      {kicker && (
        <p className="mt-3 font-sans text-base leading-relaxed text-rose-900/65 dark:text-rose-300/85">{kicker}</p>
      )}
    </div>
  )
}

const Portfolio = () => {
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )

  const toggleTheme = () => {
    const root = document.documentElement
    const next = !root.classList.contains('dark')
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    setDarkMode(next)
  }

  const copyEmail = () => {
    void navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-fuchsia-50/30 to-violet-50/40 font-sans dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/40">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:300%_300%] animate-shimmer bg-gradient-to-br from-rose-100/50 via-transparent to-violet-100/40 opacity-80 dark:from-fuchsia-950/30 dark:to-violet-950/40"
      />
      <div
        aria-hidden
        className="digital-grid pointer-events-none fixed inset-0 -z-10 animate-drift opacity-100"
      />
      <div aria-hidden className="digital-scan fixed inset-0 -z-10 opacity-70 dark:opacity-50" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-32 h-80 w-80 animate-float rounded-full bg-rose-200/35 blur-3xl dark:bg-rose-600/25" />
        <div
          className="absolute bottom-20 right-0 h-96 w-96 animate-float rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-600/20"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-violet-200/25 blur-3xl dark:bg-violet-600/15" />
        <div className="absolute right-[12%] top-24 hidden font-mono text-[10px] leading-relaxed text-rose-900/[0.07] dark:text-rose-100/[0.09] sm:block">
          01010011 01101000 01101001 01101110 01100101
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent dark:via-fuchsia-400/25"
          aria-hidden
        />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <span className="font-display text-lg font-semibold italic text-rose-700 dark:text-rose-200 md:text-xl">
            Sanjana Daram
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-rose-900/80 dark:text-rose-200/90">
            <a
              href="#skills"
              className="rounded-md px-1 transition hover:bg-fuchsia-50/80 hover:text-fuchsia-700 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
            >
              Skills
            </a>
            <a
              href="#education"
              className="rounded-md px-1 transition hover:bg-fuchsia-50/80 hover:text-fuchsia-700 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
            >
              Education
            </a>
            <a
              href="#experience"
              className="rounded-md px-1 transition hover:bg-fuchsia-50/80 hover:text-fuchsia-700 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
            >
              Experience
            </a>
            <a
              href="#leadership"
              className="rounded-md px-1 transition hover:bg-fuchsia-50/80 hover:text-fuchsia-700 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
            >
              Leadership
            </a>
            <a
              href="#projects"
              className="rounded-md px-1 transition hover:bg-fuchsia-50/80 hover:text-fuchsia-700 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
            >
              Projects
            </a>
            <div className="relative z-10 flex items-center gap-2 border-l border-rose-200 pl-3 dark:border-white/10 sm:gap-3 sm:pl-6">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-rose-200/80 bg-rose-50/50 p-2 text-rose-800 transition hover:bg-rose-100 dark:border-white/15 dark:bg-white/5 dark:text-amber-200 dark:hover:bg-white/10"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={darkMode ? 'Light mode (current site look)' : 'Dark mode'}
              >
                {darkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
              </button>
              <a
                href={GMAIL_COMPOSE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full p-2 text-rose-700 transition hover:bg-rose-100 dark:text-rose-200 dark:hover:bg-white/10"
                aria-label={`Compose email to ${CONTACT_EMAIL} in Gmail (new tab)`}
                title={`Opens Gmail to write ${CONTACT_EMAIL}. Use footer “${CONTACT_EMAIL}” link for your normal mail app.`}
              >
                <Mail size={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjana-daram/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-rose-700 transition hover:bg-rose-100 dark:text-rose-200 dark:hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative px-4 pb-24 pt-16 md:px-6 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500 opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards] dark:border-rose-500/30 dark:bg-slate-900/60 dark:text-rose-300"
            style={{ animationDelay: '0.05s' }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio · Class of 2026
          </p>
          <h1
            className="animate-fade-up font-display text-4xl font-semibold leading-tight tracking-tight opacity-0 md:text-6xl md:leading-[1.15] [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.12s' }}
          >
            <span className="bg-gradient-to-r from-rose-700 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent dark:from-rose-400 dark:via-fuchsia-400 dark:to-violet-400">
              Building thoughtful AI systems
            </span>{' '}
            <span className="text-rose-900 dark:text-rose-100">with care for real people.</span>
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-rose-950/70 opacity-0 [animation-fill-mode:forwards] dark:text-rose-200/80"
            style={{ animationDelay: '0.2s' }}
          >
            Computer Science B.S. at UT Arlington · Undergraduate researcher in wildlife AI · VP, Society of Women
            Engineers
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap justify-center gap-3 opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.28s' }}
          >
            {[
              { label: 'GPA 3.812', hint: 'Cumulative' },
              { label: "Dean's List", hint: 'Fall 2023 – Present' },
              { label: 'SWE · VP', hint: 'UTA Chapter' },
            ].map((chip) => (
              <div
                key={chip.label}
                className="rounded-2xl border border-rose-100 bg-white/80 px-5 py-3 text-left shadow-sm shadow-rose-100/60 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/50 dark:shadow-black/30"
              >
                <p className="font-display text-sm font-semibold text-rose-900 dark:text-rose-100">{chip.label}</p>
                <p className="text-xs text-rose-600/80 dark:text-rose-400/80">{chip.hint}</p>
              </div>
            ))}
          </div>
          <div
            className="animate-fade-up mx-auto mt-10 w-full max-w-lg opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.32s' }}
          >
            <HeroTerminal isDark={darkMode} />
          </div>

          <p
            className="animate-fade-up mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-sm text-rose-700/70 opacity-0 [animation-fill-mode:forwards] dark:text-rose-300/75"
            style={{ animationDelay: '0.4s' }}
          >
            <MousePointerClick className="h-4 w-4 shrink-0 text-fuchsia-500 dark:text-fuchsia-400" />
            Scroll to explore the stack trace of my work—skills, leadership, and shipped projects.
          </p>
        </div>
      </header>

      <section id="skills" className="scroll-mt-24 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            className="mb-12"
            accent="code"
            eyebrow="Toolkit"
            title="Technical skills"
            kicker="Grounded in systems, ML, and full-stack delivery—the same stack highlighted on my résumé."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="corner-tech relative rounded-3xl border border-rose-100/90 bg-white/70 p-6 shadow-lg shadow-rose-100/40 backdrop-blur-md transition hover:border-fuchsia-200/70 hover:shadow-glow-fuchsia dark:border-white/10 dark:bg-slate-900/55 dark:shadow-black/40 dark:hover:border-fuchsia-500/50"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-rose-900 dark:text-rose-100">{group.label}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-300 dark:text-rose-500">
                    module
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-rose-200/70 bg-gradient-to-br from-white/90 to-rose-50/50 px-2.5 py-1 font-mono text-[11px] font-normal tracking-tight text-rose-900 shadow-sm transition hover:border-fuchsia-300/80 hover:shadow-glow-fuchsia dark:border-white/10 dark:from-slate-800/80 dark:to-fuchsia-950/30 dark:text-rose-100 dark:hover:border-fuchsia-400/60 dark:hover:shadow-glow-fuchsia"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="scroll-mt-24 border-y border-rose-100/70 bg-white/40 px-4 py-16 backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/40 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="corner-tech relative flex flex-col gap-8 rounded-3xl border border-rose-100/80 bg-gradient-to-br from-white/90 to-rose-50/50 p-8 shadow-inner shadow-rose-100/50 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:from-slate-900/80 dark:to-fuchsia-950/20 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-200/60 bg-gradient-to-br from-rose-100 to-fuchsia-50 text-rose-700 shadow-sm dark:border-fuchsia-500/20 dark:from-fuchsia-900/30 dark:to-violet-900/20 dark:text-fuchsia-200">
                <GraduationCap size={28} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-rose-950 dark:text-rose-100">
                  University of Texas at Arlington
                </h3>
                <p className="mt-1 text-rose-700/85 dark:text-rose-300/90">Computer Science B.S. · August 2022 – May 2026</p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-rose-900/70 dark:text-rose-300/80">
                  Coursework spanning data structures, operating systems, neural networks, computer vision, machine learning,
                  AI, autonomous robotics, and theory.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-fuchsia-200/60 bg-white/60 px-6 py-4 text-sm text-rose-800/90 dark:border-fuchsia-500/30 dark:bg-slate-900/60 dark:text-rose-200/85">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-fuchsia-600/90 dark:text-fuchsia-400">
                meta · credentials
              </p>
              <p className="mt-2 font-sans">Maverick Academic Scholarship · InSTEM student</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            className="mb-12"
            eyebrow="Research & teaching"
            title="Experience"
            kicker="Hands-on research with real environmental data, plus peer mentoring in core CS courses."
          />
          <div className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-rose-300 before:to-violet-200 md:pl-4 dark:before:from-fuchsia-500/50 dark:before:to-violet-500/50">
            {[
              {
                title: 'Undergraduate Researcher',
                org: 'UTA Research Institute (UTARI)',
                meta: 'Advisor: Prof. Nicholas Gans · Jan 2025 – Present',
                body: [
                  'WildLive project: AI for wildlife monitoring and analysis with real-world environmental data.',
                  'Data processing, model development, and integration for detection and tracking in diverse conditions.',
                ],
              },
              {
                title: 'CSE Student Success Center Tutor',
                org: 'University of Texas at Arlington',
                meta: 'Fall 2024 – Present · Arlington, TX',
                body: [
                  'Mentor students in OOP, data structures, algorithms, and operating systems in 1:1 and group sessions.',
                  'Coach debugging, root-cause analysis, Linux tooling, networking basics, and preprocessing workflows.',
                ],
              },
            ].map((role) => (
              <article key={role.title} className="relative pl-10">
                <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-gradient-to-br from-rose-400 to-fuchsia-500 shadow-[0_0_12px_rgba(244,63,94,0.45)] dark:border-slate-900" />
                <h3 className="font-display text-xl font-semibold text-rose-950 dark:text-rose-100">{role.title}</h3>
                <p className="mt-1 font-medium text-rose-600 dark:text-fuchsia-400/90">{role.org}</p>
                <p className="font-mono text-xs text-rose-900/55 dark:text-rose-400/70">{role.meta}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-rose-900/75 dark:text-rose-300/80">
                  {role.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="scroll-mt-24 bg-gradient-to-b from-violet-50/50 to-transparent px-4 py-16 dark:from-violet-950/30 dark:to-transparent md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            className="mb-12"
            eyebrow="Campus impact"
            title="Leadership & community"
            kicker="Advocating for women in engineering through SWE programs, events, and mentorship."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Vice President',
                org: 'Society of Women Engineers (SWE) · UTA',
                meta: 'May 2024 – Present',
                body: [
                  'Represent the chapter and advocate for women in engineering and technology.',
                  'Coordinate professional development, networking, and mentorship initiatives.',
                  'Attended 2024 SWE Conference and shared industry insights with members.',
                ],
              },
              {
                title: 'Head of Events',
                org: 'Society of Women Engineers (SWE) · UTA',
                meta: 'August 2023 – May 2024',
                body: [
                  'Coordinated logistics, venues, general meetings, and industry speaker programs.',
                  'Led communications, fundraising, and outreach to grow community engagement.',
                ],
              },
            ].map((role) => (
              <div
                key={role.title}
                className="corner-tech relative rounded-3xl border border-violet-100 bg-white/80 p-7 shadow-lg shadow-violet-100/30 transition hover:border-violet-200 hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.25)] dark:border-violet-500/20 dark:bg-slate-900/60 dark:shadow-black/40 dark:hover:border-violet-400/40 dark:hover:shadow-[0_0_24px_-4px_rgba(167,139,250,0.2)]"
              >
                <h3 className="font-display text-xl font-semibold text-violet-950 dark:text-violet-100">{role.title}</h3>
                <p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-300">{role.org}</p>
                <p className="font-mono text-xs text-violet-900/55 dark:text-violet-300/60">{role.meta}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-violet-900/75 dark:text-violet-200/80">
                  {role.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            className="mb-12"
            accent="cpu"
            eyebrow="Selected work"
            title="Projects from my résumé"
            kicker="Four end-to-end builds spanning agents, LLM apps, QA automation, and equity-focused analytics."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="corner-tech group relative flex flex-col rounded-3xl border border-rose-100 bg-white/85 p-7 shadow-xl shadow-rose-100/50 backdrop-blur-md transition hover:border-fuchsia-200/80 hover:shadow-glow-fuchsia dark:border-white/10 dark:bg-slate-900/55 dark:shadow-black/40 dark:hover:border-fuchsia-500/50"
              >
                <h3 className="font-display text-xl font-semibold text-rose-950 transition group-hover:text-fuchsia-900 dark:text-rose-100 dark:group-hover:text-fuchsia-300">
                  {project.title}
                </h3>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-rose-100/90 bg-gradient-to-r from-rose-950/[0.04] via-fuchsia-50/30 to-violet-50/40 px-3 py-2 font-mono text-[10px] leading-relaxed text-rose-800/95 md:text-[11px] dark:border-white/10 dark:from-slate-950 dark:via-fuchsia-950/30 dark:to-violet-950/30 dark:text-rose-200/90">
                  <code>{project.stack}</code>
                </pre>
                <p className="mt-4 text-sm leading-relaxed text-rose-900/75 dark:text-rose-300/85">{project.summary}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-rose-900/70 dark:text-rose-300/75">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-300 dark:bg-fuchsia-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-rose-100 pt-5 text-sm font-semibold text-rose-600 dark:border-white/10 dark:text-fuchsia-400">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-1 hover:text-rose-800 dark:hover:text-fuchsia-200"
                      >
                        Live demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-1 hover:text-rose-800 dark:hover:text-fuchsia-200"
                      >
                        GitHub <Github size={14} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-r from-rose-50/90 via-white to-fuchsia-50/70 p-8 dark:border-white/10 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-fuchsia-950/40 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <SectionTitle className="mb-4" eyebrow="Recognition" title="Awards & languages" />
                <ul className="mt-2 space-y-3 text-sm text-rose-900/80 dark:text-rose-300/85">
                  {[
                    "Maverick Academic Scholarship Awardee · Fall 2022 – Spring 2026",
                    'InSTEM Student · Fall 2022 – Present',
                    "Dean's List · Fall 2023 – Present",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-rose-400 dark:text-fuchsia-400" strokeWidth={2} />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 px-6 py-5 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
                <p className="font-display text-sm font-semibold text-rose-900 dark:text-rose-100">Languages</p>
                <p className="mt-3 text-base text-rose-800/85 dark:text-rose-200/90">English · Telugu · Hindi</p>
                <p className="mt-2 text-xs text-rose-600 dark:text-rose-400/80">
                  Fluent in reading, writing, and professional communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="connect"
        className="scroll-mt-24 border-t border-rose-100 bg-white/60 px-4 py-14 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 md:px-6"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-rose-900 dark:text-rose-100">Let&apos;s connect</p>
            <p className="mt-2 max-w-md text-sm text-rose-800/75 dark:text-rose-300/80">
              I&apos;m happy to talk research collaborations, internships, or SWE partnerships—reach out anytime.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex max-w-lg flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href={MAILTO_HREF}
                className="flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900 dark:text-rose-200 dark:hover:text-white"
                title="Opens your default mail app (Outlook, Mail, etc.)"
              >
                <Mail size={18} aria-hidden /> {CONTACT_EMAIL}
              </a>
              <a
                href={GMAIL_COMPOSE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-3 py-1.5 text-sm font-semibold text-fuchsia-700 shadow-sm hover:border-fuchsia-300 hover:bg-fuchsia-50/80 dark:border-fuchsia-500/30 dark:bg-slate-900/70 dark:text-fuchsia-300 dark:hover:border-fuchsia-400 dark:hover:bg-fuchsia-950/40"
                title="Works in the browser if the email button does nothing"
              >
                <ExternalLink size={16} aria-hidden />
                Open in Gmail
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-1.5 rounded-full border border-dashed border-rose-300/80 bg-transparent px-3 py-1.5 text-sm font-medium text-rose-700 hover:bg-rose-50 dark:border-rose-500/40 dark:text-rose-200 dark:hover:bg-white/10"
              >
                {copied ? <Check size={16} className="text-emerald-600" aria-hidden /> : <Copy size={16} aria-hidden />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
            </div>
            <p className="max-w-md text-center text-xs text-rose-500 dark:text-rose-400/80">
              If the mail icon does nothing, your browser may not have a mail app set up—use <strong>Open in Gmail</strong>{' '}
              or <strong>Copy address</strong>.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <a
                href="tel:+16825533861"
                className="flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900 dark:text-rose-200 dark:hover:text-white"
              >
                <Phone size={18} /> +1 (682) 553-3861
              </a>
              <a
                href="https://www.linkedin.com/in/sanjana-daram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900 dark:text-rose-200 dark:hover:text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl space-y-2 text-center">
          <p className="font-mono text-[10px] tracking-wider text-fuchsia-600/70 dark:text-fuchsia-400/70">
            <span className="text-rose-400 dark:text-rose-500">$</span> deploy --target gh-pages --stack react,vite,tailwind,lucide
          </p>
          <p className="text-xs text-rose-500 dark:text-rose-400/70">
            © 2026 Sanjana Daram · Crafted with React &amp; Tailwind · Ships to GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
