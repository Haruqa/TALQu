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

        //and filter
        $('[name="filterAnd"]').each(function(index, element){
            //all item
            $(".item").each(function(i, item){
                if($(element).prop('checked')){
                    if(item.classList.contains($(element).val())){
                        $(item).show();
                    }else{
                        $(item).hide();
                    }
                }
                else{
                    if(item.classList.contains($(element).val())){
                        $(item).hide();
                    }
                }
                
            });
        });

        var addFilterFlg = false;
        //add filter チェックされたらそれを持たないアイテムを隠す
        $('[name="filterAdd"]').each(function(index, element){
            //all item
            $(".item").each(function(i, item){
                if($(element).prop('checked')){
                    if(item.classList.contains($(element).val())){
                        $(item).show();
                    }else{
                        $(item).hide();
                    }
                    addFilterFlg = true;
                }
            });
        });

        if(addFilterFlg){
            //ORフィルタのhide
            $('[name="filterOr"]').each(function(index, element){
                if($(element).prop('checked')){

                }else{
                    $('.' + $(element).val()).hide();
                }
            });
        }
        
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
    $('[name="filterAdd"]').change(function(){
        executeFilter();
    });
});
