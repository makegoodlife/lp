import ect from 'ect'
import htmlMinifier from 'html-minifier'

import * as views from 'views'

export const render = async (template, locals) => {
  const renderer = ect({
    root: {
      ...views
    }
  })

  const html = await new Promise((resolve, reject) => {
    renderer.render(template, locals, (error, html) => {
      if (error) {
        return reject(error)
      }

      return resolve(html)
    })
  })

  const minified = htmlMinifier.minify(html, {
    collapseWhitespace: true,
    // conservativeCollapse: true,
    removeAttributeQuotes: true
  })

  return minified
}
