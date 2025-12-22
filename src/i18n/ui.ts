export const languages = {
    en: 'en',
    es: 'es'
}
export const defaultLang = 'es';
export const showDefaultLang = true;

export const ui = {
    en: {
        'hero.nombre': 'Hugo Ceniceros Olave',
        'hero.toggle': 'Toggle language',
        'hero.subtitle': 'DevSecOps Enthusiast',
        'hero.location': 'Logroño, Spain',
        'hero.link.cv': 'Download CV',
        'hero.link.github': 'Open GitHub',
        'hero.link.linkedin': 'Open LinkedIn',

        'about.title': 'About me',
        'about.description': 'I am a fullstack developer with experience building web and mobile applications. I love technology and I am always learning new skills to improve my craft.',

        'education.title': 'Education',
        'education.cybersecurity.title': 'Cybersecurity Specialization Course',
        'education.cybersecurity.description': 'Advanced professional training in ethical hacking, network hardening, forensic analysis, and IT environment security regulations.',
        'education.daw.title': 'Higher Technician in Web Application Development',
        'education.daw.description': 'Comprehensive training in fullstack development, including interface design, backend logic, database management, and application deployment.',
        'education.smr.title': 'Technician in Microcomputer Systems and Networks',
        'education.smr.description': 'Foundational technical training focused on hardware assembly, software installation, local network configuration, and system maintenance.',

        'skills.title': 'Skills',

        'projects.title': 'Projects',
        'project.vuln_scanner.title': 'Vulnerability Scanner',
        'project.vuln_scanner.description': 'A python-based automated tool performing security scans using OWASP ZAP and custom scripts. It generates detailed reports on vulnerabilities found in targeted web applications.',
        'project.secure_pipeline.title': 'Secure CI/CD Pipeline',
        'project.secure_pipeline.description': 'Integrated security testing into a Jenkins pipeline using SonarQube and Terraform. Automated infrastructure provisioning on AWS with strict security group configurations.',
        'project.banking_api.title': 'Secure Banking API',
        'project.banking_api.description': 'Backend API for financial transactions built with Java Spring Boot. Implements OAuth2, JWT authentication, and encyrption at rest/transit ensuring compliance with security standards.',
        'project.encrypted_chat.title': 'E2EE Chat App',
        'project.encrypted_chat.description': 'Real-time messaging application with End-to-End Encryption. Built with Node.js and React, utilizing WebSockets and local key generation for private communication.',

        'jobs.title': 'Work experience',
        'jobs.globant.description': 'I developed and maintained web applications using technologies such as React, Node.js and MongoDB. I collaborated with cross-functional teams to deliver high-quality projects on time.',
        'jobs.techsolutions.description': 'I participated in the development of web and mobile applications, working with technologies such as JavaScript, Python and SQL. I implemented scalable and optimized solutions to improve application performance.'
    },
    es: {
        'hero.nombre': 'Hugo Ceniceros Olave',
        'hero.toggle': 'Cambiar idioma',
        'hero.subtitle': 'DevSecOps Enthusiast',
        'hero.location': 'Logroño, España',
        'hero.link.cv': 'Descargar CV',
        'hero.link.github': 'Abrir GitHub',
        'hero.link.linkedin': 'Abrir LinkedIn',

        'about.title': 'Sobre mí',
        'about.description': 'Soy un desarrollador fullstack, actualmente estudiando un curso de especialización en ciberseguridad. Me apasiona la tecnología y siempre estoy aprendiendo nuevas habilidades para mejorar. Me destaco por mi capacidad de adaptación y aprendizaje rápido, aparte de ser un gran comunicador y buen compañero de equipo.',

        'education.title': 'Educación',
        'education.cybersecurity.title': 'Curso de Especialización en Ciberseguridad',
        'education.cybersecurity.description': 'Formación profesional avanzada en hacking ético, bastionado de redes, análisis forense y normativas de seguridad en entornos TI.',
        'education.daw.title': 'Técnico Superior en Desarrollo de Aplicaciones Web',
        'education.daw.description': 'Formación completa en desarrollo fullstack, incluyendo diseño de interfaces, lógica de backend, gestión de bases de datos y despliegue de aplicaciones.',
        'education.smr.title': 'Técnico en Sistemas Microinformáticos y Redes',
        'education.smr.description': 'Formación técnica base centrada en el montaje de equipos, instalación de software, configuración de redes locales y mantenimiento de sistemas.',

        'skills.title': 'Habilidades',

        'projects.title': 'Proyectos',
        'project.vuln_scanner.title': 'Escáner de Vulnerabilidades',
        'project.vuln_scanner.description': 'Herramienta automatizada en Python que realiza escaneos de seguridad utilizando OWASP ZAP y scripts personalizados. Genera reportes detallados sobre vulnerabilidades web.',
        'project.secure_pipeline.title': 'Pipeline CI/CD Seguro',
        'project.secure_pipeline.description': 'Integración de pruebas de seguridad en Jenkins usando SonarQube y Terraform. Aprovisionamiento automatizado en AWS con configuraciones estrictas de grupos de seguridad.',
        'project.banking_api.title': 'API Bancaria Segura',
        'project.banking_api.description': 'API Backend para transacciones financieras con Spring Boot. Implementa OAuth2, autenticación JWT y encriptación en reposo/tránsito cumpliendo estándares de seguridad.',
        'project.encrypted_chat.title': 'Chat Encriptado E2EE',
        'project.encrypted_chat.description': 'Aplicación de mensajería en tiempo real con Encriptación de Extremo a Extremo. Construida con Node.js y React, usa WebSockets y generación local de claves.',

        'jobs.title': 'Experiencia laboral',
        'jobs.globant.description': 'Aquí aporte todo mi conocimiento sobre el desarrollo web, sobre todo centrado en el Frontend, aprendí a gestionar la entrega a tiempo de proyectos así como trabajar profesionalmente en equipo internacional. Estuve trabajando con tecnologías como Astro, Next.js, React y Liquid Sopify entre otras.',
        'jobs.techsolutions.description': 'Mi labor en este puesto de trabajo era, desde el montaje de equipos y su mantenimiento, recuperación de datos y preparación de equipos TPV hasta montaje y mantenimiento de servidores.'
    }
} as const