// import type { PageServerLoad } from './$types'
// import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts'
// import { env } from '$env/static/private'

// export const load: PageServerLoad = async (event) => {
//   const request = event.request
//   // get HTTP referer header
//   const referer = request.headers.get('referer')

//   // get the next HTTP response in the chain
//   const response = await context.next()

//   // if no referer, return the response
//   if (referer === null) {
//     return response
//   }

//   if (referer !== env.HTTP_REFERER_CHECK && referer !== 'https://www.netlify.com/') {
//     return response
//   }

//   const netlifyMsg =
//     referer === 'https://www.netlify.com/'
//       ? '<br /> ✨ You came from the Netlify blog post! ✨ '
//       : ''

//   const rewrite = new HTMLRewriter()
//     .on('p#referer', {
//       element(element) {
//         element.setInnerContent(
//           `Hello, from an Edge Function that detected a specific HTTP referer header! ${netlifyMsg}`,
//           { html: true }
//         )
//         element.setAttribute('class', 'referer')
//       }
//     })
//     .transform(response)
//   return {
//     edge: rewrite
//   }
// }
