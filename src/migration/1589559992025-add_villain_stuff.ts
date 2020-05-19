import {MigrationInterface, QueryRunner} from "typeorm";

export class addVillainStuff1589559992025 implements MigrationInterface {
    name = 'addVillainStuff1589559992025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "henchman" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "henchmanCode" character varying NOT NULL, "villainCode" character varying NOT NULL, "title" character varying NOT NULL, "health" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_8d110351d3e59ac838abbb6abb7" UNIQUE ("henchmanCode"), CONSTRAINT "PK_85821376dee54b893309f16fb6f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TYPE "threat_tokentyperequired_enum" AS ENUM('ATTACK', 'MOVE', 'HEROIC_ACTIOM', 'WILD_CARD')`, undefined);
        await queryRunner.query(`CREATE TABLE "threat" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "modifyDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "threatCode" character varying NOT NULL, "villainCode" character varying NOT NULL, "tokenTypeRequired" "threat_tokentyperequired_enum" NOT NULL, "tokenNumberRequired" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_efecff53b2df867a14e65f35406" UNIQUE ("threatCode"), CONSTRAINT "PK_20b60375c43f5500f1405311873" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(50) array`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`, undefined);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying array`, undefined);
        await queryRunner.query(`DROP TABLE "threat"`, undefined);
        await queryRunner.query(`DROP TYPE "threat_tokentyperequired_enum"`, undefined);
        await queryRunner.query(`DROP TABLE "henchman"`, undefined);
    }

}
