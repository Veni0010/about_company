// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const currentlyOpen = document.querySelector('.accordion-content.open');

//     if (currentlyOpen && currentlyOpen !== header.nextElementSibling) {
//       currentlyOpen.style.maxHeight = null;
//       currentlyOpen.classList.remove('open');
//     }

//     const content = header.nextElementSibling;

//     if (content.classList.contains('open')) {
//       content.style.maxHeight = null;
//       content.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       content.classList.add('open');
//     }
//   });
// });
// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const item = header.closest('.accordion-item');
//     const content = header.nextElementSibling;
//     const currentlyOpenItem = document.querySelector('.accordion-item.open');

//     if (currentlyOpenItem && currentlyOpenItem !== item) {
//       currentlyOpenItem.querySelector('.accordion-content').style.maxHeight = null;
//       currentlyOpenItem.classList.remove('open');
//     }

//     if (item.classList.contains('open')) {
//       content.style.maxHeight = null;
//       item.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       item.classList.add('open');
//     }
//   });
// });
document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})
