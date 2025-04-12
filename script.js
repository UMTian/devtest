// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")
  
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      // Remove active class from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))
  
      // Add active class to clicked trigger
      trigger.classList.add("active")
  
      // Show corresponding content
      const tabId = trigger.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return
  
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Mobile menu toggle (simplified version)
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      alert("Mobile menu would open here in a complete implementation")
    })
  }
  
  // Slow-motion slideshow implementation
  const slideshowContainer = document.getElementById("tech-slideshow")
  const images = ["image2.jpg", "image6.jpg", "image4.jpg", "image5.jpeg", "image3.jpg", "image1.jpg", "image7.jpg"]
  
  // Create initial slides
  if (slideshowContainer) {
    images.forEach((src, index) => {
      const slide = document.createElement("div")
      slide.className = `slideshow-slide ${index === 0 ? "active" : ""}`
    
      const img = document.createElement("img")
      img.src = src
      img.alt = `Tech image ${index + 1}`
    
      slide.appendChild(img)
      slideshowContainer.appendChild(slide)
    })
    
    // Set up the slideshow
    let currentSlide = 0
    const slides = document.querySelectorAll(".slideshow-slide")
    
    function nextSlide() {
      // Remove active class from current slide
      slides[currentSlide].classList.remove("active")
    
      // Calculate next slide index
      currentSlide = (currentSlide + 1) % slides.length
    
      // Add active class to next slide
      slides[currentSlide].classList.add("active")
    }
    
    // Change slide every 2 seconds
    setInterval(nextSlide, 3200)
    // Add this line right after the setInterval:
    setTimeout(nextSlide, 500); // Start first slide transition after 500ms
  }
  
  // CodeBridge Roadmap Journey Script
  // Set up the roadmap data
  const steps = [
    {
      id: 1,
      title: "Real-World Projects",
      description:
        "Work on actual industry projects that solve real business problems, building your portfolio while gaining practical experience.",
      icon: "briefcase",
      gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      details: [
        {
          text: "Build a professional portfolio with real projects that demonstrate your skills to potential employers",
          color: "#8b5cf6",
        },
        {
          text: "Solve actual business challenges and contribute to products used by real customers",
          color: "#8b5cf6",
        },
        {
          text: "Learn industry best practices and development workflows used by professional teams",
          color: "#8b5cf6",
        },
      ],
    },
    {
      id: 2,
      title: "Experience Centre",
      description:
        "Access our state-of-the-art facilities where you can collaborate, code, and create in a professional environment.",
      icon: "building",
      gradient: "linear-gradient(135deg, #3b82f6, #22d3ee)",
      details: [
        {
          text: "Access to professional-grade equipment, tools, and software in our modern workspace",
          color: "#3b82f6",
        },
        {
          text: "Collaborative environment designed for team projects and peer learning",
          color: "#3b82f6",
        },
        {
          text: "High-speed internet, meeting rooms, and presentation facilities for a complete professional experience",
          color: "#3b82f6",
        },
      ],
    },
    {
      id: 3,
      title: "Skills Training",
      description:
        "Develop essential soft skills like communication, presentation, and project management through our specialized training programs.",
      icon: "users",
      gradient: "linear-gradient(135deg, #06b6d4, #2dd4bf)",
      details: [
        {
          text: "Communication and presentation skills workshops to help you articulate your ideas effectively",
          color: "#06b6d4",
        },
        {
          text: "Project management and teamwork training to prepare you for collaborative environments",
          color: "#06b6d4",
        },
        {
          text: "Interview preparation and resume building to help you stand out in the job market",
          color: "#06b6d4",
        },
      ],
    },
    {
      id: 4,
      title: "Professional Courses",
      description:
        "Learn new technologies and skills through structured courses taught by industry professionals with hands-on practice.",
      icon: "graduation-cap",
      gradient: "linear-gradient(135deg, #2dd4bf, #10b981)",
      details: [
        {
          text: "Learn cutting-edge technologies from experts who use them daily in their professional work",
          color: "#10b981",
        },
        {
          text: "Structured curriculum with hands-on exercises and practical assignments",
          color: "#10b981",
        },
        {
          text: "Personalized learning paths based on your interests and career goals",
          color: "#10b981",
        },
      ],
    },
    {
      id: 5,
      title: "Industry Meetups",
      description:
        "Connect with professionals through regular networking events, guest lectures, and industry meetups to build your professional network.",
      icon: "handshake",
      gradient: "linear-gradient(135deg, #10b981, #a3e635)",
      details: [
        {
          text: "Regular guest lectures and Q&A sessions with industry leaders and experts",
          color: "#10b981",
        },
        {
          text: "Networking opportunities with potential employers and mentors",
          color: "#10b981",
        },
        {
          text: "Tech talks and workshops on emerging trends and technologies",
          color: "#10b981",
        },
      ],
    },
    {
      id: 6,
      title: "Student Portal",
      description:
        "Showcase your progress and achievements on our student portal where partner companies can discover top talent for hiring.",
      icon: "star",
      gradient: "linear-gradient(135deg, #f59e0b, #fb923c)",
      details: [
        {
          text: "Earn stars and badges based on project performance and skill development",
          color: "#f59e0b",
        },
        {
          text: "Build a visible profile that showcases your projects and achievements to partner companies",
          color: "#f59e0b",
        },
        {
          text: "Track your progress and receive personalized recommendations for improvement",
          color: "#f59e0b",
        },
      ],
    },
    {
      id: 7,
      title: "Job Placement",
      description:
        "Get hired by our partner companies who can view your performance and select you based on your demonstrated skills and achievements.",
      icon: "briefcase",
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
      details: [
        {
          text: "Direct hiring opportunities with our network of partner companies looking for fresh talent",
          color: "#f97316",
        },
        {
          text: "Ongoing career support and job placement assistance even after program completion",
          color: "#f97316",
        },
        {
          text: "Referrals and recommendations from our industry mentors and partners",
          color: "#f97316",
        },
      ],
    },
  ]
  
  // Generate the roadmap steps
  const roadmapSteps = document.getElementById("roadmap-steps")
  if (roadmapSteps) {
    steps.forEach((step, index) => {
      const stepElement = document.createElement("div")
      stepElement.className = "cb-step-marker"
      stepElement.setAttribute("data-step", index.toString())
  
      const isActive = index === 0
      const bgColor = isActive ? step.gradient : "rgba(51, 65, 85, 0.7)"
      const textColor = isActive ? "white" : "#94a3b8"
  
      stepElement.innerHTML = `
                <div class="cb-step-icon" style="background: ${bgColor}; color: ${textColor};">
                    <i class="fas fa-${step.icon}"></i>
                </div>
                <div class="cb-step-number" style="color: ${textColor};">
                    ${index + 1}
                </div>
            `
  
      roadmapSteps.appendChild(stepElement)
  
      // Add click event to each step
      stepElement.addEventListener("click", () => {
        updateActiveStep(index)
      })
    })
  }
  
  // Function to update the active step
  function updateActiveStep(index) {
    // Update step markers
    document.querySelectorAll(".cb-step-marker").forEach((el, i) => {
      const step = steps[i]
      const isActive = i === index
      const bgColor = isActive ? step.gradient : "rgba(51, 65, 85, 0.7)"
      const textColor = isActive ? "white" : "#94a3b8"
  
      const marker = el.querySelector(".cb-step-icon")
      if (marker) {
        marker.style.background = bgColor
        marker.style.color = textColor
      }
  
      const label = el.querySelector(".cb-step-number")
      if (label) {
        label.style.color = textColor
      }
    })
  
    // Update content with animation
    const step = steps[index]
    const stepContent = document.getElementById("step-content")
  
    if (stepContent) {
      // Add animation class
      stepContent.classList.remove("animate")
      void stepContent.offsetWidth // Trigger reflow
      stepContent.classList.add("animate")
  
      stepContent.innerHTML = `
                <div class="cb-step-header">
                    <div class="cb-step-icon-large" style="background: ${step.gradient};">
                        <i class="fas fa-${step.icon}"></i>
                    </div>
                    <div class="cb-step-info">
                        <h3 class="cb-step-title">${step.title}</h3>
                        <p class="cb-step-description">${step.description}</p>
                    </div>
                </div>
                
                <div class="cb-step-details">
                    ${step.details
                      .map(
                        (detail) => `
                        <div class="cb-detail-item">
                            <div class="cb-detail-icon" style="background-color: ${detail.color};">
                                <i class="fas fa-check"></i>
                            </div>
                            <p class="cb-detail-text">${detail.text}</p>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            `
    }
  }
  
  // Initialize the first step
  if (document.getElementById("step-content")) {
    updateActiveStep(0)
  }
  
  // Set up tab switching for Why Choose Us section
  const overviewTab = document.getElementById("overview-tab")
  const journeyTab = document.getElementById("journey-tab")
  const overviewContent = document.getElementById("overview-content")
  const journeyContent = document.getElementById("journey-content")
  
  if (overviewTab && journeyTab && overviewContent && journeyContent) {
    // Function to switch to overview tab
    function showOverviewTab() {
      // Update tab styles
      overviewTab.classList.add("active")
      journeyTab.classList.remove("active")
  
      // Show/hide content with smooth transition
      overviewContent.style.display = "grid"
      journeyContent.style.display = "none"
    }
  
    // Function to switch to journey tab
    function showJourneyTab() {
      // Update tab styles
      journeyTab.classList.add("active")
      overviewTab.classList.remove("active")
  
      // Show/hide content with smooth transition
      overviewContent.style.display = "none"
      journeyContent.style.display = "block"
    }
  
    // Add click event listeners
    overviewTab.addEventListener("click", showOverviewTab)
    journeyTab.addEventListener("click", showJourneyTab)
  
    // Automatically show journey tab on page load
    showJourneyTab()
  
    // Set up the roadmap journey observer
    const journeyContentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the auto-play only when the journey content is visible
          let currentStepIndex = 0
          const totalSteps = steps.length
          const stepDuration = 2500 // 2.5 seconds per step
          
          function advanceRoadmapStep() {
            updateActiveStep(currentStepIndex)
            currentStepIndex++
            
            // If we've gone through all steps, switch to overview tab
            if (currentStepIndex >= totalSteps) {
              clearInterval(roadmapInterval)
              
              // Add a fade-out animation to the journey content
              journeyContent.classList.add("fade-out")
              
              // After the animation completes, switch to overview
              setTimeout(() => {
                showOverviewTab()
                journeyContent.classList.remove("fade-out")
              }, 1000) // Match this with the CSS animation duration
            }
          }
          
          // Start the auto-play
          advanceRoadmapStep() // Show the first step immediately
          const roadmapInterval = setInterval(advanceRoadmapStep, stepDuration)
          
          // Stop observing once we've started the animation
          journeyContentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    
    // Start observing the journey content
    journeyContentObserver.observe(journeyContent)
  }
  
  // Add hover animations to feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
  
    setTimeout(
      () => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      },
      100 + index * 100,
    )
  })
  
  // Add mobile responsiveness for timeline
  function adjustTimelineForMobile() {
    const timelineContainer = document.querySelector(".cb-timeline-container")
    const timelineSteps = document.querySelector(".cb-timeline-steps")
  
    if (timelineContainer && timelineSteps && window.innerWidth < 768) {
      const stepsWidth = steps.length * 80 // Approximate width needed for all steps
      timelineSteps.style.width = `${stepsWidth}px`
      timelineContainer.style.overflowX = "auto"
    } else if (timelineSteps) {
      timelineSteps.style.width = ""
    }
  }
  
  // Run on load and resize
  adjustTimelineForMobile()
  window.addEventListener("resize", adjustTimelineForMobile)
  
  // Application Form Modal
  // Create the application form modal HTML structure
  function createApplicationModal() {
    const modalHTML = `
    <div id="application-modal" class="application-modal">
      <div class="application-modal-backdrop"></div>
      <div class="application-modal-container">
        <button class="application-modal-close">
          <i class="fas fa-times"></i>
        </button>
        <div class="application-modal-content">
          <div class="application-modal-header">
            <div class="application-modal-logo">
              <i class="fas fa-code"></i>
              <span>CodeBridge</span>
            </div>
            <h2 class="application-modal-title">Start Your Journey</h2>
            <p class="application-modal-subtitle">Fill out the form below to apply for our program</p>
          </div>
          
          <div class="application-steps">
            <div class="application-step active" data-step="1">
              <div class="application-step-number">1</div>
              <div class="application-step-label">Personal Info</div>
            </div>
            <div class="application-step" data-step="2">
              <div class="application-step-number">2</div>
              <div class="application-step-label">Education</div>
            </div>
            <div class="application-step" data-step="3">
              <div class="application-step-number">3</div>
              <div class="application-step-label">Experience</div>
            </div>
            <div class="application-step" data-step="4">
              <div class="application-step-number">4</div>
              <div class="application-step-label">Program</div>
            </div>
          </div>
          
          <form id="application-form" class="application-form">
            <!-- Step 1: Personal Information -->
            <div class="application-form-step active" data-step="1">
              <div class="application-form-group">
                <label for="full-name">Full Name <span class="required">*</span></label>
                <input type="text" id="full-name" name="full-name" class="application-form-control" required>
              </div>
              
              <div class="application-form-row">
                <div class="application-form-group">
                  <label for="email">Email Address <span class="required">*</span></label>
                  <input type="email" id="email" name="email" class="application-form-control" required>
                </div>
                
                <div class="application-form-group">
                  <label for="phone">Phone Number <span class="required">*</span></label>
                  <input type="tel" id="phone" name="phone" class="application-form-control" required>
                </div>
              </div>
              
              <div class="application-form-row">
                <div class="application-form-group">
                  <label for="dob">Date of Birth</label>
                  <input type="date" id="dob" name="dob" class="application-form-control">
                </div>
                
                <div class="application-form-group">
                  <label for="location">Location <span class="required">*</span></label>
                  <input type="text" id="location" name="location" class="application-form-control" placeholder="City, Country" required>
                </div>
              </div>
              
              <div class="application-form-buttons">
                <button type="button" class="application-btn application-btn-next" data-next="2">Next Step</button>
              </div>
            </div>
            
            <!-- Step 2: Education -->
            <div class="application-form-step" data-step="2">
              <div class="application-form-group">
                <label for="highest-education">Highest Education Level <span class="required">*</span></label>
                <select id="highest-education" name="highest-education" class="application-form-control" required>
                  <option value="">Select your highest education</option>
                  <option value="high-school">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD or Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="application-form-group">
                <label for="institution">Institution Name <span class="required">*</span></label>
                <input type="text" id="institution" name="institution" class="application-form-control" required>
              </div>
              
              <div class="application-form-row">
                <div class="application-form-group">
                  <label for="field-of-study">Field of Study</label>
                  <input type="text" id="field-of-study" name="field-of-study" class="application-form-control">
                </div>
                
                <div class="application-form-group">
                  <label for="graduation-year">Graduation Year</label>
                  <input type="number" id="graduation-year" name="graduation-year" class="application-form-control" min="1950" max="2030">
                </div>
              </div>
              
              <div class="application-form-buttons">
                <button type="button" class="application-btn application-btn-prev" data-prev="1">Previous</button>
                <button type="button" class="application-btn application-btn-next" data-next="3">Next Step</button>
              </div>
            </div>
            
            <!-- Step 3: Experience -->
            <div class="application-form-step" data-step="3">
              <div class="application-form-group">
                <label for="experience-level">Programming Experience <span class="required">*</span></label>
                <select id="experience-level" name="experience-level" class="application-form-control" required>
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
              
              <div class="application-form-group">
                <label>Technologies You're Familiar With</label>
                <div class="application-checkbox-group">
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="html-css">
                    <span class="application-checkbox-text">HTML/CSS</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="javascript">
                    <span class="application-checkbox-text">JavaScript</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="react">
                    <span class="application-checkbox-text">React</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="node">
                    <span class="application-checkbox-text">Node.js</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="python">
                    <span class="application-checkbox-text">Python</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="java">
                    <span class="application-checkbox-text">Java</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="sql">
                    <span class="application-checkbox-text">SQL</span>
                  </label>
                  <label class="application-checkbox">
                    <input type="checkbox" name="technologies" value="other">
                    <span class="application-checkbox-text">Other</span>
                  </label>
                </div>
              </div>
              
              <div class="application-form-group">
                <label for="portfolio">Portfolio or GitHub URL</label>
                <input type="url" id="portfolio" name="portfolio" class="application-form-control" placeholder="https://github.com/yourusername">
              </div>
              
              <div class="application-form-buttons">
                <button type="button" class="application-btn application-btn-prev" data-prev="2">Previous</button>
                <button type="button" class="application-btn application-btn-next" data-next="4">Next Step</button>
              </div>
            </div>
            
            <!-- Step 4: Program Selection -->
            <div class="application-form-step" data-step="4">
              <div class="application-form-group">
                <label for="program-interest">Program of Interest <span class="required">*</span></label>
                <select id="program-interest" name="program-interest" class="application-form-control" required>
                  <option value="">Select a program</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="machine-learning">Machine Learning</option>
                </select>
              </div>
              
              <div class="application-form-group">
                <label for="start-date">Preferred Start Date <span class="required">*</span></label>
                <select id="start-date" name="start-date" class="application-form-control" required>
                  <option value="">Select a start date</option>
                  <option value="asap">As soon as possible</option>
                  <option value="next-month">Next month</option>
                  <option value="next-quarter">Next quarter</option>
                  <option value="next-year">Next year</option>
                </select>
              </div>
              
              <div class="application-form-group">
                <label for="hear-about">How did you hear about us?</label>
                <select id="hear-about" name="hear-about" class="application-form-control">
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="event">Event or Conference</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="application-form-group">
                <label for="additional-info">Additional Information</label>
                <textarea id="additional-info" name="additional-info" class="application-form-control" rows="4" placeholder="Tell us anything else you'd like us to know about you..."></textarea>
              </div>
              
              <div class="application-form-group">
                <label class="application-checkbox">
                  <input type="checkbox" name="terms" required>
                  <span class="application-checkbox-text">I agree to the <a href="#" class="application-link">Terms and Conditions</a> and <a href="#" class="application-link">Privacy Policy</a> <span class="required">*</span></span>
                </label>
              </div>
              
              <div class="application-form-buttons">
                <button type="button" class="application-btn application-btn-prev" data-prev="3">Previous</button>
                <button type="submit" class="application-btn application-btn-submit">Submit Application</button>
              </div>
            </div>
          </form>
          
          <div id="application-success" class="application-success">
            <div class="application-success-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="application-success-title">Application Submitted!</h3>
            <p class="application-success-message">Thank you for applying to CodeBridge. We've received your application and will contact you soon.</p>
            <button type="button" class="application-btn application-btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  `
  
    // Append the modal to the body
    document.body.insertAdjacentHTML("beforeend", modalHTML)
  
    // Set up event listeners for the modal
    setupApplicationModal()
  }
  
  // Function to set up the application modal event listeners
  function setupApplicationModal() {
    const modal = document.getElementById("application-modal")
    if (!modal) return
    
    const form = document.getElementById("application-form")
    const successMessage = document.getElementById("application-success")
    const closeButton = modal.querySelector(".application-modal-close")
    const closeSuccessButton = modal.querySelector(".application-btn-close")
    const backdrop = modal.querySelector(".application-modal-backdrop")
    const nextButtons = modal.querySelectorAll(".application-btn-next")
    const prevButtons = modal.querySelectorAll(".application-btn-prev")
  
    // Close modal when clicking the close button
    closeButton.addEventListener("click", () => {
      closeApplicationModal()
    })
  
    // Close modal when clicking the backdrop
    backdrop.addEventListener("click", () => {
      closeApplicationModal()
    })
  
    // Close modal when clicking the success close button
    if (closeSuccessButton) {
      closeSuccessButton.addEventListener("click", () => {
        closeApplicationModal()
      })
    }
  
    // Handle next button clicks
    nextButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextStep = button.getAttribute("data-next")
        if (nextStep) {
          goToStep(Number.parseInt(nextStep))
        }
      })
    })
  
    // Handle previous button clicks
    prevButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const prevStep = button.getAttribute("data-prev")
        if (prevStep) {
          goToStep(Number.parseInt(prevStep))
        }
      })
    })
  
    // Handle form submission
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Show success message with animation
        form.style.opacity = "0"
        form.style.transform = "translateY(20px)"
  
        setTimeout(() => {
          form.style.display = "none"
          successMessage.style.display = "flex"
  
          setTimeout(() => {
            successMessage.style.opacity = "1"
            successMessage.style.transform = "translateY(0)"
          }, 50)
        }, 500)
      })
    }
  }
  
  // Function to open the application modal
  function openApplicationModal() {
    const modal = document.getElementById("application-modal")
    if (!modal) {
      createApplicationModal()
    } else {
      modal.style.display = "block"
      setTimeout(() => {
        modal.classList.add("active")
      }, 50)
    }
  }
  
  // Function to close the application modal
  function closeApplicationModal() {
    const modal = document.getElementById("application-modal")
    if (modal) {
      modal.classList.remove("active")
      setTimeout(() => {
        modal.style.display = "none"
  
        // Reset form if needed
        const form = document.getElementById("application-form")
        const successMessage = document.getElementById("application-success")
  
        if (form && successMessage) {
          successMessage.style.opacity = "0"
          successMessage.style.transform = "translateY(20px)"
          successMessage.style.display = "none"
  
          form.reset()
          form.style.display = "block"
          setTimeout(() => {
            form.style.opacity = "1"
            form.style.transform = "translateY(0)"
          }, 50)
  
          // Reset to first step
          goToStep(1)
        }
      }, 300)
    }
  }
  
  // Function to go to a specific step (defined outside for reset purposes)
  function goToStep(stepNumber) {
    const modal = document.getElementById("application-modal")
    if (!modal) return
  
    // Update active step in the form
    const formSteps = modal.querySelectorAll(".application-form-step")
    formSteps.forEach((step) => {
      step.classList.remove("active")
    })
  
    const targetStep = modal.querySelector(`.application-form-step[data-step="${stepNumber}"]`)
    if (targetStep) {
      targetStep.classList.add("active")
      targetStep.style.opacity = "1"
      targetStep.style.transform = "translateY(0)"
    }
  
    // Update step indicators
    const stepIndicators = modal.querySelectorAll(".application-step")
    stepIndicators.forEach((indicator) => {
      indicator.classList.remove("active")
      indicator.classList.remove("completed")
  
      const indicatorStep = Number.parseInt(indicator.getAttribute("data-step"))
      if (indicatorStep < stepNumber) {
        indicator.classList.add("completed")
      } else if (indicatorStep === stepNumber) {
        indicator.classList.add("active")
      }
    })
  }
  
  // Add event listeners to all apply buttons
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("btn-primary") &&
      (e.target.textContent.includes("Apply") || e.target.textContent.includes("Get Started"))
    ) {
      openApplicationModal()
    }
  })
  
  // Contact Form Submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Simple form validation
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
  
      if (name && email && subject && message) {
        // Show success message (in a real implementation, this would send data to a server)
        alert("Thank you for your message! We'll get back to you soon.")
        contactForm.reset()
      }
    })
  }
  
  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const email = newsletterForm.querySelector(".newsletter-input").value
  
      if (email) {
        // Show success message
        alert("Thank you for subscribing to our newsletter!")
        newsletterForm.reset()
      }
    })
  }
  
  // Social Media Card Hover Effects
  const socialCards = document.querySelectorAll(".social-card")
  if (socialCards) {
    socialCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)"
        card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = ""
        card.style.boxShadow = ""
      })
    })
  }
  
  // Tech Field Cards Hover Effect
  const techFieldCards = document.querySelectorAll(".tech-field-card")
  if (techFieldCards) {
    techFieldCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const info = card.querySelector(".tech-field-info")
        if (info) {
          info.style.opacity = "1"
        }
      })
  
      card.addEventListener("mouseleave", () => {
        const info = card.querySelector(".tech-field-info")
        if (info) {
          info.style.opacity = "0"
        }
      })
    })
  }
  
  // 3D Subscription Carousel
  const carouselWrapper = document.querySelector('.subscription-carousel-wrapper');
  const cards = document.querySelectorAll('.subscription-card');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  
  let currentIndex = 2; // Start with Premium (index 2) as active
  const cardCount = cards.length;
  const theta = 2 * Math.PI / cardCount;
  const radius = 360; // Adjust based on your design
  
  // Set initial positions
  function updateCarousel() {
      cards.forEach((card, index) => {
          const angle = theta * (index - currentIndex);
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius - radius;
          
          card.style.transform = `translateX(${x}px) translateZ(${z}px)`;
          card.classList.remove('active');
          
          // Update indicators
          indicators.forEach(ind => ind.classList.remove('active'));
          
          // Add active class to current card and indicator
          if (index === currentIndex) {
              card.classList.add('active');
              indicators[index].classList.add('active');
          }
      });
  }
  
  // Initialize carousel
  if (carouselWrapper) {
      updateCarousel();
      
      // Previous button click
      if (prevBtn) {
          prevBtn.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + cardCount) % cardCount;
              updateCarousel();
          });
      }
      
      // Next button click
      if (nextBtn) {
          nextBtn.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % cardCount;
              updateCarousel();
          });
      }
      
      // Indicator clicks
      indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
              currentIndex = index;
              updateCarousel();
          });
      });
      
      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;
      
      carouselWrapper.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
      });
      
      carouselWrapper.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
      });
      
      function handleSwipe() {
          if (touchEndX < touchStartX - 50) {
              // Swipe left - next card
              nextBtn.click();
          } else if (touchEndX > touchStartX + 50) {
              // Swipe right - previous card
              prevBtn.click();
          }
      }
      
      // Auto-rotate carousel (optional)
      let autoRotate = setInterval(() => {
          currentIndex = (currentIndex + 1) % cardCount;
          updateCarousel();
      }, 5000);
      
      // Stop auto-rotation on user interaction
      carouselWrapper.addEventListener('mouseenter', () => {
          clearInterval(autoRotate);
      });
      
      // Resume auto-rotation when mouse leaves
      carouselWrapper.addEventListener('mouseleave', () => {
          autoRotate = setInterval(() => {
              currentIndex = (currentIndex + 1) % cardCount;
              updateCarousel();
          }, 5000);
      });
      
      // Handle window resize
      window.addEventListener('resize', () => {
          updateCarousel();
      });
  }
  
  // Career Journey Animation
  const animationContainer = document.querySelector('.animation-container');
  if (animationContainer) {
      const scenes = document.querySelectorAll('.animation-scene');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const restartBtn = document.querySelector('.restart-btn');
      const progressIndicator = document.querySelector('.progress-indicator');
      
      let currentSceneIndex = 0;
      const totalScenes = scenes.length;
      let autoAdvanceTimer = null;
      let animationStarted = false;
      
      // Initialize progress bar
      updateProgressBar();
      
      // Initialize controls
      updateControls();
      
      // Next button click
      if (nextBtn) {
          nextBtn.addEventListener('click', () => {
              clearTimeout(autoAdvanceTimer);
              nextScene();
          });
      }
      
      // Previous button click
      if (prevBtn) {
          prevBtn.addEventListener('click', () => {
              clearTimeout(autoAdvanceTimer);
              prevScene();
          });
      }
      
      // Restart button click
      if (restartBtn) {
          restartBtn.addEventListener('click', () => {
              clearTimeout(autoAdvanceTimer);
              resetAnimation();
          });
      }
      
      // Next scene function
      function nextScene() {
          if (currentSceneIndex < totalScenes - 1) {
              // Remove active class from current scene
              scenes[currentSceneIndex].classList.remove('active');
              scenes[currentSceneIndex].classList.add('prev');
              
              // Increment scene index
              currentSceneIndex++;
              
              // Add active class to next scene
              scenes[currentSceneIndex].classList.remove('prev');
              scenes[currentSceneIndex].classList.add('active');
              
              // Update controls
              updateControls();
              
              // Set auto-advance for next scene (except the last one)
              if (currentSceneIndex < totalScenes - 1) {
                  autoAdvanceTimer = setTimeout(nextScene, 5000);
              }
          }
      }
      
      // Previous scene function
      function prevScene() {
          if (currentSceneIndex > 0) {
              // Remove active class from current scene
              scenes[currentSceneIndex].classList.remove('active');
              
              // Decrement scene index
              currentSceneIndex--;
              
              // Add active class to previous scene
              scenes[currentSceneIndex].classList.remove('prev');
              scenes[currentSceneIndex].classList.add('active');
              
              // Update controls
              updateControls();
              
              // Set auto-advance for this scene
              autoAdvanceTimer = setTimeout(nextScene, 5000);
          }
      }
      
      // Reset animation function
      function resetAnimation() {
          // Remove all active and prev classes
          scenes.forEach(scene => {
              scene.classList.remove('active', 'prev');
          });
          
          // Reset to first scene
          currentSceneIndex = 0;
          scenes[currentSceneIndex].classList.add('active');
          
          // Update controls
          updateControls();
          
          // Restart auto-advance
          autoAdvanceTimer = setTimeout(nextScene, 5000);
      }
      
      // Update controls function
      function updateControls() {
          // Update button states
          if (prevBtn) prevBtn.disabled = currentSceneIndex === 0;
          if (nextBtn) nextBtn.disabled = currentSceneIndex === totalScenes - 1;
          
          // Update progress bar
          updateProgressBar();
      }
      
      // Update progress bar function
      function updateProgressBar() {
          if (progressIndicator) {
              const progress = ((currentSceneIndex + 1) / totalScenes) * 100;
              progressIndicator.style.width = `${progress}%`;
          }
      }
      
      // Start animation function
      function startAnimation() {
          if (!animationStarted) {
              animationStarted = true;
              // Make sure first scene is active
              scenes.forEach((scene, index) => {
                  scene.classList.remove('active', 'prev');
                  if (index === 0) {
                      scene.classList.add('active');
                  }
              });
              
              // Start auto-advance timer
              autoAdvanceTimer = setTimeout(nextScene, 5000);
          }
      }
      
      // Initialize animation on scroll into view
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Start animation only when it comes into view
                  startAnimation();
              } else {
                  // Pause animation when out of view
                  clearTimeout(autoAdvanceTimer);
              }
          });
      }, { threshold: 0.3 });
      
      // Observe the animation container
      observer.observe(animationContainer);
  }
})

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("mobile-nav-active")

      // Create mobile nav if it doesn't exist yet
      if (!document.querySelector(".mobile-nav")) {
        const mobileNav = document.createElement("div")
        mobileNav.className = "mobile-nav"

        // Clone the navigation links
        const navLinks = nav.querySelector("ul").cloneNode(true)
        mobileNav.appendChild(navLinks)

        // Add close button
        const closeBtn = document.createElement("button")
        closeBtn.className = "mobile-nav-close"
        closeBtn.innerHTML = '<i class="fas fa-times"></i>'
        closeBtn.addEventListener("click", () => {
          nav.classList.remove("mobile-nav-active")
        })

        mobileNav.appendChild(closeBtn)
        nav.appendChild(mobileNav)
      }
    })
  }

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-nav-active")
    })
  })
})
