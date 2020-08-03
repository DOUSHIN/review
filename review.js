$(function(){

  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];

    let sum = 0;
    for(let i = 0;i<subject_points.length;i++){
      sum = sum + subject_points[i];
    }
    $('#sum_indicate').text(sum);

    let average = sum/subject_points.length;
    $('#average_indicate').text(average);
  };

  function get_achievement(){
    let averageindicate = $('#average_indicate').text();
    if(averageindicate >= 80){
      return "A";
    }else if(averageindicate >= 60){
      return "B";
    }else if(averageindicate >= 40){
      return "C";
    }else{
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];

    let judge = "合格";
    for(let i = 0;i<subject_points.length;i++){
      if(subject_points[i]<60){
        judge = "不合格";
        break;
      }
    }
    return judge;
  };


  $('#national_language','#english','#mathematics','#science','#society').change(function(){
    score_indicate();
  });

  $('#btn_evaluation').on('click',function(){
    $('#evaluation').text(get_achievement());
  });

  $('#btn_judge').on('click',function(){
    $('#judge').text(get_pass_or_failure());
  });

  $('#btn_declaration').on('click',function(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').text(`あなたの成績は${achievement}です。${pass_or_failure}です。`);
  });
});
