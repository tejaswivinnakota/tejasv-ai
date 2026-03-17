import Image from "next/image";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Job({
  title,
  company,
  period,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <div>
          <span className="font-medium">{title}</span>
          <span className="text-zinc-500"> · {company}</span>
        </div>
        <span className="text-sm text-zinc-400 shrink-0">{period}</span>
      </div>
      <ul className="mt-1 flex flex-col gap-1 pl-4">
        {bullets.map((b, i) => (
          <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed list-disc">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0 overflow-hidden rounded-full" style={{width: 72, height: 72}}>
          <Image
            src="/profile.jpg"
            alt="Tejaswi Vinnakota"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Tejaswi Vinnakota</h1>
          <p className="text-zinc-500">Principal Product Manager</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
            <a href="mailto:tejaswivinnakota@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              tejaswivinnakota@gmail.com
            </a>
            <a href="https://linkedin.com/in/tejaswivinnakota" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              linkedin.com/in/tejaswivinnakota
            </a>
            <a href="https://github.com/tejaswivinnakota" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              github.com/tejaswivinnakota
            </a>
          </div>
        </div>
      </div>

      <Section title="Experience">
        <div className="flex flex-col gap-6">
          <Job
            title="Principal Product Manager, AI Safety"
            company="Microsoft AI"
            period="Oct 2024 – Present"
            bullets={[
              "Driving strategy, execution, and delivery of AI Safety for 50+ Gen AI products across MAI Grounding, Bing, Edge, and Microsoft Copilot for ~400M users.",
              "Spearheading AI safety evaluations and red teaming exercises to enable secure product launches, contributing to 20% YoY revenue growth.",
              "Developing and implementing AI-driven solutions that optimize safety evaluations by 60% while maintaining rigorous quality standards.",
              "Building safety classifiers, fine-tuning LLMs for safety, and LLM-based auto-raters leveraging advanced prompting techniques.",
              "Partnering closely with OpenAI on building safety models, evaluations, and deployments.",
              "Boosting operational excellence through Generative AI / LLM Safety solutions, resulting in a 2X productivity boost and 80% reduction in OPEX costs.",
              "Played a key leadership role in the launch of Copilot Search, leading efforts in detecting and mitigating adversarial attacks.",
            ]}
          />
          <Job
            title="Senior Product Manager, Developer Platform and Success, Windows"
            company="Microsoft"
            period="Oct 2020 – Oct 2024"
            bullets={[
              "Led the developer ecosystem for the new Microsoft Store on Windows, from onboarding to monetization.",
              "Guided the developer and user experience for Microsoft Copilot actions for first-party and third-party in Windows Copilot.",
              "Drove marketplace success, enabling developers to reach 10 million app acquisitions within six months from onboarding.",
              "Proposed and executed strategies to boost app acquisition success rate for developers in the Store by 25%.",
              "Launched Gen AI initiatives that improved discoverability, resulting in a 15% increase in developer success.",
              "Presented Store innovations and announcements at Build 2024 and Build 2023.",
              "Led a team of 4 Product Managers, establishing core priorities, achieving OKRs, and encouraging growth.",
            ]}
          />
          <Job
            title="Senior Product Manager"
            company="ServiceNow, Hyderabad"
            period="May 2019 – Oct 2020"
            bullets={[
              "Led Machine Learning, NLU, and Conversational experiences for Workflow SaaS Products.",
              "Drove consumerization and reduced time to value in an omni-channel ecosystem.",
              "Managed outbound engagement with Fortune 500 companies to promote fast adoption of AI agents and NLU.",
              "Enhanced efficiency and productivity with ML-based workflow automation in agent journeys.",
              "Launched VS Code Extensions Marketplace.",
              "Encouraged self-service behavior and knowledge management through improved information visibility via recommender systems.",
            ]}
          />
          <Job
            title="Product Manager"
            company="OpenText, Hyderabad"
            period="Aug 2017 – Apr 2019"
            bullets={[
              "Facilitated business success and adoption of OpenText Contract Center through inbound and outbound product management.",
              "Created a detailed roadmap strategy by identifying KPIs to achieve business goals and ensure product-market fit.",
              "Led feature development in contract management, amendments, renewals, and discovery for account managers and executives.",
              "Managed a program to integrate contracts worth US $700 million, providing leadership with unified contract visibility.",
            ]}
          />
          <Job
            title="Product Manager"
            company="Paytm, Noida"
            period="May 2017 – Aug 2017"
            bullets={[
              "Led customer research, roadmap development, and architecture of Paytm's business loans marketplace.",
              "Performed Merchant KYC Analytics and Onboarding Process Audit, resulting in a comprehensive overhaul of KYC operations.",
              "Implemented category enhancements, system design improvements, and digital marketing strategies for Paytm Mall's GoBig seller services.",
              "Advanced Paytm Movies by developing inventory planning strategies, UX improvements, and pricing strategies to drive high growth.",
            ]}
          />
          <Job
            title="Lead Engineer"
            company="Samsung Research, Bangalore"
            period="Jul 2012 – May 2015"
            bullets={[
              "Developed a collaborative and hybrid AR-VR solution for Gear VR, plus an interaction module for non-stereoscopic VR apps.",
              "Created a 3D rendering engine for virtual tours and photorealistic AR object rendering.",
              "Received the 'Samsung Employee Award' for top 1% performance and earned a rapid promotion to Lead Engineer.",
              "Contributed significantly to saving $1.2 million in an M&A deal, earning Top 10% recognition and a 50% pay increase.",
              "Designed a superior page turn animation algorithm for e-books app, surpassing Apple and Google.",
              "Boosted runtime by 300% and performance by 50% through optimizing the animations pipeline with 3D mesh simplification.",
            ]}
          />
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-3 text-sm">
          {[
            { degree: "Professional Program in Artificial Intelligence", school: "Stanford University", period: "Present" },
            { degree: "MBA in Business Management", school: "XLRI, Jamshedpur", period: "2015 – 2017" },
            { degree: "Dual Degree (B.S. + M.S.) in Mathematics and Computing, Rank 1", school: "IIT (ISM) Dhanbad", period: "2007 – 2012" },
          ].map(({ degree, school, period }) => (
            <div key={school} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <div>
                <span className="font-medium">{degree}</span>
                <span className="text-zinc-500"> · {school}</span>
              </div>
              <span className="text-zinc-400 shrink-0">{period}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Certifications">
        <div className="flex flex-col gap-2 text-sm">
          {[
            { name: "Data Science", org: "MIT", year: "2018" },
            { name: "Neural Networks and Deep Learning", org: "deeplearning.ai", year: "2018" },
            { name: "Design Thinking", org: "IDEO Design School", year: "2019" },
          ].map(({ name, org, year }) => (
            <div key={name} className="flex justify-between">
              <span><span className="font-medium">{org}</span><span className="text-zinc-500"> · {name}</span></span>
              <span className="text-zinc-400">{year}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Publications">
        <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li><em>A 3D animation and effects framework for mobile devices</em> — SIGGRAPH 2014</li>
          <li><em>Mobile collaborative AR/VR with real-time in place switching</em> — SIGGRAPH 2015</li>
          <li><em>Page Turn Animation</em> — Samsung Best Paper Award Conference 2014</li>
          <li><em>Drawing an automatic sketch of deformable objects using only a few images</em> — ECCV 2012</li>
        </ul>
      </Section>

      <Section title="Skills">
        <div className="flex flex-col gap-2 text-sm">
          {[
            { category: "Programming", items: "Python, C++, C#, Java, Android, JavaScript, Microservices, Kubernetes" },
            { category: "Data", items: "SQL, Kusto, Power BI, Azure Synapse Analytics, Excel" },
            { category: "Collaboration", items: "MS Office Suite, Jira Suite, Azure DevOps, GitHub" },
            { category: "Design", items: "Figma, Canva" },
          ].map(({ category, items }) => (
            <div key={category} className="flex gap-2">
              <span className="font-medium w-28 shrink-0 text-zinc-700 dark:text-zinc-300">{category}</span>
              <span className="text-zinc-500">{items}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
