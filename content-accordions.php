<?php if(have_rows('accordion_sections')) : ?>
		<section class="accordion_wrap">
	<?php while(have_rows('accordion_sections')) : the_row(); ?>
			<section class="accordion">
				<div class="accordion_header_container">
					<div class="accordion_header container">
						<?php $header_color = get_sub_field('header_color'); ?>
						<?php $header_image = get_sub_field('header_image'); ?>
						<div class="accordion_image">
							<?php if(get_sub_field('is_offset')) : ?>
								<img class="image_offset" src="<?php echo $header_image['url']; ?>" alt="<?php echo $header_image['alt']; ?>">
							<?php else : ?>
								<img src="<?php echo $header_image['url']; ?>" alt="<?php echo $header_image['alt']; ?>">
							<?php endif; ?>
						</div>
						<div class="header_copy">
							<h3 class="header_color_<?php echo $header_color; ?>"><?php the_sub_field('header_title'); ?></h3>
							<p><?php the_sub_field('header_copy'); ?></p>
						</div>
					</div>
					<div class="accordion_header_mobile_link">
						<div class="accordion_header_mobile">
							<div class="accordion_header_icon_mobile">
								<?php if(get_sub_field('mobile_icon')) : ?>
									<?php $mobileIcon = get_sub_field('mobile_icon'); ?>
									<img src="<?php echo $mobileIcon['url']; ?>" alt="<?php echo $mobileIcon['alt']; ?>">
								<?php endif; ?>
							</div>
							<div class="accordion_header_copy_mobile">
								<h2><?php the_sub_field('header_title'); ?></h2>
								<?php the_sub_field('mobile_copy'); ?>
							</div>
						</div>
					</div>
					<div class="accordion_expand_close"><a class="accordion-plus icon_color_<?php echo $header_color; ?>"></a></div>
				</div>
				<div class="accordion_content" style="display: none;">
					<div class="container">
					<?php while(has_sub_field('accordion_content')) : ?>
						<?php if (get_row_layout() == 'one_column') : ?>
							<div class="one_column_section">
								<div class="column">
									<?php the_sub_field('column_content'); ?>
								</div>
							</div>
						<?php elseif (get_row_layout() == 'two_columns') : ?>
							<div class="two_column_section">
								<div class="column">
									<?php the_sub_field('column_left'); ?>
								</div>
								<div class="column">
									<?php the_sub_field('column_right'); ?>
								</div>
							</div>
						<?php elseif (get_row_layout() == 'five_columns') : ?>
								<div class="five_column_section">
									<?php if(have_rows('columns')) : ?>
										<?php while(have_rows('columns')) : the_row(); ?>
											<div class="column">
												<?php $icon_image = get_sub_field('column_icon'); ?>
												<?php if($icon_image) { ?>
												<img src="<?php echo $icon_image['url']; ?>" alt="<?php echo $icon_image['alt']; ?>">
												<?php } ?>
												<div class="column_copy">
													<?php $header_color = get_sub_field('header_color'); ?>
													<h3 class="header_color_<?php echo $header_color; ?>"><?php the_sub_field('column_header'); ?></h3>
													<?php the_sub_field('copy_text'); ?>
												</div>
											</div>
										<?php endwhile; ?>
									<?php endif; ?>
								</div>
						<?php elseif (get_row_layout() == 'three_columns') : ?>
								<div class="three_column_section">
									<?php if(have_rows('columns')) : ?>
										<?php while(have_rows('columns')) : the_row(); ?>
											<div class="column">
												<?php $icon_image = get_sub_field('column_icon'); ?>
												<?php if($icon_image) : ?>
												<img src="<?php echo $icon_image['url']; ?>" alt="<?php echo $icon_image['alt']; ?>">
												<?php endif; ?>
												<div class="column_copy">
													<?php $header_color = get_sub_field('header_color'); ?>
													<h3 class="header_color_<?php echo $header_color; ?>"><?php the_sub_field('column_header'); ?></h3>
													<?php the_sub_field('copy_text'); ?>
												</div>
											</div>
										<?php endwhile; ?>
									<?php endif; ?>
								</div>
					<?php elseif (get_row_layout() == 'press') : ?>
							<div class="press_articles_section">
								<?php 
									$press_id = get_sub_field('press_type'); 
									$text_placement = get_sub_field('text_placement');
									$section_text = get_sub_field('section_bottom_text');
									
									$args = array('post_type' => 'press', 'tax_query' => array(array('taxonomy' => 'press-category', 'terms' => $press_id, 'field' => 'term_id')));
									
									$query = new WP_Query($args);
									
									$index = 0;
								?>
								<div class="press_row <?php if($press_id === 41) { echo 'press_release_row'; } ?>">
								<?php while ($query->have_posts()) : $query->the_post(); ?>
									<?php if($index === 5) { $index = 0; ?>
										<?php if($press_id != 41) { ?><span class="press_row_divider"></span><?php } ?>
									<?php } ?>
									<div class="press_article <?php if($press_id === 41) { echo 'press_release'; } else if($press_id === 42) { echo 'press_hit'; } ?>">
										<?php 
											$article_link = get_field('article_link'); 
											$download_link = get_field('download_file');
											if(!$article_link) {
												$article_link = get_the_permalink();
											}
											if(!$download_link) {
												$download_link = get_the_permalink();
											}
										?>
										<?php if($text_placement === 'top') { ?>
											<?php if($press_id === 42) { ?>
												<a href="<?php echo $article_link; ?>" class="article_title"><h3><?php the_title(); ?></h3></a>
												<?php the_field('article_sub_title'); ?>
											<?php } else { ?>
												<a href="<?php echo $download_link; ?>" class="article_title"><h3><?php the_title(); ?></h3></a>
												<?php if($press_id != 41) { ?>
													<a href="<?php echo $download_link; ?>" class="article_download" download>download pdf</a>
												<?php } ?>
											<?php } ?>
											
											<?php if($press_id === 41) { ?>
												<a href="<?php echo $download_link; ?>" class="article_image"><img src="<?php echo bloginfo('template_url'); ?>/images/press_release_image.png" alt="press_release"></a>
											<?php } else if($press_id === 42) { ?>
												<a href="<?php echo $article_link; ?>" class="article_image"><?php the_post_thumbnail('thumbnail'); ?></a>
											<?php } else { ?>
												<a href="<?php echo $download_link; ?>" class="article_image"><?php the_post_thumbnail('thumbnail'); ?></a>
											<?php } ?>
										<?php } else { ?>
											<?php if($press_id === 41) { ?>
												<a href="<?php echo $download_link; ?>" class="article_image"><img src="<?php echo bloginfo('template_url'); ?>/images/press_release_image.png" alt="press_release"></a>
											<?php } else if($press_id === 42) { ?>
												<a href="<?php echo $article_link; ?>" class="article_image"><?php the_post_thumbnail('thumbnail'); ?></a>
											<?php } else { ?>
												<a href="<?php echo $download_link; ?>" class="article_image"><?php the_post_thumbnail('thumbnail'); ?></a>
											<?php } ?>

											<?php if($press_id === 42) { ?>
												<a href="<?php echo $article_link; ?>" class="article_title"><h3><?php the_title(); ?></h3></a>
												<p><?php the_field('article_sub_title'); ?></p>
											<?php } else { ?>
												<a href="<?php echo $download_link; ?>" class="article_title"><h3><?php the_title(); ?></h3></a>
												<?php if($press_id != 41) { ?>
													<a href="<?php echo $download_link; ?>" class="article_download" download>download pdf</a>
												<?php } ?>
											<?php } ?>
										<?php } ?>
									</div>
									<?php $index++; ?>
								<?php endwhile; ?>
								</div>
								<?php wp_reset_postdata(); ?>
								<?php if($section_text) { ?>
									<p><?php echo $section_text; ?></p>
								<?php } ?>
							</div>
					<?php endif; ?>
				<?php endwhile; ?>
				</div>
			</section>
	<?php endwhile; ?>
		</section>
<?php endif; ?>