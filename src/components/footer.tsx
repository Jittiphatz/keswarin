import React from 'react';
import { GithubIcon } from 'lucide-react';

const Footer: React.FC = () => (
    <footer className='text-white text-center p-7 fixed inset-x-0 bottom-0  flex justify-center gap-8'>
        <p>Made with ❤️ by <a className='hover:text-emerald-400 transition-all' href="https://jittiphat.space" target="_blank" rel="noopener noreferrer">
            Jittiphat Somsai </a>
        </p>
        <a className='hover:text-blue-400 transition-all' href="https://github.com/Jittiphatz/keswarin" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="inline-block" />
        </a>
    </footer>
);

export default Footer;