
export type DataType = {
    id: string;
    configKey: string;
    description: string;
}

export type RegisterDayModel = {
    object: string;
    results: Array<RegisterDayPropertiesModel>;
}

export type RegisterDayPropertiesModel = {
    created_time: string;
    properties: {
        Project: ProjectModel;
        EndHour: EndHourModel;
        StartHour: StartHourModel;
        Description: DescriptionModel;
    }
}

export type Properties = {
    Project: string;
    EndHour: string;
    StartHour: string;
    Description: string;
}

type ProjectModel = {
    id: string;
    type: string;
    rich_text: RichTextModel[];
}

type RichTextModel = {
    plain_text: string;
}

type EndHourModel = {
    id: string;
    type: string;
    date: {
        start: string;
        end: string;
        time_zone: string;
    }
}

type StartHourModel = {
    id: string;
    type: string;
    date: {
        start: string;
        end: string;
        time_zone: string;
    }
}

type DescriptionModel = {
    id: string;
    type: string;
    title: Array<TitleModel>;
}

type TitleModel = {
    plain_text: string;
}
