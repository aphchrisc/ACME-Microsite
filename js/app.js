// ACME Microsite - Main Application JavaScript
// This file contains all the functionality for the static microsite
// Data is loaded from data.js which must be included before this file

// ===== UTILITIES =====
const Utils = {
  // Animate numbers from 0 to target
  animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  },

  // Create DOM element with classes
  createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  },

  // Format percentage
  formatPercent(value) {
    return `${value.toFixed(1)}%`;
  },

  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// ===== CHART CONFIGURATIONS =====
const ChartConfig = {
  colors: {
    primary: '#6B46C1',
    secondary: '#3B82F6',
    accent: '#F97316',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gray: '#6B7280'
  },
  
  plotlyLayout: {
    font: { family: 'Inter, sans-serif' },
    margin: { t: 40, r: 20, b: 40, l: 20 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: true,
    hovermode: 'closest'
  }
};

// ===== VISUALIZATION FUNCTIONS =====
const Visualizations = {
  // Initialize all visualizations
  init() {
    this.renderShareOfVoice();
    this.renderThemesPieChart();
    // this.renderProgramComparison(); // Removed - no longer showing awareness comparison
    // this.renderBarriersChart(); // Removed - replaced with equity theme cards
    this.renderMaps();
  },

  // Share of Voice Chart
  renderShareOfVoice() {
    const container = document.getElementById('share-of-voice-chart');
    if (!container) return;

    const data = ACME_DATA.quantitative.share_of_voice;
    
    const chartData = [{
      y: ['Organizational Staff', 'Community Members', 'Creatives'],
      x: [data.organizational_staff.count, data.community_members_patrons.count, data.creatives.count],
      type: 'bar',
      orientation: 'h',
      text: [
        `${data.organizational_staff.count} (${data.organizational_staff.percentage}%)`,
        `${data.community_members_patrons.count} (${data.community_members_patrons.percentage}%)`,
        `${data.creatives.count} (${data.creatives.percentage}%)`
      ],
      textposition: 'outside',
      marker: {
        color: [ChartConfig.colors.accent, ChartConfig.colors.secondary, ChartConfig.colors.primary]
      },
      hovertemplate: '<b>%{y}</b><br>Count: %{x}<br>Percentage: %{text}<extra></extra>'
    }];

    // Adjust margins for mobile
    const isMobile = window.innerWidth <= 768;
    const layout = {
      ...ChartConfig.plotlyLayout,
      xaxis: { 
        title: 'Number of Respondents', 
        showgrid: false,
        range: [0, 900] // Fixed range to ensure labels are visible
      },
      yaxis: { 
        showgrid: false,
        automargin: true // Ensure y-axis labels aren't cut off
      },
      height: 300,
      margin: { 
        t: 40, 
        r: isMobile ? 50 : 100, // Smaller right margin on mobile
        b: 60, 
        l: isMobile ? 120 : 150  // Smaller left margin on mobile
      },
      showlegend: false // Hide the legend
    };

    Plotly.newPlot(container, chartData, layout, {responsive: true, displayModeBar: false});
  },

  // Themes Pie Chart
  renderThemesPieChart() {
    const container = document.getElementById('themes-pie-chart');
    if (!container) return;

    const data = ACME_DATA.visualizations.pieChart;
    // Use matchMedia for more reliable mobile detection
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
      // Render horizontal bar chart for mobile
      const chartData = [{
        x: data.values,
        y: data.labels,
        type: 'bar',
        orientation: 'h',
        text: data.values.map(v => `${v}%`),
        textposition: 'outside',
        textfont: {
          size: 11,
          color: '#2d3748'
        },
        marker: {
          color: data.colors
        },
        hovertemplate: '<b>%{y}</b><br>%{x}% of responses<extra></extra>'
      }];
      
      const layout = {
        ...ChartConfig.plotlyLayout,
        height: 600,
        margin: { 
          t: 40, 
          r: 50, 
          b: 60, 
          l: 140  // More space for category names
        },
        xaxis: { 
          title: 'Percentage of Responses',
          range: [0, 20],
          showgrid: true,
          gridcolor: '#e5e7eb'
        },
        yaxis: { 
          automargin: true,
          categoryorder: 'total ascending'  // Keep same order as pie
        },
        showlegend: false
      };
      
      const config = {
        responsive: true,
        displayModeBar: false
      };
      
      Plotly.newPlot(container, chartData, layout, config);
      
    } else {
      // Desktop pie chart
      // Create labels with percentages
      const labelsWithPercent = data.labels.map((label, i) => 
        `${label}<br>${data.values[i]}%`
      );
      
      const chartData = [{
        labels: data.labels,
        values: data.values,
        type: 'pie',
        hole: 0.4,  // Create donut chart
        textinfo: 'text',
        text: labelsWithPercent,
        textposition: 'outside',
        textfont: {
          size: 12,
          color: '#2d3748'
        },
        marker: { 
          colors: data.colors,
          line: {
            color: 'white',
            width: 3
          }
        },
        hovertemplate: '<b>%{label}</b><br>%{value}% of responses<extra></extra>',
        hoverlabel: {
          bgcolor: 'white',
          bordercolor: '#e2e8f0',
          font: { color: '#2d3748' }
        },
        pull: 0, // Remove pull effect for cleaner look
        direction: 'clockwise',
        sort: false
      }];

      const layout = {
        ...ChartConfig.plotlyLayout,
        height: 700,
        showlegend: false,
        margin: {
          t: 80,
          r: 150,
          b: 80,
          l: 150
        },
        annotations: [{
          text: '<b>6,904</b><br>Total<br>Responses',
          x: 0.5,
          y: 0.5,
          font: {
            size: 18,
            color: '#2d3748'
          },
          showarrow: false,
          xref: 'paper',
          yref: 'paper'
        }]
      };

      const config = {
        responsive: true,
        displayModeBar: false
      };

      Plotly.newPlot(container, chartData, layout, config);
    }
  },

  // Program Comparison Chart
  renderProgramComparison() {
    const container = document.getElementById('program-comparison-chart');
    if (!container) return;

    const programs = Object.entries(ACME_DATA.programs);
    const names = programs.map(([_, p]) => p.program_name);
    const awareness = programs.map(([_, p]) => p.awareness_percentage);

    const chartData = [{
      x: names,
      y: awareness,
      type: 'bar',
      marker: {
        color: ChartConfig.colors.primary,
        opacity: 0.8
      },
      text: awareness.map(a => `${a}%`),
      textposition: 'outside'
    }];

    const layout = {
      ...ChartConfig.plotlyLayout,
      xaxis: { title: 'Program', tickangle: -45 },
      yaxis: { title: 'Awareness %', range: [0, 60] },
      height: 400
    };

    Plotly.newPlot(container, chartData, layout, {responsive: true, displayModeBar: false});
  },

  // Barriers Chart
  renderBarriersChart() {
    const container = document.getElementById('barriers-chart');
    if (!container) return;

    // Using theme data to show barriers
    const barriers = ACME_DATA.themes.slice(0, 5);
    
    const chartData = [{
      x: barriers.map(b => b.percentage),
      y: barriers.map(b => b.name),
      type: 'bar',
      orientation: 'h',
      marker: {
        color: barriers.map((_, i) => ChartConfig.colors[Object.keys(ChartConfig.colors)[i]])
      },
      text: barriers.map(b => `${b.percentage}%`),
      textposition: 'outside'
    }];

    const layout = {
      ...ChartConfig.plotlyLayout,
      xaxis: { title: 'Percentage of Responses', range: [0, 20] },
      yaxis: { automargin: true },
      height: 400,
      margin: { l: 200 }
    };

    Plotly.newPlot(container, chartData, layout, {responsive: true, displayModeBar: false});
  },

  // Initialize Maps
  renderMaps() {
    // Zipcode map
    this.renderZipCodeMap();

    // Transportation map
    const transportMap = document.getElementById('transport-map');
    if (transportMap) {
      transportMap.innerHTML = '<div class="map-placeholder">Transportation barriers map<br><small>Showing areas with highest impact</small></div>';
    }
  },

  // Render the zip code response map
  renderZipCodeMap() {
    const mapContainer = document.getElementById('zipcode-map');
    if (!mapContainer || !window.L) return;

    // Initialize the map centered on Austin
    const map = L.map('zipcode-map').setView([30.2672, -97.7431], 11);

    // Add a light tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors © CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Get zip code data
    const zipcodeData = ACME_DATA.zipcodeData || {};
    
    // Find max responses for scaling
    const maxResponses = Math.max(...Object.values(zipcodeData).map(d => d.responses));

    // Create a color scale function
    const getColor = (responses) => {
      const intensity = responses / maxResponses;
      if (intensity > 0.8) return '#6B46C1'; // Primary purple
      if (intensity > 0.6) return '#8B5CF6'; // Light purple
      if (intensity > 0.4) return '#3B82F6'; // Blue
      if (intensity > 0.2) return '#60A5FA'; // Light blue
      return '#93C5FD'; // Very light blue
    };

    // Add circles for each zip code
    Object.entries(zipcodeData).forEach(([zipcode, data]) => {
      // Calculate radius based on responses (min 5, max 25)
      const radius = 5 + (data.responses / maxResponses) * 20;
      
      // Create circle
      const circle = L.circleMarker([data.lat, data.lng], {
        radius: radius,
        fillColor: getColor(data.responses),
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7
      }).addTo(map);

      // Add popup
      circle.bindPopup(`
        <div style="text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;">
          <strong style="font-size: 18px; color: #6B46C1;">${zipcode}</strong><br>
          <span style="font-size: 14px; color: #64748B;">${data.area}</span><br>
          <strong style="font-size: 24px; color: #0F172A;">${data.responses}</strong><br>
          <span style="font-size: 12px; color: #64748B;">responses</span>
        </div>
      `);

      // Add tooltip on hover
      circle.bindTooltip(`${zipcode}: ${data.responses} responses`, {
        permanent: false,
        direction: 'top'
      });

      // Add zip code label directly on the map
      if (data.responses > 30) { // Only show labels for zip codes with significant responses
        L.marker([data.lat, data.lng], {
          icon: L.divIcon({
            html: `<div style="text-align: center; font-weight: bold; font-size: 11px; color: #0F172A;">${zipcode}</div>`,
            iconSize: [40, 20],
            className: 'zip-label'
          })
        }).addTo(map);
      }
    });
  }
};

