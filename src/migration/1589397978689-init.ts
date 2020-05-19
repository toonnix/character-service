import {MigrationInterface, QueryRunner} from "typeorm";

export class init1589397978689 implements MigrationInterface {
    name = 'init1589397978689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hero" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "heroCode" character varying(50) NOT NULL, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "description" character varying NOT NULL, "alias" character varying(50) array, CONSTRAINT "PK_313d51d6899322b85f2df99ccde" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TYPE "heroPower_powertype_enum" AS ENUM('ATTACK', 'MOVE', 'HEROIC_ACTIOM', 'WILD_CARD')`, undefined);
        await queryRunner.query(`CREATE TABLE "heroPower" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "heroPowerId" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "description" character varying(255) NOT NULL, "powerType" "heroPower_powertype_enum" NOT NULL, CONSTRAINT "PK_c5c67affbb9395b8a3bf6af793d" PRIMARY KEY ("id", "heroPowerId"))`, undefined);
        await queryRunner.query(`CREATE TYPE "heroCard_cardlevel_enum" AS ENUM('COMMON', 'UN_COMMON', 'RARE')`, undefined);
        await queryRunner.query(`CREATE TYPE "heroCard_heropowers_enum" AS ENUM('ATTACK', 'MOVE', 'HEROIC_ACTIOM', 'WILD_CARD')`, undefined);
        await queryRunner.query(`CREATE TABLE "heroCard" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "heroCardId" SERIAL NOT NULL, "cardLevel" "heroCard_cardlevel_enum" NOT NULL, "heroPowers" "heroCard_heropowers_enum" array, "specialMoveId" character varying, "heroCode" character varying NOT NULL, CONSTRAINT "PK_1f8536c6bb5d822fd44e43302a1" PRIMARY KEY ("id", "heroCardId"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "heroCard"`, undefined);
        await queryRunner.query(`DROP TYPE "heroCard_heropowers_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "heroCard_cardlevel_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "heroPower"`, undefined);
        await queryRunner.query(`DROP TYPE "heroPower_powertype_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "hero"`, undefined);
    }

}
