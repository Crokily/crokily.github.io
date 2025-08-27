import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';
import { coverLetterData } from '../../resume/coverLetterData';

export async function GET() {
  let browser = null;

  try {
    // 获取cover letter页面的完整URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const coverLetterUrl = `${baseUrl}/resume/cover-letter`;

    console.log('Generating PDF for URL:', coverLetterUrl);

    // 检查是否在本地开发环境
    const isLocal = process.env.NODE_ENV === 'development';

    // 配置Puppeteer
    if (isLocal) {
      // 本地开发环境：尝试使用本地安装的Chrome
      try {
        // 尝试使用常见的Chrome路径
        const possiblePaths = [
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/usr/bin/google-chrome',
          '/usr/bin/chromium-browser',
        ];

                 let executablePath = undefined;
         for (const path of possiblePaths) {
           try {
             // eslint-disable-next-line @typescript-eslint/no-require-imports
             const fs = require('fs');
             if (fs.existsSync(path)) {
               executablePath = path;
               break;
             }
           } catch {
             // 继续尝试下一个路径
           }
         }

        browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
          defaultViewport: {
            width: 1280,
            height: 720,
          },
          executablePath,
        });
             } catch {
         console.log('Local Chrome not found, falling back to chromium...');
        // 如果本地Chrome不可用，回退到chromium
        browser = await puppeteer.launch({
          args: chromium.args,
          defaultViewport: {
            width: 1280,
            height: 720,
          },
          executablePath: await chromium.executablePath(),
          headless: true,
        });
      }
    } else {
      // 生产环境：使用chromium包
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: {
          width: 1280,
          height: 720,
        },
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    }

    const page = await browser.newPage();

    // 访问cover letter页面
    await page.goto(coverLetterUrl, { waitUntil: 'networkidle0' });

    // 生成PDF Buffer
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // 确保背景色和图片能被打印
      margin: { // 可选：设置页边距
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    // 动态生成文件名
    const { name } = coverLetterData.personalInfo;
    const { position } = coverLetterData.recipient;
    const fileName = `${name} - ${position} Cover Letter.pdf`;

    // 返回PDF文件
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });

  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
