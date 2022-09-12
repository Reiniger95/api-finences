import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class values1662931573391 implements MigrationInterface {
  private table = new Table({
    name: 'base_valores',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'idUser',
        type: 'varchar',
        length: '10'
      },
      {
        name: 'tipo',
        type: 'varchar',
        length: '100',
        isPrimary: false
      },
      {
        name: 'valor',
        type: 'double'
      },
      {
        name: 'entradaSaida',
        type: 'varchar',
        length: '100',
        isPrimary: false
      },
      {
        name: 'data',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false
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
