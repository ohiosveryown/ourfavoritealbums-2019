import Scrollbar from 'smooth-scrollbar'

if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {

} else {
  document.body.style.height = '100vh'
  const scrollbar = Scrollbar.init(document.querySelector('body'), {
    damping: 0.03,
    renderByPixels: true,
    continuousScrolling: true,
    // syncCallbacks: true,
  })
}