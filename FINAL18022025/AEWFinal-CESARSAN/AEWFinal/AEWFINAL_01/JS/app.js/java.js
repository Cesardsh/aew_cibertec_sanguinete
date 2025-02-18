
var EquipoDocente = document.getElementById('equipo-docente');

EquipoDocente.addEventListener('mouseover', accionSobreImagen);
EquipoDocente,addEventListener('mouseout', accionFueraImagen);

function accionSobreImagen (evento)     {
    var target = evento.target;
    if (target.tagName !== 'IMG') return;
    
    var image = target;
    image.classList.toogle('hover');
}
function  accionSobreImagenn (evento) {
    var target = evento.target;
    if (target.tagName !== 'IMG') return;
    
    var image = target;
    image.classList.toogle('hover');
}