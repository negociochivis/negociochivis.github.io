document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.boton').addEventListener('click', () => {
      document.querySelector('.barmenu').classList.toggle('show');
    });
  });