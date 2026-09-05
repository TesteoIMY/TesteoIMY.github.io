import{g as d}from"./articlesManager.Bo7ElLvB.js";import"./ArticleModal.astro_astro_type_script_index_0_lang.DXfDnhfp.js";import"./hoisted.BzcJXfT6.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("articles-grid"),o=document.getElementById("no-articles-msg"),a=document.querySelectorAll(".category-filter-btn");function l(e="Todos"){if(!r)return;const n=d();r.innerHTML="";const s=e==="Todos"?n:n.filter(t=>t.categoria===e);s.length===0?o&&o.classList.remove("hidden"):(o&&o.classList.add("hidden"),s.forEach(t=>{const i=document.createElement("div");i.className="article-item-wrapper fade-in",i.setAttribute("data-category",t.categoria),i.innerHTML=`
            <article class="bg-white border border-pistachio-300 rounded-xl p-6 hover:border-forest-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3 text-xs text-ink-600 font-sans">
                  <span class="inline-block bg-pistachio-100 text-forest-900 font-semibold uppercase tracking-wider px-2.5 py-1 rounded text-[11px] border border-pistachio-200">
                    ${t.categoria}
                  </span>
                  <div class="flex items-center gap-2">
                    <time>${t.fecha}</time>
                    <span>·</span>
                    <span>${t.lecturaMinutos||5} min</span>
                  </div>
                </div>

                <h3 class="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors leading-snug mb-2">
                  <button 
                    type="button" 
                    class="open-article-btn text-left hover:underline focus:outline-none"
                    data-article='${JSON.stringify(t).replace(/'/g,"&apos;")}'
                  >
                    ${t.titulo}
                  </button>
                </h3>

                ${t.subtitulo?`<p class="font-serif italic text-sm text-forest-800 mb-3 leading-relaxed">${t.subtitulo}</p>`:""}

                <div class="text-xs font-sans text-forest-900 font-semibold mb-4 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                  <span>Por ${t.autor}</span>
                </div>

                <p class="text-ink-800 text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                  ${t.resumen}
                </p>
              </div>

              <div class="pt-4 border-t border-pistachio-200 flex items-center justify-between gap-3 text-xs font-sans mt-auto">
                <button
                  type="button"
                  class="open-article-btn font-semibold text-forest-900 hover:text-forest-700 inline-flex items-center gap-1"
                  data-article='${JSON.stringify(t).replace(/'/g,"&apos;")}'
                >
                  <span>Leer texto completo</span>
                  <svg class="w-3.5 h-3.5 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>

                <button
                  type="button"
                  class="download-pdf-btn text-forest-900 font-semibold hover:bg-pistachio-100 inline-flex items-center gap-1 bg-pistachio-50 px-2.5 py-1.5 rounded border border-pistachio-300"
                  data-title="${t.titulo}"
                  data-autor="${t.autor}"
                >
                  <svg class="w-3.5 h-3.5 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <span>PDF</span>
                </button>
              </div>
            </article>
          `,r.appendChild(i)}))}l("Todos"),a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(s=>{s.classList.remove("bg-forest-800","text-white","font-semibold","shadow-2xs"),s.classList.add("bg-pistachio-100","text-forest-900")}),e.classList.remove("bg-pistachio-100","text-forest-900"),e.classList.add("bg-forest-800","text-white","font-semibold","shadow-2xs");const n=e.getAttribute("data-category")||"Todos";l(n)})})});
