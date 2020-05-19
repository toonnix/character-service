import {MigrationInterface, QueryRunner} from "typeorm";

export class addSpecialMove1589435712911 implements MigrationInterface {
    name = 'addSpecialMove1589435712911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "heroSpecialMove" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "specialMoveId" character varying(50) NOT NULL, "title" character varying(50) NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_f469557265106483841b20cb1c5" PRIMARY KEY ("id", "specialMoveId"))`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(50) array`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying array`, undefined);
        await queryRunner.query(`DROP TABLE "heroSpecialMove"`, undefined);
    }

}
