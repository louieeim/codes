import { wrap } from 'comlink';

// Create and wrap the shared worker
const worker = new SharedWorker(new URL('./worker.js', import.meta.url), { type: 'module' });
const compiler = wrap(worker.port);

// Subscribe to compiler updates
compiler.subscribe((data) => {
  // Set the compiled content to the inner HTML of the preview area
  const previewArea = document.querySelector('#preview');
  previewArea.innerHTML = data.compiled;
});

