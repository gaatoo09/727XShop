
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const contenido = document.getElementById("contenido");
  
    if (preloader && contenido) {
      setTimeout(() => {
        preloader.style.display = "none";
        contenido.classList.remove("oculto");
      }, 2000);
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".comprar-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const producto = this.getAttribute("data-producto");
        if (producto) {
          const url = "compra.html?producto=" + encodeURIComponent(producto);
          window.location.href = url;
        }
      });
    });
  
    
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get("producto");
    const inputProducto = document.getElementById("input-producto");
  
    if (producto && inputProducto) {
      inputProducto.value = decodeURIComponent(producto);
    }
  });
  