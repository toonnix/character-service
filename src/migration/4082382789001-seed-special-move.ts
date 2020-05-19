import { MigrationInterface, QueryRunner } from "typeorm";

export class seedSpecialMove4082382789001 implements MigrationInterface {
    name = 'seedSpecialMove4082382789001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("heroSpecialMove")
            .values([
                {
                    "specialMoveId": "HULK-1",
                    "title": "HULK SMASK!!!",
                    "description": "All ATTACK in this turn deal 2 damages"
                },
                {
                    "specialMoveId": "HULK-2",
                    "title": "ALWAYS ANGRY!!!",
                    "description": "deal 1 damages to everything in this location include Heros, Villain and fled a Civilian from the Location"
                },
                {
                    "specialMoveId": "HULK-3",
                    "title": "PUNY GOD!!!",
                    "description": "deal 3 damages to any Villain"
                },
                {
                    "specialMoveId": "SPIDERMAN-1",
                    "title": "Web Slinging",
                    "description": "Spidey can move to any locacation in the move phase"
                },
                {
                    "specialMoveId": "SPIDERMAN-2",
                    "title": "comes great responsibility",
                    "description": "save all Civilians in the current Location, and gain 1 ATTACK token"
                },
                {
                    "specialMoveId": "SPIDERMAN-3",
                    "title": "With great power",
                    "description": "knock out a gang of Thugs (clear all Thugs in cuurrent Location), gain 1 Heroic token"
                },
                {
                    "specialMoveId": "IRONMAN-1",
                    "title": "Stark Resources",
                    "description": "Distribute 2 MOVE token among Heros"
                },
                {
                    "specialMoveId": "IRONMAN-2",
                    "title": "Advanced Combat Analysis",
                    "description": "Distribute 2 ATTACK token among Heros"
                },
                {
                    "specialMoveId": "IRONMAN-3",
                    "title": "I'm Rich",
                    "description": "Draw 3 more cards"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}