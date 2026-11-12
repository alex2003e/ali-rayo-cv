// Todo el contenido del sitio vive aquí, en español e inglés.
// Los componentes solo deciden cómo se ve; este archivo decide qué dice.

export const EMAIL = 'alirayopuches@gmail.com';
export const PHONE = '+57 313 661 9120';
export const LINKEDIN = 'https://linkedin.com/in/ali-rayo';
export const GITHUB = 'https://github.com/alex2003e';
export const CV_URL = '/cv-ali-rayo.pdf';

export const ui = {
  nav: { work: { es: 'Trabajo', en: 'Work' }, layers: { es: 'Capas', en: 'Layers' }, demo: { es: 'Demo', en: 'Demo' }, contact: { es: 'Contacto', en: 'Contact' } },
  status: { es: 'Disponible · Medellín y remoto', en: 'Available · Medellín and remote' },
  h1a: { es: 'Backend sólido.', en: 'Solid backend.' },
  h1b: { es: 'Interfaz con criterio.', en: 'Thoughtful interfaces.' },
  lead: {
    es: 'Soy Ali Rayo. Construyo APIs y plataformas con NestJS, Python y AWS, y las pantallas que las usan con HTML, CSS, JavaScript, React y Next.js.',
    en: 'I’m Ali Rayo. I build APIs and platforms with NestJS, Python and AWS, and the screens that use them with HTML, CSS, JavaScript, React and Next.js.',
  },
  seeWork: { es: 'Ver mi trabajo', en: 'See my work' },
  downloadCv: { es: 'Descargar CV', en: 'Download CV (PDF, Spanish)' },
  downloadCvShort: { es: 'Descargar CV', en: 'Download CV' },
  copyEmail: { es: 'Copiar correo', en: 'Copy email' },
  copied: { es: 'Correo copiado: ', en: 'Email copied: ' },
  stackHint: { es: 'Mueve el cursor sobre las capas', en: 'Move your cursor over the layers' },
  figTip: { es: 'Tócame: modo concentración', en: 'Tap me: focus mode' },
  figAria: { es: 'Ponerle los audífonos a Ali', en: 'Put headphones on Ali' },
  workTitle: { es: 'Trabajo seleccionado', en: 'Selected work' },
  workSub: { es: 'Abre cualquier proyecto para ver el problema, cómo lo construí y en qué estado está.', en: 'Open any project to see the problem, how I built it and where it stands.' },
  readCase: { es: 'Ver el caso', en: 'Read the case' },
  close: { es: 'Cerrar', en: 'Close' },
  privateRepo: { es: 'Repositorio privado. Puedo mostrarlo en una entrevista.', en: 'Private repository. Happy to walk through it in an interview.' },
  seeCode: { es: 'Ver el código en GitHub', en: 'See the code on GitHub' },
  layersTitle: { es: 'Cuatro capas, un solo producto', en: 'Four layers, one product' },
  layersSub: {
    es: 'Mi fuerte es el backend, pero trabajo en todas las capas: desde la pantalla que ve el usuario hasta la infraestructura que la sostiene.',
    en: 'Backend is my strength, but I work across every layer: from the screen people use to the infrastructure behind it.',
  },
  scrollHint: { es: 'Sigue bajando para separar las capas', en: 'Keep scrolling to separate the layers' },
  demoTitle: { es: 'Una petición, de punta a punta', en: 'One request, end to end' },
  demoSub: {
    es: 'Así responde una API construida por mí cuando llega un pedido: valida, revisa la sesión, aplica las reglas de negocio y lo guarda aislado por cliente. Prueba el camino feliz o un token vencido.',
    en: 'This is how an API I build handles an order: it validates, checks the session, applies the business rules and stores it isolated per client. Try the happy path or an expired token.',
  },
  sendReq: { es: 'Enviar petición', en: 'Send request' },
  sendExpired: { es: 'Enviar con token vencido', en: 'Send with expired token' },
  simulation: { es: 'Simulación', en: 'Simulation' },
  xpTitle: { es: 'Experiencia', en: 'Experience' },
  xpSub: { es: 'Backend para operaciones reales: energía solar, mercadeo y pymes.', en: 'Backend for real operations: solar energy, marketing and small businesses.' },
  ctaTitle: { es: '¿Construimos algo juntos?', en: 'Shall we build something together?' },
  builtWith: { es: 'Hecho con React y CSS, sin librerías de animación.', en: 'Built with React and CSS, no animation libraries.' },
};

