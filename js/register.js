const DOMstrings = {
    stepsBtnClass: 'multisteps__prog-btn',
    stepsBtns: document.querySelectorAll(`.multisteps__prog-btn`),
    stepsBar: document.querySelector('.multisteps__prog'),
    stepsForm: document.querySelector('.multisteps__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps__textarea'),
    stepFormPanelClass: 'multisteps__panel',
    stepFormPanels: document.querySelectorAll('.multisteps__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
};



const removeClasses = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};

const findParent = (elem, parentClass) => {
    let currentNode = elem;
    while (!currentNode.classList.contains(parentClass)) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};

const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

const setActiveStep = activeStepNum => {
    removeClasses(DOMstrings.stepsBtns, 'js-active');
    DOMstrings.stepsBtns.forEach((elem, index) => {
        if (index <= activeStepNum) {
            elem.classList.add('js-active');
        }
    });
};

const getActivePanel = () => {
    let activePanel;
    DOMstrings.stepFormPanels.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};

const setActivePanel = activePanelNum => {
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
    DOMstrings.stepFormPanels.forEach((elem, index) => {
        if (index === activePanelNum) {
            elem.classList.add('js-active');
            setFormHeight(elem);
        }
    });
};

const formHeight = activePanel => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
    const activePanel = getActivePanel();
    formHeight(activePanel);
};

DOMstrings.stepsBar.addEventListener('click', e => {

    const eventTarget = e.target;
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
        return;
    }

    const activeStep = getActiveStep(eventTarget);
    setActiveStep(activeStep);
    setActivePanel(activeStep);
});

DOMstrings.stepsForm.addEventListener('click', e => {
    const eventTarget = e.target;
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
        return;
    }

    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
        activePanelNum--;
    } else {
        activePanelNum++;
    }

    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);

});

window.addEventListener('load', setFormHeight, false);

window.addEventListener('resize', setFormHeight, false);

const setAnimationType = newType => {
    DOMstrings.stepFormPanels.forEach(elem => {
        elem.dataset.animation = newType;
    });
};



document.addEventListener("DOMContentLoaded", function () {
    // ===== 成立日期
    var creationDate = document.getElementById("creationDate");
    var creationDateYet = document.getElementById("creationDateYet");
    var today = new Date().toISOString().split('T')[0];
    creationDate.setAttribute('max', today);
    var uniformNum = document.getElementById('uniformNum');

    creationDateYet.addEventListener("change", function () {
        if (creationDateYet.checked) {
            creationDate.value = "";
            creationDate.disabled = true;
            uniformNum.value = "";
            uniformNum.placeholder = "後補";
            uniformNum.disabled = true;
            creationDateYet.setAttribute('asp-for', 'CreationDate');
            creationDate.removeAttribute('asp-for');
        } else {
            creationDate.disabled = false;
            uniformNum.placeholder = "";
            uniformNum.disabled = false;
            creationDate.setAttribute('asp-for', 'CreationDate');
            creationDateYet.removeAttribute('asp-for');
        }
    });


    // ===== 通訊地址同上
    var creationAdd = document.getElementById("companyAdd");
    var creationLocalAdd = document.getElementById("locationOfCompany");
    var sameAdd = document.getElementById('sameAdd');

    sameAdd.addEventListener("change", function () {
        if (sameAdd.checked) {
            creationLocalAdd.value = creationAdd.value;
        }
    });
    creationLocalAdd.addEventListener("change", function () {
        sameAdd.checked = false;
    });
});


