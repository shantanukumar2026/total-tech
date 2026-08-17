"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// 4 Clean Hero Practice Highlights
const HERO_PILLARS = [
  {
    code: 'PRACTICE // 01',
    title: 'Custom Web & Microservices',
    desc: 'Next.js 16 full-stack web platforms, high-throughput Node.js APIs, and global edge architectures.'
  },
  {
    code: 'PRACTICE // 02',
    title: 'Private Enterprise AI & Data',
    desc: 'Air-gapped LLMs, autonomous multi-agent task workflows, and real-time Kafka lakehouses.'
  },
  {
    code: 'PRACTICE // 03',
    title: 'Robotics & Industrial Automation',
    desc: 'Autonomous mobile robot fleet coordination (ROS 2), SCADA systems, and embedded firmware.'
  },
  {
    code: 'PRACTICE // 04',
    title: 'Zero-Trust Cloud & SOC2 Defense',
    desc: 'AWS & Azure cloud infrastructure as code, zero-trust IAM security, and 24/7 SRE reliability.'
  }
];

// Industries We Transform
const INDUSTRIES = [
  'Financial Services & Banking',
  'Healthcare & Life Sciences',
  'Manufacturing & Robotics',
  'High-Growth Technology',
  'Retail & Supply Chain'
];

// Itransition-Inspired Engagement Models
const DELIVERY_MODELS = [
  {
    badge: 'MODEL // 01',
    title: 'Dedicated Engineering Pods',
    desc: 'Autonomous, cross-functional engineering teams (Tech Leads, Full-Stack Developers, QA & DevOps) integrated directly with your in-house roadmap.',
    points: [
      'Direct time-zone overlap with US teams',
      'Transparent sprint tracking & code commits',
      'Flexible team scaling in 2–4 weeks',
      'Complete intellectual property ownership'
    ]
  },
  {
    badge: 'MODEL // 02',
    title: 'End-to-End Solution Delivery',
    desc: 'Turnkey product engineering from discovery, system architecture, and UI/UX design to production deployment and milestone governance.',
    points: [
      'Guaranteed milestone deliverables',
      'Strict quality & security baseline audits',
      'Modern CI/CD automated deployment',
      'Post-launch SLA & warranty support'
    ]
  },
  {
    badge: 'MODEL // 03',
    title: 'Advisory & Cloud Modernization',
    desc: 'High-level technology consulting for legacy migration, cloud infrastructure optimization, AI strategy, and SOC2/HIPAA compliance preparation.',
    points: [
      'Comprehensive architectural audits',
      'Zero-trust security & compliance roadmaps',
      'Cloud cost & performance optimization',
      'Custom AI & data pipeline strategy'
    ]
  }
];

// 5-Stage Engineering Lifecycle
const LIFECYCLE_STAGES = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    desc: 'Requirement analysis, technical specification, cloud infrastructure design, and project roadmap.'
  },
  {
    step: '02',
    title: 'Agile Sprint Engineering',
    desc: 'Iterative 2-week development sprints with continuous code reviews, unit tests, and live staging demos.'
  },
  {
    step: '03',
    title: 'QA & Security Audit',
    desc: 'Automated integration testing, OWASP vulnerability scanning, penetration tests, and performance tuning.'
  },
  {
    step: '04',
    title: 'CI/CD Cloud Launch',
    desc: 'Production release via automated GitHub/GitLab pipelines into AWS, Azure, or private cloud environments.'
  },
  {
    step: '05',
    title: '24/7 SRE & Scale',
    desc: 'Continuous cloud monitoring, incident response, feature enhancements, and proactive infrastructure scaling.'
  }
];

