import {MigrationInterface, QueryRunner} from "typeorm";

export class addMoveAction1589658244464 implements MigrationInterface {
    name = 'addMoveAction1589658244464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "villainCard" ADD "moveActionMoveamount" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "villainCard" ADD "moveActionIsclockwise" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(50) array`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying array`, undefined);
        await queryRunner.query(`ALTER TABLE "villainCard" DROP COLUMN "moveActionIsclockwise"`, undefined);
        await queryRunner.query(`ALTER TABLE "villainCard" DROP COLUMN "moveActionMoveamount"`, undefined);
    }

}
