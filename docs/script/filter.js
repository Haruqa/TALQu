$(function(){
    function executeFilterOr(){
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
    }
    function executeFilterKN(){
        //all hide 
        $('[name="filterOr"]').each(function(index, element){
            $('.' + $(element).val()).hide();
        });

        //add filter
        var itemList = [];
        var checked = false;
        var checked2 = false;
        $('[name="filterKoebetu"]').each(function(index, element){
            //all item
            $(".item").each(function(i, item){
                if($(element).prop('checked')){
                    if(item.classList.contains($(element).val())){
                        //$(item).show();
                        if(!itemList.includes(item)){
                            itemList.push(item);
                        }
                    }
                    checked = true;
                }
            });
        });
        
        if(checked){
            $('[name="filterNenre"]').each(function(index, element){
                itemList.forEach(function(item){
                    if($(element).prop('checked')){
                        if(item.classList.contains($(element).val())){
                            $(item).show();
                        }
                        checked2 = true;
                    }
                });
            });

        }
        else{
            $('[name="filterNenre"]').each(function(index, element){
                //all item
                $(".item").each(function(i, item){
                    if($(element).prop('checked')){
                        if(item.classList.contains($(element).val())){
                            $(item).show();
                        }
                        checked2 = true;
                    }
                });
            });
        }
        if(!checked2){
            itemList.forEach(function(item){
                $(item).show();
            });
        }
        
        if(!checked && !checked2){
            executeFilterOr();
            enabledOtherFilter();
        }else{
            disabledOtherFilter();
        }
    }
    function executeFilterAdd(){
        //all hide 
        $('[name="filterOr"]').each(function(index, element){
            $('.' + $(element).val()).hide();
        });

        //add filter
        var checked = false;
        $('[name="filterAdd"]').each(function(index, element){
            //all item
            $(".item").each(function(i, item){
                if($(element).prop('checked')){
                    if(item.classList.contains($(element).val())){
                        $(item).show();
                    }
                    checked = true;
                }
            });
        });

        if(!checked){
            executeFilterOr();
            executeFilterKN();
        }
    }
    function disabledOtherFilter(){
        $('[name="filterAdd"]').each(function(index, element){
            element.checked = false;
            element.disabled = true;
        });
    }
    function enabledOtherFilter(){
        $('[name="filterAdd"]').each(function(index, element){
            element.disabled = false;
        });
    }
    $(document).ready(function(){
        executeFilterOr()
    });
    $('[name="filterOr"]').change(function(){
        executeFilterOr();
    });
    $('[name="filterKoebetu"]').change(function(){
        executeFilterKN();
    });
    $('[name="filterNenre"]').change(function(){
        executeFilterKN();
    });
    $('[name="filterAdd"]').change(function(){
        executeFilterAdd();
    });
});
