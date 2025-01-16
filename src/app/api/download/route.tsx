import { NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'fs/promises';

// ダウンロード用のエンドポイント
export async function GET(req: Request) {
    const url = new URL(req.url);
    const filePath = url.searchParams.get('filePath');

    if (!filePath) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fullPath = path.join(process.cwd(), 'tmp', 'processed', filePath);

    try {
        const fileBuffer = await readFile(fullPath);
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'image/png', // 必要に応じてMIMEタイプを変更
                'Content-Disposition': `attachment; filename=${filePath}`,
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
}
