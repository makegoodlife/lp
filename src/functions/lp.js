import { render } from 'services/html-renderer'

export default async (req) => {
  const html = await render('lp', {
    name: 'LongLH'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: html
  }
}
