import Post from "domain/post/post.model";
import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  HasMany,
  Is,
  Default,
} from "sequelize-typescript";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

@Table({
  schema: "qabul",
  timestamps: true,
})
class applicant extends Model {
  @IsUUID(4)
  @Default(UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Is(EMAIL_REGEX)
  @Column
  email: string;

  @Column
  father_name: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  mobile_phone: string;

  @Column
  phone: string;

  @Column
  status: string;

  @Column
  zone: string;

  @Column
  profile_photo_id: string;

  @Column
  generation: string;
}

export default applicant;
