const video = document.getElementById('myVideo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Play the video when it enters the viewport
      video.play();
    } else {
      // Pause the video when it leaves the viewport (optional)
      video.pause();
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the video is visible

observer.observe(video);