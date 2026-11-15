import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto('http://localhost:4173/', { waitUntil: 'load' })

const info = await page.evaluate(() => {
  const social = Array.from(document.querySelectorAll('a[class*=rounded-2xl]')).map((a) => {
    const txt = a.textContent.trim()
    const isSocial = ['Facebook','TikTok','YouTube','Telegram','LinkedIn','GitHub','Portfolio'].includes(txt)
    return { label: txt, target: a.getAttribute('target'), rel: a.getAttribute('rel'), href: a.getAttribute('href') }
  })
  return { social }
})

console.log(JSON.stringify(info, null, 2))
await browser.close()
