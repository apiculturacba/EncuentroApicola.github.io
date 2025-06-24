// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  speakers;
  rooms;
  activities;
  currentSpeakerId;
  currentRoomId;
  currentActivityId;
  constructor() {
    this.speakers = /* @__PURE__ */ new Map();
    this.rooms = /* @__PURE__ */ new Map();
    this.activities = /* @__PURE__ */ new Map();
    this.currentSpeakerId = 1;
    this.currentRoomId = 1;
    this.currentActivityId = 1;
    this.initializeData();
  }
  initializeData() {
    const speakersData = [
      { name: "Teresa Oyhambure", title: "Representante", organization: "CFI", bio: "Representante del Consejo Federal de Inversiones." },
      { name: "Marcelo P\xE9rez", title: "Responsable y coordinador del equipo ap\xEDcola", organization: "CFI", bio: "Responsable y coordinador del equipo ap\xEDcola del CFI." },
      { name: "Rodrigo Cerminara", title: "Especialista en Desarrollo Juvenil", organization: "Sector Productivo", bio: "Especialista en Desarrollo Juvenil del sector productivo." },
      { name: "Antonio Fabro", title: "Productor de material vivo, ex-docente", organization: "Sector Ap\xEDcola", bio: "Productor de material vivo y ex-docente del sector ap\xEDcola." },
      { name: "Marilina Beltramo", title: "Presidenta", organization: "Federaci\xF3n de Centros Juveniles regi\xF3n central", bio: "Presidenta de la Federaci\xF3n de Centros Juveniles de la regi\xF3n central." },
      { name: "Jorge Lanza", title: "Productor ap\xEDcola", organization: "Provincia de Buenos Aires", bio: "Productor ap\xEDcola de la Provincia de Buenos Aires." },
      { name: "Rodolfo Nicol\xE1s Bringas", title: "Productor ap\xEDcola", organization: "Villa de Soto", bio: "Productor ap\xEDcola de Villa de Soto." },
      { name: "Ezequiel Fabro", title: "Productor ap\xEDcola", organization: "Malabrigo, Santa Fe", bio: "Productor ap\xEDcola de Malabrigo, Santa Fe." },
      { name: "Mart\xEDn Colombani", title: "Apicultor", organization: "Sector Productivo", bio: "Apicultor del sector productivo." },
      { name: "Nicol\xE1s Fioretti", title: "Docente", organization: "Sector Educativo", bio: "Docente del sector educativo." },
      { name: "Melisa Geisa", title: "Moderadora", organization: "Equipo Organizador", bio: "Moderadora del equipo organizador." },
      { name: "Daniel Vieytes", title: "Asesor", organization: "Ministerio de Bioagroindustria", bio: "Asesor especializado del Ministerio de Bioagroindustria de la Provincia de C\xF3rdoba." },
      // Day 2 speakers  
      { name: "Mart\xEDn Llaryora", title: "Gobernador", organization: "Provincia de C\xF3rdoba", bio: "Gobernador de la Provincia de C\xF3rdoba." },
      { name: "Ignacio Lamothe", title: "Secretario General", organization: "Gobierno de C\xF3rdoba", bio: "Secretario General del Gobierno de C\xF3rdoba." },
      { name: "Monica Odstrcil", title: "Funcionaria", organization: "Gobierno de Tucum\xE1n", bio: "Especialista en innovaci\xF3n tecnol\xF3gica en apicultura tucumana e identificaci\xF3n de zonas \xF3ptimas mediante an\xE1lisis geoespacial." },
      { name: "Emanuel Canales Fuenzalida", title: "Productor y Especialista Ap\xEDcola", organization: "Chile", bio: "Productor y especialista ap\xEDcola de Chile, experto en apicultura regenerativa y determinaci\xF3n de est\xE1ndares de calidades de mieles." },
      { name: "Martin Colombani", title: "Docente y Productor", organization: "Sector Ap\xEDcola", bio: "Docente y productor especializado en estrategia sanitaria regional como sello de calidad sostenible." },
      { name: "Carolina Ulla", title: "CEO", organization: "AeroSustentable SAS", bio: "CEO de AeroSustentable SAS, especialista en sustentabilidad y liderazgo en apicultura." },
      { name: "Martin Girodo", title: "Productor", organization: "Nueva Zelanda", bio: "Productor de miel de Manuka en Nueva Zelanda, experto en diversificaci\xF3n continua como estrategia sustentable de valor." },
      { name: "Pablo Callieri", title: "CEO", organization: "Agro Catamarca S.A.", bio: "CEO de Agro Catamarca S.A., especialista en agregado de valor y conservaci\xF3n ambiental. Caso de \xE9xito: Miel de Yunga." },
      { name: "Gabriela Tama\xF1o", title: "Docente e Investigadora", organization: "Universidad", bio: "Docente e investigadora universitaria especializada en caracterizaci\xF3n y diferenciaci\xF3n de mieles como estrategia de valoraci\xF3n." },
      { name: "Teresa Oyhamburu", title: "Directora de Programas", organization: "CFI", bio: "Directora de Programas del Consejo Federal de Inversiones (CFI)." }
    ];
    speakersData.forEach((speaker) => {
      const id = this.currentSpeakerId++;
      this.speakers.set(id, { ...speaker, id, avatar: null });
    });
    const roomsData = [
      { name: "Auditorio Principal", capacity: 300, description: "Sala principal para conferencias y talleres" },
      { name: "Sala de Talleres", capacity: 80, description: "Sala para talleres pr\xE1cticos y actividades grupales" },
      { name: "Sala de Conferencias", capacity: 150, description: "Sala para conferencias especializadas" },
      { name: "Hall de Recepci\xF3n", capacity: 500, description: "\xC1rea de acreditaci\xF3n y recepci\xF3n de participantes" },
      { name: "Sala de Reuniones", capacity: 40, description: "Sala para reuniones y actividades espec\xEDficas" }
    ];
    roomsData.forEach((room) => {
      const id = this.currentRoomId++;
      this.rooms.set(id, { ...room, id, description: room.description || null });
    });
    const activitiesData = [
      // Day 1 - Jueves 10 de Julio
      {
        title: "Acreditaci\xF3n y Recepci\xF3n",
        description: "Registro de participantes y entrega de materiales del evento.",
        type: "registracion",
        day: 1,
        startTime: "15:00",
        endTime: "15:30",
        roomId: 4,
        speakerId: null,
        capacity: 300,
        requiresRegistration: false,
        tags: ["acreditaci\xF3n", "registro"]
      },
      {
        title: "Apertura - Inicio Taller",
        description: "Palabras de bienvenida!! Comentarios a la validaci\xF3n del diagn\xF3stico en territorio del equipo ap\xEDcola del CFI en relaci\xF3n a la integraci\xF3n generacional.",
        type: "conferencia",
        day: 1,
        startTime: "15:30",
        endTime: "15:45",
        roomId: 1,
        speakerId: 1,
        capacity: 300,
        requiresRegistration: false,
        tags: ["apertura", "bienvenida", "integraci\xF3n-generacional"]
      },
      {
        title: "La participaci\xF3n de j\xF3venes en actividades productivas. Tendencias y desaf\xEDos",
        description: "Rodrigo Cerminara: La situaci\xF3n actual de los j\xF3venes y su vinculaci\xF3n con proyectos productivos",
        type: "conferencia",
        day: 1,
        startTime: "15:50",
        endTime: "16:05",
        roomId: 1,
        speakerId: 3,
        capacity: 300,
        requiresRegistration: false,
        tags: ["j\xF3venes", "productividad", "tendencias"]
      },
      {
        title: "La importancia de la integraci\xF3n generacional en la apicultura",
        description: "Antonio Fabro: La importancia de la integraci\xF3n generacional en la apicultura. Desaf\xEDos de los j\xF3venes en emprendimientos productivos.",
        type: "conferencia",
        day: 1,
        startTime: "16:05",
        endTime: "16:20",
        roomId: 1,
        speakerId: 4,
        capacity: 300,
        requiresRegistration: false,
        tags: ["integraci\xF3n-generacional", "emprendimientos", "desaf\xEDos"]
      },
      {
        title: "L\xEDder, se nace o se hace?",
        description: "La importancia de la integraci\xF3n de j\xF3venes en la apicultura",
        type: "conferencia",
        day: 1,
        startTime: "16:30",
        endTime: "17:00",
        roomId: 1,
        speakerId: 5,
        capacity: 300,
        requiresRegistration: false,
        tags: ["liderazgo", "j\xF3venes", "integraci\xF3n"]
      },
      {
        title: "Casos de \xC9xito - J\xF3venes ap\xEDcolas de la regi\xF3n central",
        description: "Casos exitosos de j\xF3venes productores ap\xEDcolas de Balcarce, Villa de Soto y Santa Fe",
        type: "panel",
        day: 1,
        startTime: "17:15",
        endTime: "17:45",
        roomId: 1,
        speakerId: 6,
        capacity: 300,
        requiresRegistration: false,
        tags: ["casos-\xE9xito", "j\xF3venes", "regi\xF3n-central"]
      },
      {
        title: "Espacio de Preguntas y Propuestas",
        description: "Intercambio y participaci\xF3n del p\xFAblico con preguntas y propuestas.",
        type: "panel",
        day: 1,
        startTime: "17:45",
        endTime: "18:00",
        roomId: 1,
        speakerId: null,
        capacity: 300,
        requiresRegistration: false,
        tags: ["preguntas", "propuestas", "participaci\xF3n"]
      },
      {
        title: "Taller: Nuevo paradigma productivo. Tendencias y desaf\xEDos en el sector",
        description: "Los productores proponen la consigna disparadora y se reflexiona con los j\xF3venes apicultores. Conclusiones. Metodolog\xEDa: los j\xF3venes contestar\xE1n la consigna, se listar\xE1n en pantalla sus respuestas y se trabajar\xE1 sobre el abordaje de las mismas.",
        type: "taller",
        day: 1,
        startTime: "18:00",
        endTime: "18:40",
        roomId: 1,
        speakerId: 9,
        capacity: 300,
        requiresRegistration: false,
        tags: ["taller", "paradigma-productivo", "reflexi\xF3n"]
      },
      {
        title: "Cierre y Conclusiones",
        description: "Conclusiones del primer d\xEDa del evento.",
        type: "conferencia",
        day: 1,
        startTime: "18:40",
        endTime: "18:50",
        roomId: 1,
        speakerId: null,
        capacity: 300,
        requiresRegistration: false,
        tags: ["cierre", "conclusiones"]
      },
      // Day 2 activities (Friday July 11, 2025)
      {
        title: "Acreditaci\xF3n y Recepci\xF3n",
        description: "Registro de participantes y entrega de material del evento.",
        type: "registro",
        day: 2,
        startTime: "09:30",
        endTime: "10:30",
        roomId: 1,
        speakerId: null,
        capacity: 300,
        requiresRegistration: false,
        tags: ["registro", "bienvenida"]
      },
      {
        title: "Apertura Institucional",
        description: "Inicio de la Jornada T\xE9cnica con autoridades provinciales.",
        type: "ceremonia",
        day: 2,
        startTime: "10:30",
        endTime: "11:00",
        roomId: 1,
        speakerId: 15,
        capacity: 300,
        requiresRegistration: false,
        tags: ["apertura", "autoridades", "ceremonial"]
      },
      {
        title: "Innovaci\xF3n Tecnol\xF3gica y Productiva - Bloque 1",
        description: "La importancia de la Inteligencia Artificial (IA) y el uso de nuevas tecnolog\xEDas aplicadas a desarrollos ap\xEDcolas. Incluye innovaci\xF3n tecnol\xF3gica en apicultura tucumana, polinizaci\xF3n en sistemas productivos y plataforma de gesti\xF3n integral.",
        type: "conferencia",
        day: 2,
        startTime: "11:00",
        endTime: "11:45",
        roomId: 1,
        speakerId: 16,
        capacity: 300,
        requiresRegistration: true,
        tags: ["tecnolog\xEDa", "inteligencia artificial", "innovaci\xF3n", "polinizaci\xF3n"]
      },
      {
        title: "Innovaci\xF3n Tecnol\xF3gica y Productiva - Bloque 2",
        description: "Apicultura regenerativa en la regi\xF3n. Casos de \xE9xito: proyecciones y desaf\xEDos. Incluye determinaci\xF3n de est\xE1ndares de calidades de mieles y paisajes y corredores biol\xF3gicos en C\xF3rdoba.",
        type: "conferencia",
        day: 2,
        startTime: "11:45",
        endTime: "12:15",
        roomId: 1,
        speakerId: 17,
        capacity: 300,
        requiresRegistration: true,
        tags: ["apicultura regenerativa", "calidad", "biodiversidad", "chile"]
      },
      {
        title: "Innovaci\xF3n Organizacional - Bloque 1",
        description: "Innovaci\xF3n organizacional en grupo de productores y cooperativas. Estrategia sanitaria regional como sello de calidad sostenible y el poder del trabajo colectivo en consorcios ap\xEDcolas.",
        type: "panel",
        day: 2,
        startTime: "12:20",
        endTime: "13:00",
        roomId: 1,
        speakerId: 18,
        capacity: 300,
        requiresRegistration: true,
        tags: ["cooperativas", "organizaci\xF3n", "trabajo colectivo", "calidad"]
      },
      {
        title: "Innovaci\xF3n Organizacional - Bloque 2",
        description: "Sustentabilidad y liderazgo en apicultura. La importancia de la sustentabilidad y herramientas estrat\xE9gicas para el desarrollo productivo.",
        type: "conferencia",
        day: 2,
        startTime: "14:00",
        endTime: "14:20",
        roomId: 1,
        speakerId: 19,
        capacity: 300,
        requiresRegistration: true,
        tags: ["sustentabilidad", "liderazgo", "desarrollo productivo"]
      },
      {
        title: "Estrategias Comerciales y Valor Agregado - Bloque 1",
        description: "Certificaci\xF3n de mieles como oportunidad de diferenciaci\xF3n. Miel de Manuka y diversificaci\xF3n continua como estrategia sustentable de valor. Incluye caso de \xE9xito de Identificaci\xF3n Geogr\xE1fica (IG).",
        type: "panel",
        day: 2,
        startTime: "14:30",
        endTime: "15:00",
        roomId: 1,
        speakerId: 20,
        capacity: 300,
        requiresRegistration: true,
        tags: ["certificaci\xF3n", "manuka", "identificaci\xF3n geogr\xE1fica", "diferenciaci\xF3n"]
      },
      {
        title: "Estrategias Comerciales y Valor Agregado - Bloque 2",
        description: "Mieles regionales diferenciadas. Agregado de valor y conservaci\xF3n ambiental con casos de \xE9xito: Miel de Yunga, Miel de Flores de Altamisqui y Miel de Azahar de Lim\xF3n.",
        type: "panel",
        day: 2,
        startTime: "15:00",
        endTime: "15:45",
        roomId: 1,
        speakerId: 21,
        capacity: 300,
        requiresRegistration: true,
        tags: ["mieles regionales", "valor agregado", "conservaci\xF3n", "yunga", "chaco"]
      },
      {
        title: "Charla TED: Caracterizaci\xF3n y Diferenciaci\xF3n de Mieles",
        description: "Caracterizaci\xF3n y diferenciaci\xF3n de mieles como estrategia de valoraci\xF3n. Diferencia entre diferenciaci\xF3n y calidad, en el marco de la adulteraci\xF3n.",
        type: "charla especial",
        day: 2,
        startTime: "15:45",
        endTime: "16:00",
        roomId: 1,
        speakerId: 22,
        capacity: 300,
        requiresRegistration: true,
        tags: ["TED", "caracterizaci\xF3n", "diferenciaci\xF3n", "calidad", "adulteraci\xF3n"]
      },
      {
        title: "Fortalecimiento Institucional",
        description: "Acciones para el fortalecimiento del sector ap\xEDcola. Presentaci\xF3n de Lineamientos CFI para el sector ap\xEDcola, validaci\xF3n e implementaci\xF3n de acciones de fomento.",
        type: "presentaci\xF3n institucional",
        day: 2,
        startTime: "16:30",
        endTime: "17:00",
        roomId: 1,
        speakerId: null,
        capacity: 300,
        requiresRegistration: false,
        tags: ["CFI", "lineamientos", "fomento", "institucional"]
      },
      {
        title: "Cierre y Conclusiones",
        description: "Conclusiones del 3\xB0 Encuentro Federal Ap\xEDcola. Presentaci\xF3n de conclusiones finales con autoridades ministeriales.",
        type: "cierre",
        day: 2,
        startTime: "17:00",
        endTime: "17:30",
        roomId: 1,
        speakerId: 23,
        capacity: 300,
        requiresRegistration: false,
        tags: ["conclusiones", "cierre", "autoridades"]
      }
    ];
    activitiesData.forEach((activity) => {
      const id = this.currentActivityId++;
      this.activities.set(id, {
        ...activity,
        id,
        enrolled: 0,
        capacity: activity.capacity || null,
        roomId: activity.roomId || null,
        speakerId: activity.speakerId || null,
        requiresRegistration: activity.requiresRegistration || null,
        tags: activity.tags || null
      });
    });
  }
  getActivityWithDetails(activity) {
    return {
      ...activity,
      speaker: activity.speakerId ? this.speakers.get(activity.speakerId) : void 0,
      room: activity.roomId ? this.rooms.get(activity.roomId) : void 0
    };
  }
  async getSpeakers() {
    return Array.from(this.speakers.values());
  }
  async getSpeaker(id) {
    return this.speakers.get(id);
  }
  async createSpeaker(speaker) {
    const id = this.currentSpeakerId++;
    const newSpeaker = { ...speaker, id };
    this.speakers.set(id, newSpeaker);
    return newSpeaker;
  }
  async getRooms() {
    return Array.from(this.rooms.values());
  }
  async getRoom(id) {
    return this.rooms.get(id);
  }
  async createRoom(room) {
    const id = this.currentRoomId++;
    const newRoom = { ...room, id };
    this.rooms.set(id, newRoom);
    return newRoom;
  }
  async getActivities() {
    return Array.from(this.activities.values()).map(
      (activity) => this.getActivityWithDetails(activity)
    );
  }
  async getActivity(id) {
    const activity = this.activities.get(id);
    return activity ? this.getActivityWithDetails(activity) : void 0;
  }
  async getActivitiesByDay(day) {
    return Array.from(this.activities.values()).filter((activity) => activity.day === day).map((activity) => this.getActivityWithDetails(activity));
  }
  async searchActivities(query) {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.activities.values()).filter((activity) => {
      const speaker = activity.speakerId ? this.speakers.get(activity.speakerId) : void 0;
      return activity.title.toLowerCase().includes(lowerQuery) || activity.description.toLowerCase().includes(lowerQuery) || activity.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)) || speaker?.name.toLowerCase().includes(lowerQuery);
    }).map((activity) => this.getActivityWithDetails(activity));
  }
  async filterActivities(type, roomId) {
    return Array.from(this.activities.values()).filter((activity) => {
      if (type && activity.type !== type) return false;
      if (roomId && activity.roomId !== roomId) return false;
      return true;
    }).map((activity) => this.getActivityWithDetails(activity));
  }
  async createActivity(activity) {
    const id = this.currentActivityId++;
    const newActivity = { ...activity, id, enrolled: 0 };
    this.activities.set(id, newActivity);
    return newActivity;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/activities", async (req, res) => {
    try {
      const activities = await storage.getActivities();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching activities" });
    }
  });
  app2.get("/api/activities/day/:day", async (req, res) => {
    try {
      const day = parseInt(req.params.day);
      if (isNaN(day) || day < 1 || day > 3) {
        return res.status(400).json({ message: "Invalid day parameter" });
      }
      const activities = await storage.getActivitiesByDay(day);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Error fetching activities by day" });
    }
  });
  app2.get("/api/activities/search", async (req, res) => {
    try {
      const query = req.query.q;
      if (!query) {
        return res.status(400).json({ message: "Query parameter 'q' is required" });
      }
      const activities = await storage.searchActivities(query);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Error searching activities" });
    }
  });
  app2.get("/api/activities/filter", async (req, res) => {
    try {
      const type = req.query.type;
      const roomId = req.query.roomId ? parseInt(req.query.roomId) : void 0;
      const activities = await storage.filterActivities(type, roomId);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Error filtering activities" });
    }
  });
  app2.get("/api/speakers", async (req, res) => {
    try {
      const speakers = await storage.getSpeakers();
      res.json(speakers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching speakers" });
    }
  });
  app2.get("/api/rooms", async (req, res) => {
    try {
      const rooms = await storage.getRooms();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Error fetching rooms" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = async () => {
  const cartographerPlugin = process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [(await import("@replit/vite-plugin-cartographer")).cartographer()] : [];
  return defineConfig({
    base: "/EncuentroApicola.github.io/",
    plugins: [react(), runtimeErrorOverlay(), ...cartographerPlugin],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets")
      }
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"]
      }
    }
  });
};

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