// ===== SECTION RENDERING =====
const Sections = {
  // Render theme breakdown cards
  renderThemeBreakdown() {
    const container = document.getElementById('themes-breakdown');
    if (!container) return;

    ACME_DATA.themes.forEach((theme, index) => {
      const card = Utils.createElement('div', 'theme-item');
      card.innerHTML = `
        <div class="theme-rank">#${theme.rank}</div>
        <div class="theme-info">
          <h4>${theme.name}</h4>
          <div class="theme-bar">
            <div class="theme-bar-fill" style="width: ${theme.percentage}%; background-color: ${ChartConfig.colors[Object.keys(ChartConfig.colors)[index % 7]]}"></div>
          </div>
          <span class="theme-percent">${theme.percentage}%</span>
        </div>
      `;
      container.appendChild(card);
    });
  },

  // Render flip theme cards
  renderThemeCards() {
    const container = document.getElementById('theme-flip-cards-container');
    if (!container) return;

    const colors = ACME_DATA.visualizations.pieChart.colors;

    ACME_DATA.themes.forEach((theme, index) => {
      const card = Utils.createElement('div', 'theme-flip-card');
      card.setAttribute('data-theme', index);
      
      card.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background: ${colors[index]};">
            <h4>${theme.name}</h4>
            <div class="percentage">${theme.percentage}%</div>
            <button class="flip-btn" aria-label="Flip card to see details">
              <span>Flip</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v18m0 0l7-7m-7 7l-7-7" transform="rotate(90 12 12)"/>
              </svg>
            </button>
          </div>
          <div class="flip-card-back" style="background: ${colors[index]};">
            <button class="flip-btn back" aria-label="Flip card back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v18m0 0l7-7m-7 7l-7-7" transform="rotate(-90 12 12)"/>
              </svg>
              <span>Back</span>
            </button>
            <p>${theme.description}</p>
          </div>
        </div>
      `;
      
      container.appendChild(card);
    });

    // Add click handlers for flip functionality
    // Make entire card clickable
    container.querySelectorAll('.theme-flip-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
    
    // Keep button handlers but prevent bubbling (buttons are now just visual)
    container.querySelectorAll('.flip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.theme-flip-card');
        card.classList.toggle('flipped');
      });
    });
  }
};

// ===== PROGRAM TABS =====
const ProgramTabs = {
  init() {
    const buttons = document.querySelectorAll('.tab-button');
    const content = document.getElementById('program-content');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        // Update content
        const programKey = button.dataset.program;
        this.renderProgramContent(programKey, content);
      });
    });
    
    // Render initial content
    if (buttons.length > 0) {
      this.renderProgramContent('nexus', content);
    }
  },

  renderProgramContent(programKey, container) {
    const program = ACME_DATA.programs[programKey];
    if (!program) return;

    container.innerHTML = `
      <div class="program-details">
        <h3>${program.program_name}</h3>
        
        <div class="program-insights">
          <div class="program-strengths">
            <h4>Key Strengths</h4>
            ${program.strengths.map(strength => `
              <div class="insight-item strength">
                <h5>${strength.title}</h5>
                <p>${strength.description}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="program-challenges">
            <h4>Key Challenges</h4>
            ${program.challenges.map(challenge => `
              <div class="insight-item challenge">
                <h5>${challenge.title}</h5>
                <p>${challenge.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
};

// ===== DATA EXPLORER =====
const DataExplorer = {
  init() {
    const themeFilter = document.getElementById('theme-filter');
    const programFilter = document.getElementById('program-filter');
    const display = document.getElementById('filtered-data');
    
    if (!themeFilter || !programFilter || !display) return;

    const updateDisplay = () => {
      const themeValue = themeFilter.value;
      const programValue = programFilter.value;
      
      let content = '<h3>Filtered Results</h3>';
      
      if (themeValue !== 'all') {
        const theme = ACME_DATA.themes.find(t => 
          t.name.toLowerCase().includes(themeValue)
        );
        if (theme) {
          content += `<div class="filtered-item"><strong>${theme.name}:</strong> ${theme.description} (${theme.percentage}% of responses)</div>`;
        }
      }
      
      if (programValue !== 'all') {
        const program = ACME_DATA.programs[programValue];
        if (program) {
          content += `<div class="filtered-item"><strong>${program.program_name}:</strong> ${program.awareness_count} aware (${program.awareness_percentage}%)</div>`;
        }
      }
      
      if (themeValue === 'all' && programValue === 'all') {
        content += '<p>Select filters above to explore specific data.</p>';
      }
      
      display.innerHTML = content;
    };

    themeFilter.addEventListener('change', updateDisplay);
    programFilter.addEventListener('change', updateDisplay);
  }
};

// ===== DOWNLOAD FUNCTIONS =====
// Removed - Data Explorer section no longer exists
// function downloadData(type) {
//   let data, filename;
//   
//   switch(type) {
//     case 'summary':
//       data = ACME_DATA.summary;
//       filename = 'acme_summary_statistics.json';
//       break;
//     case 'themes':
//       data = ACME_DATA.themes;
//       filename = 'acme_themes_analysis.json';
//       break;
//     case 'programs':
//       data = ACME_DATA.programs;
//       filename = 'acme_programs_data.json';
//       break;
//     case 'full':
//       data = ACME_DATA;
//       filename = 'acme_complete_dataset.json';
//       break;
//     default:
//       return;
//   }
//   
//   const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = filename;
//   a.click();
//   URL.revokeObjectURL(url);
// }

// ===== NAVIGATION =====
const Navigation = {
  init() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          menu?.classList.remove('active');
          toggle?.classList.remove('active');
        }
      });
    });

    // Highlight active section on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', Utils.debounce(() => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, 100));
  }
};

