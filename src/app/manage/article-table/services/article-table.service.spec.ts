import { TestBed, inject } from '@angular/core/testing';

import { ArticleTableService } from './article-table.service';

describe('ArticleTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleTableService]
    });
  });

  it('should be created', inject([ArticleTableService], (service: ArticleTableService) => {
    expect(service).toBeTruthy();
  }));
});
