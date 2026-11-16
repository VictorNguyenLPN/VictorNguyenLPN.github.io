export interface Publication {
  id: string;
  title: string;
  venue: string;
  venueBadge?: string;
  award?: string;
  authors: string;
  githubUrl?: string;
  siteUrl?: string;
  siteTitle?: string;
  bibtex: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'demo' | 'github';
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  bullets: string[];
  technologies: string;
  links: ProjectLink[];
  highlight?: {
    label: string;
    text: string;
    tone: 'award' | 'note';
  };
}

export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  organization: string;
  organizationUrl: string;
  bullets: string[];
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'academic-mail' | 'github' | 'cv' | 'linkedin' | 'orcid';
  external?: boolean;
}

export interface MemoryPhoto {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition: string;
}

export const CV_URL =
  'https://drive.google.com/file/d/1rFibj9zdKVIfTgW2YhETGfWVq34bry5J/view?usp=sharing';

export const PROFILE_LINKS = {
  personalEmail: 'nqhuy.aie@gmail.com',
  academicEmail: 'nguyenquanghuy.st@tdtu.edu.vn',
  github: 'https://github.com/VictorNguyenLPN',
  linkedin: 'https://www.linkedin.com/in/nguyenquanghuy040805/',
  orcid: 'https://orcid.org/0009-0003-3203-0415',
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 'tdtu-tarvileg',
    title: 'TDTU-TARViLeg: A Benchmark for Time-Aware Vietnamese Legal Retrieval',
    venue:
      'Under review · [ICCIES 2027] 3rd International Conference on Computational Intelligence in Engineering Science',
    venueBadge: 'Scopus Indexed',
    authors: 'Phan, T. H., Nguyen, Q. H., Le, N. H., Le, D. D., Duong, T.-C., & Le, A.-C.',
    siteUrl: 'https://iccies.tdtu.edu.vn/',
    siteTitle: 'ICCIES Conference Website',
    bibtex: `@inproceedings{phan2027tarvileg,
  title     = {TDTU-TARViLeg: A Benchmark for Time-Aware Vietnamese Legal Retrieval},
  author    = {Phan, Tri Hieu and Nguyen, Quang Huy and Le, N. H. and Le, Dong Duong and Duong, Trong-Chi and Le, Anh-Cuong},
  booktitle = {Proceedings of the 3rd International Conference on Computational Intelligence in Engineering Science (ICCIES 2027)},
  year      = {2027},
  note      = {Under review}
}`,
  },
  {
    id: 'tdtu-vilegalreb',
    title: 'TDTU-ViLegalREB: Vietnamese Legal Retrieval Embedding Benchmark',
    venue:
      'Under review · [ACIIDS 2027] 19th Asian Conference on Intelligent Information and Database Systems',
    venueBadge: 'CORE Rank B, Scopus Indexed',
    authors: 'Nguyen, Q. H., Phan, T. H., Le, D. D., Duong, T.-C., & Le, A.-C.',
    siteUrl: 'https://aciids.pwr.edu.pl/',
    siteTitle: 'ACIIDS Conference Website',
    bibtex: `@inproceedings{nguyen2027vilegalreb,
  title     = {ViLegalREB: Vietnamese Legal Retrieval Embedding Benchmark},
  author    = {Nguyen, Quang Huy and Phan, Tri Hieu and Le, Dong Duong and Duong, Trong-Chi and Le, Anh-Cuong},
  booktitle = {Proceedings of the 19th Asian Conference on Intelligent Information and Database Systems (ACIIDS 2027)},
  year      = {2027},
  note      = {Under review}
}`,
  },
  {
    id: 'falcon',
    title:
      'FALCON: Forensic-Aware Language-Guided Contrastive Learning for Generalized Synthetic Image Detection',
    venue:
      '[FITAT 2026] 18th International Conference on Frontiers of Information Technology, Applications and Tools',
    venueBadge: 'Scopus Indexed',
    award: 'Outstanding Paper Award',
    authors: 'Nguyen, Q. H., Ryu, K. H., Delina, M., & Pham, V. H.',
    githubUrl: 'https://github.com/VictorNguyenLPN/FALCON',
    siteUrl: 'https://fitat.org/',
    siteTitle: 'FITAT Conference Website',
    bibtex: `@misc{nguyen2026falcon,
  title  = {FALCON: Forensic-Aware Language-guided Contrastive Learning for Generalized Synthetic Image Detection},
  author = {Nguyen, Quang Huy and Ryu, Keun Ho and Delina, Mutia and Pham, Van Huy},
  year   = {2026}
}`,
  },
  {
    id: 'asbw',
    title:
      'ASBW: A Frequency-Domain Analysis Approach for Distinguishing GAN-Generated Images from Real Images',
    venue:
      '[DCEST 2026] International Conference on Digital Convergence in Economics, Society and Technology, pp. 95–105',
    award: 'Best Presentation Award',
    authors: 'Nguyen, Q. H., & Pham, V. H. (2026)',
    githubUrl: 'https://github.com/VictorNguyenLPN/ASBW',
    siteUrl: 'https://www.dcest.org/',
    siteTitle: 'DCEST Conference Website',
    bibtex: `@inproceedings{nguyen2026asbw,
  title      = {ASBW: A Frequency-Domain Analysis Approach for Distinguishing GAN-Generated Images from Real Images},
  author     = {Nguyen, Quang Huy and Pham, Van Huy},
  booktitle  = {Proceedings of the Digital Convergence in Economics, Society and Technology (DCEST) 2026 International Conference},
  year       = {2026},
  pages      = {95-105}
}`,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'evidentia',
    title: 'Evidentia: Vietnamese Legal AI Agentic System',
    badge: 'Beta',
    description:
      'An agentic AI platform for Vietnamese legal search, automated consultation, and validity tracking.',
    bullets: [
      'Built an AI agent using LangGraph for Vietnamese legal search and Q&A.',
      'Integrated Graph and Vector retrieval to retrieve relevant legal documents and their relationships.',
      'Developed features for legal document lookup, validity checking, and version comparison.',
    ],
    technologies: 'Python, LangGraph, Vector Search, Knowledge Graph, FastAPI',
    links: [
      {
        label: 'evidentia.io.vn',
        url: 'https://evidentia.io.vn',
        type: 'demo',
        title: 'Evidentia Live Demo',
      },
    ],
    highlight: {
      label: 'Note',
      text: 'Computer Science Graduation Thesis',
      tone: 'note',
    },
  },
  {
    id: 'legal-rag',
    title: 'Legal RAG: Vietnamese Legal RAG Chatbot System',
    description:
      'A full-stack RAG chatbot for searching and answering questions about Vietnamese legal documents.',
    bullets: [
      'Built a full-stack legal chatbot with FastAPI, React, and TypeScript, supporting document upload and automatic indexing.',
      'Built a RAG pipeline with Gemini embeddings, BM25, and RRF for hybrid retrieval, with query rewriting and citation-based answers.',
    ],
    technologies: 'FastAPI, Python, React, TypeScript, Gemini API, BM25, RRF',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/VictorNguyenLPN/Legal-RAG',
        type: 'github',
        title: 'Legal-RAG on GitHub',
      },
    ],
  },
  {
    id: 'finsavy',
    title: 'FinSavy: AI-Driven Stock Investment & Anomaly Warning System',
    description: 'An AI system for stock analysis, price forecasting, and anomaly detection.',
    bullets: [
      'Built an anomaly detection system using Isolation Forest and Autoencoder.',
      'Built the ViBankACSA dataset with 1,462+ banking articles to train sentiment analysis models.',
      'Conducted experiments with LSTM, DLinear, and iTransformer, finding that adding sentiment features improved forecasting performance, achieving the best RMSE of 2.24.',
    ],
    technologies: 'PyTorch, BARTpho, Transformers, LLMs, Time-Series, Isolation Forest',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/CSSERT/FinSavyy',
        type: 'github',
        title: 'FinSavy on GitHub',
      },
    ],
    highlight: {
      label: 'Award',
      text: 'Third Prize, Student Scientific Research Competition, Ton Duc Thang University (2025)',
      tone: 'award',
    },
  },
  {
    id: 'datastorm',
    title: 'DataStorm',
    description: 'A full-stack analytics platform for FMCG demand forecasting.',
    bullets: [
      'Built RESTful APIs with FastAPI and PostgreSQL, optimized for performance with Redis caching.',
      'Integrated LLM-powered recommendations using Google Gemini and deployed services on AWS EC2, Render, and Vercel.',
    ],
    technologies:
      'Next.js, Tailwind CSS, shadcn/ui, FastAPI, PostgreSQL, Redis, Google Gemini, AWS EC2, Render, Vercel',
    links: [
      {
        label: 'Live Demo',
        url: 'https://datastorm-frontend.vercel.app/',
        type: 'demo',
        title: 'DataStorm Live Demo',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/DOM-ITCC/datastorm',
        type: 'github',
        title: 'DataStorm on GitHub',
      },
    ],
    highlight: {
      label: 'Award',
      text: 'Encouragement Prize, DataStorm 2025',
      tone: 'award',
    },
  },
  {
    id: 'airforce',
    title: 'AirForce',
    description:
      'Frontend Developer for an air quality monitoring and forecasting platform built for the NASA Space Apps Challenge 2025.',
    bullets: [
      'Integrated satellite and environmental datasets, with a geospatial visualization interface and forecasting pipelines.',
      'Applied LSTM models for AQI prediction.',
    ],
    technologies: 'React, Tailwind CSS, Node.js, Express.js, Flask, LSTM, Geospatial UI',
    links: [
      {
        label: 'Live Demo',
        url: 'https://airforceclient.vercel.app/',
        type: 'demo',
        title: 'AirForce Live Demo',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/DanielNguyen-05/AirForce',
        type: 'github',
        title: 'AirForce on GitHub',
      },
    ],
    highlight: {
      label: 'Award',
      text: 'Top 11 HCMC, NASA Space Apps Challenge 2025',
      tone: 'award',
    },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'intern',
    date: 'Jun 2026 - Present',
    role: 'Research Intern',
    organization: 'NLP & Knowledge Discovery Lab · Ton Duc Thang University',
    organizationUrl: 'https://it.tdtu.edu.vn/nlplab',
    bullets: [
      'Built web scrapers and ETL pipelines to collect and process large-scale legal text datasets.',
      'Researched and developed benchmarks for legal text embedding and retrieval models.',
    ],
  },
  {
    id: 'bsc',
    date: 'Sep 2023 - Present',
    role: 'B.Sc. Computer Science',
    organization: 'Ton Duc Thang University · Ho Chi Minh City',
    organizationUrl: 'https://tdtu.edu.vn/en',
    bullets: [
      'Third Prize, Student Scientific Research Competition, Ton Duc Thang University (2025)',
      'Encouragement Prize, Vietnam Datathon - DataStorm (2025)',
      'Encouragement Prize, Student AI Olympiad - Southern Region (2025)',
    ],
  },
  {
    id: 'highschool',
    date: 'Sep 2020 - May 2023',
    role: 'High School Diploma',
    organization: 'Thang Long High School for the Gifted · Da Lat City',
    organizationUrl: 'https://chuyenthanglongdalat.edu.vn/',
    bullets: [
      '3rd Prize, Provincial Excellent Student Competition, Lam Dong',
      'Member, Lam Dong Provincial Team for National Excellent Student Competition',
    ],
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'personal-email',
    label: 'Email',
    value: PROFILE_LINKS.personalEmail,
    href: `mailto:${PROFILE_LINKS.personalEmail}`,
    icon: 'mail',
  },
  {
    id: 'academic-email',
    label: 'Academic Email',
    value: PROFILE_LINKS.academicEmail,
    href: `mailto:${PROFILE_LINKS.academicEmail}`,
    icon: 'academic-mail',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'VictorNguyenLPN',
    href: PROFILE_LINKS.github,
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'nguyenquanghuy040805',
    href: PROFILE_LINKS.linkedin,
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'orcid',
    label: 'ORCID',
    value: '0009-0003-3203-0415',
    href: PROFILE_LINKS.orcid,
    icon: 'orcid',
    external: true,
  },
  {
    id: 'cv',
    label: 'Curriculum Vitae',
    value: 'View / Download CV',
    href: CV_URL,
    icon: 'cv',
    external: true,
  },
];

