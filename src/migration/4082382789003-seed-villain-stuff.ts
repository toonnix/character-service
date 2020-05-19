import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";

export class seedVillainStuff4082382789003 implements MigrationInterface {
    name = 'seedVillainStuff4082382789003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("threat")
            .values([
                {
                    villainCode: "ULTRON",
                    threatCode: "ULTRON-1",
                    tokenTypeRequired: PowerTypeEnum.HEROIC_ACTIOM,
                    description: "Add 1 Thug token to the Location",
                    tokenNumberRequired: "3"
                },
                {
                    villainCode: "ULTRON",
                    threatCode: "ULTRON-2",
                    tokenTypeRequired: PowerTypeEnum.ATTACK,
                    description: "Add 3 Thug token to the Location or The Heroes in the Location spend all token in hand instead",
                    tokenNumberRequired: "3"
                }
            ])
            .execute()
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("henchman")
            .values([
                {
                    villainCode: "ULTRON",
                    henchmanCode: "ULTRON-1",
                    title: "Ultron Clone",
                    health: 6,
                    description: "Deal 2 damages to the Heroes in the Location"
                },
                {
                    villainCode: "ULTRON",
                    henchmanCode: "ULTRON-2",
                    title: "Ultron mini",
                    health: 4,
                    description: "Deal 1 damages to the Heroes in the Location and add 1 Thug in adjacent Location"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}