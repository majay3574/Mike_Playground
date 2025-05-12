import './style.css';
import { createNavigation, initNavigation } from './js/components/navigation.js';
import { createBasicInteractions, initBasicInteractions } from './js/components/basicInteractions.js';
import { createFormElements, initFormElements } from './js/components/formElements.js';
import { createAdvancedSelectors, initAdvancedSelectors } from './js/components/advancedSelectors.js';
import { createIframeSection, initIframeSection } from './js/components/iframeSection.js';
import { createFileUpload, initFileUpload } from './js/components/fileUpload.js';
import { createMultipleTabsWindows, initMultipleTabsWindows } from './js/components/multipleTabsWindows.js';
import { createDragAndDrop, initDragAndDrop } from './js/components/dragAndDrop.js';
import { createDynamicContent, initDynamicContent } from './js/components/dynamicContent.js';
import { createApiTesting, initApiTesting } from './js/components/apiTesting.js';

// Initialize app
function initApp() {
  const app = document.querySelector('#app');
  
  if (app) {
    // Create main structure
    app.innerHTML = `
      <div id="header-container"></div>
      <main class="container content-area" id="content-container"></main>
    `;
    
    // Add navigation
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      headerContainer.appendChild(createNavigation());
    }
    
    // Add content sections
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
      contentContainer.appendChild(createBasicInteractions());
      contentContainer.appendChild(createFormElements());
      contentContainer.appendChild(createAdvancedSelectors());
      contentContainer.appendChild(createIframeSection());
      contentContainer.appendChild(createFileUpload());
      contentContainer.appendChild(createMultipleTabsWindows());
      contentContainer.appendChild(createDragAndDrop());
      contentContainer.appendChild(createDynamicContent());
      contentContainer.appendChild(createApiTesting());
      
      // Set initial active section
      document.getElementById('basic-interactions').classList.add('active');
    }
    
    // Initialize components
    initNavigation();
    initBasicInteractions();
    initFormElements();
    initAdvancedSelectors();
    initIframeSection();
    initFileUpload();
    initMultipleTabsWindows();
    initDragAndDrop();
    initDynamicContent();
    initApiTesting();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);