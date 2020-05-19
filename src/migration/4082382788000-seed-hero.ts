import { MigrationInterface, QueryRunner } from "typeorm";
import { PowerTypeEnum } from "src/entity/hero-power.entity";
import { HeroCardLevel } from "src/entity/hero-card.entity";

export class seedHero4082382788000 implements MigrationInterface {
    name = 'seedHero4082382788000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("heroPower")
            .values([
                { powerType: PowerTypeEnum.ATTACK, title: "Attack", description: "Attack villain" },
                { powerType: PowerTypeEnum.MOVE, title: "Move", description: "Movae to a next location" },
                { powerType: PowerTypeEnum.HEROIC_ACTIOM, title: "Heroic Action", description: "Ka Booom" },
                { powerType: PowerTypeEnum.WILD_CARD, title: "Wild card (*)", description: "Select any power you like" },
            ])
            .execute()
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into("hero")
            .values([
                {
                    heroCode: "HULK",
                    name: "Hulk",
                    firstName: "Bruce",
                    lastName: "Banner",
                    description: "A massive dose of gamma radiation transformed the brilliant but meek scientist Bruce Banner's DNA, awakening the hidden, adrenaline-fed hero in his genes... HULK! A hero of few words and incredible strength, the Hulk has long been pursued by those who want to use his immense power for their own purposes, or by those who thought the Jade Giant's anger was too dangerous to be controlled. Now, as a member of the Avengers, Hulk helps smash the unimaginable threats that no Hero could face alone, hoping to at least prove to the world that he is the strongest HERO there is!",
                    alias: [
                        "The Green",
                        "Smasher"
                    ]
                },
                {
                    heroCode: "SPIDER_MAN",
                    name: "Spider-Man",
                    firstName: "Peter",
                    lastName: "Parker",
                    description: "The bite from a radioactive spider granted Peter Parker amazing arachnid-like powers. After losing his beloved Uncle Ben to a burglar, grief- stricken Peter vowed to use his incredible abilities to protect his city as the Amazing Spider-Man. Peter’s trials taught him an invaluable lesson: with great power, there must also come great responsibility.",
                    alias: [
                        "Web Head",
                        "Friend or Foe"
                    ]
                },
                {
                    heroCode: "IRON_MAN",
                    name: "Iron Man",
                    firstName: "Tony",
                    lastName: "Stark",
                    description: "When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world's greatest fighting machine. Tony has primed his ultra modern creation for waging state of the art campaigns, attaining sonic flight, and defending the greater good! He is the Armored Avenger - driven by a heart that is part machine, but all hero! He is the INVINCIBLE IRON MAN!",
                    alias: [
                        "Playboy",
                        "Billionaire",
                        "Iron Knight"
                    ]
                },
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
