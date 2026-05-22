const areas = [
  {
    id: "negocios",
    title: "Negocios",
    icon: "📊",
    description: "Estrategia, finanzas, emprendimiento y análisis de mercados.",
    careers: [
      "Licenciatura en Contaduría Pública y Finanzas",
      "Licenciatura en Desarrollo de Talento y Cultura Organizacional",
      "Licenciatura en Emprendimiento e Innovación",
      "Licenciatura en Estrategia y Transformación de Negocios",
      "Licenciatura en Finanzas",
      "Licenciatura en Inteligencia de Negocios",
      "Licenciatura en Mercadotecnia",
      "Licenciatura en Negocios Internacionales",
    ],
    pdfTagline: "Toma decisiones con datos, presenta mejor tus ideas y organiza proyectos con claridad.",
    aiTools: [
      {
        name: "ChatGPT",
        use: "Lluvia de ideas, análisis, correos y resúmenes ejecutivos.",
        pdfDescription:
          "Asistente conversacional para desarrollar ideas, aterrizar estrategias, estructurar presentaciones y convertir información dispersa en propuestas accionables.",
        pdfUse:
          "Úsalo para redactar correos profesionales, crear planes de negocio, resumir reuniones, preparar pitches y generar primeras versiones de reportes ejecutivos.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Perplexity",
        use: "Búsqueda con fuentes para mercado, tendencias y competencia.",
        pdfDescription:
          "Motor de respuesta con enfoque en investigación rápida que cita fuentes web y facilita contrastar información reciente sobre industrias, consumidores y competidores.",
        pdfUse:
          "Úsalo para validar tendencias, buscar benchmarks, investigar mercados, comparar competidores y respaldar tus decisiones con referencias verificables.",
        url: "https://www.perplexity.ai/",
      },
      {
        name: "Claude",
        use: "Redacción larga, reportes y síntesis de documentos.",
        pdfDescription:
          "Herramienta orientada a trabajar con textos extensos, ideal para revisar documentos, resumir información compleja y reorganizar contenido con claridad.",
        pdfUse:
          "Úsalo para sintetizar reportes financieros, reescribir propuestas, organizar documentos largos y producir versiones ejecutivas más claras y ordenadas.",
        url: "https://claude.ai/",
      },
      {
        name: "Power BI",
        use: "Tableros, métricas y visualización de datos.",
        pdfDescription:
          "Plataforma de analítica y visualización que transforma datos en dashboards útiles para seguimiento de indicadores, toma de decisiones y comunicación de resultados.",
        pdfUse:
          "Úsalo para construir tableros de ventas, monitorear KPIs, cruzar bases de datos y presentar métricas de negocio de forma visual y comprensible.",
        url: "https://www.microsoft.com/power-platform/products/power-bi",
      },
      {
        name: "Notion AI",
        use: "Organización de proyectos, notas y seguimiento.",
        pdfDescription:
          "Espacio de trabajo con funciones de IA para ordenar información, generar contenido, resumir notas y mantener proyectos colaborativos bien documentados.",
        pdfUse:
          "Úsalo para crear agendas, documentar avances, resumir clases o juntas y mantener un seguimiento claro de tareas, entregables y responsables.",
        url: "https://www.notion.so/product/ai",
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Redacción, análisis y brainstorming." },
      { name: "Claude", use: "Documentos largos y síntesis." },
      { name: "Perplexity", use: "Investigación rápida con fuentes." },
      { name: "Power BI", use: "Visualización y dashboards." },
    ],
    insight: "Para negocios, combina investigación, presentaciones y análisis de datos.",
    promptTips: [
      "Pide contexto, objetivo y formato de salida.",
      "Incluye audiencia, tono y duración esperada.",
      "Solicita 3 opciones para comparar y elegir mejor.",
      "Define que informacion no debe inventar y que datos debe validar.",
      "Pide una version breve y otra detallada para decidir cual usar.",
      "Solicita ejemplos aplicados a tu caso real antes de cerrar la respuesta.",
    ],
  },
  {
    id: "ingenieria",
    title: "Ingeniería y Ciencias",
    icon: "🧪",
    description: "Modelado, laboratorio, simulación y resolución de problemas técnicos.",
    careers: [
      "Ingeniería Biomédica",
      "Ingeniería Civil",
      "Ingeniería en Alimentos",
      "Ingeniería en Biosistemas Agroalimentarios",
      "Ingeniería en Biotecnología",
      "Ingeniería en Desarrollo Sustentable",
      "Ingeniería en Electrónica y Semiconductores",
      "Ingeniería en Física Industrial",
      "Ingeniería en Innovación y Desarrollo",
      "Ingeniería en Inteligencia Artificial y Ciencia de Datos",
      "Ingeniería en Nanotecnología y Materiales",
      "Ingeniería en Robótica y Sistemas Inteligentes",
      "Ingeniería en Tecnologías Computacionales",
      "Ingeniería en Transformación Digital de Negocios",
      "Ingeniería Industrial y de Sistemas",
      "Ingeniería Mecánica",
      "Ingeniería Mecatrónica",
      "Ingeniería Química",
      "Licenciatura en Biociencias",
    ],
    pdfTagline: "Convierte conceptos complejos en explicaciones, cálculos y prototipos más rápidos.",
    aiTools: [
      {
        name: "ChatGPT",
        use: "Explicaciones, fórmulas, lógica y apoyo en código.",
        pdfDescription:
          "Asistente útil para traducir teoría compleja a explicaciones más claras, revisar enfoques de solución y acompañar procesos de análisis técnico.",
        pdfUse:
          "Úsalo para entender conceptos, pedir ejemplos paso a paso, depurar lógica de algoritmos y convertir requerimientos técnicos en planes de trabajo.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Wolfram Alpha",
        use: "Cálculo, álgebra y verificación de resultados.",
        pdfDescription:
          "Motor computacional especializado en matemáticas, física e ingeniería, útil para resolver operaciones, verificar resultados y visualizar procedimientos.",
        pdfUse:
          "Úsalo para comprobar ecuaciones, resolver derivadas e integrales, validar conversiones y revisar si tus cálculos intermedios son consistentes.",
        url: "https://www.wolframalpha.com/",
      },
      {
        name: "GitHub Copilot",
        use: "Programación asistida y limpieza de código.",
        pdfDescription:
          "Asistente de desarrollo integrado en el editor que ayuda a escribir, completar, refactorizar y explorar soluciones de código con mayor velocidad.",
        pdfUse:
          "Úsalo para generar funciones base, completar estructuras repetitivas, documentar fragmentos de código y acelerar prototipos técnicos.",
        url: "https://github.com/features/copilot",
      },
      {
        name: "Notion AI",
        use: "Documentación y organización de proyectos.",
        pdfDescription:
          "Entorno de documentación que permite capturar decisiones técnicas, resumir hallazgos y convertir notas dispersas en bitácoras útiles.",
        pdfUse:
          "Úsalo para documentar experimentos, registrar avances, crear reportes de laboratorio y ordenar materiales de estudio o desarrollo.",
        url: "https://www.notion.so/product/ai",
      },
      {
        name: "Perplexity",
        use: "Consulta de fuentes técnicas y referencias.",
        pdfDescription:
          "Buscador con respuestas resumidas y citas que facilita explorar documentación, referencias técnicas y comparativas de tecnologías.",
        pdfUse:
          "Úsalo para investigar estándares, revisar documentación reciente, ubicar papers o encontrar referencias técnicas confiables con rapidez.",
        url: "https://www.perplexity.ai/",
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Explicar conceptos, fórmulas y código." },
      { name: "Wolfram Alpha", use: "Cálculo y álgebra." },
      { name: "GitHub Copilot", use: "Programación asistida." },
      { name: "Notion AI", use: "Organizar proyectos y apuntes." },
    ],
    insight: "En ingeniería, la IA ayuda a calcular, documentar y prototipar más rápido.",
    promptTips: [
      "Describe el problema, los datos y lo que ya intentaste.",
      "Pide pasos intermedios, no solo la respuesta final.",
      "Solicita validación o revisión de tu procedimiento.",
      "Especifica unidades, restricciones y precision numerica esperada.",
      "Pide una comprobacion final con metodos alternativos si es posible.",
      "Solicita que identifique supuestos y riesgos tecnicos de la solucion.",
    ],
  },
  {
    id: "arquitectura_arte_diseno",
    title: "Arquitectura, Arte y Diseño",
    icon: "🎨",
    description: "Creatividad visual, prototipado, composición y experiencia de usuario.",
    careers: ["Arquitectura", "Licenciatura en Arte Digital", "Licenciatura en Diseño", "Licenciatura en Urbanismo"],
    pdfTagline: "Explora ideas, crea prototipos y presenta conceptos visuales con más velocidad.",
    aiTools: [
      {
        name: "Figma",
        use: "Diseño de interfaces, prototipos y sistemas visuales.",
        pdfDescription:
          "Plataforma colaborativa para diseñar pantallas, sistemas visuales, flujos de usuario y prototipos navegables en equipo.",
        pdfUse:
          "Úsalo para wireframes, prototipos UX/UI, componentes reutilizables, mapas de experiencia y presentaciones de diseño funcional.",
        url: "https://www.figma.com/",
      },
      {
        name: "Adobe Firefly",
        use: "Generación de imágenes e ideas visuales.",
        pdfDescription:
          "Herramienta generativa enfocada en producir variaciones visuales, composiciones gráficas y recursos creativos listos para iterar.",
        pdfUse:
          "Úsalo para generar conceptos visuales, fondos, variaciones de estilo, exploraciones de color y apoyo para presentaciones creativas.",
        url: "https://firefly.adobe.com/",
      },
      {
        name: "Canva",
        use: "Piezas rápidas, presentaciones y posters.",
        pdfDescription:
          "Editor visual accesible para crear materiales de comunicación, portadas, infografías y presentaciones con rapidez.",
        pdfUse:
          "Úsalo para armar posters, dossieres visuales, presentaciones académicas, piezas de redes y materiales de comunicación express.",
        url: "https://www.canva.com/",
      },
      {
        name: "Midjourney",
        use: "Exploración conceptual y moodboards.",
        pdfDescription:
          "Generador de imágenes orientado a exploración conceptual, estética y narrativa visual para fases tempranas de ideación.",
        pdfUse:
          "Úsalo para moodboards, exploración de estilos, referencias visuales, atmósferas y conceptos previos antes de producir piezas finales.",
        url: "https://www.midjourney.com/",
      },
      {
        name: "ChatGPT",
        use: "Briefs, naming, storytelling y presentaciones.",
        pdfDescription:
          "Asistente textual que ayuda a construir el discurso detrás de una propuesta visual: concepto, narrativa, estructura y argumentación.",
        pdfUse:
          "Úsalo para escribir briefs, definir nombres, construir storytelling, preparar racionales de diseño y fortalecer presentaciones ante clientes o docentes.",
        url: "https://chatgpt.com/",
      },
    ],
    tools: [
      { name: "Figma", use: "Diseño de interfaces y prototipos." },
      { name: "Adobe Firefly", use: "Generación visual e ideas." },
      { name: "Canva", use: "Piezas rápidas y presentaciones." },
      { name: "Midjourney", use: "Exploración conceptual." },
    ],
    insight: "En diseño, usa IA para idear, iterar y presentar conceptos con rapidez.",
    promptTips: [
      "Define estilo, colores, referencia y formato de entrega.",
      "Pide variantes: minimalista, profesional o experimental.",
      "Especifica el objetivo de usuario o cliente.",
      "Aclara plataforma de uso (web, movil, cartel, redes) antes de generar.",
      "Pide una propuesta visual y otra centrada en conversion o claridad.",
      "Solicita criterios de evaluacion del diseno para iterar mas rapido.",
    ],
  },
  {
    id: "sociales_gobierno",
    title: "Ciencias Sociales y Gobierno",
    icon: "🏛️",
    description: "Análisis social, derecho, economía, política pública y relaciones internacionales.",
    careers: [
      "Licenciatura en Derecho",
      "Licenciatura en Economía",
      "Licenciatura en Gobierno y Transformación Pública",
      "Licenciatura en Relaciones Internacionales",
    ],
    pdfTagline: "Argumenta con claridad, sustenta con fuentes y transforma realidades desde lo público y lo social.",
    aiTools: [
      {
        name: "ChatGPT",
        use: "Redacción, esquemas, análisis y preparación de ideas.",
        pdfDescription:
          "Asistente útil para ordenar argumentos, plantear esquemas de ensayo, preparar intervenciones y revisar distintas perspectivas de un tema.",
        pdfUse:
          "Úsalo para estructurar ensayos, preparar debates, generar preguntas de estudio, resumir lecturas y practicar explicaciones con lenguaje claro.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Grammarly",
        use: "Corrección de estilo y claridad.",
        pdfDescription:
          "Herramienta enfocada en mejorar claridad, gramática, tono y consistencia en textos académicos y profesionales.",
        pdfUse:
          "Úsalo para corregir redacción, mejorar claridad argumentativa, pulir ensayos y revisar si tu texto suena más formal, claro o persuasivo.",
        url: "https://www.grammarly.com/",
      },
      {
        name: "Perplexity",
        use: "Búsqueda con fuentes para investigación.",
        pdfDescription:
          "Buscador asistido con citas que ayuda a localizar fuentes iniciales, referencias contextuales y explicaciones sintetizadas de temas complejos.",
        pdfUse:
          "Úsalo para ubicar antecedentes, comparar posturas, iniciar una investigación y reunir referencias para lecturas o trabajos escritos.",
        url: "https://www.perplexity.ai/",
      },
      {
        name: "Notion AI",
        use: "Resúmenes, notas y organización de lectura.",
        pdfDescription:
          "Plataforma de trabajo para organizar notas, lecturas, fichas y resúmenes dentro de un mismo espacio estructurado.",
        pdfUse:
          "Úsalo para resumir capítulos, construir fichas de lectura, ordenar ideas por tema y consolidar materiales de investigación.",
        url: "https://www.notion.so/product/ai",
      },
      {
        name: "Claude",
        use: "Textos largos, síntesis y revisión de documentos.",
        pdfDescription:
          "Asistente particularmente fuerte en lectura y síntesis de textos extensos, comparación de documentos y reorganización de ideas complejas.",
        pdfUse:
          "Úsalo para revisar artículos largos, extraer ideas clave, comparar textos, resumir documentos jurídicos o académicos y reorganizar argumentos.",
        url: "https://claude.ai/",
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Redacción y estructuración de ideas." },
      { name: "Grammarly", use: "Corrección de estilo." },
      { name: "Perplexity", use: "Búsqueda y síntesis de fuentes." },
      { name: "Notion AI", use: "Resúmenes y organización." },
    ],
    insight: "En humanidades, la IA sirve para argumentar mejor, resumir y comparar fuentes.",
    promptTips: [
      "Pide estructura, tono y longitud deseada.",
      "Solicita ejemplos de contraargumentos o casos.",
      "Pide que te resuma y luego que te haga preguntas de repaso.",
      "Solicita fuentes sugeridas y palabras clave para ampliar investigacion.",
      "Pide revision de sesgos o vacios argumentativos en tu texto.",
      "Solicita una version academica y otra divulgativa del mismo contenido.",
    ],
  },
  {
    id: "humanidades_educacion",
    title: "Humanidades y Educación",
    icon: "🧠",
    description: "Comunicación, cultura, educación, creación y análisis humanista con tecnología.",
    careers: [
      "Licenciatura en Comunicación y Producción Digital",
      "Licenciatura en Humanidades Digitales e Inteligencia Artificial",
      "Licenciatura en Innovación y Transformación Educativa",
      "Licenciatura en Letras y Emprendimiento Editorial",
      "Licenciatura en Tecnología y Producción Musical",
    ],
    pdfTagline: "Estructura ideas, crea contenido y aprende más rápido con investigación y herramientas de IA.",
    aiTools: [
      {
        name: "ChatGPT",
        use: "Redacción, guiones, esquemas y apoyo creativo.",
        pdfDescription:
          "Asistente útil para ordenar ideas, construir estructuras narrativas, preparar guiones, revisar argumentos y mejorar claridad en textos.",
        pdfUse:
          "Úsalo para escribir borradores, convertir apuntes en guías de estudio, proponer estructuras de ensayo, generar actividades didácticas y practicar explicaciones.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Claude",
        use: "Lectura de textos largos y síntesis.",
        pdfDescription:
          "Herramienta enfocada en trabajar con documentos extensos, ideal para sintetizar, comparar versiones y reorganizar contenido con claridad.",
        pdfUse:
          "Úsalo para resumir lecturas, reorganizar capítulos, comparar argumentos, pulir estilo y generar versiones ejecutivas de textos largos.",
        url: "https://claude.ai/",
      },
      {
        name: "Perplexity",
        use: "Búsqueda con fuentes para investigación.",
        pdfDescription:
          "Buscador asistido con citas que ayuda a ubicar fuentes iniciales, antecedentes y referencias para investigar con mayor rapidez.",
        pdfUse:
          "Úsalo para armar bibliografía inicial, localizar antecedentes, encontrar definiciones con fuentes y contrastar posturas de autores.",
        url: "https://www.perplexity.ai/",
      },
      {
        name: "Notion AI",
        use: "Notas, resúmenes y organización de estudio.",
        pdfDescription:
          "Espacio de trabajo para organizar lecturas, fichas, apuntes y proyectos; útil para consolidar materiales en un solo lugar.",
        pdfUse:
          "Úsalo para resumir capítulos, construir fichas de lectura, organizar proyectos creativos y planear entregables.",
        url: "https://www.notion.so/product/ai",
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Redacción, guiones y estudio." },
      { name: "Claude", use: "Síntesis de textos largos." },
      { name: "Perplexity", use: "Investigación con fuentes." },
      { name: "Notion AI", use: "Notas y organización." },
    ],
    insight: "En humanidades y educación, la IA te ayuda a estudiar, crear y argumentar con mejores fuentes.",
    promptTips: [
      "Define el objetivo (estudiar, crear, argumentar) y el público.",
      "Pide estructura antes de pedir redacción final.",
      "Solicita ejemplos y contraejemplos para afinar tu criterio.",
      "Pide que cite o sugiera fuentes y palabras clave de búsqueda.",
      "Pide una versión breve y otra detallada para elegir.",
      "Pide retroalimentación: claridad, tono, coherencia y sesgos.",
    ],
  },
  {
    id: "medicina_salud",
    title: "Medicina y Ciencias de la Salud",
    icon: "🩺",
    description: "Atención clínica, bienestar, prevención, evidencia científica y trabajo interdisciplinario.",
    careers: [
      "Médico Cirujano",
      "Médico Cirujano Odontólogo",
      "Licenciatura en Nutrición y Bienestar Integral",
      "Licenciatura en Psicología Clínica y de la Salud",
    ],
    pdfTagline: "Convierte información clínica en estudio efectivo, comunicación clara y decisiones con evidencia.",
    aiTools: [
      {
        name: "ChatGPT",
        use: "Repaso, casos clínicos simulados y explicación de conceptos.",
        pdfDescription:
          "Asistente para estudiar conceptos, practicar razonamiento clínico con casos simulados y convertir apuntes en guías de repaso.",
        pdfUse:
          "Úsalo para crear preguntas tipo examen, repasar mecanismos, practicar anamnesis, y generar resúmenes con tablas y mnemotecnias.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Perplexity",
        use: "Búsqueda con fuentes para temas de salud.",
        pdfDescription:
          "Buscador asistido con citas que ayuda a ubicar fuentes iniciales y guías para investigación rápida (siempre validando en fuentes clínicas oficiales).",
        pdfUse:
          "Úsalo para encontrar guías, revisiones y definiciones; luego verifica en fuentes académicas y clínicas confiables antes de usarlo en tareas.",
        url: "https://www.perplexity.ai/",
      },
      {
        name: "Claude",
        use: "Síntesis de artículos y documentos largos.",
        pdfDescription:
          "Herramienta útil para sintetizar papers, comparar secciones y estructurar resúmenes largos con claridad.",
        pdfUse:
          "Úsalo para resumir artículos, extraer ideas clave, construir mapas conceptuales y comparar tratamientos o enfoques.",
        url: "https://claude.ai/",
      },
      {
        name: "Notion AI",
        use: "Bitácoras de estudio y organización de casos/lecturas.",
        pdfDescription:
          "Espacio de organización para notas clínicas, fichas y seguimiento de estudio, útil para mantener consistencia en tus apuntes.",
        pdfUse:
          "Úsalo para estructurar fichas, registrar aprendizaje de casos y planear repasos por temas.",
        url: "https://www.notion.so/product/ai",
      },
    ],
    tools: [
      { name: "ChatGPT", use: "Repaso, casos simulados y explicación." },
      { name: "Perplexity", use: "Investigación inicial con fuentes." },
      { name: "Claude", use: "Síntesis de lecturas largas." },
      { name: "Notion AI", use: "Organización de estudio." },
    ],
    insight: "En salud, la IA sirve para estudiar mejor; no reemplaza criterio clínico ni fuentes oficiales.",
    promptTips: [
      "Aclara que quieres una explicación educativa, no diagnóstico.",
      "Pide pasos y razonamiento, no solo conclusiones.",
      "Solicita tablas diferenciales y banderas rojas cuando aplique.",
      "Pide fuentes sugeridas y términos de búsqueda.",
      "Pide preguntas de repaso al final para autoevaluarte.",
      "Verifica siempre en bibliografía y guías clínicas oficiales.",
    ],
  },
];

const areaGrid = document.getElementById("areasGrid");
const careerPanel = document.getElementById("careerPanel");
const gamePanel = document.getElementById("gamePanel");
const careerChips = document.getElementById("careerChips");
const careerInput = document.getElementById("careerInput");
const careerPanelTitle = document.getElementById("careerPanelTitle");
const gameTitle = document.getElementById("gameTitle");
const gameSubtitle = document.getElementById("gameSubtitle");
const toolList = document.getElementById("toolList");
const selectedTools = document.getElementById("selectedTools");
const emptyState = document.getElementById("emptyState");
const insightText = document.getElementById("insightText");
const dropZone = document.getElementById("dropZone");
const playerLevel = document.getElementById("playerLevel");
const playerXP = document.getElementById("playerXP");
const playerCoins = document.getElementById("playerCoins");
const playerStreak = document.getElementById("playerStreak");
const questTitle = document.getElementById("questTitle");
const questText = document.getElementById("questText");
const rewardText = document.getElementById("rewardText");
const rewardBar = document.getElementById("rewardBar");
const rewardStatus = document.getElementById("rewardStatus");
const claimReward = document.getElementById("claimReward");
const rewardsCard = document.querySelector(".rewards-card");
const areaTemplate = document.getElementById("areaTemplate");
const careerTemplate = document.getElementById("careerTemplate");
const toolTemplate = document.getElementById("toolTemplate");
const selectedTemplate = document.getElementById("selectedTemplate");

let currentArea = null;
let currentCareer = "";
const selectedToolNames = new Set();
let xp = 0;
let coins = 0;
let streak = 0;
let rewardClaimed = false;
const creator = {
  name: "Evelyn Salazar Tenango",
  linkedin: "https://www.linkedin.com/in/evelynsalazartenango/",
  email: "evelynsalazartenango@gmail.com",
};

function renderAreas() {
  areas.forEach((area) => {
    const node = areaTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".area-icon").textContent = area.icon;
    node.querySelector("strong").textContent = area.title;
    node.querySelector("p").textContent = area.description;
    node.addEventListener("click", () => selectArea(area));
    areaGrid.appendChild(node);
  });
}

function renderCareers(area) {
  careerChips.innerHTML = "";
  area.careers.forEach((career) => {
    const chip = careerTemplate.content.firstElementChild.cloneNode(true);
    chip.textContent = career;
    chip.addEventListener("click", () => selectCareer(career));
    careerChips.appendChild(chip);
  });
}

function renderTools(area) {
  toolList.innerHTML = "";
  selectedTools.innerHTML = "";
  selectedToolNames.clear();
  emptyState.classList.remove("hidden");
  rewardClaimed = false;
  claimReward.disabled = true;
  claimReward.textContent = "Descargar PDF";
  claimReward.classList.remove("is-ready");
  rewardsCard.classList.remove("reward-burst");
  updateRewardUI();
  area.tools.forEach((tool) => {
    const toolNode = toolTemplate.content.firstElementChild.cloneNode(true);
    toolNode.querySelector("strong").textContent = tool.name;
    toolNode.querySelector("span").textContent = tool.use;
    toolNode.dataset.toolName = tool.name;
    toolNode.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", tool.name);
      event.dataTransfer.effectAllowed = "copy";
    });
    toolNode.addEventListener("click", () => addSelectedTool(tool));
    toolList.appendChild(toolNode);
  });
}

function selectArea(area) {
  currentArea = area;
  currentCareer = "";
  careerInput.value = "";
  careerPanel.classList.remove("hidden");
  gamePanel.classList.remove("hidden");
  careerPanelTitle.textContent = `2. Selecciona tu carrera en ${area.title}`;
  gameTitle.textContent = `3. Arrastra herramientas para ${area.title}`;
  gameSubtitle.textContent = area.description;
  insightText.textContent = area.insight;
  questTitle.textContent = `Misión: arma tu kit de ${area.title}`;
  questText.textContent = `Consigue 3 herramientas diferentes para desbloquear la recompensa de ${area.title}.`;
  rewardText.textContent = "PDF bloqueado";
  rewardStatus.textContent = "Consigue 3 aciertos para descargar tu PDF guía IA.";
  claimReward.textContent = "Descargar PDF";
  renderCareers(area);
  renderTools(area);
}

function selectCareer(career) {
  currentCareer = career;
  careerInput.value = career;
  insightText.textContent = `Carrera elegida: ${career}. Ahora conecta las herramientas que más te servirán.`;
  questText.textContent = `Perfecto, ${career}. Completa 3 herramientas para descargar tu PDF guía IA.`;
}

function addSelectedTool(tool) {
  if (selectedToolNames.has(tool.name)) return;
  selectedToolNames.add(tool.name);
  xp += 35;
  coins += 10;
  streak += 1;
  const node = selectedTemplate.content.firstElementChild.cloneNode(true);
  node.querySelector("strong").textContent = tool.name;
  node.querySelector("span").textContent = tool.use;
  selectedTools.appendChild(node);
  emptyState.classList.add("hidden");
  updatePlayerUI();
  updateRewardUI();
  if (selectedToolNames.size >= 3) {
    claimReward.disabled = false;
    claimReward.classList.add("is-ready");
    rewardStatus.textContent = "Ya puedes descargar tu PDF con recomendaciones y tips.";
    rewardText.textContent = "PDF listo";
    rewardsCard.classList.add("reward-burst");
  } else {
    rewardStatus.textContent = `Lleva ${selectedToolNames.size}/3 herramientas para desbloquear el PDF.`;
  }
}

careerInput.addEventListener("input", (event) => {
  currentCareer = event.target.value.trim();
  if (currentCareer) {
    insightText.textContent = `Carrera personalizada: ${currentCareer}. Puedes usar las herramientas disponibles para adaptarlas a tu necesidad.`;
  }
});

claimReward.addEventListener("click", () => {
  if (selectedToolNames.size < 3 || rewardClaimed) return;
  rewardClaimed = true;
  coins += 25;
  xp += 50;
  updatePlayerUI();
  updateRewardUI();
  const badge = currentArea ? `Guia IA ${currentArea.title}` : "Guia IA";
  rewardText.textContent = "PDF descargado";
  rewardStatus.textContent = `Recompensa obtenida: +25 monedas IA y +50 XP. Se descargó tu PDF.`;
  claimReward.textContent = "PDF descargado";
  claimReward.disabled = true;
  claimReward.classList.remove("is-ready");
  rewardsCard.classList.add("reward-burst");
  if (currentArea) {
    const selectedToolsForPdf = currentArea.tools.filter((tool) => selectedToolNames.has(tool.name));
    const pdfContent = buildPdfForArea(
      currentArea,
      currentCareer || "Carrera personalizada",
      selectedToolsForPdf
    );
    downloadPdf(createPdfBlob(pdfContent));
  }
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragover");
  const toolName = event.dataTransfer.getData("text/plain");
  const tool = currentArea?.tools.find((item) => item.name === toolName);
  if (tool) addSelectedTool(tool);
});

function buildPdfForArea(area, career, selectedTools) {
  const aiToolMap = new Map(area.aiTools.map((tool) => [tool.name, tool]));
  const selectedToolsDetailed = selectedTools.map((tool) => {
    const detail = aiToolMap.get(tool.name);
    return {
      label: tool.name,
      body: detail?.pdfDescription || tool.use,
      supportingText: detail?.pdfUse || tool.use,
      link: detail?.url || "",
    };
  });
  const selectedNames = new Set(selectedTools.map((tool) => tool.name));
  const additionalTools = area.aiTools
    .filter((tool) => !selectedNames.has(tool.name))
    .map((tool) => ({
      label: tool.name,
      body: tool.pdfDescription || tool.use,
      supportingText: tool.pdfUse || tool.use,
      link: tool.url || "",
    }));

  return {
    title: `Kit IA para ${career}`,
    subtitle: `Guia personalizada para ${area.title}`,
    badge: "Recompensa desbloqueada",
    heroText: area.pdfTagline,
    stats: [
      { label: "Area", value: area.title },
      { label: "Carrera", value: career },
      { label: "Herramientas elegidas", value: `${selectedTools.length}` },
    ],
    sections: [
      {
        title: "Herramientas que elegiste",
        intro: "Este es el kit que armó el jugador dentro del tablero interactivo.",
        cards: selectedToolsDetailed,
      },
      {
        title: "Por que encaja con tu area",
        textBlocks: [
          area.insight,
          `Tu combinacion para ${career} prioriza investigacion, organizacion y ejecucion con IA.`,
        ],
      },
      {
        title: "Otras herramientas recomendadas",
        intro: "Puedes sumar estas opciones para ampliar tu stack sin salirte de tu area.",
        cards: additionalTools,
      },
      {
        title: "Mini tips para prompts",
        bullets: area.promptTips,
      },
      {
        title: "La Anatomia del Prompt Perfecto (El Framework)",
        bullets: [
          "Para que un prompt funcione al primer o segundo intento, debe tener una estructura clara.",
          "Rol: Quien es la IA (ej. Actua como un experto en SEO).",
          "Contexto: Cual es el trasfondo (ej. Estamos lanzando un blog de cafe artesanal).",
          "Tarea: Que debe hacer exactamente (ej. Escribe 5 titulos atractivos).",
          "Restricciones: Que limites tiene (ej. Maximo 60 caracteres, no uses la palabra mejor).",
          "Formato: Como quieres la respuesta (ej. En una tabla con columnas de Titulo y Enfoque).",
        ],
      },
    ],
    footer: [`Creado por ${creator.name}`, creator.linkedin, creator.email],
  };
}

function escapePdfText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "?")
    .replace(/([\\()])/g, "\\$1");
}

