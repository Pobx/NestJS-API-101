import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdersAddColumn31597285956531 implements MigrationInterface {
    name = 'OrdersAddColumn31597285956531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ADD "Name3" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" DROP COLUMN "Name3"`);
    }

}