// 11 Core Domains
const ECOSYSTEM_TAXONOMY = [
  {
    id: 'software',
    index: 'PRACTICE // 01',
    title: 'Custom Software & Web Engineering',
    desc: 'Full-stack web applications, distributed APIs, native iOS/Android mobile apps, and enterprise software platforms.',
    capabilities: [
      'Frontend (Next.js, React, TypeScript)',
      'Backend (Node.js, Python, Go, Java, C#)',
      'Native iOS (Swift) & Android (Kotlin)',
      'Modern REST & GraphQL Microservices',
      'Legacy System Modernization'
    ]
  },
  {
    id: 'ai',
    index: 'PRACTICE // 02',
    title: 'AI, Cognitive & Data Science',
    desc: 'Private on-premise AI models, automated enterprise agents, predictive analytics, and computer vision systems.',
    capabilities: [
      'Private Enterprise LLMs & Document AI',
      'Automated Workflow & Task Agents',
      'Computer Vision & OCR Inspection',
      'Snowflake, Databricks & BigQuery Warehousing',
      'Real-Time Reporting & Business Intelligence'
    ]
  },
  {
    id: 'robotics',
    index: 'PRACTICE // 03',
    title: 'Robotics, IoT & Embedded Systems',
    desc: 'Autonomous mobile robots (AMRs), industrial automation systems, microcontroller firmware, and connected IoT sensors.',
    capabilities: [
      'ROS 2 Autonomous Fleet Software',
      'Industrial Robotics & Assembly Automation',
      'Embedded Microcontroller Firmware (C/C++)',
      'Industrial IIoT & SCADA Integration',
      'Fleet Telematics & Tracking Systems'
    ]
  },
  {
    id: 'cloud',
    index: 'PRACTICE // 04',
    title: 'Cloud Computing & DevOps',
    desc: 'AWS, Azure, and Google Cloud infrastructure, Kubernetes containerization, and automated deployment pipelines.',
    capabilities: [
      'Multi-Cloud Setup (AWS, Azure, Google Cloud)',
      'Kubernetes, Docker & Terraform as Code',
      'Automated CI/CD Deployment Pipelines',
      '24/7 Cloud Monitoring & SRE Support',
      'Cost Optimization & High Availability'
    ]
  },
  {
    id: 'security',
    index: 'PRACTICE // 05',
    title: 'Cybersecurity & Compliance',
    desc: 'Zero-trust network security, penetration testing, vulnerability audits, and SOC2 / ISO 27001 compliance prep.',
    capabilities: [
      'Penetration Testing & Security Audits',
      'Zero-Trust Network Architecture',
      'Identity & Access Management (IAM)',
      'SOC2 Type II & ISO 27001 Readiness',
      'Data Encryption & Threat Mitigation'
    ]
  },
  {
    id: 'network',
    index: 'PRACTICE // 06',
    title: 'Networking & Telecommunications',
    desc: 'Enterprise network engineering, SD-WAN deployments, private wireless networks, and office connectivity.',
    capabilities: [
      'Enterprise SD-WAN & Network Routing',
      'Private 5G / Wireless Network Setup',
      'Datacenter & Office Interconnects',
      'Satellite & Remote Internet Solutions',
      'High-Availability Load Balancing'
    ]
  },
  {
    id: 'database',
    index: 'PRACTICE // 07',
    title: 'Database & Storage Architecture',
    desc: 'PostgreSQL, MySQL, NoSQL, and vector database engineering for high-speed transactions and analytics.',
    capabilities: [
      'PostgreSQL, MySQL & SQL Server Tuning',
      'Vector Databases for AI Search',
      'In-Memory Redis & Caching Layers',
      'Cloud Storage & Disaster Recovery Backups',
      'High-Speed Database Sharding'
    ]
  },
  {
    id: 'web3',
    index: 'PRACTICE // 08',
    title: 'Web3 & Blockchain Engineering',
    desc: 'Smart contract development, decentralized applications, and private business consortium ledgers.',
    capabilities: [
      'Smart Contract Engineering & Auditing',
      'Decentralized Application (dApp) Development',
      'Digital Asset & Wallet Integration',
      'Enterprise Private Consortium Ledgers',
      'Cryptographic Verification Systems'
    ]
  },
  {
    id: 'uiux',
    index: 'PRACTICE // 09',
    title: 'UI/UX Design & Digital Products',
    desc: 'Product design, design systems, executive dashboard UX, and mobile user experience optimization.',
    capabilities: [
      'Enterprise Design Systems & UI Kits',
      'Executive Dashboard & Portal UX',
      'Mobile App UI/UX Design',
      'User Research & High-Fidelity Prototyping',
      'Accessibility & Usability Testing'
    ]
  },
  {
    id: 'enterprise_tech',
    index: 'PRACTICE // 10',
    title: 'Enterprise Systems & ERP',
    desc: 'Modernization, integration, and custom workflow development for SAP, Salesforce, and ServiceNow.',
    capabilities: [
      'SAP Cloud Migration & Customization',
      'Salesforce CRM Architecture & Workflows',
      'ServiceNow Enterprise IT Management',
      'Supply Chain & ERP Integrations',
      'Business Process Automation'
    ]
  },
  {
    id: 'emerging',
    index: 'PRACTICE // 11',
    title: 'Emerging Technologies & Innovation',
    desc: 'Digital twin modeling, smart automation prototypes, and custom deep-tech engineering solutions.',
    capabilities: [
      'Industrial Digital Twin Simulations',
      'Custom Machine Learning Prototypes',
      'Smart Device & Hardware Integration',
      'Data-Driven Decision Systems',
      'Energy-Efficient IT Architecture'
    ]
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  // Real-time filtering across the 11 domains
  const filteredDomains = useMemo(() => {
    if (!searchQuery) return ECOSYSTEM_TAXONOMY;
    const q = searchQuery.toLowerCase();
    return ECOSYSTEM_TAXONOMY.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q) ||
        d.capabilities.some((c) => c.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
  };

  return (
    <div className={styles.pageContainer}>
      {/* =========================================================================
          1. CLEAN & CENTERED HERO WITH SEAMLESS TECH PENCIL SKETCH PATTERN
          ========================================================================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>TOTAL TECH // ENTERPRISE TECHNOLOGY & SOFTWARE CONSULTING</span>
            </div>

            <h1 className={styles.heroTitle}>
              Custom Software Engineering & Cloud <span>Transformation for Enterprise Scale.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Total Tech Technologies engineers high-performance software platforms, private enterprise AI, and resilient cloud architectures for leading US businesses, mid-market innovators, and global enterprises.
            </p>

            <div className={styles.heroButtons}>
              <a href="#services" className={styles.btnPrimary}>
                <span>EXPLORE CAPABILITIES</span>
                <span>→</span>
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                <span>SCHEDULE ADVISORY REVIEW</span>
              </a>
            </div>
          </div>

          {/* 4 Clean Light Practice Highlights */}
          <div className={styles.heroPillarsGrid}>
            {HERO_PILLARS.map((pillar, idx) => (
              <div key={idx} className={styles.heroPillarCard}>
                <div>
                  <div className={styles.pillarCode}>{pillar.code}</div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                </div>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          "INDUSTRIES WE TRANSFORM" RAIL
          ========================================================================= */}
      <div className={styles.industriesRail}>
        <div className={styles.industriesInner}>
          <div className={styles.industriesLabel}>INDUSTRIES WE TRANSFORM:</div>
          <div className={styles.industriesList}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className={styles.industryItem}>
                <span>■</span>
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          DELIVERY BLUEPRINT & ENGAGEMENT MODELS
          ========================================================================= */}
      <section className={styles.deliverySection}>
        <div className={styles.sectionContainer}>
          <div>
            <span className={styles.sectionPre}>Flexible Engagement</span>
            <h2 className={styles.sectionTitle}>How We Partner With You.</h2>
          </div>

          <div className={styles.deliveryGrid}>
            {DELIVERY_MODELS.map((model, idx) => (
              <div key={idx} className={styles.deliveryCard}>
                <div>
                  <div className={styles.deliveryBadge}>{model.badge}</div>
                  <h3 className={styles.deliveryTitle}>{model.title}</h3>
                  <p className={styles.deliveryDesc}>{model.desc}</p>
                </div>
                <ul className={styles.deliveryPoints}>
                  {model.points.map((pt, pIdx) => (
                    <li key={pIdx} className={styles.deliveryPointItem}>
                      <span style={{ color: 'var(--blue-500)' }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5-STAGE ENGINEERING LIFECYCLE (CLEAN ICE BLUE SURFACE)
          ========================================================================= */}
      <section className={styles.lifecycleSection}>
        <div className={styles.sectionContainer}>
          <div>
            <span className={styles.sectionPre}>Proven Methodology</span>
            <h2 className={styles.sectionTitle}>The Engineering Lifecycle.</h2>
          </div>

          <div className={styles.lifecycleGrid}>
            {LIFECYCLE_STAGES.map((stage, sIdx) => (
              <div key={sIdx} className={styles.lifecycleCard}>
                <div className={styles.lifecycleStep}>{stage.step}</div>
                <div>
                  <h3 className={styles.lifecycleTitle}>{stage.title}</h3>
                  <p className={styles.lifecycleDesc}>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES & CAPABILITIES DIRECTORY
          ========================================================================= */}
      <section className={styles.ecosystemSection} id="services">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionPre}>Full Capability Directory</span>
              <h2 className={styles.sectionTitle}>Our Services & Capabilities.</h2>
            </div>

            {/* Real-time Domain Search Bar */}
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search across all services (e.g., React, AI, AWS, Mobile)..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 11 Practice Grid */}
          <div className={styles.ecosystemGrid}>
            {filteredDomains.map((domain) => (
              <div key={domain.id} className={styles.domainCard}>
                <div>
                  <div className={styles.domainIndex}>{domain.index}</div>
                  <h3 className={styles.domainTitle}>{domain.title}</h3>
                  <p className={styles.domainDesc}>{domain.desc}</p>
                </div>

                <ul className={styles.subCapabilityList}>
                  {domain.capabilities.map((cap, i) => (
                    <li key={i} className={styles.subCapabilityItem}>
                      <span style={{ color: 'var(--blue-500)' }}>■</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES WITH REAL UNSPLASH PHOTOGRAPHY
          ========================================================================= */}
      <section className={styles.caseStudiesSection} id="case-studies">
        <div className={styles.sectionContainer}>
          <div style={{ marginBottom: '48px' }}>
            <span className={styles.sectionPre}>Proven Work</span>
            <h2 className={styles.sectionTitle}>Featured Client Solutions.</h2>
          </div>

          <div className={styles.caseGrid}>
            {/* Case 01: Robotics */}
            <div className={styles.caseCard}>
              <div className={styles.caseImageWrapper}>
                <Image
                  src="/images/robotics-automation.jpg"
                  alt="Warehouse AMR Robotics Fleet Controller"
                  width={800}
                  height={450}
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.caseHeader}>
                <div className={styles.caseClient}>INDUSTRIAL AUTOMATION & LOGISTICS</div>
                <h3 className={styles.caseTitle}>Warehouse AMR Fleet Controller</h3>
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseDesc}>
                  Engineered custom fleet coordinator software connecting autonomous mobile robots across fulfillment hubs with real-time route optimization.
                </p>
                <div>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Real-Time</div>
                      <div className={styles.impactLbl}>Fleet Dispatch</div>
                    </div>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Automated</div>
                      <div className={styles.impactLbl}>Route Optimization</div>
                    </div>
                  </div>
                  <div className={styles.caseStack}>
                    <span className={styles.stackBadge}>ROS 2</span>
                    <span className={styles.stackBadge}>C++20</span>
                    <span className={styles.stackBadge}>Python</span>
                    <span className={styles.stackBadge}>IoT Sensors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 02: Fintech Platform */}
            <div className={styles.caseCard}>
              <div className={styles.caseImageWrapper}>
                <Image
                  src="/images/cloud-fintech.jpg"
                  alt="Secure Multi-Cloud Web Platform"
                  width={800}
                  height={450}
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.caseHeader}>
                <div className={styles.caseClient}>FINANCIAL & ENTERPRISE PLATFORM</div>
                <h3 className={styles.caseTitle}>Secure Multi-Cloud Web Platform</h3>
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseDesc}>
                  Engineered a modern web portal and API backend with automated cloud failover, end-to-end data encryption, and high-volume transaction processing.
                </p>
                <div>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Secure</div>
                      <div className={styles.impactLbl}>Zero-Trust Auth</div>
                    </div>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Multi-Cloud</div>
                      <div className={styles.impactLbl}>High Availability</div>
                    </div>
                  </div>
                  <div className={styles.caseStack}>
                    <span className={styles.stackBadge}>Next.js</span>
                    <span className={styles.stackBadge}>Node.js</span>
                    <span className={styles.stackBadge}>AWS</span>
                    <span className={styles.stackBadge}>PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 03: Healthcare AI */}
            <div className={styles.caseCard}>
              <div className={styles.caseImageWrapper}>
                <Image
                  src="/images/healthcare-ai.jpg"
                  alt="Private AI Search & Document Intelligence"
                  width={800}
                  height={450}
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.caseHeader}>
                <div className={styles.caseClient}>HEALTHCARE & LIFE SCIENCES</div>
                <h3 className={styles.caseTitle}>Private AI Search & Document Intelligence</h3>
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseDesc}>
                  Deployed a private, secure AI knowledge base search engine allowing medical research teams to instantly query millions of documents.
                </p>
                <div>
                  <div className={styles.impactMetrics}>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Private AI</div>
                      <div className={styles.impactLbl}>HIPAA Compliant</div>
                    </div>
                    <div className={styles.impactBox}>
                      <div className={styles.impactVal}>Fast Search</div>
                      <div className={styles.impactLbl}>Semantic Query</div>
                    </div>
                  </div>
                  <div className={styles.caseStack}>
                    <span className={styles.stackBadge}>Python</span>
                    <span className={styles.stackBadge}>Vector Search</span>
                    <span className={styles.stackBadge}>FastAPI</span>
                    <span className={styles.stackBadge}>Secure Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING STANDARDS (CLEAN WHITE SURFACE)
          ========================================================================= */}
      <section className={styles.governanceSection} id="standards">
        <div className={styles.sectionContainer}>
          <div className={styles.govGrid}>
            <div>
              <span className={styles.sectionPre}>Quality & Assurance</span>
              <h2 className={styles.sectionTitle} style={{ fontSize: '2.2rem' }}>
                Engineering Standards & Reliability.
              </h2>
              <p style={{ color: 'var(--blue-800)', fontSize: '14.5px', lineHeight: '1.65', marginTop: '14px' }}>
                Our engineering practices follow strict modern software development lifecycle (SDLC) standards to ensure your applications are secure, maintainable, and built to scale.
              </p>

              <table className={styles.govTable}>
                <thead>
                  <tr>
                    <th>PRACTICE AREA</th>
                    <th>OUR STANDARD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Code Quality</td>
                    <td>Strict TypeScript, Automated Unit & Integration Testing</td>
                  </tr>
                  <tr>
                    <td>Security Baseline</td>
                    <td>Zero-Trust IAM, OWASP Top 10 Auditing & Secrets Management</td>
                  </tr>
                  <tr>
                    <td>Deployment CI/CD</td>
                    <td>Automated GitHub Actions / GitLab Pipelines</td>
                  </tr>
                  <tr>
                    <td>Infrastructure as Code</td>
                    <td>Terraform & Docker for Reproducible Environments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Compliance Frameworks */}
            <div>
              <table className={styles.govTable}>
                <thead>
                  <tr>
                    <th>COMPLIANCE READINESS</th>
                    <th>FRAMEWORK SCOPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SOC2 Type II</td>
                    <td>Security, Availability & Confidentiality Controls</td>
                  </tr>
                  <tr>
                    <td>ISO/IEC 27001</td>
                    <td>Information Security Management Systems</td>
                  </tr>
                  <tr>
                    <td>HIPAA Security</td>
                    <td>Protected Health Information Architecture</td>
                  </tr>
                  <tr>
                    <td>GDPR / CCPA</td>
                    <td>Data Privacy & User Consent Compliance</td>
                  </tr>
                  <tr>
                    <td>NIST Framework</td>
                    <td>Cybersecurity Assessment & Defense</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT & CONSULTATION
          ========================================================================= */}
      <section className={styles.consultationSection} id="contact">
        <div className={styles.consultationContainer}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--blue-800)', fontWeight: 800 }}>
              Let’s Build Something Great Together
            </h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue-500)', fontWeight: 700 }}>
              CLIENT CONSULTATION
            </span>
          </div>

          {!consultationSubmitted ? (
            <form onSubmit={handleConsultationSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name / Company</label>
                <input type="text" placeholder="John Doe, Acme Corp" required className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input type="email" placeholder="john@company.com" required className={styles.formInput} />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service Needed</label>
                <select className={styles.formSelect}>
                  <option>Custom Web & Mobile Development</option>
                  <option>AI & Machine Learning Solutions</option>
                  <option>Robotics & Industrial Automation</option>
                  <option>Cloud Infrastructure & DevOps</option>
                  <option>Cybersecurity & Code Audits</option>
                  <option>Other Custom Technology Project</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Estimated Timeline</label>
                <select className={styles.formSelect}>
                  <option>Immediate / Next 1–2 Months</option>
                  <option>Quarterly Project (3–6 Months)</option>
                  <option>Long-Term Dedicated Co-Engineering</option>
                </select>
              </div>

              <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}>
                <label className={styles.formLabel}>Project Details / How Can We Help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project goals, tech stack preferences, or any specific requirements..."
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button type="submit" className={styles.btnPrimary}>
                  <span>SEND MESSAGE</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          ) : (
            <div style={{ padding: '48px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--blue-500)', marginBottom: '12px' }}>
                ✓ THANK YOU FOR REACHING OUT!
              </div>
              <p style={{ color: 'var(--blue-800)', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                We have received your message. A technical consultant from our team will reach back out to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          GLOBAL HUBS & CORPORATE FOOTER
          ========================================================================= */}
      <footer className={styles.footerSection}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div>
            <div className={styles.footerBrandTitle}>
              TOTAL<span>TECH</span>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: '1.65', maxWidth: '280px', marginBottom: '24px' }}>
              Custom enterprise software engineering, AI solutions, robotics, and cloud consulting for American businesses.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue-100)' }}>
              GLOBAL ENTERPRISE IT ARCHITECTURE & SOFTWARE CONSULTING
            </div>
          </div>

          {/* Pillars 1-3 */}
          <div>
            <div className={styles.footerColTitle}>Engineering Services</div>
            <ul className={styles.footerList}>
              <li><Link href="#services" className={styles.footerLink}>Custom Web & Mobile</Link></li>
              <li><Link href="#services" className={styles.footerLink}>AI & Machine Learning</Link></li>
              <li><Link href="#services" className={styles.footerLink}>Robotics & Automation</Link></li>
              <li><Link href="#services" className={styles.footerLink}>Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Pillars 4-6 */}
          <div>
            <div className={styles.footerColTitle}>Solutions</div>
            <ul className={styles.footerList}>
              <li><Link href="#services" className={styles.footerLink}>Cybersecurity Audits</Link></li>
              <li><Link href="#services" className={styles.footerLink}>Enterprise ERP & CRM</Link></li>
              <li><Link href="#services" className={styles.footerLink}>Database Architecture</Link></li>
              <li><Link href="#services" className={styles.footerLink}>UI/UX Product Design</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div className={styles.footerColTitle}>Company</div>
            <ul className={styles.footerList}>
              <li><Link href="#services" className={styles.footerLink}>Services</Link></li>
              <li><Link href="#case-studies" className={styles.footerLink}>Case Studies</Link></li>
              <li><Link href="#standards" className={styles.footerLink}>Standards & Security</Link></li>
              <li><Link href="#contact" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>

          {/* US Contact Info */}
          <div>
            <div className={styles.footerColTitle}>Get in Touch</div>
            <ul className={styles.footerList}>
              <li><span style={{ color: '#FFFFFF', fontWeight: 600 }}>Advisory:</span> Enterprise Client Intake</li>
              <li><span style={{ color: '#FFFFFF', fontWeight: 600 }}>Phone:</span> +1 (800) 840-TECH</li>
              <li><span style={{ color: '#FFFFFF', fontWeight: 600 }}>Email:</span> hello@totaltech.io</li>
              <li style={{ marginTop: '8px' }}>
                <a href="#contact" style={{ color: 'var(--blue-300)', fontSize: '13px', fontWeight: 700 }}>
                  → Schedule Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div>© 2026 Total Tech Technologies Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Statement</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
