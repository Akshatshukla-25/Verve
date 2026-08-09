import { Exercise } from '../types/fitness';

export const INITIAL_EXERCISES: Exercise[] = [
  // CHEST
  {
    id: 'chest-barbell-bench-press',
    name: 'Barbell Bench Press',
    category: 'Chest',
    secondaryMuscles: ['Triceps', 'Shoulders'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Lie flat on the bench with feet firm on the floor.',
      'Grip the bar slightly wider than shoulder-width.',
      'Lower the bar steadily to your mid-chest.',
      'Press explosively upward until arms are extended.'
    ]
  },
  {
    id: 'chest-incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    category: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Set bench to 30-45 degree incline.',
      'Press dumbbells up from shoulder level until elbows lock slightly.',
      'Lower down slowly feeling upper chest stretch.'
    ]
  },
  {
    id: 'chest-cable-flyes',
    name: 'Cable Chest Flyes',
    category: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Cable',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Set pulleys to chest height.',
      'Bring handles together in a hugging motion keeping a soft bend in elbows.',
      'Squeeze chest at peak contraction.'
    ]
  },
  {
    id: 'chest-chest-dips',
    name: 'Chest Dips',
    category: 'Chest',
    secondaryMuscles: ['Triceps', 'Shoulders'],
    equipment: 'Bodyweight',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Lean torso slightly forward on parallel bars.',
      'Lower body until upper arms are parallel to floor.',
      'Push back up using chest muscles.'
    ]
  },

  // BACK
  {
    id: 'back-barbell-deadlift',
    name: 'Conventional Deadlift',
    category: 'Back',
    secondaryMuscles: ['Legs', 'Glutes', 'Abs'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Stand with feet hip-width under bar.',
      'Hinge at hips and grip bar outside legs.',
      'Keep flat back, drive hips forward to lift bar up.'
    ]
  },
  {
    id: 'back-lat-pulldown',
    name: 'Lat Pulldown',
    category: 'Back',
    secondaryMuscles: ['Biceps'],
    equipment: 'Cable',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Grip bar wide overhead.',
      'Pull bar down smoothly to upper chest driving elbows down.',
      'Return up under control.'
    ]
  },
  {
    id: 'back-bent-over-row',
    name: 'Barbell Bent-Over Row',
    category: 'Back',
    secondaryMuscles: ['Biceps', 'Shoulders'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Hinge forward at 45 degrees keeping back straight.',
      'Pull bar toward lower abdomen squeezing shoulder blades.',
      'Lower under control.'
    ]
  },
  {
    id: 'back-seated-cable-row',
    name: 'Seated Cable Row',
    category: 'Back',
    secondaryMuscles: ['Biceps'],
    equipment: 'Cable',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Sit with feet braced and knees slightly bent.',
      'Pull attachment into midsection while keeping spine upright.',
      'Control return.'
    ]
  },

  // LEGS & QUADS / HAMSTRINGS
  {
    id: 'legs-barbell-squat',
    name: 'Barbell Back Squat',
    category: 'Legs',
    secondaryMuscles: ['Glutes', 'Abs'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Place bar across upper traps.',
      'Squat down until thighs are parallel to floor or below.',
      'Drive through heels back to top.'
    ]
  },
  {
    id: 'legs-leg-press',
    name: 'Leg Press',
    category: 'Legs',
    secondaryMuscles: ['Quads', 'Glutes'],
    equipment: 'Machine',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Position feet shoulder-width on sled.',
      'Lower sled until knees reach 90 degrees.',
      'Press back up without locking knees.'
    ]
  },
  {
    id: 'legs-romanian-deadlift',
    name: 'Romanian Deadlift (RDL)',
    category: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Back'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Soft bend in knees, hinge hips backward.',
      'Lower dumbbells/bar close to shins until deep hamstring stretch.',
      'Squeeze glutes to stand.'
    ]
  },
  {
    id: 'legs-walking-lunges',
    name: 'Dumbbell Walking Lunges',
    category: 'Legs',
    secondaryMuscles: ['Quads', 'Glutes'],
    equipment: 'Dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Step forward into lunge dipping back knee near floor.',
      'Push up and step smoothly into next lunge.'
    ]
  },

  // SHOULDERS
  {
    id: 'shoulders-overhead-press',
    name: 'Overhead Barbell Press (OHP)',
    category: 'Shoulders',
    secondaryMuscles: ['Triceps', 'Chest'],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Hold bar at collarbone level.',
      'Press straight overhead locking core and glutes.',
      'Lower under control back to shoulders.'
    ]
  },
  {
    id: 'shoulders-dumbbell-lateral-raise',
    name: 'Dumbbell Lateral Raise',
    category: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Raise dumbbells out to sides until parallel to shoulder line.',
      'Pause briefly and lower slowly.'
    ]
  },
  {
    id: 'shoulders-face-pull',
    name: 'Cable Face Pull',
    category: 'Shoulders',
    secondaryMuscles: ['Back'],
    equipment: 'Cable',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Attach rope to upper pulley.',
      'Pull hands toward face while flaring elbows high and out.'
    ]
  },

  // ARMS: BICEPS & TRICEPS
  {
    id: 'biceps-dumbbell-curl',
    name: 'Dumbbell Bicep Curl',
    category: 'Biceps',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Keep elbows close to torso.',
      'Curl weights upward while supinating wrists.',
      'Squeeze biceps at top.'
    ]
  },
  {
    id: 'biceps-ez-bar-preacher-curl',
    name: 'EZ-Bar Preacher Curl',
    category: 'Biceps',
    secondaryMuscles: [],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Rest upper arms flat on preacher pad.',
      'Lower bar fully, then curl up to top.'
    ]
  },
  {
    id: 'triceps-rope-pushdown',
    name: 'Triceps Rope Pushdown',
    category: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Cable',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Pin elbows to sides.',
      'Extend rope downward spreading ends apart at bottom.'
    ]
  },
  {
    id: 'triceps-skullcrusher',
    name: 'EZ-Bar Skullcrusher',
    category: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Barbell',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Lie on flat bench with arms extended.',
      'Bend elbows to lower bar toward forehead.',
      'Extend triceps back to start.'
    ]
  },

  // ABS & CORE
  {
    id: 'core-hanging-leg-raise',
    name: 'Hanging Leg Raise',
    category: 'Abs',
    secondaryMuscles: [],
    equipment: 'Bodyweight',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Hang from pull-up bar.',
      'Raise legs up straight until parallel to floor or higher.',
      'Control lowering.'
    ]
  },
  {
    id: 'core-ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    category: 'Abs',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Bodyweight',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80',
    instructions: [
      'Kneel with ab wheel under shoulders.',
      'Roll out smoothly keeping core tight, then pull back in.'
    ]
  }
];
