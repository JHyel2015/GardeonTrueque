import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, Timestamp } from 'typeorm';
import { EntityUsers } from '../users/users.entity';

@Entity('plants')
export class EntityPlants {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
            type: 'varchar',
            length: 100,
            name: 'type',
        })
    type: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'name',
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 255,
        name: 'image',
    })
    image: string;

    @Column({
        type: 'varchar',
        length: 255,
        name: 'description',
    })
    description: string;

    @Column({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: string;

    @ManyToOne( type => EntityUsers, user => user.id)
    user: EntityUsers;
}
