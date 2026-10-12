import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { createReadStream } from 'fs';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

const server = createServer(async (req, res) => {
  let filePath = join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'text/plain';

  try {
    if (contentType.startsWith('video/')) {
      const { size } = await stat(filePath);
      let start = 0;
      let end = size - 1;
      let status = 200;
      if (req.headers.range) {
        const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if (range && (range[1] || range[2])) {
          start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
          end = range[1] && range[2] ? Math.min(Number(range[2]), end) : end;
        } else start = size;
        if (start >= size || start > end) {
          res.writeHead(416, { 'Content-Range': `bytes */${size}` });
          res.end();
          return;
        }
        status = 206;
      }
      const headers = { 'Content-Type': contentType, 'Content-Length': end - start + 1, 'Accept-Ranges': 'bytes' };
      if (status === 206) headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
      res.writeHead(status, headers);
      if (req.method === 'HEAD') res.end();
      else createReadStream(filePath, { start, end }).on('error', () => res.destroy()).pipe(res);
      return;
    }
    const content = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch {
    if (contentType.startsWith('video/')) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    try {
      const content = await readFile(join(__dirname, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
