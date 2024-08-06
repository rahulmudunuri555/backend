import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeconnection from '../congfig';

interface PatientAttributes {
    patientId: number;
    fullName: string;
    age: number;
    diagnosis: string;
}

export interface PatientInput extends Optional<PatientAttributes, 'patientId'> {}
export interface PatientOutput extends Required<PatientAttributes> {}

class Patient extends Model<PatientAttributes, PatientInput> implements PatientAttributes {
    public patientId!: number;
    public fullName!: string;
    public age!: number;
    public diagnosis!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Patient.init(
    {
        patientId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        diagnosis: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'patients',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Patient;
