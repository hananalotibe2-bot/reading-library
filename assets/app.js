function toggleDrawer(open) {
  const drawer = document.getElementById('siteDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (open) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}
