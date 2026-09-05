import{s as p,r as x}from"./articlesManager.Bo7ElLvB.js";import"./hoisted.BzcJXfT6.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("auth-lock-card"),n=document.getElementById("admin-dashboard-content"),d=document.getElementById("auth-form"),u=document.getElementById("logout-btn"),r=document.getElementById("new-article-form"),i=document.getElementById("local-articles-list"),g=document.getElementById("reset-storage-btn"),f=document.querySelectorAll(".insert-tag");d&&d.addEventListener("submit",o=>{o.preventDefault(),s&&n&&(s.classList.add("hidden"),n.classList.remove("hidden"),c())}),u&&u.addEventListener("click",()=>{s&&n&&(s.classList.remove("hidden"),n.classList.add("hidden"))}),f.forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-tag"),e=document.getElementById("contenido");if(!e)return;let a="";t==="p"&&(a="<p>Tu texto aquí...</p>"),t==="blockquote"&&(a="<blockquote>«Tu cita textual aquí»</blockquote>"),t==="strong"&&(a="<strong>Texto destacado</strong>");const l=e.selectionStart,b=e.selectionEnd,m=e.value;e.value=m.substring(0,l)+a+m.substring(b),e.focus()})}),r&&r.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(r),e={titulo:t.get("titulo"),subtitulo:t.get("subtitulo"),autor:t.get("autor"),categoria:t.get("categoria"),biografiaAutor:t.get("biografiaAutor"),resumen:t.get("resumen"),contenido:t.get("contenido"),pdfUrl:t.get("pdfUrl")||"#",lecturaMinutos:parseInt(t.get("lecturaMinutos"))||5};p(e)?(alert(`¡Artículo "${e.titulo}" publicado con éxito!

Se ha guardado en localStorage y ya se muestra en la portada de la revista.`),r.reset(),c()):alert("Hubo un error guardando el artículo en el navegador.")});function c(){if(i)try{const o=localStorage.getItem("anfibias_articulos_custom");if(!o){i.innerHTML=`
            <div class="p-4 bg-sage-50 text-ink-600 text-xs italic rounded text-center">
              No has añadido artículos personalizados aún. Los 4 artículos oficiales de articulos.json están activos.
            </div>
          `;return}const t=JSON.parse(o);if(!Array.isArray(t)||t.length===0){i.innerHTML=`
            <div class="p-4 bg-sage-50 text-ink-600 text-xs italic rounded text-center">
              No hay artículos personalizados en localStorage.
            </div>
          `;return}i.innerHTML=t.map((e,a)=>`
          <div class="flex items-center justify-between p-3 bg-sage-50 border border-sage-200 rounded text-xs font-sans">
            <div>
              <span class="font-semibold text-forest-900">${e.titulo}</span>
              <span class="text-ink-600"> (${e.categoria}) — Por ${e.autor}</span>
              <span class="block text-[11px] text-ink-500">Publicado: ${e.fecha}</span>
            </div>
            <button 
              type="button" 
              class="delete-single-btn text-rose-700 hover:text-rose-900 font-semibold px-2 py-1 bg-white border border-rose-200 rounded"
              data-index="${a}"
            >
              Eliminar
            </button>
          </div>
        `).join(""),document.querySelectorAll(".delete-single-btn").forEach(e=>{e.addEventListener("click",()=>{const a=parseInt(e.getAttribute("data-index")||"0"),l=JSON.parse(localStorage.getItem("anfibias_articulos_custom")||"[]");l.splice(a,1),localStorage.setItem("anfibias_articulos_custom",JSON.stringify(l)),c()})})}catch(o){console.error(o)}}g&&g.addEventListener("click",()=>{confirm("¿Deseas borrar los artículos personalizados y restaurar los datos por defecto?")&&(x(),c(),alert("Almacenamiento local restablecido."))})});
