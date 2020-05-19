import {MigrationInterface, QueryRunner} from "typeorm";

export class addVillianCard1589657676571 implements MigrationInterface {
    name = 'addVillianCard1589657676571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "villainCard" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "villainCode" character varying NOT NULL, "villainCardCode" character varying NOT NULL, "isActivateBam" boolean NOT NULL, "cardEffect" character varying NOT NULL, "leftLocationAddthug" integer NOT NULL, "leftLocationAddcivillian" integer NOT NULL, "middleLocationAddthug" integer NOT NULL, "middleLocationAddcivillian" integer NOT NULL, "rightLocationAddthug" integer NOT NULL, "rightLocationAddcivillian" integer NOT NULL, CONSTRAINT "UQ_48466bffe7161ff4092ef03dcc6" UNIQUE ("villainCardCode"), CONSTRAINT "PK_a4fac5482bd363a6f653fef0411" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(50) array`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying array`, undefined);
        await queryRunner.query(`DROP TABLE "villainCard"`, undefined);
    }

}
