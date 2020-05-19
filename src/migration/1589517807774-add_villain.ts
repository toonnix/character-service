import {MigrationInterface, QueryRunner} from "typeorm";

export class addVillain1589517807774 implements MigrationInterface {
    name = 'addVillain1589517807774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "villain" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "villainCode" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "health" integer array NOT NULL, "plotDescription" character varying NOT NULL, "overFlowDescription" character varying NOT NULL, "bamDescription" character varying NOT NULL, CONSTRAINT "UQ_613acfc80674d1628388bf7eedf" UNIQUE ("villainCode"), CONSTRAINT "PK_079353d33993a4cdf4f8af3604a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(50) array`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying array`, undefined);
        await queryRunner.query(`DROP TABLE "villain"`, undefined);
    }

}
