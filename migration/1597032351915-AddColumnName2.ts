import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnName21597032351915 implements MigrationInterface {
    name = 'AddColumnName21597032351915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ALTER COLUMN "Name" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ALTER COLUMN "Name" nvarchar(255) NOT NULL`);
    }

}
