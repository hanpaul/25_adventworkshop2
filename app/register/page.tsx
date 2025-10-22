import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/icons';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdi9YLjmkowsle5FxYXq63Qjt4aKxUzUyQrJ_uU-bNZJScBFA/viewform?embedded=true";

export default function RegistrationPage() {
    return (
        <div className="bg-gradient-to-b from-violet-50 to-fuchsia-100 min-h-screen flex flex-col">
            <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="text-xl font-bold text-slate-800 font-serif">Workshop Registration</h1>
                        <Link 
                            href="/"
                            className="flex items-center gap-2 text-slate-600 font-semibold hover:text-violet-700 transition-colors"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            Back to Details
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-grow flex flex-col">
                 <iframe
                    src={GOOGLE_FORM_URL}
                    className="flex-grow border-0"
                    title="Registration Form"
                >
                    Loading…
                </iframe>
            </main>
        </div>
    );
}
