document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs button');
  const tabContent = document.getElementById('tabContent');
  const cerrarSesion = document.getElementById('cerrarSesion');
  const volverBtn = document.getElementById('volverBtn');
  const resetBtn = document.getElementById('resetBtn');
  const saveBtn = document.getElementById('saveBtn');

  // Función para cargar contenido según la pestaña
  function loadTab(tab) {
    tabs.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tabs button[data-tab="${tab}"]`).classList.add('active');

    switch(tab) {
      case 'datos':
        tabContent.innerHTML = `
          <h3>Información Personal</h3>
          <form class="form-grid">
            <div class="form-group">
              <label>Nombre Completo *</label>
              <input type="text" value="Juan Pérez González">
            </div>
            <div class="form-group">
              <label>Número de Identificación</label>
              <input type="text" value="1234567890">
            </div>
            <div class="form-group verified">
              <label>Correo Electrónico *</label>
              <input type="email" value="juan.perez@superbrix.com">
              <span class="verified-icon">✓ Verificado</span>
            </div>
            <div class="form-group">
              <label>Teléfono</label>
              <input type="text" value="+57 300 123 4567">
            </div>
            <div class="form-group">
              <label>Cargo/Posición</label>
              <input type="text" value="Ingeniero de Diseño Senior">
            </div>
            <div class="form-group depto">
              <label>Departamento</label>
              <input type="text" value="Ingeniería y Diseño">
            </div>
            <div class="form-group full-width">
              <label>Dirección</label>
              <input type="text" value="Calle 123 #45-67, Barranquilla, Colombia">
            </div>
          </form>
          <div class="info-message">
            <p><strong>ℹ️ Importante:</strong> Los cambios en tu información personal serán revisados por el administrador antes de ser aplicados.</p>
          </div>
        `;
        break;

      case 'seguridad':
        tabContent.innerHTML = `
          <h3>Seguridad de la Cuenta</h3>
          <form class="form-grid">
            <div class="form-group full-width">
              <label>Contraseña actual</label>
              <input type="password" placeholder="••••••••">
            </div>
            <div class="form-group">
              <label>Nueva contraseña</label>
              <input type="password" placeholder="Ingrese nueva contraseña">
            </div>
            <div class="form-group">
              <label>Confirmar nueva contraseña</label>
              <input type="password" placeholder="Repita nueva contraseña">
            </div>
          </form>
          <div class="info-message">
            <p><strong>⚠️ Consejo:</strong> Use una contraseña de al menos 8 caracteres con letras, números y símbolos.</p>
          </div>
        `;
        break;

      case 'notificaciones':
        tabContent.innerHTML = `
          <h3>Notificaciones</h3>
          <form class="form-grid">
            <div class="form-group full-width">
              <label><input type="checkbox" checked> 📧 Recibir notificaciones por correo</label>
            </div>
            <div class="form-group full-width">
              <label><input type="checkbox"> 🔔 Notificaciones dentro del sistema</label>
            </div>
            <div class="form-group full-width">
              <label><input type="checkbox" checked> 🧾 Reportes automáticos semanales</label>
            </div>
          </form>
        `;
        break;

      case 'preferencias':
        tabContent.innerHTML = `
          <h3>Preferencias del Sistema</h3>
          <form class="form-grid">
            <div class="form-group">
              <label>Idioma</label>
              <select>
                <option>Español</option>
                <option>Inglés</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tema visual</label>
              <select>
                <option>Claro</option>
                <option>Oscuro</option>
              </select>
            </div>
            <div class="form-group full-width">
              <label><input type="checkbox" checked> Mostrar consejos al iniciar sesión</label>
            </div>
          </form>
        `;
        break;
    }
  }

  // Eventos
  tabs.forEach(btn => btn.addEventListener('click', () => loadTab(btn.dataset.tab)));

  volverBtn.addEventListener('click', () => {
    alert("Regresando al Dashboard...");
    window.location.href = "dashboard.html";
  });

  resetBtn.addEventListener('click', () => {
    if (confirm("¿Deseas restablecer los valores originales?")) {
      loadTab(document.querySelector('.tabs button.active').dataset.tab);
    }
  });

  saveBtn.addEventListener('click', () => {
    alert("✅ Cambios guardados correctamente.");
  });

  cerrarSesion.addEventListener('click', () => {
    if (confirm("¿Deseas cerrar sesión?")) {
      window.location.href = "login.html";
    }
  });

  // Carga inicial
  loadTab('datos');
});
