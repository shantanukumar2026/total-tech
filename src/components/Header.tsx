"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

// 6 Core US Enterprise IT Practices
const ECOSYSTEM_DOMAINS = [
  {
    id: 'software',
    name: '01. Custom Software & Web',
    groups: [
      {
        title: 'Web & Applications',
        links: ['Next.js & React Enterprise', 'Node.js & Python Backend', 'Modern Web Platforms', 'API & Microservices']
      },
      {
        title: 'Mobile Development',
        links: ['iOS Apps (Swift)', 'Android Apps (Kotlin)', 'Cross-Platform Mobile', 'Enterprise Apps']
      },
      {
        title: 'Custom Engineering',
        links: ['Full-Stack Systems', 'Cloud Migration', 'Legacy Modernization', 'Database Architecture']
      }
    ]
  },
  {
    id: 'ai',
    name: '02. AI & Data Solutions',
    groups: [
      {
        title: 'Artificial Intelligence',
        links: ['Custom Enterprise LLMs', 'AI Agents & Automation', 'Document Intelligence', 'Model Integration']
      },
      {
        title: 'Computer Vision',
        links: ['Object Detection', 'Visual Quality Inspection', 'OCR & Document Scanning', 'Image Recognition']
      },
      {
        title: 'Data & Analytics',
        links: ['Data Warehousing & BI', 'Real-Time Data Pipelines', 'Predictive Analytics', 'Reporting Dashboards']
      }
    ]
  },
  {
    id: 'robotics',
    name: '03. Robotics & IoT',
    groups: [
      {
        title: 'Industrial Automation',
        links: ['Warehouse Automation', 'Robotics Software (ROS 2)', 'Machine Integration', 'Automated Logistics']
      },
      {
        title: 'Embedded Systems',
        links: ['Firmware Development', 'Microcontroller Logic', 'Hardware Prototyping', 'Real-Time Control']
      },
      {
        title: 'IoT Networks',
        links: ['Industrial IoT (IIoT)', 'Smart Sensor Arrays', 'Fleet Telematics', 'Facility Monitoring']
      }
    ]
  },
  {
    id: 'cloud',
    name: '04. Cloud & DevOps',
    groups: [
      {
        title: 'Cloud Infrastructure',
        links: ['AWS, Azure & Google Cloud', 'Kubernetes & Docker', 'Serverless Systems', 'Hybrid Cloud Setup']
      },
      {
        title: 'DevOps & CI/CD',
        links: ['Automated Deployment', 'Infrastructure as Code', '24/7 Monitoring & SRE', 'Disaster Recovery']
      },
      {
        title: 'Network Systems',
        links: ['Enterprise Networking', 'SD-WAN Setup', 'VPN & Remote Access', 'Load Balancing']
      }
    ]
  },
  {
    id: 'security',
    name: '05. Cybersecurity',
    groups: [
      {
        title: 'Security Audits',
        links: ['Penetration Testing', 'Vulnerability Assessments', 'Security Auditing', 'Code Review']
      },
      {
        title: 'Zero-Trust Defense',
        links: ['Identity & Access (IAM)', 'End-to-End Encryption', 'Network Segmentation', 'Endpoint Security']
      },
      {
        title: 'Compliance & Risk',
        links: ['SOC2 Type II Readiness', 'ISO 27001 Compliance', 'HIPAA Security', 'Data Privacy (GDPR/CCPA)']
      }
    ]
  },
  {
    id: 'enterprise',
    name: '06. Enterprise Solutions',
    groups: [
      {
        title: 'Business Platforms',
        links: ['SAP Cloud Integration', 'Salesforce CRM Setup', 'ERP Customization', 'Supply Chain Tech']
      },
      {
        title: 'IT Consulting',
        links: ['Digital Transformation', 'IT Strategy & Advisory', 'ServiceNow Enterprise', 'Vendor Management']
      },
      {
        title: 'Emerging Tech',
        links: ['Digital Twins', 'Smart Automation', 'Web3 & Blockchain', 'Green IT Solutions']
      }
    ]
  }
];

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const closeMenuWithDelay = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  const activeCategoryData = ECOSYSTEM_DOMAINS[selectedCategory];

  return (
    <header className={styles.headerContainer}>
      {/* Top US Corporate Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span>TOTAL TECH TECHNOLOGIES // USA ENTERPRISE IT CONSULTING</span>
        </div>
        <div className={styles.topBarRight}>
          <span>ENTERPRISE TECHNOLOGY CONSULTING & SOFTWARE ENGINEERING</span>
        </div>
      </div>

      {/* Main Corporate Bar */}
      <div className={styles.mainBar}>
        <Link href="/" className={styles.logoArea}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo_final_blue.png"
              alt="Total Tech Technologies"
              width={218}
              height={66}
              priority
              unoptimized
              className={styles.logoImg}
            />
          </div>
        </Link>

        {/* Simple & Clean US Corporate Navigation */}
        <nav className={styles.navMenu}>
          <div
            className={`${styles.navItem} ${megaMenuOpen ? styles.active : ''}`}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenuWithDelay}
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
          >
            <span>SERVICES</span>
            <svg style={{ marginLeft: '6px' }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <Link href="#case-studies" className={styles.navItem}>
            CASE STUDIES
          </Link>

          <Link href="#standards" className={styles.navItem}>
            STANDARDS & SECURITY
          </Link>

          <Link href="#contact" className={styles.navItem}>
            CONTACT US
          </Link>
        </nav>

        {/* Header Actions */}
        <div className={styles.headerActions}>
          <a href="#contact" className={styles.portalBtn}>
            CLIENT PORTAL
          </a>
          <a href="#contact" className={styles.consultBtn}>
            GET IN TOUCH
          </a>
        </div>

        {/* Spacious Full-Width Mega Menu Directly in MainBar with seamless hover bridge */}
        <div 
          className={`${styles.megaMenuFull} ${megaMenuOpen ? styles.visible : ''}`}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenuWithDelay}
        >
          <div className={styles.megaContentWrapper}>
            {/* Left: Domain Category Selector */}
            <div className={styles.megaSidebar}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', marginBottom: '12px', textTransform: 'uppercase', fontWeight: 700 }}>
                Our Practices
              </div>
              {ECOSYSTEM_DOMAINS.map((domain, idx) => (
                <button
                  key={domain.id}
                  className={`${styles.megaCategoryBtn} ${selectedCategory === idx ? styles.selectedCategory : ''}`}
                  onMouseEnter={() => setSelectedCategory(idx)}
                  onClick={(e) => { e.stopPropagation(); setSelectedCategory(idx); }}
                >
                  <span>{domain.name}</span>
                  <span>→</span>
                </button>
              ))}
            </div>

            {/* Center: Detailed 3-Column Service Grid */}
            <div className={styles.megaGridServices}>
              {activeCategoryData.groups.map((grp, i) => (
                <div key={i} className={styles.serviceGroup}>
                  <h4>{grp.title}</h4>
                  <ul className={styles.serviceList}>
                    {grp.links.map((link, lIndex) => (
                      <li key={lIndex}>
                        <Link href="#services" className={styles.serviceLink} onClick={() => setMegaMenuOpen(false)}>
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: Featured Corporate Practice Brief */}
            <div className={styles.megaFeaturedBox}>
              <div>
                <div className={styles.featuredTag}>US ADVISORY</div>
                <div className={styles.featuredHeading}>Custom Enterprise Engineering</div>
                <p className={styles.featuredText}>
                  We help American businesses build scalable web applications, deploy private AI tools, and modernize legacy IT systems.
                </p>
              </div>
              <Link href="#contact" className={styles.featuredLink} onClick={() => setMegaMenuOpen(false)}>
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
