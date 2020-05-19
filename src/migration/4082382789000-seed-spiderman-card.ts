import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";
import { HeroCardLevel } from "src/entity/hero-card.entity";

export class seedSpiderManCard4082382789000 implements MigrationInterface {
    name = 'seedSpiderManCard4082382789000'

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
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.COMMON,
                    "heroPowers": [
                        PowerTypeEnum.HEROIC_ACTIOM,
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.ATTACK,
                        PowerTypeEnum.ATTACK
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                        PowerTypeEnum.MOVE
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                        PowerTypeEnum.HEROIC_ACTIOM
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.UN_COMMON,
                    "heroPowers": [
                        PowerTypeEnum.HEROIC_ACTIOM,
                        PowerTypeEnum.HEROIC_ACTIOM
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "SPIDERMAN-1",
                    "heroPowers": [
                        PowerTypeEnum.HEROIC_ACTIOM,
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "SPIDERMAN-2",
                    "heroPowers": [
                        PowerTypeEnum.WILD_CARD
                    ],
                    "heroCode": "SPIDER_MAN"
                },
                {
                    "cardLevel": HeroCardLevel.RARE,
                    "specialMoveId": "SPIDERMAN-3",
                    "heroPowers": [
                        PowerTypeEnum.MOVE,
                    ],
                    "heroCode": "SPIDER_MAN"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
