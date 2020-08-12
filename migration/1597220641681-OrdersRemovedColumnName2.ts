import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersRemovedColumnName21597220641681 implements MigrationInterface {
    name = 'OrdersRemovedColumnName21597220641681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "Name2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ADD "Name2" nvarchar(255)`);
    }

}
