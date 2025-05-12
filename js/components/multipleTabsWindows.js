export function createMultipleTabsWindows() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'multiple-tabs-windows';
  
  element.innerHTML = `
    <h2 class="section-title">Multiple Tabs & Windows</h2>
    <p class="section-description">Practice working with multiple tabs and windows in Playwright.</p>
    
    <div class="card">
      <h3 class="card-title">Tab Navigation</h3>
      <div class="card-content">
        <p>Test opening links in new tabs:</p>
        <div style="margin-top: var(--space-3);">
          <a href="https://example.com" target="_blank" class="button button-primary" id="open-tab">Open New Tab</a>
          <a href="#" class="button button-secondary" id="simulate-tab">Simulate Tab Opening</a>
          <button class="button button-outline" id="link-with-listener">Open Tab with JS</button>
        </div>
        <div id="tab-result" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md); min-height: 50px;">
          Tab interactions will be logged here
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Window Management</h3>
      <div class="card-content">
        <p>Test interactions between multiple windows:</p>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="open-popup">Open Popup Window</button>
          <button class="button button-secondary" id="open-window">Open New Window</button>
          <button class="button button-outline" id="check-windows">Check Windows</button>
        </div>
        <div id="window-result" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md); min-height: 50px;">
          Window interactions will be logged here
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Dialog Testing</h3>
      <div class="card-content">
        <p>Test handling of different dialog types:</p>
        <div style="margin-top: var(--space-3); display: flex; gap: var(--space-3); flex-wrap: wrap;">
          <button class="button button-primary" id="show-alert">Show Alert</button>
          <button class="button button-secondary" id="show-confirm">Show Confirm</button>
          <button class="button button-outline" id="show-prompt">Show Prompt</button>
          <button class="button button-success" id="show-modal">Show Modal Dialog</button>
        </div>
        <div id="dialog-result" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md); min-height: 50px;">
          Dialog interactions will be logged here
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Tab Focus Testing</h3>
      <div class="card-content">
        <p>Test focus events between different tabs:</p>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="track-focus">Track Tab Focus</button>
          <button class="button button-secondary" id="stop-tracking">Stop Tracking</button>
        </div>
        <div id="focus-result" style="margin-top: var(--space-3); padding: var(--space-3); background: var(--color-card); border-radius: var(--radius-md); min-height: 50px;">
          Focus tracking not started
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initMultipleTabsWindows() {
  // Tab Navigation
  const openTab = document.getElementById('open-tab');
  const simulateTab = document.getElementById('simulate-tab');
  const linkWithListener = document.getElementById('link-with-listener');
  const tabResult = document.getElementById('tab-result');
  
  if (simulateTab) {
    simulateTab.addEventListener('click', (e) => {
      e.preventDefault();
      if (tabResult) {
        tabResult.textContent = 'Simulating opening a new tab...';
      }
      
      setTimeout(() => {
        window.open('https://example.com', '_blank');
        if (tabResult) {
          tabResult.textContent = 'New tab opened programmatically!';
        }
      }, 500);
    });
  }
  
  if (linkWithListener) {
    linkWithListener.addEventListener('click', () => {
      const win = window.open('https://mozilla.org', '_blank');
      
      if (tabResult) {
        if (win) {
          tabResult.textContent = 'New tab opened with JavaScript!';
          
          // Don't manipulate other windows, blocked by browsers
          // This is just a demo of how Playwright can handle this
          tabResult.textContent += ' In Playwright, you can interact with this new tab.';
        } else {
          tabResult.textContent = 'Pop-up was blocked or failed to open.';
        }
      }
    });
  }
  
  // Track when the open-tab link is clicked
  if (openTab) {
    openTab.addEventListener('click', () => {
      if (tabResult) {
        tabResult.textContent = 'Regular link opened in new tab!';
      }
    });
  }
  
  // Window Management
  const openPopup = document.getElementById('open-popup');
  const openWindow = document.getElementById('open-window');
  const checkWindows = document.getElementById('check-windows');
  const windowResult = document.getElementById('window-result');
  
  let popupWindow = null;
  let newWindow = null;
  
  if (openPopup) {
    openPopup.addEventListener('click', () => {
      const width = 400;
      const height = 300;
      const left = (window.innerWidth - width) / 2 + window.screenX;
      const top = (window.innerHeight - height) / 2 + window.screenY;
      
      popupWindow = window.open('', 'popup', `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
      
      if (popupWindow) {
        popupWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Popup Window</title>
            <style>
              body {
                font-family: 'Inter', system-ui, sans-serif;
                padding: 20px;
                background-color: #f9f9fa;
              }
              button {
                padding: 8px 16px;
                background-color: #0071e3;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
              }
            </style>
          </head>
          <body>
            <h2>Popup Window</h2>
            <p>This is a popup window that can be controlled with Playwright.</p>
            <p>Current time: ${new Date().toLocaleTimeString()}</p>
            <button id="send-message">Send Message to Parent</button>
            <script>
              document.getElementById('send-message').addEventListener('click', () => {
                window.opener.postMessage('Hello from popup!', '*');
              });
              
              window.addEventListener('beforeunload', () => {
                window.opener.postMessage('Popup closing!', '*');
              });
            </script>
          </body>
          </html>
        `);
        
        if (windowResult) {
          windowResult.textContent = 'Popup window opened!';
        }
      } else {
        if (windowResult) {
          windowResult.textContent = 'Popup was blocked or failed to open.';
        }
      }
    });
  }
  
  if (openWindow) {
    openWindow.addEventListener('click', () => {
      newWindow = window.open('about:blank', '_blank', 'width=800,height=600');
      
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>New Window</title>
            <style>
              body {
                font-family: 'Inter', system-ui, sans-serif;
                padding: 20px;
                background-color: #f9f9fa;
              }
              button {
                padding: 8px 16px;
                background-color: #0071e3;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                margin-right: 10px;
              }
            </style>
          </head>
          <body>
            <h2>New Window</h2>
            <p>This is a new window that can be controlled with Playwright.</p>
            <div style="margin-top: 20px;">
              <button id="send-message">Send Message to Parent</button>
              <button id="close-window">Close Window</button>
            </div>
            <script>
              document.getElementById('send-message').addEventListener('click', () => {
                window.opener.postMessage('Hello from new window!', '*');
              });
              
              document.getElementById('close-window').addEventListener('click', () => {
                window.close();
              });
              
              window.addEventListener('beforeunload', () => {
                window.opener.postMessage('Window closing!', '*');
              });
            </script>
          </body>
          </html>
        `);
        
        if (windowResult) {
          windowResult.textContent = 'New window opened!';
        }
      } else {
        if (windowResult) {
          windowResult.textContent = 'Window was blocked or failed to open.';
        }
      }
    });
  }
  
  // Listen for messages from other windows
  window.addEventListener('message', (event) => {
    if (windowResult) {
      windowResult.textContent = `Received message: "${event.data}"`;
    }
  });
  
  if (checkWindows) {
    checkWindows.addEventListener('click', () => {
      if (windowResult) {
        if (popupWindow && !popupWindow.closed) {
          windowResult.textContent = 'Popup window is open.';
        } else if (newWindow && !newWindow.closed) {
          windowResult.textContent = 'New window is open.';
        } else {
          windowResult.textContent = 'No windows are currently open.';
        }
      }
    });
  }
  
  // Dialog Testing
  const showAlert = document.getElementById('show-alert');
  const showConfirm = document.getElementById('show-confirm');
  const showPrompt = document.getElementById('show-prompt');
  const showModal = document.getElementById('show-modal');
  const dialogResult = document.getElementById('dialog-result');
  
  if (showAlert) {
    showAlert.addEventListener('click', () => {
      alert('This is an alert dialog!');
      if (dialogResult) {
        dialogResult.textContent = 'Alert dialog was shown and closed.';
      }
    });
  }
  
  if (showConfirm) {
    showConfirm.addEventListener('click', () => {
      const result = confirm('Do you want to continue?');
      if (dialogResult) {
        dialogResult.textContent = `Confirm dialog result: ${result ? 'OK' : 'Cancel'}`;
      }
    });
  }
  
  if (showPrompt) {
    showPrompt.addEventListener('click', () => {
      const result = prompt('Please enter your name:', 'John Doe');
      if (dialogResult) {
        if (result === null) {
          dialogResult.textContent = 'Prompt was canceled.';
        } else {
          dialogResult.textContent = `Prompt result: "${result}"`;
        }
      }
    });
  }
  
  if (showModal) {
    // Create modal elements if they don't exist
    let modalOverlay = document.getElementById('modal-overlay');
    
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = 'modal-overlay';
      modalOverlay.className = 'modal-overlay';
      
      modalOverlay.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Modal Dialog</h3>
            <button class="modal-close" id="close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <p>This is a custom modal dialog for testing Playwright's dialog handling capabilities.</p>
            <div style="margin-top: var(--space-3);">
              <input type="text" id="modal-input" class="form-input" placeholder="Enter some text">
            </div>
          </div>
          <div class="modal-footer" style="margin-top: var(--space-3); display: flex; justify-content: flex-end; gap: var(--space-3);">
            <button id="modal-cancel" class="button button-outline">Cancel</button>
            <button id="modal-ok" class="button button-primary">OK</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modalOverlay);
      
      // Add event listeners to modal buttons
      document.getElementById('close-modal').addEventListener('click', closeModal);
      document.getElementById('modal-cancel').addEventListener('click', closeModal);
      
      document.getElementById('modal-ok').addEventListener('click', () => {
        const input = document.getElementById('modal-input');
        if (dialogResult) {
          dialogResult.textContent = `Modal input: "${input.value}"`;
        }
        closeModal();
      });
    }
    
    showModal.addEventListener('click', () => {
      modalOverlay.classList.add('active');
      // Focus on the input
      setTimeout(() => {
        document.getElementById('modal-input').focus();
      }, 100);
    });
    
    function closeModal() {
      modalOverlay.classList.remove('active');
    }
  }
  
  // Tab Focus Testing
  const trackFocus = document.getElementById('track-focus');
  const stopTracking = document.getElementById('stop-tracking');
  const focusResult = document.getElementById('focus-result');
  
  let trackingInterval = null;
  
  if (trackFocus && focusResult) {
    trackFocus.addEventListener('click', () => {
      if (trackingInterval) {
        clearInterval(trackingInterval);
      }
      
      focusResult.textContent = 'Focus tracking started. Switch tabs and return to see changes.';
      
      const startTime = Date.now();
      let lastFocused = true;
      
      // Update visibility state immediately
      updateVisibility();
      
      // Then set up interval for updates
      trackingInterval = setInterval(updateVisibility, 1000);
      
      function updateVisibility() {
        const currentlyFocused = !document.hidden;
        
        if (currentlyFocused !== lastFocused) {
          lastFocused = currentlyFocused;
          const timeElapsed = Math.round((Date.now() - startTime) / 1000);
          
          if (currentlyFocused) {
            focusResult.textContent = `Tab regained focus after ${timeElapsed} seconds.`;
          } else {
            focusResult.textContent = `Tab lost focus after ${timeElapsed} seconds.`;
          }
        }
      }
    });
  }
  
  if (stopTracking && focusResult) {
    stopTracking.addEventListener('click', () => {
      if (trackingInterval) {
        clearInterval(trackingInterval);
        trackingInterval = null;
        focusResult.textContent = 'Focus tracking stopped.';
      }
    });
  }
}