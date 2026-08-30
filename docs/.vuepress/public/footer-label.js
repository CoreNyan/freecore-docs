(() => {
  const updateFooterLabel = () => {
    const themeLink = document.querySelector('.footer > a[href*="vuepress-theme-vdoing"]')
    const label = themeLink && themeLink.previousSibling
    if (label && label.nodeType === Node.TEXT_NODE) {
      const updated = label.textContent.replace('Theme by', 'Theme fork from')
      if (updated !== label.textContent) label.textContent = updated
    }
  }

  const start = () => {
    const observer = new MutationObserver(updateFooterLabel)
    observer.observe(document.body, { childList: true, subtree: true })
    updateFooterLabel()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true })
  } else {
    start()
  }
})()
