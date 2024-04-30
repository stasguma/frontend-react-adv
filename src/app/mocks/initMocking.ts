export async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./apiMockWorker');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest(req, print) {
      if (/\.(png|jpg|webp|svg|tsx?|css|jsx?|woff2)$/.test(req.url)) {
        return;
      }

      print.warning();
    },
  });
}
