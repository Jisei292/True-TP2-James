<?php
/**
 * Template part l'affichage des bloc de cours dans front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4
 */
?>

<!-- flip-card des projets -->
<article class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <?php the_post_thumbnail( 'thumbnail' ); ?>
    </div>
    <div class="flip-card-back">
      <a href="<?php echo get_permalink() ?>"><?php the_title() ?></a>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</article>