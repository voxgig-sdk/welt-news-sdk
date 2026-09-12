import { WeltNewsEntityBase } from '../WeltNewsEntityBase';
import type { WeltNewsSDK } from '../WeltNewsSDK';
import type { Control } from '../types';
import type { Article, ArticleListMatch } from '../WeltNewsTypes';
declare class ArticleEntity extends WeltNewsEntityBase<Article> {
    constructor(client: WeltNewsSDK, entopts: any);
    make(this: ArticleEntity): ArticleEntity;
    list(this: any, reqmatch?: ArticleListMatch, ctrl?: Control): Promise<ArticleEntity[]>;
}
export { ArticleEntity };
