import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";

export class seedVillainCard4082382789004 implements MigrationInterface {
    name = 'seedVillainCard4082382789004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("villainCard")
            .values([
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-1",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-2",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 1,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-3",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 2
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 1,
                        isClockwise: false
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-4",
                    isActivateBam: false,
                    leftLocation: {
                        addThug: 2,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 3,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-5",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-6",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    middleLocation: {
                        addThug: 2,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 0,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-7",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-8",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-9",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-10",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 1,
                        addCivillian: 1
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 1
                    },
                    rightLocation: {
                        addThug: 1,
                        addCivillian: 0
                    },
                    cardEffect: "",
                    moveAction: {
                        moveAmount: 2,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-11",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    rightLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    cardEffect: "Deal 2 damages to any Heroes in this Location and 1 damage to any Heroes in adjacent Locations",
                    moveAction: {
                        moveAmount: 0,
                        isClockwise: true
                    },
                },
                {
                    villainCode: "ULTRON",
                    villainCardCode: "ULTRON-12",
                    isActivateBam: true,
                    leftLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    middleLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    rightLocation: {
                        addThug: 0,
                        addCivillian: 0
                    },
                    cardEffect: "Add 3 [Thugs] to this Location",
                    moveAction: {
                        moveAmount: 1,
                        isClockwise: false
                    },
                },
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}