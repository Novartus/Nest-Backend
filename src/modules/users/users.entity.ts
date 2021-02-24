import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  //   @Column({
  //     type: DataType.INTEGER,
  //     allowNull: false,
  //     autoIncrement: true,
  //     unique: true,
  //     primaryKey: true,
  //   })
  //   public id: number;
  //Postgres will generate Id by Itself

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  has_access: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_verified: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  verification_code: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  verified_at: Date;
}