export const stats = [
  { n: '20+', l: { es: 'APIs REST en producción', en: 'REST APIs in production' } },
  { n: '20×', l: { es: 'más throughput en una migración', en: 'more throughput in a data migration' } },
  { n: '−90%', l: { es: 'tiempo para corregir lotes fallidos', en: 'time to fix failed batches' } },
  { n: { es: '4+ años', en: '4+ years' }, l: { es: 'llevando backend a producción', en: 'shipping backend to production' } },
];

// size: 'big' ocupa 4 columnas, 'wide' la fila completa, el resto 2.
export const projects = [
  {
    id: 'openclaw', size: 'big', visual: 'roles', live: true,
    tag: { es: 'Código público', en: 'Public code' },
    title: 'OpenClaw Platform',
    short: { es: 'Plataforma multi-tenant: NestJS con Clean Architecture, PostgreSQL con row-level security y panel en Next.js.', en: 'Multi-tenant platform: NestJS with Clean Architecture, PostgreSQL row-level security and a Next.js dashboard.' },
    intro: { es: 'La base de una plataforma de automatización para muchos negocios a la vez. Cada cliente ve solo sus datos, y ese aislamiento lo garantiza la base de datos, no solo el código.', en: 'The foundation of an automation platform serving many businesses at once. Each client sees only its own data, and that isolation is enforced by the database, not just the code.' },
    points: [
      { es: 'API en NestJS con Clean Architecture por módulo: dominio, casos de uso e infraestructura.', en: 'NestJS API with Clean Architecture per module: domain, use cases and infrastructure.' },
      { es: 'PostgreSQL con row-level security y un rol de aplicación que no puede saltarse esas reglas.', en: 'PostgreSQL row-level security with an application role that can’t bypass those rules.' },
      { es: 'JWT de 15 minutos con refresh tokens rotativos en cookie httpOnly.', en: '15-minute JWTs with rotating refresh tokens in an httpOnly cookie.' },
      { es: 'Panel en Next.js y React con control de acceso por rol: super admin, admin y staff de cada tenant.', en: 'Next.js and React dashboard with role-based access: super admin, plus admin and staff per tenant.' },
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'React', 'Zod', 'pnpm'],
    repo: 'https://github.com/alex2003e/manager-agents-whatsapp',
  },
  {
    id: 'migration', visual: 'bars', live: true,
    tag: { es: 'En producción', en: 'In production' },
    dialogTag: { es: 'En producción · Mercadeo Virtual', en: 'In production · Mercadeo Virtual' },
    title: { es: 'Migración 20×', en: '20× migration' },
    dialogTitle: { es: 'Migración de 10 años de datos', en: 'Migrating 10 years of data' },
    short: { es: '10 años de SQL Server a MongoDB: de 0,5 a 10 lotes por minuto.', en: '10 years of SQL Server data moved to MongoDB: from 0.5 to 10 batches per minute.' },
    intro: { es: 'Una década de información en SQL Server tenía que pasar a MongoDB sin perder relaciones ni detener la operación. Diseñé y construí el pipeline completo.', en: 'A decade of SQL Server data had to move to MongoDB without losing relationships or stopping operations. I designed and built the whole pipeline.' },
    points: [
      { es: 'ETL en Python: unas 25 tablas relacionadas por lote, de 100 a 200 registros cada uno.', en: 'Python ETL: about 25 related tables per batch, 100 to 200 records each.' },
      { es: 'De 5 lotes cada 10 minutos a 50 lotes cada 5 minutos: 20 veces más rápido.', en: 'From 5 batches every 10 minutes to 50 batches every 5 minutes: 20 times faster.' },
      { es: 'Re-migración selectiva: corregir un lote pasó de 10 minutos a menos de 1.', en: 'Selective re-migration: fixing a batch went from 10 minutes to under 1.' },
      { es: 'Monitoreo que levanta contenedores Docker para reprocesar y avisa por correo si el error persiste.', en: 'Monitoring that spins up Docker containers to reprocess and sends an email if the error persists.' },
    ],
    stack: ['Python', 'SQL Server', 'MongoDB', 'Docker'],
  },
  {
    id: 'postgate', visual: 'flow',
    tag: 'MVP', dialogTag: { es: 'MVP en desarrollo', en: 'MVP in progress' },
    title: 'PostGate',
    short: { es: 'La IA redacta, tu equipo aprueba y se publica en varias redes.', en: 'AI drafts, your team approves, and it’s published across networks.' },
    intro: { es: 'La IA propone y el equipo decide. Genera publicaciones para redes sociales siguiendo las reglas de marca de cada cliente, y nada sale sin aprobación humana.', en: 'AI proposes, the team decides. It generates social media posts following each client’s brand rules, and nothing goes out without human approval.' },
    points: [
      { es: 'Reglas de marca por cliente: tono, público, hashtags y temas a evitar.', en: 'Brand rules per client: tone, audience, hashtags and topics to avoid.' },
      { es: 'Cola de aprobación por Telegram o Slack y publicación programada en Instagram, Facebook, LinkedIn y X.', en: 'Approval queue via Telegram or Slack, and scheduled publishing to Instagram, Facebook, LinkedIn and X.' },
      { es: 'Registro de auditoría: quién aprobó, qué se editó y cuándo salió.', en: 'Audit log: who approved, what was edited and when it went out.' },
    ],
    stack: ['Node.js', 'Python', 'PostgreSQL multi-tenant', 'OpenClaw'],
    private: true,
  },
  {
    id: 'turnosco', visual: 'calendar',
    tag: { es: 'En diseño', en: 'In design' },
    title: 'TurnosCO',
    short: { es: 'El costo laboral de un turno, con recargos, antes de publicarlo.', en: 'The labor cost of a shift, surcharges included, before you publish it.' },
    intro: { es: 'El software de nómina liquida lo que ya pasó. TurnosCO responde antes: ¿cabe en el presupuesto ese turno del domingo en la noche?', en: 'Payroll software settles what already happened. TurnosCO answers before: does that Sunday night shift fit the budget?' },
    points: [
      { es: 'Estima recargos nocturnos, dominicales, horas extra y topes legales de la Ley 2466 de 2025.', en: 'Estimates night and Sunday surcharges, overtime and legal limits under Colombia’s Law 2466 of 2025.' },
      { es: 'Doce reglas de negocio documentadas como fuente de verdad.', en: 'Twelve business rules documented as the source of truth.' },
      { es: 'Desarrollo guiado por especificación: especificar, planear, dividir en tareas e implementar.', en: 'Spec-driven development: specify, plan, break into tasks and implement.' },
    ],
    stack: [{ es: 'Motor de cálculo', en: 'Calculation engine' }, 'Spec-driven', 'Git Flow'],
    private: true,
  },
  {
    id: 'porcsync', visual: 'trace',
    tag: { es: 'Especificación', en: 'Specification' },
    title: 'PorcSync 360',
    short: { es: 'Trazabilidad porcina y cumplimiento de la normativa ICA.', en: 'Pig farm traceability and compliance with Colombia’s ICA regulations.' },
    intro: { es: 'Software para granjas porcinas: trazabilidad de cada animal, cumplimiento de la normativa del ICA y, más adelante, predicción de carne magra.', en: 'Software for pig farms: traceability for every animal, compliance with Colombia’s ICA regulations and, later on, lean meat prediction.' },
    points: [
      { es: 'Escribí la especificación, la matriz de cumplimiento ICA y el plan de entregas.', en: 'I wrote the specification, the ICA compliance matrix and the delivery plan.' },
      { es: 'Tres entregas: registros y normativa, reproducción y genética, predicción.', en: 'Three releases: records and compliance, breeding and genetics, prediction.' },
      { es: 'Reutiliza la base de AgroSync, con autorización de su autor.', en: 'Builds on AgroSync, with its author’s permission.' },
    ],
    stack: ['Spec Kit', { es: 'Cumplimiento normativo', en: 'Regulatory compliance' }],
    note: { es: 'Aún sin código: el proyecto está en fase de especificación.', en: 'No code yet: the project is in the specification phase.' },
  },
  {
    id: 'upload', size: 'wide', visual: 'code', live: true,
    tag: { es: 'Completo', en: 'Complete' },
    title: 'Upload File MS',
    short: { es: 'Microservicio NestJS reutilizable para subir, validar y guardar archivos en AWS S3.', en: 'Reusable NestJS microservice to upload, validate and store files in AWS S3.' },
    intro: { es: 'Un microservicio pequeño y reutilizable para que cualquier sistema suba y gestione archivos sin reinventar la carga, la validación ni el almacenamiento.', en: 'A small, reusable microservice so any system can upload and manage files without reinventing uploads, validation or storage.' },
    points: [
      { es: 'Varios archivos por petición en multipart/form-data.', en: 'Several files per request with multipart/form-data.' },
      { es: 'Validación por tipo de archivo y tamaño.', en: 'Validation by file type and size.' },
      { es: 'Almacenamiento configurable en AWS S3.', en: 'Configurable storage in AWS S3.' },
    ],
    stack: ['NestJS', 'Multer', 'AWS S3'],
    private: true,
  },
];

