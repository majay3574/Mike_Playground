export function createNavigation() {
  const element = document.createElement('div');
  element.className = 'header';

  element.innerHTML = `
    <div class="container header-content">
      <div class="logo" style="display: flex; align-items: center; gap: 10px;">
       <img src="data/Owner.png" alt="Logo" style="width: 40px; position: relative; top: 3px;" />
       <span>Mike Testing Playground</span>
     </div>

    </div>
    <div class="container">
      <div class="tabs" id="navigation-tabs">
        <button class="tab active" data-section="basic-interactions">Basic Interactions</button>
        <button class="tab" data-section="form-elements">Form Elements</button>
        <button class="tab" data-section="advanced-selectors">Advanced Selectors</button>
        <button class="tab" data-section="iframe-section">Iframes</button>
        <button class="tab" data-section="file-upload">File Upload</button>
        <button class="tab" data-section="multiple-tabs-windows">Multiple Tabs</button>
        <button class="tab" data-section="drag-and-drop">Drag and Drop</button>
        <button class="tab" data-section="dynamic-content">Dynamic Content</button>
        <button class="tab" data-section="api-testing">API Testing</button>
      </div>
    </div>
  `;

  return element;
}

export function initNavigation() {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Activate clicked tab
      tab.classList.add('active');

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Show corresponding section
      const sectionId = tab.getAttribute('data-section');
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.classList.add('active');
        // Scroll to top of section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}