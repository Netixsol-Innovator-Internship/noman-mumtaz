const unreadCount = document.getElementById('unreadCount');
const readAllBtn = document.getElementById('readAllBtn');
const notificationDots = document.querySelectorAll('.bg-red-500');
const unreadNotifications = document.querySelectorAll('.bg-blue-50');

let currentUnread = 7;

readAllBtn.addEventListener('click', function() {
  unreadNotifications.forEach(notification => {
    notification.classList.remove('bg-blue-50');
  });
  
  notificationDots.forEach(dot => {
    dot.classList.add('hidden');
  });
  
  currentUnread = 0;
  unreadCount.textContent = currentUnread;
});

document.querySelectorAll('.cursor-pointer').forEach(notification => {
  notification.addEventListener('click', function() {
    if (this.classList.contains('bg-blue-50')) {
      this.classList.remove('bg-blue-50');
      const dot = this.querySelector('.bg-red-500');
      if (dot) dot.classList.add('hidden');
      
      if (currentUnread > 0) {
        currentUnread--;
        unreadCount.textContent = currentUnread;
      }
    }
  });
});