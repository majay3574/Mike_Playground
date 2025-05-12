export function createFileUpload() {
  const element = document.createElement('div');
  element.className = 'section';
  element.id = 'file-upload';
  
  element.innerHTML = `
    <h2 class="section-title">File Upload</h2>
    <p class="section-description">Practice Playwright file upload interactions with single and multiple file uploads.</p>
    
    <div class="card">
      <h3 class="card-title">Single Video Upload</h3>
      <div class="card-content">
        <div class="file-upload" id="single-upload-area">
          <input type="file" id="single-video-upload" class="file-upload-input" accept="video/*">
          <div class="file-upload-icon">📁</div>
          <p>Click to select a video file or drag and drop</p>
          <p style="font-size: 14px; color: var(--color-text-tertiary);">Supported formats: MP4, WebM, Ogg</p>
        </div>
        <div id="single-file-preview" class="file-preview"></div>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="single-upload-button" disabled>Upload Video</button>
          <button class="button button-outline" id="single-clear-button" disabled>Clear</button>
        </div>
        <div id="single-upload-progress" style="margin-top: var(--space-3); display: none;">
          <div style="height: 10px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div id="single-progress-bar" style="height: 100%; width: 0%; background-color: var(--color-primary); transition: width var(--transition-normal);"></div>
          </div>
          <p id="single-progress-text" style="margin-top: var(--space-2); font-size: 14px;">0%</p>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Multiple Video Upload</h3>
      <div class="card-content">
        <div class="file-upload" id="multiple-upload-area">
          <input type="file" id="multiple-video-upload" class="file-upload-input" accept="video/*" multiple>
          <div class="file-upload-icon">📁</div>
          <p>Click to select multiple video files or drag and drop</p>
          <p style="font-size: 14px; color: var(--color-text-tertiary);">Supported formats: MP4, WebM, Ogg</p>
        </div>
        <div id="multiple-file-preview" class="file-preview"></div>
        <div style="margin-top: var(--space-3);">
          <button class="button button-primary" id="multiple-upload-button" disabled>Upload Videos</button>
          <button class="button button-outline" id="multiple-clear-button" disabled>Clear All</button>
        </div>
        <div id="multiple-upload-progress" style="margin-top: var(--space-3); display: none;">
          <div style="height: 10px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div id="multiple-progress-bar" style="height: 100%; width: 0%; background-color: var(--color-primary); transition: width var(--transition-normal);"></div>
          </div>
          <p id="multiple-progress-text" style="margin-top: var(--space-2); font-size: 14px;">0%</p>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Video Player Test</h3>
      <div class="card-content">
        <p>Use the controls below to test video player interactions:</p>
        <div style="margin-top: var(--space-3);">
          <video id="video-player" controls style="max-width: 100%; border-radius: var(--radius-md);">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
            Your browser does not support the video tag.
          </video>
        </div>
        <div style="margin-top: var(--space-3); display: flex; gap: var(--space-3);">
          <button class="button button-primary" id="play-video">Play</button>
          <button class="button button-secondary" id="pause-video">Pause</button>
          <button class="button button-outline" id="mute-video">Mute/Unmute</button>
          <button class="button button-outline" id="fullscreen-video">Fullscreen</button>
        </div>
        <div style="margin-top: var(--space-3);">
          <label for="video-time" class="form-label">Seek to time (seconds):</label>
          <input type="range" id="video-time" min="0" max="100" value="0" class="form-input">
          <span id="current-time">0</span> / <span id="duration">0</span> seconds
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="card-title">Image Upload</h3>
      <div class="card-content">
        <div class="file-upload" id="image-upload-area">
          <input type="file" id="image-upload" class="file-upload-input" accept="image/*">
          <div class="file-upload-icon">🖼️</div>
          <p>Click to select an image file or drag and drop</p>
          <p style="font-size: 14px; color: var(--color-text-tertiary);">Supported formats: JPG, PNG, GIF, SVG</p>
        </div>
        <div id="image-preview" class="file-preview" style="margin-top: var(--space-3);"></div>
      </div>
    </div>
  `;
  
  return element;
}

