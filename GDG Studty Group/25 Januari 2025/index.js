import http from 'http';

let message = 'Belum ada Pesan';

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/pesan') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end(message);
    } else if (req.method === 'POST' && req.url === '/pesan') {
        let title = '';

        req.on('data', chunk => {
            title += chunk;
        });

        req.on('end', () => {
            message = title;
            res.writeHead(201, { 'Content-Type' : 'text/plain' });
            res.end('Pesan berhasil disimpan');
        });
    } else if (req.method === 'PUT' && req.url === '/pesan') { 
        let title = '';

        req.on('data', chunk => {
            title += chunk;
        });

        req.on('end', () => {
            message = title;
            res.writeHead(200, { 'Content-Type' : 'text/plain' });
            res.end('Pesan berhasil diperbarui');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint tidak ditemukan');
    }
});

server.listen(1234, () => {
    console.log('Server berjalan di http://127.0.0.1:1234');
});
