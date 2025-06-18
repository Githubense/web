// Modal functionality for bento grid detailed views
class BentoModal {
  constructor() {
    this.modalData = {
      1: {
        title: "Design Portfolio",
        description: "UI/UX and visual design work focusing on user-centered design principles and modern aesthetics.",
        sections: [
          {
            title: "Design Experience",
            items: [
              "Graphical User Interface Design (Apple Developer Academy)",
              "User-first design thinking and agile project execution",
              "Inclusive UI design for accessibility",
              "App interface design for iOS applications"
            ]
          },
          {
            title: "Design Projects",
            items: [
              "Maternal care iOS app interface design",
              "Banking inclusion app UI/UX",
              "Financial literacy app design",
              "Accessibility-focused communication platform UI"
            ]
          }
        ],
        image: "/assets/images/illustration-create-post.webp"
      },
      2: {
        title: "Education",
        description: "Comprehensive engineering education with international experience and dual degree programs.",
        sections: [
          {
            title: "Apple Developer Academy @ Unina Federico II",
            subtitle: "Apple Developer Academy Student | Expected June 2025 | Napoli, IT",
            items: [
              "Coding",
              "Graphical User Interface Design", 
              "Business"
            ]
          },
          {
            title: "Universidad de las Américas Puebla",
            subtitle: "Bachelor of Engineering in Computer Systems Engineering | Expected June 2025 | Puebla, MX",
            items: [
              "App Development",
              "Machine Learning",
              "Cloud Computing",
              "Artificial Intelligence"
            ]
          },
          {
            title: "Universidad de las Américas Puebla",
            subtitle: "Bachelor of Engineering in Robotics and Telecommunications Engineering | Expected June 2025 | Puebla, MX",
            items: [
              "Robotics Vision",
              "Kinematics and Dynamics of Robots",
              "Wireless and Mobile Networks"
            ]
          }
        ],
        image: "/assets/images/illustration-five-stars.webp"
      },
      3: {
        title: "Coding Projects",
        description: "iOS development and machine learning projects using cutting-edge technologies and frameworks.",
        sections: [
          {
            title: "Maternal Care iOS App (2023)",
            subtitle: "Mission Alignment Community Challenge - 2nd Place National",
            items: [
              "Technologies: ARKit, RealityKit, Machine Learning",
              "Enhanced parenting guidance through AR",
              "User-first design thinking implementation",
              "Agile project execution methodology"
            ]
          },
          {
            title: "Banking Inclusion App (2024)",
            subtitle: "BBVA Hackathon - Pitch Presenter",
            items: [
              "Formal pitch delivered to BBVA leadership",
              "Banking inclusion focus for underserved populations",
              "Real-world stakeholder alignment",
              "Investment-ready solution architecture"
            ]
          },
          {
            title: "Financial Literacy App (2024)",
            subtitle: "Swift Change Makers Hackathon",
            items: [
              "Firebase backend implementation",
              "OpenAI-powered chatbot integration",
              "BBVA branding and corporate alignment",
              "API integration and rapid development"
            ]
          },
          {
            title: "Inclusive Communication Platform (2022)",
            subtitle: "FEPRO Competition - Finalist",
            items: [
              "Technologies: PHP, SQL",
              "Accessibility for visually and hearing-impaired users",
              "Inclusive UI design under competition deadlines",
              "National level recognition by BUAP"
            ]
          }
        ],
        image: "/assets/images/illustration-ai-content.webp"
      },
      4: {
        title: "Awards & Achievements",
        description: "Recognition at national level competitions and prestigious presentations demonstrating technical excellence.",
        sections: [
          {
            title: "2nd Place - Mission Alignment Community Challenge",
            subtitle: "November 2023 | Apple Inc. and Enactus Mexico | Monterrey, MX",
            items: [
              "National Level Competition - Mexico",
              "Maternal care iOS app using ARKit, RealityKit, and ML",
              "Recognition for innovative impact at national level",
              "User-first design thinking and agile execution"
            ]
          },
          {
            title: "Invited Pitch Presenter at BBVA",
            subtitle: "July 2024 | Apple Inc., Enactus Mexico and BBVA | Ciudad de Mexico, MX",
            items: [
              "Formal pitch to BBVA leadership",
              "Banking inclusion app presentation",
              "Real-world stakeholder expectations alignment",
              "Investment solutions and business communication"
            ]
          },
          {
            title: "Finalist - FEPRO 2022 Competition",
            subtitle: "November 2022 | Benemérita Universidad Autónoma de Puebla | Puebla, MX",
            items: [
              "National Level Competition",
              "Inclusive communication platform for impaired users",
              "PHP and SQL implementation",
              "Accessibility in tech focus"
            ]
          },
          {
            title: "Competitor - Swift Change Makers Hackathon 2024",
            subtitle: "April 2024 | Apple Inc. and Enactus Mexico | Monterrey, MX",
            items: [
              "National Level - Mexico",
              "Financial literacy app with Firebase and OpenAI",
              "BBVA branding and young generation banking inclusion",
              "API integration and rapid team-based development"
            ]
          }
        ],
        image: "/assets/images/illustration-audience-growth.webp"
      },
      5: {
        title: "Angel Adrian Pimienta Flores",
        description: "iOS Developer and Engineering Student passionate about creating innovative solutions through technology and accessibility.",
        sections: [
          {
            title: "Contact Information",
            items: [
              "Email: angel.pimientafs@udlap.mx",
              "LinkedIn: in/angelpimienta",
              "GitHub: github.com/Githubense",
              "Phone: +52 9612394535 / +39 3518894535",
              "Location: Chiapas, MX"
            ]
          },
          {
            title: "Professional Focus",
            items: [
              "iOS Development & Machine Learning",
              "Accessibility-focused solutions",
              "Cross-cultural collaboration",
              "International experience (Italy/Mexico)",
              "Business solution alignment"
            ]
          },
          {
            title: "Current Status",
            items: [
              "Apple Developer Academy Student",
              "Dual Engineering Degrees in Progress",
              "Available for collaboration opportunities",
              "Seeking international opportunities"
            ]
          }
        ],
        image: "/assets/images/illustration-multiple-platforms.webp"
      },
      6: {
        title: "Certifications",
        description: "Professional certifications demonstrating commitment to continuous learning and emerging technologies.",
        sections: [
          {
            title: "Google Cloud Computing Foundations Academy",
            subtitle: "February 2024 | Google and Universidad de las Américas Puebla | Online",
            items: [
              "Cloud deployment literacy enhancement",
              "Scalable, secure cloud-native solutions",
              "Cloud architecture and best practices",
              "Enterprise-level cloud computing foundations"
            ]
          },
          {
            title: "Additional Certifications",
            items: [
              "Apple Developer Academy certification (in progress)",
              "iOS Development specialization",
              "Machine Learning fundamentals",
              "Additional industry certifications planned"
            ]
          }
        ],
        image: "/assets/images/illustration-consistent-schedule.webp"
      },
      7: {
        title: "Skills & Expertise",
        description: "Core competencies spanning technical skills, leadership, and cross-cultural collaboration developed through international experience.",
        sections: [
          {
            title: "Leadership & Management",
            items: [
              "Event Staff Management (TBarCampMx 2019)",
              "Technical staff coordination for IoT events",
              "Time-management and logistics supervision",
              "Multi-track event organization"
            ]
          },
          {
            title: "Teaching & Mentoring",
            items: [
              "Academic Tutor at UDLAP (Sept 2019 - Sept 2024)",
              "Core engineering subjects support",
              "Empathetic communication strategy development",
              "Peer-to-peer learning facilitation"
            ]
          },
          {
            title: "Core Skills",
            items: [
              "Teamwork & Collaboration",
              "Multi-Cultural Communication",
              "Public Speaking & Presentations",
              "Agile Project Management",
              "Cross-platform development"
            ]
          }
        ],
        image: "/assets/images/illustration-grow-followers.webp"
      },
      8: {
        title: "Published Apps",
        description: "Mobile applications currently in development pipeline for TestFlight and App Store release.",
        sections: [
          {
            title: "Development Pipeline",
            items: [
              "iOS applications under active development",
              "TestFlight beta testing preparation",
              "App Store submission process initiation",
              "Cross-platform compatibility considerations"
            ]
          },
          {
            title: "App Categories in Development",
            items: [
              "Healthcare & Accessibility apps",
              "Financial literacy applications",
              "Educational and tutoring platforms",
              "Business solution applications"
            ]
          },
          {
            title: "Coming Soon",
            items: [
              "Launch timeline updates",
              "Beta testing opportunities",
              "User feedback integration",
              "App Store optimization"
            ]
          }
        ],
        image: "/assets/images/illustration-schedule-posts.webp"
      },
      9: {
        title: "Contact & Collaboration",
        description: "Available for innovative projects, international opportunities, and professional collaboration in iOS development and technology.",
        sections: [
          {
            title: "Professional Opportunities",
            items: [
              "iOS development projects",
              "Machine learning applications",
              "Accessibility-focused solutions",
              "International collaboration projects"
            ]
          },
          {
            title: "Collaboration Interests",
            items: [
              "Cross-cultural development teams",
              "Healthcare technology applications",
              "Financial inclusion solutions",
              "Educational technology platforms"
            ]
          },
          {
            title: "Availability",
            items: [
              "Open to internship opportunities",
              "Available for consulting work",
              "Seeking full-time positions post-graduation",
              "International relocation flexibility"
            ]
          }
        ],
        image: "/assets/images/illustration-audience-growth.webp"
      }
    };

    this.init();
  }

