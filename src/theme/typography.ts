import { TextStyle } from 'react-native';
import { Colors } from './colors';

export const Typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  body: {
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 11,
    color: Colors.textMuted,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.textPrimary,
  },
  badge: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
};
