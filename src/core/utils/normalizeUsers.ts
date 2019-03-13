import { normalize, schema } from 'normalizr';
import { mapKeys, camelCase } from 'lodash';

import { User } from '../types/userTypes';

const user = new schema.Entity(
    'users',
    {},
    {
        idAttribute: 'Id',
        processStrategy: (user) => mapKeys(user, (value, key) => camelCase(key))
    }
);

export default function normalizeUsers(users: User[]){
    const { entities } = normalize(users, [user]);
    return entities.users;
}