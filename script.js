const modal= document.querySelector('.modal');
const btnClose= document.querySelector('.btn-close');
const overlay = document.querySelector('.overlay');
const btnModal = document.querySelectorAll('.btn-modal');


function showModal(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// btnModal[0].addEventListener('click',showModal);
// btnModal[1].addEventListener('click',showModal);
// btnModal[2].addEventListener('click',showModal);
// btnModal[3].addEventListener('click',showModal);
// btnModal[4].addEventListener('click',showModal);

for(i=0;i<btnModal.length;i++)
  btnModal[i].addEventListener('click',showModal);

btnClose.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
  if(e.key==="Escape"){
    closeModal();
  }
});