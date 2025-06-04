// careers.js

const careers = [
    {
      id: 'career1',
      icon: '🔬',
      title: 'Environmental Scientist',
      salary: '$59K - $95K annually',
      description: 'Conduct research and analyze environmental problems, develop solutions for pollution control, and assess environmental impact of human activities.',
      education: 'Bachelor\'s degree in Environmental Science, Chemistry, Biology, or related field. Master\'s preferred for advanced positions. Available at most universities with strong science programs.',
      admissions: 'Admission typically requires strong grades in science and math courses, letters of recommendation, and relevant extracurricular activities such as science clubs or environmental volunteering.',
      dailyTasks: 'Collect environmental samples, analyze data, write reports, conduct field investigations, and collaborate with government agencies and private companies.',
      outlook: 'Excellent - 7% projected growth.',
      challenge: 'Extensive fieldwork and travel required.',
      quote: {
        text: "I was wondering about the company's approach to sustainability and environmental initiatives...",
        source: "https://workbred.co.uk/career/environmental-scientist?page=interview"
      },
      imageUrl: '/jobPics/envSci.png',
    },
    {
      id: 'career2',
      icon: '⚡',
      title: 'Renewable Energy Engineer',
      salary: '$75K - $130K annually',
      description: 'Design, develop, and implement renewable energy systems including solar, wind, and hydroelectric power installations.',
      education: 'Bachelor\'s in Mechanical, Electrical, or Environmental Engineering. Professional Engineer (PE) license preferred. Programs available at major engineering schools.',
      admissions: 'Strong foundation in mathematics and physics is essential; competitive applicants usually have high standardized test scores and relevant internships or projects in engineering or renewable energy.',
      dailyTasks: 'Design energy systems, conduct feasibility studies, oversee installations, optimize performance, and work with regulatory compliance.',
      outlook: 'Excellent - rapidly expanding field.',
      challenge: 'Direct impact on clean energy transition.',
      quote: {
        text: "Climate change is the greatest threat to our existence in our short history on this planet.",
        source: "https://curious.earth/blog/climate-change-quotes/"
      },
      imageUrl: '/jobPics/renewEner.png',
    },
    {
      id: 'career3',
      icon: '♻️',
      title: 'Sustainability Manager',
      salary: '$65K - $120K annually',
      description: 'Develop and implement sustainability strategies for organizations, manage environmental programs, and ensure compliance with environmental regulations.',
      education: 'Bachelor\'s in Environmental Science, Business, or Engineering. MBA or sustainability certifications (LEED, BREEAM) highly valued.',
      admissions: 'Applicants should demonstrate leadership skills, academic strength in environmental or business-related subjects, and involvement in sustainability initiatives or related internships.',
      dailyTasks: 'Analyze environmental data, develop sustainability reports, coordinate with departments, manage green initiatives, and track progress metrics.',
      outlook: 'Very strong - corporate sustainability focus increasing.',
      challenge: 'Balancing business goals with environmental objectives.',
      quote: {
        text: "I lead by example, consistently demonstrating sustainable practices in my daily work and encouraging my team to do the same.",
        source: "https://www.finalroundai.com/blog/sustainability-interview-questions"
      },
      imageUrl: '/jobPics/susMana.png',
    },
    {
      id: 'career4',
      icon: '🦅',
      title: 'Wildlife Biologist',
      salary: '$52K - $85K annually',
      description: 'Study wildlife behavior, habitats, and populations to develop conservation strategies and protect endangered species.',
      education: 'Bachelor\'s in Wildlife Biology, Zoology, or Ecology. Master\'s often required for research positions. Field experience through internships essential.',
      admissions: 'Successful candidates usually have strong biology and ecology backgrounds, fieldwork experience, and may need to submit a statement of purpose highlighting their passion for wildlife conservation.',
      dailyTasks: 'Conduct field surveys, track animal populations, collect biological samples, analyze data, and write conservation reports.',
      outlook: 'Good - steady demand for conservation work.',
      challenge: 'Working directly with wildlife in natural settings.',
      quote: {
        text: "It is all about understanding the bigger picture of the interplay between nature and our society!",
        source: "https://theinterviewportal.com/2023/06/23/wildlife-biologist-interview-4/"
      },
      imageUrl: '/jobPics/wlidBiol.png',
    },
    {
      id: 'career5',
      icon: '📋',
      title: 'Environmental Consultant',
      salary: '$55K - $110K annually',
      description: 'Advise businesses and government agencies on environmental regulations, conduct environmental assessments, and develop compliance strategies.',
      education: 'Bachelor\'s in Environmental Science or Engineering. Professional certifications (LEP, QEP) beneficial. Strong understanding of environmental law required.',
      admissions: 'Applicants should have strong academic records in environmental disciplines, good communication skills, and preferably prior internship experience in consulting or regulatory environments.',
      dailyTasks: 'Site assessments, regulatory compliance reviews, client meetings, report writing, and project management across multiple clients.',
      outlook: 'Strong - increasing regulatory requirements.',
      challenge: 'Balancing multiple projects and tight deadlines.',
      quote: {
        text: "My passion for the environment and a keen interest in problem-solving led me to environmental consultancy.",
        source: "https://uk.indeed.com/career-advice/interviewing/environmental-consultant-interview-questions"
      },
      imageUrl: '/jobPics/envCon.png',
    },
    {
      id: 'career6',
      icon: '🌡️',
      title: 'Climate Change Analyst',
      salary: '$60K - $105K annually',
      description: 'Analyze climate data, model future climate scenarios, and develop strategies for climate adaptation and mitigation.',
      education: 'Bachelor\'s in Environmental Science, Meteorology, or Statistics. Strong analytical and modeling skills. Master\'s preferred for senior roles.',
      admissions: 'Strong quantitative skills, coursework in statistics or meteorology, and research experience are key; competitive applicants often have data analysis projects or internships.',
      dailyTasks: 'Analyze climate datasets, create predictive models, prepare research reports, and present findings to policymakers and stakeholders.',
      outlook: 'Excellent - critical need for climate expertise.',
      challenge: 'Contributing to global climate solutions.',
      quote: {
        text: "Communicating complex climate change data and insights to non-technical stakeholders requires a tailored approach.",
        source: "https://www.remoterocketship.com/advice/guide/data-scientist/climate-change-analyst-interview-questions-and-answers"
      },
      imageUrl: '/jobPics/climaCha.png',
    },
    {
      id: 'career7',
      icon: '💧',
      title: 'Water Resource Specialist',
      salary: '$58K - $95K annually',
      description: 'Manage water quality, develop water conservation programs, and ensure sustainable water resource management for communities and ecosystems.',
      education: 'Bachelor\'s in Environmental Engineering, Hydrology, or Environmental Science. Water treatment certifications valuable.',
      admissions: 'Candidates typically need strong backgrounds in environmental or civil engineering, hydrology coursework, and relevant lab or field experience.',
      dailyTasks: 'Water quality testing, watershed management planning, regulatory compliance monitoring, and stakeholder coordination.',
      outlook: 'Good - water scarcity increasing demand.',
      challenge: 'Complex regulatory environment and competing water uses.',
      quote: {
        text: "The human right to water entitles everyone to sufficient, safe, acceptable, physically accessible and affordable water for personal and domestic use.",
        source: "https://www.unwater.org/water-facts/human-rights"
      },
      imageUrl: '/jobPics/waterResSpec.png',
    },
    {
      id: 'career8',
      icon: '🏢',
      title: 'Green Building Specialist',
      salary: '$62K - $115K annually',
      description: 'Design and certify sustainable buildings, implement energy-efficient systems, and ensure compliance with green building standards.',
      education: 'Bachelor\'s in Architecture, Engineering, or Construction Management. LEED certification essential. Available through Green Building Certification Institute.',
      admissions: 'Strong portfolios, academic achievement in architecture or engineering, and interest in sustainable design are critical; LEED exam preparation is often part of the process.',
      dailyTasks: 'Building assessments, energy audits, sustainability planning, LEED documentation, and construction oversight.',
      outlook: 'Excellent - green construction market expanding.',
      challenge: 'Creating healthier, more efficient built environments.',
      quote: {
        text: "Green buildings not only conserve resources but also improve the health and productivity of occupants.",
        source: "https://www.epa.gov/greenbuilding"
      },
      imageUrl: '/jobPics/greenBuioldSpec.jpg',
    },
    {
      id: 'career9',
      icon: '📊',
      title: 'Environmental Data Scientist',
      salary: '$70K - $125K annually',
      description: 'Apply data science techniques to environmental problems, develop predictive models, and extract insights from large environmental datasets.',
      education: 'Bachelor\'s in Data Science, Environmental Science, or Statistics. Programming skills (Python, R) and machine learning knowledge essential.',
      admissions: 'Applicants need strong quantitative skills, programming experience, and coursework or projects in data science or statistics, often demonstrated through a portfolio or internships.',
      dailyTasks: 'Data cleaning and analysis, model development, statistical analysis, visualization creation, and presenting findings to stakeholders.',
      outlook: 'Excellent - high demand for data skills in environmental sector.',
      challenge: 'Keeping up with rapidly evolving technology.',
      quote: {
        text: "The tools of data science can help answer critical questions about Earth’s future.",
        source: "https://www.nature.com/articles/d41586-020-03188-2"
      },
      imageUrl: '/jobPics/envDataSci.png',
    },
    {
      id: 'career10',
      icon: '🌲',
      title: 'Conservation Program Manager',
      salary: '$55K - $90K annually',
      description: 'Lead conservation initiatives, manage protected areas, coordinate with stakeholders, and develop strategies for biodiversity protection.',
      education: 'Bachelor\'s in Conservation Biology, Environmental Science, or Natural Resource Management. Project management experience preferred.',
      admissions: 'Strong academic record in conservation-related fields, leadership experience, and involvement in conservation projects or volunteer work are important for admission.',
      dailyTasks: 'Program planning, budget management, stakeholder meetings, fieldwork coordination, and grant writing for conservation projects.',
      outlook: 'Stable - ongoing need for conservation efforts.',
      challenge: 'Direct involvement in protecting natural ecosystems.',
      quote: {
        text: "The more you know about a species, the more you understand about how better to help protect them.",
        source: "https://conservationbytes.com/2010/08/06/conservation-quotes/"
      },
      imageUrl: '/jobPics/consProMan.png',
    }
  ];

export default careers;