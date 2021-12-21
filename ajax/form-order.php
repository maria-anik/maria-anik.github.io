
<div class="form-popup form-popup--min">
	<?// var_dump($REQUEST)?>
	<div class="fancybox-form-close"></div>
	<div class="form-popup__wr">
		<div class="form-popup__title">Заказать дизайн-проект <span></span></div>
		<form id="form_2" action="ajax/form-callme.php" method="post" class="form footer__form">
			<div class="form-item">
				<input type="text" name="form[NAME]" placeholder="Ваше имя">
			</div>
			<div class="form-item">
				<input type="text" name="form[PHONE]" class="mask" placeholder="+7(___)-___-__-__">
			</div>
			<div class="form-item form-item--ratio">
				<div class="form-item__title">Тип объекта</div>
				<div class="form-item__radio">
					<input type="radio" id="radio_pop_1" name="form[TYPE]" value="дом">
					<label for="radio_pop_1">Дом</label>
				</div>
				<div class="form-item__radio">
					<input type="radio" id="radio_pop_2" name="form[TYPE]" value="квартира"> 
					<label for="radio_pop_2">Квартира</label>
				</div>
				<div class="form-item__radio">
					<input type="radio" id="radio_pop_3" name="form[TYPE]" value="офис">
					<label for="radio_pop_3">Офис</label>
				</div>
				<div class="form-item__radio">
					<input type="radio" id="radio_pop_4" name="form[TYPE]" value="другое">
					<label for="radio_pop_4">Другое</label>
				</div>
			</div>
			<div class="form-item form-item--check ">
				<input type="checkbox" value="Y" id="user_consent" name="user_consent" checked="checked">
				<label for="user_consent">
					<span>Нажимая кнопку «Заказать», вы соглашаетесь с <a href="#">условиями обработки личных данных</a></span>
				</label>
			</div>

			<input type="submit" onclick="javascript:$('#form_2').submit();return false;" class="btn form-btn " value="Заказать">
			<input type="hidden" name="form[PRODUCT]" value="">
		</form>
		<script>
			(function($){
				$(".form-popup .mask").inputmask("+7(999)-999-99-99");
				$("#form_2").submit(function() {
				//sendEvent("order-start", "order");
					$(this).append('<input type="hidden" name="submit" value="Y">');
					$(this).ajaxSubmit({
						url: "ajax/form-callme.php",
						complete: function(xhr) {
							var data = {data:xhr.responseText};
							data = '<div>'+data.data+'</div>';
							data = $(data).find('.popup-form').html();
							$("#form_2").closest('.popup-form').html(data);
						}
					});
					return false;
				});	
			})(jQuery);
		</script>
	</div>
</div>