export const MEMORY_PHOTOS: MemoryPhoto[] = [
  {
    id: 'image4',
    src: 'images/image4.jpg',
    alt: 'Receiving the Outstanding Paper Award for FALCON at FITAT 2026',
    width: 1050,
    height: 1400,
    objectPosition: 'center 25%',
  },
  {
    id: 'image5',
    src: 'images/image5.jpg',
    alt: 'At Chungbuk National University (CBNU) during the academic conference trip',
    width: 1400,
    height: 1050,
    objectPosition: 'center 45%',
  },
  {
    id: 'image2',
    src: 'images/image2.jpg',
    alt: 'Receiving certificate on stage at DCEST 2026 International Conference',
    width: 960,
    height: 1280,
    objectPosition: 'center 22%',
  },
  {
    id: 'image3',
    src: 'images/image3.jpg',
    alt: 'Presenting research paper at the conference podium',
    width: 1050,
    height: 1400,
    objectPosition: 'center 20%',
  },
  {
    id: 'image1',
    src: 'images/image1.jpg',
    alt: 'Autumn foliage at Ulsan University campus during the research trip',
    width: 1050,
    height: 1400,
    objectPosition: 'center 25%',
  },
  {
    id: 'image7',
    src: 'images/image7.jpg',
    alt: 'Working on laptop during a tech competition',
    width: 1400,
    height: 934,
    objectPosition: 'center 25%',
  },
  {
    id: 'image8',
    src: 'images/image8.jpg',
    alt: 'Discussing the DataStorm demand forecasting report with teammates',
    width: 1020,
    height: 1020,
    objectPosition: 'center 30%',
  },
  {
    id: 'image6',
    src: 'images/image6.jpg',
    alt: 'On the Chungbuk National University campus plaza in autumn',
    width: 1050,
    height: 1400,
    objectPosition: 'center 28%',
  },
  {
    id: 'image9',
    src: 'images/image9.jpg',
    alt: 'Award ceremony at the 2019 Youth Innovation Competition',
    width: 540,
    height: 960,
    objectPosition: 'center 20%',
  },
  {
    id: 'image10',
    src: 'images/image10.jpg',
    alt: 'Playing volleyball under cherry blossoms',
    width: 1400,
    height: 934,
    objectPosition: 'center 45%',
  },
  {
    id: 'image11',
    src: 'images/image11.jpg',
    alt: 'Under cherry blossoms in Da Lat',
    width: 934,
    height: 1400,
    objectPosition: 'center 25%',
  },
  {
    id: 'image12',
    src: 'images/image12.jpg',
    alt: 'Holding a gray cat outdoors in Da Lat',
    width: 1050,
    height: 1400,
    objectPosition: 'center 22%',
  },
];

