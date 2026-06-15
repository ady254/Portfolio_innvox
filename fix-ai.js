const fs = require('fs');

let c = fs.readFileSync('project/src/pages/AISolutions.tsx', 'utf8');
c = c.replace(/import { useNavigate } from ['"]react-router-dom['"];/, "import { useRouter } from 'next/navigation';");
c = c.replace(/useNavigate\(\)/g, "useRouter()");
c = c.replace(/navigate\(/g, "router.push(");
c = c.replace(/\.\.\/components\/AIVoiceDemo/g, "@/components/AIVoiceDemo");
c = c.replace(/import \{ Link \} from 'react-router-dom';/g, "import Link from 'next/link';");
c = c.replace(/<Link([^>]+)to=/g, '<Link$1href=');
c = c.replace('instantly instantly', 'instantly');
c = '"use client";\n' + c;

fs.writeFileSync('project-next/src/app/ai-solutions/page.tsx', c);
