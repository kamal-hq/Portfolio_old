/**
 * certificates.js — Single source of truth for all certificate data.
 * Used by the render function in script.js to dynamically build cert cards
 * on pages/certificates.html.
 *
 * Each entry:
 *   title       — display name on the card
 *   fullTitle   — full certificate name (used in lightbox caption / alt text)
 *   category    — filter class: "ai-data" | "marketing" | "programming" | "finance" | "others"
 *   provider    — issuing org + platform (e.g. "Google · Coursera")
 *   thumbnail   — relative path from certificates.html to the .webp thumbnail
 *   fullImage   — relative path from certificates.html to the full-res image
 *   loading     — "eager" for above-the-fold images, "lazy" for everything else
 */

const CERTIFICATES = [
  {
    title: "Work Smarter with AI - Canva",
    fullTitle: "Work Smarter with AI - Canva",
    category: "ai-data",
    provider: "Canva · Coursera",
    thumbnail: "./../assets/thumbnails/muhammad-kamal-work-smarter-with-ai-certificate.webp",
    fullImage: "./../assets/Certificates Images/muhammad-kamal-work-smarter-with-ai-certificate.jpg",
    loading: "eager"
  },
  {
    title: "Google Digital Marketing & E-commerce",
    fullTitle: "Google Digital Marketing & E-commerce Specialization",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera A3WC44SLAHOQ.webp",
    fullImage: "./../assets/Certificates Images/Coursera A3WC44SLAHOQ.jpg",
    loading: "eager"
  },
  {
    title: "Accelerate Your Job Search with AI",
    fullTitle: "Accelerate Your Job Search with AI",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera AONGLEPEM2IW.webp",
    fullImage: "./../assets/Certificates Images/Coursera AONGLEPEM2IW.jpg",
    loading: "eager"
  },
  {
    title: "Statisfaction Gauranteed: Customer Loyalty",
    fullTitle: "Statisfaction Gauranteed: Develop Customer Loyality Online",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera W1MT511WBZFX.webp",
    fullImage: "./../assets/Certificates Images/Coursera W1MT511WBZFX.jpg",
    loading: "lazy"
  },
  {
    title: "Build & Manage E-commerce Stores",
    fullTitle: "Make the Sale: Build, Launch, and Manage E-commerce Stores",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera P6PPIM1OPJO8.webp",
    fullImage: "./../assets/Certificates Images/Coursera P6PPIM1OPJO8.jpg",
    loading: "lazy"
  },
  {
    title: "Marketing Analytics & Measurement",
    fullTitle: "Assess for Success: Marketing Analytics and Measurement",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 6VPW32V2H4JH.webp",
    fullImage: "./../assets/Certificates Images/Coursera 6VPW32V2H4JH.jpg",
    loading: "lazy"
  },
  {
    title: "Think Outside the Inbox: Email Marketing",
    fullTitle: "Think Outside the Inbox: Email Marketing",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera MP1FJJ8AV7DT.webp",
    fullImage: "./../assets/Certificates Images/Coursera MP1FJJ8AV7DT.jpg",
    loading: "lazy"
  },
  {
    title: "Attract and Engage Customers",
    fullTitle: "Attract and Engage Customers with Digital Marketing",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 8LBNO7INGHXE.webp",
    fullImage: "./../assets/Certificates Images/Coursera 8LBNO7INGHXE.jpg",
    loading: "lazy"
  },
  {
    title: "Google Prompting Essentials",
    fullTitle: "Google Prompting Essentials Specialization",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 4IXLR5OBX1TU.webp",
    fullImage: "./../assets/Certificates Images/Coursera 4IXLR5OBX1TU.jpg",
    loading: "lazy"
  },
  {
    title: "AI as a Creative Partner",
    fullTitle: "Use AI as a Creative or Expert Partner",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera EEDN3VX36HFY.webp",
    fullImage: "./../assets/Certificates Images/Coursera EEDN3VX36HFY.jpg",
    loading: "lazy"
  },
  {
    title: "Data Analysis Speed & Presentation",
    fullTitle: "Speed Up Data Analysis and Presentation Building",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera DRIZUFKNC6GA.webp",
    fullImage: "./../assets/Certificates Images/Coursera DRIZUFKNC6GA.jpg",
    loading: "lazy"
  },
  {
    title: "Design Prompts for Everyday Tasks",
    fullTitle: "Design Prompts for Everyday Work Tasks",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera N4R7JA8SWEWQ.webp",
    fullImage: "./../assets/Certificates Images/Coursera N4R7JA8SWEWQ.jpg",
    loading: "lazy"
  },
  {
    title: "Start Writing Prompts like a Pro",
    fullTitle: "Start Writing Prompts like a Pro",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera A3VIO585N2C3.webp",
    fullImage: "./../assets/Certificates Images/Coursera A3VIO585N2C3.jpg",
    loading: "lazy"
  },
  {
    title: "Foundations of Digital Marketing",
    fullTitle: "Foundations of Digital Marketing and E-commerce",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera N2D4FM5HJGGM.webp",
    fullImage: "./../assets/Certificates Images/Coursera N2D4FM5HJGGM.jpg",
    loading: "lazy"
  },
  {
    title: "From Likes to Leads",
    fullTitle: "From Likes to Leads: Interact with Customers Online",
    category: "marketing",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera SD2JQHOYOKNW.webp",
    fullImage: "./../assets/Certificates Images/Coursera SD2JQHOYOKNW.jpg",
    loading: "lazy"
  },
  {
    title: "Microeconomics: Power of Markets",
    fullTitle: "Microeconomics: The Power of Markets",
    category: "others",
    provider: "UPenn · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera OGQEOQ6IS3NE.webp",
    fullImage: "./../assets/Certificates Images/Coursera OGQEOQ6IS3NE.jpg",
    loading: "lazy"
  },
  {
    title: "Google AI Essentials",
    fullTitle: "Google AI Essentials",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera RXNQ1HJK7URW.webp",
    fullImage: "./../assets/Certificates Images/Coursera RXNQ1HJK7URW.jpg",
    loading: "lazy"
  },
  {
    title: "Stay Ahead of the AI Curve",
    fullTitle: "Stay Ahead of the AI Curve",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera E5KJZ323ZGGU.webp",
    fullImage: "./../assets/Certificates Images/Coursera E5KJZ323ZGGU.jpg",
    loading: "lazy"
  },
  {
    title: "Use AI Responsibly",
    fullTitle: "Use AI Responsibly",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera S1QFBKXTKQCF.webp",
    fullImage: "./../assets/Certificates Images/Coursera S1QFBKXTKQCF.jpg",
    loading: "lazy"
  },
  {
    title: "Discover the Art of Prompting",
    fullTitle: "Discover the Art of Prompting",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera IQQSCD2ZQJC0.webp",
    fullImage: "./../assets/Certificates Images/Coursera IQQSCD2ZQJC0.jpg",
    loading: "lazy"
  },
  {
    title: "Maximize Productivity With AI",
    fullTitle: "Maximize Productivity With AI Tools",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 0CRL6KR0X5XN.webp",
    fullImage: "./../assets/Certificates Images/Coursera 0CRL6KR0X5XN.jpg",
    loading: "lazy"
  },
  {
    title: "Introduction to AI",
    fullTitle: "Introduction to AI",
    category: "ai-data",
    provider: "Google · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera OQ1C96T7T562.webp",
    fullImage: "./../assets/Certificates Images/Coursera OQ1C96T7T562.jpg",
    loading: "lazy"
  },
  {
    title: "Freelancing",
    fullTitle: "Freelancing",
    category: "marketing",
    provider: "DigiSkills · DSTP",
    thumbnail: "./../assets/thumbnails/DSTP_Certificate_ 82AGYEXMK.webp",
    fullImage: "./../assets/Certificates Images/DSTP_Certificate_ 82AGYEXMK.jpg",
    loading: "lazy"
  },
  {
    title: "Business Communication & AI",
    fullTitle: "Business Communication and AI for Professionals",
    category: "others",
    provider: "ASU · Coursera",
    thumbnail: "./../assets/thumbnails/0be6d10fcc0c4dfe9c8aa73aab170f8a.webp",
    fullImage: "./../assets/Certificates Images/0be6d10fcc0c4dfe9c8aa73aab170f8a.png",
    loading: "lazy"
  },
  {
    title: "Finance & Grow Your Startup",
    fullTitle: "How to Finance and Grow Your Startup – Without VC",
    category: "marketing",
    provider: "LBS · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera YRDJNN938HEW.webp",
    fullImage: "./../assets/Certificates Images/Coursera YRDJNN938HEW.jpg",
    loading: "lazy"
  },
  {
    title: "From Excel to Power BI",
    fullTitle: "From Excel to Power BI",
    category: "ai-data",
    provider: "Microsoft · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 67KCYIM7B4E0.webp",
    fullImage: "./../assets/Certificates Images/Coursera 67KCYIM7B4E0.jpg",
    loading: "lazy"
  },
  {
    title: "Introduction to Psychology",
    fullTitle: "Introduction to Psychology",
    category: "others",
    provider: "Yale · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 8DG0F2RR7MK7.webp",
    fullImage: "./../assets/Certificates Images/Coursera 8DG0F2RR7MK7.jpg",
    loading: "lazy"
  },
  {
    title: "Programming for Everybody",
    fullTitle: "Programming for Everybody (Getting Started with Python)",
    category: "programming",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera LAWEY10XG3GG.webp",
    fullImage: "./../assets/Certificates Images/Coursera LAWEY10XG3GG.jpg",
    loading: "lazy"
  },
  {
    title: "Python Data Structures",
    fullTitle: "Python Data Structures",
    category: "programming",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 5LX5JMBCZEKJ.webp",
    fullImage: "./../assets/Certificates Images/Coursera 5LX5JMBCZEKJ.jpg",
    loading: "lazy"
  },
  {
    title: "Using Databases with Python",
    fullTitle: "Using Databases with Python",
    category: "programming",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera HSO86HYNKG6I.webp",
    fullImage: "./../assets/Certificates Images/Coursera HSO86HYNKG6I.jpg",
    loading: "lazy"
  },
  {
    title: "Python Data Capstone",
    fullTitle: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    category: "ai-data",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera WYI5G3PO75KK.webp",
    fullImage: "./../assets/Certificates Images/Coursera WYI5G3PO75KK.jpg",
    loading: "lazy"
  },
  {
    title: "Using Python to Access Web Data",
    fullTitle: "Using Python to Access Web Data",
    category: "programming",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera P2KGR216DCU8.webp",
    fullImage: "./../assets/Certificates Images/Coursera P2KGR216DCU8.jpg",
    loading: "lazy"
  },
  {
    title: "Advanced MySQL Topics",
    fullTitle: "Advanced MySQL Topics",
    category: "programming",
    provider: "Meta · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera HR6TFA5FM6EF.webp",
    fullImage: "./../assets/Certificates Images/Coursera HR6TFA5FM6EF.jpg",
    loading: "lazy"
  },
  {
    title: "Assets in Accounting",
    fullTitle: "Assets in Accounting",
    category: "finance",
    provider: "Intuit · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera BCTSF39KA008.webp",
    fullImage: "./../assets/Certificates Images/Coursera BCTSF39KA008.jpg",
    loading: "lazy"
  },
  {
    title: "Bookkeeping Basics",
    fullTitle: "Bookkeeping Basics",
    category: "finance",
    provider: "Intuit · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 74IXPHAUYVXS.webp",
    fullImage: "./../assets/Certificates Images/Coursera 74IXPHAUYVXS.jpg",
    loading: "lazy"
  },
  {
    title: "MySQL Database Management",
    fullTitle: "Database Structures and Management with MySQL",
    category: "programming",
    provider: "Meta · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera SWBAVQOU4JI1.webp",
    fullImage: "./../assets/Certificates Images/Coursera SWBAVQOU4JI1.jpg",
    loading: "lazy"
  },
  {
    title: "Introduction to Databases",
    fullTitle: "Introduction to Databases",
    category: "programming",
    provider: "Meta · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera BC0D0L18N5D6.webp",
    fullImage: "./../assets/Certificates Images/Coursera BC0D0L18N5D6.jpg",
    loading: "lazy"
  },
  {
    title: "Python Data Viz",
    fullTitle: "Data Analysis and Visualization with Python",
    category: "ai-data",
    provider: "IBM · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera UUV2MQOCPXZ8.webp",
    fullImage: "./../assets/Certificates Images/Coursera UUV2MQOCPXZ8.jpg",
    loading: "lazy"
  },
  {
    title: "Classroom Assessment",
    fullTitle: "The World of Classroom Assessment and Testing",
    category: "others",
    provider: "CU · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera H0RQEJUPPEP4.webp",
    fullImage: "./../assets/Certificates Images/Coursera H0RQEJUPPEP4.jpg",
    loading: "lazy"
  },
  {
    title: "Work Smarter with Excel",
    fullTitle: "Work Smarter with Microsoft Excel",
    category: "finance",
    provider: "Microsoft · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera HXGJXJ6B9E8B.webp",
    fullImage: "./../assets/Certificates Images/Coursera HXGJXJ6B9E8B.jpg",
    loading: "lazy"
  },
  {
    title: "Version Control",
    fullTitle: "Version Control",
    category: "programming",
    provider: "Meta · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera EFEFE1POJYGG.webp",
    fullImage: "./../assets/Certificates Images/Coursera EFEFE1POJYGG.jpg",
    loading: "lazy"
  },
  {
    title: "Python Fundamentals",
    fullTitle: "Python Programming Fundamentals",
    category: "programming",
    provider: "IBM · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera HT233OD2JGAV.webp",
    fullImage: "./../assets/Certificates Images/Coursera HT233OD2JGAV.jpg",
    loading: "lazy"
  },
  {
    title: "Getting Started with Excel",
    fullTitle: "Getting Started with Microsoft Excel",
    category: "finance",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera YDC442O5Y3P2.webp",
    fullImage: "./../assets/Certificates Images/Coursera YDC442O5Y3P2.jpg",
    loading: "lazy"
  },
  {
    title: "How to write a research paper",
    fullTitle: "How to write a research paper",
    category: "others",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera AVSUBH832W7R.webp",
    fullImage: "./../assets/Certificates Images/Coursera AVSUBH832W7R.jpg",
    loading: "lazy"
  },
  {
    title: "Excel Formulas & Functions",
    fullTitle: "Using Basic Formulas and Functions in Microsoft Excel",
    category: "finance",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 6EPK6PCB6PUV.webp",
    fullImage: "./../assets/Certificates Images/Coursera 6EPK6PCB6PUV.jpg",
    loading: "lazy"
  },
  {
    title: "Statistical Data Analysis",
    fullTitle: "Statistical Analysis of Data for Researchers",
    category: "ai-data",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera XO4RK1UPAHKU.webp",
    fullImage: "./../assets/Certificates Images/Coursera XO4RK1UPAHKU.jpg",
    loading: "lazy"
  },
  {
    title: "Intro to Project Management",
    fullTitle: "Introduction to Project Management",
    category: "others",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera WVBELOA8RFXY.webp",
    fullImage: "./../assets/Certificates Images/Coursera WVBELOA8RFXY.jpg",
    loading: "lazy"
  },
  {
    title: "Liabilities and Equity",
    fullTitle: "Liabilities and Equity in Accounting",
    category: "finance",
    provider: "Intuit · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera JKUNIMDX3EZ1.webp",
    fullImage: "./../assets/Certificates Images/Coursera JKUNIMDX3EZ1.jpg",
    loading: "lazy"
  },
  {
    title: "Financial Statement Analysis",
    fullTitle: "Financial Statement Analysis",
    category: "finance",
    provider: "Intuit · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera B2EQ0KSPDGVA.webp",
    fullImage: "./../assets/Certificates Images/Coursera B2EQ0KSPDGVA.jpg",
    loading: "lazy"
  },
  {
    title: "Excel PM Tracker",
    fullTitle: "Create a Project Management Tracker using Microsoft Excel",
    category: "finance",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 25VY8QWLTXMF.webp",
    fullImage: "./../assets/Certificates Images/Coursera 25VY8QWLTXMF.jpg",
    loading: "lazy"
  },
  {
    title: "Excel Financial Statement",
    fullTitle: "Create a Financial Statement using Microsoft Excel",
    category: "finance",
    provider: "CPN · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera SKG2IK45P0FF.webp",
    fullImage: "./../assets/Certificates Images/Coursera SKG2IK45P0FF.jpg",
    loading: "lazy"
  },
  {
    title: "Deep Learning for Business",
    fullTitle: "Deep Learning for Business",
    category: "ai-data",
    provider: "Yonsei · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera R7Z3J0H0GK0U.webp",
    fullImage: "./../assets/Certificates Images/Coursera R7Z3J0H0GK0U.jpg",
    loading: "lazy"
  },
  {
    title: "Intuit Bookkeeping",
    fullTitle: "Intuit Academy Bookkeeping Specialization",
    category: "finance",
    provider: "Intuit · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera 9HURB96FLV6S.webp",
    fullImage: "./../assets/Certificates Images/Coursera 9HURB96FLV6S.jpg",
    loading: "lazy"
  },
  {
    title: "Chinese for HSK 1",
    fullTitle: "Chinese for HSK 1",
    category: "others",
    provider: "Peking · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera PQ4ZUZI4071L.webp",
    fullImage: "./../assets/Certificates Images/Coursera PQ4ZUZI4071L.jpg",
    loading: "lazy"
  },
  {
    title: "Python for Everybody",
    fullTitle: "Python for Everybody",
    category: "programming",
    provider: "U-Michigan · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera D4LG2BZMQQW1.webp",
    fullImage: "./../assets/Certificates Images/Coursera D4LG2BZMQQW1.jpg",
    loading: "lazy"
  },
  {
    title: "AI For Everyone",
    fullTitle: "AI For Everyone",
    category: "ai-data",
    provider: "DeepLearning.AI · Coursera",
    thumbnail: "./../assets/thumbnails/Coursera EWNBBYUCCP9I.webp",
    fullImage: "./../assets/Certificates Images/Coursera EWNBBYUCCP9I.jpg",
    loading: "lazy"
  }
];
