let citas=JSON.parse(localStorage.getItem("citas"));
if(citas){
    localStorage.setItem("citas",JSON.stringify(citas));
}else{
    localStorage.setItem("citas",JSON.stringify([]));
}

const visualizarCitas=()=>{
    let citasHTML=``;
    let citas=JSON.parse(localStorage.getItem("citas"));
    citas.map(cita=>{
        citasHTML+=`<div class="cita">
        <p>Mascota: <span>${cita.mascota}</span></p>
        <p>Propietario: <span>${cita.propietario}</span></p>
        <p>Fecha: <span>${cita.fecha}</span></p>
        <p>Hora: <span>${cita.hora}</span></p>
        <p>Sintomas: <span>${cita.sintomas}</span></p>
        
        <button
        class="button eliminar u-full-width"
        onclick="eliminarCita('${cita.id}')">Eliminar cita</button>

        </div>`
    });
    document.querySelector("#listadocitas").innerHTML=citasHTML;
}

const eliminarCita=(idCita)=>{
    let citas=JSON.parse(localStorage.getItem("citas"));
    const nuevasCitas=citas.filter(cita=>cita.id !== idCita);
    localStorage.setItem("citas",JSON.stringify(nuevasCitas));
    visualizarCitas();

}

const agregarcita=()=>{
    let id=uuid.v1();
//     console.log(id);

let mascota=document.querySelector("#mascota").value;
let propietario=document.querySelector("#propietario").value;
let fecha=document.querySelector("#fecha").value;
let hora=document.querySelector("#hora").value;
let sintomas=document.querySelector("#sintomas").value;

//   console.log(`Nombre mascota: ${mascota}`);

if(mascota.trim()===''||
propietario.trim()===''||
fecha.trim()===''||
hora.trim()===''||
sintomas.trim()===''){
mostrarError("#msj-error","Falta llenar campos");
return;
}

let nuevaCita={id,mascota,propietario,fecha,hora,sintomas}
citas.push(nuevaCita);
localStorage.setItem("citas",JSON.stringify(citas));
document.querySelector("#form").reset();
// visualizarCitas();
 }

const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="alerta-error>${mensaje}</p>`;
   setTimeout(()=>{divError.innerHTML=``;},2000);
}