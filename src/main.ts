// main.ts

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleDark');
  if (button) {
    button.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
});
