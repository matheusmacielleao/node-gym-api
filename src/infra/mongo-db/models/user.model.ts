import { Document, model, Schema } from 'mongoose';

interface User extends Document {
  cpf: string;
  name: string;
}

const userSchema = new Schema<User>({
  cpf: { type: String, required: true },
  name: { type: String, required: true },
});

export const UserModel = model<User>('User', userSchema);
