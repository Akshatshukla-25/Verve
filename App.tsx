import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from './src/theme/colors';
import { Card } from './src/components/Card';
import { MuscleHeatmap } from './src/components/MuscleHeatmap';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>VERVE</Text>
          <Text style={styles.subtitle}>Strava + Hevy Performance Tracker</Text>
        </View>

        <Card glowing>
          <Text style={styles.cardHeader}>TODAY'S TARGET</Text>
          <Text style={styles.cardHighlight}>5.0 KM Tempo Run + Push Hypertrophy</Text>
        </Card>

        <MuscleHeatmap />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  header: {
    marginVertical: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.primary,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  cardHeader: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primary,
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  cardHighlight: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
});
