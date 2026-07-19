// Proj/Exp Card Contents
const portfolioDatabase = {
    // Projects
    proj_crane: {
        title: "Three Degree-of-Freedom Robotic Crane Arm",
        subtitle: "May 2026",
        youtubeId: "CRqb28LxTqg",
        media: "assets/project-media/crane.jpeg",
        body: `
            <p>A 3-DOF robotic arm with custom 3D-printed components. User controllable via analog joystick with an intuitive crane-like control scheme.</p>
            <h4>About the Project</h4>
            <p>Process</p>
            <ul>
                <li>Designed full component assembly from scratch in SolidWorks, fitting parts to SG90 micro servos</li>
                <li>Used an Arduino Mega microcontroller to coordinate multi-axis motion and user input from the analog joystick</li>
                <li>Programmed input to motion logic in C++</li>
            </ul>
            <p>Results</p>
            <ul>
                <li>Joystick control scheme vastly simplifies the interaction between the user and crane arm</li>
                <li>Rotation limits & software constraints prevent binding and keep operation stable</li>
            </ul>
            <h4>Resources</h4>
            <ul>
                <li><a href="https://github.com/pierson-lee/JoystickRobotArm" target="_blank">Source Code</a></li>
                <li><a href="https://www.youtube.com/watch?v=CRqb28LxTqg" target="_blank">Video Demo</a></li>            
            </ul>
        `,
        images: []
    },
    proj_climate: {
        title: "3D Printer Room Climate System",
        subtitle: "Apr 2026 - May 2026",
        youtubeId: "cFxoUsjgsX4",
        body: `
            <p>A room climate sensor system that sends automated alerts to a user dashboard.</p>
            <h4>About the Project</h4>
            <p>Process</p>
            <ul>
                <li>Used an ESP32 and DHT11 humiture sensor for the physical sensor system, wall-powered via Micro-USB</li>
                <li>Integrated a Node.js and Express.js backend, implementing ngrok tunneling to enable wireless data transmission between the ESP32 and dashboard</li>
                <li>Programmed a web dashboard to convert raw sensor data into user-readable information. Also programmed logic to automatically test climate information against ideal filament printing conditions</li>
            </ul>
            <p>Results</p>
            <ul>
                <li>Dashboard delivers accurate reports on 3D-printing readiness based on filament type, humidity, and temperature</li>
                <li>Sensor readings from the data pipeline are stored and used to create historical graphs for user trend analysis</li>
            </ul>
            <h4>Resources</h4>
            <ul>
                <li><a href="https://github.com/pierson-lee/3D-Printer-Room-Climate-System" target="_blank">Source Code</a></li>
                <li><a href="https://www.youtube.com/watch?v=cFxoUsjgsX4" target="_blank">Video Demo</a></li>            
            </ul>
        `,
        images: [
            "assets/project-media/climatesystem.png"
        ]
    },
    proj_mount: {
        title: "BMW E46 Front Bumper Mount Holder",
        subtitle: "Mar 2026",
        media: "assets/project-media/brackets.jpeg",
        body: `
            <p>Low-modification, bolt-on bumper mount holders for a BMW E46.</p>
            <h4>About the Project</h4>
            <p>Process</p>
            <ul>
                <li>Mount holders were modelled in SolidWorks based off of dimensions taken from actual car bumper</li>
                <li>Defined custom PETG material properties, like strength and yield criteria, within SolidWorks Simulation FEA. Simulated stress distributions and deformation under loads up to 150 N (~34 lbs) per holder</li>
                <li>Conducted physical stress tests on 3D-printed prototypes to determine optimizable areas. Improved part strength through thickness, infill, and gussets</li>
            </ul>
            <p>Results</p>
            <ul>
                <li>Final mount holder performance far exceeds the total bumper weight of ~30 lbs</li>
                <li>Application method of the holders requires the least amount of vehicle modification compared to any other existing non-OEM repair solution</li>
            </ul>
        `,
        images: [
            "assets/project-media/bracketsfea.png",
            "assets/project-media/bracketsmodel.png"
        ],
    },
    proj_caps: {
        title: "Custom BBS Wheel Center Cap and Lock Set",
        subtitle: "Feb 2026",
        media: "assets/project-media/cap.png",
        body: `
            <p>Waffle style center caps for BBS RC 090/035/038 wheels, threading directly onto wheels via a custom locking mechanism.</p>
            <h4>About the Project</h4>
            <p>Process</p>
            <ul>
                <li>Designed locking mechanism and cap pattern in SolidWorks</li>
                <li>Performed impact testing on 3D-printed prototypes to locate areas that required strengthening</li>
                <li>Utilized iterative 3D printing to ensure OEM-like fit of the caps to the wheels</li>
                <li>Sanded and primed caps to achieve a smooth, high-quality finish</li>
            </ul>
            <p>Results</p>
            <ul>
                <li>Final design is 3x more durable compared to initial prototypes (determined through stress testing)</li>
                <li>Locking mechanism requires no hardware and makes cap installation easier compared to other market options</li>
            </ul>
        `,
        images: [
            "assets/project-media/capthread.png",
            "assets/project-media/capassembly.png",
            "assets/project-media/capproduct.png"
        ]
    },
    // Experience
    exp_i4i: {
        title: "Software Quality Analyst",
        subtitle: "i4i Inc. |  May 2025 - Aug 2025",
        logo: 'assets/project-media/i4i_logo.jpg',
        media: "", 
        body: `
            <ul>
                <li>Validated core features of the company's authoring tool by conducting test cases in collaboration with QA and development teams, resolving software functionality issues in JavaScript</li>
                <li>Updated code in legacy JavaScript web applications to resolve syntax compatibility errors during the platform migration to Chromium-based browsers, managing code changes and deployments with Git version control</li>
                <li>Created 25+ software defect reports detailing reproduction steps and severity levels to streamline developer debugging workflows</li>
            </ul>
        `,
        images: []
    },
    exp_uw: {
        title: "Mechanical Engineer",
        subtitle: "UW Formula Electric  |  Sep 2024 - Apr 2025",
        logo: 'assets/project-media/uwfe_logo.jpg',
        media: "", 
        body: `
            <ul>
                <li>Machined steel vehicle frame inserts using manual lathes and milling machines, interpreting engineering drawings and applying GD&T principles to achieve precise tolerances</li>
                <li>Implemented rapid prototyping workflows via 3D printing to verify dimensions and assembly fitment for mating parts prior to final production</li>
                <li>Fabricated sheet metal shoulder harness covers using a pan brake, executing precise bends to ensure compliance with chassis mounting points</li>
            </ul>
        `,
        images: []
    }
};

