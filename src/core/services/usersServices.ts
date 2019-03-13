import callRemote from '../../callRemote';

export function getUsers() : Promise<{}> {
    return callRemote('ReactTestController.getAccounts');
}