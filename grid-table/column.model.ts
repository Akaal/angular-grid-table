export class Column {
    public name: string;
    public dataType: string;
    public header?: string;
}

export class Header {
    public name: string;
    public fieldName: string;
    public headercss: string;
    public dataType: string;
    public icon:string;
    public navigation?:string;
    public isEnabled?:boolean=true;
}

export class RowData{
    public Id: string;
    public column: string;
    public rowData: any;
}

export class PageData{
    public PageSize: number;
    public CurrentPage: number;
    public TotalPage: number;
    public TotalItems: number;
}


