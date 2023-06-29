import { Document, model, Schema } from 'mongoose';

interface Instructor extends Document {
  cpf: string;
  name: string;
  shift: string;
}

const instructorSchema = new Schema<Instructor>({
  cpf: { type: String, required: true },
  name: { type: String, required: true },
  shift: { type: String, required: true },
});

export const InstructorModel = model<Instructor>(
  'Instructor',
  instructorSchema,
);
