$(function(){
    function executeFilter(){
        //all show 
        $('[name="filterOr"]').each(function(index, element){
            $('.' + $(element).val()).show();
        });
        //hide
        $('[name="filterOr"]').each(function(index, element){
            if($(element).prop('checked')){

            }else{
                $('.' + $(element).val()).hide();
            }
        });

        $('[name="filterAnd"]').each(function(index, element){
            if($(element).prop('checked')){
                $('.no' + $(element).val()).hide();
            }else{
                $('.' + $(element).val()).hide();
            }
        });
        
    }
    $(document).ready(function(){
        executeFilter()
    });
    $('[name="filterOr"]').change(function(){
        executeFilter();
    });
    $('[name="filterAnd"]').change(function(){
        executeFilter();
    });
});
