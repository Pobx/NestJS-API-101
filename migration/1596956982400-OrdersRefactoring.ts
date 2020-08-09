import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersRefactoring1596956982400 implements MigrationInterface {
    name = 'OrdersRefactoring1596956982400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ADD "Name" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "Name"`);
    }

}