function wrapLines(lines, maxCharsPerLine) {
  const wrapped = [];
  lines.forEach((line) => {
    if (!line) {
      wrapped.push("");
      return;
    }
    const words = line.split(/\s+/);
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length <= maxCharsPerLine) {
        current = candidate;
      } else {
        if (current) wrapped.push(current);
        current = word;
      }
    });
    if (current) wrapped.push(current);
  });
  return wrapped;
}

function createPdfBlob(documentData) {
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 36;
  const marginTop = 30;
  const marginBottom = 30;
  const contentWidth = pageWidth - marginX * 2;
  const pages = [];
  const objects = [];

  const palette = {
    cream: [0.988, 0.98, 0.949],
    white: [1, 1, 1],
    navy: [0.063, 0.125, 0.2],
    muted: [0.365, 0.412, 0.471],
    blue: [0.176, 0.424, 0.875],
    green: [0.118, 0.541, 0.353],
    amber: [0.843, 0.541, 0.122],
    violet: [0.482, 0.38, 1],
    line: [0.875, 0.894, 0.922],
    softBlue: [0.894, 0.933, 1],
    softViolet: [0.929, 0.91, 1],
    softGreen: [0.902, 0.969, 0.937],
  };

  const pageState = { ops: [], cursorY: marginTop, pageNumber: 0 };

  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  const addPage = () => {
    if (pageState.ops.length) {
      pages.push(pageState.ops.join("\n"));
    }
    pageState.ops = [];
    pageState.cursorY = marginTop;
    pageState.pageNumber += 1;
    pageState.ops.push(`${palette.cream.join(" ")} rg`);
    pageState.ops.push(`0 0 ${pageWidth} ${pageHeight} re f`);
  };

  const toPdfY = (top, height = 0) => pageHeight - top - height;
  const rgbFill = (color) => `${color.join(" ")} rg`;
  const rgbStroke = (color) => `${color.join(" ")} RG`;
  const estimateMaxChars = (width, fontSize) => Math.max(14, Math.floor(width / (fontSize * 0.56)));
  const wrapText = (text, width, fontSize) => wrapLines([text], estimateMaxChars(width, fontSize));
  const textHeight = (lines, fontSize, leading = fontSize + 4) => Math.max(lines.length, 1) * leading;
  const escapeLines = (lines) => lines.map((line) => escapePdfText(line));

  const drawText = (lines, x, top, options = {}) => {
    const font = options.font || "F1";
    const fontSize = options.fontSize || 12;
    const leading = options.leading || fontSize + 4;
    const color = options.color || palette.navy;
    const safeLines = escapeLines(lines);

    pageState.ops.push("BT");
    pageState.ops.push(`/${font} ${fontSize} Tf`);
    pageState.ops.push(rgbFill(color));
    pageState.ops.push(`${x} ${toPdfY(top)} Td`);
    safeLines.forEach((line, index) => {
      if (index > 0) {
        pageState.ops.push(`0 -${leading} Td`);
      }
      pageState.ops.push(`(${line}) Tj`);
    });
    pageState.ops.push("ET");
  };

  const drawRect = (x, top, width, height, fillColor, strokeColor = null, lineWidth = 1) => {
    const y = toPdfY(top, height);
    const hasFill = Boolean(fillColor);
    const hasStroke = Boolean(strokeColor);
    const radius = Math.min(7, width / 2, height / 2);
    const kappa = 0.5522847498;
    const control = radius * kappa;

    if (!hasFill && !hasStroke) {
      return;
    }

    if (fillColor) {
      pageState.ops.push(rgbFill(fillColor));
    }
    if (strokeColor) {
      pageState.ops.push(rgbStroke(strokeColor));
      pageState.ops.push(`${lineWidth} w`);
    }

    if (radius <= 0.01) {
      const paint = hasFill && hasStroke ? "B" : hasFill ? "f" : "S";
      pageState.ops.push(`${x} ${y} ${width} ${height} re ${paint}`);
      return;
    }

    const x0 = x;
    const y0 = y;
    const x1 = x + width;
    const y1 = y + height;

    pageState.ops.push(`${x0 + radius} ${y0} m`);
    pageState.ops.push(`${x1 - radius} ${y0} l`);
    pageState.ops.push(
      `${x1 - radius + control} ${y0} ${x1} ${y0 + radius - control} ${x1} ${y0 + radius} c`
    );
    pageState.ops.push(`${x1} ${y1 - radius} l`);
    pageState.ops.push(
      `${x1} ${y1 - radius + control} ${x1 - radius + control} ${y1} ${x1 - radius} ${y1} c`
    );
    pageState.ops.push(`${x0 + radius} ${y1} l`);
    pageState.ops.push(
      `${x0 + radius - control} ${y1} ${x0} ${y1 - radius + control} ${x0} ${y1 - radius} c`
    );
    pageState.ops.push(`${x0} ${y0 + radius} l`);
    pageState.ops.push(
      `${x0} ${y0 + radius - control} ${x0 + radius - control} ${y0} ${x0 + radius} ${y0} c`
    );

    const paint = hasFill && hasStroke ? "b" : hasFill ? "f" : "s";
    pageState.ops.push(paint);
  };

  const ensureSpace = (heightNeeded) => {
    if (pageState.cursorY + heightNeeded > pageHeight - marginBottom) {
      addPage();
    }
  };

  const addGap = (size) => {
    pageState.cursorY += Math.max(4, Math.round(size * 0.55));
  };

  const drawStatRow = (stats) => {
    const gap = 8;
    const cardWidth = (contentWidth - gap * (stats.length - 1)) / stats.length;
    const cardHeight = 50;
    ensureSpace(cardHeight + 8);
    stats.forEach((stat, index) => {
      const x = marginX + index * (cardWidth + gap);
      drawRect(x, pageState.cursorY, cardWidth, cardHeight, palette.white, palette.line);
      drawRect(x, pageState.cursorY, cardWidth, 8, palette.softBlue);
      drawText([stat.label.toUpperCase()], x + 12, pageState.cursorY + 17, {
        font: "F2",
        fontSize: 8,
        leading: 10,
        color: palette.blue,
      });
      drawText(wrapText(stat.value, cardWidth - 24, 11), x + 12, pageState.cursorY + 32, {
        font: "F2",
        fontSize: 11,
        leading: 13,
        color: palette.navy,
      });
    });
    pageState.cursorY += cardHeight + 10;
  };

  const drawSectionTitle = (title) => {
    ensureSpace(24);
    drawText([title], marginX, pageState.cursorY, {
      font: "F2",
      fontSize: 16,
      leading: 20,
      color: palette.navy,
    });
    pageState.cursorY += 22;
  };

  const drawParagraph = (text, options = {}) => {
    const fontSize = options.fontSize || 11;
    const leading = options.leading || 14;
    const color = options.color || palette.muted;
    const lines = wrapText(text, contentWidth, fontSize);
    const height = textHeight(lines, fontSize, leading);
    ensureSpace(height + 4);
    drawText(lines, marginX, pageState.cursorY, {
      font: options.font || "F1",
      fontSize,
      leading,
      color,
    });
    pageState.cursorY += height + 4;
  };

  const drawBulletList = (items) => {
    items.forEach((item) => {
      const bulletLines = wrapText(item, contentWidth - 24, 10);
      const height = textHeight(bulletLines, 10, 13);
      ensureSpace(height + 6);
      drawRect(marginX, pageState.cursorY + 3, 6, 6, palette.amber);
      drawText(bulletLines, marginX + 14, pageState.cursorY, {
        fontSize: 10,
        leading: 13,
        color: palette.muted,
      });
      pageState.cursorY += height + 4;
    });
  };

  const drawPlainList = (items) => {
    items.forEach((item) => {
      const tipLines = wrapText(item, contentWidth, 10);
      const height = textHeight(tipLines, 10, 13);
      ensureSpace(height + 5);
      drawText(tipLines, marginX, pageState.cursorY, {
        fontSize: 10,
        leading: 13,
        color: palette.muted,
      });
      pageState.cursorY += height + 3;
    });
  };

  const drawTextMarkerList = (items, marker = "- ") => {
    items.forEach((item) => {
      const itemLines = wrapText(`${marker}${item}`, contentWidth, 10);
      const height = textHeight(itemLines, 10, 13);
      ensureSpace(height + 6);
      drawText(itemLines, marginX, pageState.cursorY, {
        fontSize: 10,
        leading: 13,
        color: palette.muted,
      });
      pageState.cursorY += height + 4;
    });
  };

  const drawCards = (cards, cardColor) => {
    const columnGap = 12;
    const cardWidth = (contentWidth - columnGap) / 2;
    const innerWidth = cardWidth - 30;

    const buildCardLayout = (card) => {
      const labelLines = wrapText(card.label, innerWidth, 12);
      const bodyLines = wrapText(card.body, innerWidth, 10);
      const supportingLines = card.supportingText ? wrapText(card.supportingText, innerWidth, 9) : [];
      const linkLines = card.link ? wrapText(card.link, innerWidth, 8) : [];
      const cardHeight =
        20 +
        textHeight(labelLines, 12, 14) +
        textHeight(bodyLines, 10, 13) +
        (supportingLines.length ? textHeight(supportingLines, 9, 12) + 6 : 0) +
        (linkLines.length ? textHeight(linkLines, 8, 11) + 6 : 0) +
        14;
      return { labelLines, bodyLines, supportingLines, linkLines, cardHeight };
    };

    for (let i = 0; i < cards.length; i += 2) {
      const leftCard = cards[i];
      const rightCard = cards[i + 1];
      const leftLayout = buildCardLayout(leftCard);
      const rightLayout = rightCard ? buildCardLayout(rightCard) : null;
      const rowHeight = Math.max(leftLayout.cardHeight, rightLayout ? rightLayout.cardHeight : 0);

      ensureSpace(rowHeight + 8);

      const drawCardAt = (card, layout, x, y) => {
        drawRect(x, y, cardWidth, layout.cardHeight, palette.white, palette.line);
        drawRect(x, y, 8, layout.cardHeight, cardColor);
        drawText(layout.labelLines, x + 16, y + 14, {
          font: "F2",
          fontSize: 12,
          leading: 14,
          color: palette.navy,
        });

        let textTop = y + 28 + textHeight(layout.labelLines, 12, 14);
        drawText(layout.bodyLines, x + 16, textTop, {
          fontSize: 10,
          leading: 13,
          color: palette.muted,
        });

        textTop += textHeight(layout.bodyLines, 10, 13) + 6;
        if (layout.supportingLines.length) {
          drawText(layout.supportingLines, x + 16, textTop, {
            fontSize: 9,
            leading: 12,
            color: palette.navy,
          });
          textTop += textHeight(layout.supportingLines, 9, 12) + 6;
        }

        if (layout.linkLines.length) {
          drawText(layout.linkLines, x + 16, textTop, {
            fontSize: 8,
            leading: 11,
            color: palette.blue,
          });
        }
      };

      drawCardAt(leftCard, leftLayout, marginX, pageState.cursorY);
      if (rightCard && rightLayout) {
        drawCardAt(rightCard, rightLayout, marginX + cardWidth + columnGap, pageState.cursorY);
      }

      pageState.cursorY += rowHeight + 8;
    }
  };

  addPage();

  drawRect(marginX, pageState.cursorY, contentWidth, 132, palette.softBlue, palette.line);
  drawRect(marginX + contentWidth - 88, pageState.cursorY + 18, 52, 52, palette.softViolet);
  drawRect(marginX + contentWidth - 64, pageState.cursorY + 52, 28, 28, palette.softGreen);
  drawText([documentData.badge], marginX + 20, pageState.cursorY + 20, {
    font: "F2",
    fontSize: 10,
    leading: 12,
    color: palette.blue,
  });
  drawText(wrapText(documentData.title, contentWidth - 130, 24), marginX + 20, pageState.cursorY + 42, {
    font: "F2",
    fontSize: 24,
    leading: 28,
    color: palette.navy,
  });
  drawText(wrapText(documentData.subtitle, contentWidth - 130, 12), marginX + 20, pageState.cursorY + 84, {
    font: "F2",
    fontSize: 12,
    leading: 14,
    color: palette.green,
  });
  drawText(wrapText(documentData.heroText, contentWidth - 130, 11), marginX + 20, pageState.cursorY + 102, {
    fontSize: 11,
    leading: 14,
    color: palette.muted,
  });
  pageState.cursorY += 144;

  drawStatRow(documentData.stats);

  documentData.sections.forEach((section, index) => {
    if (section.title === "Herramientas que elegiste") {
      addGap(16);
    }
    if (section.title === "Por que encaja con tu area") {
      addGap(14);
    }
    if (section.title === "Otras herramientas recomendadas") {
      addPage();
      addGap(6);
    }
    if (section.title === "Mini tips para prompts") {
      addGap(22);
    }
    if (section.title === "La Anatomia del Prompt Perfecto (El Framework)") {
      addGap(20);
    }
    drawSectionTitle(section.title);
    if (section.intro) {
      drawParagraph(section.intro);
    }
    if (section.textBlocks) {
      section.textBlocks.forEach((text) => drawParagraph(text));
    }
    if (section.cards && section.cards.length) {
      const accent = index === 0 ? palette.blue : palette.violet;
      drawCards(section.cards, accent);
    }
    if (section.bullets && section.bullets.length) {
      if (
        section.title === "Mini tips para prompts" ||
        section.title === "La Anatomia del Prompt Perfecto (El Framework)"
      ) {
        drawTextMarkerList(section.bullets, "- ");
      } else {
        drawBulletList(section.bullets);
      }
    }
    addGap(8);
  });

  ensureSpace(64);
  drawRect(marginX, pageState.cursorY, contentWidth, 54, palette.softGreen, palette.line);
  drawText(documentData.footer, marginX + 16, pageState.cursorY + 17, {
    fontSize: 10,
    leading: 12,
    color: palette.navy,
  });

  if (pageState.ops.length) {
    pages.push(pageState.ops.join("\n"));
  }

  const fontObj = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const boldFontObj = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const contentObjIds = [];
  const pageObjIds = [];

  pages.forEach((contentStream) => {
    const contentObj = addObject(`<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream`);
    contentObjIds.push(contentObj);
  });

  pages.forEach((_, index) => {
    const pageObj = addObject(
      `<< /Type /Page /Parent 0 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontObj} 0 R /F2 ${boldFontObj} 0 R >> >> /Contents ${contentObjIds[index]} 0 R >>`
    );
    pageObjIds.push(pageObj);
  });

  const pagesObjIndex = addObject(
    `<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjIds.length} >>`
  );

  pageObjIds.forEach((pageObjId) => {
    objects[pageObjId - 1] = objects[pageObjId - 1].replace("/Parent 0 0 R", `/Parent ${pagesObjIndex} 0 R`);
  });

  const catalogObj = addObject(`<< /Type /Catalog /Pages ${pagesObjIndex} 0 R >>`);
  const infoObj = addObject(
    `<< /Title (${escapePdfText(documentData.title)}) /Author (${escapePdfText(creator.name)}) /Subject (Guia IA universitaria) >>`
  );

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((obj, idx) => {
    offsets.push(pdf.length);
    pdf += `${idx + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObj} 0 R /Info ${infoObj} 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function downloadPdf(blob) {
  const areaName = currentArea ? currentArea.title.replace(/[^\w]+/g, "_") : "Guia";
  const careerName = (currentCareer || "carrera").replace(/[^\w]+/g, "_");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Guia_IA_${areaName}_${careerName}_Evelyn_Salazar_Tenango.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function updatePlayerUI() {
  const level = Math.floor(xp / 100) + 1;
  playerLevel.textContent = `Nivel ${level}`;
  playerXP.textContent = `${xp} XP`;
  playerCoins.textContent = `${coins}`;
  playerStreak.textContent = `${streak}`;
}

function updateRewardUI() {
  const progress = Math.min(100, (selectedToolNames.size / 3) * 100);
  rewardBar.style.width = `${progress}%`;
}

renderAreas();
careerPanel.classList.add("hidden");
gamePanel.classList.add("hidden");
updatePlayerUI();
updateRewardUI();