// Open Proj/Exp Card
function openModal(itemId) {
    // Select Proj/Exp
    const data = portfolioDatabase[itemId];
    if (!data) return;

    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.opacity = '0'; 
        modalContent.scrollTop = 0;      
    }

    const modalBody = document.getElementById('modal-body');
    
    // Check for main image
    const mediaHTML = data.media ? `<img src="${data.media}" alt="${data.title}">` : '';

    // Check for yt video
    let videoHTML = '';
    if (data.youtubeId) {
        const videoParams = `mute=1&controls=0&loop=1&playlist=${data.youtubeId}&rel=0`;
        // Load video into variable
        videoHTML = `
            <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 15px 0 25px 0; border-radius: 6px; border: 1px solid var(--border-color);">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                    src="https://www.youtube.com/embed/${data.youtubeId}?${videoParams}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    // Extra images
    let galleryHTML = '';
    const projectImages = data.images || [];

    if (projectImages.length > 0) {
        galleryHTML = '<h4>Images</h4><div class="project-gallery">';
        
        projectImages.forEach((imgUrl, index) => {
            galleryHTML += `
                <div class="image-wrapper">
                    <img src="${imgUrl}" alt="${data.title} gallery image ${index + 1}">
                </div>
            `;
        });
        
        galleryHTML += '</div>';
    }

    const logoHTML = data.logo ? `<img src="${data.logo}" alt="" class="modal-company-logo">` : '';
    
    // Load card components
    modalBody.innerHTML = `
        <div class="modal-header-row">
            ${logoHTML}
            <div class="modal-header-text">
                <h2>${data.title}</h2>
                <div class="modal-subtitle">${data.subtitle}</div>
            </div>
        </div>
        ${videoHTML}
        ${mediaHTML}
        <div>${data.body}</div>
        ${galleryHTML}
    `;

    document.getElementById('portfolio-modal').classList.add('active');
    document.body.style.overflow = 'hidden'; 

    // Gradual open
    setTimeout(() => {
        requestAnimationFrame(() => {
            if (modalContent) modalContent.scrollTop = 0;
            
            const modalOverlay = document.getElementById('portfolio-modal');
            if (modalOverlay) modalOverlay.scrollTop = 0;

            if (modalContent) {
                modalContent.style.opacity = '1';
            }
        });
    }, 15); 
}

// Close Proj/Exp Card
function closeModal() {
    document.getElementById('portfolio-modal').classList.remove('active');
    document.body.style.overflow = ''; 
}

// Close the modal with the Escape key as a helpful accessibility/ux shortcut
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});