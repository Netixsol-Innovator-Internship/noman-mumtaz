// Get all the elements we need
const unreadCount = document.getElementById('unreadCount');
const readAllBtn = document.getElementById('readAllBtn');
const notificationDots = document.querySelectorAll('.bg-red-500');
const unreadNotifications = document.querySelectorAll('.bg-blue-50');

// Initialize unread count
let currentUnread = 7; // Matches the initial count in HTML

// Mark all as read functionality
readAllBtn.addEventListener('click', function() {
  // Remove blue background from unread notifications
  unreadNotifications.forEach(notification => {
    notification.classList.remove('bg-blue-50');
  });
  
  // Hide all red dots
  notificationDots.forEach(dot => {
    dot.classList.add('hidden');
  });
  
  // Update unread count to 0
  currentUnread = 0;
  unreadCount.textContent = currentUnread;
});

// Optional: You could also add individual notification click handlers
document.querySelectorAll('.cursor-pointer').forEach(notification => {
  notification.addEventListener('click', function() {
    if (this.classList.contains('bg-blue-50')) {
      this.classList.remove('bg-blue-50');
      const dot = this.querySelector('.bg-red-500');
      if (dot) dot.classList.add('hidden');
      
      // Decrement count if it was unread
      if (currentUnread > 0) {
        currentUnread--;
        unreadCount.textContent = currentUnread;
      }
    }
  });
});