<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Article;

class ArticleControllerTest extends TestCase
{
    use RefreshDataBase;
    /**
     * @test
     */
    public function itListsArticles()
    {
        $response = $this->get('/api/articles');

        $response->assertOk();

        $this->assertCount(20 , $response->json("data"));

        //dd($response->json("data"));
    }

    /**
     * @test
     */

     public function itCreateArticle()
     {
        $response = $this->post('/api/articles', [
            'titre' => 'Article 1',
            'contenu' => 'Mon premier article',
            'categorie' => 'football',
            'image' => 'image',
        ]);

        $articles = Article::all();
        $article = Article::first();

        $response->assertOk();


        $this->assertEquals(1, $articles->count());
        $this->assertEquals('Article 1', $article->titre);
     }


     /**
     * @test
     */

     public function itDeletesArticles()
     {
        $this->seed();

        $article = Article::first();

        $this->delete('/api/articles/'.$article->id);

        $response->assertNoContent();

        $this->assertEquals(19, Article::count());
     }
}