// ===== ANIMATIONS =====
const Animations = {
  init() {
    // Animate hero numbers (only for non-hero sections now)
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(element => {
      const count = parseInt(element.getAttribute('data-count'));
      Utils.animateNumber(element, count);
    });

    // Reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }
};

// ===== SCROLL TO TOP =====
const ScrollToTop = {
  init() {
    const button = document.querySelector('.scroll-to-top');
    if (!button) return;

    window.addEventListener('scroll', Utils.debounce(() => {
      if (window.pageYOffset > 300) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    }, 100));

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// ===== TRANSPORTATION ANIMATIONS =====
const TransportAnimations = {
  init() {
    // Animate barrier bars when they come into view
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate barrier bars
          const bars = entry.target.querySelectorAll('.barrier-bar');
          bars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, index * 100);
          });
          
          // Animate progress bars
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, index * 150);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe transportation section
    const transportSection = document.querySelector('.transport-analysis-grid');
    if (transportSection) {
      // Initially set bars to 0 width and store original width
      transportSection.querySelectorAll('.barrier-bar').forEach(bar => {
        const currentWidth = bar.style.width;
        bar.setAttribute('data-width', currentWidth);
        bar.style.width = '0%';
      });
      
      transportSection.querySelectorAll('.progress-bar').forEach(bar => {
        const currentWidth = bar.style.width;
        bar.setAttribute('data-width', currentWidth);
        bar.style.width = '0%';
      });
      
      observer.observe(transportSection);
    }
  }
};

