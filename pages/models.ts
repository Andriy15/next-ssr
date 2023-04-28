export interface IPost {
    map(arg0: (post: IPost) => JSX.Element): import("react").ReactNode;
    userId: number;
    id: number;
    title: string;
    body: string;
}