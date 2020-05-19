import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";
import { HeroCardLevel } from "src/entity/hero-card.entity";

export class seedIronManCard4082382789000 implements MigrationInterface {
    name = 'seedIronManCard4082382789000'

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
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD,
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.ATTACK
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.HEROIC_ACTIOM,
                        PowerTypeEnum.HEROIC_ACTIOM
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-1",
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-2",
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "IRON_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "HULK-3",
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                    ],
                    "heroCode": "IRON_MAN"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
