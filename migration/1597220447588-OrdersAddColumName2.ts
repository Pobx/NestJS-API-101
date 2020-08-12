import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersAddColumName21597220447588 implements MigrationInterface {
    name = 'OrdersAddColumName21597220447588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ADD "Name2" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "Name2"`);
    }

}
