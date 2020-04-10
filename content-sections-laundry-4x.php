<?php while(has_sub_field('content_section')) : ?>
	<?php if (get_row_layout() == 'one_column') : ?>
		<div class="one_column_section">
			<div class="container">
				<div class="column">
					<?php the_sub_field('column'); ?>
				</div>
			</div>
		</div>
	<?php elseif (get_row_layout() == 'two_column') : ?>
		<div class="two_column_section">
			<div class="container">
				<div class="column">
					<?php the_sub_field('left_column'); ?>
				</div>
				<div class="column">
					<?php the_sub_field('right_column'); ?>
				</div>
			</div>
		</div>
	<?php elseif (get_row_layout() == 'three_columns') : ?>
		<section class="three_column_section column_section">
			<div class="container">
				<div class="columns">
				<?php if(get_sub_field('dotted_line')) : ?>
					<div class="dotted_line"></div>
				<?php endif; ?>
				<?php if(have_rows('columns')) : ?>
					<?php while(have_rows('columns')) : the_row(); ?>
						<div class="column">
							<?php $icon_image = get_sub_field('icon'); ?>
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
				<?php $button_text = get_sub_field('button_text'); ?>
				<?php $button_link = get_sub_field('button_link'); ?>
				<?php if($button_text) { ?>
					<?php echo do_shortcode('[borderButton size="small" color="green" align="left" link="'.$button_link.'"]'.$button_text.'[/borderButton]'); ?>
				<?php } ?>
			</div>
		</section>
	<?php elseif (get_row_layout() == 'five_columns') : ?>
		<section class="five_column_section column_section">
			<div class="container">
				<div class="columns">
				<?php if(get_sub_field('dotted_line')) : ?>
					<div class="dotted_line"></div>
				<?php endif; ?>
				<?php if(have_rows('columns')) : ?>
					<?php while(have_rows('columns')) : the_row(); ?>
						<div class="column">
							<?php $icon_image = get_sub_field('icon'); ?>
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
				<?php $button_text = get_sub_field('button_text'); ?>
				<?php $button_link = get_sub_field('button_link'); ?>
				<?php if($button_text) { ?>
					<?php echo do_shortcode('[borderButton size="small" color="green" align="left" link="'.$button_link.'"]'.$button_text.'[/borderButton]'); ?>
				<?php } ?>
			</div>
		</section>
	<?php endif; ?>
<?php endwhile; ?>