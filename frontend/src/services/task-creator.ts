import { IProject } from './../model/project';
import { ITag } from './../model/tag';
import { addDays } from './date';

type TResult = ITag | IProject | Date | string;

function initIdentifiers(): Map<string, TResult> {
    const result = new Map();

    result.set('morgen', addDays(new Date(Date.now()), 1));
    result.set('heute', new Date(Date.now()));
    result.set('#health', { id: '123', name: 'health', color: 'blue' } as IProject);
    result.set('@training', { id: '1223', name: 'training', color: 'yellow' } as ITag);
    result.set('@bizeps', { id: '1234', name: 'bizeps', color: 'green' } as ITag);

    return result;
}

export function parseTaskString(s: string): TResult[] {
    const identifier = initIdentifiers();
    const result: TResult[] = [];

    let leftOver = s.toLowerCase();
    let lowestIndex = -1;

    while (lowestIndex !== Number.MAX_SAFE_INTEGER) {

        lowestIndex = Number.MAX_SAFE_INTEGER;
        let lowestKey = '';

        identifier.forEach((_, key) => {
            const index = leftOver.indexOf(key);

            if (index !== -1 && index < lowestIndex) {
                lowestKey = key;
                lowestIndex = index;
            }
        });

        if (lowestIndex !== Number.MAX_SAFE_INTEGER) {
            result.push(leftOver.substring(0, lowestIndex));
            result.push(identifier.get(lowestKey) as TResult);
            leftOver = leftOver.substring(lowestIndex + lowestKey.length);
        }

    }

    result.push(leftOver);

    return result;
}
