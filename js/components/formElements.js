export function createFormElements() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'form-elements';
  
  element.innerHTML = `
    <h2 class="section-title">Form Elements</h2>
    <p class="section-description">Practice Playwright form interactions with various input elements, checkboxes, radio buttons, and more.</p>
    
    <div class="card">
      <h3 class="card-title">Text Inputs</h3>
      <div class="card-content">
        <form id="text-form">
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" name="username" class="form-input" placeholder="Enter username" data-testid="username-input">
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="Enter email" required>
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" name="password" class="form-input" placeholder="Enter password">
          </div>
          
          <div class="form-group">
            <label for="description" class="form-label">Description</label>
            <textarea id="description" name="description" class="form-input form-textarea" placeholder="Enter description"></textarea>
          </div>
          
          <div class="form-group">
            <label for="search" class="form-label">Search with autocomplete</label>
            <input type="text" id="search" name="search" class="form-input" placeholder="Type to search">
            <div id="search-results" style="display: none; border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-top: 4px; max-height: 200px; overflow-y: auto;">
              <div class="search-item" data-value="Apple">Apple</div>
              <div class="search-item" data-value="Banana">Banana</div>
              <div class="search-item" data-value="Cherry">Cherry</div>
              <div class="search-item" data-value="Date">Date</div>
              <div class="search-item" data-value="Elderberry">Elderberry</div>
            </div>
          </div>
          
          <button type="submit" class="button button-primary">Submit</button>
          <button type="reset" class="button button-outline">Reset</button>
        </form>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Checkboxes & Radio Buttons</h3>
      <div class="card-content">
        <form id="options-form">
          <div class="form-group">
            <label class="form-label">Select hobbies (Checkboxes)</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="hobbies" value="reading" class="checkbox-input"> Reading
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="hobbies" value="sports" class="checkbox-input"> Sports
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="hobbies" value="cooking" class="checkbox-input"> Cooking
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="hobbies" value="gaming" class="checkbox-input" checked> Gaming
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="hobbies" value="traveling" class="checkbox-input"> Traveling
              </label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Notification Preferences</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" id="email-notifications" name="notifications" value="email" class="checkbox-input"> Email notifications
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="sms-notifications" name="notifications" value="sms" class="checkbox-input"> SMS notifications
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="push-notifications" name="notifications" value="push" class="checkbox-input"> Push notifications
              </label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Gender (Radio Buttons)</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="gender" value="male" class="radio-input"> Male
              </label>
              <label class="radio-label">
                <input type="radio" name="gender" value="female" class="radio-input"> Female
              </label>
              <label class="radio-label">
                <input type="radio" name="gender" value="non-binary" class="radio-input"> Non-binary
              </label>
              <label class="radio-label">
                <input type="radio" name="gender" value="other" class="radio-input"> Other
              </label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Experience Level</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="experience" value="beginner" class="radio-input" checked> Beginner
              </label>
              <label class="radio-label">
                <input type="radio" name="experience" value="intermediate" class="radio-input"> Intermediate
              </label>
              <label class="radio-label">
                <input type="radio" name="experience" value="advanced" class="radio-input"> Advanced
              </label>
            </div>
          </div>
          
          <button type="submit" class="button button-primary">Submit</button>
        </form>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Select Dropdowns</h3>
      <div class="card-content">
        <form id="select-form">
          <div class="form-group">
            <label for="country" class="form-label">Country</label>
            <select id="country" name="country" class="form-input">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="languages" class="form-label">Programming Languages (Multiple)</label>
            <select id="languages" name="languages" class="form-input" multiple size="5">
              <option value="js">JavaScript</option>
              <option value="py">Python</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="cpp">C++</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
              <option value="go">Go</option>
            </select>
            <small style="display: block; margin-top: var(--space-2); color: var(--color-text-tertiary);">Hold Ctrl (or Cmd) to select multiple options</small>
          </div>
          
          <div class="form-group">
            <label for="priority" class="form-label">Priority Level (with optgroups)</label>
            <select id="priority" name="priority" class="form-input">
              <optgroup label="High Priority">
                <option value="critical">Critical</option>
                <option value="urgent">Urgent</option>
              </optgroup>
              <optgroup label="Medium Priority">
                <option value="important">Important</option>
                <option value="normal">Normal</option>
              </optgroup>
              <optgroup label="Low Priority">
                <option value="low">Low</option>
                <option value="trivial">Trivial</option>
              </optgroup>
            </select>
          </div>
          
          <button type="submit" class="button button-primary">Submit</button>
        </form>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Other Input Types</h3>
      <div class="card-content">
        <form id="other-inputs-form">
          <div class="form-group">
            <label for="date-input" class="form-label">Date Input</label>
            <input type="date" id="date-input" name="date" class="form-input">
          </div>
          
          <div class="form-group">
            <label for="time-input" class="form-label">Time Input</label>
            <input type="time" id="time-input" name="time" class="form-input">
          </div>
          
          <div class="form-group">
            <label for="color-input" class="form-label">Color Input</label>
            <input type="color" id="color-input" name="color" class="form-input" value="#0071e3">
          </div>
          
          <div class="form-group">
            <label for="range-input" class="form-label">Range Input</label>
            <input type="range" id="range-input" name="range" min="0" max="100" class="form-input">
            <output for="range-input" id="range-value">50</output>
          </div>
          
          <div class="form-group">
            <label for="number-input" class="form-label">Number Input</label>
            <input type="number" id="number-input" name="number" min="0" max="100" step="5" value="50" class="form-input">
          </div>
          
          <button type="submit" class="button button-primary">Submit</button>
        </form>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Form Validation</h3>
      <div class="card-content">
        <form id="validation-form" novalidate>
          <div class="form-group">
            <label for="validated-email" class="form-label">Email (required)</label>
            <input type="email" id="validated-email" name="validated-email" class="form-input" required>
            <div class="error-message" id="email-error" style="color: var(--color-error); font-size: 14px; margin-top: 4px; display: none;">
              Please enter a valid email address
            </div>
          </div>
          
          <div class="form-group">
            <label for="validated-password" class="form-label">Password (min 8 characters)</label>
            <input type="password" id="validated-password" name="validated-password" class="form-input" minlength="8" required>
            <div class="error-message" id="password-error" style="color: var(--color-error); font-size: 14px; margin-top: 4px; display: none;">
              Password must be at least 8 characters
            </div>
          </div>
          
          <div class="form-group">
            <label for="validated-url" class="form-label">Website URL</label>
            <input type="url" id="validated-url" name="validated-url" class="form-input" placeholder="https://example.com">
            <div class="error-message" id="url-error" style="color: var(--color-error); font-size: 14px; margin-top: 4px; display: none;">
              Please enter a valid URL
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">
              <input type="checkbox" id="terms" name="terms" required>
              I agree to the terms and conditions
            </label>
            <div class="error-message" id="terms-error" style="color: var(--color-error); font-size: 14px; margin-top: 4px; display: none;">
              You must agree to the terms
            </div>
          </div>
          
          <button type="submit" class="button button-primary">Submit</button>
        </form>
      </div>
    </div>
  `;
  
  return element;
}

