// ============================================================
// BASE DE DATOS DE PREGUNTAS
// ============================================================

const questionsDB = {
    HTML: [
        { q: "¿Qué etiqueta se usa para el título principal de una página?", options: ["&lt;h1&gt;", "&lt;head&gt;", "&lt;title&gt;"], answer: 0 },
        { q: "¿Qué significa HTML?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
        { q: "¿Cuál es la estructura básica de un documento HTML?", options: ["&alt;DOCTYPE html&gt","&lthtml&gt", "&lthead&gt", "&ltbody&gt", "&lthtml&gt", <body>", "Solo <html>"], answer: 0 },
        { q: "¿Qué etiqueta se usa para crear un párrafo?", options: ["<p>", "<paragraph>", "<text>"], answer: 0 },
        { q: "¿Para qué sirve la etiqueta <meta charset='UTF-8'>?", options: ["Define la codificación de caracteres", "Define el título de la página", "Define el color de fondo"], answer: 0 },
        { q: "¿Cuál etiqueta crea un enlace hipervinculado?", options: ["<a>", "<link>", "<href>"], answer: 0 },
        { q: "¿Qué etiqueta se usa para insertar una imagen?", options: ["<img>", "<image>", "<picture>"], answer: 0 },
        { q: "¿Cuál es el atributo obligatorio de la etiqueta <img>?", options: ["src", "href", "alt"], answer: 0 },
        { q: "¿Qué etiqueta se usa para crear una lista no ordenada?", options: ["<ul>", "<ol>", "<li>"], answer: 0 },
        { q: "¿Cuál es la diferencia entre <div> y <span>?", options: ["<div> es bloque, <span> es inline", "No hay diferencia", "<span> es bloque"], answer: 0 }
    ],                                                                                 
    CSS: [
        { q: "¿Qué propiedad cambia el color del texto?", options: ["color", "background-color", "text-style"], answer: 0 },
        { q: "¿Cómo se selecciona un ID en CSS?", options: ["#mi-id", ".mi-id", "mi-id"], answer: 0 },
        { q: "¿Cuál es la especificidad más alta en CSS?", options: ["!important", "ID", "Etiqueta"], answer: 0 },
        { q: "¿Qué propiedad controla el espacio interior de un elemento?", options: ["padding", "margin", "border"], answer: 0 },
        { q: "¿Cuál es la sintaxis correcta para un media query?", options: ["@media (max-width: 768px)", "@media max-width 768px", "media (max-width: 768px)"], answer: 0 },
        { q: "¿Qué es Flexbox?", options: ["Un modelo de diseño flexible para alinear elementos", "Una librería de CSS", "Un tipo de animación"], answer: 0 },
        { q: "¿Cómo se centra un elemento verticalmente con Flexbox?", options: ["align-items: center", "justify-content: center", "text-align: center"], answer: 0 },
        { q: "¿Cuál es la diferencia entre margin y padding?", options: ["margin es externo, padding es interno", "No hay diferencia", "padding es externo"], answer: 0 },
        { q: "¿Qué propiedad controla la sombra de un elemento?", options: ["box-shadow", "shadow", "text-shadow"], answer: 0 },
        { q: "¿Cómo se define una variable CSS?", options: ["--nombre: valor;", "$nombre: valor;", "@nombre: valor;"], answer: 0 }
    ],
    JavaScript: [
        { q: "¿Cómo se declara una variable en JS moderno?", options: ["let / const", "variable x", "v x"], answer: 0 },
        { q: "¿Qué método muestra un mensaje en la consola?", options: ["console.log()", "print()", "alert.log()"], answer: 0 },
        { q: "¿Cuál es la diferencia entre == y ===?", options: ["=== compara tipo y valor, == solo valor", "No hay diferencia", "== compara tipo y valor"], answer: 0 },
        { q: "¿Qué es una función de flecha (arrow function)?", options: ["() => {} es la sintaxis", "=> es un operador", "Una función especial"], answer: 0 },
        { q: "¿Cómo se agrega un evento a un elemento?", options: ["addEventListener()", "addEvent()", "onEvent()"], answer: 0 },
        { q: "¿Qué es el DOM?", options: ["Document Object Model", "Direct Object Management", "Data Object Module"], answer: 0 },
        { q: "¿Cómo se selecciona un elemento por su ID?", options: ["document.getElementById()", "document.getID()", "document.select()"], answer: 0 },
        { q: "¿Qué método retorna el primer elemento que coincide con un selector?", options: ["querySelector()", "getElementById()", "getElement()"], answer: 0 },
        { q: "¿Cuál es el valor por defecto de una variable declarada con let?", options: ["undefined", "null", "0"], answer: 0 },
        { q: "¿Qué es una promesa en JavaScript?", options: ["Un objeto que representa una operación asincrónica", "Una función especial", "Un tipo de dato booleano"], answer: 0 }
    ]
};

// ============================================================
// VARIABLES GLOBALES DEL ESTADO DEL QUIZ
// ============================================================

let currentTech = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

// ============================================================
// FUNCIÓN: Iniciar Quiz
// ============================================================

function startQuiz(tech) {
    // Validar que la tecnología existe
    if (!questionsDB[tech]) {
        console.error(`Tecnología no encontrada: ${tech}`);
        return;
    }

    // Reinicializar estado
    currentTech = tech;
    currentQuestions = [...questionsDB[tech]].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentIndex = 0;
    score = 0;
    hasAnswered = false;

    // Obtener elementos del DOM
    const selectTechSection = document.getElementById('select-tech');
    const quizBoxSection = document.getElementById('quiz-box');

    // Validar que existen los elementos
    if (!selectTechSection || !quizBoxSection) {
        console.error('Elementos del DOM no encontrados');
        return;
    }

    // Ocultar selección, mostrar quiz
    selectTechSection.style.display = 'none';
    quizBoxSection.style.display = 'block';

    // Cargar la primera pregunta
    loadQuestion();
}

// ============================================================
// FUNCIÓN: Cargar Pregunta Actual
// ============================================================

function loadQuestion() {
    // Validar que hay preguntas disponibles
    if (!currentQuestions || currentQuestions.length === 0) {
        console.error('No hay preguntas disponibles');
        return;
    }

    // Si llegamos al final, mostrar certificado
    if (currentIndex >= currentQuestions.length) {
        showCertificate();
        return;
    }

    // Obtener datos de la pregunta actual
    const qData = currentQuestions[currentIndex];

    // Validar que la pregunta tiene datos
    if (!qData || !qData.q || !qData.options) {
        console.error(`Pregunta inválida en índice ${currentIndex}`);
        return;
    }

    // Obtener elementos del DOM
    const questionTitleEl = document.getElementById('question-title');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const nextBtnEl = document.getElementById('next-btn');

    // Validar que existen los elementos
    if (!questionTitleEl || !questionTextEl || !optionsContainerEl) {
        console.error('Elementos del DOM no encontrados para cargar pregunta');
        return;
    }

    // Actualizar contador de preguntas
    questionTitleEl.textContent = `Pregunta ${currentIndex + 1} de ${currentQuestions.length}`;

    // Actualizar texto de la pregunta
    questionTextEl.textContent = qData.q;

    // Generar y insertar botones de opciones
    let optionsHtml = '';
    qData.options.forEach((option, idx) => {
        optionsHtml += `<button class="option-btn" onclick="checkAnswer(${idx})" type="button">${option}</button>`;
    });
    optionsContainerEl.innerHTML = optionsHtml;

    // Ocultar botón "Siguiente" hasta que se responda
    if (nextBtnEl) {
        nextBtnEl.style.display = 'none';
    }

    // Reiniciar estado de respuesta
    hasAnswered = false;
}

// ============================================================
// FUNCIÓN: Verificar Respuesta
// ============================================================

function checkAnswer(selectedIdx) {
    // Evitar múltiples respuestas en la misma pregunta
    if (hasAnswered) {
        return;
    }
    hasAnswered = true;

    // Validar índices
    if (currentIndex >= currentQuestions.length) {
        return;
    }

    // Obtener datos de la pregunta actual
    const qData = currentQuestions[currentIndex];

    // Obtener todos los botones de opciones
    const optionBtns = document.querySelectorAll('.option-btn');

    // Aplicar estilos y deshabilitar botones
    optionBtns.forEach((btn, idx) => {
        btn.disabled = true;

        // Marcar opción correcta
        if (idx === qData.answer) {
            btn.classList.add('correct');
        }
        // Marcar opción incorrecta (si fue seleccionada)
        else if (idx === selectedIdx) {
            btn.classList.add('incorrect');
        }
    });

    // Contar punto si la respuesta es correcta
    if (selectedIdx === qData.answer) {
        score++;
    }

    // Mostrar botón "Siguiente"
    const nextBtnEl = document.getElementById('next-btn');
    if (nextBtnEl) {
        nextBtnEl.style.display = 'inline-block';
        
        // Cambiar texto si es la última pregunta
        if (currentIndex + 1 >= currentQuestions.length) {
            nextBtnEl.textContent = '🏁 Ver Certificado';
        } else {
            nextBtnEl.textContent = 'Siguiente →';
        }
    }
}

// ============================================================
// FUNCIÓN: Siguiente Pregunta
// ============================================================

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

// ============================================================
// FUNCIÓN: Mostrar Certificado
// ============================================================

function showCertificate() {
    // Obtener elementos del DOM
    const quizBoxEl = document.getElementById('quiz-box');
    const certificateBoxEl = document.getElementById('certificate-box');
    const certTechEl = document.getElementById('cert-tech');
    const userNameEl = document.getElementById('user-name');

    // Validar que existen los elementos
    if (!quizBoxEl || !certificateBoxEl) {
        console.error('Elementos de certificado no encontrados');
        return;
    }

    // Ocultar quiz, mostrar certificado
    quizBoxEl.style.display = 'none';
    certificateBoxEl.style.display = 'block';

    // Actualizar tecnología evaluada
    if (certTechEl) {
        certTechEl.textContent = currentTech;
    }

    // Solicitar nombre del estudiante
    const studentName = prompt("📜 Ingresa tu nombre para el certificado:") || "Estudiante";

    // Actualizar nombre en el certificado
    if (userNameEl) {
        userNameEl.textContent = studentName;
    }

    // Calcular porcentaje de aciertos
    const percentage = Math.round((score / currentQuestions.length) * 100);

    // Buscar o crear elemento para la puntuación
    const certificateEl = document.querySelector('.certificate');
    if (certificateEl) {
        // Buscar si ya existe un elemento de puntuación
        let scoreDisplayEl = document.querySelector('.certificate .score-display');
        
        if (!scoreDisplayEl) {
            // Crear elemento de puntuación
            scoreDisplayEl = document.createElement('p');
            scoreDisplayEl.className = 'score-display';
            scoreDisplayEl.style.marginTop = '1.5rem';
            scoreDisplayEl.style.borderTop = '2px solid #000';
            scoreDisplayEl.style.paddingTop = '1rem';
            certificateEl.appendChild(scoreDisplayEl);
        }

        // Actualizar contenido
        scoreDisplayEl.innerHTML = `<strong>Puntuación: ${score} de ${currentQuestions.length} (${percentage}%)</strong>`;
    }
}

// ============================================================
// FUNCIÓN: Descargar Certificado
// ============================================================

function downloadCertificate() {
    // Obtener datos
    const userNameEl = document.getElementById('user-name');
    const certTechEl = document.getElementById('cert-tech');
    
    if (!userNameEl || !certTechEl) {
        console.error('Elementos de certificado no encontrados');
        return;
    }

    const studentName = userNameEl.textContent;
    const tech = certTechEl.textContent;
    const percentage = Math.round((score / currentQuestions.length) * 100);

    // Crear contenido HTML del certificado
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Certificado - ${studentName}</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Montserrat', Arial, sans-serif; 
                background-color: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                padding: 20px;
            }
            .certificate-wrapper {
                background-color: #ffffff;
                border: 6px solid #000000;
                padding: 40px;
                max-width: 900px;
                width: 100%;
                box-shadow: 12px 12px 0px 0px #000000;
                text-align: center;
                position: relative;
            }
            .certificate-wrapper::before {
                content: '';
                position: absolute;
                top: -15px;
                left: -15px;
                right: -15px;
                bottom: -15px;
                border: 2px dashed #000000;
                pointer-events: none;
            }
            h1 { 
                font-size: 48px; 
                margin: 20px 0; 
                color: #0000FF;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .subtitle { 
                font-size: 18px; 
                margin: 15px 0;
                font-weight: 600;
            }
            .student-name { 
                font-size: 36px; 
                font-weight: 900; 
                border-bottom: 3px solid #000000; 
                padding: 15px 0;
                margin: 20px 0;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .tech-badge { 
                background-color: #ffff00; 
                padding: 8px 20px; 
                font-weight: bold; 
                display: inline-block; 
                border: 2px solid #000000;
                margin: 0 5px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .score-section {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #000000;
                font-size: 16px;
                font-weight: 600;
            }
            .date {
                margin-top: 30px;
                font-size: 14px;
                color: #666666;
            }
            .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #000000;
                font-style: italic;
                font-size: 14px;
                color: #333333;
            }
            @media print {
                body { background-color: white; }
                .certificate-wrapper { box-shadow: none; }
            }
        </style>
    </head>
    <body>
        <div class="certificate-wrapper">
            <h1>CERTIFICADO DE APROBACIÓN</h1>
            
            <p class="subtitle">Otorgado a:</p>
            <div class="student-name">${studentName}</div>
            
            <p class="subtitle">Por completar exitosamente la prueba de</p>
            <span class="tech-badge">${tech}</span>
            
            <div class="score-section">
                <p><strong>Puntuación: ${score} de ${currentQuestions.length}</strong></p>
                <p><strong>Porcentaje: ${percentage}%</strong></p>
            </div>
            
            <p class="date">Fecha de emisión: ${new Date().toLocaleDateString('es-ES')}</p>
            
            <div class="footer">
                <p>FRONTEND ACADEMY - Domina el Frontend sin rodeos</p>
                <p>Certificado digital válido</p>
            </div>
        </div>
    </body>
    </html>`;

    // Crear descarga del archivo
    try {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));
        element.setAttribute('download', `Certificado_${studentName.replace(/\s+/g, '_')}_${tech}.html`);
        element.style.display = 'none';
        
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } catch (error) {
        console.error('Error al descargar certificado:', error);
        alert('Error al descargar el certificado. Intenta de nuevo.');
    }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================

// Validar que el DOM está completamente cargado antes de ejecutar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✅ Quiz listo para usar');
    });
} else {
    console.log('✅ Quiz listo para usar');
}