// ================檢查Email
function checkTheEmail() {
    var email = $("#email").val();
    $.ajax({
        url: '@Url.Action("CheckEmail", "Account")',
        type: "POST",
        data: { email: email },
        success: function (result) {
            var checkEmail = $(".checkEmail");
            var nextButton = $(".partTwoBtn");
            switch (result) {
                case "NoText":
                    checkEmail.text("檢查").removeClass("invalid").removeClass("valid");
                    nextButton.prop("disabled", true);
                    break;
                case false: //沒有相同
                    checkEmail.text("檢查").removeClass("invalid").addClass("valid");
                    nextButton.prop("disabled", false);
                    checkRequiredGroup("partTwo", "partTwoBtn");
                    break;
                case true:
                    checkEmail.text("此Email已註冊過。").removeClass("valid").addClass("invalid");
                    nextButton.prop("disabled", true);
                    break;
                default:
                    checkEmail.text("Email格式不正確。").removeClass("valid").addClass("invalid");
                    nextButton.prop("disabled", true);
                    break;
            }
        },
        error: function (error) {
            console.log("發生錯誤！", error.responseText);
        }
    });
}
// ================必填通知
function checkRequired() {
    var inputItem = $(this); // 當前失去焦點的 input 元素
    var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
    var label = $("label[for='" + inputId + "']").text(); // 獲取與 input 元素相關聯的 label 的文本內容
    var warningBox = $("#errorBox");
    if (inputItem.val().trim() === '') {
        warningBox.text(label + " 是必填欄位，請填上歐！").addClass("show");
    } else {
        warningBox.text("").removeClass("show");
    }
}

// ================必傳通知
function checkUpload() {
    var inputItem = $(this); // 當前失去焦點的 input 元素
    var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
    var fileName = $("." + inputId).text(); // 獲取與 input 元素相關聯的 div 的文本內容
    var warningBox = $("#errorBox");
    if (inputItem.val().trim() === '') {
        warningBox.text(fileName + " 是必需上傳的資料，請點擊檔案唷！").addClass("show");
    } else {
        warningBox.text("").removeClass("show");
    }
}
// ================頁檢查
function checkRequiredGroup(groupClass, nextBtn) {
    var allFilled = true;
    var submitButton = $(".registerSubmit");
    var nextButton = $("." + nextBtn);

    $("." + groupClass).each(function () {
        if ($(this).val().trim() === '') {
            allFilled = false;
            return false;
        }
    });

    if (allFilled) {
        submitButton.prop("disabled", false);
        nextButton.prop("disabled", false);
    } else {
        submitButton.prop("disabled", true);
        nextButton.prop("disabled", true);
    }
}
// ================第一頁檢查
function CreateYetRequired() {
    var allFilled = true;
    var submitButton = $(".registerSubmit");
    var nextButton = $(".partOneBtn");

    if ($("#creationDateYet").is(":checked")) {
        $(".partOne:not(#creationDate, #uniformNum)").each(function () {
            if ($(this).val().trim() === '') {
                allFilled = false;
                return false;
            }
        });
    } else {
        $(".partOne").each(function () {
            if ($(this).val().trim() === '') {
                allFilled = false;
                return false;
            }
        });
    }

    if (allFilled) {
        submitButton.prop("disabled", false);
        nextButton.prop("disabled", false);
    } else {
        submitButton.prop("disabled", true);
        nextButton.prop("disabled", true);
    }
}
// ================最後頁檢查
function checkFilesRequiredGroup(groupClass) {
    var allFilled = true;
    var submitButton = $(".registerSubmit");

    $("." + groupClass).each(function () {
        if ($(this).text().trim() === '') {
            allFilled = false;
            return false;
        }
    });

    if (allFilled) {
        submitButton.prop("disabled", false);
    } else {
        submitButton.prop("disabled", true);
    }
}
$(document).ready(function () {
    // // 當 #email 失去焦點時觸發檢查
    // $("#email").blur(checkTheEmail);
    // // 畫面載入時，如果 #email 已經有值就進行驗證
    // if ($("#email").val() !== "") {
    //     checkTheEmail();
    // }


    $(".requiredItem").blur(checkRequired);
    $(".requiredFile").blur(checkUpload);


    $(".partTwo").blur(function () {
        checkRequiredGroup("partTwo", "partTwoBtn");
    });
    $(".partThree").blur(function () {
        checkRequiredGroup("partThree", "partThreeBtn");
    });
    if ($(".partThree").val() !== "") {
        checkRequiredGroup("partThree", "partThreeBtn");
    }


    $("#creationDateYet").change(function () {
        CreateYetRequired();
    });

    $(".partOne").blur(function () {
        CreateYetRequired();
    });
    $(".requiredFile").blur(function () {
        checkFilesRequiredGroup("fileInfo");
    });

});




