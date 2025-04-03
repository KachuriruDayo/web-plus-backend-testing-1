import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should find a post', () => {
    expect(postsService.find('1')).toMatchObject({id: '1', text: 'Some pre-existing post'});
  });

  it('should add a new post', () => {
    expect(postsService.find('2')).toBeUndefined();

    postsService.create(post);

    expect(postsService.find('2')).toMatchObject({id: '2', text: 'Mocked post'});
  });
});