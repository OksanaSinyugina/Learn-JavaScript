function showNotification({top = 0, right = 0, className, html}) {
    let notification = document.createElement('div');
    notification.innerHTML = `
        <span class="${className}">${html}</span>
    `;
    notification.classList.add('notification');
    notification.style.top = `${top}px`;
    notification.style.right = `${right}px`;
    document.body.append(notification);
    setInterval(() => {
        notification.remove();
    }, 1000)
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);