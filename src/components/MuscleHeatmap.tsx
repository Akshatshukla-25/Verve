import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { MuscleGroup } from '../types/fitness';

interface MuscleVolumeData {
  muscle: MuscleGroup;
  sets: number;
}

interface MuscleHeatmapProps {
  data?: MuscleVolumeData[];
}

export const MuscleHeatmap: React.FC<MuscleHeatmapProps> = ({
  data = [
    { muscle: 'Chest', sets: 14 },
    { muscle: 'Back', sets: 12 },
    { muscle: 'Legs', sets: 16 },
    { muscle: 'Shoulders', sets: 9 },
    { muscle: 'Biceps', sets: 8 },
    { muscle: 'Triceps', sets: 10 },
    { muscle: 'Abs', sets: 6 },
  ]
}) => {
  const maxSets = Math.max(...data.map(d => d.sets), 1);

  const getHeatColor = (sets: number) => {
    const ratio = sets / maxSets;
    if (ratio > 0.75) return Colors.primary;
    if (ratio > 0.4) return Colors.secondary;
    return Colors.accentPurple;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WEEKLY MUSCLE DISTRIBUTION</Text>

      <View style={styles.list}>
        {data.map((item) => {
          const color = getHeatColor(item.sets);
          const percent = (item.sets / maxSets) * 100;

          return (
            <View key={item.muscle} style={styles.row}>
              <View style={styles.labelContainer}>
                <Text style={styles.muscleLabel}>{item.muscle}</Text>
                <Text style={styles.setsLabel}>{item.sets} sets</Text>
              </View>

              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.barFill,
                    { width: `${percent}%`, backgroundColor: color }
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.textSecondary,
    letterSpacing: 1.2,
    marginBottom: 14,
  },
  list: {
    gap: 12,
  },
  row: {
    gap: 6,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  muscleLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  setsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
  barTrack: {
    height: 8,
    backgroundColor: Colors.inputBackground,
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  }
});
