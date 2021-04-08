

function showText(x) {

        
    const textContainer = document.getElementById("toggle-text-container");
    const textOption = [document.getElementById(`toggle-text-loreto`),document.getElementById(`toggle-text-durham`),document.getElementById(`toggle-text-justit`)];
    const textOptionCard = [document.getElementById(`hover-card-loreto`),document.getElementById(`hover-card-durham`),document.getElementById(`hover-card-justit`)];

    let option =  x;    

    let card = document.getElementById(`hover-card-${option}`)

    let text = document.getElementById(`toggle-text-${option}`);


    if(check_visibility(textContainer)===false){
        //turning on text and box when 
        if(check_visibility_display(text) ===false){
            toggle_visibility_display(text);
        }
        toggle_visibility(textContainer);
        toggle_visibility(text);
        toggle_active(card);


    }else{

        if(check_visibility(text) === true){
            toggle_visibility(textContainer);
            toggle_visibility(text);
            toggle_active(card);
            check_visibility_finished(text);
            toggle_visibility_display(text)
        }else{

            for(let i = 0; i <3; i++){
                if(check_visibility(textOption[i])===true){

                    toggle_visibility(textOption[i]);
                    toggle_active(textOptionCard[i]);
                    check_visibility_finished(textOption[i]);
                    toggle_visibility_display(textOption[i]);
                    toggle_visibility_display(text);
                    toggle_visibility(text);
                    toggle_active(card);
                }
            }

            }   
    }
}

function toggle_active(div){
    let el = div;
    if (el.classList.contains("hover-card-active")) {
        el.classList.remove("hover-card-active");
    } else {
        el.classList.add("hover-card-active");
    }
}

function check_visibility(div){
    let el = div
    let status = false;
    if(el.classList){
    if (el.classList.contains('hide')) {
      status = false;
    } else {
      status = true;
    }
    }else{
        status = false;
    }

    return status;
}

function toggle_visibility(div){
    let el = div
    if (el.classList.contains('hide')) {
      el.classList.remove('hide');
    } else {
      el.classList.add('hide');
    }
}

function check_visibility_display(div) {
    var e = div;
    var status = false;
    if (e.style.display){
    e.style.display = ((e.style.display!='none') ? status = true : status = false);
    }
    else {status = false}

    return status;
}

function toggle_visibility_display(div) {
    var e = div;
    if (e.style.display){
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    }
    else {e.style.display='block'}
}
 
function check_visibility_finished(div){
    if(div.style.hieght !== 0){
        while(div.style.display !== 0 ){
            return false;
        }
    }   
    
}