export function initFileUpload() {
  // Single video upload
  const singleVideoUpload = document.getElementById('single-video-upload');
  const singleUploadArea = document.getElementById('single-upload-area');
  const singleFilePreview = document.getElementById('single-file-preview');
  const singleUploadButton = document.getElementById('single-upload-button');
  const singleClearButton = document.getElementById('single-clear-button');
  const singleUploadProgress = document.getElementById('single-upload-progress');
  const singleProgressBar = document.getElementById('single-progress-bar');
  const singleProgressText = document.getElementById('single-progress-text');
  
  // Handle click on upload area
  if (singleUploadArea && singleVideoUpload) {
    singleUploadArea.addEventListener('click', () => {
      singleVideoUpload.click();
    });
  }
  
  // Handle drag and drop
  if (singleUploadArea) {
    singleUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      singleUploadArea.style.borderColor = 'var(--color-primary)';
      singleUploadArea.style.backgroundColor = 'rgba(0, 113, 227, 0.1)';
    });
    
    singleUploadArea.addEventListener('dragleave', () => {
      singleUploadArea.style.borderColor = 'var(--color-border)';
      singleUploadArea.style.backgroundColor = 'transparent';
    });
    
    singleUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      singleUploadArea.style.borderColor = 'var(--color-border)';
      singleUploadArea.style.backgroundColor = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
        singleVideoUpload.files = e.dataTransfer.files;
        handleSingleFileChange();
      }
    });
  }
  
  // Handle file selection
  if (singleVideoUpload) {
    singleVideoUpload.addEventListener('change', handleSingleFileChange);
  }
  
  function handleSingleFileChange() {
    if (singleVideoUpload.files.length > 0) {
      const file = singleVideoUpload.files[0];
      
      // Update preview
      singleFilePreview.innerHTML = `
        <div class="file-preview-item">
          <span>📹</span>
          <span class="file-preview-name">${file.name}</span>
          <span>${formatFileSize(file.size)}</span>
        </div>
      `;
      
      // Enable buttons
      singleUploadButton.disabled = false;
      singleClearButton.disabled = false;
    } else {
      singleFilePreview.innerHTML = '';
      singleUploadButton.disabled = true;
      singleClearButton.disabled = true;
    }
  }
  
  // Handle upload button
  if (singleUploadButton) {
    singleUploadButton.addEventListener('click', () => {
      // Simulate upload
      singleUploadProgress.style.display = 'block';
      singleUploadButton.disabled = true;
      singleClearButton.disabled = true;
      
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        singleProgressBar.style.width = `${progress}%`;
        singleProgressText.textContent = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            alert('Upload complete!');
            // Reset everything
            singleUploadProgress.style.display = 'none';
            singleFilePreview.innerHTML = '';
            singleVideoUpload.value = '';
            singleUploadButton.disabled = true;
            singleClearButton.disabled = true;
          }, 500);
        }
      }, 200);
    });
  }
  
  // Handle clear button
  if (singleClearButton) {
    singleClearButton.addEventListener('click', () => {
      singleFilePreview.innerHTML = '';
      singleVideoUpload.value = '';
      singleUploadButton.disabled = true;
      singleClearButton.disabled = true;
    });
  }
  
  // Multiple video upload
  const multipleVideoUpload = document.getElementById('multiple-video-upload');
  const multipleUploadArea = document.getElementById('multiple-upload-area');
  const multipleFilePreview = document.getElementById('multiple-file-preview');
  const multipleUploadButton = document.getElementById('multiple-upload-button');
  const multipleClearButton = document.getElementById('multiple-clear-button');
  const multipleUploadProgress = document.getElementById('multiple-upload-progress');
  const multipleProgressBar = document.getElementById('multiple-progress-bar');
  const multipleProgressText = document.getElementById('multiple-progress-text');
  
  // Handle click on upload area
  if (multipleUploadArea && multipleVideoUpload) {
    multipleUploadArea.addEventListener('click', () => {
      multipleVideoUpload.click();
    });
  }
  
  // Handle drag and drop
  if (multipleUploadArea) {
    multipleUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      multipleUploadArea.style.borderColor = 'var(--color-primary)';
      multipleUploadArea.style.backgroundColor = 'rgba(0, 113, 227, 0.1)';
    });
    
    multipleUploadArea.addEventListener('dragleave', () => {
      multipleUploadArea.style.borderColor = 'var(--color-border)';
      multipleUploadArea.style.backgroundColor = 'transparent';
    });
    
    multipleUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      multipleUploadArea.style.borderColor = 'var(--color-border)';
      multipleUploadArea.style.backgroundColor = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
        multipleVideoUpload.files = e.dataTransfer.files;
        handleMultipleFileChange();
      }
    });
  }
  
  // Handle file selection
  if (multipleVideoUpload) {
    multipleVideoUpload.addEventListener('change', handleMultipleFileChange);
  }
  
  function handleMultipleFileChange() {
    if (multipleVideoUpload.files.length > 0) {
      // Update preview
      multipleFilePreview.innerHTML = '';
      
      Array.from(multipleVideoUpload.files).forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-preview-item';
        fileItem.innerHTML = `
          <span>📹</span>
          <span class="file-preview-name">${file.name}</span>
          <span>${formatFileSize(file.size)}</span>
          <button class="file-preview-remove" data-index="${index}">✕</button>
        `;
        multipleFilePreview.appendChild(fileItem);
      });
      
      // Add event listeners to remove buttons
      const removeButtons = multipleFilePreview.querySelectorAll('.file-preview-remove');
      removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          // Note: Can't actually remove individual files from a FileList
          // In a real app, you'd track selected files in an array
          // For this demo, we'll just clear all files if any remove button is clicked
          multipleFilePreview.innerHTML = '';
          multipleVideoUpload.value = '';
          multipleUploadButton.disabled = true;
          multipleClearButton.disabled = true;
        });
      });
      
      // Enable buttons
      multipleUploadButton.disabled = false;
      multipleClearButton.disabled = false;
    } else {
      multipleFilePreview.innerHTML = '';
      multipleUploadButton.disabled = true;
      multipleClearButton.disabled = true;
    }
  }
  
  // Handle upload button
  if (multipleUploadButton) {
    multipleUploadButton.addEventListener('click', () => {
      // Simulate upload
      multipleUploadProgress.style.display = 'block';
      multipleUploadButton.disabled = true;
      multipleClearButton.disabled = true;
      
      let progress = 0;
      const interval = setInterval(() => {
        progress += 3;
        multipleProgressBar.style.width = `${progress}%`;
        multipleProgressText.textContent = `${progress}%`;
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            alert(`Uploaded ${multipleVideoUpload.files.length} files successfully!`);
            // Reset everything
            multipleUploadProgress.style.display = 'none';
            multipleFilePreview.innerHTML = '';
            multipleVideoUpload.value = '';
            multipleUploadButton.disabled = true;
            multipleClearButton.disabled = true;
          }, 500);
        }
      }, 150);
    });
  }
  
  // Handle clear button
  if (multipleClearButton) {
    multipleClearButton.addEventListener('click', () => {
      multipleFilePreview.innerHTML = '';
      multipleVideoUpload.value = '';
      multipleUploadButton.disabled = true;
      multipleClearButton.disabled = true;
    });
  }
  
  // Video player controls
  const videoPlayer = document.getElementById('video-player');
  const playButton = document.getElementById('play-video');
  const pauseButton = document.getElementById('pause-video');
  const muteButton = document.getElementById('mute-video');
  const fullscreenButton = document.getElementById('fullscreen-video');
  const videoTime = document.getElementById('video-time');
  const currentTime = document.getElementById('current-time');
  const duration = document.getElementById('duration');
  
  if (videoPlayer) {
    videoPlayer.addEventListener('loadedmetadata', () => {
      videoTime.max = videoPlayer.duration;
      duration.textContent = Math.floor(videoPlayer.duration);
    });
    
    videoPlayer.addEventListener('timeupdate', () => {
      videoTime.value = videoPlayer.currentTime;
      currentTime.textContent = Math.floor(videoPlayer.currentTime);
    });
    
    if (playButton) {
      playButton.addEventListener('click', () => {
        videoPlayer.play();
      });
    }
    
    if (pauseButton) {
      pauseButton.addEventListener('click', () => {
        videoPlayer.pause();
      });
    }
    
    if (muteButton) {
      muteButton.addEventListener('click', () => {
        videoPlayer.muted = !videoPlayer.muted;
      });
    }
    
    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', () => {
        if (videoPlayer.requestFullscreen) {
          videoPlayer.requestFullscreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
          videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) {
          videoPlayer.msRequestFullscreen();
        }
      });
    }
    
    if (videoTime) {
      videoTime.addEventListener('input', () => {
        videoPlayer.currentTime = videoTime.value;
      });
    }
  }
  
  // Image upload
  const imageUpload = document.getElementById('image-upload');
  const imageUploadArea = document.getElementById('image-upload-area');
  const imagePreview = document.getElementById('image-preview');
  
  if (imageUploadArea && imageUpload) {
    imageUploadArea.addEventListener('click', () => {
      imageUpload.click();
    });
    
    // Handle drag and drop
    imageUploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      imageUploadArea.style.borderColor = 'var(--color-primary)';
      imageUploadArea.style.backgroundColor = 'rgba(0, 113, 227, 0.1)';
    });
    
    imageUploadArea.addEventListener('dragleave', () => {
      imageUploadArea.style.borderColor = 'var(--color-border)';
      imageUploadArea.style.backgroundColor = 'transparent';
    });
    
    imageUploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      imageUploadArea.style.borderColor = 'var(--color-border)';
      imageUploadArea.style.backgroundColor = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
        imageUpload.files = e.dataTransfer.files;
        handleImageChange();
      }
    });
  }
  
  if (imageUpload) {
    imageUpload.addEventListener('change', handleImageChange);
  }
  
  function handleImageChange() {
    if (imageUpload.files.length > 0) {
      const file = imageUpload.files[0];
      
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.innerHTML = `
          <div style="text-align: center;">
            <img src="${e.target.result}" alt="Preview" style="max-width: 100%; max-height: 300px; border-radius: var(--radius-md);">
            <p style="margin-top: var(--space-2);">${file.name} (${formatFileSize(file.size)})</p>
          </div>
        `;
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Helper function to format file size
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}