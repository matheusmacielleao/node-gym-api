export enum MuscleGroup {
  Chest = 'Chest muscles',
  Back = 'Back muscles',
  Shoulders = 'Shoulder muscles',
  Arms = 'Arm muscles',
  Abdominals = 'Abdominal muscles',
  Legs = 'Leg muscles',
  Core = 'Core muscles',
  Others = 'Other muscles',
}

export enum ChestMuscles {
  PectoralisMajorUpper = 'Pectoralis major (upper)',
  PectoralisMajorMiddle = 'Pectoralis major (middle)',
  PectoralisMajorLower = 'Pectoralis major (lower)',
  AnteriorDeltoids = 'Anterior deltoids',
  TricepsBrachii = 'Triceps brachii',
}

export enum BackMuscles {
  LatissimusDorsi = 'Latissimus dorsi',
  Trapezius = 'Trapezius',
  Rhomboids = 'Rhomboids',
  ErectorSpinae = 'Erector spinae',
}

export enum ShoulderMuscles {
  DeltoidsAnterior = 'Deltoids (anterior)',
  DeltoidsLateral = 'Deltoids (lateral)',
  DeltoidsPosterior = 'Deltoids (posterior)',
  RotatorCuffSupraspinatus = 'Rotator cuff (supraspinatus)',
  RotatorCuffInfraspinatus = 'Rotator cuff (infraspinatus)',
  RotatorCuffTeresMinor = 'Rotator cuff (teres minor)',
  RotatorCuffSubscapularis = 'Rotator cuff (subscapularis)',
}

export enum ArmMuscles {
  BicepsBrachii = 'Biceps brachii',
  Brachialis = 'Brachialis',
  Brachioradialis = 'Brachioradialis',
  ForearmFlexors = 'Forearm flexor muscles',
  ForearmExtensors = 'Forearm extensor muscles',
}

export enum AbdominalMuscles {
  RectusAbdominis = 'Rectus abdominis',
  ObliquesInternal = 'Obliques (internal)',
  ObliquesExternal = 'Obliques (external)',
  TransversusAbdominis = 'Transversus abdominis',
}

export enum LegMuscles {
  QuadricepsRectusFemoris = 'Quadriceps (rectus femoris)',
  QuadricepsVastusLateralis = 'Quadriceps (vastus lateralis)',
  QuadricepsVastusIntermedius = 'Quadriceps (vastus intermedius)',
  QuadricepsVastusMedialis = 'Quadriceps (vastus medialis)',
  HamstringsBicepsFemoris = 'Hamstrings (biceps femoris)',
  HamstringsSemitendinosus = 'Hamstrings (semitendinosus)',
  HamstringsSemimembranosus = 'Hamstrings (semimembranosus)',
  GlutesMaximus = 'Glutes (gluteus maximus)',
  GlutesMedius = 'Glutes (gluteus medius)',
  GlutesMinimus = 'Glutes (gluteus minimus)',
  CalvesGastrocnemius = 'Calves (gastrocnemius)',
  CalvesSoleus = 'Calves (soleus)',
}

export enum CoreMuscles {
  TransversusAbdominis = 'Transversus abdominis',
  RectusAbdominis = 'Rectus abdominis',
  Obliques = 'Obliques',
  ErectorSpinae = 'Erector spinae',
  Multifidus = 'Multifidus',
  PelvicFloorMuscles = 'Pelvic floor muscles',
}
export enum OtherMuscles {
  QuadratusLumborum = 'Quadratus lumborum',
  HipFlexors = 'Hip flexors',
  Adductors = 'Adductors',
  Abductors = 'Abductors',
  TibialisAnterior = 'Tibialis anterior',
}

export type MuscleType =
  | ChestMuscles
  | BackMuscles
  | ShoulderMuscles
  | ArmMuscles
  | AbdominalMuscles
  | LegMuscles
  | CoreMuscles
  | OtherMuscles;
