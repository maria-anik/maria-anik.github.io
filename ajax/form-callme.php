<div class="form-popup form-popup--min">
	<div class="fancybox-form-close"></div>
	<div class="form-popup__wr">
		<div class="form-popup__title">Заказать звонок</div>
		<form id="form_1" action="ajax/form-callme.php" method="post" class="form footer__form">
			<div class="form-item">
				<input type="text" name="form[NAME]" placeholder="Ваше имя">
			</div>
			<div class="form-item">
				<input type="text" name="form[PHONE]" class="mask" placeholder="+7(___)-___-__-__">
			</div>
			<div class="form-item form-item--check ">
				<input type="checkbox" value="Y" id="user_consent" name="user_consent" checked="checked">
				<label for="user_consent">
					<span>Нажимая кнопку «Заказать», вы соглашаетесь с <a href="#">условиями обработки личных данных</a></span>
				</label>
			</div>
			<input type="submit" onclick="javascript:$('#form_1').submit();return false;" class="btn form-btn " value="Заказать">
		</form>
		<script>
			(function($){
				$(".form-popup .mask").inputmask("+7(999)-999-99-99");
				$("#form_1").submit(function() {
				//sendEvent("order-start", "order");
					$(this).append('<input type="hidden" name="submit" value="Y">');
					$(this).ajaxSubmit({
						url: "ajax/form-callme.php",
						complete: function(xhr) {
							var data = {data:xhr.responseText};
							data = '<div>'+data.data+'</div>';
							data = $(data).find('.popup-form').html();
							$("#form_1").closest('.popup-form').html(data);
						}
					});
					return false;
				});	
			})(jQuery);
		</script>
	</div>
</div>