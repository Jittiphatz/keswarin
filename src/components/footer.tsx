import React from 'react';
import { GithubIcon } from 'lucide-react';

const Footer: React.FC = () => (
    <footer className='text-white text-center p-4 fixed inset-x-0 bottom-0 hover:text-blue-400'>
        <a href="https://github.com/Jittiphatz/keswarin" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="inline-block mr-2" />
            Source Code
        </a>
    </footer>
);

export default Footer;