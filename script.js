const wa='50575000955';
const menu=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const dateInput=document.getElementById('date');
if(dateInput){
  const today=new Date();
  const yyyy=today.getFullYear();
  const mm=String(today.getMonth()+1).padStart(2,'0');
  const dd=String(today.getDate()).padStart(2,'0');
  dateInput.min=yyyy+'-'+mm+'-'+dd;
}

document.querySelectorAll('.tour-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const select=document.getElementById('tour');
  select.value=btn.dataset.tour;
  document.getElementById('book').scrollIntoView({behavior:'smooth'});
}));

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const tour=document.getElementById('tour').value;
  const date=document.getElementById('date').value;
  const people=document.getElementById('people').value;
  const name=document.getElementById('name').value;
  const phone=document.getElementById('phone').value;
  const message=document.getElementById('message').value||'No additional message';

  const text=[
    'Hello, Vamos Viajando!',
    '',
    'I would like to request a booking.',
    '',
    'Experience: '+tour,
    'Date: '+date,
    'Travelers: '+people,
    'Name: '+name,
    'WhatsApp: '+phone,
    'Message: '+message
  ].join('\n');

  window.open('https://wa.me/'+wa+'?text='+encodeURIComponent(text),'_blank');
});

document.getElementById('year').textContent=new Date().getFullYear();

// Selector de idiomas - Vamos Viajando
const langES = document.getElementById('langES');
const langEN = document.getElementById('langEN');

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('vamosLanguage', lang);

  langES?.classList.toggle('active', lang === 'es');
  langEN?.classList.toggle('active', lang === 'en');
}

langES?.addEventListener('click', () => changeLanguage('es'));
langEN?.addEventListener('click', () => changeLanguage('en'));

changeLanguage(localStorage.getItem('vamosLanguage') || 'en');
  
