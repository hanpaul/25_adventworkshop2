import type { AgendaItem } from './types';

export const AGENDA_ITEMS: AgendaItem[] = [
  { time: '1:00 PM', title: 'Introduction & Housekeeping', description: 'Overview of the workshop, what to expect, and speaker introductions.' },
  { time: '1:15 PM', title: 'Talk 1: Theology of the Family', description: 'Exploring the concept of the family as the domestic church.' },
  { time: '', title: 'Talk 2: Challenges Facing Families Today', description: 'An interactive discussion on modern struggles.' },
  { time: '', title: 'Snack Break', description: 'A short break for refreshments and fellowship.' },
  { time: '', title: 'Talk 3: Building God-Centered Relationships', points: ["For singles (friends, dating, parents)", "For couples (marriage, family, children)"] },
  { time: '4:00 PM', title: 'Wrap Up & Q&A Session', description: 'An opportunity to ask questions and consolidate learnings.' },
];