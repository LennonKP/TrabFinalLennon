// Adicionar scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(a.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  
  // Adicionar scroll suave para o topo ao clicar no botão
  scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // Para navegadores que não suportam scrollIntoView
    document.documentElement.scrollTop = 0;
  });