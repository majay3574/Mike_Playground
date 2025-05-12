export function createApiTesting() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'api-testing';
  
  element.innerHTML = `
    <h2 class="section-title">API Testing</h2>
    <p class="section-description">Practice Playwright API testing with a local JSON Server API.</p>
    
    <div class="card glass-card">
      <h3 class="card-title">Users API</h3>
      <div class="card-content">
        <div class="api-controls">
          <button class="button button-primary glow-effect" id="fetch-users">Get All Users</button>
          <button class="button button-secondary glow-effect" id="fetch-single-user">Get User (ID: 1)</button>
        </div>
        <div class="api-result glass-panel" id="users-result">
          <div class="result-placeholder">Results will appear here</div>
        </div>
      </div>
    </div>
    
    <div class="card glass-card">
      <h3 class="card-title">Posts API</h3>
      <div class="card-content">
        <form id="create-post-form" class="api-form">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input type="text" class="form-input glass-input" name="title" placeholder="Post title">
          </div>
          <div class="form-group">
            <label class="form-label">Content</label>
            <textarea class="form-input glass-input" name="content" placeholder="Post content"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="number" class="form-input glass-input" name="userId" placeholder="1">
          </div>
          <button type="submit" class="button button-success glow-effect">Create Post</button>
        </form>
        <div class="api-result glass-panel" id="posts-result">
          <div class="result-placeholder">Created post details will appear here</div>
        </div>
      </div>
    </div>
    
    <div class="card glass-card">
      <h3 class="card-title">Comments API</h3>
      <div class="card-content">
        <form id="update-comment-form" class="api-form">
          <div class="form-group">
            <label class="form-label">Comment ID</label>
            <input type="number" class="form-input glass-input" name="commentId" placeholder="1">
          </div>
          <div class="form-group">
            <label class="form-label">New Text</label>
            <input type="text" class="form-input glass-input" name="text" placeholder="Updated comment text">
          </div>
          <div class="button-group">
            <button type="submit" class="button button-primary glow-effect" data-method="put">Update (PUT)</button>
            <button type="submit" class="button button-secondary glow-effect" data-method="patch">Update (PATCH)</button>
          </div>
        </form>
        <div class="api-result glass-panel" id="comments-result">
          <div class="result-placeholder">Updated comment details will appear here</div>
        </div>
      </div>
    </div>
    
    <div class="card glass-card">
      <h3 class="card-title">Delete API</h3>
      <div class="card-content">
        <div class="form-group">
          <label class="form-label">Delete Resource</label>
          <div class="input-group">
            <select class="form-input glass-input" id="delete-resource">
              <option value="users">User</option>
              <option value="posts">Post</option>
              <option value="comments">Comment</option>
            </select>
            <input type="number" class="form-input glass-input" id="delete-id" placeholder="ID">
            <button class="button button-error glow-effect" id="delete-resource-btn">Delete</button>
          </div>
        </div>
        <div class="api-result glass-panel" id="delete-result">
          <div class="result-placeholder">Deletion status will appear here</div>
        </div>
      </div>
    </div>
  `;
  
  return element;
}

export function initApiTesting() {
  const API_BASE_URL = 'http://localhost:3001';
  
  // Users API
  const fetchUsersBtn = document.getElementById('fetch-users');
  const fetchSingleUserBtn = document.getElementById('fetch-single-user');
  const usersResult = document.getElementById('users-result');
  
  if (fetchUsersBtn && usersResult) {
    fetchUsersBtn.addEventListener('click', async () => {
      try {
        usersResult.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><span class="loading-text">Fetching users...</span></div>';
        
        const response = await fetch(`${API_BASE_URL}/users`);
        const data = await response.json();
        
        usersResult.innerHTML = `
          <pre class="json-response">${JSON.stringify(data, null, 2)}</pre>
        `;
      } catch (error) {
        usersResult.innerHTML = `
          <div class="error-message">
            Error: ${error.message}
          </div>
        `;
      }
    });
  }
  
  if (fetchSingleUserBtn && usersResult) {
    fetchSingleUserBtn.addEventListener('click', async () => {
      try {
        usersResult.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><span class="loading-text">Fetching user...</span></div>';
        
        const response = await fetch(`${API_BASE_URL}/users/1`);
        const data = await response.json();
        
        usersResult.innerHTML = `
          <pre class="json-response">${JSON.stringify(data, null, 2)}</pre>
        `;
      } catch (error) {
        usersResult.innerHTML = `
          <div class="error-message">
            Error: ${error.message}
          </div>
        `;
      }
    });
  }
  
  // Posts API
  const createPostForm = document.getElementById('create-post-form');
  const postsResult = document.getElementById('posts-result');
  
  if (createPostForm && postsResult) {
    createPostForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        postsResult.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><span class="loading-text">Creating post...</span></div>';
        
        const formData = new FormData(createPostForm);
        const data = {
          title: formData.get('title'),
          content: formData.get('content'),
          userId: parseInt(formData.get('userId'))
        };
        
        const response = await fetch(`${API_BASE_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        postsResult.innerHTML = `
          <pre class="json-response">${JSON.stringify(result, null, 2)}</pre>
        `;
      } catch (error) {
        postsResult.innerHTML = `
          <div class="error-message">
            Error: ${error.message}
          </div>
        `;
      }
    });
  }
  
  // Comments API
  const updateCommentForm = document.getElementById('update-comment-form');
  const commentsResult = document.getElementById('comments-result');
  
  if (updateCommentForm && commentsResult) {
    updateCommentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const method = e.submitter.getAttribute('data-method').toUpperCase();
      
      try {
        commentsResult.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><span class="loading-text">Updating comment...</span></div>';
        
        const formData = new FormData(updateCommentForm);
        const commentId = formData.get('commentId');
        const data = {
          text: formData.get('text')
        };
        
        const response = await fetch(`${API_BASE_URL}/comments/${commentId}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        commentsResult.innerHTML = `
          <pre class="json-response">${JSON.stringify(result, null, 2)}</pre>
        `;
      } catch (error) {
        commentsResult.innerHTML = `
          <div class="error-message">
            Error: ${error.message}
          </div>
        `;
      }
    });
  }
  
  // Delete API
  const deleteResourceBtn = document.getElementById('delete-resource-btn');
  const deleteResource = document.getElementById('delete-resource');
  const deleteId = document.getElementById('delete-id');
  const deleteResult = document.getElementById('delete-result');
  
  if (deleteResourceBtn && deleteResource && deleteId && deleteResult) {
    deleteResourceBtn.addEventListener('click', async () => {
      try {
        deleteResult.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><span class="loading-text">Deleting resource...</span></div>';
        
        const resource = deleteResource.value;
        const id = deleteId.value;
        
        const response = await fetch(`${API_BASE_URL}/${resource}/${id}`, {
          method: 'DELETE'
        });
        
        if (response.status === 200) {
          deleteResult.innerHTML = `
            <div class="success-message">
              ${resource.charAt(0).toUpperCase() + resource.slice(1)} with ID ${id} was successfully deleted.
            </div>
          `;
        } else {
          throw new Error(`Unexpected status: ${response.status}`);
        }
      } catch (error) {
        deleteResult.innerHTML = `
          <div class="error-message">
            Error: ${error.message}
          </div>
        `;
      }
    });
  }
}