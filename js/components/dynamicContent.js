export function createDynamicContent() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'dynamic-content';
  
  element.innerHTML = `
    <h2 class="section-title">Dynamic Content</h2>
    <p class="section-description">Practice testing with dynamic, asynchronously loaded content and state changes.</p>
    
    <div class="card">
      <h3 class="card-title">Lazy Loading</h3>
      <div class="card-content">
        <p>Test content that loads after a delay:</p>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="load-content">Load Content</button>
          <button class="button button-secondary" id="load-content-slow">Load Content (Slow)</button>
        </div>
        <div id="lazy-content" style="margin-top: var(--space-3); min-height: 150px; border: 1px dashed var(--color-border); border-radius: var(--radius-md); padding: var(--space-3); display: flex; align-items: center; justify-content: center;">
          Content will appear here after loading
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Infinite Scroll</h3>
      <div class="card-content">
        <p>Test loading more items as you scroll:</p>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="reset-scroll">Reset Items</button>
        </div>
        <div id="infinite-scroll-container" style="margin-top: var(--space-3); height: 300px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-3);">
          <div id="infinite-scroll-content"></div>
          <div id="infinite-scroll-loader" style="text-align: center; padding: var(--space-3); display: none;">
            <div class="loading-spinner"></div>
            <p class="loading-text">Loading more items...</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Network Requests</h3>
      <div class="card-content">
        <p>Test handling of network requests and responses:</p>
        <div style="margin-top: var(--space-3); display: flex; gap: var(--space-3);">
          <button class="button button-primary" id="fetch-data">Fetch Data</button>
          <button class="button button-secondary" id="fetch-with-error">Fetch With Error</button>
          <button class="button button-outline" id="fetch-with-delay">Fetch With Delay</button>
        </div>
        <div id="network-result" style="margin-top: var(--space-3); min-height: 150px; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-3);">
          Network results will appear here
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">DOM Changes</h3>
      <div class="card-content">
        <p>Test detection of DOM changes:</p>
        <div style="margin-top: var(--space-3); display: flex; gap: var(--space-3);">
          <button class="button button-primary" id="add-element">Add Element</button>
          <button class="button button-secondary" id="remove-element">Remove Element</button>
          <button class="button button-outline" id="modify-element">Modify Element</button>
          <button class="button button-error" id="clear-elements">Clear All</button>
        </div>
        <div id="dom-changes-container" style="margin-top: var(--space-3); min-height: 150px; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-3);">
          <div class="initial-element" data-testid="initial">This is the initial element</div>
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initDynamicContent() {
  // Lazy Loading
  const loadContent = document.getElementById('load-content');
  const loadContentSlow = document.getElementById('load-content-slow');
  const lazyContent = document.getElementById('lazy-content');
  
  if (loadContent && lazyContent) {
    loadContent.addEventListener('click', () => {
      // Show loading state
      lazyContent.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <span class="loading-text">Loading...</span>
        </div>
      `;
      
      // Load content after delay
      setTimeout(() => {
        lazyContent.innerHTML = `
          <div style="width: 100%;">
            <h4 style="margin-bottom: var(--space-2);">Loaded Content</h4>
            <p>This content was loaded asynchronously after a short delay.</p>
            <div style="margin-top: var(--space-3);">
              <button class="button button-outline" id="refresh-lazy">Refresh Content</button>
            </div>
          </div>
        `;
        
        // Add event listener to refresh button
        const refreshLazy = document.getElementById('refresh-lazy');
        if (refreshLazy) {
          refreshLazy.addEventListener('click', () => {
            lazyContent.innerHTML = 'Content will appear here after loading';
          });
        }
      }, 1000);
    });
  }
  
  if (loadContentSlow && lazyContent) {
    loadContentSlow.addEventListener('click', () => {
      // Show loading state
      lazyContent.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <span class="loading-text">Loading slowly...</span>
        </div>
      `;
      
      // Load content after a longer delay
      setTimeout(() => {
        lazyContent.innerHTML = `
          <div style="width: 100%;">
            <h4 style="margin-bottom: var(--space-2);">Slowly Loaded Content</h4>
            <p>This content was loaded after a longer delay (3 seconds). It's useful for testing Playwright's waiting mechanisms.</p>
            <div style="margin-top: var(--space-3);">
              <button class="button button-outline" id="refresh-lazy">Refresh Content</button>
            </div>
          </div>
        `;
        
        // Add event listener to refresh button
        const refreshLazy = document.getElementById('refresh-lazy');
        if (refreshLazy) {
          refreshLazy.addEventListener('click', () => {
            lazyContent.innerHTML = 'Content will appear here after loading';
          });
        }
      }, 3000);
    });
  }
  
  // Infinite Scroll
  const infiniteScrollContainer = document.getElementById('infinite-scroll-container');
  const infiniteScrollContent = document.getElementById('infinite-scroll-content');
  const infiniteScrollLoader = document.getElementById('infinite-scroll-loader');
  const resetScroll = document.getElementById('reset-scroll');
  
  // Initial item count
  let itemCount = 0;
  
  // Function to add items
  function addItems() {
    const fragment = document.createDocumentFragment();
    const startIndex = itemCount;
    const endIndex = itemCount + 10;
    
    for (let i = startIndex; i < endIndex; i++) {
      const item = document.createElement('div');
      item.className = 'scroll-item';
      item.setAttribute('data-item-id', i);
      item.style.padding = 'var(--space-3)';
      item.style.borderBottom = '1px solid var(--color-border)';
      
      item.innerHTML = `
        <h4>Item ${i + 1}</h4>
        <p>This is item number ${i + 1} in the infinite scroll list.</p>
      `;
      
      fragment.appendChild(item);
    }
    
    infiniteScrollContent.appendChild(fragment);
    itemCount = endIndex;
  }
  
  // Initialize infinite scroll with first batch of items
  if (infiniteScrollContent) {
    addItems();
    
    // Handle scroll event to load more items
    if (infiniteScrollContainer && infiniteScrollLoader) {
      infiniteScrollContainer.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = infiniteScrollContainer;
        
        // Check if scrolled to bottom
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          // Show loader
          infiniteScrollLoader.style.display = 'block';
          
          // Load more items after delay
          setTimeout(() => {
            addItems();
            infiniteScrollLoader.style.display = 'none';
          }, 800);
        }
      });
    }
    
    // Reset items
    if (resetScroll) {
      resetScroll.addEventListener('click', () => {
        itemCount = 0;
        infiniteScrollContent.innerHTML = '';
        addItems();
        infiniteScrollContainer.scrollTop = 0;
      });
    }
  }
  
  // Network Requests
  const fetchData = document.getElementById('fetch-data');
  const fetchWithError = document.getElementById('fetch-with-error');
  const fetchWithDelay = document.getElementById('fetch-with-delay');
  const networkResult = document.getElementById('network-result');
  
  if (fetchData && networkResult) {
    fetchData.addEventListener('click', () => {
      // Show loading state
      networkResult.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <span class="loading-text">Fetching data...</span>
        </div>
      `;
      
      // Simulate successful API request
      setTimeout(() => {
        const data = {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          posts: [
            { id: 101, title: 'First Post' },
            { id: 102, title: 'Second Post' }
          ]
        };
        
        networkResult.innerHTML = `
          <div>
            <h4 style="margin-bottom: var(--space-2);">Fetch Successful</h4>
            <pre style="background: var(--color-card); padding: var(--space-3); border-radius: var(--radius-md); overflow-x: auto;">${JSON.stringify(data, null, 2)}</pre>
          </div>
        `;
      }, 1000);
    });
  }
  
  if (fetchWithError && networkResult) {
    fetchWithError.addEventListener('click', () => {
      // Show loading state
      networkResult.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <span class="loading-text">Fetching data...</span>
        </div>
      `;
      
      // Simulate failed API request
      setTimeout(() => {
        networkResult.innerHTML = `
          <div>
            <h4 style="margin-bottom: var(--space-2); color: var(--color-error);">Fetch Error</h4>
            <div style="background: rgba(255, 59, 48, 0.1); color: var(--color-error); padding: var(--space-3); border-radius: var(--radius-md);">
              <p>Error 404: Resource not found</p>
              <p>The requested resource could not be found on the server.</p>
            </div>
          </div>
        `;
      }, 1000);
    });
  }
  
  if (fetchWithDelay && networkResult) {
    fetchWithDelay.addEventListener('click', () => {
      // Show loading state
      networkResult.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <span class="loading-text">Fetching data with delay...</span>
        </div>
      `;
      
      // Simulate slow API request
      setTimeout(() => {
        const data = {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          timestamp: new Date().toISOString()
        };
        
        networkResult.innerHTML = `
          <div>
            <h4 style="margin-bottom: var(--space-2);">Delayed Fetch Successful</h4>
            <p style="margin-bottom: var(--space-2);">Response received after 3 second delay:</p>
            <pre style="background: var(--color-card); padding: var(--space-3); border-radius: var(--radius-md); overflow-x: auto;">${JSON.stringify(data, null, 2)}</pre>
          </div>
        `;
      }, 3000);
    });
  }
  
  // DOM Changes
  const addElement = document.getElementById('add-element');
  const removeElement = document.getElementById('remove-element');
  const modifyElement = document.getElementById('modify-element');
  const clearElements = document.getElementById('clear-elements');
  const domChangesContainer = document.getElementById('dom-changes-container');
  
  let elementCounter = 0;
  
  if (addElement && domChangesContainer) {
    addElement.addEventListener('click', () => {
      elementCounter++;
      
      const newElement = document.createElement('div');
      newElement.className = 'dynamic-element';
      newElement.setAttribute('data-testid', `dynamic-${elementCounter}`);
      newElement.style.padding = 'var(--space-2)';
      newElement.style.margin = 'var(--space-2) 0';
      newElement.style.backgroundColor = 'var(--color-card)';
      newElement.style.borderRadius = 'var(--radius-md)';
      newElement.style.animation = 'fadeIn var(--transition-normal)';
      
      newElement.textContent = `Dynamically added element #${elementCounter}`;
      
      domChangesContainer.appendChild(newElement);
    });
  }
  
  if (removeElement && domChangesContainer) {
    removeElement.addEventListener('click', () => {
      const elements = domChangesContainer.querySelectorAll('.dynamic-element');
      if (elements.length > 0) {
        // Remove the last added element
        elements[elements.length - 1].remove();
      }
    });
  }
  
  if (modifyElement && domChangesContainer) {
    modifyElement.addEventListener('click', () => {
      const initialElement = domChangesContainer.querySelector('.initial-element');
      if (initialElement) {
        // Modify the element's content and style
        initialElement.textContent = `Modified at ${new Date().toLocaleTimeString()}`;
        initialElement.style.backgroundColor = getRandomColor();
        initialElement.style.color = 'white';
        initialElement.style.padding = 'var(--space-3)';
        initialElement.style.borderRadius = 'var(--radius-md)';
        initialElement.style.transition = 'background-color var(--transition-normal)';
      }
    });
  }
  
  if (clearElements && domChangesContainer) {
    clearElements.addEventListener('click', () => {
      // Keep only the initial element
      const initialElement = domChangesContainer.querySelector('.initial-element');
      domChangesContainer.innerHTML = '';
      
      if (initialElement) {
        // Reset the initial element
        initialElement.textContent = 'This is the initial element';
        initialElement.style = '';
        domChangesContainer.appendChild(initialElement);
      }
      
      elementCounter = 0;
    });
  }
  
  // Helper function to get random color
  function getRandomColor() {
    const colors = [
      'var(--color-primary)',
      'var(--color-secondary)',
      'var(--color-accent)',
      'var(--color-success)',
      'var(--color-warning)',
      'var(--color-error)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}