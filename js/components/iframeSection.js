export function createIframeSection() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'iframe-section';
  
  element.innerHTML = `
    <h2 class="section-title">Iframe Interactions</h2>
    <p class="section-description">Practice Playwright iframe navigation and interactions with nested content.</p>
    
    <div class="card">
      <h3 class="card-title">Basic Iframe</h3>
      <div class="card-content">
        <p>Interact with elements inside this iframe:</p>
        <div class="iframe-controls">
          <button class="button button-primary" id="reload-basic-iframe">Reload Iframe</button>
        </div>
        <div class="iframe-container">
          <iframe id="basic-iframe" src="about:blank" title="Basic Iframe"></iframe>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Nested Iframes</h3>
      <div class="card-content">
        <p>Practice navigating through multiple levels of iframes:</p>
        <div class="iframe-controls">
          <button class="button button-primary" id="reload-nested-iframe">Reload Iframe</button>
        </div>
        <div class="iframe-container">
          <iframe id="nested-iframe" src="about:blank" title="Nested Iframe"></iframe>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Iframe with Form</h3>
      <div class="card-content">
        <p>Fill out and submit a form inside an iframe:</p>
        <div class="iframe-controls">
          <button class="button button-primary" id="reload-form-iframe">Reload Iframe</button>
          <button class="button button-secondary" id="reset-form-iframe">Reset Form</button>
        </div>
        <div class="iframe-container">
          <iframe id="form-iframe" src="about:blank" title="Form Iframe"></iframe>
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initIframeSection() {
  // Helper to create iframe document content
  function createIframeContent(iframe, content) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(content);
    iframeDoc.close();
  }
  
  // Basic Iframe
  const basicIframe = document.getElementById('basic-iframe');
  const reloadBasicIframe = document.getElementById('reload-basic-iframe');
  
  const basicIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .counter {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        button {
          padding: 8px 16px;
          background-color: #0071e3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005cbf;
        }
        .value {
          font-size: 18px;
          font-weight: 500;
        }
        .color-box {
          width: 100px;
          height: 100px;
          margin: 20px 0;
          transition: background-color 0.3s;
        }
        .color-buttons {
          display: flex;
          gap: 10px;
        }
      </style>
    </head>
    <body>
      <h2>Basic Iframe Content</h2>
      <p>This is content inside an iframe that you can interact with using Playwright.</p>
      
      <div class="counter">
        <button id="decrement">-</button>
        <span class="value" id="counter-value">0</span>
        <button id="increment">+</button>
      </div>
      
      <div>
        <div class="color-box" id="color-box" style="background-color: #0071e3;"></div>
        <div class="color-buttons">
          <button onclick="document.getElementById('color-box').style.backgroundColor = '#0071e3'">Blue</button>
          <button onclick="document.getElementById('color-box').style.backgroundColor = '#4caf50'">Green</button>
          <button onclick="document.getElementById('color-box').style.backgroundColor = '#ff3b30'">Red</button>
        </div>
      </div>
      
      <script>
        let count = 0;
        const value = document.getElementById('counter-value');
        
        document.getElementById('increment').addEventListener('click', () => {
          count++;
          value.textContent = count;
        });
        
        document.getElementById('decrement').addEventListener('click', () => {
          count--;
          value.textContent = count;
        });
      </script>
    </body>
    </html>
  `;
  
  // Load basic iframe content
  if (basicIframe) {
    createIframeContent(basicIframe, basicIframeContent);
    
    if (reloadBasicIframe) {
      reloadBasicIframe.addEventListener('click', () => {
        createIframeContent(basicIframe, basicIframeContent);
      });
    }
  }
  
  // Nested Iframes
  const nestedIframe = document.getElementById('nested-iframe');
  const reloadNestedIframe = document.getElementById('reload-nested-iframe');
  
  const innerIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          padding: 15px;
          background-color: #fff4e6;
          border: 2px solid #ffa94d;
          border-radius: 6px;
        }
        button {
          padding: 8px 16px;
          background-color: #fd7e14;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        input {
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #dee2e6;
          margin-right: 8px;
        }
      </style>
    </head>
    <body>
      <h3>Inner Iframe (Level 2)</h3>
      <p>This is the innermost iframe.</p>
      
      <div>
        <input type="text" id="inner-input" placeholder="Type here...">
        <button id="inner-button">Submit</button>
      </div>
      
      <div id="inner-result" style="margin-top: 10px;"></div>
      
      <script>
        document.getElementById('inner-button').addEventListener('click', () => {
          const input = document.getElementById('inner-input');
          document.getElementById('inner-result').textContent = 'You typed: ' + input.value;
        });
      </script>
    </body>
    </html>
  `;
  
  const middleIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          padding: 20px;
          background-color: #e6f4ff;
          border: 2px solid #4dabf7;
          border-radius: 6px;
        }
        .iframe-container {
          margin-top: 15px;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 200px;
          border: none;
        }
        button {
          padding: 8px 16px;
          background-color: #228be6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <h3>Middle Iframe (Level 1)</h3>
      <p>This iframe contains another iframe inside it.</p>
      
      <button id="middle-button">Change Inner Background</button>
      
      <div class="iframe-container">
        <iframe id="inner-iframe" title="Inner Iframe"></iframe>
      </div>
      
      <script>
        // Initialize inner iframe
        const innerIframe = document.getElementById('inner-iframe');
        const innerDoc = innerIframe.contentDocument || innerIframe.contentWindow.document;
        innerDoc.open();
        innerDoc.write(\`${innerIframeContent}\`);
        innerDoc.close();
        
        // Add event listener to button
        document.getElementById('middle-button').addEventListener('click', () => {
          const innerFrameDoc = document.getElementById('inner-iframe').contentDocument || 
                               document.getElementById('inner-iframe').contentWindow.document;
          innerFrameDoc.body.style.backgroundColor = getRandomColor();
        });
        
        function getRandomColor() {
          const colors = ['#fff4e6', '#d5e8d4', '#dae8fc', '#f8cecc', '#e1d5e7'];
          return colors[Math.floor(Math.random() * colors.length)];
        }
      </script>
    </body>
    </html>
  `;
  
  const outerIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .iframe-container {
          margin-top: 20px;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 350px;
          border: none;
        }
        h2 {
          margin-top: 0;
        }
        .controls {
          margin-bottom: 15px;
        }
        button {
          padding: 8px 16px;
          background-color: #495057;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-right: 8px;
        }
      </style>
    </head>
    <body>
      <h2>Outer Iframe (Level 0)</h2>
      <p>This is a nested iframe example for testing Playwright's iframe navigation capabilities.</p>
      
      <div class="controls">
        <button id="navigate-to-inner">Navigate to Inner Frame</button>
        <button id="reset-all">Reset All Iframes</button>
      </div>
      
      <div class="iframe-container">
        <iframe id="middle-iframe" title="Middle Iframe"></iframe>
      </div>
      
      <script>
        // Initialize middle iframe
        const middleIframe = document.getElementById('middle-iframe');
        const middleDoc = middleIframe.contentDocument || middleIframe.contentWindow.document;
        middleDoc.open();
        middleDoc.write(\`${middleIframeContent}\`);
        middleDoc.close();
        
        // Add event listeners to buttons
        document.getElementById('navigate-to-inner').addEventListener('click', () => {
          // This would normally use iframe contentWindow.postMessage in a real application
          // For this demo, we'll just change the background color of the inner iframe
          const innerFrame = middleIframe.contentWindow.document.getElementById('inner-iframe');
          const innerDoc = innerFrame.contentDocument || innerFrame.contentWindow.document;
          innerDoc.body.style.backgroundColor = '#d5e8d4';
          
          // Focus on the input in the inner iframe
          const innerInput = innerDoc.getElementById('inner-input');
          innerInput.focus();
          innerInput.value = 'Navigated from outer frame';
        });
        
        document.getElementById('reset-all').addEventListener('click', () => {
          // Reset middle iframe, which will also reset inner iframe
          const middleFrame = document.getElementById('middle-iframe');
          const middleDoc = middleFrame.contentDocument || middleFrame.contentWindow.document;
          middleDoc.open();
          middleDoc.write(\`${middleIframeContent}\`);
          middleDoc.close();
        });
      </script>
    </body>
    </html>
  `;
  
  // Load nested iframe content
  if (nestedIframe) {
    createIframeContent(nestedIframe, outerIframeContent);
    
    if (reloadNestedIframe) {
      reloadNestedIframe.addEventListener('click', () => {
        createIframeContent(nestedIframe, outerIframeContent);
      });
    }
  }
  
  // Form Iframe
  const formIframe = document.getElementById('form-iframe');
  const reloadFormIframe = document.getElementById('reload-form-iframe');
  const resetFormIframe = document.getElementById('reset-form-iframe');
  
  const formIframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', sans-serif;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .form-container {
          max-width: 500px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        input, select, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          font-family: inherit;
        }
        button {
          padding: 10px 16px;
          background-color: #0071e3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
        }
        button:hover {
          background-color: #005cbf;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
        }
        .checkbox-label input {
          width: auto;
          margin-right: 10px;
        }
        .success-message {
          background-color: #d4edda;
          color: #155724;
          padding: 10px;
          border-radius: 6px;
          margin-top: 15px;
          display: none;
        }
      </style>
    </head>
    <body>
      <div class="form-container">
        <h2>Survey Form</h2>
        <p>Complete this survey inside the iframe.</p>
        
        <form id="survey-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email">
          </div>
          
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" min="18" max="120" placeholder="Enter your age">
          </div>
          
          <div class="form-group">
            <label for="role">Current Role</label>
            <select id="role" name="role" required>
              <option value="" disabled selected>Select your current role</option>
              <option value="student">Student</option>
              <option value="full-time">Full-time Worker</option>
              <option value="part-time">Part-time Worker</option>
              <option value="freelance">Freelancer</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>How did you hear about us?</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="source" value="social"> Social Media
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="source" value="friend"> Friend
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="source" value="advertisement"> Advertisement
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="source" value="other"> Other
              </label>
            </div>
          </div>
          
          <div class="form-group">
            <label for="comments">Additional Comments</label>
            <textarea id="comments" name="comments" rows="4" placeholder="Enter your comments here"></textarea>
          </div>
          
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" id="terms" name="terms" required> I agree to the terms and conditions
            </label>
          </div>
          
          <button type="submit">Submit</button>
        </form>
        
        <div id="success-message" class="success-message">
          Survey submitted successfully! Thank you for your feedback.
        </div>
      </div>
      
      <script>
        document.getElementById('survey-form').addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Show success message
          document.getElementById('success-message').style.display = 'block';
          
          // Scroll to success message
          document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
          
          // In a real app, we would submit the form data to a server
          console.log('Form submitted!');
        });
      </script>
    </body>
    </html>
  `;
  
  // Load form iframe content
  if (formIframe) {
    createIframeContent(formIframe, formIframeContent);
    
    if (reloadFormIframe) {
      reloadFormIframe.addEventListener('click', () => {
        createIframeContent(formIframe, formIframeContent);
      });
    }
    
    if (resetFormIframe) {
      resetFormIframe.addEventListener('click', () => {
        const iframeDoc = formIframe.contentDocument || formIframe.contentWindow.document;
        const form = iframeDoc.getElementById('survey-form');
        if (form) {
          form.reset();
        }
        
        // Hide success message if it's visible
        const successMessage = iframeDoc.getElementById('success-message');
        if (successMessage) {
          successMessage.style.display = 'none';
        }
      });
    }
  }
}