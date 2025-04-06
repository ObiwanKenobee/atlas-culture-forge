
import { Region, RegionCode } from "../types/atlas";

export const regions: Record<RegionCode, Region> = {
  'global': {
    id: 'global',
    name: 'Global',
    description: 'The default international design system',
    culturalNote: 'A balanced approach that works across cultures',
    designPhilosophy: 'Universal accessibility and clarity',
    flagEmoji: '🌍'
  },
  'east-asia': {
    id: 'east-asia',
    name: 'East Asia',
    description: 'Influences from China, Japan, Korea',
    culturalNote: 'Balance, harmony, and respect for tradition',
    designPhilosophy: 'Precision, minimalism with selective vibrant accents',
    flagEmoji: '🇯🇵'
  },
  'south-asia': {
    id: 'south-asia',
    name: 'South Asia',
    description: 'Inspired by India, Pakistan, Bangladesh',
    culturalNote: 'Rich patterns, vibrant colors, elaborate detailing',
    designPhilosophy: 'Intricate details with spiritual symbolism',
    flagEmoji: '🇮🇳'
  },
  'africa': {
    id: 'africa',
    name: 'Africa',
    description: 'Diverse influences from across the continent',
    culturalNote: 'Community-centered, story-rich traditions',
    designPhilosophy: 'Bold geometry, earth tones with vibrant accents',
    flagEmoji: '🇿🇦'
  },
  'europe': {
    id: 'europe',
    name: 'Europe',
    description: 'Classical and modern European aesthetics',
    culturalNote: 'Structured formality with artistic expression',
    designPhilosophy: 'Balance of functionality and refined aesthetics',
    flagEmoji: '🇪🇺'
  },
  'latin-america': {
    id: 'latin-america',
    name: 'Latin America',
    description: 'Vibrant cultures from Mexico to Argentina',
    culturalNote: 'Expressive, colorful, community-oriented',
    designPhilosophy: 'Lively colors with organic patterns',
    flagEmoji: '🇧🇷'
  },
  'north-america': {
    id: 'north-america',
    name: 'North America',
    description: 'Modern and pragmatic design approach',
    culturalNote: 'Efficiency, innovation, and individual expression',
    designPhilosophy: 'Clean lines with focus on usability',
    flagEmoji: '🇺🇸'
  },
  'oceania': {
    id: 'oceania',
    name: 'Oceania',
    description: 'Pacific influences from Australia to New Zealand',
    culturalNote: 'Connection to nature, sea, and indigenous traditions',
    designPhilosophy: 'Natural materials, fluidity, and open space',
    flagEmoji: '🇦🇺'
  }
};
