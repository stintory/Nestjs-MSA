import { SchemaOptions } from 'mongoose';
import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const options: SchemaOptions = {
  versionKey: false,
  collection: 'users',
};

@Schema(options)
export class User extends AbstractDocument {
  @Prop({
    required: true,
    unique: true,
  })
  serialCode: string;

  @Prop({
    required: true,
    default: 'user',
  })
  role: string;

  @Prop()
  username: string;

  @Prop()
  schoolName: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

const _UserSchema = SchemaFactory.createForClass(User);
_UserSchema.index({ serialCode: 1 });

export const UserSchema = _UserSchema;
