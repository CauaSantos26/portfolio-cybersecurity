import Image from "next/image";

const skills = [
  {
    icon: "🌐",
    title: "Redes",
    description: "TCP/IP, DNS, DHCP, Firewall, Switch, Roteador, VPN",
  },
  {
    icon: "🐧",
    title: "Linux",
    description: "Debian, Ubuntu, Kali, permissões, Shell e SSH",
  },
  {
    icon: "</>",
    title: "Programação",
    description: "Python, Java, JavaScript, SQL, HTML e CSS",
  },
  {
    icon: "🛠️",
    title: "Ferramentas",
    description: "Wireshark, Nmap, Burp Suite, Metasploit, Git e Docker",
  },
  {
    icon: "🛡️",
    title: "SOC / SIEM",
    description: "Análise de logs, alertas, investigação e resposta a incidentes",
  },
];

const projects = [
  {
    title: "Linux Hardening",
    description:
      "Hardening de um sistema Linux com foco em segurança, permissões e boas práticas.",
    tags: ["Linux", "Bash", "Segurança"],
  },
  {
    title: "Análise de Tráfego com Wireshark",
    description:
      "Captura e análise de pacotes de rede utilizando protocolos como HTTP, DNS, TCP, UDP e ARP.",
    tags: ["Wireshark", "Redes", "TCP/IP"],
  },
  {
    title: "Scanner de Portas em Python",
    description:
      "Ferramenta desenvolvida em Python para identificar portas abertas e serviços em um ambiente controlado.",
    tags: ["Python", "Sockets", "Redes"],
  },
  {
    title: "Mini SOC Home Lab",
    description:
      "Laboratório para coleta de logs, análise de eventos e estudo de alertas utilizando ferramentas de segurança.",
    tags: ["SIEM", "Logs", "Linux"],
  },
];

const certifications = [
  {
    name: "Cisco Cybersecurity",
    provider: "Cisco Networking Academy",
    status: "Em andamento",
  },
  {
    name: "Fortinet NSE 1",
    provider: "Fortinet",
    status: "Em andamento",
  },
  {
    name: "Cybersecurity Path",
    provider: "TryHackMe",
    status: "Em andamento",
  },
  {
    name: "Web Security Academy",
    provider: "PortSwigger",
    status: "Em andamento",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-blue-500/10 bg-[#020817]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/50 bg-blue-500/10 text-2xl">
              🛡️
            </div>

            <div>
              <h1 className="font-bold leading-none">Cauã Silva</h1>
              <p className="mt-1 text-xs text-blue-400">
                Cybersecurity Portfolio
              </p>
            </div>
          </a>

          {/* MENU */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a
              href="#inicio"
              className="text-blue-400 transition hover:text-blue-300"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="transition hover:text-blue-400"
            >
              Sobre
            </a>

            <a
              href="#projetos"
              className="transition hover:text-blue-400"
            >
              Projetos
            </a>

            <a
              href="#certificacoes"
              className="transition hover:text-blue-400"
            >
              Certificações
            </a>

            <a
              href="#contato"
              className="transition hover:text-blue-400"
            >
              Contato
            </a>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-500/60 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/10"
          >
            ◉ GitHub
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,119,255,0.16),transparent_35%)]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* TEXTO */}
          <div>
            <p className="mb-4 text-lg font-semibold text-blue-400">
              Olá, eu sou
            </p>

            <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Cauã{" "}
              <span className="text-blue-500">
                Silva
              </span>
            </h2>

            <h3 className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
              Analista de Cibersegurança em formação
            </h3>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
              Sou apaixonado por tecnologia e segurança da informação.
              Meu objetivo é evoluir na área de cibersegurança,
              construindo um futuro sólido através de aprendizado
              contínuo, prática e projetos reais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                ⚡ Ver Projetos
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-500/60 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-500/10"
              >
                ◉ GitHub
              </a>
            </div>
          </div>

          {/* VISUAL CYBER */}
          <div className="relative hidden h-[500px] overflow-hidden rounded-2xl border border-blue-500/30 lg:block">
  <Image
    src="/hero-cyber.jpg"
    alt="Ambiente de cibersegurança"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/40 to-blue-900/20" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,0.30),transparent_45%)]" />

  <div className="absolute bottom-8 left-8 w-64 rounded-xl border border-blue-500/40 bg-[#020817]/90 p-5 font-mono text-xs shadow-2xl backdrop-blur">
    <p className="text-blue-400">$ whoami</p>

    <p className="mt-2 text-slate-400">
      cybersecurity_student
    </p>

    <p className="mt-5 text-blue-400">$ security_status</p>

    <p className="mt-2 text-green-400">
      ● SYSTEM SECURE
    </p>

    <p className="mt-5 text-blue-400">$ focus</p>

    <p className="mt-2 text-slate-400">
      Red Team
      <br />
      AppSec
      <br />
      Web Security
    </p>
  </div>
