/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Roles entity class.
 */
@RestDB.Schema.Entity('roles')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Role Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Role types.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public types!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Role description.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public description?: string;
}
