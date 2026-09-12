export interface Article {
    author?: string;
    category?: string;
    description?: string;
    id?: string;
    imageUrl?: string;
    publishedAt?: string;
    title?: string;
    url?: string;
}
export interface ArticleListMatch {
    author?: string;
    category?: string;
    description?: string;
    id?: string;
    imageUrl?: string;
    publishedAt?: string;
    title?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
