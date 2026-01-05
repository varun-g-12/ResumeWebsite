// Resume data imported from varun-g.json
// This file provides clean exports for components to consume

const resumeData = {
  "basics": {
    "name": "Varun G",
    "headline": "GenAI Developer",
    "email": "varungangu1@gmail.com",
    "phone": "+91-9731416185",
    "location": "Bengaluru",
    "linkedin": "https://www.linkedin.com/in/varun-g-1b6757343",
    "medium": "https://medium.com/@varungangu1"
  },
  "summary": "GenAI Developer specializing in enterprise AI solutions with 4+ years of Python development experience. Proven track record of reducing operational time by 95% through AI-powered automation (GRD project). Expert in building RAG-based chatbots, document processing pipelines, and data extraction systems using Langchain, Langgraph, and GPT-4o. Awarded for innovative AI solutions at MITC Hackathon 2024.",
  "experience": [
    {
      "company": "Merck Group",
      "position": "GenAI developer",
      "location": "Bengaluru",
      "date": "2024-Present",
      "highlights": [
        "Proficient in developing AI-powered applications with a focus on Generative AI.",
        "Expertise in building conversational AI systems, document processing pipelines, and data extraction solutions.",
        "Hands-on experience with Langchain, Langgraph and vector databases like Qdrant for efficient document retrieval and multi-modal data access.",
        "Proven ability to optimize complex processes, significantly improving operational efficiency and reducing task completion times.",
        "Award-winning innovator, recognized for delivering cutting-edge AI solutions in hackathons and internal competitions."
      ]
    },
    {
      "company": "Merck Group",
      "position": "Python developer",
      "location": "Bengaluru",
      "date": "2021-2024",
      "highlights": [
        "Engineered and implemented a comprehensive end-to-end data transformation pipeline, revolutionising the company's data processing capabilities.",
        "Developed robust Python scripts to extract and parse complex, multi-sheet Excel files, handling various data formats and inconsistencies",
        "Implemented data cleaning and validation procedures, including handling of missing values and data type standardization, ensuring data integrity",
        "Integrated automated data quality checks and error logging mechanisms, significantly reducing manual intervention and improving data reliability",
        "Enabled the creation of interactive Tableau dashboards and reports, empowering stakeholders with real-time, data-driven insights for strategic decision-making"
      ]
    },
    {
      "company": "Merck Group",
      "position": "Application support engineer",
      "location": "Bengaluru",
      "date": "2019-2021",
      "highlights": [
        "Started professional career as an Application Support Engineer, demonstrating strong technical foundation and problem-solving skills",
        "Provided comprehensive support for both GxP (Good Practice) and Non-GxP applications, ensuring regulatory compliance and operational efficiency",
        "Developed expertise in critical process workflows, including Request for Change (RFC) and change management procedures, contributing to streamlined operations and risk mitigation"
      ]
    }
  ],
  "projects": [
    {
      "name": "BrAIn (Breeze AI Navigator)",
      "description": "GenAI Chatbot",
      "date": "April 2023 - Feb 2024",
      "summary": "Developed an AI chatbot with access to Breeze SOPs and training documents, supported by an automated data ingestion pipeline using AWS Lambda, S3, and SharePoint. Leveraging Azure OpenAI's text-embedding-3-large model and Qdrant DB, we built a vector store for efficient document retrieval. The chatbot's interface was created using Streamlit with a Python and Langchain backend, incorporating multi-vector retrieval for parent-child document relationships and context-aware conversations using router and question reframe chains. Powered by the GPT-4o model, the chatbot delivers accurate responses with a citation system providing page-level references from source documents.",
      "keywords": ["Python", "Azure OpenAI", "Qdrant", "Streamlit", "Langchain", "SharePoint", "AWS", "Lambda", "S3"]
    },
    {
      "name": "PACO (Protocol Analysis for Complexity Optimisation)",
      "description": "GenAI Data Extraction App",
      "date": "Dec 2023 - March 2024",
      "summary": "Developed an AI-powered application to extract structured data from unstructured Word and PDF documents, featuring a document processing pipeline using PyMuPDF and the Unstructured library. The application included a user-friendly Streamlit interface for document uploading and result downloading. Custom system prompts were engineered for various extraction tasks, including JSON schema specifications, and Langchain's structured output function ensured consistent JSON-formatted results. Powered by the GPT-4o model for high-accuracy information extraction, the app implemented a batch processing system to parallelize tasks and improve efficiency. Additionally, we developed a conversion process to transform extracted JSON data into a downloadable Excel format for easy user review.",
      "keywords": ["Python", "Langchain", "Streamlit", "PyMuPDF", "Unstructured", "GPT-4o", "JSON", "Excel"]
    },
    {
      "name": "GRD (Global Response Document)",
      "description": "GenAI Summarisation App",
      "date": "Aug 2024-Oct 2025",
      "summary": "Developed an AI-powered application to generate Global Response Documents (GRDs) for healthcare professionals, reducing the GRD creation time from 3–4 hours to just 10–20 minutes. The solution included a document preprocessing pipeline using PyMuPDF for text extraction and AWS Textract for table extraction. Tailored system prompts were created based on user-selected Therapeutic Area (TA), product, and GRD type, while a batch processing system enabled efficient multi-page document handling. Using a single-shot prompting approach, the application maintained a scientific tone and format. Integrated with the GPT-4o model via Langchain for both data extraction and summarization, the app featured a Streamlit-based user interface for easy interaction and document uploading. It also provided a citation system for page-level references and generated output in downloadable Word format for seamless distribution and editing.",
      "keywords": ["Python", "Langchain", "Streamlit", "PyMuPDF", "AWS Textract", "GPT-4o"]
    },
    {
      "name": "MiNE MCP",
      "description": "MCP setup for MiNE (exploration)",
      "date": "Aug 2025 - Present",
      "summary": "Took on the MCP server setup for MiNE project as an exploration/POC task.",
      "keywords": ["MCP", "LLM Agents", "AWS"]
    },
    {
      "name": "Text to SQL Conversational App",
      "description": "POC",
      "date": "2023-2024",
      "summary": "Developed a proof-of-concept application enabling natural language queries on Foundry data tables, featuring a conversational AI system using the GPT-4o model and Langgraph for agentic workflows. A SQL query agent was designed to convert natural language inputs into accurate SQL queries, supported by a custom tool to execute these queries on Foundry tables and retrieve relevant data. An answer agent analyzed query results and generated human-readable responses. The application included a Streamlit-based interface for seamless user interaction, integrating table schema information and custom system prompts to improve query accuracy and enhance data accessibility through natural language interaction.",
      "keywords": ["Python", "Langgraph", "Streamlit", "GPT-4o", "SQL", "Foundry"]
    },
    {
      "name": "MiNE",
      "description": "Report generation tool",
      "date": "Oct 2025 - Present",
      "summary": "Built an AI-powered tool that automatically creates reports by gathering information from multiple sources (social media, scientific articles, and medical data). Designed a two-step process: first, the system extracts key information from user questions to quickly filter through millions of database records; second, it uses smart retrieval methods to find the most relevant data and generate accurate reports.",
      "keywords": ["Foundry", "Qdrant", "Langchain", "Streamlit", "RAG"]
    }
  ],
  "skills": [
    {
      "category": "Programming language",
      "keywords": ["Python"]
    },
    {
      "category": "Generative AI",
      "keywords": ["Large Language Models (LLM)", "Prompt engineering", "Langchain", "Langraph"]
    },
    {
      "category": "Cloud & DevOps",
      "keywords": ["AWS", "Git", "Docker"]
    },
    {
      "category": "Web Development",
      "keywords": ["Streamlit"]
    },
    {
      "category": "Project Management",
      "keywords": ["Agile methodologies"]
    }
  ],
  "education": [
    {
      "institution": "UAS, Dharwad",
      "degree": "B.Sc.",
      "field": "Agriculture",
      "score": "7.25",
      "date": "2014 - 2016"
    },
    {
      "institution": "G.K.V.K Bengaluru",
      "degree": "M.Sc.",
      "field": "Agriculture Statistics",
      "score": "8.2",
      "date": "2016-2018"
    }
  ],
  "awards": [
    {
      "title": "Be Curious and Innovate Boldly Award",
      "awarder": "Runner-up",
      "date": "2024"
    },
    {
      "title": "MITC Hackathon",
      "awarder": "Runner-up",
      "date": "2024"
    }
  ],
  "languages": [
    {
      "name": "Kannada",
      "level": 5
    },
    {
      "name": "English",
      "level": 5
    },
    {
      "name": "Hindi",
      "level": 2
    }
  ]
};

// Helper function to get language proficiency label
export const getLanguageLevel = (level) => {
  const levels = {
    1: 'Beginner',
    2: 'Elementary',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Native / Fluent'
  };
  return levels[level] || 'Unknown';
};

// Export individual sections for easy component access
export const basics = resumeData.basics;
export const summary = resumeData.summary;
export const experience = resumeData.experience;
export const projects = resumeData.projects;
export const skills = resumeData.skills;
export const education = resumeData.education;
export const awards = resumeData.awards;
export const languages = resumeData.languages;

// Export everything
export default resumeData;
