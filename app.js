const areas = [
  {
    id: "negocios",
    title: "Negocios",
    icon: "📊",
    description: "Estrategia, finanzas, emprendimiento y análisis de mercados.",
    careers: ["Administración", "Finanzas", "Mercadotecnia", "Negocios Internacionales"],
    pdfTagline: "Toma decisiones con datos, presenta mejor tus ideas y organiza proyectos con claridad.",
    aiTools: [
      { name: "ChatGPT", use: "Lluvia de ideas, análisis, correos y resúmenes ejecutivos." },
      { name: "Perplexity", use: "Búsqueda con fuentes para mercado, tendencias y competencia." },
      { name: "Claude", use: "Redacción larga, reportes y síntesis de documentos." },
      { name: "Power BI", use: "Tableros, métricas y visualización de datos." },
      { name: "Notion AI", use: "Organización de proyectos, notas y seguimiento." },
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
    ],
  },
  {
    id: "ingenieria",
    title: "Ingeniería y Ciencias",
    icon: "🧪",
    description: "Modelado, laboratorio, simulación y resolución de problemas técnicos.",
    careers: ["Ingeniería Industrial", "Sistemas", "Biotecnología", "Física"],
    pdfTagline: "Convierte conceptos complejos en explicaciones, cálculos y prototipos más rápidos.",
    aiTools: [
      { name: "ChatGPT", use: "Explicaciones, fórmulas, lógica y apoyo en código." },
      { name: "Wolfram Alpha", use: "Cálculo, álgebra y verificación de resultados." },
      { name: "GitHub Copilot", use: "Programación asistida y limpieza de código." },
      { name: "Notion AI", use: "Documentación y organización de proyectos." },
      { name: "Perplexity", use: "Consulta de fuentes técnicas y referencias." },
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
    ],
  },
  {
    id: "diseno",
    title: "Arquitectura, Arte y Diseño",
    icon: "🎨",
    description: "Creatividad visual, prototipado, composición y experiencia de usuario.",
    careers: ["Diseño Gráfico", "Arquitectura", "UX/UI", "Arte Digital"],
    pdfTagline: "Explora ideas, crea prototipos y presenta conceptos visuales con más velocidad.",
    aiTools: [
      { name: "Figma", use: "Diseño de interfaces, prototipos y sistemas visuales." },
      { name: "Adobe Firefly", use: "Generación de imágenes e ideas visuales." },
      { name: "Canva", use: "Piezas rápidas, presentaciones y posters." },
      { name: "Midjourney", use: "Exploración conceptual y moodboards." },
      { name: "ChatGPT", use: "Briefs, naming, storytelling y presentaciones." },
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
    ],
  },
  {
    id: "sociales",
    title: "Ciencias Sociales y Humanidades",
    icon: "📚",
    description: "Investigación, argumentación, comunicación y pensamiento crítico.",
    careers: ["Derecho", "Psicología", "Comunicación", "Relaciones Internacionales"],
    pdfTagline: "Mejora tu argumentación, sintetiza fuentes y escribe con mejor estructura.",
    aiTools: [
      { name: "ChatGPT", use: "Redacción, esquemas, análisis y preparación de ideas." },
      { name: "Grammarly", use: "Corrección de estilo y claridad." },
      { name: "Perplexity", use: "Búsqueda con fuentes para investigación." },
      { name: "Notion AI", use: "Resúmenes, notas y organización de lectura." },
      { name: "Claude", use: "Textos largos, síntesis y revisión de documentos." },
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
    downloadPdf(buildPdfForArea(currentArea, currentCareer || "Carrera personalizada"));
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

function buildPdfForArea(area, career) {
  const lines = [];
  lines.push("GUIA DE IA BASICA PARA UNIVERSITARIOS");
  lines.push(`Area: ${area.title}`);
  lines.push(`Carrera: ${career}`);
  lines.push("");
  lines.push(`Enfoque: ${area.pdfTagline}`);
  lines.push("");
  lines.push("Herramientas de IA recomendadas:");
  area.aiTools.forEach((tool, index) => {
    lines.push(`${index + 1}. ${tool.name}: ${tool.use}`);
  });
  lines.push("");
  lines.push("Mini tips para prompts:");
  area.promptTips.forEach((tip, index) => {
    lines.push(`${index + 1}. ${tip}`);
  });
  lines.push("");
  lines.push("Machote rapido de prompt:");
  lines.push("Quiero que me ayudes con [tarea].");
  lines.push("Contexto: [materia, proyecto o problema].");
  lines.push("Objetivo: [lo que necesito lograr].");
  lines.push("Formato: [lista, tabla, ejemplo, resumen, pasos].");
  lines.push("Tono: [academico, sencillo, profesional].");
  lines.push("");
  lines.push("Consejo extra:");
  lines.push("Pide siempre que te de una primera version, luego una mejora y al final una revision.");
  lines.push("");
  lines.push(`Creado por ${creator.name}`);
  lines.push(creator.linkedin);
  lines.push(creator.email);
  return lines;
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

function createPdfBlob(title, lines) {
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginLeft = 44;
  const marginTop = 52;
  const marginBottom = 48;
  const fontSize = 12;
  const leading = 16;
  const maxCharsPerLine = 82;
  const linesPerPage = Math.floor((pageHeight - marginTop - marginBottom) / leading);
  const bodyLines = wrapLines(lines, maxCharsPerLine);
  const pages = [];
  for (let i = 0; i < bodyLines.length; i += linesPerPage) {
    pages.push(bodyLines.slice(i, i + linesPerPage));
  }
  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  const fontObj = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const contentObjIds = [];
  const pageObjIds = [];

  pages.forEach((pageLines, pageIndex) => {
    const textOps = [];
    textOps.push("BT");
    textOps.push(`/F1 ${fontSize} Tf`);
    textOps.push(`${marginLeft} ${pageHeight - marginTop} Td`);
    pageLines.forEach((line, idx) => {
      const safeLine = escapePdfText(line);
      if (idx === 0) {
        textOps.push(`(${safeLine}) Tj`);
      } else {
        textOps.push(`0 -${leading} Td`);
        textOps.push(`(${safeLine}) Tj`);
      }
    });
    textOps.push("ET");
    const contentStream = textOps.join("\n");
    const contentObj = addObject(`<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream`);
    contentObjIds.push(contentObj);
  });

  pages.forEach((_, index) => {
    const pageObj = addObject(
      `<< /Type /Page /Parent 0 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontObj} 0 R >> >> /Contents ${contentObjIds[index]} 0 R >>`
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
    `<< /Title (${escapePdfText(title)}) /Author (${escapePdfText(creator.name)}) /Subject (Guia IA universitaria) >>`
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
