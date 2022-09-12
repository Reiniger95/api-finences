import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class users1662480136662 implements MigrationInterface {
  private table = new Table({
    name: 'base_usuarios',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'nome',
        type: 'varchar',
        length: '100',
        isNullable: false
      },
      {
        name: 'senha',
        type: 'varchar',
        length: '100',
        isNullable: false
      },
      {
        name: 'email',
        type: 'varchar',
        length: '100',
        isNullable: false,
        isPrimary: true
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'now()'
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'now()'
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
