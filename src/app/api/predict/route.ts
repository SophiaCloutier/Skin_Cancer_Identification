import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';
import { writeFileSync } from 'fs';

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    
    // Create a temporary file to store the image data
    const tempDataPath = path.join(process.cwd(), 'temp_data.json');
    writeFileSync(tempDataPath, JSON.stringify({ image }));

    return new Promise((resolve) => {
      // Call Python script with the temp file path as an argument
      const pythonProcess = spawn('python', [
        path.join(process.cwd(), 'src/app/identification/identify.py'),
        tempDataPath
      ]);

      let result = '';

      // Collect data from script
      pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data}`);
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          resolve(NextResponse.json({ error: 'Prediction failed' }, { status: 500 }));
        } else {
          try {
            const predictions = JSON.parse(result);
            resolve(NextResponse.json({ predictions }));
          } catch (e) {
            resolve(NextResponse.json({ error: 'Invalid response from prediction' }, { status: 500 }));
          }
        }
      });
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
} 