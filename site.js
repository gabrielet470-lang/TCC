document.addEventListener("DOMContentLoaded", function () {
    const inputData = document.querySelector('input[type="date"]');
    const inputHora = document.querySelector('input[type="time"]');

    const msg = document.createElement("p");
    msg.style.color = "#ff5555";
    msg.style.fontWeight = "bold";
    msg.style.marginTop = "10px";
    msg.style.fontSize = "1rem";
    inputHora.parentNode.appendChild(msg);

    inputHora.setAttribute("min", "09:00");
    inputHora.setAttribute("max", "18:00");

    inputHora.addEventListener("input", function () {
        const hora = this.value;
        const partes = hora.split(":");
        if (partes.length !== 2) {
            this.value = "";
            msg.innerText = "Horário inválido.";
            return;
        }
        const minutos = parseInt(partes[0], 10) * 60 + parseInt(partes[1], 10);
        const minPermitido = 9 * 60;
        const maxPermitido = 18 * 60;

        if (minutos < minPermitido || minutos > maxPermitido) {
            this.value = "";
            msg.innerText = "Horário inválido. Atendimento das 09h às 18h.";
        } else {
            msg.innerText = "";
        }
    });

    inputData.addEventListener("input", function () {
        if (!this.value) return;

        const [year, month, day] = this.value.split("-").map(Number);
        const data = new Date(year, month - 1, day);
        const diaSemana = data.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            this.value = "";
            msg.innerText = "Desculpe, só atendo de segunda a sexta.";
        } else {
            msg.innerText = "";
        }
    });
});

new window.VLibras.Widget('https://vlibras.gov.br/app');

let angle = 0;
const carousel = document.querySelector(".carousel");

document.querySelector(".right").addEventListener("click", () => {
    angle -= 60;
    carousel.style.transform = `rotateY(${angle}deg)`;
});

document.querySelector(".left").addEventListener("click", () => {
    angle += 60;
    carousel.style.transform = `rotateY(${angle}deg)`;
});


setInterval(() => {
    angle -= 60;
    carousel.style.transform = `rotateY(${angle}deg)`;
}, 6000);


const toggleMenu = document.getElementById("toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleMenu.classList.toggle("open");
});