export function createAdvancedSelectors() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'advanced-selectors';
  
  element.innerHTML = `
    <h2 class="section-title">Advanced Selectors</h2>
    <p class="section-description">Practice using complex CSS and XPath selectors with Playwright.</p>
    
    <div class="card">
      <h3 class="card-title">Nested Elements</h3>
      <div class="card-content">
        <div class="nested-container" style="border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-3);">
          <div class="level-1" data-testid="level-1">
            <p>Level 1</p>
            <div class="level-2" data-testid="level-2">
              <p>Level 2</p>
              <div class="level-3" data-testid="level-3">
                <p>Level 3</p>
                <div class="level-4" data-testid="level-4">
                  <p>Level 4</p>
                  <button class="button button-primary target-button" id="nested-target">Target Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: var(--space-3);">
          <p>Try these selectors in Playwright:</p>
          <ul style="margin-top: var(--space-2); margin-left: var(--space-4);">
            <li><code>#nested-target</code> - By ID</li>
            <li><code>[data-testid="level-4"] button</code> - By test ID and element</li>
            <li><code>.level-1 .level-2 .level-3 .level-4 button</code> - By nested classes</li>
            <li><code>//div[contains(@class, 'level-4')]/button</code> - XPath selector</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Attribute Selectors</h3>
      <div class="card-content">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-3);">
          <button class="button button-outline" data-test="btn-1" aria-label="First Button" title="First button tooltip">Button 1</button>
          <button class="button button-outline" data-test="btn-2" aria-label="Second Button" data-custom="special">Button 2</button>
          <button class="button button-outline" data-test="btn-3" aria-label="Third Button" data-priority="high">Button 3</button>
          <button class="button button-outline" data-test="btn-4" aria-label="Fourth Button" disabled>Button 4</button>
        </div>
        <div>
          <p>Try these attribute selectors:</p>
          <ul style="margin-top: var(--space-2); margin-left: var(--space-4);">
            <li><code>[data-test="btn-2"]</code> - Exact attribute value</li>
            <li><code>[data-test^="btn"]</code> - Attribute starts with</li>
            <li><code>[aria-label*="Second"]</code> - Attribute contains</li>
            <li><code>[data-priority="high"]</code> - Custom attribute</li>
            <li><code>[disabled]</code> - Presence of attribute</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Text-Based Selectors</h3>
      <div class="card-content">
        <div style="margin-bottom: var(--space-3);">
          <p class="text-target" id="text-1">This is a simple text paragraph.</p>
          <p class="text-target" id="text-2">This paragraph <span style="color: var(--color-primary);">contains styled text</span> inside it.</p>
          <p class="text-target" id="text-3">This paragraph has a <a href="#" class="text-link">link</a> inside it.</p>
          <div class="text-target" id="text-4">
            <h4>This is a heading</h4>
            <p>With some text below it.</p>
          </div>
        </div>
        <div>
          <p>Try these text-based selectors in Playwright:</p>
          <ul style="margin-top: var(--space-2); margin-left: var(--space-4);">
            <li><code>text=simple text</code> - Contains text</li>
            <li><code>text="This is a simple text paragraph."</code> - Exact text</li>
            <li><code>p:has-text("styled text")</code> - Element with text</li>
            <li><code>a:has-text("link")</code> - Link with text</li>
            <li><code>h4:has-text("heading")</code> - Heading with text</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Pseudo-Class Selectors</h3>
      <div class="card-content">
        <div style="margin-bottom: var(--space-3);">
          <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
            <button class="button button-primary pseudo-button" tabindex="1">First Button (tabindex=1)</button>
            <button class="button button-secondary pseudo-button" tabindex="2">Second Button (tabindex=2)</button>
            <button class="button button-outline pseudo-button" tabindex="3">Third Button (tabindex=3)</button>
            <button class="button button-outline pseudo-button" disabled>Disabled Button</button>
          </div>
          <div style="margin-top: var(--space-3);">
            <input type="checkbox" id="checkbox-1" class="pseudo-checkbox" checked>
            <label for="checkbox-1">Checked Checkbox</label>
            
            <input type="checkbox" id="checkbox-2" class="pseudo-checkbox">
            <label for="checkbox-2">Unchecked Checkbox</label>
          </div>
          <div style="margin-top: var(--space-3);">
            <select id="pseudo-select" class="form-input">
              <option value="1">Option 1</option>
              <option value="2" selected>Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        <div>
          <p>Try these pseudo-class selectors:</p>
          <ul style="margin-top: var(--space-2); margin-left: var(--space-4);">
            <li><code>button:disabled</code> - Disabled elements</li>
            <li><code>input:checked</code> - Checked inputs</li>
            <li><code>option:checked</code> - Selected options</li>
            <li><code>.pseudo-button:not([disabled])</code> - Not disabled</li>
            <li><code>.pseudo-button:first-child</code> - First child</li>
            <li><code>.pseudo-button:nth-child(2)</code> - Nth child</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Tables and Lists</h3>
      <div class="card-content">
        <div style="margin-bottom: var(--space-3); overflow-x: auto;">
          <table id="complex-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr data-row-id="1" class="table-row-active">
                <td>1</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td><span class="status-badge" style="background-color: var(--color-success); color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">Active</span></td>
                <td>
                  <button class="edit-button" data-id="1" aria-label="Edit John Doe">Edit</button>
                  <button class="delete-button" data-id="1" aria-label="Delete John Doe">Delete</button>
                </td>
              </tr>
              <tr data-row-id="2">
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td><span class="status-badge" style="background-color: var(--color-warning); color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">Pending</span></td>
                <td>
                  <button class="edit-button" data-id="2" aria-label="Edit Jane Smith">Edit</button>
                  <button class="delete-button" data-id="2" aria-label="Delete Jane Smith">Delete</button>
                </td>
              </tr>
              <tr data-row-id="3">
                <td>3</td>
                <td>Bob Johnson</td>
                <td>bob@example.com</td>
                <td><span class="status-badge" style="background-color: var(--color-error); color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px;">Inactive</span></td>
                <td>
                  <button class="edit-button" data-id="3" aria-label="Edit Bob Johnson">Edit</button>
                  <button class="delete-button" data-id="3" aria-label="Delete Bob Johnson">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p>Try these table and list selectors:</p>
          <ul style="margin-top: var(--space-2); margin-left: var(--space-4);">
            <li><code>table tr:first-child</code> - First row</li>
            <li><code>tr[data-row-id="2"]</code> - Row by data attribute</li>
            <li><code>tr:has-text("Jane Smith")</code> - Row containing text</li>
            <li><code>tr:has(.status-badge:has-text("Active"))</code> - Row with status</li>
            <li><code>button.edit-button[data-id="3"]</code> - Edit button for specific row</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initAdvancedSelectors() {
  // No interactivity needed for this section
  // These elements are for demonstration purposes
}