// ACME Community Feedback Analysis - Data File
// This file contains all the data for the ACME microsite
// To update numbers, search for the relevant section and modify the values

const ACME_DATA = {
  // ===== SUMMARY STATISTICS =====
  // TO UPDATE: Change the values below to reflect new survey data
  summary: {
    overview: {
      total_feedback_points: 3840,  // Total number of feedback points collected
      unique_participants: 1289,    // Number of unique survey participants
      feedback_sessions: 2551,      // Number of feedback sessions conducted
      total_qualitative_comments: 16050  // Total qualitative comments analyzed
    },
    survey_stats: {
      total_responses: 1289,        // Total survey responses
      completion_rate: 95.4,        // Survey completion rate (percentage)
      geographic_distribution: {
        unique_zip_codes: 95,       // Number of unique zip codes represented
        unique_districts: 11        // Number of council districts represented
      }
    }
  },

  // ===== QUANTITATIVE DATA (WHO PARTICIPATED) =====
  quantitative: {
    overview: {
      total_survey_responses: 1289,
      focus_groups: 2,              // Number of focus groups conducted
      one_on_one_interviews: 5,     // Number of 1:1 interviews conducted
      listening_sessions: 6          // Number of listening sessions conducted
    },
    share_of_voice: {
      // Note: These add up to more than 100% because respondents could select multiple roles
      creatives: {
        count: 863,
        percentage: 67.0
      },
      organizational_staff: {
        count: 478,
        percentage: 37.1
      },
      community_members_patrons: {
        count: 681,
        percentage: 52.8
      }
    },
    detailed_breakdown: {
      exclusive_roles: {
        only_creative: 256,
        only_staff: 59,
        only_community: 213,
        multiple_roles: 593,        // People who selected multiple categories
        no_role: 123
      }
    }
  },

  // ===== TOP 10 THEMES =====
  // TO UPDATE: Modify the theme data below. Each theme should have:
  // - rank: Order of importance (1-10)
  // - name: Short descriptive name
  // - description: 1-2 sentence description
  // - frequency: Number of mentions
  // - percentage: Percentage of total comments
  themes: [
    {
      rank: 1,
      name: "Affordability and Cost Barriers",
      description: "High costs—including tickets, admission fees, venue rentals, participation, and the general cost of living—are the most frequently cited barriers to participation and sustainability for both artists and audiences.",
      frequency: 1800,
      percentage: 18.1,
      keywords: ["cost of tickets", "admission fees", "affordability", "venue rental", "cost of living"],
      sentiment: "overwhelmingly negative",
      urgency: "critical"
    },
    {
      rank: 2,
      name: "Access to Venues, Spaces, and Geographic Equity",
      description: "There is widespread concern about the shortage, high cost, and uneven geographic distribution of affordable, accessible venues and creative spaces.",
      frequency: 1400,
      percentage: 14.1,
      keywords: ["lack of nearby venues", "affordable spaces", "performance space", "geographic access"],
      sentiment: "strongly negative",
      urgency: "critical"
    },
    {
      rank: 3,
      name: "Equity, Diversity, and Inclusion (DEI)",
      description: "A strong and recurring call for more equitable funding, greater representation, and support for BIPOC, LGBTQIA+, disabled, immigrant, women, and other historically marginalized or underrepresented groups.",
      frequency: 1300,
      percentage: 13.1,
      keywords: ["equity", "diversity", "inclusion", "representation", "BIPOC", "LGBTQIA+"],
      sentiment: "mixed (mostly positive, some concerns)",
      urgency: "critical"
    },
    {
      rank: 4,
      name: "Awareness, Communication, and Outreach",
      description: "A widespread lack of awareness about available programs, events, and funding opportunities is a major barrier.",
      frequency: 1200,
      percentage: 12.1,
      keywords: ["lack of awareness", "communication", "outreach", "marketing", "visibility"],
      sentiment: "strongly negative",
      urgency: "high"
    },
    {
      rank: 5,
      name: "Grant/Application Process Complexity and Barriers",
      description: "The grant application and reporting processes are widely seen as overly complex, time-consuming, opaque, and inaccessible.",
      frequency: 1100,
      percentage: 11.1,
      keywords: ["application process", "complexity", "bureaucracy", "grant writing", "simplify"],
      sentiment: "overwhelmingly negative",
      urgency: "critical"
    },
    {
      rank: 6,
      name: "Funding Levels, Distribution, and Sustainability",
      description: "There is persistent concern about insufficient, unstable, or inconsistently distributed funding.",
      frequency: 1050,
      percentage: 10.6,
      keywords: ["funding", "grants", "multi-year", "sustainability", "operational support"],
      sentiment: "strongly negative",
      urgency: "critical"
    },
    {
      rank: 7,
      name: "Transparency, Accountability, and Fairness in Funding",
      description: "There are widespread calls for greater transparency, clear criteria, and accountability in funding decisions.",
      frequency: 900,
      percentage: 9.1,
      keywords: ["transparency", "accountability", "clear criteria", "decision-making", "fairness"],
      sentiment: "strongly negative",
      urgency: "high"
    },
    {
      rank: 8,
      name: "Support for Emerging, Small, and Independent Artists/Organizations",
      description: "There is a strong desire for increased opportunities, funding, mentorship, and capacity-building for emerging artists.",
      frequency: 800,
      percentage: 8.1,
      keywords: ["emerging artists", "small organizations", "independent artists", "microgrants", "mentorship"],
      sentiment: "strongly positive",
      urgency: "high"
    },
    {
      rank: 9,
      name: "Transportation, Parking, and Physical Accessibility",
      description: "Transportation and parking challenges, as well as physical accessibility barriers, are frequently cited as obstacles to participation.",
      frequency: 700,
      percentage: 7.1,
      keywords: ["transportation", "parking", "accessibility", "public transportation", "ADA"],
      sentiment: "strongly negative",
      urgency: "high"
    },
    {
      rank: 10,
      name: "Collaboration, Community Engagement, and Ecosystem Building",
      description: "Respondents value collaboration among artists, organizations, and sectors, and call for more community-driven decision-making.",
      frequency: 650,
      percentage: 6.6,
      keywords: ["collaboration", "community engagement", "partnerships", "ecosystem", "networking"],
      sentiment: "strongly positive",
      urgency: "medium-high"
    }
  ],

  // ===== PROGRAM DATA =====
  // TO UPDATE: Modify program awareness counts and top themes for each program
  programs: {
    nexus: {
      program_name: "Nexus Grant Program",
      awareness_count: 686,
      awareness_percentage: 53.2,
      response_count: 59,
      strengths: [
        {
          title: "Accessibility for Emerging Artists",
          description: "Nexus is seen as an important entry point for new, small, and culturally diverse applicants. The removal of fiscal sponsorship requirements is appreciated.",
          frequency: 10
        },
        {
          title: "Supporting Innovation",
          description: "The program encourages experimental and interdisciplinary work that might not find support elsewhere.",
          frequency: 8
        }
      ],
      challenges: [
        {
          title: "Transparency and Clarity",
          description: "Applicants find the selection process confusing and lacking transparency. Clearer feedback on rejections is needed.",
          frequency: 15
        },
        {
          title: "Timeliness and Reliability",
          description: "Delays in notification and skipped cycles make it difficult for applicants to plan and execute projects.",
          frequency: 7
        }
      ]
    },
    thrive: {
      program_name: "Thrive Grant Program",
      awareness_count: 639,
      awareness_percentage: 49.6,
      response_count: 48,
      strengths: [
        {
          title: "Multi-year Funding Stability",
          description: "The two-year funding cycle provides stability for organizations to plan long-term and build capacity.",
          frequency: 12
        },
        {
          title: "Operational Support",
          description: "Unrestricted funding allows organizations flexibility to address their most pressing needs.",
          frequency: 9
        }
      ],
      challenges: [
        {
          title: "Limited Funding Pool",
          description: "The number of organizations funded is insufficient compared to the need in the community.",
          frequency: 11
        },
        {
          title: "Application Complexity",
          description: "The application process is seen as overly complex and time-consuming for smaller organizations.",
          frequency: 8
        }
      ]
    },
    elevate: {
      program_name: "Elevate Grant Program",
      awareness_count: 665,
      awareness_percentage: 51.6,
      response_count: 52,
      strengths: [
        {
          title: "Project-based Excellence",
          description: "Supports high-quality artistic projects that enhance Austin's cultural landscape.",
          frequency: 11
        },
        {
          title: "Community Impact Focus",
          description: "Prioritizes projects that demonstrate clear community benefit and engagement.",
          frequency: 9
        }
      ],
      challenges: [
        {
          title: "Competitive Process",
          description: "High competition and low success rates discourage many qualified applicants.",
          frequency: 13
        },
        {
          title: "Funding Amounts",
          description: "Grant amounts often insufficient to cover the true costs of ambitious projects.",
          frequency: 10
        }
      ]
    },
    music: {
      program_name: "Austin Live Music Fund",
      awareness_count: 552,
      awareness_percentage: 42.8,
      response_count: 43,
      strengths: [
        {
          title: "Venue Preservation",
          description: "Provides critical support for music venues struggling with rising costs and displacement pressures.",
          frequency: 12
        },
        {
          title: "Musician Fair Pay",
          description: "Ensures musicians receive fair compensation for performances at city-funded events.",
          frequency: 8
        }
      ],
      challenges: [
        {
          title: "Limited Reach",
          description: "Many in the music community are unaware of the program or find it difficult to access.",
          frequency: 10
        },
        {
          title: "Narrow Scope",
          description: "Focus on venues leaves out many musicians and music organizations that need support.",
          frequency: 9
        }
      ]
    },
    space: {
      program_name: "Creative Space Assistance Program",
      awareness_count: 354,
      awareness_percentage: 27.5,
      response_count: 38,
      strengths: [
        {
          title: "Addressing Critical Need",
          description: "Directly tackles the affordability crisis threatening Austin's creative spaces and studios.",
          frequency: 11
        },
        {
          title: "Displacement Prevention",
          description: "Helps artists and arts organizations stay in Austin despite rising real estate costs.",
          frequency: 7
        }
      ],
      challenges: [
        {
          title: "Low Awareness",
          description: "Many who could benefit from the program don't know it exists.",
          frequency: 14
        },
        {
          title: "Insufficient Scale",
          description: "Current funding levels cannot address the magnitude of the space affordability crisis.",
          frequency: 12
        }
      ]
    },
    aipp: {
      program_name: "Art in Public Places",
      awareness_count: 669,
      awareness_percentage: 51.9,
      response_count: 41,
      strengths: [
        {
          title: "Public Art Excellence",
          description: "Creates opportunities for artists to contribute to Austin's visual landscape and civic identity.",
          frequency: 10
        },
        {
          title: "Community Engagement",
          description: "Involves communities in the selection and creation of public art projects.",
          frequency: 8
        }
      ],
      challenges: [
        {
          title: "Selection Process Transparency",
          description: "Artists feel the selection process lacks clarity and favors established names over emerging talent.",
          frequency: 11
        },
        {
          title: "Limited Opportunities",
          description: "Too few projects relative to the number of qualified artists seeking public art commissions.",
          frequency: 9
        }
      ]
    },
    heritage: {
      program_name: "Heritage Preservation Grant",
      awareness_count: 353,
      awareness_percentage: 28.4,
      response_count: 87,
      strengths: [
        {
          title: "Infrastructure Support",
          description: "Instrumental in preserving important heritage sites, including historically Black institutions and culturally significant spaces.",
          frequency: 8
        },
        {
          title: "Cultural Legacy Protection",
          description: "Helps maintain Austin's diverse cultural history through physical preservation of important community landmarks.",
          frequency: 6
        }
      ],
      challenges: [
        {
          title: "Complex Application Process",
          description: "Application and reporting processes are complex, repetitive, and time-consuming, especially for small or volunteer-run organizations.",
          frequency: 15
        },
        {
          title: "Limited Scope and Eligibility",
          description: "Current focus on exterior preservation excludes programming, events, and interior projects that could better serve diverse communities.",
          frequency: 12
        }
      ]
    }
  },

  // ===== VISUALIZATION DATA =====
  // These data structures are used by the charts and visualizations
  visualizations: {
    // Pie chart data for top themes
    pieChart: {
      labels: [
        "Affordability & Cost",
        "Venues & Spaces",
        "Equity & Inclusion",
        "Awareness & Outreach",
        "Application Process",
        "Funding Levels",
        "Transparency",
        "Emerging Artists",
        "Transportation",
        "Collaboration"
      ],
      values: [18.1, 14.1, 13.1, 12.1, 11.1, 10.6, 9.1, 8.1, 7.1, 6.6],
      colors: [
        '#6B46C1', '#3B82F6', '#F97316', '#10B981', '#F59E0B',
        '#EF4444', '#6B7280', '#8B5CF6', '#14B8A6', '#F43F5E'
      ]
    },

    // Program comparison data
    programComparison: {
      programs: ["Nexus", "Thrive", "Elevate", "Live Music", "Creative Space", "AIPP", "Heritage"],
      awareness: [50.0, 46.9, 48.7, 40.0, 25.5, 49.0, 28.4],
      satisfaction: [3.8, 4.1, 3.9, 3.7, 3.5, 4.0, 3.5]  // Example satisfaction scores
    }
  },

  // ===== TRANSPORTATION DATA =====
  // Separate section for transportation-related findings
  transportation: {
    total_mentions: 1934,
    percentage_of_comments: 28.0,
    key_issues: [
      "Lack of parking near venues",
      "Limited public transportation options",
      "Distance from cultural activities",
      "Late-night transportation challenges",
      "ADA accessibility concerns"
    ],
    affected_areas: [
      "East Austin venues",
      "South Austin cultural spaces",
      "North Austin communities",
      "Suburban areas"
    ]
  },

  // ===== KEY QUOTES =====
  // Representative quotes from the community
  // TO UPDATE: Replace quotes while maintaining the structure
  quotes: {
    affordability: [
      {
        text: "Cost of tickets or admission fees; Location- Lack of nearby venues or events in my neighborhood; Transportation / parking issues",
        source: "Survey Respondent"
      },
      {
        text: "As an event organizer, it's become so expensive to rent spaces that are accessible to our community. We really rely on free or affordable spaces.",
        source: "Focus Group Participant"
      }
    ],
    equity: [
      {
        text: "Prioritize BIPOC and emerging orgs by reducing match requirements and offering payment installments to level the playing field.",
        source: "Session Participant"
      },
      {
        text: "Cultural representation matters and how city continues to address these needs is important.",
        source: "Session Participant"
      }
    ],
    process: [
      {
        text: "The application process is overly complex, especially for small organizations or individual artists.",
        source: "Session Participant"
      },
      {
        text: "More outreach, less paperwork and reporting. Small orgs and individual artists can't afford time to write and process grants.",
        source: "Survey Respondent"
      }
    ]
  },

  // ===== RECOMMENDATIONS =====
  // Key recommendations based on the analysis
  recommendations: [
    {
      category: "Immediate Actions",
      items: [
        "Simplify grant application processes",
        "Increase awareness through targeted outreach",
        "Provide technical assistance for first-time applicants"
      ]
    },
    {
      category: "Short-term Goals",
      items: [
        "Develop sliding scale pricing for events",
        "Create centralized information hub",
        "Expand language access services"
      ]
    },
    {
      category: "Long-term Initiatives",
      items: [
        "Invest in affordable creative spaces",
        "Establish multi-year funding commitments",
        "Build sustainable funding pipeline for legacy organizations"
      ]
    }
  ],

  // ===== GEOGRAPHIC DATA (ZIP CODE RESPONSES) =====
  // TO UPDATE: Modify response counts for each zip code
  zipcodeData: {
    // Central Austin (highest concentration)
    "78701": { responses: 82, lat: 30.2729, lng: -97.7444, area: "Downtown" },
    "78702": { responses: 45, lat: 30.2607, lng: -97.7144, area: "East Austin" },
    "78703": { responses: 68, lat: 30.2872, lng: -97.7677, area: "West Austin" },
    "78704": { responses: 72, lat: 30.2453, lng: -97.7609, area: "South Austin" },
    "78705": { responses: 51, lat: 30.2933, lng: -97.7422, area: "University" },
    
    // North Austin
    "78723": { responses: 35, lat: 30.3037, lng: -97.6814, area: "Northeast" },
    "78724": { responses: 17, lat: 30.2965, lng: -97.6536, area: "Far East" },
    "78725": { responses: 8, lat: 30.2417, lng: -97.6608, area: "Southeast" },
    "78726": { responses: 21, lat: 30.4407, lng: -97.8407, area: "Four Points" },
    "78727": { responses: 28, lat: 30.4189, lng: -97.7055, area: "North" },
    "78728": { responses: 15, lat: 30.4465, lng: -97.6844, area: "North" },
    "78729": { responses: 32, lat: 30.4479, lng: -97.7739, area: "Northwest" },
    "78730": { responses: 7, lat: 30.3664, lng: -97.8217, area: "Northwest Hills" },
    "78731": { responses: 42, lat: 30.3429, lng: -97.7766, area: "Northwest" },
    "78732": { responses: 5, lat: 30.3777, lng: -97.8972, area: "Steiner Ranch" },
    "78733": { responses: 13, lat: 30.3215, lng: -97.8673, area: "West Lake Hills" },
    "78734": { responses: 4, lat: 30.3828, lng: -97.9495, area: "Lakeway" },
    "78735": { responses: 18, lat: 30.2486, lng: -97.8255, area: "Barton Creek" },
    "78736": { responses: 9, lat: 30.2147, lng: -97.9336, area: "Bee Cave" },
    "78737": { responses: 13, lat: 30.1987, lng: -97.9392, area: "Dripping Springs" },
    "78738": { responses: 11, lat: 30.3175, lng: -97.9853, area: "Bee Cave" },
    "78739": { responses: 26, lat: 30.1682, lng: -97.8712, area: "Driftwood" },
    
    // South Austin
    "78741": { responses: 40, lat: 30.2308, lng: -97.7334, area: "Southeast" },
    "78742": { responses: 48, lat: 30.2332, lng: -97.6984, area: "Southeast" },
    "78744": { responses: 22, lat: 30.1974, lng: -97.7470, area: "South Austin" },
    "78745": { responses: 95, lat: 30.2063, lng: -97.7954, area: "South Austin" }, // Highest response
    "78746": { responses: 15, lat: 30.2634, lng: -97.8046, area: "West Lake Hills" },
    "78747": { responses: 18, lat: 30.1354, lng: -97.7468, area: "Far South" },
    "78748": { responses: 29, lat: 30.1679, lng: -97.8236, area: "Southwest" },
    "78749": { responses: 31, lat: 30.2161, lng: -97.8486, area: "Southwest" },
    
    // East Austin
    "78751": { responses: 54, lat: 30.3097, lng: -97.7204, area: "Hyde Park" },
    "78752": { responses: 37, lat: 30.3356, lng: -97.7000, area: "North Central" },
    "78753": { responses: 41, lat: 30.3701, lng: -97.6743, area: "North" },
    "78754": { responses: 22, lat: 30.3556, lng: -97.6567, area: "Windsor Park" },
    "78756": { responses: 43, lat: 30.3072, lng: -97.7417, area: "Brentwood" },
    "78757": { responses: 38, lat: 30.3511, lng: -97.7333, area: "Allandale" },
    "78758": { responses: 24, lat: 30.3700, lng: -97.7122, area: "North Austin" },
    "78759": { responses: 35, lat: 30.4018, lng: -97.7514, area: "Great Hills" }
  }
};