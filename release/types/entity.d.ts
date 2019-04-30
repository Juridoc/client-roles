/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Roles entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Role Id.
     */
    id: string;
    /**
     * Role types.
     */
    types: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Role description.
     */
    description?: string;
}
