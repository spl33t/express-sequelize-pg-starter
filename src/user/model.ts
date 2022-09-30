import { DataTypes } from "sequelize";
import { sequelize } from "../core/database";

export const User = sequelize.define('user', {
  login: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
})

