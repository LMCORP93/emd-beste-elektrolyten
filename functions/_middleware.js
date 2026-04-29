export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-beste-elektrolyten.pages.dev') {
    url.hostname = 'www.beste-elektrolyten.nl';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