  init() {
    this.createModal();
    this.bindEvents();
  }

  createModal() {
    const modalHTML = `
      <div class="modal-overlay" id="bentoModal">
        <div class="modal-content">
          <button class="modal-close" id="modalClose">&times;</button>
          <div class="modal-header">
            <h2 class="modal-title" id="modalTitle"></h2>
            <img class="modal-image" id="modalImage" src="" alt="">
          </div>
          <p class="modal-description" id="modalDescription"></p>
          <ul class="modal-features" id="modalFeatures"></ul>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('bentoModal');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalDescription = document.getElementById('modalDescription');
    this.modalFeatures = document.getElementById('modalFeatures');
    this.modalImage = document.getElementById('modalImage');
    this.modalClose = document.getElementById('modalClose');
  }

  bindEvents() {
    // Add click event to all bento grid items
    const bentoItems = document.querySelectorAll('.bento-grid > div');
    bentoItems.forEach((item, index) => {
      item.addEventListener('click', () => this.openModal(index + 1));
    });

    // Close modal events
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  openModal(itemIndex) {
    const data = this.modalData[itemIndex];
    if (!data) return;

    // Populate modal content
    this.modalTitle.textContent = data.title;
    this.modalDescription.textContent = data.description;
    this.modalImage.src = data.image;
    this.modalImage.alt = data.title;

    // Populate sections instead of simple features
    this.modalFeatures.innerHTML = '';
    
    if (data.sections) {
      data.sections.forEach(section => {
        // Create section container
        const sectionDiv = document.createElement('div');
        sectionDiv.style.marginBottom = '32px';
        
        // Section title
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        sectionTitle.style.fontSize = '1.25rem';
        sectionTitle.style.fontWeight = '600';
        sectionTitle.style.color = 'var(--primary-base)';
        sectionTitle.style.marginBottom = '8px';
        sectionTitle.style.borderBottom = '2px solid var(--primary-base)';
        sectionTitle.style.paddingBottom = '8px';
        sectionDiv.appendChild(sectionTitle);
        
        // Section subtitle (if exists)
        if (section.subtitle) {
          const subtitle = document.createElement('p');
          subtitle.textContent = section.subtitle;
          subtitle.style.fontSize = '0.9rem';
          subtitle.style.color = 'var(--black)';
          subtitle.style.opacity = '0.7';
          subtitle.style.marginBottom = '12px';
          subtitle.style.fontStyle = 'italic';
          sectionDiv.appendChild(subtitle);
        }
        
        // Section items
        const itemsList = document.createElement('ul');
        itemsList.style.listStyle = 'none';
        itemsList.style.padding = '0';
        itemsList.style.margin = '0';
        
        section.items.forEach(item => {
          const li = document.createElement('li');
          li.style.padding = '8px 0';
          li.style.borderBottom = '1px solid var(--off-white)';
          li.style.display = 'flex';
          li.style.alignItems = 'flex-start';
          li.style.gap = '12px';
          li.style.lineHeight = '1.4';
          
          const bullet = document.createElement('span');
          bullet.textContent = '•';
          bullet.style.background = 'var(--primary-base)';
          bullet.style.color = 'var(--white)';
          bullet.style.width = '20px';
          bullet.style.height = '20px';
          bullet.style.borderRadius = '50%';
          bullet.style.display = 'flex';
          bullet.style.alignItems = 'center';
          bullet.style.justifyContent = 'center';
          bullet.style.fontSize = '12px';
          bullet.style.fontWeight = 'bold';
          bullet.style.flexShrink = '0';
          bullet.style.marginTop = '2px';
          
          const text = document.createElement('span');
          text.textContent = item;
          text.style.flex = '1';
          
          li.appendChild(bullet);
          li.appendChild(text);
          itemsList.appendChild(li);
        });
        
        sectionDiv.appendChild(itemsList);
        this.modalFeatures.appendChild(sectionDiv);
      });
    }

    // Show modal
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize the modal system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BentoModal();
});