// i = posición en la pila 3D (0 abajo, 3 arriba).
export const layers = [
  { i: 3, short: { es: 'Interfaz', en: 'Interface' }, name: { es: 'Interfaz', en: 'Interface' }, desc: { es: 'Paneles, formularios validados y flujos con roles.', en: 'Dashboards, validated forms and role-based flows.' }, chips: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TanStack Query', 'Zod'] },
  { i: 2, short: 'API', name: { es: 'API y lógica', en: 'API and logic' }, desc: { es: 'REST, microservicios y Clean Architecture.', en: 'REST, microservices and Clean Architecture.' }, chips: ['NestJS', 'Node.js', 'Python', 'Flask', 'Django', 'C#', 'JWT', 'Swagger'] },
  { i: 1, short: { es: 'Datos', en: 'Data' }, name: { es: 'Datos', en: 'Data' }, desc: { es: 'Modelado, aislamiento por cliente y migraciones grandes.', en: 'Data modeling, per-tenant isolation and large migrations.' }, chips: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Prisma', 'ETL'] },
  { i: 0, short: { es: 'Nube', en: 'Cloud' }, name: { es: 'Nube y DevOps', en: 'Cloud and DevOps' }, desc: { es: 'Despliegues reproducibles y automatizados.', en: 'Reproducible, automated deployments.' }, chips: ['AWS', 'Lambda', 'API Gateway', 'S3', 'RDS', 'Terraform', 'Docker', 'GitHub Actions'] },
];

export const experience = [
  {
    when: { es: 'Jul 2025 – hoy', en: 'Jul 2025 – present' },
    role: { es: 'Desarrollador Backend Semi-Senior', en: 'Semi-Senior Backend Developer' },
    company: 'Home Power Colombia',
    points: [
      { es: 'Más de 10 APIs REST con NestJS y Python sobre AWS.', en: '10+ REST APIs with NestJS and Python on AWS.' },
      { es: 'CI/CD con GitHub Actions y Terraform.', en: 'CI/CD with GitHub Actions and Terraform.' },
      { es: 'Integración de Odoo, Zoho, Sunrun y Palmetto.', en: 'Integrations with Odoo, Zoho, Sunrun and Palmetto.' },
    ],
  },
  {
    when: { es: 'Jun 2022 – Ene 2025', en: 'Jun 2022 – Jan 2025' },
    role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
    company: 'Mercadeo Virtual',
    points: [
      { es: '5 microservicios desde cero y 6 evolucionados.', en: '5 microservices built from scratch and 6 evolved.' },
      { es: 'Migración de 10 años de datos, 20 veces más rápida.', en: 'Migration of 10 years of data, 20 times faster.' },
      { es: 'Reportes de producción automatizados.', en: 'Automated production reports.' },
    ],
  },
  {
    when: '2022 – 2024',
    role: { es: 'Desarrollador Backend Freelance', en: 'Freelance Backend Developer' },
    company: { es: 'Restaurantes, comercios y pymes', en: 'Restaurants, shops and small businesses' },
    points: [
      { es: 'Pedidos, inventario y facturación electrónica con Siigo y la DIAN.', en: 'Orders, inventory and e-invoicing with Siigo and the DIAN (Colombian tax authority).' },
      { es: 'Atención al cliente con IA generativa.', en: 'Customer support with generative AI.' },
    ],
  },
];

// Pasos de la demo. ms = duración simulada de cada paso.
export const demoSteps = {
  es: { val: 'Validación del cuerpo (class-validator)', jwt: 'JWT válido · rol TENANT_STAFF', exp: 'JWT vencido hace 2 min', rule: 'Regla de negocio: hay stock de los 2 ítems', db: 'PostgreSQL · RLS tenant=forno-doro · INSERT', q: 'Evento order.created → cola de notificaciones', refresh: 'El frontend usa el refresh token (cookie httpOnly) y reintenta…', newtok: 'Nuevo access token emitido · 15 min', retry: 'Reintento', idle: '// Pulsa “Enviar petición” para ver cómo recorre cada capa.' },
  en: { val: 'Body validation (class-validator)', jwt: 'Valid JWT · role TENANT_STAFF', exp: 'JWT expired 2 min ago', rule: 'Business rule: both items in stock', db: 'PostgreSQL · RLS tenant=forno-doro · INSERT', q: 'Event order.created → notification queue', refresh: 'The frontend uses the refresh token (httpOnly cookie) and retries…', newtok: 'New access token issued · 15 min', retry: 'Retry', idle: '// Press “Send request” to watch it travel through each layer.' },
};
export const hops = [{ es: 'Interfaz', en: 'Interface' }, 'API', 'Auth', { es: 'Reglas', en: 'Rules' }, 'PostgreSQL', { es: 'Cola', en: 'Queue' }];
