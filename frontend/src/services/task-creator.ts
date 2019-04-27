import {IProject} from '@/model/project';
import {ITag} from '@/model/tag';
import {addDays} from './date';

function initIdentifiers(): Map<string, ICreation> {
    const result = new Map();

    result.set('morgen', new CreationDate(addDays(new Date(), 1)));
    result.set('heute', new CreationDate(new Date()));
    result.set('#health', new CreationProject({ id: '123', name: 'health', color: 'blue' }));
    result.set('@training', new CreationTag({ id: '1223', name: 'training', color: 'yellow' }));
    result.set('@bizeps', new CreationTag({ id: '1234', name: 'bizeps', color: 'green' }));
    return result;
}

export function parseTaskString(s: string): ICreation[] {
    const identifier = initIdentifiers();
    const result: ICreation[] = [];

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
            result.push(new CreationText(leftOver.substring(0, lowestIndex)));
            result.push(identifier.get(lowestKey) as ICreation);
            leftOver = leftOver.substring(lowestIndex + lowestKey.length);
        }

    }

    result.push(new CreationText(leftOver));

    return result;
}

export enum CreationType {
    Date, Project, Tag, Text,
}

export interface ICreation {
    readonly type: CreationType;
}

export class CreationText implements ICreation {
    public readonly type = CreationType.Text;
    public readonly text: string;

    constructor(text: string) {
        this.text = text;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class CreationDate implements ICreation {
    public readonly type = CreationType.Date;
    public readonly date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class CreationProject implements ICreation {
    public readonly type = CreationType.Project;
    public readonly project: IProject;

    constructor(project: IProject) {
        this.project = project;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class CreationTag implements ICreation {
    public readonly type = CreationType.Tag;
    public readonly tag: ITag;

    constructor(tag: ITag) {
        this.tag = tag;
    }
}
