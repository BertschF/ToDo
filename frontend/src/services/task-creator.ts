import { IProject } from './../model/project';
import { ITag } from './../model/tag';
import { addDays } from './date';

type TResult = ICreation | string;

function initIdentifiers(): Map<string, TResult> {
    const result = new Map();

    result.set('morgen', new CreationDate(addDays(new Date(Date.now()), 1)));
    result.set('heute', new CreationDate(new Date()));
    result.set('#health', new CreationProject({ id: '123', name: 'health', color: 'blue' }));
    result.set('@training', new CreationTag({ id: '1223', name: 'training', color: 'yellow' }));
    result.set('@bizeps', new CreationTag({ id: '1234', name: 'bizeps', color: 'green' }));

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

enum CreationType {
    Date, Project, Tag,
}

interface ICreation {
    readonly type: CreationType;
}

class CreationDate implements ICreation {
    public readonly type = CreationType.Date;
    public readonly date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

// tslint:disable-next-line: max-classes-per-file
class CreationProject implements ICreation {
    public readonly type = CreationType.Project;
    public readonly project: IProject;

    constructor(project: IProject) {
        this.project = project;
    }
}

// tslint:disable-next-line: max-classes-per-file
class CreationTag implements ICreation {
    public readonly type = CreationType.Tag;
    public readonly tag: ITag;

    constructor(tag: ITag) {
        this.tag = tag;
    }
}