// ===== SCROLL INDICATOR =====
const ScrollIndicator = {
  init() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;
    
    indicator.addEventListener('click', () => {
      const nextSection = document.querySelector('#dashboard');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Hide indicator when scrolled
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        indicator.style.opacity = '0';
        indicator.style.pointerEvents = 'none';
      } else {
        indicator.style.opacity = '1';
        indicator.style.pointerEvents = 'auto';
      }
    });
  }
};

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing ACME Microsite...');
  
  // Initialize navigation
  Navigation.init();
  
  // Initialize visualizations
  Visualizations.init();
  
  // Render section content
  Sections.renderThemeCards();
  
  // Initialize interactive components
  ProgramTabs.init();
  // DataExplorer.init(); // Removed - section no longer exists
  
  // Initialize animations
  Animations.init();
  
  // Initialize scroll to top
  ScrollToTop.init();
  
  // Initialize transportation animations
  TransportAnimations.init();
  
  // Initialize scroll indicator
  ScrollIndicator.init();
  
  // Force re-render of charts after page settles (for mobile)
  setTimeout(() => {
    Visualizations.renderThemesPieChart();
  }, 500);
  
  console.log('ACME Microsite initialized successfully!');
});

// ===== WINDOW RESIZE HANDLER =====
let resizeTimer;
let lastWindowWidth = window.innerWidth;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const wasMobile = lastWindowWidth <= 768;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const currentWidth = window.innerWidth;
    
    // If we've crossed the mobile/desktop threshold, re-render the pie/bar chart
    if (wasMobile !== isMobile) {
      Visualizations.renderThemesPieChart();
    }
    
    // Redraw all Plotly charts on resize
    const plotlyCharts = document.querySelectorAll('.js-plotly-plot');
    plotlyCharts.forEach(chart => {
      Plotly.Plots.resize(chart);
    });
    
    lastWindowWidth = currentWidth;
  }, 250);
});

// ===== PRINT HANDLERS =====
window.addEventListener('beforeprint', () => {
  document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing');
});