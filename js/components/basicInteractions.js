export function createBasicInteractions() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'basic-interactions';
  
  element.innerHTML = `
    <h2 class="section-title">Basic Interactions</h2>
    <p class="section-description">Practice common Playwright interactions like clicks, hover, and text selection.</p>
    
    <div class="card">
      <h3 class="card-title">Click Events</h3>
      <div class="card-content">
        <p>Click the buttons below to see their effects:</p>
        <div class="button-group" style="display: flex; gap: var(--space-3); margin-top: var(--space-3);">
          <button class="button button-primary" id="single-click">Single Click</button>
          <button class="button button-secondary" id="double-click">Double Click</button>
          <button class="button button-outline" id="right-click">Right Click</button>
          <button class="button button-success" id="disabled-button" disabled>Disabled Button</button>
        </div>
        <div id="click-result" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md); min-height: 50px;">
          Click result will appear here
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Hover Events</h3>
      <div class="card-content">
        <p>Hover over the elements below:</p>
        <div style="display: flex; gap: var(--space-3); margin-top: var(--space-3);">
          <div class="hover-element" style="padding: var(--space-3); background: var(--color-primary-light); border-radius: var(--radius-md); transition: transform var(--transition-normal);">
            Hover Me
          </div>
          <div class="tooltip">
            <span>Hover for tooltip</span>
            <span class="tooltip-text">This is a tooltip!</span>
          </div>
          <div class="hover-element-image" style="width: 100px; height: 100px; background-color: var(--color-secondary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: white;">
            Image
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Text Selection</h3>
      <div class="card-content">
        <p>Try to select text in the paragraph below:</p>
        <div class="selectable-text" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md);">
          This text can be selected for testing Playwright's text selection capabilities. You can verify if the correct text was selected or extract text from this paragraph.
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Visibility Changes</h3>
      <div class="card-content">
        <p>Test visibility changes:</p>
        <div style="margin-top: var(--space-3); display: flex; gap: var(--space-3);">
          <button class="button button-primary" id="toggle-visibility">Toggle Element</button>
          <button class="button button-secondary" id="show-delayed">Show After Delay (2s)</button>
        </div>
        <div id="visibility-target" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-accent-light); border-radius: var(--radius-md); transition: opacity var(--transition-normal);">
          This element can be hidden and shown
        </div>
        <div id="delayed-element" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-warning); border-radius: var(--radius-md); display: none;">
          This element appears after a delay
        </div>
      </div>
    </div>
  `;
  
  // We'll return the element now and attach event listeners after it's been added to the DOM
  return element;
}

export function initBasicInteractions() {
  // Click events
  const singleClick = document.getElementById('single-click');
  const doubleClick = document.getElementById('double-click');
  const rightClick = document.getElementById('right-click');
  const clickResult = document.getElementById('click-result');
  
  if (singleClick) {
    singleClick.addEventListener('click', () => {
      clickResult.textContent = 'Single click detected!';
      clickResult.style.backgroundColor = 'var(--color-primary-light)';
    });
  }
  
  if (doubleClick) {
    doubleClick.addEventListener('dblclick', () => {
      clickResult.textContent = 'Double click detected!';
      clickResult.style.backgroundColor = 'var(--color-secondary-light)';
    });
  }
  
  if (rightClick) {
    rightClick.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      clickResult.textContent = 'Right click detected!';
      clickResult.style.backgroundColor = 'var(--color-accent-light)';
    });
  }
  
  // Hover events
  const hoverElements = document.querySelectorAll('.hover-element');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.1)';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
  });
  
  // Visibility changes
  const toggleVisibility = document.getElementById('toggle-visibility');
  const visibilityTarget = document.getElementById('visibility-target');
  const showDelayed = document.getElementById('show-delayed');
  const delayedElement = document.getElementById('delayed-element');
  
  if (toggleVisibility && visibilityTarget) {
    toggleVisibility.addEventListener('click', () => {
      if (visibilityTarget.style.opacity === '0') {
        visibilityTarget.style.opacity = '1';
        visibilityTarget.style.pointerEvents = 'auto';
      } else {
        visibilityTarget.style.opacity = '0';
        visibilityTarget.style.pointerEvents = 'none';
      }
    });
  }
  
  if (showDelayed && delayedElement) {
    showDelayed.addEventListener('click', () => {
      showDelayed.disabled = true;
      setTimeout(() => {
        delayedElement.style.display = 'block';
        delayedElement.style.animation = 'fadeIn var(--transition-normal)';
        showDelayed.disabled = false;
      }, 2000);
    });
  }
}