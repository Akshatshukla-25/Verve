import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Shadows } from '../theme/colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  glowing?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, style, glowing = false }) => {
  return (
    <View style={[styles.card, glowing && styles.glowingCard, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 16,
    marginVertical: 8,
    ...Shadows.card,
  },
  glowingCard: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(18, 21, 32, 0.95)',
    ...Shadows.neonGlowPrimary,
  },
});
