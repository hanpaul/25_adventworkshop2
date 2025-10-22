import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AGENDA_ITEMS } from '@/constants';
import { CalendarIcon, ClockIcon, LocationIcon, UserIcon } from '@/components/icons';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdi9YLjmkowsle5FxYXq63Qjt4aKxUzUyQrJ_uU-bNZJScBFA/viewform";

const Header = () => (
    <header className="relative py-24 md:py-32 text-center text-white overflow-hidden">
        <Image
            src="/background.png"
            alt="Advent workshop banner with candles"
            fill
            className="object-cover"
            quality={80}
            priority
        />
        <div className="absolute inset-0 bg-violet-800 opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
            <p className="text-lg md:text-xl font-sans uppercase tracking-widest text-violet-200 mb-2">Advent Workshop</p>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight tracking-tight">
                God's Design for the Family
            </h1>
            <p className="text-xl md:text-2xl font-sans text-violet-200 mt-4">
                대림절 워크숍: 가정을 위한 하느님의 설계
            </p>
            <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 bg-white text-violet-700 font-bold py-6 px-16 rounded-full hover:bg-violet-100 transition-colors shadow-2xl inline-block text-3xl transform hover:scale-105"
            >
                Register Now
            </a>
        </div>
    </header>
);

const EventDetails = () => (
    <section className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg -mt-16 mx-auto max-w-4xl relative z-20 border border-white/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 text-center">
            <DetailItem icon={<CalendarIcon className="w-8 h-8 mx-auto mb-2 text-violet-600"/>} title="Date" text="Saturday, Dec 6" />
            <DetailItem icon={<ClockIcon className="w-8 h-8 mx-auto mb-2 text-violet-600"/>} title="Time" text="1:00 - 4:30 PM" />
            <DetailItem icon={<LocationIcon className="w-8 h-8 mx-auto mb-2 text-violet-600"/>} title="Location" text="Holy Korean Martyrs Catholic Church" />
            <DetailItem icon={<UserIcon className="w-8 h-8 mx-auto mb-2 text-violet-600"/>} title="Speaker" text="Dr. Robert Navarra" />
        </div>
    </section>
);

interface DetailItemProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, title, text }) => (
    <div className="p-4">
        {icon}
        <h3 className="font-bold text-slate-700 text-lg">{title}</h3>
        <p className="text-slate-600">{text}</p>
    </div>
);

const AboutSection = () => (
    <div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Strengthen Your Family, Raise Faith-Filled Children</h2>
        <p className="text-slate-600 mb-6 text-lg">
            This workshop is designed for English-speaking adults in all stages of life—singles, married couples, parents, and empty nesters. We warmly welcome those from multi-cultural and immigrant backgrounds, and members from all parishes in the Diocese of San Jose and the wider Bay Area. Join us to learn how to build God-centered relationships and navigate modern challenges with faith.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
                <h3 className="font-bold text-slate-700 text-lg">Key Takeaways For:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                    <li><span className="font-medium text-slate-800">Married Couples:</span> Improve your spousal relationship from a Catholic perspective.</li>
                    <li><span className="font-medium text-slate-800">Parents:</span> Understand how to raise healthy and faith-filled children.</li>
                    <li><span className="font-medium text-slate-800">Singles:</span> Discover how to build relationships centered in God.</li>
                </ul>
            </div>
            <div>
                 <h3 className="font-bold text-slate-700 text-lg">We'll Discuss Challenges Like:</h3>
                 <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                    <li>Feeling lonely or anxious within the family.</li>
                    <li>The "married but roommates" phenomenon.</li>
                    <li>Modern dating challenges for singles.</li>
                    <li>Raising children amidst high expectations & screen time.</li>
                </ul>
            </div>
        </div>
    </div>
);


const AgendaSection = () => (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-white/30">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-8">Workshop Agenda</h2>
        <div className="flow-root">
            <ul className="-mb-8">
                {AGENDA_ITEMS.map((item, index) => (
                    <li key={index}>
                        <div className="relative pb-8">
                            {index !== AGENDA_ITEMS.length - 1 && (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-300" aria-hidden="true" />
                            )}
                            <div className="relative flex items-start space-x-4">
                                <div>
                                    <span className="h-8 w-8 rounded-full bg-violet-500 flex items-center justify-center ring-8 ring-violet-100">
                                        <ClockIcon className="h-5 w-5 text-white" />
                                    </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div>
                                        <p className="text-sm text-slate-500">{item.time}</p>
                                        <p className="font-bold text-slate-800 text-lg">{item.title}</p>
                                    </div>
                                    <div className="mt-2 text-slate-600">
                                        {item.description && <p>{item.description}</p>}
                                        {item.points && (
                                            <ul className="list-disc list-inside mt-1">
                                                {item.points.map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const SpeakerSection = () => (
    <div className="flex flex-col md:flex-row items-center bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 gap-8 border border-white/30">
        <Image 
            src="/dr_navarra.png" 
            alt="Dr. Robert Navarra"
            width={160}
            height={160}
            className="rounded-full object-cover shadow-md flex-shrink-0"
        />
        <div>
            <p className="text-sm font-semibold uppercase text-violet-600 tracking-wider">Guest Speaker</p>
            <h3 className="text-2xl font-bold font-serif text-slate-800 mt-1">Dr. Robert Navarra</h3>
            <p className="text-slate-600 font-medium">LMFT, MAC, Certified Gottman Therapist & Master Trainer</p>
            <p className="text-slate-600 mt-3">
                Dr. Navarra is a research-based trainer and speaker who has co-authored articles with world-renowned relationship experts Drs. John and Julie Gottman. As a consultant and speaker for the Catholic Church on addiction and marriage, he brings a unique blend of clinical expertise and faith-based understanding to help couples and families thrive.
            </p>
            <a 
                href="https://drrobertnavarra.com/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 text-violet-600 font-semibold hover:text-violet-800 transition-colors"
            >
                Learn more about Dr. Navarra &rarr;
            </a>
        </div>
    </div>
);

const RegistrationSection = () => (
    <div className="text-center bg-violet-700 text-white rounded-2xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Register Today!</h2>
        <p className="text-violet-200 max-w-2xl mx-auto mb-6 text-lg">
            Join us for this enriching experience. Click the button below to secure your spot.
        </p>
        <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-violet-700 font-bold py-3 px-8 rounded-full hover:bg-violet-100 transition-colors shadow-lg inline-block"
        >
            Register Now
        </a>
    </div>
);


export default function HomePage() {
    return (
        <div className="bg-gradient-to-b from-violet-50 to-fuchsia-100 text-slate-800 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <EventDetails />
                <div className="mt-16 space-y-16 max-w-4xl mx-auto">
                    <AboutSection />
                    <AgendaSection />
                    <SpeakerSection />
                    <RegistrationSection />
                </div>
            </main>
            <footer className="bg-white/50 border-t border-white/30 mt-16 text-slate-600">
                <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <LocationIcon className="w-10 h-10 text-violet-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">Location</h4>
                                <p>Holy Korean Martyrs Catholic Church</p>
                                <address className="not-italic">1523 McLaughlin Ave, San Jose, CA 95122</address>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=Holy+Korean+Martyrs+Catholic+Church,1523+McLaughlin+Ave,San+Jose,CA+95122"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-violet-600 text-white font-bold py-3 px-6 rounded-full hover:bg-violet-700 transition-colors shadow-md text-base"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200">
                        &copy; {new Date().getFullYear()} Holy Korean Martyrs Catholic Church. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}