
//Precio por kilo
const kilosInput = document.getElementById('kilos');
const precioValue = document.getElementById('total-servicio');

kilosInput.addEventListener('input', function () {
    const kilos = parseFloat(kilosInput.value);
    if (isNaN(kilos)) {
        precioValue.textContent = '0';
    } else {
        //costo por kilo de ropa
        const precio = kilos * 30;
        precioValue.textContent = precio.toFixed(2);
    }
});


// Modal Lavadora
const tamañoLavadoraSelect = document.getElementById('tipo-lavadora');
const cantidadLavadorasInput = document.getElementById('cantidad-lavadoras');
const costoTotalP = document.getElementById('costo-total-lavadora');

const precios = {
    "Lavadora Chica": 40,
    "Lavadora Normal": 50,
    "Lavadora Grande": 65,
    "Lavadora Industrial": 110
};

tamañoLavadoraSelect.addEventListener('change', calcularCostoTotalLavadora);
cantidadLavadorasInput.addEventListener('input', calcularCostoTotalLavadora);

function calcularCostoTotalLavadora() {
    const tamañoLavadora = tamañoLavadoraSelect.value;
    const cantidadLavadoras = parseInt(cantidadLavadorasInput.value);
    if (isNaN(cantidadLavadoras)) {
        cantidadLavadoras = 0;
    }
    const precio = precios[tamañoLavadora];
    if (precio === undefined) {
        precio = 0;
    }
    const costoTotal = precio * cantidadLavadoras;
    costoTotalP.textContent = `Total: $${costoTotal}`;
}

// Modal Secadora
const cantidadSecadoraInput = document.getElementById('cantidad-secadora');
const totalSecadoraP = document.getElementById('total-secadora');

cantidadSecadoraInput.addEventListener('input', function () {
    const cantidadSecadora = parseInt(cantidadSecadoraInput.value);
    if (isNaN(cantidadSecadora)) {
        cantidadSecadora = 0;
    }
    const precio = 60; // Precio por secadora
    const total = precio * cantidadSecadora;
    totalSecadoraP.textContent = total;
});

// Modal Plancha
const cantidadPlanchaInput = document.getElementById('cantidad-plancha');
const totalPlanchaP = document.getElementById('total-plancha');
cantidadPlanchaInput.addEventListener('input', function () {
    const cantidadPlancha = parseInt(cantidadPlanchaInput.value);
    if (isNaN(cantidadPlancha)) {
        cantidadPlancha = 0;
    }
    let total = 0;
    if (cantidadPlancha >= 12) { //por cada docena se cobrara 100 
        const docenas = Math.floor(cantidadPlancha / 12);
        total = docenas * 115;
        const resto = cantidadPlancha % 12;
        total += resto * 12;
    } else {
        total = cantidadPlancha * 12;
    }
    totalPlanchaP.textContent = total;
});

// Modal Tintoreria
const cantidadTintoreriaInput = document.getElementById('cantidad-tintoreria');
const costoTintoreriaInput = document.getElementById('costo-tintoreria');
const totalTintoreriaP = document.getElementById('total-tintoreria');

cantidadTintoreriaInput.addEventListener('input', calcularCostoTotalTintoreria);
costoTintoreriaInput.addEventListener('input', calcularCostoTotalTintoreria);

function calcularCostoTotalTintoreria() {
    const cantidadTintoreria = parseInt(cantidadTintoreriaInput.value);
    if (isNaN(cantidadTintoreria)) {
        cantidadTintoreria = 0;
    }
    const costoTintoreria = parseFloat(costoTintoreriaInput.value);
    if (isNaN(costoTintoreria)) {
        costoTintoreria = 0;
    }
    const total = costoTintoreria * cantidadTintoreria;
    totalTintoreriaP.textContent = total;
}

// Modal Plastico
const cantidadPlasticoInput = document.getElementById('cantidad-plasticos');
const costoPlasticoInput = document.getElementById('costo-plasticos');
const totalPlasticoP = document.getElementById('total-plasticos');

cantidadPlasticoInput.addEventListener('input', calcularCostoTotalPlastico);
costoPlasticoInput.addEventListener('input', calcularCostoTotalPlastico);

function calcularCostoTotalPlastico() {
    const cantidadPlastico = parseInt(cantidadPlasticoInput.value);
    if (isNaN(cantidadPlastico)) {
        cantidadPlastico = 0;
    }
    const costoPlastico = parseFloat(costoPlasticoInput.value);
    if (isNaN(costoPlastico)) {
        costoPlastico = 0;
    }
    const totalPlastico = cantidadPlastico * costoPlastico;
    totalPlasticoP.textContent = totalPlastico;
}


