import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Address{

    @PrimaryGeneratedColumn()
    public id: number

    @Column({nullable:true})
    public street: string;

    @Column({nullable:true})
    public city: string;

    @Column({nullable:true})
    public country: string;

    @OneToOne(() => User, user => user.address)
    public user: User

    
}