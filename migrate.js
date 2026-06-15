const fs = require('fs');
const path = require('path');

const srcProject = path.join(__dirname, 'project', 'src');
const destNext = path.join(__dirname, 'project-next', 'src', 'app');
const destComponents = path.join(__dirname, 'project-next', 'src', 'components');

// Ensure components dir exists
if (!fs.existsSync(destComponents)) {
    fs.mkdirSync(destComponents, { recursive: true });
}

// Copy components
const componentsDir = path.join(srcProject, 'components');
if (fs.existsSync(componentsDir)) {
    const components = fs.readdirSync(componentsDir);
    components.forEach(file => {
        let content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
        
        // Fix imports
        content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
        content = content.replace(/import { useNavigate } from ['"]react-router-dom['"];/g, "import { useRouter } from 'next/navigation';\n// TODO: replace navigate() with router.push()");
        content = content.replace(/useNavigate\(\)/g, "useRouter()");
        content = content.replace(/navigate\(/g, "router.push(");
        
        // Add "use client" if it uses hooks
        if (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('useRouter') || content.includes('framer-motion')) {
            content = '"use client";\n' + content;
        }

        fs.writeFileSync(path.join(destComponents, file), content);
    });
}

// Create pages
const pages = {
    'Home.tsx': 'page.tsx',
    'About.tsx': 'about/page.tsx',
    'Services.tsx': 'services/page.tsx',
    'ProjectsPage.tsx': 'projects/page.tsx',
    'ProjectDetail.tsx': 'projects/[slug]/page.tsx',
    'AISolutions.tsx': 'ai-solutions/page.tsx',
    'Contact.tsx': 'contact/page.tsx',
    'Subscription.tsx': 'subscription/page.tsx',
    'Privacy.tsx': 'privacy/page.tsx',
    'Terms.tsx': 'terms/page.tsx'
};

const pagesDir = path.join(srcProject, 'pages');
for (const [vitePage, nextPath] of Object.entries(pages)) {
    const srcPath = path.join(pagesDir, vitePage);
    if (fs.existsSync(srcPath)) {
        let content = fs.readFileSync(srcPath, 'utf-8');
        
        // Fix imports
        content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
        content = content.replace(/import { useNavigate } from ['"]react-router-dom['"];/g, "import { useRouter } from 'next/navigation';");
        content = content.replace(/useNavigate\(\)/g, "useRouter()");
        content = content.replace(/navigate\(/g, "router.push(");
        content = content.replace(/\.\.\/components\//g, "@/components/");
        
        // Add "use client" if needed
        if (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('useRouter') || content.includes('framer-motion')) {
            content = '"use client";\n' + content;
        }

        const destPath = path.join(destNext, nextPath);
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, content);
    }
}

console.log("Migration script complete");
