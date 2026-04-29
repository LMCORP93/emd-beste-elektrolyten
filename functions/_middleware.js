export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname === 'emd-elektrolyte-ohne-zucker.pages.dev' ||
    url.hostname === 'www.elektrolyte-ohne-zucker.de'
  ) {
    url.hostname = 'elektrolyte-ohne-zucker.de';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