</div>
      {/* ================= SOBRE ================= */}
      <section
        id="sobre"
        className="border-t border-blue-500/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-3">
            <span className="text-2xl text-blue-500">🔒</span>

            <h2 className="text-3xl font-bold">
              Sobre mim
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-slate-400">
                Atualmente estudo Engenharia de Software e estou em
                constante evolução na área de cibersegurança. Tenho
                interesse em Linux, redes, análise de tráfego,
                automação com Python e segurança web.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Gosto de resolver problemas, aprender coisas novas e
                transformar conhecimento teórico em projetos práticos.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div>
                  <span className="text-xl text-blue-400">📍</span>
                  <p className="mt-2 text-sm text-slate-500">
                    Localização
                  </p>
                  <p className="text-sm text-slate-300">
                    São Paulo - SP
                  </p>
                </div>

                <div>
                  <span className="text-xl text-blue-400">🎓</span>
                  <p className="mt-2 text-sm text-slate-500">
                    Estudando
                  </p>
                  <p className="text-sm text-slate-300">
                    Eng. de Software
                  </p>
                </div>

                <div>
                  <span className="text-xl text-blue-400">◉</span>
                  <p className="mt-2 text-sm text-slate-500">
                    Disponibilidade
                  </p>
                  <p className="text-sm text-slate-300">
                    Estágio / Júnior
                  </p>
                </div>
              </div>
            </div>

            {/* INTERESSES */}
            <div className="rounded-2xl border border-blue-500/30 bg-[#061426] p-7">
              <h3 className="text-xl font-bold">
                Principais interesses
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                  <li>◉ Red Team & Pentest</li>
                  <li>◉ Application Security (AppSec)</li>
                  <li>◉ Web Application Security</li>
                  <li>◉ OWASP Top 10</li>
                  <li>◉ Vulnerability Assessment</li>
                  <li>◉ Bug Bounty</li>
              </ul>

              <p className="mt-7 border-t border-blue-500/10 pt-5 font-medium italic text-blue-400">
               "Conhecer como um ataque funciona é essencial
                para construir uma defesa melhor."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="border-t border-blue-500/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-3xl font-bold">
              Habilidades
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-blue-500/20 bg-[#061426] p-5 transition hover:-translate-y-1 hover:border-blue-500/60"
              >
                <div className="text-3xl">{skill.icon}</div>

                <h3 className="mt-5 font-bold">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJETOS ================= */}
      <section
        id="projetos"
        className="border-t border-blue-500/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                PROJETOS
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Projetos de Cibersegurança
              </h2>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-blue-400 sm:block"
            >
              Ver todos os projetos →
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-xl border border-blue-500/20 bg-[#061426] transition hover:-translate-y-1 hover:border-blue-500/60"
              >
                <div className="flex h-32 items-center justify-center bg-[#020b18] text-5xl">
                  🖥️
                </div>

                <div className="p-5">
                  <h3 className="font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-medium text-blue-400"
                  >
                    Ver projeto →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICAÇÕES ================= */}
      <section
        id="certificacoes"
        className="border-t border-blue-500/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="text-2xl">📚</span>

            <h2 className="text-3xl font-bold">
              Certificações e Cursos
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification) => (
              <div
                key={certification.name}
                className="rounded-xl border border-blue-500/20 bg-[#061426] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
                  🏆
                </div>

                <h3 className="mt-5 font-bold">
                  {certification.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {certification.provider}
                </p>

                <span className="mt-5 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                  {certification.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section
        id="contato"
        className="border-t border-blue-500/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-blue-400">
                CONTATO
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Vamos conversar?
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-400">
                Estou aberto a oportunidades, projetos e networking
                na área de cibersegurança.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:seuemail@email.com"
                className="block rounded-xl border border-blue-500/20 bg-[#061426] p-5 transition hover:border-blue-500/60"
              >
                📧 seuemail@email.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-blue-500/20 bg-[#061426] p-5 transition hover:border-blue-500/60"
              >
                💼 linkedin.com/in/seu-perfil
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-blue-500/20 bg-[#061426] p-5 transition hover:border-blue-500/60"
              >
                ◉ github.com/seu-usuario
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-blue-500/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-center text-sm text-slate-600 sm:flex-row sm:text-left">
          <p>© 2026 Cauã Silva. Todos os direitos reservados.</p>

          <p className="font-mono">
            Cybersecurity Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}
