import { MigrationInterface, QueryRunner } from "typeorm";

export class seedVillain4082382789002 implements MigrationInterface {
    name = 'seedVillain4082382789002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("villain")
            .values([
                {
                    villainCode: "ULTRON",
                    title: "Ultron",
                    health: [8, 10, 12, 14],
                    description: "Ultron’s master plan basically involves swarming the game with his replicating army of mechanical clones. He’s constantly adding his Thugs to the board, overflowing the Locations and spilling over to other ones. If he ever fills them all, victory is his. He’s also a very heavy hitter, using his Encephalo Ray to cripple Heroes everywhere. His Threats are mainly about duplicating himself and setting Ultron clones all over the place. He also uses his virus to compromise the Heroes’ ability to use all their actions.",
                    plotDescription: "When all Locations are fully assigned with Thugs or Civilians, the Heroes lost",
                    overFlowDescription: "Add the overflow Thug(s) to the next clockwise Location instead",
                    bamDescription: "Add 3 Thugs to the Location and deal 1 damage to Heroes in the same Location"
                }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}