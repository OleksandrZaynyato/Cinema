import express from 'express';
import type { Request, Response } from 'express'; // тільки для типів

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from server (TS)!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
