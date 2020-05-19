import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";
import { HeroCardLevel } from "src/entity/hero-card.entity";

export class seedHulkCard4082382789000 implements MigrationInterface {
    name = 'seedHulkCard4082382789000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("heroCard")
            .values([
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD,
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.ATTACK
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.HEROIC_ACTIOM,
                        PowerTypeEnum.HEROIC_ACTIOM
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-1",
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-2",
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "HULK"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-3",
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                    ],
                    "heroCode": "HULK"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
