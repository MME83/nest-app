import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  indexed: boolean;

  @Prop()
  other: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index(
  { indexed: 1, name: 1 },
  {
    unique: true,
    partialFilterExpression: { indexed: true },
  },
);

export { UserSchema };
