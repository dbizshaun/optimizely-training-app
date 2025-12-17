const fs = require('fs');
const path = require('path');

async function prepareStandalone() {
  console.log('📦 Preparing standalone build...');
  
  const standaloneDir = path.join(process.cwd(), '.next/standalone');
  const staticDir = path.join(process.cwd(), '.next/static');
  const publicDir = path.join(process.cwd(), 'public');
  
  try {
    // Ensure standalone directory exists
    if (!fs.existsSync(standaloneDir)) {
      console.log('📁 Creating standalone directory...');
      await fs.promises.mkdir(standaloneDir, { recursive: true });
    }
    
    // Create .next/static directory in standalone
    const targetStaticDir = path.join(standaloneDir, '.next/static');
    if (!fs.existsSync(targetStaticDir)) {
      console.log('📁 Creating static directory...');
      await fs.promises.mkdir(targetStaticDir, { recursive: true });
    }
    
    // Copy static files
    if (fs.existsSync(staticDir)) {
      console.log('📁 Copying static files...');
      const staticFiles = await fs.promises.readdir(staticDir);
      for (const file of staticFiles) {
        const srcPath = path.join(staticDir, file);
        const destPath = path.join(targetStaticDir, file);
        await fs.promises.cp(srcPath, destPath, { recursive: true });
      }
    }
    
    // Copy public directory if it exists
    const targetPublicDir = path.join(standaloneDir, 'public');
    if (fs.existsSync(publicDir)) {
      console.log('📁 Copying public assets...');
      await fs.promises.cp(publicDir, targetPublicDir, { recursive: true });
    }
    
    // Copy package.json and yarn.lock
    console.log('📄 Copying package files...');
    await fs.promises.copyFile('package.json', path.join(standaloneDir, 'package.json'));
    if (fs.existsSync('yarn.lock')) {
      await fs.promises.copyFile('yarn.lock', path.join(standaloneDir, 'yarn.lock'));
    }
    
    // Verify the standalone build
    const files = await fs.promises.readdir(standaloneDir);
    console.log('✅ Standalone build ready. Contents:', files.join(', '));
    
  } catch (error) {
    console.error('❌ Error preparing standalone build:', error);
    process.exit(1);
  }
}

prepareStandalone();