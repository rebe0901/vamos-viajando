const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

document.getElementById('year').textContent=new Date().getFullYear();
const dateInput=document.getElementById('date');
const today=new Date();
dateInput.min=today.toISOString().split('T')[0];

const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const tourSelect=document.getElementById('tourSelect');
let selectedTour='';
function openModal(tour){selectedTour=tour;modalTitle.textContent=tour;modal.classList.add('show');modal.setAttribute('aria-hidden','false');}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');}
document.querySelectorAll('.tour-btn').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.tour)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.getElementById('modalContinue').addEventListener('click',()=>{tourSelect.value=selectedTour;closeModal();document.getElementById('reservar').scrollIntoView({behavior:'smooth'});});

document.getElementById('bookingForm').addEventListener('submit',e=>{
 e.preventDefault();
 const tour=tourSelect.value;
 const date=dateInput.value;
 const people=document.getElementById('people').value;
 const name=document.getElementById('name').value;
 const phone=document.getElementById('phone').value;
 const message=document.getElementById('message').value;
 // REPLACE 505XXXXXXXX below with the real WhatsApp number before publishing.
 const whatsapp='505XXXXXXXX';
 const text=`Hola, Vamos Viajando. Quiero solicitar una reserva.%0A%0A*Tour:* ${encodeURIComponent(tour)}%0A*Fecha:* ${encodeURIComponent(date)}%0A*Personas:* ${encodeURIComponent(people)}%0A*Nombre:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Mensaje:* ${encodeURIComponent(message||'Sin mensaje adicional')}`;
 window.open(`https://wa.me/${whatsapp}?text=${text}`,'_blank');
});

window.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
