document.getElementById("btn-enviar")?.addEventListener("click", function () {
    const formNombre = (document.getElementById("inputNombre") as HTMLInputElement)?.value.trim();
    const formDNI = (document.getElementById("inputDni") as HTMLInputElement)?.value.trim();
    const formEdad = (document.getElementById("inputEdad") as HTMLInputElement)?.value.trim();
    const formSede = (document.getElementById("sede-select") as HTMLSelectElement)?.value;
    const formConsulta = (document.getElementById("consulta-select") as HTMLSelectElement)?.value;
    const areaConsulta = (document.getElementById("consulta-adicional") as HTMLSelectElement)?.value;

    if (!formNombre || !formDNI || !formEdad || !formSede || !formConsulta) {
        alert("Necesitas rellenar todos los campos antes de enviar tu solicitud.");
        return;
    }

    const mensaje = `*Solicitud de Cita Médica*%0A%0A` +
        `👤 *Paciente:* ${formNombre}%0A` +
        `🆔 *DNI:* ${formDNI}%0A` +
        `🎂 *Edad:* ${formEdad} años%0A%0A` +
        `📍 *Sede preferida:* ${formSede}%0A` +
        `🩺 *Tipo de consulta:* ${formConsulta}%0A` +
        `📝 *Descripción adicional:* ${areaConsulta || "No especificada"}%0A%0A` +
        `Le agradecería confirmarme la disponibilidad para esta cita.%0A` +
        `Muchas gracias. 🙏`;

    const numeroWhatsApp = "";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

    window.open(url, "_blank");
});
