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
        'about.description': 'I am a fullstack developer, currently studying a cybersecurity specialization course to enhance my skills specifically in secure software development. I am passionate about technology and I am always learning new skills to improve. I stand out for my adaptability and fast learning, besides being a great communicator and a good team player.',

        'education.title': 'Education',
        'education.cybersecurity.title': 'Cybersecurity Specialization Course',
        'education.cybersecurity.description': 'Advanced professional training in ethical hacking, network hardening, forensic analysis, IT environment security regulations, and secure development.',
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
        'jobs.globant.description': 'Here I contributed all my knowledge about web development, mainly focused on the Frontend. I learned to manage on-time project delivery as well as working professionally in an international team. I worked with technologies such as Astro, Next.js, React, Liquid Shopify, and Tailwind among others.',
        'jobs.tecnoplus.description': 'My role in this job ranged from equipment assembly and maintenance, data recovery, and POS equipment preparation to server assembly and maintenance. It helped me a lot to learn how to work with different systems and solve technical problems.'
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
        'about.description': 'Soy un desarrollador fullstack, actualmente estudiando un curso de especialización en ciberseguridad para mejorar mis habilidades en concreto de la seguridad en el desarrollo de software. Me apasiona la tecnología y siempre estoy aprendiendo nuevas habilidades para mejorar. Me destaco por mi capacidad de adaptación y aprendizaje rápido, aparte de ser un gran comunicador y buen compañero de equipo.',

        'education.title': 'Educación',
        'education.cybersecurity.title': 'Curso de Especialización en Ciberseguridad',
        'education.cybersecurity.description': 'Formación profesional avanzada en hacking ético, bastionado de redes, análisis forense, normativas de seguridad en entornos TI y desarrollo seguro.',
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
        'jobs.globant.description': 'Aquí aporte todo mi conocimiento sobre el desarrollo web, sobre todo centrado en el Frontend, aprendí a gestionar la entrega a tiempo de proyectos así como trabajar profesionalmente en un equipo internacional. Estuve trabajando con tecnologías como Astro, Next.js, React, Liquid Sopify y Tailwind entre otras.',
        'jobs.tecnoplus.description': 'Mi labor en este puesto de trabajo era, desde el montaje de equipos y su mantenimiento, recuperación de datos y preparación de equipos TPV hasta montaje y mantenimiento de servidores. Me sirvió mucho para aprender a trabajar con diferentes sistemas y aprender a resolver problemas técnicos.'
    }
} as const