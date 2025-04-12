import { EntitySchema } from 'typeorm';

export const Product = new EntitySchema({
    name: 'Product',
    tableName: 'products',
    columns: {
        id: {
            primary: true,
            type: 'uuid',
            generated: 'uuid',
        },
        name: {
            type: 'varchar',
            nullable: false,
        },
        description: {
            type: 'text',
            nullable: false,
        },
        price: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: false,
        },
        category: {
            type: 'varchar',
            nullable: true,
        },
        stock: {
            type: 'int',
            default: 0,
        },
        imageUrl: {
            type: 'varchar',
            nullable: true,
        },
        createdAt: {
            type: 'timestamp',
            createDate: true,
        },
        updatedAt: {
            type: 'timestamp',
            updateDate: true,
        },
    },
});
