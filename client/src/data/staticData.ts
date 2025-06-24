// Static data for GitHub Pages deployment
export const staticSpeakers = [
  { id: 1, name: "Teresa Oyhambure", title: "Representante", organization: "CFI", bio: "Representante del Consejo Federal de Inversiones.", avatar: null },
  { id: 2, name: "Marcelo Pérez", title: "Responsable y coordinador del equipo apícola", organization: "CFI", bio: "Responsable y coordinador del equipo apícola del CFI.", avatar: null },
  { id: 3, name: "Rodrigo Cerminara", title: "Especialista en Desarrollo Juvenil", organization: "Sector Productivo", bio: "Especialista en Desarrollo Juvenil del sector productivo.", avatar: null },
  { id: 4, name: "Antonio Fabro", title: "Productor de material vivo, ex-docente", organization: "Sector Apícola", bio: "Productor de material vivo y ex-docente del sector apícola.", avatar: null },
  { id: 5, name: "Marilina Beltramo", title: "Presidenta", organization: "Federación de Centros Juveniles región central", bio: "Presidenta de la Federación de Centros Juveniles de la región central.", avatar: null },
  { id: 6, name: "Jorge Lanza", title: "Productor apícola", organization: "Provincia de Buenos Aires", bio: "Productor apícola de la Provincia de Buenos Aires.", avatar: null },
  { id: 7, name: "Rodolfo Nicolás Bringas", title: "Productor apícola", organization: "Villa de Soto", bio: "Productor apícola de Villa de Soto.", avatar: null },
  { id: 8, name: "Ezequiel Fabro", title: "Productor apícola", organization: "Malabrigo, Santa Fe", bio: "Productor apícola de Malabrigo, Santa Fe.", avatar: null },
  { id: 9, name: "Martín Colombani", title: "Apicultor", organization: "Sector Productivo", bio: "Apicultor del sector productivo.", avatar: null },
  { id: 10, name: "Nicolás Fioretti", title: "Docente", organization: "Sector Educativo", bio: "Docente del sector educativo.", avatar: null },
  { id: 11, name: "Melisa Geisa", title: "Moderadora", organization: "Equipo Organizador", bio: "Moderadora del equipo organizador.", avatar: null },
  { id: 12, name: "Daniel Vieytes", title: "Asesor", organization: "Ministerio de Bioagroindustria", bio: "Asesor especializado del Ministerio de Bioagroindustria de la Provincia de Córdoba.", avatar: null },
  
  // Day 2 speakers  
  { id: 13, name: "Martín Llaryora", title: "Gobernador", organization: "Provincia de Córdoba", bio: "Gobernador de la Provincia de Córdoba.", avatar: null },
  { id: 14, name: "Ignacio Lamothe", title: "Secretario General", organization: "Gobierno de Córdoba", bio: "Secretario General del Gobierno de Córdoba.", avatar: null },
  { id: 15, name: "Monica Odstrcil", title: "Funcionaria", organization: "Gobierno de Tucumán", bio: "Especialista en innovación tecnológica en apicultura tucumana e identificación de zonas óptimas mediante análisis geoespacial.", avatar: null },
  { id: 16, name: "Emanuel Canales Fuenzalida", title: "Productor y Especialista Apícola", organization: "Chile", bio: "Productor y especialista apícola de Chile, experto en apicultura regenerativa y determinación de estándares de calidades de mieles.", avatar: null },
  { id: 17, name: "Martin Colombani", title: "Docente y Productor", organization: "Sector Apícola", bio: "Docente y productor especializado en estrategia sanitaria regional como sello de calidad sostenible.", avatar: null },
  { id: 18, name: "Carolina Ulla", title: "CEO", organization: "AeroSustentable SAS", bio: "CEO de AeroSustentable SAS, especialista en sustentabilidad y liderazgo en apicultura.", avatar: null },
  { id: 19, name: "Martin Girodo", title: "Productor", organization: "Nueva Zelanda", bio: "Productor de miel de Manuka en Nueva Zelanda, experto en diversificación continua como estrategia sustentable de valor.", avatar: null },
  { id: 20, name: "Pablo Callieri", title: "CEO", organization: "Agro Catamarca S.A.", bio: "CEO de Agro Catamarca S.A., especialista en agregado de valor y conservación ambiental. Caso de éxito: Miel de Yunga.", avatar: null },
  { id: 21, name: "Gabriela Tamaño", title: "Docente e Investigadora", organization: "Universidad", bio: "Docente e investigadora universitaria especializada en caracterización y diferenciación de mieles como estrategia de valoración.", avatar: null },
  { id: 22, name: "Teresa Oyhamburu", title: "Directora de Programas", organization: "CFI", bio: "Directora de Programas del Consejo Federal de Inversiones (CFI).", avatar: null }
];

