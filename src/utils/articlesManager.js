import initialArticles from '../data/articulos.json';

const STORAGE_KEY = 'anfibias_articulos_custom';

/**
 * Obtiene la lista combinada de artículos (iniciales + creados en localStorage).
 * Funciona tanto en cliente como en compilación SSR/estática.
 */
export function getArticles() {
  if (typeof window === 'undefined') {
    return initialArticles;
  }

  try {
    const customData = localStorage.getItem(STORAGE_KEY);
    if (!customData) {
      return initialArticles;
    }
    const parsed = JSON.parse(customData);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Retornar personalizados primero, luego los iniciales
      return [...parsed, ...initialArticles];
    }
  } catch (e) {
    console.error('Error leyendo artículos de localStorage:', e);
  }

  return initialArticles;
}

/**
 * Guarda un nuevo artículo en localStorage
 */
export function saveArticle(nuevoArticulo) {
  if (typeof window === 'undefined') return false;

  try {
    const customData = localStorage.getItem(STORAGE_KEY);
    let currentCustom = [];
    if (customData) {
      currentCustom = JSON.parse(customData);
    }
    
    // Crear ID slug si no existe
    const id = nuevoArticulo.id || nuevoArticulo.titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const articuloCompleto = {
      ...nuevoArticulo,
      id,
      fecha: nuevoArticulo.fecha || new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      destacado: nuevoArticulo.destacado || false,
      lecturaMinutos: nuevoArticulo.lecturaMinutos || 5
    };

    const actualizados = [articuloCompleto, ...currentCustom];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizados));
    return true;
  } catch (e) {
    console.error('Error guardando artículo:', e);
    return false;
  }
}

/**
 * Restablece los artículos guardados en localStorage
 */
export function resetArticles() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
