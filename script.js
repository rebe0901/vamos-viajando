const wa='50575000955';
const menu=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.tour-btn').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('tour').value=btn.dataset.tour;document.getElementById('book').scrollIntoView({behavior:'smooth'});}));
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();const tour=document.getElementById('tour').value,date=document.getElementById('date').value,people=document.getElementById('people').value,name=document.getElementById('name').value,phone=document.getElementById('phone').value,message=document.getElementById('message').value||'No additional message';const text=`Hello, Vamos Viajando! I would like to request a booking.%0A%0AExperience: ${encodeURIComponent(tour)}%0ADate: ${encodeURIComponent(date)}%0ATravelers: ${encodeURIComponent(people)}%0AName: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;window.open(`https://wa.me/${wa}?text=${text}`,'_blank');});
document.getElementById('year').textContent=new Date().getFullYear();