export function initFormElements() {
  // Text form submission
  const textForm = document.getElementById('text-form');
  if (textForm) {
    textForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Text form submitted!');
    });
  }
  
  // Options form submission
  const optionsForm = document.getElementById('options-form');
  if (optionsForm) {
    optionsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Options form submitted!');
    });
  }
  
  // Select form submission
  const selectForm = document.getElementById('select-form');
  if (selectForm) {
    selectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Select form submitted!');
    });
  }
  
  // Other inputs form
  const otherInputsForm = document.getElementById('other-inputs-form');
  const rangeInput = document.getElementById('range-input');
  const rangeValue = document.getElementById('range-value');
  
  if (rangeInput && rangeValue) {
    rangeInput.value = 50;
    rangeValue.textContent = rangeInput.value;
    
    rangeInput.addEventListener('input', () => {
      rangeValue.textContent = rangeInput.value;
    });
  }
  
  if (otherInputsForm) {
    otherInputsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Other inputs form submitted!');
    });
  }
  
  // Form validation
  const validationForm = document.getElementById('validation-form');
  if (validationForm) {
    validationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      const email = document.getElementById('validated-email');
      const emailError = document.getElementById('email-error');
      const password = document.getElementById('validated-password');
      const passwordError = document.getElementById('password-error');
      const url = document.getElementById('validated-url');
      const urlError = document.getElementById('url-error');
      const terms = document.getElementById('terms');
      const termsError = document.getElementById('terms-error');
      
      // Email validation
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        emailError.style.display = 'block';
        email.style.borderColor = 'var(--color-error)';
        isValid = false;
      } else {
        emailError.style.display = 'none';
        email.style.borderColor = 'var(--color-border)';
      }
      
      // Password validation
      if (!password.value || password.value.length < 8) {
        passwordError.style.display = 'block';
        password.style.borderColor = 'var(--color-error)';
        isValid = false;
      } else {
        passwordError.style.display = 'none';
        password.style.borderColor = 'var(--color-border)';
      }
      
      // URL validation
      if (url.value && !/^https?:\/\/\S+\.\S+/.test(url.value)) {
        urlError.style.display = 'block';
        url.style.borderColor = 'var(--color-error)';
        isValid = false;
      } else {
        urlError.style.display = 'none';
        url.style.borderColor = 'var(--color-border)';
      }
      
      // Terms checkbox validation
      if (!terms.checked) {
        termsError.style.display = 'block';
        isValid = false;
      } else {
        termsError.style.display = 'none';
      }
      
      if (isValid) {
        alert('Form validated and submitted successfully!');
      }
    });
  }
  
  // Search with autocomplete
  const search = document.getElementById('search');
  const searchResults = document.getElementById('search-results');
  
  if (search && searchResults) {
    search.addEventListener('input', () => {
      if (search.value.length > 0) {
        searchResults.style.display = 'block';
        
        // Filter search results
        const searchItems = searchResults.querySelectorAll('.search-item');
        searchItems.forEach(item => {
          if (item.textContent.toLowerCase().includes(search.value.toLowerCase())) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      } else {
        searchResults.style.display = 'none';
      }
    });
    
    // Click on search result
    const searchItems = searchResults.querySelectorAll('.search-item');
    searchItems.forEach(item => {
      item.addEventListener('click', () => {
        search.value = item.getAttribute('data-value');
        searchResults.style.display = 'none';
      });
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
      if (e.target !== search && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
}