export const staticRooms = [
  { id: 1, name: "Auditorio Principal", capacity: 300, description: "Sala principal para conferencias y talleres" },
  { id: 2, name: "Sala de Talleres", capacity: 80, description: "Sala para talleres prácticos y actividades grupales" },
  { id: 3, name: "Sala de Conferencias", capacity: 150, description: "Sala para conferencias especializadas" },
  { id: 4, name: "Hall de Recepción", capacity: 500, description: "Área de acreditación y recepción de participantes" },
  { id: 5, name: "Sala de Reuniones", capacity: 40, description: "Sala para reuniones y actividades específicas" }
];

export const staticActivities = [
  // Day 1 activities
  {
    id: 1,
    title: "Acreditación y Recepción",
    description: "Registro de participantes y entrega de material del evento.",
    type: "registro",
    day: 1,
    startTime: "15:00",
    endTime: "16:00",
    roomId: 1,
    speakerId: null,
    capacity: 300,
    enrolled: 0,
    requiresRegistration: false,
    tags: ["registro", "bienvenida"],
    speaker: undefined,
    room: staticRooms[0]
  },
  {
    id: 2,
    title: "Apertura Institucional",
    description: "Bienvenida oficial del 3er Encuentro Federal Apícola con autoridades del CFI y Ministerio de Bioagroindustria.",
    type: "ceremonia",
    day: 1,
    startTime: "16:00",
    endTime: "16:30",
    roomId: 1,
    speakerId: 1,
    capacity: 300,
    enrolled: 0,
    requiresRegistration: false,
    tags: ["apertura", "autoridades", "ceremonial"],
    speaker: staticSpeakers[0],
    room: staticRooms[0]
  },
  {
    id: 3,
    title: "Panel de Jóvenes Apicultores - Bloque 1",
    description: "Desafíos y oportunidades para los jóvenes en el sector apícola. Experiencias de jóvenes productores y su inserción en el mercado.",
    type: "panel",
    day: 1,
    startTime: "16:30",
    endTime: "17:30",
    roomId: 1,
    speakerId: 2,
    capacity: 300,
    enrolled: 0,
    requiresRegistration: true,
    tags: ["jóvenes", "experiencias", "inserción laboral"],
    speaker: staticSpeakers[1],
    room: staticRooms[0]
  },
  // Add more activities for day 1...
  
  // Day 2 activities
  {
    id: 12,
    title: "Acreditación y Recepción",
    description: "Registro de participantes y entrega de material del evento.",
    type: "registro",
    day: 2,
    startTime: "09:30",
    endTime: "10:30",
    roomId: 1,
    speakerId: null,
    capacity: 300,
    enrolled: 0,
    requiresRegistration: false,
    tags: ["registro", "bienvenida"],
    speaker: undefined,
    room: staticRooms[0]
  },
  {
    id: 13,
    title: "Apertura Institucional",
    description: "Inicio de la Jornada Técnica con autoridades provinciales.",
    type: "ceremonia",
    day: 2,
    startTime: "10:30",
    endTime: "11:00",
    roomId: 1,
    speakerId: 14,
    capacity: 300,
    enrolled: 0,
    requiresRegistration: false,
    tags: ["apertura", "autoridades", "ceremonial"],
    speaker: staticSpeakers[13],
    room: staticRooms[0]
  }
  // Add more day 2 activities...
];