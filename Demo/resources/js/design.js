// html 기본 폰트 사이트
var winW = $(window).width();
function fontSize(w) {
	var fontSize = w / 5.12;
	$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');	
}
fontSize(winW);
$(window).resize(function(){
	var winW = $(window).width();
	fontSize(winW);
});

//레이어 팝업
function layer_open(obj){
	var temp = $('#'+obj);
	var bg = temp.parent().find(".bg").hasClass('bg');
	if(bg){
		temp.parent().show();
	}
	temp.find('.btn_cls').click(function(e){
		if(bg){
			$('.ly_pop').hide();
		}
		e.preventDefault();
	});
}
function layer_close(){
	$('.ly_pop').hide();
}
//영역 외 클릭 팝업 닫기
/*$(function(){
	$('.ly_pop').bind("click touchend", function(e) {
		if(!$('.ly_pop').hasClass('full')){
			if(!$('.ele').has(e.target).length) {
				layer_close();
			}
		}
	});
});*/

// form
$(function(){
	var input = $('input[type=text], input[type=password], input[type=tel], input[type=email], input[type=number], select, textarea, .input');
	var row = $('.input input');
	
	// input Focus
	input.focus(function(){
		$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
	}).blur();
	
	row.focus(function(){
		$(this).parents('.input').addClass('focus');
		$(this).removeClass('focus');
	}).blur(function(){
		$(this).parents('.input').removeClass('focus');
	}).blur();
	
	// placeholder 적용 안될 때, 주민번호 뒤 첫째 자리 동그라미(본인인증)
	var i_text = $('.input_help>label, .input_myid .num>label').next('.i_text');
	$('.input_help>label, .input_myid.num>label').css('position','absolute');
	i_text.focus(function(){
		$(this).prev('label').css('visibility','hidden');
	}).blur(function(){
		if($(this).val() == ''){
			$(this).prev('label').css('visibility','visible');
		} else {
			$(this).prev('label').css('visibility','hidden');
		}
	}).change(function(){
		if($(this).val() == ''){
			$(this).prev('label').css('visibility','visible');
		} else {
			$(this).prev('label').css('visibility','hidden');
		}
	}).blur();
	
	// 비밀번호 설정 입력상태 표시
	/*$('.input_mark input').bind("keyup input", function(e) {
		var keyCode = e.keyCode || e.which;
		var byte = $(this).val();
		var del = $(this).val() + 1;
		$('.input_mark .mark i').removeClass();
		if (byte.length == 1) {
			$('.input_mark .mark i:eq(0)').addClass('on');
		} else if (byte.length == 2) {
			$('.input_mark .mark i:eq(0), .input_mark .mark i:eq(1)').addClass('on');
		} else if (byte.length == 3) {
			$('.input_mark .mark i:eq(0), .input_mark .mark i:eq(1), .input_mark .mark i:eq(2)').addClass('on');
		} else if (byte.length == 4) {
			$('.input_mark .mark i:eq(0), .input_mark .mark i:eq(1), .input_mark .mark i:eq(2), .input_mark .mark i:eq(3)').addClass('on');
		} else if (byte.length == 5) {
			$('.input_mark .mark i:eq(0), .input_mark .mark i:eq(1), .input_mark .mark i:eq(2), .input_mark .mark i:eq(3), .input_mark .mark i:eq(4)').addClass('on');
		} else if (byte.length == 6) {
			$('.input_mark .mark i:eq(0), .input_mark .mark i:eq(1), .input_mark .mark i:eq(2), .input_mark .mark i:eq(3), .input_mark .mark i:eq(4), .input_mark .mark i:eq(5)').addClass('on');
		} else {
			$('.input_mark .mark i').removeClass();
		}
		// console.log(byte.length);
	});*/
});

//하단 고정 영역 여백 확보
$(function(){
	function wrapPadding(){
		var btmFix = $('.fix_btm_btn');
		if(btmFix.length > 0){
			var btmValue = $(btmFix).innerHeight();
			$('#wrap').css('padding-bottom',btmValue);
		}
	}
	wrapPadding();
	$(window).resize(function(){
		wrapPadding();
	});
});

//메뉴 토글
$(function(){
	$('.header .btn_nav').click(function(){
		$('.ly_nav').show();
		$('.ly_nav .cont').animate({right: '0'});
	});
	$('.ly_nav .btn_cls, .ly_nav .bg').click(function(){
		$('.ly_nav .cont').animate({right: '-85%'});
		$('.ly_nav').fadeOut();
	});
});

//셀렉트 옵션 레이어(팝업 리스트) 열기
$(function(){
	$('.select_pop').click(function(){
		var selectId = $(this).attr('id');
		var optionLayer = '#ly_'+selectId;
		$(optionLayer).parent('.ly_pop').show();
		
		//셀렉트 옵션 선택(텍스트 전달)
		$(optionLayer).find('.btn').click(function(){
			var thisOption = $(this).text();
			$('#'+selectId).text(thisOption);
		});
	});
});

//계좌개설 신청 스텝
$(function(){
	/*
	//스텝 바디 플립
	$('.step .step_body').hide();
	//클릭 열기(step1)
	$('.btn_step_open').click(function(){
		$(this).parents('.step').find('.step_body').slideDown('500');
	});
	//자동 열기(step 2~4)
	setTimeout(function(){
		$('.step.open .step_body').slideDown('500');
	}, 500);
	
	*/
	//팝업 버튼 리스트 선택(알뜰폰 통신사, 금융정보 입력 셀렉트박스 )
	$('.btn_list .btn').click(function(){
		$(this).parents('.btn_list').find('.btn').removeClass('on');
		$(this).addClass('on');
		layer_close();
	});
});

//뒤로가기 버튼
function goBack() {
	window.history.back();
}