export function createDragAndDrop() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'drag-and-drop';
  
  element.innerHTML = `
    <h2 class="section-title">Drag and Drop</h2>
    <p class="section-description">Practice Playwright drag and drop interactions with sortable items and drop zones.</p>
    
    <div class="card">
      <h3 class="card-title">Simple Drag and Drop</h3>
      <div class="card-content">
        <p>Drag the items and drop them into the target zone:</p>
        <div style="display: flex; gap: var(--space-3); margin-top: var(--space-3); flex-wrap: wrap;">
          <div style="flex: 1;">
            <h4 style="margin-bottom: var(--space-2);">Draggable Items</h4>
            <div id="draggable-items">
              <div class="draggable" draggable="true" data-id="item-1">Item 1</div>
              <div class="draggable" draggable="true" data-id="item-2">Item 2</div>
              <div class="draggable" draggable="true" data-id="item-3">Item 3</div>
            </div>
          </div>
          <div style="flex: 1;">
            <h4 style="margin-bottom: var(--space-2);">Drop Zone</h4>
            <div id="drop-zone" class="drop-zone">
              <p>Drop items here</p>
            </div>
          </div>
        </div>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="reset-drag">Reset Items</button>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Sortable List</h3>
      <div class="card-content">
        <p>Drag items to reorder the list:</p>
        <div style="margin-top: var(--space-3);">
          <ul id="sortable-list" style="list-style: none; padding: 0;">
            <li class="sortable-item" draggable="true" data-id="1">
              <div style="display: flex; align-items: center; padding: var(--space-3); background: var(--color-card); margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                <span style="margin-right: var(--space-2); opacity: 0.5;">≡</span>
                <span>First Item</span>
              </div>
            </li>
            <li class="sortable-item" draggable="true" data-id="2">
              <div style="display: flex; align-items: center; padding: var(--space-3); background: var(--color-card); margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                <span style="margin-right: var(--space-2); opacity: 0.5;">≡</span>
                <span>Second Item</span>
              </div>
            </li>
            <li class="sortable-item" draggable="true" data-id="3">
              <div style="display: flex; align-items: center; padding: var(--space-3); background: var(--color-card); margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                <span style="margin-right: var(--space-2); opacity: 0.5;">≡</span>
                <span>Third Item</span>
              </div>
            </li>
            <li class="sortable-item" draggable="true" data-id="4">
              <div style="display: flex; align-items: center; padding: var(--space-3); background: var(--color-card); margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                <span style="margin-right: var(--space-2); opacity: 0.5;">≡</span>
                <span>Fourth Item</span>
              </div>
            </li>
          </ul>
        </div>
        <div style="margin-top: var(--space-3);">
          <p>Current order: <span id="sort-order">1,2,3,4</span></p>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Multiple Drop Targets</h3>
      <div class="card-content">
        <p>Sort items between different categories:</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); margin-top: var(--space-3);">
          <div>
            <h4 style="margin-bottom: var(--space-2);">To Do</h4>
            <div class="multi-drop-zone" data-zone="todo" style="min-height: 200px; padding: var(--space-3); background-color: rgba(255, 149, 0, 0.1); border-radius: var(--radius-md);">
              <div class="multi-draggable" draggable="true" data-task="task-1">
                <div style="padding: var(--space-2); background: white; margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                  <p>Task 1: Design homepage</p>
                </div>
              </div>
              <div class="multi-draggable" draggable="true" data-task="task-2">
                <div style="padding: var(--space-2); background: white; margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                  <p>Task 2: Create logo</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: var(--space-2);">In Progress</h4>
            <div class="multi-drop-zone" data-zone="progress" style="min-height: 200px; padding: var(--space-3); background-color: rgba(0, 122, 255, 0.1); border-radius: var(--radius-md);">
              <div class="multi-draggable" draggable="true" data-task="task-3">
                <div style="padding: var(--space-2); background: white; margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                  <p>Task 3: Implement login</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: var(--space-2);">Completed</h4>
            <div class="multi-drop-zone" data-zone="completed" style="min-height: 200px; padding: var(--space-3); background-color: rgba(52, 199, 89, 0.1); border-radius: var(--radius-md);">
              <div class="multi-draggable" draggable="true" data-task="task-4">
                <div style="padding: var(--space-2); background: white; margin-bottom: var(--space-2); border-radius: var(--radius-md); cursor: move;">
                  <p>Task 4: Setup project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="reset-tasks">Reset Tasks</button>
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initDragAndDrop() {
  // Simple Drag and Drop
  const draggableItems = document.getElementById('draggable-items');
  const dropZone = document.getElementById('drop-zone');
  const resetDrag = document.getElementById('reset-drag');
  
  // Store original items to reset
  const originalDraggableItems = draggableItems?.innerHTML;
  
  // Initialize drag and drop for simple section
  if (draggableItems && dropZone) {
    // Add event listeners to draggable items
    const items = draggableItems.querySelectorAll('.draggable');
    items.forEach(item => {
      initDraggable(item);
    });
    
    // Add event listeners to drop zone
    dropZone.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      
      // Get the dragged item ID
      const itemId = e.dataTransfer.getData('text/plain');
      const draggedItem = document.querySelector(`[data-id="${itemId}"]`);
      
      if (draggedItem) {
        // Clone the item and append to drop zone
        const clone = draggedItem.cloneNode(true);
        // Change the style a bit to indicate it's been dropped
        clone.style.backgroundColor = 'var(--color-accent-light)';
        clone.style.margin = 'var(--space-2)';
        
        // Check if drop zone is empty (only contains the placeholder text)
        if (dropZone.querySelector('p') && dropZone.children.length === 1) {
          dropZone.innerHTML = '';
        }
        
        // Add the dragged item to the drop zone
        dropZone.appendChild(clone);
        
        // Remove the original
        draggedItem.remove();
      }
    });
  }
  
  // Reset button for simple drag and drop
  if (resetDrag && draggableItems && dropZone && originalDraggableItems) {
    resetDrag.addEventListener('click', () => {
      draggableItems.innerHTML = originalDraggableItems;
      dropZone.innerHTML = '<p>Drop items here</p>';
      
      // Re-initialize draggable items
      const items = draggableItems.querySelectorAll('.draggable');
      items.forEach(item => {
        initDraggable(item);
      });
    });
  }
  
  // Helper function to initialize draggable items
  function initDraggable(item) {
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.getAttribute('data-id'));
      setTimeout(() => {
        item.classList.add('dragging');
      }, 0);
    });
    
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
    });
  }
  
  // Sortable List
  const sortableList = document.getElementById('sortable-list');
  const sortOrder = document.getElementById('sort-order');
  
  if (sortableList) {
    let draggedItem = null;
    
    // Add event listeners to sortable items
    const sortableItems = sortableList.querySelectorAll('.sortable-item');
    
    sortableItems.forEach(item => {
      item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
          item.style.opacity = '0.5';
        }, 0);
      });
      
      item.addEventListener('dragend', () => {
        draggedItem = null;
        item.style.opacity = '1';
        updateSortOrder();
      });
      
      item.addEventListener('dragover', e => {
        e.preventDefault();
        const bounding = item.getBoundingClientRect();
        const offset = bounding.y + bounding.height / 2;
        
        if (draggedItem !== item) {
          if (e.clientY - offset > 0) {
            // Insert after
            if (item.nextSibling !== draggedItem) {
              sortableList.insertBefore(draggedItem, item.nextSibling);
            }
          } else {
            // Insert before
            if (item !== draggedItem.nextSibling) {
              sortableList.insertBefore(draggedItem, item);
            }
          }
        }
      });
    });
    
    function updateSortOrder() {
      if (sortOrder) {
        const currentOrder = [];
        sortableList.querySelectorAll('.sortable-item').forEach(item => {
          currentOrder.push(item.getAttribute('data-id'));
        });
        sortOrder.textContent = currentOrder.join(',');
      }
    }
  }
  
  // Multiple Drop Targets
  const multiDropZones = document.querySelectorAll('.multi-drop-zone');
  const multiDraggables = document.querySelectorAll('.multi-draggable');
  const resetTasks = document.getElementById('reset-tasks');
  
  // Store original state for reset
  const originalZones = {};
  multiDropZones.forEach(zone => {
    originalZones[zone.getAttribute('data-zone')] = zone.innerHTML;
  });
  
  if (multiDropZones.length && multiDraggables.length) {
    // Initialize draggable items
    multiDraggables.forEach(item => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', item.getAttribute('data-task'));
        setTimeout(() => {
          item.classList.add('dragging');
        }, 0);
      });
      
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
    
    // Initialize drop zones
    multiDropZones.forEach(zone => {
      zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.style.backgroundColor = 'rgba(0, 113, 227, 0.2)';
      });
      
      zone.addEventListener('dragleave', () => {
        // Restore original background based on zone type
        if (zone.getAttribute('data-zone') === 'todo') {
          zone.style.backgroundColor = 'rgba(255, 149, 0, 0.1)';
        } else if (zone.getAttribute('data-zone') === 'progress') {
          zone.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
        } else if (zone.getAttribute('data-zone') === 'completed') {
          zone.style.backgroundColor = 'rgba(52, 199, 89, 0.1)';
        }
      });
      
      zone.addEventListener('drop', e => {
        e.preventDefault();
        
        // Restore original background
        if (zone.getAttribute('data-zone') === 'todo') {
          zone.style.backgroundColor = 'rgba(255, 149, 0, 0.1)';
        } else if (zone.getAttribute('data-zone') === 'progress') {
          zone.style.backgroundColor = 'rgba(0, 122, 255, 0.1)';
        } else if (zone.getAttribute('data-zone') === 'completed') {
          zone.style.backgroundColor = 'rgba(52, 199, 89, 0.1)';
        }
        
        // Get the dragged task ID
        const taskId = e.dataTransfer.getData('text/plain');
        const draggedItem = document.querySelector(`[data-task="${taskId}"]`);
        
        if (draggedItem) {
          // Move the task to this zone
          zone.appendChild(draggedItem);
        }
      });
    });
  }
  
  // Reset button for tasks
  if (resetTasks) {
    resetTasks.addEventListener('click', () => {
      multiDropZones.forEach(zone => {
        const zoneId = zone.getAttribute('data-zone');
        if (originalZones[zoneId]) {
          zone.innerHTML = originalZones[zoneId];
        }
      });
      
      // Re-initialize draggable items
      const newDraggables = document.querySelectorAll('.multi-draggable');
      newDraggables.forEach(item => {
        item.addEventListener('dragstart', e => {
          e.dataTransfer.setData('text/plain', item.getAttribute('data-task'));
          setTimeout(() => {
            item.classList.add('dragging');
          }, 0);
        });
        
        item.addEventListener('dragend', () => {
          item.classList.remove('dragging');
        });
      });
    });
  }
}