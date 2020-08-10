import {MigrationInterface, QueryRunner} from "typeorm";

export class InitializeTables1597030375546 implements MigrationInterface {
    name = 'InitializeTables1597030375546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Orders" ("Id" int NOT NULL IDENTITY(1,1), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_7e7123921ed0a70c6e8336b5b2f" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_d443fb19b997c2b9fd302317c72" DEFAULT getdate(), "Name" nvarchar(255) NOT NULL, "isActive" bit NOT NULL, CONSTRAINT "PK_a6153b989249812bfb856971d81" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Items" ("Id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255), "createdDate" datetime2 NOT NULL CONSTRAINT "DF_236fb0981b186cd036bc912f4c9" DEFAULT getdate(), "updatedDate" datetime2 NOT NULL CONSTRAINT "DF_89bdcd878a03d9d72e8e132808f" DEFAULT getdate(), "isActive" bit NOT NULL, "orderId" int, CONSTRAINT "PK_d444b385a47acde1d7abfbe7154" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "Items" ADD CONSTRAINT "FK_692d04ded18125142977f5ed6f6" FOREIGN KEY ("orderId") REFERENCES "Orders"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Items" DROP CONSTRAINT "FK_692d04ded18125142977f5ed6f6"`);
        await queryRunner.query(`DROP TABLE "Items"`);
        await queryRunner.query(`DROP TABLE "Orders"`);
    }

}
